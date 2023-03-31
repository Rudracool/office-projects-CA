var extensions = {};

extensions['CA.AddressBookCustomization.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/AddressBookCustomization/1.0.0/' + asset;
}

// @module CA.AddressBookCustomization.AddressBookCustomization
define('CA.AddressBookCustomization.AddressBookCustomization.View'
,	[
	'ca_addressbookcustomization_addressbookcustomization.tpl'
	
	
	,	'Backbone'
    ]
, function (
	ca_addressbookcustomization_addressbookcustomization_tpl
	
	
	,	Backbone
)
{
    'use strict';

	// @class CA.AddressBookCustomization.AddressBookCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_addressbookcustomization_addressbookcustomization_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new AddressBookCustomizationModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return CA.AddressBookCustomization.AddressBookCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class CA.AddressBookCustomization.AddressBookCustomization.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("CA.AddressBookCustomization.AddressBookCustomization.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
    });
});



define(
	'CA.AddressBookCustomization.AddressBookCustomization'
,   [
		'CA.AddressBookCustomization.AddressBookCustomization.View'
	,	'Address.Edit.View'
	,	'Configuration'
	,	'Utils'
	]
,   function (
		AddressBookCustomizationView
	,	AddressEditView
	,	Configuration
	,	Utils
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/**
			* @description AddressBook error message
			*/
			_.extend(AddressEditView.prototype,{
				getContext:_.wrap(AddressEditView.prototype.getContext,function getContext(fn){
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					var ConfigurationData = Configuration.get('checkoutcustomization');
					if(ConfigurationData.AddressMessage !== ''){
						context.addressMessage = Utils.translate(ConfigurationData.AddressMessage);
					}
					return context;
				})
			})

		}
	};
});


};

extensions['CA.HeaderMenuCustomization.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/HeaderMenuCustomization/1.0.0/' + asset;
}

// @module CA.HeaderMenuCustomization.HeaderMenuCustomization
define('CA.HeaderMenuCustomization.HeaderMenuCustomization.View'
,	[
	'ca_headermenucustomization_headermenucustomization.tpl'
	

	
	,	'Backbone'
    ]
, function (
	ca_headermenucustomization_headermenucustomization_tpl
	
	
	
	,	Backbone
)
{
    'use strict';

	// @class CA.HeaderMenuCustomization.HeaderMenuCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_headermenucustomization_headermenucustomization_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new HeaderMenuCustomizationModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return CA.HeaderMenuCustomization.HeaderMenuCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class CA.HeaderMenuCustomization.HeaderMenuCustomization.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("CA.HeaderMenuCustomization.HeaderMenuCustomization.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
});
});



define(
	'CA.HeaderMenuCustomization.HeaderMenuCustomization'
,   [
		'CA.HeaderMenuCustomization.HeaderMenuCustomization.View'
	,	'Header.Menu.View'
	,	'Configuration'
	]
,   function (
		HeaderMenuCustomizationView
	,	HeaderMenuView
	,	Configuration
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
		

			var obj = HeaderMenuView.prototype.events;
			obj['mouseenter [data-toggle="categories-submenu"]'] = "menuOpenSubmenu";
			obj['mouseleave [data-toggle="categories-submenu"]'] = "menuCloseSubmenu";
			obj['mouseenter .catagories-submenu-tag'] = "catagoriesSubMenu";
			HeaderMenuView.prototype.events = obj;

				_.extend(HeaderMenuView.prototype,{
					initialize:_.wrap(HeaderMenuView.prototype.initialize,function initialize(fn){
						fn.apply(this, _.toArray(arguments).slice(1));
						var some = _.map(Configuration.navigationData, (data) => {
							if (data["data-type"] === "commercecategory") {
							  return data;
							}
						  });
						  some = some.filter(function (element) {
							return element !== undefined;
						  });
						  var level2Data = some.map((data) => {
							if (data["categories"] !== []) {
							  return data["categories"];
							}
						  });
						  this.level2NavData = level2Data;
					}),
					catagoriesSubMenu: function(e){
						if(e.currentTarget.dataset.toggle === 'categories-submenu'){

						}else{
							$('.header-level-3-ul-tag-section .header-menu-level3').html('');

						}
					},
					menuOpenSubmenu: function (e) {
						jQuery(e.currentTarget).addClass("open-subcatagories");
					
						var Hashtag = $(e.currentTarget).find("a").data("hashtag");
						var self = this;
						this.level3NavData;
					
						this.level2NavData.filter((data) => {
						  data.map((value) => {
							if (value.data.hashtag === Hashtag) {
							  if (value.categories !== []) {
								self.level3NavData = value.categories;
								return value;
							  }
							}
						  });
						});
						var CustomTemplateRender=''
						this.level3NavData.map((x)=>{
							 CustomTemplateRender+=  `							
							<li>
								<a class="${x.class}" data-touchpoint="${x.data.touchpoint}" data-hashtag="${x.data.hashtag}">${x.text}</a>
							</li>`
							
							
						  var RenderedData= $(e.currentTarget).closest('.header-level-2-ul-tag-section').parent().find('.header-level-3-ul-tag-section .header-menu-level3');
						  RenderedData.addClass('submenu-catagories');
						  RenderedData.html(CustomTemplateRender);
						})
					  
																
					  },
					  menuCloseSubmenu: function (e) {
						jQuery(e.currentTarget).removeClass("open-subcatagories");
						var RenderedData= $(e.currentTarget).closest('.header-level-2-ul-tag-section').parent().find('.header-level-3-ul-tag-section .header-menu-level3');
						RenderedData.removeClass('submenu-catagories');
					  }

			})

		}
	};
});


};

