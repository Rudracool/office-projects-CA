define("CA.customFacetsItem.customFacetsItem.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "CA.customFacetsItem.customFacetsItem.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      var retString = {};
      try {
        var custRecord = nlapiLoadRecord('customer', nlapiGetUser());
        var fieldValue = custRecord.getFieldValue('custentity_eligible_special_products');
        var numberOfItemPricings = custRecord.getLineItemCount('itempricing');
        var itemIds = [];
        var custantData = [];
        var someData = [];
        for (var i = 1; i <= numberOfItemPricings; i++) {
          var itemID = custRecord.getLineItemValue("itempricing", 'item', i);
          // var isMatrixParent = nlapiLookupField('item', itemID, 'parent');
          var isMatrixParent = nlapiLookupField('item', itemID, 'parent');
          someData.push(itemID);
          // if (isMatrixParent.parent == '') {
          if (isMatrixParent == '') {
            
            itemIds.push(itemID);
          }else{
            itemIds.push(isMatrixParent);
          }
        }
        retString.itemData = someData;

        retString.fieldValue = fieldValue;
        if (itemIds.length!==0) {
          retString.itemIds = itemIds;
        }else{
          retString.itemIdValue = 0;
          retString.itemIds = 'No Items data Found';
        }

        
      } catch (error) {
        retString.error = error;
        
      }
      return retString;

    },

    post: function post() {
      // not implemented
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
