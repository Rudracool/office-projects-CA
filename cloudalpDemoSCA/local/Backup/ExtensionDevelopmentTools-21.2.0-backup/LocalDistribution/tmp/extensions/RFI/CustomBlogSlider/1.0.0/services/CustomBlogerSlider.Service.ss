
function service(request, response)
{
	'use strict';
	try 
	{
		require('RFI.CustomBlogSlider.CustomBlogerSlider.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('RFI.CustomBlogSlider.CustomBlogerSlider.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}