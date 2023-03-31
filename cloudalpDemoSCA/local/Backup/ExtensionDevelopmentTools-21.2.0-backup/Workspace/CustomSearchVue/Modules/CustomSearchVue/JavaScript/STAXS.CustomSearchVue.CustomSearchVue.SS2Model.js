// Model.js
// -----------------------
// @module Case
define("STAXS.CustomSearchVue.CustomSearchVue.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/CustomSearchVue/SuiteScript2/CustomSearchVue.Service.ss"
            ),
            true
        )
});
});
