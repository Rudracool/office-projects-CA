
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.TrackOrderCustomization.TrackOrderCustomization.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.TrackOrderCustomization.TrackOrderCustomization.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}