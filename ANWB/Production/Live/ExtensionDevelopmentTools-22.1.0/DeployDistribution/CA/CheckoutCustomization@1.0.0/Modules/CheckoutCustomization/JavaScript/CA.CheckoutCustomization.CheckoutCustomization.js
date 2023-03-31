
define(
	'CA.CheckoutCustomization.CheckoutCustomization'
,   [
		'CA.CheckoutCustomization.CheckoutCustomization.View'
	,	'Profile.Model'
	,	'OrderWizard.Module.Shipmethod'
	,	'OrderWizard.Module.Address'
	,	'Configuration'
	,	'Utils'
	,	'OrderWizard.Module.ShowShipments'
	,	'OrderWizard.Module.Title'
	]
,   function (
		CheckoutCustomizationView
	,	ProfileModel
	,	OrderWizardModuleShipmethod
	,	OrderWizardModuleAddress
	,	Configuration
	,	Utils
	,	OrderWizardModuleShowShipments
	,	OrderWizardModuleTitle

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
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var checkout = container.getComponent('Checkout');
			
			if(layout)
			{
				/**
				* @description remove the payment method title in checkout page/
				*/
				
				_.extend(OrderWizardModuleTitle.prototype,{
					getContext:_.wrap(OrderWizardModuleTitle.prototype.getContext,function getContext(fn){
						var Title = ''
						if((this.getTitle() == 'Betaling')){
							Title = ''
						}else{
							Title = this.getTitle();
						}
						
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						context.title= Title;
						return context;
					})
				})
				// end
				_.extend(OrderWizardModuleShipmethod.prototype,{
					getContext:_.wrap(OrderWizardModuleShipmethod.prototype.getContext, function getContext(fn){
						var self = this;
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						const shipping_methods = this.model.get('shipmethods').map(function(shipmethod) {
							return {
								name: shipmethod.get('name'),
								rate_formatted: shipmethod.get('rate_formatted'),
								internalid: shipmethod.get('internalid'),
								isActive: shipmethod.get('internalid') === self.model.get('shipmethod')
							};
						});
						
						var CustomerSelectedShippingMethod = shipping_methods.filter((data)=>{
							return data.isActive == true
						})
						
						if(CustomerSelectedShippingMethod.length > 0){
							context.CustomerShippingMethodlength = true;
						}else{
							context.CustomerShippingMethodlength = false;
						}
						
						context.CustomerShippingMethod = CustomerSelectedShippingMethod;

						

						var ConfigurationData = Configuration.get('checkoutcustomization');
						
						if(ConfigurationData.deliverymethodMessage !== ''){
							context.deliveryMethodMessage = ConfigurationData.deliverymethodMessage;
						}

						return context;

					})
				})

				_.extend(OrderWizardModuleShowShipments.prototype,{
					getContext:function (){
						const self = this;
						const selected_shipmethod = this.model
							.get('shipmethods')
							.findWhere({ internalid: this.model.get('shipmethod') });
						const shipping_methods = this.model.get('shipmethods').map(function(shipmethod) {
							return {
								name: shipmethod.get('name'),
								rate_formatted: shipmethod.get('rate_formatted'),
								internalid: shipmethod.get('internalid'),
								isActive: shipmethod.get('internalid') === self.model.get('shipmethod')
							};
						});
						var CustomerSelectedShippingMethod = shipping_methods.filter((data)=>{
							return data.isActive == true
						})
						const address_source = this.addressSource.get(this.model.get('shipaddress'));
				
						// @class OrderWizard.Module.ShowShipments.Context
						return {
							// @property {LiveOrder.Model} model
							model: this.model,
							// @property {Boolean} showShippingInformation Indicate if the shipmethod select should be shown or not. Used when in SST all items are non shippable
							showShippingInformation: !!this.model.shippingAddressIsRequired(),
							// @property {Boolean} showShippingAddress
							showShippingAddress: !!address_source,
							// @property {String} editUrl
							editUrl: this.options.edit_url,
							// @property {Boolean} showEditButton
							showEditButton: !!this.options.edit_url,
							// @property {Boolean}
							showSelectedShipmethod: !!selected_shipmethod,
							// @property {Object} selectedShipmethod
							selectedShipmethod: selected_shipmethod,
							// @property {Array} shippingMethods
							shippingMethods: CustomerSelectedShippingMethod,
							// @property {Boolean} showShippingMetod
							showShippingMetod: !this.options.hideShippingMethod,
							// @property {String} shippingAddress
							shippingAddress: !!address_source && address_source.get('fullname')
						};
					}
				})

				_.extend(OrderWizardModuleAddress.prototype,{
					getContext:_.wrap(OrderWizardModuleAddress.prototype.getContext, function getContext(fn){
						var self = this;
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						
						var ConfigurationData = Configuration.get('checkoutcustomization');

						if(ConfigurationData.AddressMessage !== ''){
							context.addressMessage = Utils.translate(ConfigurationData.AddressMessage);
						}

				
						return context;
					})
				})
			}

		}
	};
});
