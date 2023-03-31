// Model.js
// -----------------------
// @module Case
define("ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        // urlRoot: Utils.getAbsoluteUrl(
        //     getExtensionAssetsPath(
        //         "services/ReorderExtensionsListHeaderPdf.Service.ss"
        //     )
        // )
        urlRoot: 'services/ReorderItems.Service.ss',
        parse: function parse(record) {
            if (record.item) {
                const item_options = _.filter(record.options, function(option) {
                    return option.value !== '';
                });
    
                record.internalid =
                    record.item.internalid + '|' + JSON.stringify(item_options).replace(/"/g, "'");
            }
            console.log(record,"extensionCustomModel");
            return record;
        }
        
});
});
