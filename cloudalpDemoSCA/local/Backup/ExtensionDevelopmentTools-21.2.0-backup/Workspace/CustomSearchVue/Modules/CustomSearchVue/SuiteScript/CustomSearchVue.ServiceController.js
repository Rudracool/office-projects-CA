define("STAXS.CustomSearchVue.CustomSearchVue.ServiceController", ["ServiceController", 'Application', 'Utils',
  'underscore'], function (
    ServiceController,
    Application,
    Utils,
    _
  ) {


  return ServiceController.extend({
    name: "STAXS.CustomSearchVue.CustomSearchVue.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {

      //       var customrecord_web_item_dataSearch = nlapiSearchRecord("customrecord_web_item_data",null,
      // [
      //    ["custrecord_web_item.name","contains","ft-08000"]
      // ],
      // [
      //    new nlobjSearchColumn("scriptid").setSort(false),
      //    new nlobjSearchColumn("custrecord_web_customer"),
      //    new nlobjSearchColumn("custrecordcustrecord_web_quantity"),
      //    new nlobjSearchColumn("custrecord_web_item")
      // ]
      // );
      var ret = {};
      var filters = [];
      filters.push(new nlobjSearchFilter('custrecord_web_customer', null, 'is', nlapiGetUser()));
      filters.push(new nlobjSearchFilter('isinactive', null, 'is', 'F'));
      var columns = [];
      columns.push(new nlobjSearchColumn('custrecord_web_item'));
      columns.push(new nlobjSearchColumn('custrecordcustrecord_web_url'));
      // var src = nlapiSearchRecord('customrecord_web_item_data',null,filters,columns);
      this.search_results = Application.getAllSearchResults('customrecord_web_item_data', _.values(filters), _.values(columns));
      if (!_.isUndefined(this.search_results)) {
        var Arry = [];
        _.map(this.search_results, function (data) {
          var obj = {};
          obj.url = data.getValue('custrecordcustrecord_web_url');
          obj.name = data.getText('custrecord_web_item');
          Arry.push(obj);
        });
        ret.records = Arry;
      }

      return ret;

    },

    post: function post() {
      // not implemented
    },

    put: function put() {
      // not implemented
    },

    delete: function () {
      // not implemented
    }
  });
});
