define("ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf.ServiceController", ["ServiceController","ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf"], function(
  ServiceController,
  ReOrderModelExtensionListHeader
) {
  "use strict";

  return ServiceController.extend({
    name: "ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      // return ReOrderModelExtensionListHeader.PdfDataGet();
       var customData={};
            try {
                var htmlFile= nlapiLoadFile('1010302').getValue();
                //  customData={
					customData.htmlTextFile= htmlFile;
                // };
                // console.warn(JSON.stringify(htmlFile),"NlapiFile");
                // var array=[customData];
                
            } catch (error) {
				console.warn(JSON.stringify(error),"Error Data");
                
				
            }
			return customData;
    },

    post: function post() {
      // not implemented
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
