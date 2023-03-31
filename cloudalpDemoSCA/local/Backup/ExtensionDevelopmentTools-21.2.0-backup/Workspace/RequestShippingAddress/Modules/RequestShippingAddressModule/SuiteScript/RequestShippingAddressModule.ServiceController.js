define("Demo.RequestShippingAddress.RequestShippingAddressModule.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "Demo.RequestShippingAddress.RequestShippingAddressModule.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      // return JSON.stringify({
      //   message: "Hello World I'm an Extension using a Service!"
      // });
            // not implemented
    },

    post: function post() {
      console.warn("data",this.data);
      var returnstring = {}
      // var data ={}
      try {
          console.warn("try data",this.data);
           nlapiSendEmail(this.data.author, this.data.recipient, this.data.subject,this.data.body, null, null, null,null );
            returnstring.status = true;
            return returnstring;
          } catch (error) {
            console.warn("catch data",this.data);
            returnstring.status = error;
            return returnstring;
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
