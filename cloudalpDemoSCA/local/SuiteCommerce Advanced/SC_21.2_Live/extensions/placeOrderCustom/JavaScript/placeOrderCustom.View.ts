// ///<amd-module name="placeOrderCustom.View"/>
// import * as _ from 'underscore';
// import * as place_order_custom_tpl from 'place_order_custom.tpl';
// import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
// import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
// import { GlobalViewsPaginationView } from '../../../Commons/GlobalViews/JavaScript/GlobalViews.Pagination.View';
// import { GlobalViewsShowingCurrentView } from '../../../Commons/GlobalViews/JavaScript/GlobalViews.ShowingCurrent.View';
// import { ListHeaderView } from '../../../Commons/ListHeader/JavaScript/ListHeader.View';
// import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';
// import LiveOrderModel = require('../../../Commons/LiveOrder/JavaScript/LiveOrder.Model');
// import PlaceOrderCustomModel = require('./PlaceOrderCustom.Model');
// import placeorderCustomCollection = require('./placeOrderCustom.Collection');
// import TransactionListView = require('../../../Commons/Transaction/JavaScript/Transaction.List.View');
// import FacetsItemListShowSelectorView = require('../../../Commons/Facets/JavaScript/Facets.ItemListShowSelector.View')

// import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
// import { mapObject } from 'underscore';

// const PlaceOrderCustomView: any = TransactionListView.extend({
//     // @property {Function} template
//     template: place_order_custom_tpl,
//     // @property {String} title
//     title: Utils.translate('Place Order Custom'),
//     // @property {String} className
//     className: 'PlaceOrdercustomView',
//     // @property {String} page_header
//     page_header: Utils.translate('Place order web items'),
//     // @property {Object} attributes
//     attributes: {
//         id: 'PlaceOrdercustomView',
//         class: 'PlaceOrdercustom'
//     },
//     // @method getBreadcrumbPages
//     getBreadcrumbPages: function () {
//         return {
//             text: this.title,
//             href: '/PlaceOrderCustom'
//         };
//     },
//     // @propery {Object} events
//     events: {
//         'click [data-action="add-to-cart"]': 'addToCart',
//         'click [data-action="add-to-cart-all"]': 'addToCartAll',
//         'click [data-action="add-to-cart-using-url"]': 'addToCartUrl'
//     },
//     initialize: function (options) {
//         var self = this;
//         this.application = options.application;
//         // this.PlaceOrderCustomModel = new PlaceOrderCustomModel();
//         this.collection = new placeorderCustomCollection();
//         this.listenCollection();


//         this.listHeader = new ListHeaderView({
//             view: this,
//             application: this.application,
//             collection: this.collection,
//             sorts: this.sortOptions,
//             hidePagination: true,
//             allowEmptyBoundaries: true,
//         });
//         this.collection.on('reset', this.render, this);        
//     },
//     // @method listenCollection
//     listenCollection: function () {
//         this.setLoading(true);

//         this.collection.on({
//             request: jQuery.proxy(this, 'setLoading', true),
//             reset: jQuery.proxy(this, 'setLoading', false)
//         });
//     },
//     // @method setLoading
//     setLoading: function (value) {
//         this.isLoading = value;
//     },
//     // @method {Array} filterOptions
//     sortOptions:[
//         {
//             value: "2",
//             name: Utils.translate('Per Page 2'),
//             selected: true
//         },
//         {
//             value: "3",
//             name: Utils.translate('Per Page 3'),
//         },
//         {
//             value: "5",
//             name: Utils.translate('Per Page 5'),
//         },
//         {
//             value: "20",
//             name: Utils.translate('Per Page 20'),
//         }
//     ],
//     beforeShowContent: function () {
//         // var self = this;
//         // var promise = jQuery.Deferred();
//         // jQuery.get('/api/items?fieldset=details', function (result) {
//         //     self.itemDetails = (result && result.total > 0) ? _.compact(result.items) : [];
//         //     promise.resolve();
//         // });

//         // this.model = new PlaceOrderCustomModel();
//         // this.model.save({ items: self.itemDetails }).then(function (res) {
//         //     console.log(res, "backbone");
//         // })
//         // return promise;
//     },
//     addToCartUrl: function () {

//         //step 1:-
//         //For single item to addto cart  :- '/app/site/backend/additemtocart.nl?c=TSTDRV1521025&buyid=5992'
//         //step 2:-
//         // for multi items :-  '/app/site/backend/additemtocart.nl?c=TSTDRV1521025&buyid=multi&multi=6880,1;6881,2' 
//         // dynamic url  /app/site/backend/additemtocart.nl?c=${customerId}&buyid=multi&multi=${buyid},${qty}`

