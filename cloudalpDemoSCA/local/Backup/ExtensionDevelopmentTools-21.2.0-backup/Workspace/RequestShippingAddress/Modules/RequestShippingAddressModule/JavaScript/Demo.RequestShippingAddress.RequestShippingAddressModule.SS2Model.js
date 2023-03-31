// Model.js
// -----------------------
// @module Case
define("Demo.RequestShippingAddress.RequestShippingAddressModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/RequestShippingAddressModule/SuiteScript2/RequestShippingAddressModule.Service.ss"
            ),
            true
        )
});
});
