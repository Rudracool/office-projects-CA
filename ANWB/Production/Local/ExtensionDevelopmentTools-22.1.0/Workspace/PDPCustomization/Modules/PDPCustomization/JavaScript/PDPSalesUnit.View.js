// @module CA.PDPCustomization.PDPCustomization
define('CA.PDPCustomization.PDPSalesUnit.View'
,	[
	    'pdp_sales_unit.tpl'
	,	'Backbone'
    ]
, function (
        pdp_sales_unit_tpl	
	,	Backbone
)
{
    'use strict';

	// @class CA.PDPCustomization.PDPCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: pdp_sales_unit_tpl

	,	initialize: function (options) {
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
				salesUnit: this.model.get('saleunit')
			};
		}
	});
});
