

define("CA.GiftCardEmailSend.GiftCardEmailSend.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "CA.GiftCardEmailSend.GiftCardEmailSend.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
    
    },

    post: function post() {
      var msg=  this.sendEmailTo(this.data);
        return msg;
    },

    put: function put() {
     

    },

    delete: function() {
      // not implemented
    },
    sendEmailTo: function(data){
      
      var adminEmailAddressId = 118;
      var receipantEmail = data.adminEmail;
      var BodyMessage = data.giftMessage;
      var obj={};
      try {
         // nlapiSendEmail(author, recipient, subject, body, cc, bcc, records, attachments, notifySenderOnBounce, internalOnly, replyTo);
      nlapiSendEmail(adminEmailAddressId, receipantEmail, "Request To Gift Certificate Message", BodyMessage, null, null, null, null);
        
        obj.msg = 'Email send successfully';
        obj.status = 'success';
        
      } catch (error) {

        obj.msg = 'Error occurs email is not send';
        obj.status = 'error';
      
      }
      return obj;
    }
  });
});
