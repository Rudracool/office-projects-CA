// Model.js
// -----------------------
// @module Case
define("Demo.StockAvailability.StockAvailabilityDemo.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/StockAvailabilityDemo/SuiteScript2/StockAvailabilityDemo.Service.ss"
            )
        )
        
});
});
