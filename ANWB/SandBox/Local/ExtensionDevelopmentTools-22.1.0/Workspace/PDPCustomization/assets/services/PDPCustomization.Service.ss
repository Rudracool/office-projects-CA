
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.PDPCustomization.PDPCustomization.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.PDPCustomization.PDPCustomization.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}