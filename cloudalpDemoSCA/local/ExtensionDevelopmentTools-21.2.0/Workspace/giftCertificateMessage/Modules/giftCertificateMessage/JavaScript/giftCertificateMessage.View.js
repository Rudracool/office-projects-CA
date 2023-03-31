// @module ca.giftCertificateMessage.giftCertificateMessage
define('giftCertificateMessage.giftCertificateMessage.View'
,	[
	'ca_giftcertificatemessage_giftcertificatemessage.tpl'
	
	,	'Backbone'
	,	'Wizard.Module'
	,	'LiveOrder.Model'
	,	'GlobalViews.Message.View'
	,	'ca.giftCertificateMessage.giftCertificateMessage.Model'
    ]
, function (
	ca_giftcertificatemessage_giftcertificatemessage_tpl
	
	,	Backbone
	,	WizardModule
	,	LiveOrderModel
	,	GlobalViewsMessageView
	,	cagiftCertificateMessageModel
)
{
    'use strict';

	// @class ca.giftCertificateMessage.giftCertificateMessage.View @extends Backbone.View
	return WizardModule.extend({

		template: ca_giftcertificatemessage_giftcertificatemessage_tpl

	,	initialize: function (options) {

		this.model = options.wizard.model;
		this.sendEmailModel = new cagiftCertificateMessageModel();
		}

	,	events: {
		
		'click [data-action="sendEmaildata"]':'emailForm',
		'click [data-action="saveGiftCard"]':'saveInSalesOrder'
		}

	,	bindings: {
		}

	, 	childViews: {

		}
	,	emailForm:function(e){
		e.preventDefault();
		this.$('.emailTemplateMailData').addClass('showEmailData');

		}
	,	saveInSalesOrder:function(e){
		e.preventDefault();
		var textAreaData = this.$('#cust_data_msg').val();
		if(textAreaData !== ''){
			var customDataSave = this.model.get('options').custbody_custom_gift_certificate_mess = textAreaData;
			var self = this;
			this.model.save({
				customDataSave
			}).done(function(returnData){
				var messages = 'Your Request Successfully Submitted';
				var type = 'success';
				self.ShowMessage(messages,type);
			})
		
		}else{
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
	   
		  this.$('[data-type="alert-placeholder"]').html(global_view_message.render().$el.html());

		}

		//@method getContext @return ca.giftCertificateMessage.giftCertificateMessage.View.Context
	,	getContext: function getContext()
		{
			//@class ca.giftCertificateMessage.giftCertificateMessage.View.Context
			// this.message = this.message || 'Hello World!!'
			return {
				ShowHeader: 'GiftCards Message'
			};
		}
	});
});
