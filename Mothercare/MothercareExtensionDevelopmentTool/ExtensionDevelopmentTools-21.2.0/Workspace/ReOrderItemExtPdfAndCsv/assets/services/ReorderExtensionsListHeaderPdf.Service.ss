
function service(request, response)
{
	'use strict';
	try 
	{
		require('ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}