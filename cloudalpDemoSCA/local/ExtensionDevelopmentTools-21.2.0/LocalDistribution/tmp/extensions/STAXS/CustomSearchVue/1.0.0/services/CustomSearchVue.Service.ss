
function service(request, response)
{
	'use strict';
	try 
	{
		require('STAXS.CustomSearchVue.CustomSearchVue.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('STAXS.CustomSearchVue.CustomSearchVue.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}