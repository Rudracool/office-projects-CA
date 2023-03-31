var extensions = {};

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

extensions['CA.HideAddtoCartBtnInGiftItem.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/HideAddtoCartBtnInGiftItem/1.0.0/' + asset;
}

// @module CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem
define('CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.View'
,	[
	'ca_hideaddtocartbtningiftitem_hideaddtocartbtningiftitem.tpl'
	
	,	'CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_hideaddtocartbtningiftitem_hideaddtocartbtningiftitem_tpl
	
	,	HideAddtoCartBtnInGiftItemSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_hideaddtocartbtningiftitem_hideaddtocartbtningiftitem_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new HideAddtoCartBtnInGiftItemModel();
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

		//@method getContext @return CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.View.Context
	,	getContext: function getContext()
		{
			//@class CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.View.Context
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
define("CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/HideAddtoCartBtnInGiftItem.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/HideAddtoCartBtnInGiftItem/SuiteScript2/HideAddtoCartBtnInGiftItem.Service.ss"
            ),
            true
        )
});
});



define(
	'CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem'
,   [
		'CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.View'
	,	'Cart.AddToCart.Button.View'
	]
,   function (
		HideAddtoCartBtnInGiftItemView
	,	CartAddToCartButtonView
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
			
			_.extend(CartAddToCartButtonView.prototype,{
				getContext:_.wrap(CartAddToCartButtonView.prototype.getContext,function getContext(fn){
					var self = this;
					let context = fn.apply(this, _.toArray(arguments).slice(1));
					var itemType =self.model.get('item').get('itemtype');
					var showAddToCartButton = true;
					if (itemType === "GiftCert") {
						showAddToCartButton = false;
					}
					context.showaddtocartbtn = showAddToCartButton;
					return context;
				})
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

extensions['CA.PDPCustomization.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/PDPCustomization/1.0.0/' + asset;
}

// Model.js
// -----------------------
// @module Case
define("CA.PDPCustomization.PDPCustomization.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/PDPCustomization.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CA.PDPCustomization.PDPCustomization.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/PDPCustomization/SuiteScript2/PDPCustomization.Service.ss"
            ),
            true
        )
});
});


// @module CA.PDPCustomization.PDPCustomization
define('CA.PDPCustomization.PDPCustomSalesUnit.View'
,	[
	'pdp_custom_sales_unit.tpl'	
	,	'Backbone'
    ]
, function (
	pdp_custom_sales_unit_tpl
	,	Backbone
)
{
    'use strict';

	// @class CA.PDPCustomization.PDPCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: pdp_custom_sales_unit_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			this.model = options.model;
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return CA.PDPCustomization.PDPCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class CA.PDPCustomization.PDPCustomization.View.Context
			
			return {
				customSalesUnit:this.model.get('custitem_anwb_sales_unit')
			};
		}
	});
});


// @module CA.PDPCustomization.PDPCustomization
define('CA.PDPCustomization.PDPSalesUnit.View'
,	[
	    'pdp_sales_unit.tpl'
	,	'Backbone'
    ]
, function (
        pdp_sales_unit_tpl	
	,	Backbone
)
{
    'use strict';

	// @class CA.PDPCustomization.PDPCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: pdp_sales_unit_tpl

	,	initialize: function (options) {
		    this.model = options.model;

		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return CA.PDPCustomization.PDPCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class CA.PDPCustomization.PDPCustomization.View.Context
			
			return {
				salesUnit: this.model.get('saleunit')
			};
		}
	});
});