extensions['CA.MyAccountCustomization.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/MyAccountCustomization/1.0.0/' + asset;
}

// @module CA.MyAccountCustomization.MyAccountCustomization
define('CA.MyAccountCustomization.MyAccountCustomization.View'
,	[
	'ca_myaccountcustomization_myaccountcustomization.tpl'
	
	,	'CA.MyAccountCustomization.MyAccountCustomization.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_myaccountcustomization_myaccountcustomization_tpl
	
	,	MyAccountCustomizationSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.MyAccountCustomization.MyAccountCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_myaccountcustomization_myaccountcustomization_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new MyAccountCustomizationModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return CA.MyAccountCustomization.MyAccountCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class CA.MyAccountCustomization.MyAccountCustomization.View.Context
			// this.message = this.message || 'Hello World!!'
			return {
				// message: this.message
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("CA.MyAccountCustomization.MyAccountCustomization.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/MyAccountCustomization.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CA.MyAccountCustomization.MyAccountCustomization.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/MyAccountCustomization/SuiteScript2/MyAccountCustomization.Service.ss"
            ),
            true
        )
});
});



define(
	'CA.MyAccountCustomization.MyAccountCustomization'
,   [
		'CA.MyAccountCustomization.MyAccountCustomization.View'
	,	'MyAccountMenu'
	,	'MenuTree.View'
	,	'Header.Menu.MyAccount.View'
	,	'Backbone.View'
	,	'Profile.Model'
	,	'Configuration'
	,	'Utils'
	]
,   function (
		MyAccountCustomizationView
	,	MyAccountMenu
	,	MenuTreeView
	,	HeaderMenuMyAccountView
	,	BackboneView
	,	ProfileModel
	,	Configuration
	,	Utils
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var profile = ProfileModel.getInstance();
			if(layout){
				layout.on('beforeShowContent', function () {
					if (profile.get('isLoggedIn') == 'T') {
						_.extend(HeaderMenuMyAccountView.prototype, {
							getContext: _.wrap(HeaderMenuMyAccountView.prototype.getContext, function getContext(fn) {
								var context = fn.apply(this, _.toArray(arguments).slice(1));
								
									MenuTreeView.prototype.render = _.wrap(MenuTreeView.prototype.render, function (...args) {
										this.modifiedentries = this.backwardCompatibilitySanitize(
											MyAccountMenu.getInstance().getEntries()
										);
										var ShowMenu = [];
										_.each(this.modifiedentries, function (item){


											/**
											* @description Remove the quotes field in my account menu tree
											*/

											if(item.id === 'orders'){
												var result = item.children.filter(word =>{
													if((word.id !=='quotes') ){
													
												  		return word 
													}
											  	});
											  	item.children = result;
											}
											
											/**
											* @description  Remove the invoice and account Balance field in my account menu tree
											*/
											
											if(item.id === 'billing'){
												var result = item.children.filter(word =>{
													if((word.id !=='balance')&&(word.id !=='invoices') ){
														
													  return word 
													}
												  });
												  item.children = result;
												 
											}


											/**
											* @description Remove the emailpreferences, addressbook and paymentmethods  field in my account menu tree
											*/
											
											if(item.id === "settings"){
												var setting = item.children.filter(word =>{
													if((word.id !== "emailpreferences")&&(word.id !== "paymentmethods") ){
														
													  return word 
													}
												  });
												  item.children = setting;
											}
											
											ShowMenu.push(item)
										
										})
										
										/**
										* @description  Remove the billing field in my account menu tree
										*/
										var removeMenu = ShowMenu.filter((data) => data.id !== 'billing');
										
										this.fixedMenuItems = removeMenu;
										BackboneView.prototype.render.apply(this, args);
										
									})
									var ShowMenu = [];
									
									_.each(MyAccountMenu.getInstance().getEntries(), function(item){
											

										/**
										* @description Remove the quotes field in header menu my account field
										*/

										if(item.id === 'orders'){
											var result = item.children.filter(word =>{
												if((word.id !=='quotes') ){
													
												  return word 
												}
											  });
											  item.children = result;
											 
										}


										/**
										* @description Remove the invoice and account Balance field in header menu my account field
										*/

										if(item.id === 'billing'){
											var result = item.children.filter(word =>{
												if((word.id !=='balance')&&(word.id !=='invoices') ){
													
												  return word 
												}
											  });
											  item.children = result;
											 
										}

										/**
										* @description Remove the emailpreferences, addressbook and paymentmethods  field in header menu my account field
										*/
										
										if(item.id === "settings"){
											var setting = item.children.filter(word =>{
												if((word.id !== "emailpreferences")&&(word.id !== "paymentmethods") ){
												// if((word.id !== "emailpreferences")&&(word.id !== "addressbook")&&(word.id !== "paymentmethods") ){
													
												  return word 
												}
											  });
											  item.children = setting;
										}

										ShowMenu.push(item);
										
									})
									/**
									* @description Remove the billing tab field in header menu my account field
									*/
									var removeMenu = ShowMenu.filter((data) => data.id !== 'billing');

									context.entries = removeMenu;
								return context;
							})
			
						});
					}
				})
			}

			


		}
	};
});


};

