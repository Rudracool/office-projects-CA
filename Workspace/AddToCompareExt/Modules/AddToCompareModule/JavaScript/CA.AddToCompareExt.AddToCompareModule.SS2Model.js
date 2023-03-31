// Model.js
// -----------------------
// @module Case
define("CA.AddToCompareExt.AddToCompareModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/AddToCompareModule/SuiteScript2/AddToCompareModule.Service.ss"
            ),
            true
        )
});
});
