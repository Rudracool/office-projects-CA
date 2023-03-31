define("CA.customAddresses.customAddress.ServiceController", ["ServiceController","SC.Models.Init"], function(
  ServiceController,
  ModelsInit
) {
  "use strict";

  return ServiceController.extend({
    name: "CA.customAddresses.customAddress.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      return JSON.stringify({
        message: "Hello World I'm an Extension using a Service!"
      });
    },

    post: function post() {
      try {
          
        ModelsInit.customer.removeAddress(this.data.addressId);
        console.warn('this.data.addressId',this.data.addressId);
        return this.data.addressId;
        
      } catch (e) {
              throw e;
        }
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
