// Model.js
// -----------------------
// @module Case
define("CA.customFacetsItem.customFacetsItem.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/customFacetsItem/SuiteScript2/customFacetsItem.Service.ss"
            ),
            true
        )
});
});
