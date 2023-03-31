
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.HideCheckedFieldCategories.HideCheckedFieldCategories.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.HideCheckedFieldCategories.HideCheckedFieldCategories.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}