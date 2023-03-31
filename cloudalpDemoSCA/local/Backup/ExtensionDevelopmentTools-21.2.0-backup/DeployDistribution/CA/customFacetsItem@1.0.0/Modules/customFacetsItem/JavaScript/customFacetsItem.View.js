// @module CA.customFacetsItem.customFacetsItem
define('CA.customFacetsItem.customFacetsItem.View'
,	[
	'ca_customfacetsitem_customfacetsitem.tpl'
	
	,	'CA.customFacetsItem.customFacetsItem.Model'
	
	,	'Backbone'
    ]
, function (
	ca_customfacetsitem_customfacetsitem_tpl
	
	,	customFacetsItemModel
	
	,	Backbone
)
{
    'use strict';

	// @class CA.customFacetsItem.customFacetsItem.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_customfacetsitem_customfacetsitem_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new customFacetsItemModel();
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

		//@method getContext @return CA.customFacetsItem.customFacetsItem.View.Context
	,	getContext: function getContext()
		{
			//@class CA.customFacetsItem.customFacetsItem.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
