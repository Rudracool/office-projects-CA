define('Asu.model', [
    'SC.Model',
    'Profile.Model',
    'SC.Models.Init',
    'Utils',
    'underscore',
    'Configuration'
  ], function (
    SCModel,
    Profile,
    ModelsInit,
    Utils,
    _,
    Configuration
  ) {
    return SCModel.extend({
      name: 'Asu',

      validation: {
        email: {
            required: true,
            pattern: 'email',
            msg: 'Valid email is required'
        }
    },

// 'use strict';

Belead :function Belead(data) {

 var  returnobj = {};

  console.warn("bknd Model", data )
  console.warn("bknd data.email", data.email )

    this.validate({ email: data.email });

    var searchFilter = [];
    searchFilter.push(new nlobjSearchFilter('email', null, 'is', data.email));
    // const searchColumnSubscriptionStatus = new nlobjSearchColumn(
    //     'globalsubscriptionstatus'
    // );
    console.warn(" searchFilter", searchFilter );
    
    var customers = nlapiSearchRecord(
        'customer',
        null,
        searchFilter,
        null
        // [searchColumnSubscriptionStatus] 
    );

    console.warn('customers', JSON.stringify(customers));


    // Searching by 'customer' returns 'customer' and 'lead' records alltogether,
    // so we group the records by recordtype: i.e.: 'customer' and 'lead' groups.
    // const records = _.groupBy(customers, function(customer) {
    // 	return customer.getRecordType();
    // });

    // If there's NOT any customer or lead with this email, we set up a lead with globalsubscriptionstatus = 1
    // if (!records.customer && !records.lead) {
      if(customers == null){
        return this.createLeadcustomer(data);
      }
      else{

       
        console.warn("customer exists with this email", data)
        return returnobj.isemailExists = true // "Email already exists";
        // return this.updateLeadcustomer(data);
      }

    
    // }
    // return records.customer
    //     ? this.updateSubscription(records.customer)
    //     : this.updateSubscription(records.lead);
},

createLeadcustomer : function createLeadcustomer(userdata) {
 var returnobj = {};
  try {
    const record = nlapiCreateRecord('lead');
    // record.setFieldValue('entityid', email);
    
    record.setFieldValue('firstname', userdata.firstname);
    record.setFieldValue('lastname', userdata.lastname);
    record.setFieldValue('email', userdata.email);

  var recordid =  nlapiSubmitRecord(record, true, true);

  returnobj.id = recordid;

  } catch (error) {
       returnobj.error = error;
  }

     return returnobj;
},

// creatingDone: {
//     code: 'OK',
//     message: 'Subscription successful!'
// }



  
    })
  })
  