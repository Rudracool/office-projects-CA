// Model.js
// -----------------------
// @module Case
define("ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ReorderExtensionsListHeaderPdf/SuiteScript2/ReorderExtensionsListHeaderPdf.Service.ss"
            ),
            true
        )
});
});
