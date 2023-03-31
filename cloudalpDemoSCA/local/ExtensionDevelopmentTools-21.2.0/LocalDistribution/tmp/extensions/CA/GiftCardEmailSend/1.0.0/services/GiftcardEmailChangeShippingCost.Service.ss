
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.GiftCardEmailSend.GiftcardEmailChangeShippingCost.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.GiftCardEmailSend.GiftcardEmailChangeShippingCost.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}