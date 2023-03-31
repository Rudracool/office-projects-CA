// @module CA.MyAccountCustomization.MyAccountCustomization
define('CA.MyAccountCustomization.MyAccountCustomization.View'
,	[
	'ca_myaccountcustomization_myaccountcustomization.tpl'
	
	,	'CA.MyAccountCustomization.MyAccountCustomization.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_myaccountcustomization_myaccountcustomization_tpl
	
	,	MyAccountCustomizationSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.MyAccountCustomization.MyAccountCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_myaccountcustomization_myaccountcustomization_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new MyAccountCustomizationModel();
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

		//@method getContext @return CA.MyAccountCustomization.MyAccountCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class CA.MyAccountCustomization.MyAccountCustomization.View.Context
			// this.message = this.message || 'Hello World!!'
			return {
				// message: this.message
			};
		}
	});
});
