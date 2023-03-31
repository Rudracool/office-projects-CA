
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.surchargeCreditcard.surchargeCreditcard.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.surchargeCreditcard.surchargeCreditcard.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}