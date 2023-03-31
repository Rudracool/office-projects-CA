// Model.js
// -----------------------
// @module Case
define("Asu.AdvancedSignUp.AdvancedSignUpModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/AdvancedSignUpModule/SuiteScript2/AdvancedSignUpModule.Service.ss"
            ),
            true
        )
});
});
