
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}