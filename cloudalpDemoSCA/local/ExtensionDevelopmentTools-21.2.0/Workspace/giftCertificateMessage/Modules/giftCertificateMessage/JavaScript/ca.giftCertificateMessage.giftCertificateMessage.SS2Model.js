// Model.js
// -----------------------
// @module Case
define("ca.giftCertificateMessage.giftCertificateMessage.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/giftCertificateMessage/SuiteScript2/giftCertificateMessage.Service.ss"
            ),
            true
        )
});
});
