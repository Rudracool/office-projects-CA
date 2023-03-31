// Model.js
// -----------------------
// @module Case
define("CA.PDPCustomization.PDPCustomization.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/PDPCustomization/SuiteScript2/PDPCustomization.Service.ss"
            ),
            true
        )
});
});
