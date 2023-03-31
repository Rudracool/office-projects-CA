// Model.js
// -----------------------
// @module Case
define("CA.CustomCMSPageLayout.CustomCMSPageLayout.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/CustomCMSPageLayout/SuiteScript2/CustomCMSPageLayout.Service.ss"
            ),
            true
        )
});
});
