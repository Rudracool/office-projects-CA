define("Asu.AdvancedSignUp.AdvancedSignUpModule.ServiceController", ["ServiceController","Asu.model"], function(
  ServiceController,
  Asumodel

) {
  "use strict";

  return ServiceController.extend({
    name: "Asu.AdvancedSignUp.AdvancedSignUpModule.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      // return JSON.stringify({
      //   message: "Hello World I'm an Extension using a Service!"
      // });
    },

    post: function post() {
      // not implemented
      console.warn("post check",this.data)
      return Asumodel.Belead(this.data); //this.data.email
      // return Asumodel.createLeadcustomer(this.data.email);
      // return JSON.stringify({
      //   message: "Hello World I'm a Lead Extension using a Service!"
      // });
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
