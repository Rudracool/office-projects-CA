
define(
	'CA.stockDetailsInPurchaseHistory.stockDetailsInPurchaseHistory'
,   [
		'CA.stockDetailsInPurchaseHistory.stockDetailsInPurchaseHistory.View',
		'ProductLine.Stock.View'
	]
,   function (
		stockDetailsInPurchaseHistoryView
		,ProductLineStockView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			_.extend(ProductLineStockView.prototype,{
				getContext:_.wrap(ProductLineStockView.prototype.getContext,function getContext(fn) {
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					var data=this.model.get('item').get('itemtype');
					if(data === 'NonInvtPart'){
						// console.log(this.stock_info.isNotAvailableInStore);
						
					
							this.stock_info.isNotAvailableInStore = false;
						
						this.stock_info.isInStock = false;
						
						// context.showOutOfStockMessage = this.model.get('item').get('outofstockmessage');
						console.log(this.stock_info);
						context.isChanges = this.model.get('item').get('itemtype') === 'NonInvtPart'? this.stock_info.outOfStockMessage : 'This item is no longer available';
					}
					return context;
				})
			})
			

		}
	};
});
