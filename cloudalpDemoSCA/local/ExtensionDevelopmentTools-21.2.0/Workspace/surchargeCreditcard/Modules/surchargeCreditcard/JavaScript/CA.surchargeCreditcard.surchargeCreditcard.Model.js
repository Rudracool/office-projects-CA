// Model.js
// -----------------------
// @module Case
define("CA.surchargeCreditcard.surchargeCreditcard.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/surchargeCreditcard.Service.ss"
            )
        )
        
});
});
