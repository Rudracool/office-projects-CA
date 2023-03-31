
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}