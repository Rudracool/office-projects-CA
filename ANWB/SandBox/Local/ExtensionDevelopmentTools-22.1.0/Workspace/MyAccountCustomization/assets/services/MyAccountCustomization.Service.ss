
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.MyAccountCustomization.MyAccountCustomization.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.MyAccountCustomization.MyAccountCustomization.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}