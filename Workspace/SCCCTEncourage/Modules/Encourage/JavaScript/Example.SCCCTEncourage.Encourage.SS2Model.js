// Model.js
// -----------------------
// @module Case
define("Example.SCCCTEncourage.Encourage.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/Encourage/SuiteScript2/Encourage.Service.ss"
            ),
            true
        )
});
});
