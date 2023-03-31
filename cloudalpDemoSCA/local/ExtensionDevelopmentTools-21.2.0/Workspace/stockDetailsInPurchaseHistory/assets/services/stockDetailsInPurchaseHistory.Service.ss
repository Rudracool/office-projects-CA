
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.stockDetailsInPurchaseHistory.stockDetailsInPurchaseHistory.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.stockDetailsInPurchaseHistory.stockDetailsInPurchaseHistory.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}