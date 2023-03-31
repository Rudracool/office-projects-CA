
define(
	'CA.TrackOrderCustomization.TrackOrderCustomization'
,   [
		'CA.TrackOrderCustomization.TrackOrderCustomization.View'

	,	'OrderHistory.List.View'
	,	'Configuration'
	,	'Backbone'
	,	'Handlebars'
	,	'Backbone.CollectionView'
	,	'RecordViews.Actionable.View'

	,	'Overview.Home.View'
	,	'Utils'	
	,	'RecordViews.View'

	,	'OrderHistory.Packages.View'
	,	'CA.TrackOrderCustomization.TrackOrderHistoryCustomization.View'

	,	'OrderHistory.Details.View'
	]
,   function (
		TrackOrderCustomizationView
	
	,	OrderHistoryListView
	,	Configuration
	,	Backbone
	,	Handlebars
	,	BackboneCollectionView
	,	RecordViewsActionableView

	,	OverviewHomeView
	,	Utils
	,	RecordViewsView

	,	OrderHistoryPackagesView
	,	TrackOrderHistoryCustomizationView

	,	OrderHistoryDetailsView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/**
			* @description order history changes.
			*/

			_.extend(OrderHistoryListView.prototype,{
				_buildResultsView: function() {
					const self = this;
					let selectedColumns = [];
			
					if (!Configuration.get().transactionListColumns.enableOrderHistory) {
						selectedColumns.push({ label: 'Date', id: 'trandate', type: 'date' });
						selectedColumns.push({
							label: 'Amount',
							name: 'amount',
							id: 'amount_formatted',
							type: 'currency'
						});
			
						if (self.isSCISIntegrationEnabled) {
							selectedColumns.push({ label: 'Origin', id: 'origin' });
						} else {
							selectedColumns.push({ label: 'Status', id: 'status', type: 'status' });
						}
					} else {
						selectedColumns = Configuration.get().transactionListColumns.orderHistory;
					}
			
					const records_collection = new Backbone.Collection(
						this.collection.map(function(order) {
							const model = new Backbone.Model({
								title: new Handlebars.SafeString(
									Utils.translate('<span class="tranid">$(0)</span>', order.get('tranid'))
								),
								touchpoint: 'customercenter',
								detailsURL: `/purchases/view/${order.get('recordtype')}/${order.get(
									'internalid'
								)}`,
								recordType: order.get('recordtype'),
								id: order.get('internalid'),
								internalid: order.get('internalid'),
								trackingNumbers: order.get('trackingnumbers'),
								trackingUrl: order.get('anwb_trackingUrl'),
								columns: self._buildColumns(selectedColumns, order)
							});
							return model;
						})
					);
			
					return new BackboneCollectionView({
						childView: RecordViewsActionableView,
						collection: records_collection,
						viewsPerRow: 1,
						childViewOptions: {
							actionView: TrackOrderCustomizationView,
							actionOptions: {
								showContentOnEmpty: true,
								contentClass: 'tracking-order-customization',
								collapseElements: true
							}
						}
					});
				}


			});

			/**
			* @description OverviewHomeView changes the childviews.
			*/
			_.extend(OverviewHomeView.prototype,{
				childViews: _.extend({}, OverviewHomeView.prototype.childViews, {
					/**
					* @description changes the view file in overview on childviews.
					*/
					'Order.History.Results': function() {
						const self = this;
						const records_collection = new Backbone.Collection(
							this.collection.map(function(order) {
								let dynamic_column;

								if (self.isSCISIntegrationEnabled) {
									dynamic_column = {
										label: Utils.translate('Origin:'),
										type: 'origin',
										name: 'origin',
										value: _.findWhere(Configuration.get('transactionRecordOriginMapping'),{
												origin: order.get('origin')
											}
										).name
									};
								} else {
									dynamic_column = {
										label: Utils.translate('Status:'),
										type: 'status',
										name: 'status',
										value: order.get('status').name
									};
								}
			
								const columns = [
									{
										label: Utils.translate('Date:'),
										type: 'date',
										name: 'date',
										value: order.get('trandate')
									},
									{
										label: Utils.translate('Amount:'),
										type: 'currency',
										name: 'amount',
										value: order.get('amount_formatted')
									},
									{
										type: 'tracking-url',
										name: 'trackingUrl',
										compositeKey: 'TrackOrderCustomizationView',
										composite: new TrackOrderCustomizationView({
											model: new Backbone.Model({
												trackingUrl: order.get('anwb_trackingUrl'),
												
											}),
											showContentOnEmpty: true,
											contentClass: 'tracking-order-customization',
											collapseElements: true
										})
									}
									
								];
			
								columns.splice(2, 0, dynamic_column);
			
								const model = new Backbone.Model({
									title: new Handlebars.SafeString(
										Utils.translate('<span class="tranid">$(0)</span>', order.get('tranid'))
									),
									touchpoint: 'customercenter',
									detailsURL: `/purchases/view/${order.get('recordtype')}/${order.get('internalid')}`,
									recordType: order.get('recordtype'),
									id: order.get('internalid'),
									internalid: order.get('internalid'),
									trackingNumbers: order.get('trackingnumbers'),
									trackingUrl: order.get('anwb_trackingUrl'),
									columns: columns
								});
			
								return model;
							})
						);
			
						return new BackboneCollectionView({
							childView: RecordViewsView,
							collection: records_collection,
							viewsPerRow: 1
						});
					}
				})
			})


			/**
			* @description change the layout of order history package to my viewfile
			*/

			_.extend(OrderHistoryPackagesView.prototype,{
				childViews: _.extend({}, OrderHistoryPackagesView.prototype.childViews, {
					TrackingNumbers: function() {
						
						return new TrackOrderHistoryCustomizationView({
							model: new Backbone.Model({ trackingUrl: this.model.get('trackingUrl') }),
							showTrackPackagesLabel: true
						});
					},
				})
			})

			_.extend(OrderHistoryDetailsView.prototype,{
				getOrderPackages: function() {
					
					var shippable_packages = this.getShippablePackages();
					var self = this;
					_.each(shippable_packages,(data)=>{
						data.trackingUrl = self.model.get('anwb_trackingUrl');
						return data;
					})
					
					const instore_packages = this.getInstorePackages();
			
					return shippable_packages.concat(instore_packages);
				},
			})

		}
	};
});
