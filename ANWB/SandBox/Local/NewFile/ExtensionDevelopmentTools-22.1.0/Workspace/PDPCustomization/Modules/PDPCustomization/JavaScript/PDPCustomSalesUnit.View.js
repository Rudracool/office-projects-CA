// @module CA.PDPCustomization.PDPCustomization
define('CA.PDPCustomization.PDPCustomSalesUnit.View'
,	[
	'pdp_custom_sales_unit.tpl'	
	,	'Backbone'
    ]
, function (
	pdp_custom_sales_unit_tpl
	,	Backbone
)
{
    'use strict';

	// @class CA.PDPCustomization.PDPCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: pdp_custom_sales_unit_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			this.model = options.model;
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return CA.PDPCustomization.PDPCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class CA.PDPCustomization.PDPCustomization.View.Context
			
			return {
				customSalesUnit:this.model.get('custitem_anwb_sales_unit')
			};
		}
	});
});
