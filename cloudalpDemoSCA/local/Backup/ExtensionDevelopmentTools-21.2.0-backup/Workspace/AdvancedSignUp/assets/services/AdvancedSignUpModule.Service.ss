
function service(request, response)
{
	'use strict';
	try 
	{
		require('Asu.AdvancedSignUp.AdvancedSignUpModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Asu.AdvancedSignUp.AdvancedSignUpModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}