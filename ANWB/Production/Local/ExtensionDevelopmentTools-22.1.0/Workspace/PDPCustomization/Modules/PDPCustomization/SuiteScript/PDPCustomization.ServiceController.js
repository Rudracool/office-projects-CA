define("CA.PDPCustomization.PDPCustomization.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "CA.PDPCustomization.PDPCustomization.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {

    },

    post: function post() {

      var sku = this.data.sku;

      var resultArr = [];

      var files = {};

      var filters = [];

      try {

        filters.push(new nlobjSearchFilter('name', null, 'startswith', sku));

        filters.push(new nlobjSearchFilter('folder', null, 'is', Configuration.get('PDPCustomizations').pdfSpecifications));

        var res = nlapiSearchRecord('file', null, filters, [

          new nlobjSearchColumn("name").setSort(false),

          new nlobjSearchColumn("folder"),

          new nlobjSearchColumn("documentsize"),

          new nlobjSearchColumn("url"),

          new nlobjSearchColumn("created"),

          new nlobjSearchColumn("modified"),

          new nlobjSearchColumn("filetype"),

        ]);

        res.forEach(function (element) {

          var fileName = element.getValue("name");

          fileName = fileName.split("_")[0];

          if (fileName == sku) {

            var pdf = {

              name: element.getValue("name"),

              url: element.getValue("url"),

            };

            resultArr.push(pdf);

          }

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
