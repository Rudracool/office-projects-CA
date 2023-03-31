
define(
	'cloudAlp.giftCertificateMessage.giftCertificateMessage'
,   [
		'giftCertificateMessage.giftCertificateMessage.View'
	]
,   function (
		giftCertificateMessageView
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
			// var checkout = container.getComponent('Checkout');
			// var cart = container.getComponent('Cart');
			// var GiftData=[];
			// cart.getLines().done((result)=>{
			// 	_.find(result,function(data){
			// 		GiftData.push(data.itemtype);
			// 	})
			// })
			// var Data = GiftData.includes("GiftCert");
			
			// if(Data == true){
			// 	checkout.addModuleToStep(
			// 		{
			// 		  step_url: 'opc' // the place you want to add it to, think of this like an ID. You can log the step or group info to the console to find the one you're looking for
			// 		, module: {
			// 			id: 'giftCertificatemessage' // the ID you want to give it
			// 		  , index:10 // its place in the order of modules (if it matches an existing one, it is pushed down)
			// 		  , classname: 'giftCertificateMessage.giftCertificateMessage.View' // the name of the thing you want to render (ie the value in the view's define statement)
			// 		  }
			// 		});
			  
			// 		checkout.addModuleToStep(
			// 		{
			// 		  step_url: 'review'
			// 		, module: {
			// 			id: 'giftCertificatemessage'
			// 		  , index:6
			// 		  , classname: 'giftCertificateMessage.giftCertificateMessage.View'
			// 		  }
			// 		});

			// }
			
			

		}
	};
});