extensions['CA.TrackOrderCustomization.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/TrackOrderCustomization/1.0.0/' + asset;
}

// @module CA.TrackOrderCustomization.TrackOrderCustomization
define('CA.TrackOrderCustomization.TrackOrderCustomization.View'
,	[
	'ca_trackordercustomization_trackordercustomization.tpl'
	,	'Backbone'
    ]
, function (
	ca_trackordercustomization_trackordercustomization_tpl
	,	Backbone
)
{
    'use strict';

	// @class CA.TrackOrderCustomization.TrackOrderCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_trackordercustomization_trackordercustomization_tpl

	,	initialize: function (options) {

			this.model = options.model;
			this.className = options.contentClass;

		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return CA.TrackOrderCustomization.TrackOrderCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class CA.TrackOrderCustomization.TrackOrderCustomization.View.Context
			var trackURL = this.model.get('trackingUrl');
            var TrackNumber;
            if(trackURL === null || trackURL == '' || trackURL == undefined){
                TrackNumber = true;
            }else{
                TrackNumber = false;
				trackURL = trackURL[0];

            }
			return {
				trackURL: trackURL,
                isTrackNumber:TrackNumber,
				className:this.className
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("CA.TrackOrderCustomization.TrackOrderCustomization.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/TrackOrderCustomization.Service.ss"
            )
        )
        
});
});


