// @module CA.GiftcertificateMessage.GiftcertificateMessage
define('CA.GiftcertificateMessage.GiftcertificateMessage.View'
,	[
	'ca_giftcertificatemessage_giftcertificatemessage.tpl'
	
	,	'CA.GiftcertificateMessage.GiftcertificateMessage.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_giftcertificatemessage_giftcertificatemessage_tpl
	
	,	GiftcertificateMessageSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.GiftcertificateMessage.GiftcertificateMessage.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_giftcertificatemessage_giftcertificatemessage_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new GiftcertificateMessageModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return CA.GiftcertificateMessage.GiftcertificateMessage.View.Context
	,	getContext: function getContext()
		{
			//@class CA.GiftcertificateMessage.GiftcertificateMessage.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
