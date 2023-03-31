// /*
// 	© 2020 NetSuite Inc.
// 	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
// 	provided, however, if you are an authorized user with a NetSuite account or log-in, you
// 	may use this code subject to the terms that govern your access and use.
// */

// /// <amd-module name="placeOrderCustom.Collection"/>
// import * as _ from 'underscore';
// import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

// import placeOrderCustomModel =  require('./placeOrderCustom.Model');

// // import TransactionLineCollection = require('../../../Commons/Transaction/JavaScript/Transaction.Line.Collection');
// import TransactionCollection = require('../../../Commons/Transaction/JavaScript/Transaction.Collection');


// const placeorderCustomCollection: any =TransactionCollection.extend({
//     url:'services/placeOrderCustom.Service.ss',



//     model:placeOrderCustomModel,

//     parse: function(response) {
//         this.totalRecordsFound = response.totalRecordsFound;
//         this.recordsPerPage = response.recordsPerPage;
//         return response.records;
        
//     },

    
//     update: function(options) {  
//         var self = this;
//         var promise = jQuery.Deferred();
//         jQuery.get('/api/items?fieldset=details', function (result) {
//             self.itemDetails = (result && result.total > 0) ? _.compact(result.items) : [];
//             promise.resolve();
//         });

//         this.fetch({
//             data: {
//                 // @property {String?} page
//                 page: options.page,
//                 results_per_page:parseInt(options.sort.value),
//                 items:self.itemDetails
//             },
//             reset: true,
//             // @property {String?} killerId
//             killerId: options.killerId
//         });

//         return   promise;
//     }
// });

// export = placeorderCustomCollection;
