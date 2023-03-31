// @module Demo.StockAvailability.StockAvailabilityDemo
define('Demo.StockAvailability.StockAvailabilityDemo.View'
,	[
	'demo_stockavailability_stockavailabilitydemo.tpl'
	
	,	'Demo.StockAvailability.StockAvailabilityDemo.SS2Model'
	
	,	'Backbone'
    ]
, function (
	demo_stockavailability_stockavailabilitydemo_tpl
	
	,	StockAvailabilityDemoSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Demo.StockAvailability.StockAvailabilityDemo.View @extends Backbone.View
	return Backbone.View.extend({

		template: demo_stockavailability_stockavailabilitydemo_tpl

	,	initialize: function (options) {

		
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}
		,localize: function(item) {
			return (
				(item.get('quantityavailable_detail') &&
					item.get('quantityavailable_detail').locations) ||
				[]
			);

			
		}

		//@method getContext @return Demo.StockAvailability.StockAvailabilityDemo.View.Context
	,	getContext: function getContext()
		{
		var custom = this.model.get('quantityavailable_detail').quantityavailable;
		var checkStock=this.model.get('isinstock');
		var any=this.localize(this.model)
		var some=[];
		_.map(any, (x) => some.push(x.quantityavailable));
		const reducer = (accumulator, curr) => accumulator + curr;
		if (!_.isEmpty(some)) {
			var mainDataLocation = some.reduce(reducer);

		}
		var QuantityAvailable;
		if (_.isUndefined(mainDataLocation)) {
			QuantityAvailable = 0
		} else {
			QuantityAvailable = mainDataLocation
		}
		var conditionForIsTrue;
		if (_.isEqual(checkStock, true)) {
			if (_.isEqual(QuantityAvailable, 0)) {

				conditionForIsTrue = false;
			} else {
				conditionForIsTrue = checkStock;
			}
		} else {
			conditionForIsTrue = checkStock;
		}

			return {
				stockMessage:QuantityAvailable,//returns the quantity
				// isInstock:this.model.get('isinstock')//returns boolean value
				isInstock:conditionForIsTrue//returns boolean value


			};
		}
	});
});
