// @module CA.surchargeCreditcard.surchargeCreditcard
define('CA.surchargeCreditcard.surchargeCreditcard.View'
,	[
	'ca_surchargecreditcard_surchargecreditcard.tpl'
	
	
	,	'Backbone'
    ]
, function (
	ca_surchargecreditcard_surchargecreditcard_tpl
	
	
	,	Backbone
)
{
    'use strict';

	// @class CA.surchargeCreditcard.surchargeCreditcard.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_surchargecreditcard_surchargecreditcard_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new surchargeCreditcardModel();
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

		//@method getContext @return CA.surchargeCreditcard.surchargeCreditcard.View.Context
	,	getContext: function getContext()
		{
			//@class CA.surchargeCreditcard.surchargeCreditcard.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
