// ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf.js
// Load all your starter dependencies in backend for your extension here
// ----------------

define('ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf'
,	[
		'ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf.ServiceController',
		'SC.Model',
    'SC.Models.Init',
    'Application',
    'StoreItem.Model',
    'SiteSettings.Model',
    'Utils',
    'underscore',
    'Transaction.Model',
    'Configuration'
	]
,	function (
		ReorderExtensionsListHeaderPdfServiceController,
		SCModel,
		ModelsInit,
		Application,
		StoreItem,
		SiteSettings,
		Utils,
		_,
		Transaction,
		Configuration
	)
{
	'use strict';
	return SCModel.extend({
        // @property {String} name
        name: 'ReorderItemExtension',
        
        // PdfDataGet : function PdfDataGet(){
        //       var customData={};
        //     try {
        //         var htmlFile= nlapiLoadFile('1010302').getValue();
        //         //  customData={
		// 			customData.htmlTextFile= htmlFile;
        //         // };
        //         console.warn(JSON.stringify(htmlFile),"NlapiFile");
        //         // var array=[customData];
                
        //     } catch (error) {
		// 		console.warn(JSON.stringify(error),"Error Data");
                
				
        //     }
		// 	return customData;
          
        // }

    });
});