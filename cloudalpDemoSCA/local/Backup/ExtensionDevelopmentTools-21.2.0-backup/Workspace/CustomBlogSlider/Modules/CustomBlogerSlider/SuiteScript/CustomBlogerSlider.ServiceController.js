define("RFI.CustomBlogSlider.CustomBlogerSlider.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "RFI.CustomBlogSlider.CustomBlogerSlider.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      var columns = new Array();
      var result = {};
      columns[0] = new nlobjSearchColumn('custrecord_sc_blog_post_pt_content');
      columns[1] = new nlobjSearchColumn('custrecord_sc_blog_post_pt_thumbnail_img');
      columns[2] = new nlobjSearchColumn('custrecord_sc_blog_post_pt_timg_img_alt');
      columns[3] = new nlobjSearchColumn('custrecord_sc_blog_post_page_url');
      var searchresults = nlapiSearchRecord('customrecord_sc_blog_page_type_post', null, null, columns);
      var blogsData = [];
      for (var i = 0; searchresults != null && i < searchresults.length; i++) {
        // get result values
        var obj = {}
        var searchresult = searchresults[i];
        obj.text = searchresult.getValue('custrecord_sc_blog_post_pt_content');
        obj.img = searchresult.getText('custrecord_sc_blog_post_pt_thumbnail_img');
        obj.url = searchresult.getValue('custrecord_sc_blog_post_page_url');
        blogsData.push(obj)

      }
      if( blogsData.length > 0){
        result.blog = blogsData;
      }
      return result;
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
