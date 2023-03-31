/*
  © 2022 NetSuite Inc.
  User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
  provided, however, if you are an authorized user with a NetSuite account or log-in, you
  may use this code subject to the terms that govern your access and use.
*/

// PricingMessage.js
// ----------
// Handles fetching of website Item Data custom records
define('PricingMessage', [
  'SC.Model',
  'Application',
  'Utils',
  'SC.Models.Init',
  'underscore'
], function (
  SCModel,
  Application,
  Utils,
  ModelsInit,
  _

) {
  // @class placeOrderCustom.Model Defines the model used by the placeOrderCustom.Service.ss service
  // @extends SCModel
  return SCModel.extend({
    name: 'PricingMessage',

    getMessages: function () {

      var returnString = {};

      try {
        var filters = [];
        var cols = [];

        filters.push(new nlobjSearchFilter('isinactive', null, 'is', 'F'));

        cols.push(new nlobjSearchColumn('name'));
        cols.push(new nlobjSearchColumn('custrecord_brand_name'));
        cols.push(new nlobjSearchColumn('custrecord_message_text'));
        cols.push(new nlobjSearchColumn('custrecord_start_date'));
        cols.push(new nlobjSearchColumn('custrecord_end_date'));

        var results = nlapiSearchRecord('customrecord_pricing_message_reminder', null, filters, cols);
        var resultsArr = [];


        if (results && results.length > 0) {
          results.forEach(function (result) {
            var startDate = new Date(result.getValue('custrecord_start_date'));
            var endDate = new Date(result.getValue('custrecord_end_date'));
            var d_max = '';
            var d_min = '';
            if(startDate > endDate)
            {
              d_max = startDate;
              d_min = endDate
            }
            else{
              d_max = endDate;
              d_min = startDate;
            }
            if(d_max > new Date() && d_min < new Date())
            {
              resultsArr.push({
                name: result.getValue('name'),
                brandName: result.getText('custrecord_brand_name'),
                id: result.getId(),
                messageText: result.getValue('custrecord_message_text'),
                startDate: result.getValue('custrecord_start_date'),
                endDate: result.getValue('custrecord_end_date'),
              });
            }

          });
        }
        if(ModelsInit.session.isLoggedIn2())
        {
          var existingIdsArr = [];
          var newResultArray = [];
          var user = nlapiGetUser();
          var record = nlapiLoadRecord("customer",user);
          var existingIds = record.getFieldValue('custentity_dont_show_message_ids');
          newResultArray = resultsArr;
          if(existingIds !== null)
          {
               existingIdsArr = existingIds.split(',');
               if(existingIdsArr.length)
               {
                 for(var i = 0; i < existingIdsArr.length ; i++)
                 {
                  newResultArray = _.filter(newResultArray,function(res)
                  {
                    return res.id !== existingIdsArr[i];
                  })
                 }
               } 
          }
          returnString.resultsArr = newResultArray;
        }
        else{
          returnString.resultsArr = resultsArr;
        }
        console.warn('resultsArr',JSON.stringify(returnString.resultsArr));
        return returnString;

      } catch (error) {
        return returnString.error;
      }


    },
    setIdsToCustomer: function(data)
    {
        console.warn('id',"setIdsToCustomer");
      try {
        var user = nlapiGetUser();
      
        if(user)
        {
            var record = nlapiLoadRecord("customer",user);
   
            var existingIds = record.getFieldValue('custentity_dont_show_message_ids');
            if(existingIds !== null)
            {
              existingIds = existingIds + ',' + data;
            }
            else{
              existingIds = data;
            }
            record.setFieldValue('custentity_dont_show_message_ids', existingIds);

            return nlapiSubmitRecord(record);
            
        } 
      } catch (error) {
        return error.message;
      }

    }

  });

})