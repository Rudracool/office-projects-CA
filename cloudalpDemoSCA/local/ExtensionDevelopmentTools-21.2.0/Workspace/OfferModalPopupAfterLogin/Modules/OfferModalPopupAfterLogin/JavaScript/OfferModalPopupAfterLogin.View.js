// @module CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin
define('CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.View'
,	[
	'ca_offermodalpopupafterlogin_offermodalpopupafterlogin.tpl'
	
	,	'CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_offermodalpopupafterlogin_offermodalpopupafterlogin_tpl
	
	,	OfferModalPopupAfterLoginSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_offermodalpopupafterlogin_offermodalpopupafterlogin_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new OfferModalPopupAfterLoginModel();
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

		//@method getContext @return CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.View.Context
	,	getContext: function getContext()
		{
			//@class CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
