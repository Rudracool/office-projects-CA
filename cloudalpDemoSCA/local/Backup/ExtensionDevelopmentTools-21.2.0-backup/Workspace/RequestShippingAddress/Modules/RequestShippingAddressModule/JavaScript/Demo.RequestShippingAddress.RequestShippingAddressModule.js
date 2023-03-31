
define(
	'Demo.RequestShippingAddress.RequestShippingAddressModule'
,   [
		'Demo.RequestShippingAddress.RequestShippingAddressModule.View',

		'Cart.Summary.View',

	    'Profile.Model',

		'Header.MiniCart.View'
	]
,   function (
		RequestShippingAddressModuleView,

		CartSummaryView,

	    ProfileModel,

		HeaderMiniCartView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var userprofilecomponent = container.getComponent("UserProfile");
			
			if(layout)
			{

		
				layout.addChildView('RequestshippingAddress', function() { 
					return new RequestShippingAddressModuleView({ container: container });
				});

			}

			var hideproceedtochkout = true;
				// var cart = container.getComponent("Cart");

			var profile =	ProfileModel.getInstance();

				userprofilecomponent.getUserProfile().done(function(profile) {				
			});

		var cart = container.getComponent("Cart");
		cart.getShipAddress().then(function(shipaddress) {
			console.log("shipaddress",shipaddress);

			if (shipaddress.country.length > 0) { 
				hideproceedtochkout = false;
				container.hideproceedtochkout = hideproceedtochkout
				return new RequestShippingAddressModuleView({ container: container });

			}else{
				hideproceedtochkout = true;
			}
})

_.extend(CartSummaryView.prototype,{
	getContext: _.wrap(CartSummaryView.prototype.getContext, function getContext(fn){
		var ret= fn.apply(this, _.toArray(arguments).slice(1));

		ret.hideproceedtochkout = hideproceedtochkout;
		return ret                        
	})
})
_.extend(HeaderMiniCartView.prototype,{
	getContext: _.wrap(HeaderMiniCartView.prototype.getContext, function getContext(fn){
		var ret= fn.apply(this, _.toArray(arguments).slice(1));

		ret.hideproceedtochkout = hideproceedtochkout;
		return ret                        
	})
})

		}
	};
});