//         let customerId = 'TSTDRV1521025';
//         let buyid = 6882;
//         let qty = 1;
//         let showcart = 'T';
//         let promise = jQuery.Deferred();


//         // jQuery.get(`item/app/site/backend/additemtocart.nl?c=${customerId}&buyid=multi&multi=${buyid},${qty}`);


//     },


//     addToCartAll: function (e) {
//         e.preventDefault();
//         const $form = this.$(e.target).closest('[data-type="order-items"]');
//         const $alert_placeholder = $form.find('[data-type=alert-placeholder1]');
//         let options = [];
//         const layout = this.application.getLayout();

//         _.each(this.filterData, (line: any) => {

//             LiveOrderModel.getInstance().addLines(
//                 {
//                     quantity: line.quantity,
//                     item: { internalid: line.LineId }
//                 }
//             ).done(function () {
//                 $alert_placeholder.show().empty();
//                 let message;

//                 message = Utils.translate(
//                     'Items successfully added to <a href="#" data-touchpoint="viewcart">your cart</a><br/>'
//                 );

//                 layout.showMessage($alert_placeholder, message, 'success', true);
//                 setTimeout(function () {
//                     $alert_placeholder.fadeOut(function () {
//                         $alert_placeholder.empty();
//                     });
//                 }, 6000);
//                 // alert('succes')
//             })
//                 .fail(function (jqXhr) {
//                     jqXhr.preventDefault = true;
//                     $alert_placeholder.show().empty();
//                     layout.showXHRErrorMessage($alert_placeholder, jqXhr, true);

//                 });

//         })


//     },
//     addToCart: function (e) {
//         // /api/items?id=6830&fieldset=details
//         const self = this;
//         let itemLine = [];
//         const line_id = this.$(e.target).data('line-id');
//         const $form = this.$(e.target).closest('[data-type="order-item"]');
//         const $quantity = $form.find('[name=item_quantity]');
//         const $alert_placeholder = $form.find('[data-type=alert-placeholder]');
//         const quantity = isNaN(parseInt($quantity.val(), 10)) ? 0 : parseInt($quantity.val(), 10);
//         const layout = this.application.getLayout();

//         LiveOrderModel.getInstance().addLine({
//             quantity: quantity,
//             item: { internalid: line_id }
//         }).done(function () {
//             $alert_placeholder.show().empty();
//             let message;
//             if (quantity > 1) {
//                 message = Utils.translate(
//                     '$(0) Items successfully added to <a href="#" data-touchpoint="viewcart">your cart</a><br/>',
//                     quantity
//                 );
//             } else {
//                 message = Utils.translate(
//                     'Item successfully added to <a href="#" data-touchpoint="viewcart">your cart</a><br/>'
//                 );
//             }
//             layout.showMessage($alert_placeholder, message, 'success', true);
//             setTimeout(function () {
//                 $alert_placeholder.fadeOut(function () {
//                     $alert_placeholder.empty();
//                 });
//             }, 6000);

//         })
//             .fail(function (jqXhr) {
//                 jqXhr.preventDefault = true;
//                 $alert_placeholder.show().empty();
//                 layout.showXHRErrorMessage($alert_placeholder, jqXhr, true);
//             });

//     },
//     childViews: {
//         'List.Header': function () {
//             return this.listHeader;
//         },

//         'GlobalViews.Pagination': function () {
//             let perPage = parseInt(this.collection.recordsPerPage)
//             if (perPage)
//                 return new GlobalViewsPaginationView(
//                     _.extend(

//                         {

//                             totalPages: Math.ceil(
//                                 this.collection.totalRecordsFound / parseInt(this.collection.recordsPerPage)
//                             )
//                         }


//                     )
//                 );
//         }
//         // 'GlobalViews.ShowCurrentPage': function () {
//         //     return new GlobalViewsShowingCurrentView({
//         //         items_per_page: this.Pagination.recordsPerPage,
//         //         total_items: this.Pagination.totalRecordsFound,
//         //         total_pages: Math.ceil(
//         //             this.Pagination.totalRecordsFound / this.Pagination.recordsPerPage
//         //         )
//         //     });
//         // },
//     },
//     getContext: function () {
//         let modelData = this.collection.models;
//         console.log(this.collection,"getcontext");
        
//         let sendViewData = [];
//         _.each(this.itemDetails, (api: any) => {

//             _.each(modelData, (cust: any) => {
                
//                 if (api.matrixchilditems_detail) {

