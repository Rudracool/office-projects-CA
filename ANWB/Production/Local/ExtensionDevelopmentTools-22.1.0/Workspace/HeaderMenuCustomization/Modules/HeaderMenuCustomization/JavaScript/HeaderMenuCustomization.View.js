// @module CA.HeaderMenuCustomization.HeaderMenuCustomization
define('CA.HeaderMenuCustomization.HeaderMenuCustomization.View'
,	[
	'ca_headermenucustomization_headermenucustomization.tpl'
	

	
	,	'Backbone'
    ]
, function (
	ca_headermenucustomization_headermenucustomization_tpl
	
	
	
	,	Backbone
)
{
    'use strict';

	// @class CA.HeaderMenuCustomization.HeaderMenuCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_headermenucustomization_headermenucustomization_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new HeaderMenuCustomizationModel();
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

		//@method getContext @return CA.HeaderMenuCustomization.HeaderMenuCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class CA.HeaderMenuCustomization.HeaderMenuCustomization.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
