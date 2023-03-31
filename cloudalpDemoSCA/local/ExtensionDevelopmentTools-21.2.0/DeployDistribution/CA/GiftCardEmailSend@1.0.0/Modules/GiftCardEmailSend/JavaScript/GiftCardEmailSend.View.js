// @module CA.GiftCardEmailSend.GiftCardEmailSend
define('GiftCardEmailSend.GiftCardEmailSend.View'
,	[
	'ca_giftcardemailsend_giftcardemailsend.tpl'
	,	'GlobalViews.Message.View'
	,	'Backbone'
	,	'Wizard.Module'
	,	'CA.GiftCardEmailSend.GiftCardEmailSend.Model'
	,	'Utils'
    ]
, function (
	ca_giftcardemailsend_giftcardemailsend_tpl
	,	GlobalViewsMessageView
	,	Backbone
	,	WizardModule
	,	GiftCardEmailSendModel
	,	Utils


)
{
    'use strict';

	// @class CA.GiftCardEmailSend.GiftCardEmailSend.View @extends WizardModule
	return WizardModule.extend({

		template: ca_giftcardemailsend_giftcardemailsend_tpl

		,	initialize: function (options) {

			this.model = options.wizard.model;
			
			this.sendEmailModel = new GiftCardEmailSendModel();
			var customShippingCostAdded = this.model.get('options').custbody_custom_add_shippingcost = ''
			var customDataSave2 = this.model.get('options').custbody_custom_gift_certificate_mess = '';
			this.model.save({customShippingCostAdded,customDataSave2});
			
			}
	
		,	events: {
			
			'click [data-action="sendEmaildata"]':'emailForm',
			'click [data-action="saveGiftCard"]':'saveInSalesOrder',
			'click [data-action="sendEmailToReceipant"]':'emailSend'
			}
	
		,	bindings: {
			}
	
		, 	childViews: {
	
			}
		,	emailForm:function(e){
			e.preventDefault();
			this.$('.emailTemplateMailData').addClass('showEmailData');
	
			}
		,	emailSend: function(e){
				e.preventDefault();
				var self = this;
				var textAreaData = this.$('#cust_data_msg').val();
				var emailAddressValue = this.$('#emailTemplateForm').val();
				var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
				
				if(textAreaData !== ''){
					if(emailAddressValue.match(validRegex)){
						this.sendEmailModel.save({
							giftMessage:textAreaData,
							adminEmail:emailAddressValue
						}).done(function(response){
							self.CustomMessage(response.msg,response.status);
							self.$('#emailTemplateForm').val('');
							self.$('#cust_data_msg').val('');
						})
						
						return true;
					}else{
						var messages = 'Please Enter Valid Email Address';
					var type = 'error';
					this.CustomMessage(messages,type);
					return false;
					}
					

				}else{
					var messages = 'Message Field is not Be empty';
					var type = 'error';
					this.ShowMessage(messages,type);
					return false;

				}
				
				
			}
		,	saveInSalesOrder:function(e){
			e.preventDefault();
			var textAreaData = this.$('#cust_data_msg').val();
			var self = this;
			
			if(textAreaData !== ''){
				var customDataSave = this.model.get('options').custbody_custom_gift_certificate_mess = textAreaData;
				var additionalShippingCostValue = this.model.get('summary').shippingcost;
				var totalDataCalculation = (10*additionalShippingCostValue)/100;
				var customShippingCostAdded = this.model.get('options').custbody_custom_add_shippingcost = totalDataCalculation.toString();
				var self = this;
				
				
				
				this.model.save({
					customDataSave,
					customShippingCostAdded,
					isShippingCostChange:true,
				}).done(function(returnData){
					var messages = 'Your Request Successfully Submitted';
					var type = 'success';
					self.ShowMessage(messages,type);
				})
			
			}else{
				var customDataSave2 = this.model.get('options').custbody_custom_gift_certificate_mess = '';
				var customShippingCostAdded2 = this.model.get('options').custbody_custom_add_shippingcost = '';
				
				this.model.save({
					customDataSave2,
					customShippingCostAdded2,
					isShippingCostChange:false,
				})
				var messages = 'Please Write A comment of Gift Certificates';
				var type = 'error';
				this.ShowMessage(messages,type);
			}
			
			
			}
		,	ShowMessage:function(message,Type){
				const global_view_message = new GlobalViewsMessageView({
					message:message,
					type: Type,
					closable: true,
				
				 });
				 var self = this;
				 self.$('[data-type="alert-placeholder"]').html(global_view_message.render().$el.html());
				 setTimeout(function(){
					 self.$('[data-type="alert-placeholder"]').html('');
		   
				 },3000);
			}
		,	CustomMessage:function(message,Type){
				const global_view_message = new GlobalViewsMessageView({
					message:message,
					type: Type,
					closable: true,
				
				 });
				 var self = this;
				 self.$('[data-type="semailMessage"]').html(global_view_message.render().$el.html());
				 setTimeout(function(){

					self.$('[data-type="semailMessage"]').html('');
				  }, 3000);
		   
	
			}
		
			//@method getContext @return ca.giftCertificateMessage.giftCertificateMessage.View.Context
		,	getContext: function getContext()
			{
				//@class ca.giftCertificateMessage.giftCertificateMessage.View.Context
				return {
					isReview: this.options.step.step_url =='review',
					ShowHeader: 'GiftCards Message'
				};
			}
	});
});