// @module CA.TrackOrderCustomization.TrackOrderCustomization
define('CA.TrackOrderCustomization.TrackOrderHistoryCustomization.View'
,	[
	'trackorder_details_customization.tpl'
	,	'Backbone'
    ]
, function (
	trackorder_details_customization_tpl
	,	Backbone
)
{
    'use strict';

	// @class CA.TrackOrderCustomization.TrackOrderHistoryCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: trackorder_details_customization_tpl

	,	initialize: function (options) {

			this.model = options.model;
			

		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return CA.TrackOrderCustomization.TrackOrderHistoryCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class CA.TrackOrderCustomization.TrackOrderHistoryCustomization.View.Context
			var trackURL = this.model.get('trackingUrl');
            var TrackNumber;
            if(trackURL === null || trackURL == '' || trackURL == undefined){
                TrackNumber = true;
            }else{
                TrackNumber = false;

            }
				
			return {
				trackURL: trackURL,
                isTrackNumber:TrackNumber,
				
			};
		}
	});
});



define(
	'CA.TrackOrderCustomization.TrackOrderCustomization'
,   [
		'CA.TrackOrderCustomization.TrackOrderCustomization.View'

	,	'OrderHistory.List.View'
	,	'Configuration'
	,	'Backbone'
	,	'Handlebars'
	,	'Backbone.CollectionView'
	,	'RecordViews.Actionable.View'

	,	'Overview.Home.View'
	,	'Utils'	
	,	'RecordViews.View'

	,	'OrderHistory.Packages.View'
	,	'CA.TrackOrderCustomization.TrackOrderHistoryCustomization.View'

	,	'OrderHistory.Details.View'
	]
,   function (
		TrackOrderCustomizationView
	
	,	OrderHistoryListView
	,	Configuration
	,	Backbone
	,	Handlebars
	,	BackboneCollectionView
	,	RecordViewsActionableView

	,	OverviewHomeView
	,	Utils
	,	RecordViewsView

	,	OrderHistoryPackagesView
	,	TrackOrderHistoryCustomizationView

	,	OrderHistoryDetailsView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/**
			* @description order history changes.
			*/

			_.extend(OrderHistoryListView.prototype,{
				_buildResultsView: function() {
					const self = this;
					let selectedColumns = [];
			
					if (!Configuration.get().transactionListColumns.enableOrderHistory) {
						selectedColumns.push({ label: 'Date', id: 'trandate', type: 'date' });
						selectedColumns.push({
							label: 'Amount',
							name: 'amount',
							id: 'amount_formatted',
							type: 'currency'
						});
			
						if (self.isSCISIntegrationEnabled) {
							selectedColumns.push({ label: 'Origin', id: 'origin' });
						} else {
							selectedColumns.push({ label: 'Status', id: 'status', type: 'status' });
						}
					} else {
						selectedColumns = Configuration.get().transactionListColumns.orderHistory;
					}
			
					const records_collection = new Backbone.Collection(
						this.collection.map(function(order) {
							const model = new Backbone.Model({
								title: new Handlebars.SafeString(
									Utils.translate('<span class="tranid">$(0)</span>', order.get('tranid'))
								),
								touchpoint: 'customercenter',
								detailsURL: `/purchases/view/${order.get('recordtype')}/${order.get(
									'internalid'
								)}`,
								recordType: order.get('recordtype'),
								id: order.get('internalid'),
								internalid: order.get('internalid'),
								trackingNumbers: order.get('trackingnumbers'),
								trackingUrl: order.get('anwb_trackingUrl'),
								columns: self._buildColumns(selectedColumns, order)
							});
							return model;
						})
					);
			
					return new BackboneCollectionView({
						childView: RecordViewsActionableView,
						collection: records_collection,
						viewsPerRow: 1,
						childViewOptions: {
							actionView: TrackOrderCustomizationView,
							actionOptions: {
								showContentOnEmpty: true,
								contentClass: 'tracking-order-customization',
								collapseElements: true
							}
						}
					});
				}


			});

			/**
			* @description OverviewHomeView changes the childviews.
			*/
			_.extend(OverviewHomeView.prototype,{
				childViews: _.extend({}, OverviewHomeView.prototype.childViews, {
					/**
					* @description changes the view file in overview on childviews.
					*/
					'Order.History.Results': function() {
						const self = this;
						const records_collection = new Backbone.Collection(
							this.collection.map(function(order) {
								let dynamic_column;

								if (self.isSCISIntegrationEnabled) {
									dynamic_column = {
										label: Utils.translate('Origin:'),
										type: 'origin',
										name: 'origin',
										value: _.findWhere(Configuration.get('transactionRecordOriginMapping'),{
												origin: order.get('origin')
											}
										).name
									};
								} else {
									dynamic_column = {
										label: Utils.translate('Status:'),
										type: 'status',
										name: 'status',
										value: order.get('status').name
									};
								}
			
								const columns = [
									{
										label: Utils.translate('Date:'),
										type: 'date',
										name: 'date',
										value: order.get('trandate')
									},
									{
										label: Utils.translate('Amount:'),
										type: 'currency',
										name: 'amount',
										value: order.get('amount_formatted')
									},
									{
										type: 'tracking-url',
										name: 'trackingUrl',
										compositeKey: 'TrackOrderCustomizationView',
										composite: new TrackOrderCustomizationView({
											model: new Backbone.Model({
												trackingUrl: order.get('anwb_trackingUrl'),
												
											}),
											showContentOnEmpty: true,
											contentClass: 'tracking-order-customization',
											collapseElements: true
										})
									}
									
								];
			
								columns.splice(2, 0, dynamic_column);
			
								const model = new Backbone.Model({
									title: new Handlebars.SafeString(
										Utils.translate('<span class="tranid">$(0)</span>', order.get('tranid'))
									),
									touchpoint: 'customercenter',
									detailsURL: `/purchases/view/${order.get('recordtype')}/${order.get('internalid')}`,
									recordType: order.get('recordtype'),
									id: order.get('internalid'),
									internalid: order.get('internalid'),
									trackingNumbers: order.get('trackingnumbers'),
									trackingUrl: order.get('anwb_trackingUrl'),
									columns: columns
								});
			
								return model;
							})
						);
			
						return new BackboneCollectionView({
							childView: RecordViewsView,
							collection: records_collection,
							viewsPerRow: 1
						});
					}
				})
			})


			/**
			* @description change the layout of order history package to my viewfile
			*/

			_.extend(OrderHistoryPackagesView.prototype,{
				childViews: _.extend({}, OrderHistoryPackagesView.prototype.childViews, {
					TrackingNumbers: function() {
						
						return new TrackOrderHistoryCustomizationView({
							model: new Backbone.Model({ trackingUrl: this.model.get('trackingUrl') }),
							showTrackPackagesLabel: true
						});
					},
				})
			})

			_.extend(OrderHistoryDetailsView.prototype,{
				getOrderPackages: function() {
					
					var shippable_packages = this.getShippablePackages();
					var self = this;
					_.each(shippable_packages,(data)=>{
						data.trackingUrl = self.model.get('anwb_trackingUrl');
						return data;
					})
					
					const instore_packages = this.getInstorePackages();
			
					return shippable_packages.concat(instore_packages);
				},
			})

		}
	};
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["CA.AddressBookCustomization.AddressBookCustomization.View","CA.AddressBookCustomization.AddressBookCustomization.Model","CA.HeaderMenuCustomization.HeaderMenuCustomization.View","CA.HeaderMenuCustomization.HeaderMenuCustomization.Model","CA.MyAccountCustomization.MyAccountCustomization.View","CA.MyAccountCustomization.MyAccountCustomization.Model","CA.MyAccountCustomization.MyAccountCustomization.SS2Model","CA.TrackOrderCustomization.TrackOrderCustomization.View","CA.TrackOrderCustomization.TrackOrderCustomization.Model","CA.TrackOrderCustomization.TrackOrderHistoryCustomization.View"];
try{
	extensions['CA.AddressBookCustomization.1.0.0']();
	SC.addExtensionModule('CA.AddressBookCustomization.AddressBookCustomization');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CA.HeaderMenuCustomization.1.0.0']();
	SC.addExtensionModule('CA.HeaderMenuCustomization.HeaderMenuCustomization');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CA.MyAccountCustomization.1.0.0']();
	SC.addExtensionModule('CA.MyAccountCustomization.MyAccountCustomization');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CA.TrackOrderCustomization.1.0.0']();
	SC.addExtensionModule('CA.TrackOrderCustomization.TrackOrderCustomization');
}
catch(error)
{
	console.error(error);
}

