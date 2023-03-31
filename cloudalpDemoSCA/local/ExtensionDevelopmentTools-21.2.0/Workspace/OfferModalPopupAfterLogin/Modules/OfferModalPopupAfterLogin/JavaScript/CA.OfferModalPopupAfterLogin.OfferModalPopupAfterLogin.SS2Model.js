// Model.js
// -----------------------
// @module Case
define("CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/OfferModalPopupAfterLogin/SuiteScript2/OfferModalPopupAfterLogin.Service.ss"
            ),
            true
        )
});
});
