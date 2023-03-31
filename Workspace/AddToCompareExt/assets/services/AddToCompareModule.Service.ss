
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.AddToCompareExt.AddToCompareModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.AddToCompareExt.AddToCompareModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}