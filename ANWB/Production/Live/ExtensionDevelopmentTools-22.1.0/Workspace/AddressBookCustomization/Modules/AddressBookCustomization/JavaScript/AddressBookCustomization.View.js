// @module CA.AddressBookCustomization.AddressBookCustomization
define('CA.AddressBookCustomization.AddressBookCustomization.View'
,	[
	'ca_addressbookcustomization_addressbookcustomization.tpl'
	
	
	,	'Backbone'
    ]
, function (
	ca_addressbookcustomization_addressbookcustomization_tpl
	
	
	,	Backbone
)
{
    'use strict';

	// @class CA.AddressBookCustomization.AddressBookCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_addressbookcustomization_addressbookcustomization_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new AddressBookCustomizationModel();
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

		//@method getContext @return CA.AddressBookCustomization.AddressBookCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class CA.AddressBookCustomization.AddressBookCustomization.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
