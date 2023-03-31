// @module CA.stockDetailsInPurchaseHistory.stockDetailsInPurchaseHistory
define('CA.stockDetailsInPurchaseHistory.stockDetailsInPurchaseHistory.View'
,	[
	'ca_stockdetailsinpurchasehistory_stockdetailsinpurchasehistory.tpl'
	
	,	'CA.stockDetailsInPurchaseHistory.stockDetailsInPurchaseHistory.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_stockdetailsinpurchasehistory_stockdetailsinpurchasehistory_tpl
	
	,	stockDetailsInPurchaseHistorySS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.stockDetailsInPurchaseHistory.stockDetailsInPurchaseHistory.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_stockdetailsinpurchasehistory_stockdetailsinpurchasehistory_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new stockDetailsInPurchaseHistoryModel();
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

		//@method getContext @return CA.stockDetailsInPurchaseHistory.stockDetailsInPurchaseHistory.View.Context
	,	getContext: function getContext()
		{
			//@class CA.stockDetailsInPurchaseHistory.stockDetailsInPurchaseHistory.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