define(
	'CA.PDPCustomization.PDPCustomization'
,   [
		'CA.PDPCustomization.PDPCustomSalesUnit.View'
	,	'CA.PDPCustomization.PDPCustomization.Model'
	,	'ProductDetails.Full.View'
	,   'ProductDetails.Base.View'
	,   'ProductDetails.Quantity.View'
	,   'Profile.Model'
	,   'Backbone'
	,   'Utils'
	,   'AjaxRequestsKiller'
	,   'underscore'
	,   'Configuration'
	,	'CA.PDPCustomization.PDPSalesUnit.View'
	,	'ProductDetails.QuickView.View'
	]
,   function (
		PDPCustomSalesUnitView
	,	PDPCustomizationModel
	,	ProductDetailsFullView
	,   ProductDetailsBaseView
	,   ProductDetailsQuantityView
	,   ProfileModel
	,   Backbone
	,   Utils
	,   AjaxRequestsKiller
	,   _
	,   Configuration
	,	PDPSalesUnitView
	,	ProductDetailsQuickViewView
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
			var layout = container.getComponent("Layout");
            let profile = ProfileModel.getInstance();
            var PDP = container.getComponent("PDP");

			ProductDetailsBaseView.prototype.productDetails = function productDetails(api_query, options) {
				const application = this.application;
				const product = this.model;
				const promise = jQuery.Deferred();
				const item = product.get('item');
				const self = this;
				var PDPCustompdfModel = new PDPCustomizationModel();

				item.fetch({
					data: api_query,
					killerId: AjaxRequestsKiller.getKillerId(),
					pageGeneratorPreload: true
				}).then(
					// Success function
					function (data, _result, jqXhr) {
						if (!item.isNew()) {
							// once the item is fully loaded we set its options
							product.setOptionsFromURL(options);

							product.set('source', options && options.source);

							product.set('internalid', options && options.internalid);

							if (
								api_query.id &&
								item.get('urlcomponent') &&
								SC.ENVIRONMENT.jsEnvironment === 'server'
							) {
								nsglobal.statusCode = 301;
								nsglobal.location = product.generateURL();
							}

							if (data.corrections && data.corrections.length > 0) {
								if (
									item.get('urlcomponent') &&
									SC.ENVIRONMENT.jsEnvironment === 'server'
								) {
									nsglobal.statusCode = 301;
									nsglobal.location = data.corrections[0].url + product.getQuery();
								} else {
									Backbone.history.navigate(
										`#${data.corrections[0].url}${product.getQuery()}`,
										{ trigger: true }
									);
									promise.reject();
								}
							}

							self.bindModel();
							var itemid = self.model.get('item').get('itemid');
							
							var id = self.model.get('item').get('internalid');

							PDPCustompdfModel.save({ id: id, sku: itemid }).done((res) => {
								self.pdfsExtras = res.lengthExtras;
								promise.resolve();
							})
							

						} else if (jqXhr.status >= 500) {
							application.getLayout().internalError();
							promise.reject();
						} else if (jqXhr.responseJSON.errorCode !== 'ERR_USER_SESSION_TIMED_OUT') {
							// We just show the 404 page
							application.getLayout().notFound();
							promise.reject();
						}
					},
					// Error function
					function (jqXhr) {
						// this will stop the ErrorManagment module to process this error
						// as we are taking care of it
						jqXhr.preventDefault = true;

						if (jqXhr.status >= 500) {
							application.getLayout().internalError();
							promise.reject();
						} else if (jqXhr.responseJSON.errorCode !== 'ERR_USER_SESSION_TIMED_OUT') {
							// We just show the 404 page
							application.getLayout().notFound();
							promise.reject();
						}
					}
				);

				return promise;
			}

			_.extend(ProductDetailsQuickViewView.prototype,{
				childViews:_.extend({},ProductDetailsQuickViewView.prototype.childViews,{
					'CustomSalesunit':function(){
						
						return new PDPCustomSalesUnitView({
							model:this.model.get('item')
						})
					},
					// 'Salesunit':function(){
						
					// 	return new PDPSalesUnitView({
					// 		model:this.model.get('item')
					// 	})
					// }
				}),
			})

			_.extend(ProductDetailsFullView.prototype, {
				events: {

					'click [data-action="tabs-change"]': 'tabChange'

				},
				childViews:_.extend({},ProductDetailsFullView.prototype.childViews,{
					'CustomSalesunit':function(){
						
						return new PDPCustomSalesUnitView({
							model:this.model.get('item')
						})
					},
					// 'Salesunit':function(){
						
					// 	return new PDPSalesUnitView({
					// 		model:this.model.get('item')
					// 	})
					// }
				}),

				tabChange: function (event) {
					var i, tabcontent, tablinks;
					tabcontent = $('.tabcontent');
					for (i = 0; i < tabcontent.length; i++) {
						tabcontent[i].style.display = "none";
					}
					tablinks = $('.tablinks');
					for (i = 0; i < tablinks.length; i++) {
						tablinks[i].className = tablinks[i].className.replace("active", "");
					}
					var tabName = $(event.target).data('id');
					$(`#${tabName}`).css('display', 'block');
					event.currentTarget.className += " active";


				},
				getContext: _.wrap(ProductDetailsFullView.prototype.getContext, function getContext(fn) {
					var self = this;
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					
					_.each(self.pdfsExtras, (pdf) => {
						var PDF = pdf.name;
						var pdfname = PDF.substr(PDF.indexOf("_") + 1);
						pdfname = pdfname.substr(0, pdfname.indexOf("."));
						pdf.name = pdfname;

						var url = pdf.url;
						var ext = url.substr(url.lastIndexOf('.') + 1);
						pdf.xls = false; pdf.doc = false; pdf.pdf = false; pdf.img = false;
						if (ext == 'xls') {
							pdf.xls = true;
						}
						if (ext == 'doc') {
							pdf.doc = true;
						}
						if (ext == 'pdf') {
							pdf.pdf = true;
						}
						if (ext !== 'pdf' && ext !== 'doc' && ext !== 'xls') {
							pdf.img = true;
						}

					})
					if (self.pdfsExtras.length > 0) {
						context.isDownloadsAvailable = true;
					} else {
						context.isDownloadsAvailable = false;
					}
					context.pdfsExtras = self.pdfsExtras;
					return context;
				})
			})

		}
	};
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["CA.HeaderMenuCustomization.HeaderMenuCustomization.View","CA.HeaderMenuCustomization.HeaderMenuCustomization.Model","CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.View","CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.Model","CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.SS2Model","CA.MyAccountCustomization.MyAccountCustomization.View","CA.MyAccountCustomization.MyAccountCustomization.Model","CA.MyAccountCustomization.MyAccountCustomization.SS2Model","CA.PDPCustomization.PDPCustomization.Model","CA.PDPCustomization.PDPCustomization.SS2Model","CA.PDPCustomization.PDPCustomSalesUnit.View","CA.PDPCustomization.PDPSalesUnit.View"];
try{
	extensions['CA.HeaderMenuCustomization.1.0.0']();
	SC.addExtensionModule('CA.HeaderMenuCustomization.HeaderMenuCustomization');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CA.HideAddtoCartBtnInGiftItem.1.0.0']();
	SC.addExtensionModule('CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem');
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
	extensions['CA.PDPCustomization.1.0.0']();
	SC.addExtensionModule('CA.PDPCustomization.PDPCustomization');
}
catch(error)
{
	console.error(error);
}

