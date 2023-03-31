
define(
	'CA.surchargeCreditcard.surchargeCreditcard'
,   [
		'CA.surchargeCreditcard.surchargeCreditcard.View'
	,	'LiveOrder.Model'
	,	'OrderWizard.Module.PaymentMethod.Selector'
	,	'OrderWizard.Module.CartSummary'
	,	'Utils'
	]
,   function (
		surchargeCreditcardView
	,	LiveOrderModel
	,	OrderWizardModulePaymentMethodSelector
	,	OrderWizardModuleCartSummary
	,	Utils
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
			var cartData = container.getComponent('Cart');
			
			if (checkout) {
				_.extend(OrderWizardModulePaymentMethodSelector.prototype,{
					initialize:_.wrap(OrderWizardModulePaymentMethodSelector.prototype.initialize, function initialize(fn) {
						fn.apply(this, _.toArray(arguments).slice(1));
						this.oldDataTotalValue = this.wizard.model.get('summary').total;
						this.oldDataTotalValueFormat = this.wizard.model.get('summary').total_formatted;
	
					}),
					selectPaymentMethod:_.wrap(OrderWizardModulePaymentMethodSelector.prototype.selectPaymentMethod, function selectPaymentMethod(fn){
						fn.apply(this, _.toArray(arguments).slice(1));
						const value = this.selectedModule.type;
						var customPaymentMethodData = false;
						if (value == 'invoice') {
							customPaymentMethodData = true;
							var totalDataCalculation = (this.oldDataTotalValue/100)*2;
							var sumtotalData = totalDataCalculation + this.oldDataTotalValue;
							cartData.addPromotion({
								promocode: "surcharge"
							})
							var CustomData = (this.wizard.model.get('options').custbody_surcharge = totalDataCalculation.toString());
							var surchargeTotal =  (this.wizard.model.get('options').custbody_body_type_1 = sumtotalData.toString());
							console.log(sumtotalData);
							// this.wizard.model.get('summary').total = sumtotalData;
							this.wizard.model.save({
								CustomData,
								surchargeTotal,
								customPaymentMethod:customPaymentMethodData
							})
						}else{
							
							var changeCustomField = (this.wizard.model.get('options').custbody_surcharge = '')
							customPaymentMethodData = false;
								cartData.removePromotion({
									promocode_internalid: "47"
								})

							this.wizard.model.save({
								customPaymentMethod:customPaymentMethodData,
								changeCustomField
							})
	
						}
					}),
					totalChange:_.wrap(OrderWizardModulePaymentMethodSelector.prototype.totalChange, function totalChange(fn) {
						fn.apply(this, _.toArray(arguments).slice(1));
					})
				})
				_.extend(OrderWizardModuleCartSummary.prototype,{
					initialize:_.wrap(OrderWizardModuleCartSummary.prototype.initialize, function initialize(fn) {
						fn.apply(this, _.toArray(arguments).slice(1));
	
					}),
					getContext:_.wrap(OrderWizardModuleCartSummary.prototype.getContext, function (fn) {
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						var customPaymentdata= context.model.get('customPaymentMethod');
						var oldValue = context.model.get('summary').total;
						if(this.wizard.model.get('paymentmethod')){

						}
						if(customPaymentdata == undefined){
							context.paymentData = false;
							context.surcharge = '';
						}else{
							
						var surchargeData = context.model.get('summary').total;
						var discountTotalformat = context.model.get('summary').discounttotal;
						var totalDataCalculation = (surchargeData/100)*2;
						var calc = surchargeData + totalDataCalculation;
						var posNum = (discountTotalformat < 0) ? discountTotalformat * -1 : discountTotalformat; 
						var formatData = Utils.formatCurrency(posNum);
						
						var customTemplatePromo = true;
						var promo = this.model.get('promocodes');
							if(promo.length !== 0){
								if(promo[0].promocodeid === '47'){

									customTemplatePromo = false
								}else{
									customTemplatePromo = true;
								}
							}
							else{
							
							}
						
						// var totalFormatted = Utils.formatCurrency(calc)
						// context.model.get('summary').total_formatted = totalFormatted;
							context.paymentData = customPaymentdata;
							context.surcharge = formatData;
							context.promocodeCustom = customTemplatePromo;
						}
	
						return context;
					})
				})
				
			}
		


		}
	};
});
