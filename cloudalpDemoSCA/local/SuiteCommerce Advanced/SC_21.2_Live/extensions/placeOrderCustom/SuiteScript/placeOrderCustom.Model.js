/*
  © 2022 NetSuite Inc.
  User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
  provided, however, if you are an authorized user with a NetSuite account or log-in, you
  may use this code subject to the terms that govern your access and use.
*/

// placeOrderCustom.Model.js
// ----------
// Handles fetching of website Item Data custom records
define('placeOrderCustom.Model', [
  'SC.Model',
  'Application',
  'SiteSettings.Model',
  'Utils',
  'underscore'
], function (
  SCModel,
  Application,
  SiteSettingsModel,
  Utils,
  _

) {
  // @class placeOrderCustom.Model Defines the model used by the placeOrderCustom.Service.ss service
  // @extends SCModel
  return SCModel.extend({
    name: 'placeOrderCustom',
    search: function (option) {
      console.warn("options:", option);
      var filters = [];
      filters.push(new nlobjSearchFilter('custrecord_web_customer', null, 'is', nlapiGetUser()));
      filters.push(new nlobjSearchFilter('isinactive', null, 'is', 'F'));
      var columns = [];
      columns.push(new nlobjSearchColumn('custrecord_web_item'));
      columns.push(new nlobjSearchColumn('custrecordcustrecord_web_quantity'));
      columns.push(new nlobjSearchColumn('custrecord_web_size'));
      columns.push(new nlobjSearchColumn('custrecord_web_color'));
      columns.push(new nlobjSearchColumn('custrecord_web_customer'));
      columns.push(new nlobjSearchColumn('custrecordcustrecord_web_url'));

      const unsortResult = Application.getAllSearchResults('customrecord_web_item_data', filters, _.values(columns));
      const mapResults = _.map(unsortResult, function (line) {

        let internalid = line.getValue('custrecord_web_item');
        let displayname = line.getText('custrecord_web_item');
        let quantity = parseInt(line.getValue('custrecordcustrecord_web_quantity'));
        let color_id = line.getValue('custrecord_web_color');
        let color_label = line.getText('custrecord_web_color');;
        let size_id = line.getValue('custrecord_web_size');
        let size_label = line.getText('custrecord_web_size');
        let customerName = line.getText('custrecord_web_customer');
        let customerId = line.getValue('custrecord_web_customer');
        let url = line.getValue('custrecordcustrecord_web_url');

        let Primarykey;

        if (color_label != "" && size_label != "") {
          Primarykey = `${displayname}-${color_label}-${size_label}`
        } else if (color_label != "") {
          Primarykey = `${displayname}-${color_label}`
        } else if (size_label != "") {
          Primarykey = `${displayname}-${size_label}`
        } else {
          Primarykey = `${displayname}-`
        }
        return {
          // item: {
          Primarykey: Primarykey,
          internalid: internalid,
          displayname: displayname,
          quantity: quantity,
          color_id: color_id,
          color_label: color_label,
          size_id: size_id,
          size_label: size_label,
          customerName: customerName,
          customerId: customerId,
          url: url
          // }

        };

      });
      let UniqueAndUpdateItems = {};
      for (var i in mapResults) {
        let Primarykey = mapResults[i].Primarykey;
        let internalid = mapResults[i].internalid;
        let displayname = mapResults[i].displayname;
        let quantity = mapResults[i].quantity;
        let color_id = mapResults[i].color_id;
        let color_label = mapResults[i].color_label;
        let size_id = mapResults[i].size_id;
        let size_label = mapResults[i].size_label;
        let customerName = mapResults[i].customerName
        let customerId = mapResults[i].customerId
        let url = mapResults[i].url;
        if (UniqueAndUpdateItems.hasOwnProperty(Primarykey) === true) {
          UniqueAndUpdateItems[Primarykey].quantity += quantity;
        } else {

          UniqueAndUpdateItems[Primarykey] = {

            Primarykey: Primarykey,
            internalid: internalid,
            displayname: displayname,
            quantity: quantity,
            color_id: color_id,
            color_label: color_label,
            size_id: size_id,
            size_label: size_label,
            customerName: customerName,
            customerId: customerId,
            url: url
          }

        }
      }
      const UniqCustomData = [];
      console.warn("search", option.search)
      if (option.search) {
        let inputVal = option.search.toUpperCase();
        let arr = [];
        _.each(UniqueAndUpdateItems, x => {
          if (option.sort === 'name') {
            x.sortBy = "name"
          } else {
            x.sortBy = "internalid"
          };
          if (option.order == 1) {
            x.sortlevel = 'high-low'
          } else if (option.order == -1) {
            x.sortlevel = 'low-high'
          };
          arr.push({ items: x })
        });
        arr.filter(el => {
          let displayname = el.items.displayname.toUpperCase();

          if (displayname.indexOf(inputVal) > -1) {
            return UniqCustomData.push(el);
          }
      
        })
      } else {

        _.each(UniqueAndUpdateItems, x => {
          if (option.sort === 'name') {
            x.sortBy = "name"
          } else {
            x.sortBy = "internalid"
          };
          if (option.order == 1) {
            x.sortlevel = 'high-low'
          } else if (option.order == -1) {
            x.sortlevel = 'low-high'
          }

          UniqCustomData.push({ items: x })
        });
      };

      console.warn("search data ", JSON.stringify(UniqCustomData))

      if (option.sort === 'name' && option.order == 1) {
        UniqCustomData.sort(function (a, b) {
          var textA = a.items.displayname.toUpperCase();
          var textB = b.items.displayname.toUpperCase();
          // return (textA < textB) ? -1 : (textA > textB) ? 1 : 0; //a-z 
          return (textA > textB) ? -1 : (textA < textB) ? 1 : 0; // z-a       
        });
      } else if (option.sort === 'name' && option.order == -1) {
        UniqCustomData.sort(function (a, b) {
          var textA = a.items.displayname.toUpperCase();
          var textB = b.items.displayname.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0; //a-z 
          // return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;           
        });

      } else if (option.sort === 'id' && option.order == 1) {

        UniqCustomData.sort(function (a, b) {
          var idA = a.items.internalid;
          var idB = b.items.internalid;
          return (idA > idB) ? -1 : (idA < idB) ? 1 : 0;  // 10 - 1    
        });

      } else if (option.sort === 'id' && option.order == -1) {
        UniqCustomData.sort(function (a, b) {
          var idA = a.items.internalid;
          var idB = b.items.internalid;
          return (idA < idB) ? -1 : (idA > idB) ? 1 : 0; //1 - 10          
        });

      }
      //   if(option.sort === 'name' && option.order == 1 ){
      //     UniqCustomData.sort(function (a, b) {
      //         var textA = a.items.displayname.toUpperCase();
      //         var textB = b.items.displayname.toUpperCase();
      //         return (textA < textB) ? -1 : (textA > textB) ? 1 : 0; //a-z 
      //         // return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;           
      //     });
      // }else if(option.sort === 'name' && option.order == -1){

      //   UniqCustomData.sort(function (a, b) {
      //         var textA = a.items.displayname.toUpperCase();
      //         var textB = b.items.displayname.toUpperCase();
      //         // return (textA < textB) ? -1 : (textA > textB) ? 1 : 0; //a-z 
      //         return (textA > textB) ? -1 : (textA < textB) ? 1 : 0; // z-a       
      //     });
      // }else if(option.sort === 'id' && option.order == 1  ){

      //   UniqCustomData.sort(function (a, b) {
      //                 var idA = a.items.internalid;
      //                 var idB = b.items.internalid;
      //                 return (idA < idB) ? -1 : (idA > idB) ? 1 : 0; //1 - 10          
      //             });

      // }else if(option.sort === 'id' && option.order == -1 ){
      //   UniqCustomData.sort(function (a, b) {
      //     var idA = a.items.internalid;
      //     var idB = b.items.internalid;
      //         return (idA > idB) ? -1 : (idA < idB) ? 1 : 0;  // 10 - 1    
      //     });
      // }



      // return  UniqCustomData;
      // native code 
      // filters.push(new nlobjSearchFilter('custrecord_web_item', null, 'anyof', id)); [6868]

      /*------------------------------*/
      /*const result = Application.getPaginatedSearchResults({
        record_type: 'customrecord_web_item_data',
        filters: filters,
        columns: columns,
        page: option.page,
        results_per_page:option.results_per_page 
        // option.results_per_page
      });


      let getCustomLine = [];
      let mapedArr = _.map(result.records, function (line) {

        let displayname = line.getText('custrecord_web_item');
        let color_label = line.getText('custrecord_web_color');;
        let size_label = line.getText('custrecord_web_size');
        let url = line.getValue('custrecordcustrecord_web_url');
        let keyPrimary;
        if (color_label != "" && size_label != "") {
          keyPrimary = `${displayname}-${color_label}-${size_label}`
        } else if (color_label != "") {
          keyPrimary = `${displayname}-${color_label}`
        } else if (size_label != "") {
          keyPrimary = `${displayname}-${size_label}`
        } else {
          keyPrimary = `${displayname}-`
        }
        let removeDuplicate = _.find(UniqCustomData,(val) =>
          // val.items.Primarykey == keyPrimary 
          {
          if (val.items.Primarykey == keyPrimary) {
                getCustomLine.push(val)
                return val

        }
          }
        
        );
        
        return removeDuplicate

      });


      let obj = {};
      for (let i in mapedArr) {
        let displayname = mapedArr[i].items.displayname;
        let Primarykey = mapedArr[i].items.Primarykey;
        let internalid = mapedArr[i].items.internalid;
        let quantity = mapedArr[i].items.quantity;
        let color_label = mapedArr[i].items.color_label;
        let size_label = mapedArr[i].items.size_label
        let customerName = mapedArr[i].items.customerName;
        let url = mapedArr[i].items.url;
        let customerId = customerId
        if (obj.hasOwnProperty(Primarykey) === true) {
          console.warn("if part", JSON.stringify(obj))
        } else {
          obj[Primarykey] = {
            Primarykey: Primarykey,
            internalid: internalid,
            displayname: displayname,
            quantity: quantity,
            color_label: color_label,
            size_label: size_label,
            customerName: customerName,
            customerId: customerId,
            url: url
          }
        }

      } 
      const UniqCustom = [];
      _.each(obj, (x) => {
        UniqCustom.push({ items: x })
      });
*/
      let itemLen = UniqCustomData.length;
      let page = option.page;
      let PerPage = option.ShowperPage;
      let currentPage = (page * PerPage);
      let totalPages = Math.ceil(itemLen / PerPage);
      let pageData;
      let startRange = page * PerPage - PerPage;
      let endRange = page * PerPage

      if (PerPage < itemLen) {
        pageData = [];
        for (let i = startRange; i < endRange; i++) {
          if (itemLen > i) {
            pageData.push(UniqCustomData[i]);
          }
        }
      } else {
        pageData = UniqCustomData;

      }
      const result = {
        page: option.page,
        recordsPerPage: option.ShowperPage,
        // recordsPerPage:option.perpage,
        records: [],
        totalRecordsFound: itemLen,
      };

      var searchPar;
      if (option.search === " ") {
        searchPar = 'no empty spaces allowed'
      }else if(option.search){
        searchPar = option.search
      }
      if(itemLen < 1){
        result.NosearchFound = 'nosearchfound' ;
      }
      if(option.search){
        result.search = searchPar ;//UniqCustom;
        // result.search = [{searchPar:searchPar }];//UniqCustom;
      }
      result.records =  pageData
      return result;
    }

  });

})




