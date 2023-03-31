
define(
	'mia.instafeed.instafeedExt'
,   [
		'mia.instafeed.instafeedExt.View'
	,	'Header.View'
	,	'Footer.View'
	,	'Header.MiniCart.View'
	,	'Cart.Summary.View'
	]
,   function (
		instafeedExtView
	,	HeaderView
	,	FooterView
	,	HeaderMiniCartView
	,	CartSummaryView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			var layout = container.getComponent('Layout');
				// layout.on('afterShowContent',()=>{
				// 	if($('#content').find('.home-page').length !== 0){
				// 		$('.shopping-layout-content').addClass('hello')
				// 	}else{
				// 		$('.shopping-layout-content').removeClass('hello')
				// 	}
				// })
				
			// })
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			
			// _.extend(CartSummaryView.prototype,{
			// 	getContext:_.wrap(CartSummaryView.prototype.getContext, function getContext(fn){
			// 		var context = fn.apply(this, _.toArray(arguments).slice(1));
			// 		console.log(context);
			// 		return context;
			// 	})
			// })

			
			if(layout)
			{
				layout.addChildView('instafeed_ext', function() { 
					return new instafeedExtView({ container: container });
				});
			}

		}
	};
});
