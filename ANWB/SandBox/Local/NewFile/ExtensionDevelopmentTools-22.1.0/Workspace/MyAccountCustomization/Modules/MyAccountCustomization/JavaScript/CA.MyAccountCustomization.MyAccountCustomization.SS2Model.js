// Model.js
// -----------------------
// @module Case
define("CA.MyAccountCustomization.MyAccountCustomization.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/MyAccountCustomization/SuiteScript2/MyAccountCustomization.Service.ss"
            ),
            true
        )
});
});
