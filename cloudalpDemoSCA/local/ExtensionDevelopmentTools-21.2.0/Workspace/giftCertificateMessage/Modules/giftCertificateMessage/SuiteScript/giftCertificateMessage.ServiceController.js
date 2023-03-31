define("ca.giftCertificateMessage.giftCertificateMessage.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "ca.giftCertificateMessage.giftCertificateMessage.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      
    },

    post: function post() {
      
      // nlapiSendEmail(author, recipient, subject, body, cc, bcc, records, attachments, notifySenderOnBounce, internalOnly, replyTo);
      // nlapiSendEmail(this.data.author, this.data.recipient, "Request To Gift Certificate Message", this.data.body, null, null, null, null);

    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
