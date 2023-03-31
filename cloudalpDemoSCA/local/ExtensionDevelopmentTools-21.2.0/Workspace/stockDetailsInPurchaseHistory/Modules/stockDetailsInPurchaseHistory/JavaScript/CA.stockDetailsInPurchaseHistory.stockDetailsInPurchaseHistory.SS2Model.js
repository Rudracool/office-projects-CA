// Model.js
// -----------------------
// @module Case
define("CA.stockDetailsInPurchaseHistory.stockDetailsInPurchaseHistory.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/stockDetailsInPurchaseHistory/SuiteScript2/stockDetailsInPurchaseHistory.Service.ss"
            ),
            true
        )
});
});
