// CA.TrackOrderCustomization.TrackOrderCustomization.js
// Load all your starter dependencies in backend for your extension here
// ----------------

define('CA.TrackOrderCustomization.TrackOrderCustomization'
,	[
		'CA.TrackOrderCustomization.TrackOrderCustomization.ServiceController'
	,	'OrderHistory.Model'
	,	'Application'
	,	'bignumber'
	,	'Utils'
	,	'Models.Init'
	]
,	function (
		TrackOrderCustomizationServiceController
	,	OrderHistoryModel
	,	Application
	,	BigNumber
	,	Utils
	,	ModelsInit
	)
{
	'use strict';

	OrderHistoryModel.getExtraRecordFields =  function () {
		this.getReceipts();

		this.getReturnAuthorizations();

		var origin = 0;
		var applied_to_transaction;

		var source = this.record.getFieldValue('source');

		if (
			this.isSCISIntegrationEnabled &&
			this.isSCISSource(source) &&
			this.record.getFieldValue('location') &&
			nlapiLookupField(
				this.result.recordtype,
				this.result.internalid,
				'location.locationtype'
			) === Configuration.get('locationTypeMapping.store.internalid')
		) {
			origin = 1; // store
		} else if (source) {
			origin = 2; // online
		}

		this.result.origin = origin;

		if (this.result.recordtype === 'salesorder') {
			applied_to_transaction = _(
				_.where(this.result.receipts || [], {
					recordtype: 'invoice'
				})
			).pluck('internalid');
		} else if (this.result.recordtype === 'invoice') {
			applied_to_transaction = [this.result.internalid];
		}

		this.getFulfillments();

		if (applied_to_transaction && applied_to_transaction.length) {
			this.getAdjustments({
				paymentMethodInformation: true,
				appliedToTransaction: applied_to_transaction
			});
		}

		this.result.ismultishipto = this.record.getFieldValue('ismultishipto') === 'T';

		this.getLinesGroups();

		this.result.receipts = _.values(this.result.receipts);

		// @property {Boolean} isReturnable
		this.result.isReturnable = this.isReturnable();

		this.getPaymentEvent();

		// @property {Boolean} isCancelable
		this.result.isCancelable = this.isCancelable();

		// addextra field Value

		this.result.anwb_trackingUrl = this.record.getFieldValue('custbody_anwb_trm_item_fulfillment');
	};

	OrderHistoryModel.setExtraListColumns = function () {
		this.columns.anwb_trackingUrl = new nlobjSearchColumn('custbody_anwb_trm_item_fulfillment');
		this.columns.trackingnumbers = new nlobjSearchColumn('trackingnumbers');
		if (this.isSCISIntegrationEnabled) {
			this.columns.origin = new nlobjSearchColumn('formulatext');
			 var formula = "case when LENGTH({source})>0 and {source} <> 'SCIS' then 2 else (case when {location.locationtype.id} = "+Configuration.get(
					'locationTypeMapping.store.internalid'
				).toString()+" then 1 else 0 end) end";
			this.columns.origin.setFormula(formula);
		}

	};
	OrderHistoryModel.mapListResult = function (result, record) {
		result = result || {};
		result.anwb_trackingUrl = record.getValue('custbody_anwb_trm_item_fulfillment') ?
		record.getValue('custbody_anwb_trm_item_fulfillment').split('<BR>') :
		null;
		result.trackingnumbers = record.getValue('trackingnumbers') ?
		record.getValue('trackingnumbers').split('<BR>') :
		null;
		
		if (this.isSCISIntegrationEnabled) {
			result.origin = parseInt(record.getValue(this.columns.origin), 10);
		}
		
		if (this.isCustomColumnsEnabled()) {
			this.mapCustomColumns(result, record);
		}

		return result;
	};
	OrderHistoryModel.getFulfillments = function () {
		if (this.result.recordtype !== 'salesorder') {
			var location = this.record.getFieldValue('location');

			_.each(this.result.lines, function (line) {
				line.quantityfulfilled = line.quantity;
				line.location = location;
			});

			return;
		}

		this.result.fulfillments = {};

		var self = this;
		var filters = [
			new nlobjSearchFilter('internalid', null, 'is', this.result.internalid),
			new nlobjSearchFilter('mainline', null, 'is', 'F'),
			new nlobjSearchFilter('shipping', null, 'is', 'F'),
			new nlobjSearchFilter('taxline', null, 'is', 'F')
		];
		var columns = [
			new nlobjSearchColumn('line'),
			new nlobjSearchColumn('fulfillingtransaction'),
			new nlobjSearchColumn('quantityshiprecv'),

			new nlobjSearchColumn('actualshipdate'),
			new nlobjSearchColumn('quantity'),
			new nlobjSearchColumn('item', 'fulfillingtransaction'),
			new nlobjSearchColumn('shipmethod', 'fulfillingtransaction'),
			new nlobjSearchColumn('shipto', 'fulfillingtransaction'),
			new nlobjSearchColumn('trackingnumbers', 'fulfillingtransaction'),
			new nlobjSearchColumn('trandate', 'fulfillingtransaction'),
			new nlobjSearchColumn('status', 'fulfillingtransaction'),

			// anwb track url
			new nlobjSearchColumn('custbody_anwb_trm_item_fulfillment'),

			// Ship Address
			new nlobjSearchColumn('shipaddress', 'fulfillingtransaction'),
			new nlobjSearchColumn('shipaddress1', 'fulfillingtransaction'),
			new nlobjSearchColumn('shipaddress2', 'fulfillingtransaction'),
			new nlobjSearchColumn('shipaddressee', 'fulfillingtransaction'),
			new nlobjSearchColumn('shipattention', 'fulfillingtransaction'),
			new nlobjSearchColumn('shipcity', 'fulfillingtransaction'),
			new nlobjSearchColumn('shipcountry', 'fulfillingtransaction'),
			new nlobjSearchColumn('shipstate', 'fulfillingtransaction'),
			new nlobjSearchColumn('shipzip', 'fulfillingtransaction')
		];

		var pick_pack_ship_is_enabled = !!Utils.isFeatureEnabled('PICKPACKSHIP');
		var is_uom_enabled =
			ModelsInit.context.getSetting('FEATURE', 'UNITSOFMEASURE') === 'T';

		if (pick_pack_ship_is_enabled) {
			columns.push(new nlobjSearchColumn('quantitypicked'));
			columns.push(new nlobjSearchColumn('quantitypacked'));
		}

		if (is_uom_enabled) {
			columns.push(new nlobjSearchColumn('quantityuom'));
		}

		Application.getAllSearchResults('salesorder', filters, columns).forEach(function (
			ffline
		) {
			var fulfillment_id = ffline.getValue('fulfillingtransaction');
			var line_internalid = self.result.internalid+"_"+ffline.getValue('line');
			var line = _.findWhere(self.result.lines, {
				internalid: line_internalid
			});
			var quantity = new BigNumber(ffline.getValue('quantity'));
			var quantity_uom = ffline.getValue('quantityuom') ?
				new BigNumber(ffline.getValue('quantityuom')) :
				quantity;
			var quantity_fulfilled = new BigNumber(ffline.getValue('quantityshiprecv'));
			var quantity_picked = new BigNumber(ffline.getValue('quantitypicked'));
			var quantity_packed = new BigNumber(ffline.getValue('quantitypacked'));
			var zero = new BigNumber(0);

			if (fulfillment_id) {
				var shipaddress = self.addAddress({
						internalid: ffline.getValue('shipaddress', 'fulfillingtransaction'),
						country: ffline.getValue('shipcountry', 'fulfillingtransaction'),
						state: ffline.getValue('shipstate', 'fulfillingtransaction'),
						city: ffline.getValue('shipcity', 'fulfillingtransaction'),
						zip: ffline.getValue('shipzip', 'fulfillingtransaction'),
						addr1: ffline.getValue('shipaddress1', 'fulfillingtransaction'),
						addr2: ffline.getValue('shipaddress2', 'fulfillingtransaction'),
						attention: ffline.getValue('shipattention', 'fulfillingtransaction'),
						addressee: ffline.getValue('shipaddressee', 'fulfillingtransaction')
					},
					self.result
				);

				self.result.fulfillments[fulfillment_id] = self.result.fulfillments[
					fulfillment_id
				] || {
					internalid: fulfillment_id,
					shipaddress: shipaddress,
					shipmethod: self.addShippingMethod({
						internalid: ffline.getValue('shipmethod', 'fulfillingtransaction'),
						name: ffline.getText('shipmethod', 'fulfillingtransaction')
					}),
					date: ffline.getValue('actualshipdate'),
					trackingnumbers: ffline.getValue('trackingnumbers', 'fulfillingtransaction') ?
						ffline
						.getValue('trackingnumbers', 'fulfillingtransaction')
						.split('<BR>') : null,
					anwb_trackingUrl: ffline.getValue('custbody_anwb_trm_item_fulfillment') ?
						ffline
						.getValue('custbody_anwb_trm_item_fulfillment')
						.split('<BR>') : null,
					lines: [],
					status: {
						internalid: ffline.getValue('status', 'fulfillingtransaction'),
						name: ffline.getText('status', 'fulfillingtransaction')
					}
				};

				self.result.fulfillments[fulfillment_id].lines.push({
					internalid: line_internalid,
					quantity: quantity_fulfilled.toNumber()
				});
			}

			if (line) {
				var conversion_units =
					quantity.gt(zero) && quantity_uom.gt(zero) ?
					quantity.dividedBy(quantity_uom) :
					new BigNumber(1);
				line.quantityfulfilled = quantity_fulfilled;

				if (line.fulfillmentChoice && line.fulfillmentChoice === 'pickup') {
					line.quantitypicked = pick_pack_ship_is_enabled ?
						quantity_picked.minus(line.quantityfulfilled) :
						zero;
					line.quantitybackordered = quantity
						.minus(line.quantityfulfilled)
						.minus(line.quantitypicked);
				} else {
					line.quantitypacked = pick_pack_ship_is_enabled ?
						quantity_packed.minus(line.quantityfulfilled) :
						zero;
					line.quantitypicked = pick_pack_ship_is_enabled ?
						quantity_picked
						.minus(line.quantitypacked)
						.minus(line.quantityfulfilled) :
						zero;
					line.quantitybackordered = quantity
						.minus(line.quantityfulfilled)
						.minus(line.quantitypacked)
						.minus(line.quantitypicked);
					line.quantitypacked = line.quantitypacked
						.dividedBy(conversion_units)
						.toNumber();
				}

				line.quantityfulfilled = line.quantityfulfilled
					.dividedBy(conversion_units)
					.toNumber();
				line.quantitypicked = line.quantitypicked
					.dividedBy(conversion_units)
					.toNumber();
				line.quantitybackordered = line.quantitybackordered
					.dividedBy(conversion_units)
					.toNumber();
			}
		});

		this.result.fulfillments = _.values(this.result.fulfillments);
	};
});