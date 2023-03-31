
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.customFacetsItem.customFacetsItem.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.customFacetsItem.customFacetsItem.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}