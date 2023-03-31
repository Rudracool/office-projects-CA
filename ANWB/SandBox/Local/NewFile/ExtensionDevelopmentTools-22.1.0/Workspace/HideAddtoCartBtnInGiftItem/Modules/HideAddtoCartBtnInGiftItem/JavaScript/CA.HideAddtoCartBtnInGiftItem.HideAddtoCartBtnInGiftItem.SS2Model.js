// Model.js
// -----------------------
// @module Case
define("CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/HideAddtoCartBtnInGiftItem/SuiteScript2/HideAddtoCartBtnInGiftItem.Service.ss"
            ),
            true
        )
});
});
