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

extensions['CA.CheckoutCustomization.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/CheckoutCustomization/1.0.0/' + asset;
}

// @module CA.CheckoutCustomization.CheckoutCustomization
define('CA.CheckoutCustomization.CheckoutCustomization.View'
,	[
	'ca_checkoutcustomization_checkoutcustomization.tpl'
	
	// ,	'CA.CheckoutCustomization.CheckoutCustomization.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_checkoutcustomization_checkoutcustomization_tpl
	
	// ,	CheckoutCustomizationSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.CheckoutCustomization.CheckoutCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_checkoutcustomization_checkoutcustomization_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new CheckoutCustomizationModel();
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

		//@method getContext @return CA.CheckoutCustomization.CheckoutCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class CA.CheckoutCustomization.CheckoutCustomization.View.Context
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
define("CA.CheckoutCustomization.CheckoutCustomization.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/CheckoutCustomization.Service.ss"
            )
        )
        
});
});



define(
	'CA.CheckoutCustomization.CheckoutCustomization'
,   [
		'CA.CheckoutCustomization.CheckoutCustomization.View'
	,	'Profile.Model'
	,	'OrderWizard.Module.Shipmethod'
	,	'OrderWizard.Module.Address'
	,	'Configuration'
	,	'Utils'
	,	'OrderWizard.Module.ShowShipments'
	,	'OrderWizard.Module.Title'
	]
,   function (
		CheckoutCustomizationView
	,	ProfileModel
	,	OrderWizardModuleShipmethod
	,	OrderWizardModuleAddress
	,	Configuration
	,	Utils
	,	OrderWizardModuleShowShipments
	,	OrderWizardModuleTitle

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
			var checkout = container.getComponent('Checkout');
			
			if(layout)
			{
				/**
				* @description remove the payment method title in checkout page/
				*/
				
				_.extend(OrderWizardModuleTitle.prototype,{
					getContext:_.wrap(OrderWizardModuleTitle.prototype.getContext,function getContext(fn){
						var Title = ''
						if((this.getTitle() == 'Betaling')){
							Title = ''
						}else{
							Title = this.getTitle();
						}
						
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						context.title= Title;
						return context;
					})
				})
				// end
				_.extend(OrderWizardModuleShipmethod.prototype,{
					getContext:_.wrap(OrderWizardModuleShipmethod.prototype.getContext, function getContext(fn){
						var self = this;
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						const shipping_methods = this.model.get('shipmethods').map(function(shipmethod) {
							return {
								name: shipmethod.get('name'),
								rate_formatted: shipmethod.get('rate_formatted'),
								internalid: shipmethod.get('internalid'),
								isActive: shipmethod.get('internalid') === self.model.get('shipmethod')
							};
						});
						
						var CustomerSelectedShippingMethod = shipping_methods.filter((data)=>{
							return data.isActive == true
						})
						
						if(CustomerSelectedShippingMethod.length > 0){
							context.CustomerShippingMethodlength = true;
						}else{
							context.CustomerShippingMethodlength = false;
						}
						
						context.CustomerShippingMethod = CustomerSelectedShippingMethod;

						

						var ConfigurationData = Configuration.get('checkoutcustomization');
						
						if(ConfigurationData.deliverymethodMessage !== ''){
							context.deliveryMethodMessage = ConfigurationData.deliverymethodMessage;
						}

						return context;

					})
				})

				_.extend(OrderWizardModuleShowShipments.prototype,{
					getContext:function (){
						const self = this;
						const selected_shipmethod = this.model
							.get('shipmethods')
							.findWhere({ internalid: this.model.get('shipmethod') });
						const shipping_methods = this.model.get('shipmethods').map(function(shipmethod) {
							return {
								name: shipmethod.get('name'),
								rate_formatted: shipmethod.get('rate_formatted'),
								internalid: shipmethod.get('internalid'),
								isActive: shipmethod.get('internalid') === self.model.get('shipmethod')
							};
						});
						var CustomerSelectedShippingMethod = shipping_methods.filter((data)=>{
							return data.isActive == true
						})
						const address_source = this.addressSource.get(this.model.get('shipaddress'));
				
						// @class OrderWizard.Module.ShowShipments.Context
						return {
							// @property {LiveOrder.Model} model
							model: this.model,
							// @property {Boolean} showShippingInformation Indicate if the shipmethod select should be shown or not. Used when in SST all items are non shippable
							showShippingInformation: !!this.model.shippingAddressIsRequired(),
							// @property {Boolean} showShippingAddress
							showShippingAddress: !!address_source,
							// @property {String} editUrl
							editUrl: this.options.edit_url,
							// @property {Boolean} showEditButton
							showEditButton: !!this.options.edit_url,
							// @property {Boolean}
							showSelectedShipmethod: !!selected_shipmethod,
							// @property {Object} selectedShipmethod
							selectedShipmethod: selected_shipmethod,
							// @property {Array} shippingMethods
							shippingMethods: CustomerSelectedShippingMethod,
							// @property {Boolean} showShippingMetod
							showShippingMetod: !this.options.hideShippingMethod,
							// @property {String} shippingAddress
							shippingAddress: !!address_source && address_source.get('fullname')
						};
					}
				})

				_.extend(OrderWizardModuleAddress.prototype,{
					getContext:_.wrap(OrderWizardModuleAddress.prototype.getContext, function getContext(fn){
						var self = this;
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						
						var ConfigurationData = Configuration.get('checkoutcustomization');

						if(ConfigurationData.AddressMessage !== ''){
							context.addressMessage = Utils.translate(ConfigurationData.AddressMessage);
						}

				
						return context;
					})
				})
			}

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

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["CA.AddressBookCustomization.AddressBookCustomization.View","CA.AddressBookCustomization.AddressBookCustomization.Model","CA.CheckoutCustomization.CheckoutCustomization.View","CA.CheckoutCustomization.CheckoutCustomization.Model","CA.HeaderMenuCustomization.HeaderMenuCustomization.View","CA.HeaderMenuCustomization.HeaderMenuCustomization.Model","CA.MyAccountCustomization.MyAccountCustomization.View","CA.MyAccountCustomization.MyAccountCustomization.Model","CA.MyAccountCustomization.MyAccountCustomization.SS2Model"];
try{
	extensions['CA.AddressBookCustomization.1.0.0']();
	SC.addExtensionModule('CA.AddressBookCustomization.AddressBookCustomization');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CA.CheckoutCustomization.1.0.0']();
	SC.addExtensionModule('CA.CheckoutCustomization.CheckoutCustomization');
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

