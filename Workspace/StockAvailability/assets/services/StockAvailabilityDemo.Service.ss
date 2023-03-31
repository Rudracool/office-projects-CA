
function service(request, response)
{
	'use strict';
	try 
	{
		require('Demo.StockAvailability.StockAvailabilityDemo.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Demo.StockAvailability.StockAvailabilityDemo.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}