define("CA.PdpPdf.PDPCustompdf.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "CA.PdpPdf.PDPCustompdf.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      return JSON.stringify({
        message: "Hello World I'm an Extension using a Service!"
      });
    },

    post: function post() { 
    var arrPdf = [];
      var id = this.data.id;
      var sku = this.data.sku;
      var arrFinalPdf = [];
      var resultArr = [];
      var files = {};
      var filters = [];
      try {
        filters.push(new nlobjSearchFilter('name',null,'startswith',sku));
        // filters.push(new nlobjSearchFilter('filetype', null, 'anyof', 'PDF'));
        filters.push(new nlobjSearchFilter('folder', null, 'is','232834')); //Configuration.get('PDPCustompdf').pdfSpecifications
        
        nlapiCreateSearch("file", filters, [
          new nlobjSearchColumn("name").setSort(false),
          new nlobjSearchColumn("folder"),
          new nlobjSearchColumn("documentsize"),
          new nlobjSearchColumn("url"),
          new nlobjSearchColumn("created"),
          new nlobjSearchColumn("modified"),
          new nlobjSearchColumn("filetype"),
        ])
          .runSearch()
          .getResults(0, 999)
          .forEach(function (element) {
            var pdf = {
              name: element.getValue("name"),
              url: element.getValue("url"),
            };
            resultArr.push(pdf);
          });
      } catch (error) {
        nlapiLogExecution("DEBUG", "error", error);
      }    
      files["lengthExtras"] = resultArr;
      return files;
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