//                     _.find(api.matrixchilditems_detail, (itemOptions: any) => {
//                         if ((itemOptions.custitem22 == cust.items.color_label && itemOptions.custitem32 == cust.items.size_label) && (api.internalid == cust.items.internalid)) {
//                             cust.items.LineId = itemOptions.internalid;
//                             cust.items.price = api.onlinecustomerprice_detail.onlinecustomerprice_formatted;
                            
//                             sendViewData.push(cust.items)

//                         }
//                         else if ((itemOptions.custitem22 == cust.items.color_label && cust.items.size_label == "") && (api.internalid == cust.items.internalid)) {
//                             cust.items.LineId = itemOptions.internalid;
//                             cust.items.price = api.onlinecustomerprice_detail.onlinecustomerprice_formatted;
//                             sendViewData.push(cust.items)
                         
//                             // console.log(itemOptions.internalid,"else if");

//                         }
//                         else if ((itemOptions.custitem23 == cust.items.size_label && cust.items.color_label == "") && (api.internalid == cust.items.internalid)) {
//                             cust.items.LineId = itemOptions.internalid;
//                             cust.items.price = api.onlinecustomerprice_detail.onlinecustomerprice_formatted;
//                             sendViewData.push(cust.items)
//                             console.log(cust.items, "else if -2");
//                         }
//                     })
//                 } else if (api.internalid == cust.items.internalid) {
//                     cust.items.price = api.onlinecustomerprice_detail.onlinecustomerprice_formatted;
//                     cust.items.LineId = api.internalid;
//                     sendViewData.push(cust.items)


//                 }

//             })

//         });

        
//         if (this.collection.length > 0) {
//             // a.LineId - b.LineId
//             // let fil = modelData.sort((a,b)=> a.items.LineId - b.items.LineId);
    
//             let mainObj = {};
//             this.filterData=[];
//             for (var i = 0; i < this.collection.length; i++) {
                
//                 let internalid = modelData[i].items.internalid;
//                 let displayname = modelData[i].items.displayname;    
//                 let quantity = modelData[i].items.quantity;
//                 let color_id = modelData[i].items.color_id;
//                 let color_label = modelData[i].items.color_label;
//                 let size_id = modelData[i].items.size_id;
//                 let size_label = modelData[i].items.size_label;
//                 let customerName = modelData[i].items.customerName;
//                 let customerId = modelData[i].items.customerId;
//                 let url = modelData[i].items.url;
//                 let LineId = modelData[i].items.LineId;
//                 if (mainObj.hasOwnProperty(LineId) == true){
//                     console.log(mainObj);
                    
//                     mainObj[LineId].quantity += quantity;
//                 } 
//                 else{
//                     mainObj[LineId ]= {
//                         'internalid': internalid,
//                         'displayname': displayname,
//                         'quantity': quantity,
//                         'color_id': color_id,
//                         'color_label':color_label,
//                         'size_id':size_id,
//                         'size_label':size_label,
//                         'customerName':customerName,
//                         'customerId':customerId,
//                         'url':url,
//                         'LineId':LineId,
//                     };
//                 }
                    
//             }
            
//             // _.each(modelData,(x:any)=>{
//             //     this.filterData.push(x.items)
//             // })
            
        
//             console.log(sendViewData);
            
            
            
//             let sortData =[];
//             _.each(mainObj,(x:any)=>{
//                 sortData.push(x);    
//                 this.filterData.push(x)

//             });
//             console.log(sortData );
            
//             let removeDup =   this.filterData.sort(function(a, b) {
//                 var textA =  a.displayname.toUpperCase();
//                 var textB =  b.displayname.toUpperCase();
//                 // return (textA < textB) ? -1 : (textA > textB) ? 1 : 0; a-z 
//                 return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;  
//             })
        
        
         
            
//             // let fil = sortData .sort((a,b)=>   a.LineId - b.LineId);
//             // console.log(fil,"mainobj");
//             // console.log(this.filterData,"this.filterData");
//             // console.log(sendViewData,"sendViewData");
//             // console.log(this.collection);
        
            
//             // console.log(x,"x");
            
//             // this.filterData = sendViewData.reduce((acc, current) => {
//             //     const x = acc.find(item => item.LineId === current.LineId);

//             //     if (!x) return acc.concat([current]);
//             //     else return acc;
//             // }, []);




//         }
        


//         // prepare the model for the frontend
//         // @class placeOrdersendViewDataom.Model.Attributes
         
//         // console.log(this.filterData, "sendViewData");

//         return {
//             // @propery {Boolean} isLoading
//             isLoading: this.isLoading,
//             // @property {Array} item
//             itemData:this.filterData,
//             // @property {number} 
//             itemsLength: sendViewData.length > 0 ? true : false,
//             // @property {String} name
//             title: this.title
//         }
//     }

// })
// export = PlaceOrderCustomView;