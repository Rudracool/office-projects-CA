
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.GiftCardEmailSend.GiftCardEmailSend.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.GiftCardEmailSend.GiftCardEmailSend.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}