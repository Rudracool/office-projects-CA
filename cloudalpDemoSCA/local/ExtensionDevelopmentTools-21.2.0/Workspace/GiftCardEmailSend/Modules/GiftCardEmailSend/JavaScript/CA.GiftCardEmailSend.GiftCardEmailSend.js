
define(
	'CA.GiftCardEmailSend.GiftCardEmailSend'
,   [
		'GiftCardEmailSend.GiftCardEmailSend.View'
	,	'OrderWizard.Module.Shipmethod'
	,	'Utils'
	,	'OrderWizard.Module.CartSummary'
	,	'Cart.Summary.View'
	
	]
,   function (
		GiftCardEmailSendView
	,	OrderWizardModuleShipmethod
	,	Utils
	,	OrderWizardModuleCartSummary
	,	CartSummaryView

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
			var checkout = container.getComponent('Checkout');
			var cart = container.getComponent('Cart');
          
			var GiftData=[];

			_.extend(OrderWizardModuleCartSummary.prototype,{
				getContext:_.wrap(OrderWizardModuleCartSummary.prototype.getContext, function getContext(fn){
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					const Model = this._getModel();
					var totalDataCalculation = (10*Model.get('summary').shippingcost)/100;
					context.isShippingCostChange = Model.get('isShippingCostChange');
					if(Model.get('options') !== undefined){
						if(Model.get('options').custbody_custom_gift_certificate_mess !== ''){
							context.isShippingCostChange = true;	
							
						}
						if(Model.get('options').custbody_custom_add_shippingcost !== ''){

							var currentData = Utils.formatCurrency(Number(Model.get('options').custbody_custom_add_shippingcost));
							context.AdditionalShippingCost = currentData;
						}else{
							context.AdditionalShippingCost = Utils.formatCurrency(totalDataCalculation);


						}
					
					}

					
					return context;
	
				})
			})
			cart.getLines().done((result)=>{
				_.find(result,function(data){
					GiftData.push(data.itemtype);
				})
			})
			var Data = GiftData.includes("GiftCert");
			if(Data == true){
				checkout.addModuleToStep(
					{
					  step_url: 'opc' // the place you want to add it to, think of this like an ID. You can log the step or group info to the console to find the one you're looking for
					, module: {
						id: 'giftCertificatemessage' // the ID you want to give it
					  , index:12 // its place in the order of modules (if it matches an existing one, it is pushed down)
					  , classname: 'GiftCardEmailSend.GiftCardEmailSend.View' // the name of the thing you want to render (ie the value in the view's define statement)
					  }
					});
			  
					checkout.addModuleToStep(
					{
					  step_url: 'review'
					, module: {
						id: 'giftCertificatemessage'
					  , index:6
					  , classname: 'GiftCardEmailSend.GiftCardEmailSend.View'
					  }
					});

			}
			
			

		}
	};
});
