var extensions = {};

extensions['Asu.AdvancedSignUp.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Asu/AdvancedSignUp/1.0.0/' + asset;
}

// @module Asu.AdvancedSignUp.AdvancedSignUpModule
define('Asu.AdvancedSignUp.AdvancedSignUpModule.View'
,	[
	'asu_advancedsignup_advancedsignupmodule.tpl'

	,'login_register_register.tpl'

	,'Asu.AdvancedSignUp.AdvancedSignUpModule.Model'
	
	,	'Asu.AdvancedSignUp.AdvancedSignUpModule.SS2Model'
	
	,	'Backbone'
    ]
, function (
	asu_advancedsignup_advancedsignupmodule_tpl

	,	login_register_register_tpl

	,	AdvancedSignUpModuleModel
	
	,	AdvancedSignUpModuleSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Asu.AdvancedSignUp.AdvancedSignUpModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: asu_advancedsignup_advancedsignupmodule_tpl

	,	initialize: function (options) {


		// this.model = options.model || new AccountRegisterModel();
			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new AdvancedSignUpModuleModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		// 'click [data-action="senddata"]': "senddata",
		'click [data-action="senddata"]': "submitdata",
		// 'submit form': 'submitForm'
		}

	,	bindings: {
		// '[name="firstname"]': 'firstname',
        // '[name="lastname"]': 'lastname',
        // '[name="email"]': 'email',
		},

		// senddata: function(e) {
		// 	e.preventDefault();
		// 	var self = this;
		// 	// this.model.save().done(function(result) {
		// 	// 	self.message = result.message;
		// 	// 	self.render();
		// 	// });

		// 	var model = new AdvancedSignUpModuleModel();   
        //          var  data = {
        //                     subject : "Custom Quote  Details",
        //                     author:"116",
        //                     recipient: emailid,
        //                     body: self.ItemstoMail,
        //                 }
                
        //         model.save(data, {
        //             success: function (model, response) {
        //                 if(response == true){

        //                 $('.status-msg').html('<div class="alert alert-success">Quote has been Emailed successfully</div>').css('color', 'green');
                        
        //                 setTimeout(function(){    
        //                 $('.modal-backdrop').remove();
        //                 $('.modal').modal('hide').fadeIn();
        //                     self.render();  
        //                 }, 1000);
        //             }else{
        //                     console.log("model",model)
        //                     console.log("response",response)
        //                     // $('.status-msg').html('<div class="alert alert-danger">Please enter a valid email address</div>').css('color', 'red');
        //                 }
        //             },
        //             error: function (model, response) {
        //                 console.log(" Error model",model);
        //                 console.log(" Error response",response);
        //                 $('.status-msg').html('<div class="alert alert-danger"> Quote has not been Emailed</div>').css('color', 'red');
        //             }
        //         });
		// },
	
		submitdata: function(e, model, props) {
        e.preventDefault();
        
		var data = jQuery(e.target).closest('form').serializeObject();
        
		console.log("DATA", data)
        
		var model = new AdvancedSignUpModuleModel();   
                //  var  data = {
                //             subject : "Custom Quote  Details",
                //             author:"116",
                //             recipient: emailid,
                //             body: self.ItemstoMail,
                //         }

				console.log("MODEL",model);
                
                model.save(data, {
                    success: function (model, response) {
                        if(_.has(response,'id')){

                        $('.status-msg').html('<div class="alert alert-success">A Lead Record has been created successfully</div>').css('color', 'green');
                        
                        setTimeout(function(){    
                        $('.modal-backdrop').remove();
                        $('.modal').modal('hide').fadeIn();
                            self.render();  
                        }, 1000);
                    }else{
                            console.log("model",model)
                            console.log("response",response)
                            $('.status-msg').html('<div class="alert alert-danger">Email already Exists </div>').css('color', 'red');
                        }
                    },
                    error: function (model, response) {
                        console.log(" Error model",model);
                        console.log(" Error response",response);
                        $('.status-msg').html('<div class="alert alert-danger"> Failed</div>').css('color', 'red');
                    }
                });
         

        // const loggers = Loggers.getLogger();
		// console.log("loggers", loggers);	
        // const actionId = loggers.start('Customer Registration');

        // const self = this;
        // const data = (jQuery(e.target).closest('form')).serializeObject();

        // return this.cancelableTrigger('before:LoginRegister.register', data).then(function() {
        //     const promise = self.saveForm(e, model, props);

        //     if (promise) {
        //         promise.done(() => {
        //             loggers.end(actionId, {
        //                 operationIds: self.model.getOperationIds(),
        //                 status: 'success'
        //             });
        //         });
        //     }
        // });
    },

	 	childViews: {

		}

		//@method getContext @return Asu.AdvancedSignUp.AdvancedSignUpModule.View.Context
	,	getContext: function getContext()
		{
			console.log("ASU");
			//@class Asu.AdvancedSignUp.AdvancedSignUpModule.View.Context
			this.message = this.message || 'advanced sign up!!'
			return {
				message: this.message,
				advancesignup:"true"
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("Asu.AdvancedSignUp.AdvancedSignUpModule.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/AdvancedSignUpModule.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Asu.AdvancedSignUp.AdvancedSignUpModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/AdvancedSignUpModule/SuiteScript2/AdvancedSignUpModule.Service.ss"
            ),
            true
        )
});
});



define(
	'Asu.AdvancedSignUp.AdvancedSignUpModule'
,   [
		'Asu.AdvancedSignUp.AdvancedSignUpModule.View',

		'LoginRegister.Register.View',
	]
,   function (
		AdvancedSignUpModuleView

		,	LoginRegisterRegisterView
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
			
			if(layout)
			{
				layout.addChildView('signup', function() { 
					return new AdvancedSignUpModuleView({ container: container });
				});
			}

		}
	};
});


};

extensions['CloudAlp.Certificates.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CloudAlp/Certificates/1.0.0/' + asset;
}

// @module CloudAlp.Certificates.Certificates
define('CloudAlp.Certificates.Certificates.View'
	, [
		'cloudalp_certificates_certificates.tpl'
		, 'underscore'
		, 'jQuery'
		, 'Profile.Model'
		, 'CloudAlp.Certificates.Certificates.Model'

		, 'Backbone'
	]
	, function (
		cloudalp_certificates_certificates_tpl
		, _
		, $
		, ProfileModel
		, CertificatesModel
		, Backbone
	) {
		'use strict';

		// @class CloudAlp.Certificates.Certificates.View @extends Backbone.View
		return Backbone.View.extend({

			template: cloudalp_certificates_certificates_tpl

			, initialize: function (options) {
				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/
			// 	var self = this;
			// 	self.model = new CertificatesModel();
			// 	self.model.fetch().done(function (result) {
			// 		// self.message = result.message;
			// 		self.model.set('record',result.record)
			// 		self.render();
			// 	});
			}

			, events: {
			}

			, bindings: {
			}

			, childViews: {

			}
			// , beforeShowContent: function () {
			// 	var promise = $.Deferred();
			// 	var self = this;
			// 	self.model = new CertificatesModel();
			// 	self.model.fetch().then(function (res) {
			// 		self.model.set('record', res.record)
			// 		promise.resolve();

			// 	})
			// 	return promise;
			// }
			//@method getContext @return CloudAlp.Certificates.Certificates.View.Context
			, getContext: function getContext() {
				var container = this.options.container;	
				// var Model = this.model.get('record');
				var Model =  container.Rec;
				var profileModel = ProfileModel.getInstance();
				var NoDataFound = false;
				var CustViewCertificates = [];
				var Record;
				var getRoleBasedPdf;
				if (_.isNull(Model)) {
					NoDataFound = true;
				} else {
					getRoleBasedPdf = Model.map(rec => {
						let email1 = rec.columns.email;
						let email2 = profileModel.get('email');
						if (email1 === email2) {
							return rec;
						}
					});
				}
				let MatchRolesPdf = _.compact(getRoleBasedPdf);
				if (_.isEmpty(MatchRolesPdf)) {
					Record = Model;
				} else {
					Record = MatchRolesPdf;
				}	
				_.each(Record, (doc) => {
					if (doc.columns.custrecord_pdf_doc_1){
						let File = 	doc.columns.custrecord_pdf_doc_1.name;
						let removePdfext =	File.split('.pdf').join('');
						CustViewCertificates.push({
							pdf: doc.columns.custrecord_pdf_doc_1.name,
							id: doc.columns.custrecord_pdf_doc_1.internalid,
							file:removePdfext
						});
					}
						
					if (doc.columns.custrecord_pdf_doc_2){
						let File = 	doc.columns.custrecord_pdf_doc_2.name;
						let removePdfext =	File.split('.pdf').join('');
						CustViewCertificates.push({
							pdf: doc.columns.custrecord_pdf_doc_2.name,
							id: doc.columns.custrecord_pdf_doc_2.internalid,
							file:removePdfext
						});
					}
						
					if (doc.columns.custrecord_pdf_doc_3){
						let File = 	doc.columns.custrecord_pdf_doc_3.name;
						let removePdfext =	File.split('.pdf').join('');
						CustViewCertificates.push({
							pdf: doc.columns.custrecord_pdf_doc_3.name,
							id: doc.columns.custrecord_pdf_doc_3.internalid,
							file:removePdfext
						});
					}
						
					if (doc.columns.custrecord_pdf_doc_4){
						let File = 	doc.columns.custrecord_pdf_doc_4.name;
						let removePdfext =	File.split('.pdf').join('');
						CustViewCertificates.push({
							pdf: doc.columns.custrecord_pdf_doc_4.name,
							id: doc.columns.custrecord_pdf_doc_4.internalid,
							file:removePdfext
						});
					}
					
				});
				//@class CloudAlp.Certificates.Certificates.View.Context
				return {
					//@property {Array}
					records: CustViewCertificates,
					NoDataFound: NoDataFound
				}
			}
		});
	});


// Model.js
// -----------------------
// @module Case
define("CloudAlp.Certificates.Certificates.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/Certificates.Service.ss"
            )
        )
        
});
});



define(
	'CloudAlp.Certificates.Certificates'
,   [
		'CloudAlp.Certificates.Certificates.View'
		,'Header.Menu.MyAccount.View'
		,'MyAccountMenu'
		,'MenuTree.View'
		,'Backbone.View'
		,'Utils'
		,'underscore'
		,'Configuration'
	]
,   function (
		CertificatesView
		,HeaderMenuMyAccountView
		,myaccount
		,MenuTreeView
		,BackboneView
		,Utils
	,	_
	,Configuration
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			
			/** @type {LayoutComponent} */
			// var layout = container.getComponent('Layout');
			var self = this;
			const myaccountmenu = container.getComponent("MyAccountMenu");
			const pageType = container.getComponent('PageType');
			var url = Utils.getAbsoluteUrl(
				getExtensionAssetsPath(
					"services/Certificates.Service.ss"
				)
			)
			let ConfigRoleId = parseInt(Configuration.get('Certificates.roleId'));
			var promise = $.get(url);
			 promise.then(function(res){
			{
				container.Rec = res.record;
				container.role = res.role;
			}
			 })

			myaccountmenu.addGroup({
				id:'Certificates',
				name: Utils.translate('Certificates'),
				url:'certificates',
				index:6
			});
			pageType.registerPageType({
				name: 'Certificates',
				routes: ['certificates'],
				 view:CertificatesView,
				 defaultTemplate: {
						name: 'cloudalp_certificates_certificates.tpl',
						displayName:'Certificates'
				}
		});
		// _.extend(OverviewHomeView.prototype,{
		// 	getContext: _.wrap(OverviewHomeView.prototype.getContext, function getContext(fn){
		// 		var context = fn.apply(this, _.toArray(arguments).slice(1));
		// 		let role =  container.role;
		// 			if(role == ConfigRoleId){
		// 				$(document).ready(function(){
		// 					$('.overview-home').hide()
		// 					$('.overview-home-mysettings-shipping').hide()
		// 					$('.overview-home-mysettings-payment').hide()
		// 				})
		// 			}
				
		// 	 })
		// })
	
			_.extend(HeaderMenuMyAccountView.prototype,{
				getContext: _.wrap(HeaderMenuMyAccountView.prototype.getContext, function getContext(fn){
			 var context = fn.apply(this, _.toArray(arguments).slice(1)); 
			 let role =  container.role;
				 MenuTreeView.prototype.render = _.wrap(MenuTreeView.prototype.render, function(...args){
					this.modifiedentries =	this.backwardCompatibilitySanitize(
											myaccount.getInstance().getEntries() 
							 );
					if(role == ConfigRoleId){
						var menuitems = [];
						var showitem = ["Certificates","settings","cases"];
						_.each(this.modifiedentries, function(item){
								if(showitem.includes(item.id)){
									menuitems.push(item)
								}
							})
	
					}else {
						var menuitems = this.modifiedentries
					}
				 
				 this.fixedMenuItems = menuitems
	 
				 BackboneView.prototype.render.apply(this, args);
			 
				 })
				 if(role == ConfigRoleId){
					var menu = [];
					var showitem = ["Certificates","settings","cases"];
					_.each(myaccount.getInstance().getEntries(), function(item){
							if(showitem.includes(item.id)){
								menu.push(item)
							}
						})
					context.entries =  menu
				 }
				 return context
				}) 
			
			})
	
	
		
		}
	};
});


};

extensions['CA.customAddresses.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/customAddresses/1.0.0/' + asset;
}

// @module CA.customAddresses.customAddress
define('CA.customAddresses.customAddress.View'
,	[
	'ca_customaddresses_customaddress.tpl'
	
	,	'CA.customAddresses.customAddress.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_customaddresses_customaddress_tpl
	
	,	customAddressSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.customAddresses.customAddress.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_customaddresses_customaddress_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new customAddressModel();
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

		//@method getContext @return CA.customAddresses.customAddress.View.Context
	,	getContext: function getContext()
		{
			//@class CA.customAddresses.customAddress.View.Context
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
define("CA.customAddresses.customAddress.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/customAddress.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CA.customAddresses.customAddress.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/customAddress/SuiteScript2/customAddress.Service.ss"
            ),
            true
        )
});
});



define(
	'CA.customAddresses.customAddress'
,   [
		'CA.customAddresses.customAddress.View',
		'OrderWizard.Module.Confirmation',
		'Profile.Model',
		'CA.customAddresses.customAddress.Model',
		'jQuery'
		
	]
	, function (
		customAddressView,
		OrderWizardModuleConfirmation,
		ProfileModel,
		CAcustomAddressescustomAddressModel,
		jQuery
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');

				OrderWizardModuleConfirmation.prototype.removeaddress = function removeaddress() {
					var profile = ProfileModel.getInstance();
					console.log('in removeadd methos');
					_.each(profile.get('addresses').models, function (add) {
						var promise = jQuery.Deferred();
						debugger
						if (add.get('company') == 'CA') {
							var addremovemodel = new CAcustomAddressescustomAddressModel();
							addremovemodel.save({ addressId: add.get('internalid') }).done((res) => {
								promise.resolve();
							});
							return promise;
						}
					})
				};

				OrderWizardModuleConfirmation.prototype.getContext = _.wrap(OrderWizardModuleConfirmation.prototype.getContext, function (fn) {
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						var profile = ProfileModel.getInstance();
					    console.log("profile", profile.get('addresses'));
						debugger
						this.removeaddress();
						return context
				})
			}
		}
	});


};

extensions['CA.customFacetsItem.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/customFacetsItem/1.0.0/' + asset;
}

// @module CA.customFacetsItem.customFacetsItem
define('CA.customFacetsItem.customFacetsItem.View'
,	[
	'ca_customfacetsitem_customfacetsitem.tpl'
	
	,	'CA.customFacetsItem.customFacetsItem.Model'
	,	'Profile.Model'
	,	'Backbone'
	,	'Utils'
	,	'Facets.Browse.View'
    ]
, function (
	ca_customfacetsitem_customfacetsitem_tpl
	
	,	customFacetsItemModel
	,	ProfileModel
	,	Backbone
	,	Utils
	,	FacetsBrowseView
)
{
    'use strict';

	// @class CA.customFacetsItem.customFacetsItem.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_customfacetsitem_customfacetsitem_tpl

		,	beforeShowContent:function beforeShowContent(){
			var self = this;
			let FinalItemdata = [...new Set(this.options.container.records.itemIds)];
			var profileData = ProfileModel.getInstance();
			const promise =  jQuery.Deferred();
				Backbone.ajax({
					url:profileData.getSearchApiUrl()+"?id="+ FinalItemdata +"&fieldset=details",
					success:function(data){
						self.item= data;
						
					}
				})
				promise.resolve();
				this.contextData();
				return promise;
				
		}
	
		,	initialize: function (options) {

			
			
		}
	,
	events: {
		}

	,	bindings: {
		}


	, 	childViews: {

		}
	,	contextData:function(){
		_.extend(FacetsBrowseView.prototype,{
			initialize:_.wrap(FacetsBrowseView.prototype.initialize,function initialize(fn){
				fn.apply(this, _.toArray(arguments).slice(1));
				
			})
			
			
		})
	}

		//@method getContext @return CA.customFacetsItem.customFacetsItem.View.Context
	,	getContext: function getContext()
		{
			
			return {

			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("CA.customFacetsItem.customFacetsItem.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/customFacetsItem.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CA.customFacetsItem.customFacetsItem.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/customFacetsItem/SuiteScript2/customFacetsItem.Service.ss"
            ),
            true
        )
});
});



define(
	'CA.customFacetsItem.customFacetsItem'
,   [
		'CA.customFacetsItem.customFacetsItem.View'
	,	'Profile.Model'
	,	'Utils'
	,	'CA.customFacetsItem.customFacetsItem.Model'
    ,   'Backbone'
	]
,   function (
		customFacetsItemView
	,	ProfileModel
	,	Utils
	,	customFacetsItemModel
	,	Backbone
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
			var newTool = container.getComponent('PLP');
			
			var layout = container.getComponent('Layout');
			var profileData = ProfileModel.getInstance();
			this.model  = new customFacetsItemModel();
			var self = this;
			this.application = container;
			var promise =self.model.fetch().done(function (result) {
				self.records = result;
				self.application.records = result;
				});
				this.application.waitForPromise(promise);
				layout.on('afterShowContent', function () {
				// 	let FinalItemdata = [...new Set(self.application.records.itemIds)];
				// 	var callItem =Backbone.ajax({
				// 	url:profileData.getSearchApiUrl()+"?id="+ FinalItemdata +"&fieldset=details",
				// 	success:function(data){
				// 		container.item = data;
				// 	}
				// })
				// self.application.waitForPromise(callItem);
				if(profileData.get('isLoggedIn') == 'T'){
					$('#specialProducts').css('display','none');
					console.log(self);
					if(self.records.fieldValue == 'T'){
						$('#specialProducts').css('display','block');
					}
				}
				else{
					$('#specialProducts').css('display','none');
				}
			});
			var pageTypeComponent = container.getComponent("PageType");
            var pageType = {
                name: 'CA.customFacetsItem.customFacetsItem.View',
	            routes: ['special-products'],
                view: customFacetsItemView,
	            Option:{
		            container:container
	            }
            }
            pageTypeComponent.registerPageType(pageType);

		}
	};
});


};

extensions['STAXS.CustomSearchVue.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/STAXS/CustomSearchVue/1.0.0/' + asset;
}

// @module STAXS.CustomSearchVue.CustomSearchVue
define('STAXS.CustomSearchVue.CustomSearchVue.View'
	, [
		'staxs_customsearchvue_customsearchvue.tpl'

		, 'STAXS.CustomSearchVue.CustomSearchVue.Model'

		, 'Backbone'
		, 'vue'
		, 'lodash'
	]
	, function (
		staxs_customsearchvue_customsearchvue_tpl

		, CustomSearchVueModel

		, Backbone
		, vue
		, lodash
	) {


		// @class STAXS.CustomSearchVue.CustomSearchVue.View @extends Backbone.View
		return Backbone.View.extend({

			template: staxs_customsearchvue_customsearchvue_tpl

			, initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				this.model = new CustomSearchVueModel();

				// var self = this;
				// this.model.fetch().done(function (result) {
				// 	self.records = result.records;
				// 	self.render();
				// });

				// const app = vue.createApp({
				// 	template: '<h1>Welcome</h1>'
				// });
				// app.mount('#app');
			}
			, beforeShowContent: function () {
				var promise = jQuery.Deferred();
				this.model.fetch().then((res) => {
					promise.resolve();
				});
				return promise;
			}

			, events: {
				'change .cust-item-search': "cust_item_search"
			}

			, bindings: {
			}

			, childViews: {

			}
			, cust_item_search: function (e) {
				let userInput = (e.target.value).toLowerCase();
				var fil = lodash.filter(this.model.get('records'), (dataObj) => {
					if ((dataObj.name.indexOf(userInput) != -1)) {

						return dataObj;
					}
				});
				// window.vue = vue;
				// window.createApp = new vue({
				// 		el: "#app",
				// 		mounted: function (){
				// 		this.showcontent = true;
				// 	},

				// 	data: function (){
				// 			var data = lodash.extend(fil,{showcontent:false});
				// 			console.log(data ,"vue");
				// 			return data;
				// 	},
				// 		methods:{}

				// 	});
				// console.log( window.createApp._data,"window.createApp");
			}

			//@method getContext @return STAXS.CustomSearchVue.CustomSearchVue.View.Context
			, getContext: function getContext() {
				//@class STAXS.CustomSearchVue.CustomSearchVue.View.Context
				// this.message = this.message || 'Hello World!!';
				console.log(this.model.get('records'), "get");
				return {
					item: this.model.get('records')
				};
			}
		});
	});


// Model.js
// -----------------------
// @module Case
define("STAXS.CustomSearchVue.CustomSearchVue.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/CustomSearchVue.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("STAXS.CustomSearchVue.CustomSearchVue.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/CustomSearchVue/SuiteScript2/CustomSearchVue.Service.ss"
            ),
            true
        )
});
});


/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
 ;(function(){
  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.19';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            }
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }

      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
          return object;
        }

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      var low = 0,
          high = array == null ? 0 : array.length;
      if (high === 0) {
        return 0;
      }

      value = iteratee(value);
      var valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Check that cyclic values are equal.
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Check that cyclic values are equal.
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
      // and escape the comment, thus injecting code that gets evaled.
      var sourceURL = '//# sourceURL=' +
        (hasOwnProperty.call(options, 'sourceURL')
          ? (options.sourceURL + '').replace(/\s/g, ' ')
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(users, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(users, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name + '';
        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }
        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    define('lodash',function() {
      return _;
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
  }
  else {
    // Export to the global object.
    root._ = _;
  }

}.call(this));



/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
// !(function (e, t) {
//   'object' == typeof exports && 'undefined' != typeof module
//     ? (module.exports = t())
//     : 'function' == typeof define && define.amd
//     ? define(t)
//     : ((e = e || self).Vue = t())
// })(this, function () {
//   'use strict'
define('vue', ['jQuery', 'require'], function ($, require) {
  var e = Object.freeze({});
  function t(e) {
    return null == e;
  }
  function n(e) {
    return null != e;
  }
  function r(e) {
    return !0 === e;
  }
  function i(e) {
    return (
      'string' == typeof e ||
      'number' == typeof e ||
      'symbol' == typeof e ||
      'boolean' == typeof e
    );
  }
  function o(e) {
    return null !== e && 'object' == typeof e;
  }
  var a = Object.prototype.toString;
  function s(e) {
    return '[object Object]' === a.call(e);
  }
  function c(e) {
    var t = parseFloat(String(e));
    return t >= 0 && Math.floor(t) === t && isFinite(e);
  }
  function u(e) {
    return n(e) && 'function' == typeof e.then && 'function' == typeof e.catch;
  }
  function l(e) {
    return null == e
      ? ''
      : Array.isArray(e) || (s(e) && e.toString === a)
        ? JSON.stringify(e, null, 2)
        : String(e);
  }
  function f(e) {
    var t = parseFloat(e);
    return isNaN(t) ? e : t;
  }
  function p(e, t) {
    for (
      var n = Object.create(null), r = e.split(','), i = 0;
      i < r.length;
      i++
    )
      n[r[i]] = !0;
    return t
      ? function (e) {
        return n[e.toLowerCase()];
      }
      : function (e) {
        return n[e];
      };
  }
  var d = p('slot,component', !0),
    v = p('key,ref,slot,slot-scope,is');
  function h(e, t) {
    if (e.length) {
      var n = e.indexOf(t);
      if (n > -1) return e.splice(n, 1);
    }
  }
  var m = Object.prototype.hasOwnProperty;
  function y(e, t) {
    return m.call(e, t);
  }
  function g(e) {
    var t = Object.create(null);
    return function (n) {
      return t[n] || (t[n] = e(n));
    };
  }
  var _ = /-(\w)/g,
    b = g(function (e) {
      return e.replace(_, function (e, t) {
        return t ? t.toUpperCase() : '';
      });
    }),
    $ = g(function (e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }),
    w = /\B([A-Z])/g,
    C = g(function (e) {
      return e.replace(w, '-$1').toLowerCase();
    });
  var x = Function.prototype.bind
    ? function (e, t) {
      return e.bind(t);
    }
    : function (e, t) {
      function n(n) {
        var r = arguments.length;
        return r ? (r > 1 ? e.apply(t, arguments) : e.call(t, n)) : e.call(t);
      }
      return (n._length = e.length), n;
    };
  function k(e, t) {
    t = t || 0;
    for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
    return r;
  }
  function A(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function O(e) {
    for (var t = {}, n = 0; n < e.length; n++) e[n] && A(t, e[n]);
    return t;
  }
  function S(e, t, n) { }
  var T = function (e, t, n) {
    return !1;
  },
    N = function (e) {
      return e;
    };
  function E(e, t) {
    if (e === t) return !0;
    var n = o(e),
      r = o(t);
    if (!n || !r) return !n && !r && String(e) === String(t);
    try {
      var i = Array.isArray(e),
        a = Array.isArray(t);
      if (i && a)
        return (
          e.length === t.length &&
          e.every(function (e, n) {
            return E(e, t[n]);
          })
        );
      if (e instanceof Date && t instanceof Date)
        return e.getTime() === t.getTime();
      if (i || a) return !1;
      var s = Object.keys(e),
        c = Object.keys(t);
      return (
        s.length === c.length &&
        s.every(function (n) {
          return E(e[n], t[n]);
        })
      );
    } catch (e) {
      return !1;
    }
  }
  function j(e, t) {
    for (var n = 0; n < e.length; n++) if (E(e[n], t)) return n;
    return -1;
  }
  function D(e) {
    var t = !1;
    return function () {
      t || ((t = !0), e.apply(this, arguments));
    };
  }
  var L = 'data-server-rendered',
    I = ['component', 'directive', 'filter'],
    M = [
      'beforeCreate',
      'created',
      'beforeMount',
      'mounted',
      'beforeUpdate',
      'updated',
      'beforeDestroy',
      'destroyed',
      'activated',
      'deactivated',
      'errorCaptured',
      'serverPrefetch'
    ],
    F = {
      optionMergeStrategies: Object.create(null),
      silent: !1,
      productionTip: !1,
      devtools: !1,
      performance: !1,
      errorHandler: null,
      warnHandler: null,
      ignoredElements: [],
      keyCodes: Object.create(null),
      isReservedTag: T,
      isReservedAttr: T,
      isUnknownElement: T,
      getTagNamespace: S,
      parsePlatformTagName: N,
      mustUseProp: T,
      async: !0,
      _lifecycleHooks: M
    },
    P = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
  function R(e, t, n, r) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: !!r,
      writable: !0,
      configurable: !0
    });
  }
  var H = new RegExp('[^' + P.source + '.$_\\d]');
  var B,
    U = '__proto__' in {},
    V = 'undefined' != typeof window,
    z = 'undefined' != typeof WXEnvironment && !!WXEnvironment.platform,
    K = z && WXEnvironment.platform.toLowerCase(),
    J = V && window.navigator.userAgent.toLowerCase(),
    q = J && /msie|trident/.test(J),
    W = J && J.indexOf('msie 9.0') > 0,
    Z = J && J.indexOf('edge/') > 0,
    G =
      (J && J.indexOf('android'),
        (J && /iphone|ipad|ipod|ios/.test(J)) || 'ios' === K),
    X =
      (J && /chrome\/\d+/.test(J),
        J && /phantomjs/.test(J),
        J && J.match(/firefox\/(\d+)/)),
    Y = {}.watch,
    Q = !1;
  if (V)
    try {
      var ee = {};
      Object.defineProperty(ee, 'passive', {
        get: function () {
          Q = !0;
        }
      }),
        window.addEventListener('test-passive', null, ee);
    } catch (e) { }
  var te = function () {
    return (
      void 0 === B &&
      (B =
        !V &&
        !z &&
        'undefined' != typeof global &&
        global.process && 'server' === global.process.env.VUE_ENV),
      B
    );
  },
    ne = V && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
  function re(e) {
    return 'function' == typeof e && /native code/.test(e.toString());
  }
  var ie,
    oe =
      'undefined' != typeof Symbol &&
      re(Symbol) &&
      'undefined' != typeof Reflect &&
      re(Reflect.ownKeys);
  ie =
    'undefined' != typeof Set && re(Set)
      ? Set
      : (function () {
        function e() {
          this.set = Object.create(null);
        }
        return (
          (e.prototype.has = function (e) {
            return !0 === this.set[e];
          }),
          (e.prototype.add = function (e) {
            this.set[e] = !0;
          }),
          (e.prototype.clear = function () {
            this.set = Object.create(null);
          }),
          e
        );
      })();
  var ae = S,
    se = 0,
    ce = function () {
      ; (this.id = se++), (this.subs = []);
    }
    ; (ce.prototype.addSub = function (e) {
      this.subs.push(e);
    }),
      (ce.prototype.removeSub = function (e) {
        h(this.subs, e);
      }),
      (ce.prototype.depend = function () {
        ce.target && ce.target.addDep(this);
      }),
      (ce.prototype.notify = function () {
        for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++)
          e[t].update();
      }),
      (ce.target = null);
  var ue = [];
  function le(e) {
    ue.push(e), (ce.target = e);
  }
  function fe() {
    ue.pop(), (ce.target = ue[ue.length - 1]);
  }
  var pe = function (e, t, n, r, i, o, a, s) {
    ; (this.tag = e),
      (this.data = t),
      (this.children = n),
      (this.text = r),
      (this.elm = i),
      (this.ns = void 0),
      (this.context = o),
      (this.fnContext = void 0),
      (this.fnOptions = void 0),
      (this.fnScopeId = void 0),
      (this.key = t && t.key),
      (this.componentOptions = a),
      (this.componentInstance = void 0),
      (this.parent = void 0),
      (this.raw = !1),
      (this.isStatic = !1),
      (this.isRootInsert = !0),
      (this.isComment = !1),
      (this.isCloned = !1),
      (this.isOnce = !1),
      (this.asyncFactory = s),
      (this.asyncMeta = void 0),
      (this.isAsyncPlaceholder = !1);
  },
    de = { child: { configurable: !0 } }
    ; (de.child.get = function () {
      return this.componentInstance;
    }),
      Object.defineProperties(pe.prototype, de);
  var ve = function (e) {
    void 0 === e && (e = '');
    var t = new pe();
    return (t.text = e), (t.isComment = !0), t;
  };
  function he(e) {
    return new pe(void 0, void 0, void 0, String(e));
  }
  function me(e) {
    var t = new pe(
      e.tag,
      e.data,
      e.children && e.children.slice(),
      e.text,
      e.elm,
      e.context,
      e.componentOptions,
      e.asyncFactory
    );
    return (
      (t.ns = e.ns),
      (t.isStatic = e.isStatic),
      (t.key = e.key),
      (t.isComment = e.isComment),
      (t.fnContext = e.fnContext),
      (t.fnOptions = e.fnOptions),
      (t.fnScopeId = e.fnScopeId),
      (t.asyncMeta = e.asyncMeta),
      (t.isCloned = !0),
      t
    );
  }
  var ye = Array.prototype,
    ge = Object.create(ye)
    ;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(
      function (e) {
        var t = ye[e];
        R(ge, e, function () {
          for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
          var i,
            o = t.apply(this, n),
            a = this.__ob__;
          switch (e) {
            case 'push':
            case 'unshift':
              i = n;
              break;
            case 'splice':
              i = n.slice(2);
          }
          return i && a.observeArray(i), a.dep.notify(), o;
        });
      }
    );
  var _e = Object.getOwnPropertyNames(ge),
    be = !0;
  function $e(e) {
    be = e;
  }
  var we = function (e) {
    var t
      ; (this.value = e),
        (this.dep = new ce()),
        (this.vmCount = 0),
        R(e, '__ob__', this),
        Array.isArray(e)
          ? (U
            ? ((t = ge), (e.__proto__ = t))
            : (function (e, t, n) {
              for (var r = 0, i = n.length; r < i; r++) {
                var o = n[r];
                R(e, o, t[o]);
              }
            })(e, ge, _e),
            this.observeArray(e))
          : this.walk(e);
  };
  function Ce(e, t) {
    var n;
    if (o(e) && !(e instanceof pe))
      return (
        y(e, '__ob__') && e.__ob__ instanceof we
          ? (n = e.__ob__)
          : be &&
          !te() &&
          (Array.isArray(e) || s(e)) &&
          Object.isExtensible(e) &&
          !e._isVue &&
          (n = new we(e)),
        t && n && n.vmCount++,
        n
      );
  }
  function xe(e, t, n, r, i) {
    var o = new ce(),
      a = Object.getOwnPropertyDescriptor(e, t);
    if (!a || !1 !== a.configurable) {
      var s = a && a.get,
        c = a && a.set
        ; (s && !c) || 2 !== arguments.length || (n = e[t]);
      var u = !i && Ce(n);
      Object.defineProperty(e, t, {
        enumerable: !0,
        configurable: !0,
        get: function () {
          var t = s ? s.call(e) : n;
          return (
            ce.target &&
            (o.depend(),
              u &&
              (u.dep.depend(),
                Array.isArray(t) &&
                (function e(t) {
                  for (var n = void 0, r = 0, i = t.length; r < i; r++)
                    (n = t[r]) && n.__ob__ && n.__ob__.dep.depend(),
                      Array.isArray(n) && e(n);
                })(t))),
            t
          );
        },
        set: function (t) {
          var r = s ? s.call(e) : n;
          t === r ||
            (t != t && r != r) ||
            (s && !c) ||
            (c ? c.call(e, t) : (n = t), (u = !i && Ce(t)), o.notify());
        }
      });
    }
  }
  function ke(e, t, n) {
    if (Array.isArray(e) && c(t))
      return (e.length = Math.max(e.length, t)), e.splice(t, 1, n), n;
    if (t in e && !(t in Object.prototype)) return (e[t] = n), n;
    var r = e.__ob__;
    return e._isVue || (r && r.vmCount)
      ? n
      : r
        ? (xe(r.value, t, n), r.dep.notify(), n)
        : ((e[t] = n), n);
  }
  function Ae(e, t) {
    if (Array.isArray(e) && c(t)) e.splice(t, 1);
    else {
      var n = e.__ob__;
      e._isVue ||
        (n && n.vmCount) ||
        (y(e, t) && (delete e[t], n && n.dep.notify()));
    }
  }
  ; (we.prototype.walk = function (e) {
    for (var t = Object.keys(e), n = 0; n < t.length; n++) xe(e, t[n]);
  }),
    (we.prototype.observeArray = function (e) {
      for (var t = 0, n = e.length; t < n; t++) Ce(e[t]);
    });
  var Oe = F.optionMergeStrategies;
  function Se(e, t) {
    if (!t) return e;
    for (
      var n, r, i, o = oe ? Reflect.ownKeys(t) : Object.keys(t), a = 0;
      a < o.length;
      a++
    )
      '__ob__' !== (n = o[a]) &&
        ((r = e[n]),
          (i = t[n]),
          y(e, n) ? r !== i && s(r) && s(i) && Se(r, i) : ke(e, n, i));
    return e;
  }
  function Te(e, t, n) {
    return n
      ? function () {
        var r = 'function' == typeof t ? t.call(n, n) : t,
          i = 'function' == typeof e ? e.call(n, n) : e;
        return r ? Se(r, i) : i;
      }
      : t
        ? e
          ? function () {
            return Se(
              'function' == typeof t ? t.call(this, this) : t,
              'function' == typeof e ? e.call(this, this) : e
            );
          }
          : t
        : e;
  }
  function Ne(e, t) {
    var n = t ? (e ? e.concat(t) : Array.isArray(t) ? t : [t]) : e;
    return n
      ? (function (e) {
        for (var t = [], n = 0; n < e.length; n++)
          -1 === t.indexOf(e[n]) && t.push(e[n]);
        return t;
      })(n)
      : n;
  }
  function Ee(e, t, n, r) {
    var i = Object.create(e || null);
    return t ? A(i, t) : i;
  }
  ; (Oe.data = function (e, t, n) {
    return n ? Te(e, t, n) : t && 'function' != typeof t ? e : Te(e, t);
  }),
    M.forEach(function (e) {
      Oe[e] = Ne;
    }),
    I.forEach(function (e) {
      Oe[e + 's'] = Ee;
    }),
    (Oe.watch = function (e, t, n, r) {
      if ((e === Y && (e = void 0), t === Y && (t = void 0), !t))
        return Object.create(e || null);
      if (!e) return t;
      var i = {};
      for (var o in (A(i, e), t)) {
        var a = i[o],
          s = t[o];
        a && !Array.isArray(a) && (a = [a]),
          (i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s]);
      }
      return i;
    }),
    (Oe.props = Oe.methods = Oe.inject = Oe.computed = function (e, t, n, r) {
      if (!e) return t;
      var i = Object.create(null);
      return A(i, e), t && A(i, t), i;
    }),
    (Oe.provide = Te);
  var je = function (e, t) {
    return void 0 === t ? e : t;
  };
  function De(e, t, n) {
    if (
      ('function' == typeof t && (t = t.options),
        (function (e, t) {
          var n = e.props;
          if (n) {
            var r,
              i,
              o = {};
            if (Array.isArray(n))
              for (r = n.length; r--;)
                'string' == typeof (i = n[r]) && (o[b(i)] = { type: null });
            else if (s(n))
              for (var a in n) (i = n[a]), (o[b(a)] = s(i) ? i : { type: i });
            e.props = o;
          }
        })(t),
        (function (e, t) {
          var n = e.inject;
          if (n) {
            var r = (e.inject = {});
            if (Array.isArray(n))
              for (var i = 0; i < n.length; i++) r[n[i]] = { from: n[i] };
            else if (s(n))
              for (var o in n) {
                var a = n[o];
                r[o] = s(a) ? A({ from: o }, a) : { from: a };
              }
          }
        })(t),
        (function (e) {
          var t = e.directives;
          if (t)
            for (var n in t) {
              var r = t[n];
              'function' == typeof r && (t[n] = { bind: r, update: r });
            }
        })(t),
        !t._base && (t.extends && (e = De(e, t.extends, n)), t.mixins))
    )
      for (var r = 0, i = t.mixins.length; r < i; r++) e = De(e, t.mixins[r], n);
    var o,
      a = {};
    for (o in e) c(o);
    for (o in t) y(e, o) || c(o);
    function c(r) {
      var i = Oe[r] || je;
      a[r] = i(e[r], t[r], n, r);
    }
    return a;
  }
  function Le(e, t, n, r) {
    if ('string' == typeof n) {
      var i = e[t];
      if (y(i, n)) return i[n];
      var o = b(n);
      if (y(i, o)) return i[o];
      var a = $(o);
      return y(i, a) ? i[a] : i[n] || i[o] || i[a];
    }
  }
  function Ie(e, t, n, r) {
    var i = t[e],
      o = !y(n, e),
      a = n[e],
      s = Re(Boolean, i.type);
    if (s > -1)
      if (o && !y(i, 'default')) a = !1;
      else if ('' === a || a === C(e)) {
        var c = Re(String, i.type)
          ; (c < 0 || s < c) && (a = !0);
      }
    if (void 0 === a) {
      a = (function (e, t, n) {
        if (!y(t, 'default')) return;
        var r = t.default;
        if (
          e &&
          e.$options.propsData &&
          void 0 === e.$options.propsData[n] &&
          void 0 !== e._props[n]
        )
          return e._props[n];
        return 'function' == typeof r && 'Function' !== Fe(t.type)
          ? r.call(e)
          : r;
      })(r, i, e);
      var u = be;
      $e(!0), Ce(a), $e(u);
    }
    return a;
  }
  var Me = /^\s*function (\w+)/;
  function Fe(e) {
    var t = e && e.toString().match(Me);
    return t ? t[1] : '';
  }
  function Pe(e, t) {
    return Fe(e) === Fe(t);
  }
  function Re(e, t) {
    if (!Array.isArray(t)) return Pe(t, e) ? 0 : -1;
    for (var n = 0, r = t.length; n < r; n++) if (Pe(t[n], e)) return n;
    return -1;
  }
  function He(e, t, n) {
    le();
    try {
      if (t)
        for (var r = t; (r = r.$parent);) {
          var i = r.$options.errorCaptured;
          if (i)
            for (var o = 0; o < i.length; o++)
              try {
                if (!1 === i[o].call(r, e, t, n)) return;
              } catch (e) {
                Ue(e, r, 'errorCaptured hook');
              }
        }
      Ue(e, t, n);
    } finally {
      fe();
    }
  }
  function Be(e, t, n, r, i) {
    var o;
    try {
      ; (o = n ? e.apply(t, n) : e.call(t)) &&
        !o._isVue &&
        u(o) &&
        !o._handled &&
        (o.catch(function (e) {
          return He(e, r, i + ' (Promise/async)');
        }),
          (o._handled = !0));
    } catch (e) {
      He(e, r, i);
    }
    return o;
  }
  function Ue(e, t, n) {
    if (F.errorHandler)
      try {
        return F.errorHandler.call(null, e, t, n);
      } catch (t) {
        t !== e && Ve(t, null, 'config.errorHandler');
      }
    Ve(e, t, n);
  }
  function Ve(e, t, n) {
    if ((!V && !z) || 'undefined' == typeof console) throw e;
    console.error(e);
  }
  var ze,
    Ke = !1,
    Je = [],
    qe = !1;
  function We() {
    qe = !1;
    var e = Je.slice(0);
    Je.length = 0;
    for (var t = 0; t < e.length; t++) e[t]();
  }
  if ('undefined' != typeof Promise && re(Promise)) {
    var Ze = Promise.resolve()
      ; (ze = function () {
        Ze.then(We), G && setTimeout(S);
      }),
        (Ke = !0);
  } else if (
    q ||
    'undefined' == typeof MutationObserver ||
    (!re(MutationObserver) &&
      '[object MutationObserverConstructor]' !== MutationObserver.toString())
  )
    ze =
      'undefined' != typeof setImmediate && re(setImmediate)
        ? function () {
          setImmediate(We);
        }
        : function () {
          setTimeout(We, 0);
        };
  else {
    var Ge = 1,
      Xe = new MutationObserver(We),
      Ye = document.createTextNode(String(Ge));
    Xe.observe(Ye, { characterData: !0 }),
      (ze = function () {
        ; (Ge = (Ge + 1) % 2), (Ye.data = String(Ge));
      }),
      (Ke = !0);
  }
  function Qe(e, t) {
    var n;
    if (
      (Je.push(function () {
        if (e)
          try {
            e.call(t);
          } catch (e) {
            He(e, t, 'nextTick');
          }
        else n && n(t);
      }),
        qe || ((qe = !0), ze()),
        !e && 'undefined' != typeof Promise)
    )
      return new Promise(function (e) {
        n = e;
      });
  }
  var et = new ie();
  function tt(e) {
    !(function e(t, n) {
      var r, i;
      var a = Array.isArray(t);
      if ((!a && !o(t)) || Object.isFrozen(t) || t instanceof pe) return;
      if (t.__ob__) {
        var s = t.__ob__.dep.id;
        if (n.has(s)) return;
        n.add(s);
      }
      if (a) for (r = t.length; r--;) e(t[r], n);
      else for (i = Object.keys(t), r = i.length; r--;) e(t[i[r]], n);
    })(e, et),
      et.clear();
  }
  var nt = g(function (e) {
    var t = '&' === e.charAt(0),
      n = '~' === (e = t ? e.slice(1) : e).charAt(0),
      r = '!' === (e = n ? e.slice(1) : e).charAt(0);
    return { name: (e = r ? e.slice(1) : e), once: n, capture: r, passive: t };
  });
  function rt(e, t) {
    function n() {
      var e = arguments,
        r = n.fns;
      if (!Array.isArray(r)) return Be(r, null, arguments, t, 'v-on handler');
      for (var i = r.slice(), o = 0; o < i.length; o++)
        Be(i[o], null, e, t, 'v-on handler');
    }
    return (n.fns = e), n;
  }
  function it(e, n, i, o, a, s) {
    var c, u, l, f;
    for (c in e)
      (u = e[c]),
        (l = n[c]),
        (f = nt(c)),
        t(u) ||
        (t(l)
          ? (t(u.fns) && (u = e[c] = rt(u, s)),
            r(f.once) && (u = e[c] = a(f.name, u, f.capture)),
            i(f.name, u, f.capture, f.passive, f.params))
          : u !== l && ((l.fns = u), (e[c] = l)));
    for (c in n) t(e[c]) && o((f = nt(c)).name, n[c], f.capture);
  }
  function ot(e, i, o) {
    var a;
    e instanceof pe && (e = e.data.hook || (e.data.hook = {}));
    var s = e[i];
    function c() {
      o.apply(this, arguments), h(a.fns, c);
    }
    t(s)
      ? (a = rt([c]))
      : n(s.fns) && r(s.merged)
        ? (a = s).fns.push(c)
        : (a = rt([s, c])),
      (a.merged = !0),
      (e[i] = a);
  }
  function at(e, t, r, i, o) {
    if (n(t)) {
      if (y(t, r)) return (e[r] = t[r]), o || delete t[r], !0;
      if (y(t, i)) return (e[r] = t[i]), o || delete t[i], !0;
    }
    return !1;
  }
  function st(e) {
    return i(e)
      ? [he(e)]
      : Array.isArray(e)
        ? (function e(o, a) {
          var s = [];
          var c, u, l, f;
          for (c = 0; c < o.length; c++)
            t((u = o[c])) ||
              'boolean' == typeof u ||
              ((l = s.length - 1),
                (f = s[l]),
                Array.isArray(u)
                  ? u.length > 0 &&
                  (ct((u = e(u, (a || '') + '_' + c))[0]) &&
                    ct(f) &&
                    ((s[l] = he(f.text + u[0].text)), u.shift()),
                    s.push.apply(s, u))
                  : i(u)
                    ? ct(f)
                      ? (s[l] = he(f.text + u))
                      : '' !== u && s.push(he(u))
                    : ct(u) && ct(f)
                      ? (s[l] = he(f.text + u.text))
                      : (r(o._isVList) &&
                        n(u.tag) &&
                        t(u.key) &&
                        n(a) &&
                        (u.key = '__vlist' + a + '_' + c + '__'),
                        s.push(u)));
          return s;
        })(e)
        : void 0;
  }
  function ct(e) {
    return n(e) && n(e.text) && !1 === e.isComment;
  }
  function ut(e, t) {
    if (e) {
      for (
        var n = Object.create(null),
        r = oe ? Reflect.ownKeys(e) : Object.keys(e),
        i = 0;
        i < r.length;
        i++
      ) {
        var o = r[i];
        if ('__ob__' !== o) {
          for (var a = e[o].from, s = t; s;) {
            if (s._provided && y(s._provided, a)) {
              n[o] = s._provided[a];
              break;
            }
            s = s.$parent;
          }
          if (!s && 'default' in e[o]) {
            var c = e[o].default;
            n[o] = 'function' == typeof c ? c.call(t) : c;
          }
        }
      }
      return n;
    }
  }
  function lt(e, t) {
    if (!e || !e.length) return {};
    for (var n = {}, r = 0, i = e.length; r < i; r++) {
      var o = e[r],
        a = o.data;
      if (
        (a && a.attrs && a.attrs.slot && delete a.attrs.slot,
          (o.context !== t && o.fnContext !== t) || !a || null == a.slot)
      )
        (n.default || (n.default = [])).push(o);
      else {
        var s = a.slot,
          c = n[s] || (n[s] = []);
        'template' === o.tag ? c.push.apply(c, o.children || []) : c.push(o);
      }
    }
    for (var u in n) n[u].every(ft) && delete n[u];
    return n;
  }
  function ft(e) {
    return (e.isComment && !e.asyncFactory) || ' ' === e.text;
  }
  function pt(e) {
    return e.isComment && e.asyncFactory;
  }
  function dt(t, n, r) {
    var i,
      o = Object.keys(n).length > 0,
      a = t ? !!t.$stable : !o,
      s = t && t.$key;
    if (t) {
      if (t._normalized) return t._normalized;
      if (a && r && r !== e && s === r.$key && !o && !r.$hasNormal) return r;
      for (var c in ((i = {}), t))
        t[c] && '$' !== c[0] && (i[c] = vt(n, c, t[c]));
    } else i = {};
    for (var u in n) u in i || (i[u] = ht(n, u));
    return (
      t && Object.isExtensible(t) && (t._normalized = i),
      R(i, '$stable', a),
      R(i, '$key', s),
      R(i, '$hasNormal', o),
      i
    );
  }
  function vt(e, t, n) {
    var r = function () {
      var e = arguments.length ? n.apply(null, arguments) : n({}),
        t =
          (e = e && 'object' == typeof e && !Array.isArray(e) ? [e] : st(e)) &&
          e[0];
      return e && (!t || (1 === e.length && t.isComment && !pt(t))) ? void 0 : e;
    };
    return (
      n.proxy &&
      Object.defineProperty(e, t, {
        get: r,
        enumerable: !0,
        configurable: !0
      }),
      r
    );
  }
  function ht(e, t) {
    return function () {
      return e[t];
    };
  }
  function mt(e, t) {
    var r, i, a, s, c;
    if (Array.isArray(e) || 'string' == typeof e)
      for (r = new Array(e.length), i = 0, a = e.length; i < a; i++)
        r[i] = t(e[i], i);
    else if ('number' == typeof e)
      for (r = new Array(e), i = 0; i < e; i++) r[i] = t(i + 1, i);
    else if (o(e))
      if (oe && e[Symbol.iterator]) {
        r = [];
        for (var u = e[Symbol.iterator](), l = u.next(); !l.done;)
          r.push(t(l.value, r.length)), (l = u.next());
      } else
        for (
          s = Object.keys(e), r = new Array(s.length), i = 0, a = s.length;
          i < a;
          i++
        )
          (c = s[i]), (r[i] = t(e[c], c, i));
    return n(r) || (r = []), (r._isVList = !0), r;
  }
  function yt(e, t, n, r) {
    var i,
      o = this.$scopedSlots[e];
    o
      ? ((n = n || {}),
        r && (n = A(A({}, r), n)),
        (i = o(n) || ('function' == typeof t ? t() : t)))
      : (i = this.$slots[e] || ('function' == typeof t ? t() : t));
    var a = n && n.slot;
    return a ? this.$createElement('template', { slot: a }, i) : i;
  }
  function gt(e) {
    return Le(this.$options, 'filters', e) || N;
  }
  function _t(e, t) {
    return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
  }
  function bt(e, t, n, r, i) {
    var o = F.keyCodes[t] || n;
    return i && r && !F.keyCodes[t]
      ? _t(i, r)
      : o
        ? _t(o, e)
        : r
          ? C(r) !== t
          : void 0 === e;
  }
  function $t(e, t, n, r, i) {
    if (n)
      if (o(n)) {
        var a;
        Array.isArray(n) && (n = O(n));
        var s = function (o) {
          if ('class' === o || 'style' === o || v(o)) a = e;
          else {
            var s = e.attrs && e.attrs.type;
            a =
              r || F.mustUseProp(t, s, o)
                ? e.domProps || (e.domProps = {})
                : e.attrs || (e.attrs = {});
          }
          var c = b(o),
            u = C(o);
          c in a ||
            u in a ||
            ((a[o] = n[o]),
              i &&
              ((e.on || (e.on = {}))['update:' + o] = function (e) {
                n[o] = e;
              }));
        };
        for (var c in n) s(c);
      } else;
    return e;
  }
  function wt(e, t) {
    var n = this._staticTrees || (this._staticTrees = []),
      r = n[e];
    return r && !t
      ? r
      : (xt(
        (r = n[e] = this.$options.staticRenderFns[e].call(
          this._renderProxy,
          null,
          this
        )),
        '__static__' + e,
        !1
      ),
        r);
  }
  function Ct(e, t, n) {
    return xt(e, '__once__' + t + (n ? '_' + n : ''), !0), e;
  }
  function xt(e, t, n) {
    if (Array.isArray(e))
      for (var r = 0; r < e.length; r++)
        e[r] && 'string' != typeof e[r] && kt(e[r], t + '_' + r, n);
    else kt(e, t, n);
  }
  function kt(e, t, n) {
    ; (e.isStatic = !0), (e.key = t), (e.isOnce = n);
  }
  function At(e, t) {
    if (t)
      if (s(t)) {
        var n = (e.on = e.on ? A({}, e.on) : {});
        for (var r in t) {
          var i = n[r],
            o = t[r];
          n[r] = i ? [].concat(i, o) : o;
        }
      } else;
    return e;
  }
  function Ot(e, t, n, r) {
    t = t || { $stable: !n };
    for (var i = 0; i < e.length; i++) {
      var o = e[i];
      Array.isArray(o)
        ? Ot(o, t, n)
        : o && (o.proxy && (o.fn.proxy = !0), (t[o.key] = o.fn));
    }
    return r && (t.$key = r), t;
  }
  function St(e, t) {
    for (var n = 0; n < t.length; n += 2) {
      var r = t[n];
      'string' == typeof r && r && (e[t[n]] = t[n + 1]);
    }
    return e;
  }
  function Tt(e, t) {
    return 'string' == typeof e ? t + e : e;
  }
  function Nt(e) {
    ; (e._o = Ct),
      (e._n = f),
      (e._s = l),
      (e._l = mt),
      (e._t = yt),
      (e._q = E),
      (e._i = j),
      (e._m = wt),
      (e._f = gt),
      (e._k = bt),
      (e._b = $t),
      (e._v = he),
      (e._e = ve),
      (e._u = Ot),
      (e._g = At),
      (e._d = St),
      (e._p = Tt);
  }
  function Et(t, n, i, o, a) {
    var s,
      c = this,
      u = a.options;
    y(o, '_uid')
      ? ((s = Object.create(o))._original = o)
      : ((s = o), (o = o._original));
    var l = r(u._compiled),
      f = !l
      ; (this.data = t),
        (this.props = n),
        (this.children = i),
        (this.parent = o),
        (this.listeners = t.on || e),
        (this.injections = ut(u.inject, o)),
        (this.slots = function () {
          return c.$slots || dt(t.scopedSlots, (c.$slots = lt(i, o))), c.$slots;
        }),
        Object.defineProperty(this, 'scopedSlots', {
          enumerable: !0,
          get: function () {
            return dt(t.scopedSlots, this.slots());
          }
        }),
        l &&
        ((this.$options = u),
          (this.$slots = this.slots()),
          (this.$scopedSlots = dt(t.scopedSlots, this.$slots))),
        u._scopeId
          ? (this._c = function (e, t, n, r) {
            var i = Ht(s, e, t, n, r, f);
            return (
              i &&
              !Array.isArray(i) &&
              ((i.fnScopeId = u._scopeId), (i.fnContext = o)),
              i
            );
          })
          : (this._c = function (e, t, n, r) {
            return Ht(s, e, t, n, r, f);
          });
  }
  function jt(e, t, n, r, i) {
    var o = me(e);
    return (
      (o.fnContext = n),
      (o.fnOptions = r),
      t.slot && ((o.data || (o.data = {})).slot = t.slot),
      o
    );
  }
  function Dt(e, t) {
    for (var n in t) e[b(n)] = t[n];
  }
  Nt(Et.prototype);
  var Lt = {
    init: function (e, t) {
      if (
        e.componentInstance &&
        !e.componentInstance._isDestroyed &&
        e.data.keepAlive
      ) {
        var r = e;
        Lt.prepatch(r, r);
      } else {
        ; (e.componentInstance = (function (e, t) {
          var r = { _isComponent: !0, _parentVnode: e, parent: t },
            i = e.data.inlineTemplate;
          n(i) &&
            ((r.render = i.render), (r.staticRenderFns = i.staticRenderFns));
          return new e.componentOptions.Ctor(r);
        })(e, Zt)).$mount(t ? e.elm : void 0, t);
      }
    },
    prepatch: function (t, n) {
      var r = n.componentOptions;
      !(function (t, n, r, i, o) {
        var a = i.data.scopedSlots,
          s = t.$scopedSlots,
          c = !!(
            (a && !a.$stable) ||
            (s !== e && !s.$stable) ||
            (a && t.$scopedSlots.$key !== a.$key) ||
            (!a && t.$scopedSlots.$key)
          ),
          u = !!(o || t.$options._renderChildren || c)
          ; (t.$options._parentVnode = i),
            (t.$vnode = i),
            t._vnode && (t._vnode.parent = i);
        if (
          ((t.$options._renderChildren = o),
            (t.$attrs = i.data.attrs || e),
            (t.$listeners = r || e),
            n && t.$options.props)
        ) {
          $e(!1);
          for (
            var l = t._props, f = t.$options._propKeys || [], p = 0;
            p < f.length;
            p++
          ) {
            var d = f[p],
              v = t.$options.props;
            l[d] = Ie(d, v, n, t);
          }
          $e(!0), (t.$options.propsData = n);
        }
        r = r || e;
        var h = t.$options._parentListeners
          ; (t.$options._parentListeners = r),
            Wt(t, r, h),
            u && ((t.$slots = lt(o, i.context)), t.$forceUpdate());
      })(
        (n.componentInstance = t.componentInstance),
        r.propsData,
        r.listeners,
        n,
        r.children
      );
    },
    insert: function (e) {
      var t,
        n = e.context,
        r = e.componentInstance;
      r._isMounted || ((r._isMounted = !0), Qt(r, 'mounted')),
        e.data.keepAlive &&
        (n._isMounted ? (((t = r)._inactive = !1), tn.push(t)) : Yt(r, !0));
    },
    destroy: function (e) {
      var t = e.componentInstance;
      t._isDestroyed ||
        (e.data.keepAlive
          ? (function e(t, n) {
            if (n && ((t._directInactive = !0), Xt(t))) return;
            if (!t._inactive) {
              t._inactive = !0;
              for (var r = 0; r < t.$children.length; r++) e(t.$children[r]);
              Qt(t, 'deactivated');
            }
          })(t, !0)
          : t.$destroy());
    }
  },
    It = Object.keys(Lt);
  function Mt(i, a, s, c, l) {
    if (!t(i)) {
      var f = s.$options._base;
      if ((o(i) && (i = f.extend(i)), 'function' == typeof i)) {
        var p;
        if (
          t(i.cid) &&
          void 0 ===
          (i = (function (e, i) {
            if (r(e.error) && n(e.errorComp)) return e.errorComp;
            if (n(e.resolved)) return e.resolved;
            var a = Ut;
            a && n(e.owners) && -1 === e.owners.indexOf(a) && e.owners.push(a);
            if (r(e.loading) && n(e.loadingComp)) return e.loadingComp;
            if (a && !n(e.owners)) {
              var s = (e.owners = [a]),
                c = !0,
                l = null,
                f = null;
              a.$on('hook:destroyed', function () {
                return h(s, a);
              });
              var p = function (e) {
                for (var t = 0, n = s.length; t < n; t++)
                  s[t].$forceUpdate();
                e &&
                  ((s.length = 0),
                    null !== l && (clearTimeout(l), (l = null)),
                    null !== f && (clearTimeout(f), (f = null)));
              },
                d = D(function (t) {
                  ; (e.resolved = Vt(t, i)), c ? (s.length = 0) : p(!0);
                }),
                v = D(function (t) {
                  n(e.errorComp) && ((e.error = !0), p(!0));
                }),
                m = e(d, v);
              return (
                o(m) &&
                (u(m)
                  ? t(e.resolved) && m.then(d, v)
                  : u(m.component) &&
                  (m.component.then(d, v),
                    n(m.error) && (e.errorComp = Vt(m.error, i)),
                    n(m.loading) &&
                    ((e.loadingComp = Vt(m.loading, i)),
                      0 === m.delay
                        ? (e.loading = !0)
                        : (l = setTimeout(function () {
                          ; (l = null),
                            t(e.resolved) &&
                            t(e.error) &&
                            ((e.loading = !0), p(!1));
                        }, m.delay || 200))),
                    n(m.timeout) &&
                    (f = setTimeout(function () {
                      ; (f = null), t(e.resolved) && v(null);
                    }, m.timeout)))),
                (c = !1),
                e.loading ? e.loadingComp : e.resolved
              );
            }
          })((p = i), f))
        )
          return (function (e, t, n, r, i) {
            var o = ve();
            return (
              (o.asyncFactory = e),
              (o.asyncMeta = { data: t, context: n, children: r, tag: i }),
              o
            );
          })(p, a, s, c, l)
            ; (a = a || {}),
              wn(i),
              n(a.model) &&
              (function (e, t) {
                var r = (e.model && e.model.prop) || 'value',
                  i = (e.model && e.model.event) || 'input'
                  ; (t.attrs || (t.attrs = {}))[r] = t.model.value;
                var o = t.on || (t.on = {}),
                  a = o[i],
                  s = t.model.callback;
                n(a)
                  ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) &&
                  (o[i] = [s].concat(a))
                  : (o[i] = s);
              })(i.options, a);
        var d = (function (e, r, i) {
          var o = r.options.props;
          if (!t(o)) {
            var a = {},
              s = e.attrs,
              c = e.props;
            if (n(s) || n(c))
              for (var u in o) {
                var l = C(u);
                at(a, c, u, l, !0) || at(a, s, u, l, !1);
              }
            return a;
          }
        })(a, i);
        if (r(i.options.functional))
          return (function (t, r, i, o, a) {
            var s = t.options,
              c = {},
              u = s.props;
            if (n(u)) for (var l in u) c[l] = Ie(l, u, r || e);
            else n(i.attrs) && Dt(c, i.attrs), n(i.props) && Dt(c, i.props);
            var f = new Et(i, c, a, o, t),
              p = s.render.call(null, f._c, f);
            if (p instanceof pe) return jt(p, i, f.parent, s);
            if (Array.isArray(p)) {
              for (
                var d = st(p) || [], v = new Array(d.length), h = 0;
                h < d.length;
                h++
              )
                v[h] = jt(d[h], i, f.parent, s);
              return v;
            }
          })(i, d, a, s, c);
        var v = a.on;
        if (((a.on = a.nativeOn), r(i.options.abstract))) {
          var m = a.slot
            ; (a = {}), m && (a.slot = m);
        }
        !(function (e) {
          for (var t = e.hook || (e.hook = {}), n = 0; n < It.length; n++) {
            var r = It[n],
              i = t[r],
              o = Lt[r];
            i === o || (i && i._merged) || (t[r] = i ? Ft(o, i) : o);
          }
        })(a);
        var y = i.options.name || l;
        return new pe(
          'vue-component-' + i.cid + (y ? '-' + y : ''),
          a,
          void 0,
          void 0,
          void 0,
          s,
          { Ctor: i, propsData: d, listeners: v, tag: l, children: c },
          p
        );
      }
    }
  }
  function Ft(e, t) {
    var n = function (n, r) {
      e(n, r), t(n, r);
    };
    return (n._merged = !0), n;
  }
  var Pt = 1,
    Rt = 2;
  function Ht(e, a, s, c, u, l) {
    return (
      (Array.isArray(s) || i(s)) && ((u = c), (c = s), (s = void 0)),
      r(l) && (u = Rt),
      (function (e, i, a, s, c) {
        if (n(a) && n(a.__ob__)) return ve();
        n(a) && n(a.is) && (i = a.is);
        if (!i) return ve();
        Array.isArray(s) &&
          'function' == typeof s[0] &&
          (((a = a || {}).scopedSlots = { default: s[0] }), (s.length = 0));
        c === Rt
          ? (s = st(s))
          : c === Pt &&
          (s = (function (e) {
            for (var t = 0; t < e.length; t++)
              if (Array.isArray(e[t]))
                return Array.prototype.concat.apply([], e);
            return e;
          })(s));
        var u, l;
        if ('string' == typeof i) {
          var f
            ; (l = (e.$vnode && e.$vnode.ns) || F.getTagNamespace(i)),
              (u = F.isReservedTag(i)
                ? new pe(F.parsePlatformTagName(i), a, s, void 0, void 0, e)
                : (a && a.pre) || !n((f = Le(e.$options, 'components', i)))
                  ? new pe(i, a, s, void 0, void 0, e)
                  : Mt(f, a, e, s, i));
        } else u = Mt(i, a, e, s);
        return Array.isArray(u)
          ? u
          : n(u)
            ? (n(l) &&
              (function e(i, o, a) {
                i.ns = o;
                'foreignObject' === i.tag && ((o = void 0), (a = !0));
                if (n(i.children))
                  for (var s = 0, c = i.children.length; s < c; s++) {
                    var u = i.children[s];
                    n(u.tag) &&
                      (t(u.ns) || (r(a) && 'svg' !== u.tag)) &&
                      e(u, o, a);
                  }
              })(u, l),
              n(a) &&
              (function (e) {
                o(e.style) && tt(e.style);
                o(e.class) && tt(e.class);
              })(a),
              u)
            : ve();
      })(e, a, s, c, u)
    );
  }
  var Bt,
    Ut = null;
  function Vt(e, t) {
    return (
      (e.__esModule || (oe && 'Module' === e[Symbol.toStringTag])) &&
      (e = e.default),
      o(e) ? t.extend(e) : e
    );
  }
  function zt(e) {
    if (Array.isArray(e))
      for (var t = 0; t < e.length; t++) {
        var r = e[t];
        if (n(r) && (n(r.componentOptions) || pt(r))) return r;
      }
  }
  function Kt(e, t) {
    Bt.$on(e, t);
  }
  function Jt(e, t) {
    Bt.$off(e, t);
  }
  function qt(e, t) {
    var n = Bt;
    return function r() {
      null !== t.apply(null, arguments) && n.$off(e, r);
    };
  }
  function Wt(e, t, n) {
    ; (Bt = e), it(t, n || {}, Kt, Jt, qt, e), (Bt = void 0);
  }
  var Zt = null;
  function Gt(e) {
    var t = Zt;
    return (
      (Zt = e),
      function () {
        Zt = t;
      }
    );
  }
  function Xt(e) {
    for (; e && (e = e.$parent);) if (e._inactive) return !0;
    return !1;
  }
  function Yt(e, t) {
    if (t) {
      if (((e._directInactive = !1), Xt(e))) return;
    } else if (e._directInactive) return;
    if (e._inactive || null === e._inactive) {
      e._inactive = !1;
      for (var n = 0; n < e.$children.length; n++) Yt(e.$children[n]);
      Qt(e, 'activated');
    }
  }
  function Qt(e, t) {
    le();
    var n = e.$options[t],
      r = t + ' hook';
    if (n) for (var i = 0, o = n.length; i < o; i++) Be(n[i], e, null, e, r);
    e._hasHookEvent && e.$emit('hook:' + t), fe();
  }
  var en = [],
    tn = [],
    nn = {},
    rn = !1,
    on = !1,
    an = 0;
  var sn = 0,
    cn = Date.now;
  if (V && !q) {
    var un = window.performance;
    un &&
      'function' == typeof un.now &&
      cn() > document.createEvent('Event').timeStamp &&
      (cn = function () {
        return un.now();
      });
  }
  function ln() {
    var e, t;
    for (
      sn = cn(),
      on = !0,
      en.sort(function (e, t) {
        return e.id - t.id;
      }),
      an = 0;
      an < en.length;
      an++
    )
      (e = en[an]).before && e.before(), (t = e.id), (nn[t] = null), e.run();
    var n = tn.slice(),
      r = en.slice()
      ; (an = en.length = tn.length = 0),
        (nn = {}),
        (rn = on = !1),
        (function (e) {
          for (var t = 0; t < e.length; t++) (e[t]._inactive = !0), Yt(e[t], !0);
        })(n),
        (function (e) {
          var t = e.length;
          for (; t--;) {
            var n = e[t],
              r = n.vm;
            r._watcher === n &&
              r._isMounted &&
              !r._isDestroyed &&
              Qt(r, 'updated');
          }
        })(r),
        ne && F.devtools && ne.emit('flush');
  }
  var fn = 0,
    pn = function (e, t, n, r, i) {
      ; (this.vm = e),
        i && (e._watcher = this),
        e._watchers.push(this),
        r
          ? ((this.deep = !!r.deep),
            (this.user = !!r.user),
            (this.lazy = !!r.lazy),
            (this.sync = !!r.sync),
            (this.before = r.before))
          : (this.deep = this.user = this.lazy = this.sync = !1),
        (this.cb = n),
        (this.id = ++fn),
        (this.active = !0),
        (this.dirty = this.lazy),
        (this.deps = []),
        (this.newDeps = []),
        (this.depIds = new ie()),
        (this.newDepIds = new ie()),
        (this.expression = ''),
        'function' == typeof t
          ? (this.getter = t)
          : ((this.getter = (function (e) {
            if (!H.test(e)) {
              var t = e.split('.');
              return function (e) {
                for (var n = 0; n < t.length; n++) {
                  if (!e) return;
                  e = e[t[n]];
                }
                return e;
              };
            }
          })(t)),
            this.getter || (this.getter = S)),
        (this.value = this.lazy ? void 0 : this.get());
    }
    ; (pn.prototype.get = function () {
      var e;
      le(this);
      var t = this.vm;
      try {
        e = this.getter.call(t, t);
      } catch (e) {
        if (!this.user) throw e;
        He(e, t, 'getter for watcher "' + this.expression + '"');
      } finally {
        this.deep && tt(e), fe(), this.cleanupDeps();
      }
      return e;
    }),
      (pn.prototype.addDep = function (e) {
        var t = e.id;
        this.newDepIds.has(t) ||
          (this.newDepIds.add(t),
            this.newDeps.push(e),
            this.depIds.has(t) || e.addSub(this));
      }),
      (pn.prototype.cleanupDeps = function () {
        for (var e = this.deps.length; e--;) {
          var t = this.deps[e];
          this.newDepIds.has(t.id) || t.removeSub(this);
        }
        var n = this.depIds
          ; (this.depIds = this.newDepIds),
            (this.newDepIds = n),
            this.newDepIds.clear(),
            (n = this.deps),
            (this.deps = this.newDeps),
            (this.newDeps = n),
            (this.newDeps.length = 0);
      }),
      (pn.prototype.update = function () {
        this.lazy
          ? (this.dirty = !0)
          : this.sync
            ? this.run()
            : (function (e) {
              var t = e.id;
              if (null == nn[t]) {
                if (((nn[t] = !0), on)) {
                  for (var n = en.length - 1; n > an && en[n].id > e.id;) n--;
                  en.splice(n + 1, 0, e);
                } else en.push(e);
                rn || ((rn = !0), Qe(ln));
              }
            })(this);
      }),
      (pn.prototype.run = function () {
        if (this.active) {
          var e = this.get();
          if (e !== this.value || o(e) || this.deep) {
            var t = this.value;
            if (((this.value = e), this.user)) {
              var n = 'callback for watcher "' + this.expression + '"';
              Be(this.cb, this.vm, [e, t], this.vm, n);
            } else this.cb.call(this.vm, e, t);
          }
        }
      }),
      (pn.prototype.evaluate = function () {
        ; (this.value = this.get()), (this.dirty = !1);
      }),
      (pn.prototype.depend = function () {
        for (var e = this.deps.length; e--;) this.deps[e].depend();
      }),
      (pn.prototype.teardown = function () {
        if (this.active) {
          this.vm._isBeingDestroyed || h(this.vm._watchers, this);
          for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
          this.active = !1;
        }
      });
  var dn = { enumerable: !0, configurable: !0, get: S, set: S };
  function vn(e, t, n) {
    ; (dn.get = function () {
      return this[t][n];
    }),
      (dn.set = function (e) {
        this[t][n] = e;
      }),
      Object.defineProperty(e, n, dn);
  }
  function hn(e) {
    e._watchers = [];
    var t = e.$options;
    t.props &&
      (function (e, t) {
        var n = e.$options.propsData || {},
          r = (e._props = {}),
          i = (e.$options._propKeys = []);
        e.$parent && $e(!1);
        var o = function (o) {
          i.push(o);
          var a = Ie(o, t, n, e);
          xe(r, o, a), o in e || vn(e, '_props', o);
        };
        for (var a in t) o(a);
        $e(!0);
      })(e, t.props),
      t.methods &&
      (function (e, t) {
        e.$options.props;
        for (var n in t) e[n] = 'function' != typeof t[n] ? S : x(t[n], e);
      })(e, t.methods),
      t.data
        ? (function (e) {
          var t = e.$options.data;
          s(
            (t = e._data =
              'function' == typeof t
                ? (function (e, t) {
                  le();
                  try {
                    return e.call(t, t);
                  } catch (e) {
                    return He(e, t, 'data()'), {};
                  } finally {
                    fe();
                  }
                })(t, e)
                : t || {})
          ) || (t = {});
          var n = Object.keys(t),
            r = e.$options.props,
            i = (e.$options.methods, n.length);
          for (; i--;) {
            var o = n[i]
              ; (r && y(r, o)) ||
                ((a = void 0),
                  36 !== (a = (o + '').charCodeAt(0)) &&
                  95 !== a &&
                  vn(e, '_data', o));
          }
          var a;
          Ce(t, !0);
        })(e)
        : Ce((e._data = {}), !0),
      t.computed &&
      (function (e, t) {
        var n = (e._computedWatchers = Object.create(null)),
          r = te();
        for (var i in t) {
          var o = t[i],
            a = 'function' == typeof o ? o : o.get;
          r || (n[i] = new pn(e, a || S, S, mn)), i in e || yn(e, i, o);
        }
      })(e, t.computed),
      t.watch &&
      t.watch !== Y &&
      (function (e, t) {
        for (var n in t) {
          var r = t[n];
          if (Array.isArray(r))
            for (var i = 0; i < r.length; i++) bn(e, n, r[i]);
          else bn(e, n, r);
        }
      })(e, t.watch);
  }
  var mn = { lazy: !0 };
  function yn(e, t, n) {
    var r = !te();
    'function' == typeof n
      ? ((dn.get = r ? gn(t) : _n(n)), (dn.set = S))
      : ((dn.get = n.get ? (r && !1 !== n.cache ? gn(t) : _n(n.get)) : S),
        (dn.set = n.set || S)),
      Object.defineProperty(e, t, dn);
  }
  function gn(e) {
    return function () {
      var t = this._computedWatchers && this._computedWatchers[e];
      if (t) return t.dirty && t.evaluate(), ce.target && t.depend(), t.value;
    };
  }
  function _n(e) {
    return function () {
      return e.call(this, this);
    };
  }
  function bn(e, t, n, r) {
    return (
      s(n) && ((r = n), (n = n.handler)),
      'string' == typeof n && (n = e[n]),
      e.$watch(t, n, r)
    );
  }
  var $n = 0;
  function wn(e) {
    var t = e.options;
    if (e.super) {
      var n = wn(e.super);
      if (n !== e.superOptions) {
        e.superOptions = n;
        var r = (function (e) {
          var t,
            n = e.options,
            r = e.sealedOptions;
          for (var i in n) n[i] !== r[i] && (t || (t = {}), (t[i] = n[i]));
          return t;
        })(e);
        r && A(e.extendOptions, r),
          (t = e.options = De(n, e.extendOptions)).name &&
          (t.components[t.name] = e);
      }
    }
    return t;
  }
  function Cn(e) {
    this._init(e);
  }
  function xn(e) {
    e.cid = 0;
    var t = 1;
    e.extend = function (e) {
      e = e || {};
      var n = this,
        r = n.cid,
        i = e._Ctor || (e._Ctor = {});
      if (i[r]) return i[r];
      var o = e.name || n.options.name,
        a = function (e) {
          this._init(e);
        };
      return (
        ((a.prototype = Object.create(n.prototype)).constructor = a),
        (a.cid = t++),
        (a.options = De(n.options, e)),
        (a.super = n),
        a.options.props &&
        (function (e) {
          var t = e.options.props;
          for (var n in t) vn(e.prototype, '_props', n);
        })(a),
        a.options.computed &&
        (function (e) {
          var t = e.options.computed;
          for (var n in t) yn(e.prototype, n, t[n]);
        })(a),
        (a.extend = n.extend),
        (a.mixin = n.mixin),
        (a.use = n.use),
        I.forEach(function (e) {
          a[e] = n[e];
        }),
        o && (a.options.components[o] = a),
        (a.superOptions = n.options),
        (a.extendOptions = e),
        (a.sealedOptions = A({}, a.options)),
        (i[r] = a),
        a
      );
    };
  }
  function kn(e) {
    return e && (e.Ctor.options.name || e.tag);
  }
  function An(e, t) {
    return Array.isArray(e)
      ? e.indexOf(t) > -1
      : 'string' == typeof e
        ? e.split(',').indexOf(t) > -1
        : ((n = e), '[object RegExp]' === a.call(n) && e.test(t));
    var n;
  }
  function On(e, t) {
    var n = e.cache,
      r = e.keys,
      i = e._vnode;
    for (var o in n) {
      var a = n[o];
      if (a) {
        var s = a.name;
        s && !t(s) && Sn(n, o, r, i);
      }
    }
  }
  function Sn(e, t, n, r) {
    var i = e[t];
    !i || (r && i.tag === r.tag) || i.componentInstance.$destroy(),
      (e[t] = null),
      h(n, t);
  }
  !(function (t) {
    t.prototype._init = function (t) {
      var n = this
        ; (n._uid = $n++),
          (n._isVue = !0),
          t && t._isComponent
            ? (function (e, t) {
              var n = (e.$options = Object.create(e.constructor.options)),
                r = t._parentVnode
                ; (n.parent = t.parent), (n._parentVnode = r);
              var i = r.componentOptions
                ; (n.propsData = i.propsData),
                  (n._parentListeners = i.listeners),
                  (n._renderChildren = i.children),
                  (n._componentTag = i.tag),
                  t.render &&
                  ((n.render = t.render),
                    (n.staticRenderFns = t.staticRenderFns));
            })(n, t)
            : (n.$options = De(wn(n.constructor), t || {}, n)),
          (n._renderProxy = n),
          (n._self = n),
          (function (e) {
            var t = e.$options,
              n = t.parent;
            if (n && !t.abstract) {
              for (; n.$options.abstract && n.$parent;) n = n.$parent;
              n.$children.push(e);
            }
            ; (e.$parent = n),
              (e.$root = n ? n.$root : e),
              (e.$children = []),
              (e.$refs = {}),
              (e._watcher = null),
              (e._inactive = null),
              (e._directInactive = !1),
              (e._isMounted = !1),
              (e._isDestroyed = !1),
              (e._isBeingDestroyed = !1);
          })(n),
          (function (e) {
            ; (e._events = Object.create(null)), (e._hasHookEvent = !1);
            var t = e.$options._parentListeners;
            t && Wt(e, t);
          })(n),
          (function (t) {
            ; (t._vnode = null), (t._staticTrees = null);
            var n = t.$options,
              r = (t.$vnode = n._parentVnode),
              i = r && r.context
              ; (t.$slots = lt(n._renderChildren, i)),
                (t.$scopedSlots = e),
                (t._c = function (e, n, r, i) {
                  return Ht(t, e, n, r, i, !1);
                }),
                (t.$createElement = function (e, n, r, i) {
                  return Ht(t, e, n, r, i, !0);
                });
            var o = r && r.data;
            xe(t, '$attrs', (o && o.attrs) || e, null, !0),
              xe(t, '$listeners', n._parentListeners || e, null, !0);
          })(n),
          Qt(n, 'beforeCreate'),
          (function (e) {
            var t = ut(e.$options.inject, e);
            t &&
              ($e(!1),
                Object.keys(t).forEach(function (n) {
                  xe(e, n, t[n]);
                }),
                $e(!0));
          })(n),
          hn(n),
          (function (e) {
            var t = e.$options.provide;
            t && (e._provided = 'function' == typeof t ? t.call(e) : t);
          })(n),
          Qt(n, 'created'),
          n.$options.el && n.$mount(n.$options.el);
    };
  })(Cn),
    (function (e) {
      var t = {
        get: function () {
          return this._data;
        }
      },
        n = {
          get: function () {
            return this._props;
          }
        };
      Object.defineProperty(e.prototype, '$data', t),
        Object.defineProperty(e.prototype, '$props', n),
        (e.prototype.$set = ke),
        (e.prototype.$delete = Ae),
        (e.prototype.$watch = function (e, t, n) {
          if (s(t)) return bn(this, e, t, n)
            ; (n = n || {}).user = !0;
          var r = new pn(this, e, t, n);
          if (n.immediate) {
            var i = 'callback for immediate watcher "' + r.expression + '"';
            le(), Be(t, this, [r.value], this, i), fe();
          }
          return function () {
            r.teardown();
          };
        });
    })(Cn),
    (function (e) {
      var t = /^hook:/
        ; (e.prototype.$on = function (e, n) {
          var r = this;
          if (Array.isArray(e))
            for (var i = 0, o = e.length; i < o; i++) r.$on(e[i], n);
          else
            (r._events[e] || (r._events[e] = [])).push(n),
              t.test(e) && (r._hasHookEvent = !0);
          return r;
        }),
          (e.prototype.$once = function (e, t) {
            var n = this;
            function r() {
              n.$off(e, r), t.apply(n, arguments);
            }
            return (r.fn = t), n.$on(e, r), n;
          }),
          (e.prototype.$off = function (e, t) {
            var n = this;
            if (!arguments.length) return (n._events = Object.create(null)), n;
            if (Array.isArray(e)) {
              for (var r = 0, i = e.length; r < i; r++) n.$off(e[r], t);
              return n;
            }
            var o,
              a = n._events[e];
            if (!a) return n;
            if (!t) return (n._events[e] = null), n;
            for (var s = a.length; s--;)
              if ((o = a[s]) === t || o.fn === t) {
                a.splice(s, 1);
                break;
              }
            return n;
          }),
          (e.prototype.$emit = function (e) {
            var t = this._events[e];
            if (t) {
              t = t.length > 1 ? k(t) : t;
              for (
                var n = k(arguments, 1),
                r = 'event handler for "' + e + '"',
                i = 0,
                o = t.length;
                i < o;
                i++
              )
                Be(t[i], this, n, this, r);
            }
            return this;
          });
    })(Cn),
    (function (e) {
      ; (e.prototype._update = function (e, t) {
        var n = this,
          r = n.$el,
          i = n._vnode,
          o = Gt(n)
          ; (n._vnode = e),
            (n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1)),
            o(),
            r && (r.__vue__ = null),
            n.$el && (n.$el.__vue__ = n),
            n.$vnode &&
            n.$parent &&
            n.$vnode === n.$parent._vnode &&
            (n.$parent.$el = n.$el);
      }),
        (e.prototype.$forceUpdate = function () {
          this._watcher && this._watcher.update();
        }),
        (e.prototype.$destroy = function () {
          var e = this;
          if (!e._isBeingDestroyed) {
            Qt(e, 'beforeDestroy'), (e._isBeingDestroyed = !0);
            var t = e.$parent;
            !t ||
              t._isBeingDestroyed ||
              e.$options.abstract ||
              h(t.$children, e),
              e._watcher && e._watcher.teardown();
            for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
            e._data.__ob__ && e._data.__ob__.vmCount--,
              (e._isDestroyed = !0),
              e.__patch__(e._vnode, null),
              Qt(e, 'destroyed'),
              e.$off(),
              e.$el && (e.$el.__vue__ = null),
              e.$vnode && (e.$vnode.parent = null);
          }
        });
    })(Cn),
    (function (e) {
      Nt(e.prototype),
        (e.prototype.$nextTick = function (e) {
          return Qe(e, this);
        }),
        (e.prototype._render = function () {
          var e,
            t = this,
            n = t.$options,
            r = n.render,
            i = n._parentVnode;
          i &&
            (t.$scopedSlots = dt(i.data.scopedSlots, t.$slots, t.$scopedSlots)),
            (t.$vnode = i);
          try {
            ; (Ut = t), (e = r.call(t._renderProxy, t.$createElement));
          } catch (n) {
            He(n, t, 'render'), (e = t._vnode);
          } finally {
            Ut = null;
          }
          return (
            Array.isArray(e) && 1 === e.length && (e = e[0]),
            e instanceof pe || (e = ve()),
            (e.parent = i),
            e
          );
        });
    })(Cn);
  var Tn = [String, RegExp, Array],
    Nn = {
      KeepAlive: {
        name: 'keep-alive',
        abstract: !0,
        props: { include: Tn, exclude: Tn, max: [String, Number] },
        methods: {
          cacheVNode: function () {
            var e = this.cache,
              t = this.keys,
              n = this.vnodeToCache,
              r = this.keyToCache;
            if (n) {
              var i = n.tag,
                o = n.componentInstance,
                a = n.componentOptions
                ; (e[r] = { name: kn(a), tag: i, componentInstance: o }),
                  t.push(r),
                  this.max &&
                  t.length > parseInt(this.max) &&
                  Sn(e, t[0], t, this._vnode),
                  (this.vnodeToCache = null);
            }
          }
        },
        created: function () {
          ; (this.cache = Object.create(null)), (this.keys = []);
        },
        destroyed: function () {
          for (var e in this.cache) Sn(this.cache, e, this.keys);
        },
        mounted: function () {
          var e = this;
          this.cacheVNode(),
            this.$watch('include', function (t) {
              On(e, function (e) {
                return An(t, e);
              });
            }),
            this.$watch('exclude', function (t) {
              On(e, function (e) {
                return !An(t, e);
              });
            });
        },
        updated: function () {
          this.cacheVNode();
        },
        render: function () {
          var e = this.$slots.default,
            t = zt(e),
            n = t && t.componentOptions;
          if (n) {
            var r = kn(n),
              i = this.include,
              o = this.exclude;
            if ((i && (!r || !An(i, r))) || (o && r && An(o, r))) return t;
            var a = this.cache,
              s = this.keys,
              c =
                null == t.key ? n.Ctor.cid + (n.tag ? '::' + n.tag : '') : t.key;
            a[c]
              ? ((t.componentInstance = a[c].componentInstance),
                h(s, c),
                s.push(c))
              : ((this.vnodeToCache = t), (this.keyToCache = c)),
              (t.data.keepAlive = !0);
          }
          return t || (e && e[0]);
        }
      }
    };
  !(function (e) {
    var t = {
      get: function () {
        return F;
      }
    };
    Object.defineProperty(e, 'config', t),
      (e.util = { warn: ae, extend: A, mergeOptions: De, defineReactive: xe }),
      (e.set = ke),
      (e.delete = Ae),
      (e.nextTick = Qe),
      (e.observable = function (e) {
        return Ce(e), e;
      }),
      (e.options = Object.create(null)),
      I.forEach(function (t) {
        e.options[t + 's'] = Object.create(null);
      }),
      (e.options._base = e),
      A(e.options.components, Nn),
      (function (e) {
        e.use = function (e) {
          var t = this._installedPlugins || (this._installedPlugins = []);
          if (t.indexOf(e) > -1) return this;
          var n = k(arguments, 1);
          return (
            n.unshift(this),
            'function' == typeof e.install
              ? e.install.apply(e, n)
              : 'function' == typeof e && e.apply(null, n),
            t.push(e),
            this
          );
        };
      })(e),
      (function (e) {
        e.mixin = function (e) {
          return (this.options = De(this.options, e)), this;
        };
      })(e),
      xn(e),
      (function (e) {
        I.forEach(function (t) {
          e[t] = function (e, n) {
            return n
              ? ('component' === t &&
                s(n) &&
                ((n.name = n.name || e), (n = this.options._base.extend(n))),
                'directive' === t &&
                'function' == typeof n &&
                (n = { bind: n, update: n }),
                (this.options[t + 's'][e] = n),
                n)
              : this.options[t + 's'][e];
          };
        });
      })(e);
  })(Cn),
    Object.defineProperty(Cn.prototype, '$isServer', { get: te }),
    Object.defineProperty(Cn.prototype, '$ssrContext', {
      get: function () {
        return this.$vnode && this.$vnode.ssrContext;
      }
    }),
    Object.defineProperty(Cn, 'FunctionalRenderContext', { value: Et }),
    (Cn.version = '2.6.14');
  var En = p('style,class'),
    jn = p('input,textarea,option,select,progress'),
    Dn = function (e, t, n) {
      return (
        ('value' === n && jn(e) && 'button' !== t) ||
        ('selected' === n && 'option' === e) ||
        ('checked' === n && 'input' === e) ||
        ('muted' === n && 'video' === e)
      );
    },
    Ln = p('contenteditable,draggable,spellcheck'),
    In = p('events,caret,typing,plaintext-only'),
    Mn = function (e, t) {
      return Bn(t) || 'false' === t
        ? 'false'
        : 'contenteditable' === e && In(t)
          ? t
          : 'true';
    },
    Fn = p(
      'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible'
    ),
    Pn = 'http://www.w3.org/1999/xlink',
    Rn = function (e) {
      return ':' === e.charAt(5) && 'xlink' === e.slice(0, 5);
    },
    Hn = function (e) {
      return Rn(e) ? e.slice(6, e.length) : '';
    },
    Bn = function (e) {
      return null == e || !1 === e;
    };
  function Un(e) {
    for (var t = e.data, r = e, i = e; n(i.componentInstance);)
      (i = i.componentInstance._vnode) && i.data && (t = Vn(i.data, t));
    for (; n((r = r.parent));) r && r.data && (t = Vn(t, r.data));
    return (function (e, t) {
      if (n(e) || n(t)) return zn(e, Kn(t));
      return '';
    })(t.staticClass, t.class);
  }
  function Vn(e, t) {
    return {
      staticClass: zn(e.staticClass, t.staticClass),
      class: n(e.class) ? [e.class, t.class] : t.class
    };
  }
  function zn(e, t) {
    return e ? (t ? e + ' ' + t : e) : t || '';
  }
  function Kn(e) {
    return Array.isArray(e)
      ? (function (e) {
        for (var t, r = '', i = 0, o = e.length; i < o; i++)
          n((t = Kn(e[i]))) && '' !== t && (r && (r += ' '), (r += t));
        return r;
      })(e)
      : o(e)
        ? (function (e) {
          var t = '';
          for (var n in e) e[n] && (t && (t += ' '), (t += n));
          return t;
        })(e)
        : 'string' == typeof e
          ? e
          : '';
  }
  var Jn = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  },
    qn = p(
      'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot'
    ),
    Wn = p(
      'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
      !0
    ),
    Zn = function (e) {
      return qn(e) || Wn(e);
    };
  function Gn(e) {
    return Wn(e) ? 'svg' : 'math' === e ? 'math' : void 0;
  }
  var Xn = Object.create(null);
  var Yn = p('text,number,password,search,email,tel,url');
  function Qn(e) {
    if ('string' == typeof e) {
      var t = document.querySelector(e);
      return t || document.createElement('div');
    }
    return e;
  }
  var er = Object.freeze({
    createElement: function (e, t) {
      var n = document.createElement(e);
      return 'select' !== e
        ? n
        : (t.data &&
          t.data.attrs &&
          void 0 !== t.data.attrs.multiple &&
          n.setAttribute('multiple', 'multiple'),
          n);
    },
    createElementNS: function (e, t) {
      return document.createElementNS(Jn[e], t);
    },
    createTextNode: function (e) {
      return document.createTextNode(e);
    },
    createComment: function (e) {
      return document.createComment(e);
    },
    insertBefore: function (e, t, n) {
      e.insertBefore(t, n);
    },
    removeChild: function (e, t) {
      e.removeChild(t);
    },
    appendChild: function (e, t) {
      e.appendChild(t);
    },
    parentNode: function (e) {
      return e.parentNode;
    },
    nextSibling: function (e) {
      return e.nextSibling;
    },
    tagName: function (e) {
      return e.tagName;
    },
    setTextContent: function (e, t) {
      e.textContent = t;
    },
    setStyleScope: function (e, t) {
      e.setAttribute(t, '');
    }
  }),
    tr = {
      create: function (e, t) {
        nr(t);
      },
      update: function (e, t) {
        e.data.ref !== t.data.ref && (nr(e, !0), nr(t));
      },
      destroy: function (e) {
        nr(e, !0);
      }
    };
  function nr(e, t) {
    var r = e.data.ref;
    if (n(r)) {
      var i = e.context,
        o = e.componentInstance || e.elm,
        a = i.$refs;
      t
        ? Array.isArray(a[r])
          ? h(a[r], o)
          : a[r] === o && (a[r] = void 0)
        : e.data.refInFor
          ? Array.isArray(a[r])
            ? a[r].indexOf(o) < 0 && a[r].push(o)
            : (a[r] = [o])
          : (a[r] = o);
    }
  }
  var rr = new pe('', {}, []),
    ir = ['create', 'activate', 'update', 'remove', 'destroy'];
  function or(e, i) {
    return (
      e.key === i.key &&
      e.asyncFactory === i.asyncFactory &&
      ((e.tag === i.tag &&
        e.isComment === i.isComment &&
        n(e.data) === n(i.data) &&
        (function (e, t) {
          if ('input' !== e.tag) return !0;
          var r,
            i = n((r = e.data)) && n((r = r.attrs)) && r.type,
            o = n((r = t.data)) && n((r = r.attrs)) && r.type;
          return i === o || (Yn(i) && Yn(o));
        })(e, i)) ||
        (r(e.isAsyncPlaceholder) && t(i.asyncFactory.error)))
    );
  }
  function ar(e, t, r) {
    var i,
      o,
      a = {};
    for (i = t; i <= r; ++i) n((o = e[i].key)) && (a[o] = i);
    return a;
  }
  var sr = {
    create: cr,
    update: cr,
    destroy: function (e) {
      cr(e, rr);
    }
  };
  function cr(e, t) {
    ; (e.data.directives || t.data.directives) &&
      (function (e, t) {
        var n,
          r,
          i,
          o = e === rr,
          a = t === rr,
          s = lr(e.data.directives, e.context),
          c = lr(t.data.directives, t.context),
          u = [],
          l = [];
        for (n in c)
          (r = s[n]),
            (i = c[n]),
            r
              ? ((i.oldValue = r.value),
                (i.oldArg = r.arg),
                pr(i, 'update', t, e),
                i.def && i.def.componentUpdated && l.push(i))
              : (pr(i, 'bind', t, e), i.def && i.def.inserted && u.push(i));
        if (u.length) {
          var f = function () {
            for (var n = 0; n < u.length; n++) pr(u[n], 'inserted', t, e);
          };
          o ? ot(t, 'insert', f) : f();
        }
        l.length &&
          ot(t, 'postpatch', function () {
            for (var n = 0; n < l.length; n++)
              pr(l[n], 'componentUpdated', t, e);
          });
        if (!o) for (n in s) c[n] || pr(s[n], 'unbind', e, e, a);
      })(e, t);
  }
  var ur = Object.create(null);
  function lr(e, t) {
    var n,
      r,
      i = Object.create(null);
    if (!e) return i;
    for (n = 0; n < e.length; n++)
      (r = e[n]).modifiers || (r.modifiers = ur),
        (i[fr(r)] = r),
        (r.def = Le(t.$options, 'directives', r.name));
    return i;
  }
  function fr(e) {
    return e.rawName || e.name + '.' + Object.keys(e.modifiers || {}).join('.');
  }
  function pr(e, t, n, r, i) {
    var o = e.def && e.def[t];
    if (o)
      try {
        o(n.elm, e, n, r, i);
      } catch (r) {
        He(r, n.context, 'directive ' + e.name + ' ' + t + ' hook');
      }
  }
  var dr = [tr, sr];
  function vr(e, r) {
    var i = r.componentOptions;
    if (
      !(
        (n(i) && !1 === i.Ctor.options.inheritAttrs) ||
        (t(e.data.attrs) && t(r.data.attrs))
      )
    ) {
      var o,
        a,
        s = r.elm,
        c = e.data.attrs || {},
        u = r.data.attrs || {};
      for (o in (n(u.__ob__) && (u = r.data.attrs = A({}, u)), u))
        (a = u[o]), c[o] !== a && hr(s, o, a, r.data.pre);
      for (o in ((q || Z) && u.value !== c.value && hr(s, 'value', u.value), c))
        t(u[o]) &&
          (Rn(o)
            ? s.removeAttributeNS(Pn, Hn(o))
            : Ln(o) || s.removeAttribute(o));
    }
  }
  function hr(e, t, n, r) {
    r || e.tagName.indexOf('-') > -1
      ? mr(e, t, n)
      : Fn(t)
        ? Bn(n)
          ? e.removeAttribute(t)
          : ((n = 'allowfullscreen' === t && 'EMBED' === e.tagName ? 'true' : t),
            e.setAttribute(t, n))
        : Ln(t)
          ? e.setAttribute(t, Mn(t, n))
          : Rn(t)
            ? Bn(n)
              ? e.removeAttributeNS(Pn, Hn(t))
              : e.setAttributeNS(Pn, t, n)
            : mr(e, t, n);
  }
  function mr(e, t, n) {
    if (Bn(n)) e.removeAttribute(t);
    else {
      if (
        q &&
        !W &&
        'TEXTAREA' === e.tagName &&
        'placeholder' === t &&
        '' !== n &&
        !e.__ieph
      ) {
        var r = function (t) {
          t.stopImmediatePropagation(), e.removeEventListener('input', r);
        };
        e.addEventListener('input', r), (e.__ieph = !0);
      }
      e.setAttribute(t, n);
    }
  }
  var yr = { create: vr, update: vr };
  function gr(e, r) {
    var i = r.elm,
      o = r.data,
      a = e.data;
    if (
      !(
        t(o.staticClass) &&
        t(o.class) &&
        (t(a) || (t(a.staticClass) && t(a.class)))
      )
    ) {
      var s = Un(r),
        c = i._transitionClasses;
      n(c) && (s = zn(s, Kn(c))),
        s !== i._prevClass && (i.setAttribute('class', s), (i._prevClass = s));
    }
  }
  var _r,
    br,
    $r,
    wr,
    Cr,
    xr,
    kr = { create: gr, update: gr },
    Ar = /[\w).+\-_$\]]/;
  function Or(e) {
    var t,
      n,
      r,
      i,
      o,
      a = !1,
      s = !1,
      c = !1,
      u = !1,
      l = 0,
      f = 0,
      p = 0,
      d = 0;
    for (r = 0; r < e.length; r++)
      if (((n = t), (t = e.charCodeAt(r)), a)) 39 === t && 92 !== n && (a = !1);
      else if (s) 34 === t && 92 !== n && (s = !1);
      else if (c) 96 === t && 92 !== n && (c = !1);
      else if (u) 47 === t && 92 !== n && (u = !1);
      else if (
        124 !== t ||
        124 === e.charCodeAt(r + 1) ||
        124 === e.charCodeAt(r - 1) ||
        l ||
        f ||
        p
      ) {
        switch (t) {
          case 34:
            s = !0;
            break;
          case 39:
            a = !0;
            break;
          case 96:
            c = !0;
            break;
          case 40:
            p++;
            break;
          case 41:
            p--;
            break;
          case 91:
            f++;
            break;
          case 93:
            f--;
            break;
          case 123:
            l++;
            break;
          case 125:
            l--;
        }
        if (47 === t) {
          for (
            var v = r - 1, h = void 0;
            v >= 0 && ' ' === (h = e.charAt(v));
            v--
          );
          ; (h && Ar.test(h)) || (u = !0);
        }
      } else void 0 === i ? ((d = r + 1), (i = e.slice(0, r).trim())) : m();
    function m() {
      ; (o || (o = [])).push(e.slice(d, r).trim()), (d = r + 1);
    }
    if ((void 0 === i ? (i = e.slice(0, r).trim()) : 0 !== d && m(), o))
      for (r = 0; r < o.length; r++) i = Sr(i, o[r]);
    return i;
  }
  function Sr(e, t) {
    var n = t.indexOf('(');
    if (n < 0) return '_f("' + t + '")(' + e + ')';
    var r = t.slice(0, n),
      i = t.slice(n + 1);
    return '_f("' + r + '")(' + e + (')' !== i ? ',' + i : i);
  }
  function Tr(e, t) {
    console.error('[Vue compiler]: ' + e);
  }
  function Nr(e, t) {
    return e
      ? e
        .map(function (e) {
          return e[t];
        })
        .filter(function (e) {
          return e;
        })
      : [];
  }
  function Er(e, t, n, r, i) {
    ; (e.props || (e.props = [])).push(Hr({ name: t, value: n, dynamic: i }, r)),
      (e.plain = !1);
  }
  function jr(e, t, n, r, i) {
    ; (i
      ? e.dynamicAttrs || (e.dynamicAttrs = [])
      : e.attrs || (e.attrs = [])
    ).push(Hr({ name: t, value: n, dynamic: i }, r)),
      (e.plain = !1);
  }
  function Dr(e, t, n, r) {
    ; (e.attrsMap[t] = n), e.attrsList.push(Hr({ name: t, value: n }, r));
  }
  function Lr(e, t, n, r, i, o, a, s) {
    ; (e.directives || (e.directives = [])).push(
      Hr(
        {
          name: t,
          rawName: n,
          value: r,
          arg: i,
          isDynamicArg: o,
          modifiers: a
        },
        s
      )
    ),
      (e.plain = !1);
  }
  function Ir(e, t, n) {
    return n ? '_p(' + t + ',"' + e + '")' : e + t;
  }
  function Mr(t, n, r, i, o, a, s, c) {
    var u
      ; (i = i || e).right
        ? c
          ? (n = '(' + n + ")==='click'?'contextmenu':(" + n + ')')
          : 'click' === n && ((n = 'contextmenu'), delete i.right)
        : i.middle &&
        (c
          ? (n = '(' + n + ")==='click'?'mouseup':(" + n + ')')
          : 'click' === n && (n = 'mouseup')),
        i.capture && (delete i.capture, (n = Ir('!', n, c))),
        i.once && (delete i.once, (n = Ir('~', n, c))),
        i.passive && (delete i.passive, (n = Ir('&', n, c))),
        i.native
          ? (delete i.native, (u = t.nativeEvents || (t.nativeEvents = {})))
          : (u = t.events || (t.events = {}));
    var l = Hr({ value: r.trim(), dynamic: c }, s);
    i !== e && (l.modifiers = i);
    var f = u[n];
    Array.isArray(f)
      ? o
        ? f.unshift(l)
        : f.push(l)
      : (u[n] = f ? (o ? [l, f] : [f, l]) : l),
      (t.plain = !1);
  }
  function Fr(e, t, n) {
    var r = Pr(e, ':' + t) || Pr(e, 'v-bind:' + t);
    if (null != r) return Or(r);
    if (!1 !== n) {
      var i = Pr(e, t);
      if (null != i) return JSON.stringify(i);
    }
  }
  function Pr(e, t, n) {
    var r;
    if (null != (r = e.attrsMap[t]))
      for (var i = e.attrsList, o = 0, a = i.length; o < a; o++)
        if (i[o].name === t) {
          i.splice(o, 1);
          break;
        }
    return n && delete e.attrsMap[t], r;
  }
  function Rr(e, t) {
    for (var n = e.attrsList, r = 0, i = n.length; r < i; r++) {
      var o = n[r];
      if (t.test(o.name)) return n.splice(r, 1), o;
    }
  }
  function Hr(e, t) {
    return (
      t &&
      (null != t.start && (e.start = t.start),
        null != t.end && (e.end = t.end)),
      e
    );
  }
  function Br(e, t, n) {
    var r = n || {},
      i = r.number,
      o = '$$v';
    r.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"),
      i && (o = '_n(' + o + ')');
    var a = Ur(t, o);
    e.model = {
      value: '(' + t + ')',
      expression: JSON.stringify(t),
      callback: 'function ($$v) {' + a + '}'
    };
  }
  function Ur(e, t) {
    var n = (function (e) {
      if (
        ((e = e.trim()),
          (_r = e.length),
          e.indexOf('[') < 0 || e.lastIndexOf(']') < _r - 1)
      )
        return (wr = e.lastIndexOf('.')) > -1
          ? { exp: e.slice(0, wr), key: '"' + e.slice(wr + 1) + '"' }
          : { exp: e, key: null }
          ; (br = e), (wr = Cr = xr = 0);
      for (; !zr();) Kr(($r = Vr())) ? qr($r) : 91 === $r && Jr($r);
      return { exp: e.slice(0, Cr), key: e.slice(Cr + 1, xr) };
    })(e);
    return null === n.key
      ? e + '=' + t
      : '$set(' + n.exp + ', ' + n.key + ', ' + t + ')';
  }
  function Vr() {
    return br.charCodeAt(++wr);
  }
  function zr() {
    return wr >= _r;
  }
  function Kr(e) {
    return 34 === e || 39 === e;
  }
  function Jr(e) {
    var t = 1;
    for (Cr = wr; !zr();)
      if (Kr((e = Vr()))) qr(e);
      else if ((91 === e && t++, 93 === e && t--, 0 === t)) {
        xr = wr;
        break;
      }
  }
  function qr(e) {
    for (var t = e; !zr() && (e = Vr()) !== t;);
  }
  var Wr,
    Zr = '__r',
    Gr = '__c';
  function Xr(e, t, n) {
    var r = Wr;
    return function i() {
      null !== t.apply(null, arguments) && ei(e, i, n, r);
    };
  }
  var Yr = Ke && !(X && Number(X[1]) <= 53);
  function Qr(e, t, n, r) {
    if (Yr) {
      var i = sn,
        o = t;
      t = o._wrapper = function (e) {
        if (
          e.target === e.currentTarget ||
          e.timeStamp >= i ||
          e.timeStamp <= 0 ||
          e.target.ownerDocument !== document
        )
          return o.apply(this, arguments);
      };
    }
    Wr.addEventListener(e, t, Q ? { capture: n, passive: r } : n);
  }
  function ei(e, t, n, r) {
    ; (r || Wr).removeEventListener(e, t._wrapper || t, n);
  }
  function ti(e, r) {
    if (!t(e.data.on) || !t(r.data.on)) {
      var i = r.data.on || {},
        o = e.data.on || {}
        ; (Wr = r.elm),
          (function (e) {
            if (n(e[Zr])) {
              var t = q ? 'change' : 'input'
                ; (e[t] = [].concat(e[Zr], e[t] || [])), delete e[Zr];
            }
            n(e[Gr]) &&
              ((e.change = [].concat(e[Gr], e.change || [])), delete e[Gr]);
          })(i),
          it(i, o, Qr, ei, Xr, r.context),
          (Wr = void 0);
    }
  }
  var ni,
    ri = { create: ti, update: ti };
  function ii(e, r) {
    if (!t(e.data.domProps) || !t(r.data.domProps)) {
      var i,
        o,
        a = r.elm,
        s = e.data.domProps || {},
        c = r.data.domProps || {};
      for (i in (n(c.__ob__) && (c = r.data.domProps = A({}, c)), s))
        i in c || (a[i] = '');
      for (i in c) {
        if (((o = c[i]), 'textContent' === i || 'innerHTML' === i)) {
          if ((r.children && (r.children.length = 0), o === s[i])) continue;
          1 === a.childNodes.length && a.removeChild(a.childNodes[0]);
        }
        if ('value' === i && 'PROGRESS' !== a.tagName) {
          a._value = o;
          var u = t(o) ? '' : String(o);
          oi(a, u) && (a.value = u);
        } else if ('innerHTML' === i && Wn(a.tagName) && t(a.innerHTML)) {
          ; (ni = ni || document.createElement('div')).innerHTML =
            '<svg>' + o + '</svg>';
          for (var l = ni.firstChild; a.firstChild;)
            a.removeChild(a.firstChild);
          for (; l.firstChild;) a.appendChild(l.firstChild);
        } else if (o !== s[i])
          try {
            a[i] = o;
          } catch (e) { }
      }
    }
  }
  function oi(e, t) {
    return (
      !e.composing &&
      ('OPTION' === e.tagName ||
        (function (e, t) {
          var n = !0;
          try {
            n = document.activeElement !== e;
          } catch (e) { }
          return n && e.value !== t;
        })(e, t) ||
        (function (e, t) {
          var r = e.value,
            i = e._vModifiers;
          if (n(i)) {
            if (i.number) return f(r) !== f(t);
            if (i.trim) return r.trim() !== t.trim();
          }
          return r !== t;
        })(e, t))
    );
  }
  var ai = { create: ii, update: ii },
    si = g(function (e) {
      var t = {},
        n = /:(.+)/;
      return (
        e.split(/;(?![^(]*\))/g).forEach(function (e) {
          if (e) {
            var r = e.split(n);
            r.length > 1 && (t[r[0].trim()] = r[1].trim());
          }
        }),
        t
      );
    });
  function ci(e) {
    var t = ui(e.style);
    return e.staticStyle ? A(e.staticStyle, t) : t;
  }
  function ui(e) {
    return Array.isArray(e) ? O(e) : 'string' == typeof e ? si(e) : e;
  }
  var li,
    fi = /^--/,
    pi = /\s*!important$/,
    di = function (e, t, n) {
      if (fi.test(t)) e.style.setProperty(t, n);
      else if (pi.test(n))
        e.style.setProperty(C(t), n.replace(pi, ''), 'important');
      else {
        var r = hi(t);
        if (Array.isArray(n))
          for (var i = 0, o = n.length; i < o; i++) e.style[r] = n[i];
        else e.style[r] = n;
      }
    },
    vi = ['Webkit', 'Moz', 'ms'],
    hi = g(function (e) {
      if (
        ((li = li || document.createElement('div').style),
          'filter' !== (e = b(e)) && e in li)
      )
        return e;
      for (
        var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0;
        n < vi.length;
        n++
      ) {
        var r = vi[n] + t;
        if (r in li) return r;
      }
    });
  function mi(e, r) {
    var i = r.data,
      o = e.data;
    if (!(t(i.staticStyle) && t(i.style) && t(o.staticStyle) && t(o.style))) {
      var a,
        s,
        c = r.elm,
        u = o.staticStyle,
        l = o.normalizedStyle || o.style || {},
        f = u || l,
        p = ui(r.data.style) || {};
      r.data.normalizedStyle = n(p.__ob__) ? A({}, p) : p;
      var d = (function (e, t) {
        var n,
          r = {};
        if (t)
          for (var i = e; i.componentInstance;)
            (i = i.componentInstance._vnode) &&
              i.data &&
              (n = ci(i.data)) &&
              A(r, n)
              ; (n = ci(e.data)) && A(r, n);
        for (var o = e; (o = o.parent);) o.data && (n = ci(o.data)) && A(r, n);
        return r;
      })(r, !0);
      for (s in f) t(d[s]) && di(c, s, '');
      for (s in d) (a = d[s]) !== f[s] && di(c, s, null == a ? '' : a);
    }
  }
  var yi = { create: mi, update: mi },
    gi = /\s+/;
  function _i(e, t) {
    if (t && (t = t.trim()))
      if (e.classList)
        t.indexOf(' ') > -1
          ? t.split(gi).forEach(function (t) {
            return e.classList.add(t);
          })
          : e.classList.add(t);
      else {
        var n = ' ' + (e.getAttribute('class') || '') + ' ';
        n.indexOf(' ' + t + ' ') < 0 && e.setAttribute('class', (n + t).trim());
      }
  }
  function bi(e, t) {
    if (t && (t = t.trim()))
      if (e.classList)
        t.indexOf(' ') > -1
          ? t.split(gi).forEach(function (t) {
            return e.classList.remove(t);
          })
          : e.classList.remove(t),
          e.classList.length || e.removeAttribute('class');
      else {
        for (
          var n = ' ' + (e.getAttribute('class') || '') + ' ',
          r = ' ' + t + ' ';
          n.indexOf(r) >= 0;

        )
          n = n.replace(r, ' ')
            ; (n = n.trim())
              ? e.setAttribute('class', n)
              : e.removeAttribute('class');
      }
  }
  function $i(e) {
    if (e) {
      if ('object' == typeof e) {
        var t = {};
        return !1 !== e.css && A(t, wi(e.name || 'v')), A(t, e), t;
      }
      return 'string' == typeof e ? wi(e) : void 0;
    }
  }
  var wi = g(function (e) {
    return {
      enterClass: e + '-enter',
      enterToClass: e + '-enter-to',
      enterActiveClass: e + '-enter-active',
      leaveClass: e + '-leave',
      leaveToClass: e + '-leave-to',
      leaveActiveClass: e + '-leave-active'
    };
  }),
    Ci = V && !W,
    xi = 'transition',
    ki = 'animation',
    Ai = 'transition',
    Oi = 'transitionend',
    Si = 'animation',
    Ti = 'animationend';
  Ci &&
    (void 0 === window.ontransitionend &&
      void 0 !== window.onwebkittransitionend &&
      ((Ai = 'WebkitTransition'), (Oi = 'webkitTransitionEnd')),
      void 0 === window.onanimationend &&
      void 0 !== window.onwebkitanimationend &&
      ((Si = 'WebkitAnimation'), (Ti = 'webkitAnimationEnd')));
  var Ni = V
    ? window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : setTimeout
    : function (e) {
      return e();
    };
  function Ei(e) {
    Ni(function () {
      Ni(e);
    });
  }
  function ji(e, t) {
    var n = e._transitionClasses || (e._transitionClasses = []);
    n.indexOf(t) < 0 && (n.push(t), _i(e, t));
  }
  function Di(e, t) {
    e._transitionClasses && h(e._transitionClasses, t), bi(e, t);
  }
  function Li(e, t, n) {
    var r = Mi(e, t),
      i = r.type,
      o = r.timeout,
      a = r.propCount;
    if (!i) return n();
    var s = i === xi ? Oi : Ti,
      c = 0,
      u = function () {
        e.removeEventListener(s, l), n();
      },
      l = function (t) {
        t.target === e && ++c >= a && u();
      };
    setTimeout(function () {
      c < a && u();
    }, o + 1),
      e.addEventListener(s, l);
  }
  var Ii = /\b(transform|all)(,|$)/;
  function Mi(e, t) {
    var n,
      r = window.getComputedStyle(e),
      i = (r[Ai + 'Delay'] || '').split(', '),
      o = (r[Ai + 'Duration'] || '').split(', '),
      a = Fi(i, o),
      s = (r[Si + 'Delay'] || '').split(', '),
      c = (r[Si + 'Duration'] || '').split(', '),
      u = Fi(s, c),
      l = 0,
      f = 0;
    return (
      t === xi
        ? a > 0 && ((n = xi), (l = a), (f = o.length))
        : t === ki
          ? u > 0 && ((n = ki), (l = u), (f = c.length))
          : (f = (n = (l = Math.max(a, u)) > 0 ? (a > u ? xi : ki) : null)
            ? n === xi
              ? o.length
              : c.length
            : 0),
      {
        type: n,
        timeout: l,
        propCount: f,
        hasTransform: n === xi && Ii.test(r[Ai + 'Property'])
      }
    );
  }
  function Fi(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max.apply(
      null,
      t.map(function (t, n) {
        return Pi(t) + Pi(e[n]);
      })
    );
  }
  function Pi(e) {
    return 1e3 * Number(e.slice(0, -1).replace(',', '.'));
  }
  function Ri(e, r) {
    var i = e.elm;
    n(i._leaveCb) && ((i._leaveCb.cancelled = !0), i._leaveCb());
    var a = $i(e.data.transition);
    if (!t(a) && !n(i._enterCb) && 1 === i.nodeType) {
      for (
        var s = a.css,
        c = a.type,
        u = a.enterClass,
        l = a.enterToClass,
        p = a.enterActiveClass,
        d = a.appearClass,
        v = a.appearToClass,
        h = a.appearActiveClass,
        m = a.beforeEnter,
        y = a.enter,
        g = a.afterEnter,
        _ = a.enterCancelled,
        b = a.beforeAppear,
        $ = a.appear,
        w = a.afterAppear,
        C = a.appearCancelled,
        x = a.duration,
        k = Zt,
        A = Zt.$vnode;
        A && A.parent;

      )
        (k = A.context), (A = A.parent);
      var O = !k._isMounted || !e.isRootInsert;
      if (!O || $ || '' === $) {
        var S = O && d ? d : u,
          T = O && h ? h : p,
          N = O && v ? v : l,
          E = (O && b) || m,
          j = O && 'function' == typeof $ ? $ : y,
          L = (O && w) || g,
          I = (O && C) || _,
          M = f(o(x) ? x.enter : x),
          F = !1 !== s && !W,
          P = Ui(j),
          R = (i._enterCb = D(function () {
            F && (Di(i, N), Di(i, T)),
              R.cancelled ? (F && Di(i, S), I && I(i)) : L && L(i),
              (i._enterCb = null);
          }));
        e.data.show ||
          ot(e, 'insert', function () {
            var t = i.parentNode,
              n = t && t._pending && t._pending[e.key];
            n && n.tag === e.tag && n.elm._leaveCb && n.elm._leaveCb(),
              j && j(i, R);
          }),
          E && E(i),
          F &&
          (ji(i, S),
            ji(i, T),
            Ei(function () {
              Di(i, S),
                R.cancelled ||
                (ji(i, N), P || (Bi(M) ? setTimeout(R, M) : Li(i, c, R)));
            })),
          e.data.show && (r && r(), j && j(i, R)),
          F || P || R();
      }
    }
  }
  function Hi(e, r) {
    var i = e.elm;
    n(i._enterCb) && ((i._enterCb.cancelled = !0), i._enterCb());
    var a = $i(e.data.transition);
    if (t(a) || 1 !== i.nodeType) return r();
    if (!n(i._leaveCb)) {
      var s = a.css,
        c = a.type,
        u = a.leaveClass,
        l = a.leaveToClass,
        p = a.leaveActiveClass,
        d = a.beforeLeave,
        v = a.leave,
        h = a.afterLeave,
        m = a.leaveCancelled,
        y = a.delayLeave,
        g = a.duration,
        _ = !1 !== s && !W,
        b = Ui(v),
        $ = f(o(g) ? g.leave : g),
        w = (i._leaveCb = D(function () {
          i.parentNode &&
            i.parentNode._pending &&
            (i.parentNode._pending[e.key] = null),
            _ && (Di(i, l), Di(i, p)),
            w.cancelled ? (_ && Di(i, u), m && m(i)) : (r(), h && h(i)),
            (i._leaveCb = null);
        }));
      y ? y(C) : C();
    }
    function C() {
      w.cancelled ||
        (!e.data.show &&
          i.parentNode &&
          ((i.parentNode._pending || (i.parentNode._pending = {}))[e.key] = e),
          d && d(i),
          _ &&
          (ji(i, u),
            ji(i, p),
            Ei(function () {
              Di(i, u),
                w.cancelled ||
                (ji(i, l), b || (Bi($) ? setTimeout(w, $) : Li(i, c, w)));
            })),
          v && v(i, w),
          _ || b || w());
    }
  }
  function Bi(e) {
    return 'number' == typeof e && !isNaN(e);
  }
  function Ui(e) {
    if (t(e)) return !1;
    var r = e.fns;
    return n(r) ? Ui(Array.isArray(r) ? r[0] : r) : (e._length || e.length) > 1;
  }
  function Vi(e, t) {
    !0 !== t.data.show && Ri(t);
  }
  var zi = (function (e) {
    var o,
      a,
      s = {},
      c = e.modules,
      u = e.nodeOps;
    for (o = 0; o < ir.length; ++o)
      for (s[ir[o]] = [], a = 0; a < c.length; ++a)
        n(c[a][ir[o]]) && s[ir[o]].push(c[a][ir[o]]);
    function l(e) {
      var t = u.parentNode(e);
      n(t) && u.removeChild(t, e);
    }
    function f(e, t, i, o, a, c, l) {
      if (
        (n(e.elm) && n(c) && (e = c[l] = me(e)),
          (e.isRootInsert = !a),
          !(function (e, t, i, o) {
            var a = e.data;
            if (n(a)) {
              var c = n(e.componentInstance) && a.keepAlive;
              if (
                (n((a = a.hook)) && n((a = a.init)) && a(e, !1),
                  n(e.componentInstance))
              )
                return (
                  d(e, t),
                  v(i, e.elm, o),
                  r(c) &&
                  (function (e, t, r, i) {
                    for (var o, a = e; a.componentInstance;)
                      if (
                        ((a = a.componentInstance._vnode),
                          n((o = a.data)) && n((o = o.transition)))
                      ) {
                        for (o = 0; o < s.activate.length; ++o)
                          s.activate[o](rr, a);
                        t.push(a);
                        break;
                      }
                    v(r, e.elm, i);
                  })(e, t, i, o),
                  !0
                );
            }
          })(e, t, i, o))
      ) {
        var f = e.data,
          p = e.children,
          m = e.tag;
        n(m)
          ? ((e.elm = e.ns
            ? u.createElementNS(e.ns, m)
            : u.createElement(m, e)),
            g(e),
            h(e, p, t),
            n(f) && y(e, t),
            v(i, e.elm, o))
          : r(e.isComment)
            ? ((e.elm = u.createComment(e.text)), v(i, e.elm, o))
            : ((e.elm = u.createTextNode(e.text)), v(i, e.elm, o));
      }
    }
    function d(e, t) {
      n(e.data.pendingInsert) &&
        (t.push.apply(t, e.data.pendingInsert), (e.data.pendingInsert = null)),
        (e.elm = e.componentInstance.$el),
        m(e) ? (y(e, t), g(e)) : (nr(e), t.push(e));
    }
    function v(e, t, r) {
      n(e) &&
        (n(r)
          ? u.parentNode(r) === e && u.insertBefore(e, t, r)
          : u.appendChild(e, t));
    }
    function h(e, t, n) {
      if (Array.isArray(t))
        for (var r = 0; r < t.length; ++r) f(t[r], n, e.elm, null, !0, t, r);
      else i(e.text) && u.appendChild(e.elm, u.createTextNode(String(e.text)));
    }
    function m(e) {
      for (; e.componentInstance;) e = e.componentInstance._vnode;
      return n(e.tag);
    }
    function y(e, t) {
      for (var r = 0; r < s.create.length; ++r) s.create[r](rr, e);
      n((o = e.data.hook)) &&
        (n(o.create) && o.create(rr, e), n(o.insert) && t.push(e));
    }
    function g(e) {
      var t;
      if (n((t = e.fnScopeId))) u.setStyleScope(e.elm, t);
      else
        for (var r = e; r;)
          n((t = r.context)) &&
            n((t = t.$options._scopeId)) &&
            u.setStyleScope(e.elm, t),
            (r = r.parent);
      n((t = Zt)) &&
        t !== e.context &&
        t !== e.fnContext &&
        n((t = t.$options._scopeId)) &&
        u.setStyleScope(e.elm, t);
    }
    function _(e, t, n, r, i, o) {
      for (; r <= i; ++r) f(n[r], o, e, t, !1, n, r);
    }
    function b(e) {
      var t,
        r,
        i = e.data;
      if (n(i))
        for (
          n((t = i.hook)) && n((t = t.destroy)) && t(e), t = 0;
          t < s.destroy.length;
          ++t
        )
          s.destroy[t](e);
      if (n((t = e.children)))
        for (r = 0; r < e.children.length; ++r) b(e.children[r]);
    }
    function $(e, t, r) {
      for (; t <= r; ++t) {
        var i = e[t];
        n(i) && (n(i.tag) ? (w(i), b(i)) : l(i.elm));
      }
    }
    function w(e, t) {
      if (n(t) || n(e.data)) {
        var r,
          i = s.remove.length + 1;
        for (
          n(t)
            ? (t.listeners += i)
            : (t = (function (e, t) {
              function n() {
                0 == --n.listeners && l(e);
              }
              return (n.listeners = t), n;
            })(e.elm, i)),
          n((r = e.componentInstance)) &&
          n((r = r._vnode)) &&
          n(r.data) &&
          w(r, t),
          r = 0;
          r < s.remove.length;
          ++r
        )
          s.remove[r](e, t);
        n((r = e.data.hook)) && n((r = r.remove)) ? r(e, t) : t();
      } else l(e.elm);
    }
    function C(e, t, r, i) {
      for (var o = r; o < i; o++) {
        var a = t[o];
        if (n(a) && or(e, a)) return o;
      }
    }
    function x(e, i, o, a, c, l) {
      if (e !== i) {
        n(i.elm) && n(a) && (i = a[c] = me(i));
        var p = (i.elm = e.elm);
        if (r(e.isAsyncPlaceholder))
          n(i.asyncFactory.resolved)
            ? O(e.elm, i, o)
            : (i.isAsyncPlaceholder = !0);
        else if (
          r(i.isStatic) &&
          r(e.isStatic) &&
          i.key === e.key &&
          (r(i.isCloned) || r(i.isOnce))
        )
          i.componentInstance = e.componentInstance;
        else {
          var d,
            v = i.data;
          n(v) && n((d = v.hook)) && n((d = d.prepatch)) && d(e, i);
          var h = e.children,
            y = i.children;
          if (n(v) && m(i)) {
            for (d = 0; d < s.update.length; ++d) s.update[d](e, i);
            n((d = v.hook)) && n((d = d.update)) && d(e, i);
          }
          t(i.text)
            ? n(h) && n(y)
              ? h !== y &&
              (function (e, r, i, o, a) {
                for (
                  var s,
                  c,
                  l,
                  p = 0,
                  d = 0,
                  v = r.length - 1,
                  h = r[0],
                  m = r[v],
                  y = i.length - 1,
                  g = i[0],
                  b = i[y],
                  w = !a;
                  p <= v && d <= y;

                )
                  t(h)
                    ? (h = r[++p])
                    : t(m)
                      ? (m = r[--v])
                      : or(h, g)
                        ? (x(h, g, o, i, d), (h = r[++p]), (g = i[++d]))
                        : or(m, b)
                          ? (x(m, b, o, i, y), (m = r[--v]), (b = i[--y]))
                          : or(h, b)
                            ? (x(h, b, o, i, y),
                              w && u.insertBefore(e, h.elm, u.nextSibling(m.elm)),
                              (h = r[++p]),
                              (b = i[--y]))
                            : or(m, g)
                              ? (x(m, g, o, i, d),
                                w && u.insertBefore(e, m.elm, h.elm),
                                (m = r[--v]),
                                (g = i[++d]))
                              : (t(s) && (s = ar(r, p, v)),
                                t((c = n(g.key) ? s[g.key] : C(g, r, p, v)))
                                  ? f(g, o, e, h.elm, !1, i, d)
                                  : or((l = r[c]), g)
                                    ? (x(l, g, o, i, d),
                                      (r[c] = void 0),
                                      w && u.insertBefore(e, l.elm, h.elm))
                                    : f(g, o, e, h.elm, !1, i, d),
                                (g = i[++d]));
                p > v
                  ? _(e, t(i[y + 1]) ? null : i[y + 1].elm, i, d, y, o)
                  : d > y && $(r, p, v);
              })(p, h, y, o, l)
              : n(y)
                ? (n(e.text) && u.setTextContent(p, ''),
                  _(p, null, y, 0, y.length - 1, o))
                : n(h)
                  ? $(h, 0, h.length - 1)
                  : n(e.text) && u.setTextContent(p, '')
            : e.text !== i.text && u.setTextContent(p, i.text),
            n(v) && n((d = v.hook)) && n((d = d.postpatch)) && d(e, i);
        }
      }
    }
    function k(e, t, i) {
      if (r(i) && n(e.parent)) e.parent.data.pendingInsert = t;
      else for (var o = 0; o < t.length; ++o) t[o].data.hook.insert(t[o]);
    }
    var A = p('attrs,class,staticClass,staticStyle,key');
    function O(e, t, i, o) {
      var a,
        s = t.tag,
        c = t.data,
        u = t.children;
      if (
        ((o = o || (c && c.pre)),
          (t.elm = e),
          r(t.isComment) && n(t.asyncFactory))
      )
        return (t.isAsyncPlaceholder = !0), !0;
      if (
        n(c) &&
        (n((a = c.hook)) && n((a = a.init)) && a(t, !0),
          n((a = t.componentInstance)))
      )
        return d(t, i), !0;
      if (n(s)) {
        if (n(u))
          if (e.hasChildNodes())
            if (n((a = c)) && n((a = a.domProps)) && n((a = a.innerHTML))) {
              if (a !== e.innerHTML) return !1;
            } else {
              for (var l = !0, f = e.firstChild, p = 0; p < u.length; p++) {
                if (!f || !O(f, u[p], i, o)) {
                  l = !1;
                  break;
                }
                f = f.nextSibling;
              }
              if (!l || f) return !1;
            }
          else h(t, u, i);
        if (n(c)) {
          var v = !1;
          for (var m in c)
            if (!A(m)) {
              ; (v = !0), y(t, i);
              break;
            }
          !v && c.class && tt(c.class);
        }
      } else e.data !== t.text && (e.data = t.text);
      return !0;
    }
    return function (e, i, o, a) {
      if (!t(i)) {
        var c,
          l = !1,
          p = [];
        if (t(e)) (l = !0), f(i, p);
        else {
          var d = n(e.nodeType);
          if (!d && or(e, i)) x(e, i, p, null, null, a);
          else {
            if (d) {
              if (
                (1 === e.nodeType &&
                  e.hasAttribute(L) &&
                  (e.removeAttribute(L), (o = !0)),
                  r(o) && O(e, i, p))
              )
                return k(i, p, !0), e
                  ; (c = e),
                    (e = new pe(u.tagName(c).toLowerCase(), {}, [], void 0, c));
            }
            var v = e.elm,
              h = u.parentNode(v);
            if ((f(i, p, v._leaveCb ? null : h, u.nextSibling(v)), n(i.parent)))
              for (var y = i.parent, g = m(i); y;) {
                for (var _ = 0; _ < s.destroy.length; ++_) s.destroy[_](y);
                if (((y.elm = i.elm), g)) {
                  for (var w = 0; w < s.create.length; ++w) s.create[w](rr, y);
                  var C = y.data.hook.insert;
                  if (C.merged)
                    for (var A = 1; A < C.fns.length; A++) C.fns[A]();
                } else nr(y);
                y = y.parent;
              }
            n(h) ? $([e], 0, 0) : n(e.tag) && b(e);
          }
        }
        return k(i, p, l), i.elm;
      }
      n(e) && b(e);
    };
  })({
    nodeOps: er,
    modules: [
      yr,
      kr,
      ri,
      ai,
      yi,
      V
        ? {
          create: Vi,
          activate: Vi,
          remove: function (e, t) {
            !0 !== e.data.show ? Hi(e, t) : t();
          }
        }
        : {}
    ].concat(dr)
  });
  W &&
    document.addEventListener('selectionchange', function () {
      var e = document.activeElement;
      e && e.vmodel && Yi(e, 'input');
    });
  var Ki = {
    inserted: function (e, t, n, r) {
      'select' === n.tag
        ? (r.elm && !r.elm._vOptions
          ? ot(n, 'postpatch', function () {
            Ki.componentUpdated(e, t, n);
          })
          : Ji(e, t, n.context),
          (e._vOptions = [].map.call(e.options, Zi)))
        : ('textarea' === n.tag || Yn(e.type)) &&
        ((e._vModifiers = t.modifiers),
          t.modifiers.lazy ||
          (e.addEventListener('compositionstart', Gi),
            e.addEventListener('compositionend', Xi),
            e.addEventListener('change', Xi),
            W && (e.vmodel = !0)));
    },
    componentUpdated: function (e, t, n) {
      if ('select' === n.tag) {
        Ji(e, t, n.context);
        var r = e._vOptions,
          i = (e._vOptions = [].map.call(e.options, Zi));
        if (
          i.some(function (e, t) {
            return !E(e, r[t]);
          })
        )
          (e.multiple
            ? t.value.some(function (e) {
              return Wi(e, i);
            })
            : t.value !== t.oldValue && Wi(t.value, i)) && Yi(e, 'change');
      }
    }
  };
  function Ji(e, t, n) {
    qi(e, t, n),
      (q || Z) &&
      setTimeout(function () {
        qi(e, t, n);
      }, 0);
  }
  function qi(e, t, n) {
    var r = t.value,
      i = e.multiple;
    if (!i || Array.isArray(r)) {
      for (var o, a, s = 0, c = e.options.length; s < c; s++)
        if (((a = e.options[s]), i))
          (o = j(r, Zi(a)) > -1), a.selected !== o && (a.selected = o);
        else if (E(Zi(a), r))
          return void (e.selectedIndex !== s && (e.selectedIndex = s));
      i || (e.selectedIndex = -1);
    }
  }
  function Wi(e, t) {
    return t.every(function (t) {
      return !E(t, e);
    });
  }
  function Zi(e) {
    return '_value' in e ? e._value : e.value;
  }
  function Gi(e) {
    e.target.composing = !0;
  }
  function Xi(e) {
    e.target.composing && ((e.target.composing = !1), Yi(e.target, 'input'));
  }
  function Yi(e, t) {
    var n = document.createEvent('HTMLEvents');
    n.initEvent(t, !0, !0), e.dispatchEvent(n);
  }
  function Qi(e) {
    return !e.componentInstance || (e.data && e.data.transition)
      ? e
      : Qi(e.componentInstance._vnode);
  }
  var eo = {
    model: Ki,
    show: {
      bind: function (e, t, n) {
        var r = t.value,
          i = (n = Qi(n)).data && n.data.transition,
          o = (e.__vOriginalDisplay =
            'none' === e.style.display ? '' : e.style.display);
        r && i
          ? ((n.data.show = !0),
            Ri(n, function () {
              e.style.display = o;
            }))
          : (e.style.display = r ? o : 'none');
      },
      update: function (e, t, n) {
        var r = t.value;
        !r != !t.oldValue &&
          ((n = Qi(n)).data && n.data.transition
            ? ((n.data.show = !0),
              r
                ? Ri(n, function () {
                  e.style.display = e.__vOriginalDisplay;
                })
                : Hi(n, function () {
                  e.style.display = 'none';
                }))
            : (e.style.display = r ? e.__vOriginalDisplay : 'none'));
      },
      unbind: function (e, t, n, r, i) {
        i || (e.style.display = e.__vOriginalDisplay);
      }
    }
  },
    to = {
      name: String,
      appear: Boolean,
      css: Boolean,
      mode: String,
      type: String,
      enterClass: String,
      leaveClass: String,
      enterToClass: String,
      leaveToClass: String,
      enterActiveClass: String,
      leaveActiveClass: String,
      appearClass: String,
      appearActiveClass: String,
      appearToClass: String,
      duration: [Number, String, Object]
    };
  function no(e) {
    var t = e && e.componentOptions;
    return t && t.Ctor.options.abstract ? no(zt(t.children)) : e;
  }
  function ro(e) {
    var t = {},
      n = e.$options;
    for (var r in n.propsData) t[r] = e[r];
    var i = n._parentListeners;
    for (var o in i) t[b(o)] = i[o];
    return t;
  }
  function io(e, t) {
    if (/\d-keep-alive$/.test(t.tag))
      return e('keep-alive', { props: t.componentOptions.propsData });
  }
  var oo = function (e) {
    return e.tag || pt(e);
  },
    ao = function (e) {
      return 'show' === e.name;
    },
    so = {
      name: 'transition',
      props: to,
      abstract: !0,
      render: function (e) {
        var t = this,
          n = this.$slots.default;
        if (n && (n = n.filter(oo)).length) {
          var r = this.mode,
            o = n[0];
          if (
            (function (e) {
              for (; (e = e.parent);) if (e.data.transition) return !0;
            })(this.$vnode)
          )
            return o;
          var a = no(o);
          if (!a) return o;
          if (this._leaving) return io(e, o);
          var s = '__transition-' + this._uid + '-';
          a.key =
            null == a.key
              ? a.isComment
                ? s + 'comment'
                : s + a.tag
              : i(a.key)
                ? 0 === String(a.key).indexOf(s)
                  ? a.key
                  : s + a.key
                : a.key;
          var c = ((a.data || (a.data = {})).transition = ro(this)),
            u = this._vnode,
            l = no(u);
          if (
            (a.data.directives &&
              a.data.directives.some(ao) &&
              (a.data.show = !0),
              l &&
              l.data &&
              !(function (e, t) {
                return t.key === e.key && t.tag === e.tag;
              })(a, l) &&
              !pt(l) &&
              (!l.componentInstance || !l.componentInstance._vnode.isComment))
          ) {
            var f = (l.data.transition = A({}, c));
            if ('out-in' === r)
              return (
                (this._leaving = !0),
                ot(f, 'afterLeave', function () {
                  ; (t._leaving = !1), t.$forceUpdate();
                }),
                io(e, o)
              );
            if ('in-out' === r) {
              if (pt(a)) return u;
              var p,
                d = function () {
                  p();
                };
              ot(c, 'afterEnter', d),
                ot(c, 'enterCancelled', d),
                ot(f, 'delayLeave', function (e) {
                  p = e;
                });
            }
          }
          return o;
        }
      }
    },
    co = A({ tag: String, moveClass: String }, to);
  function uo(e) {
    e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
  }
  function lo(e) {
    e.data.newPos = e.elm.getBoundingClientRect();
  }
  function fo(e) {
    var t = e.data.pos,
      n = e.data.newPos,
      r = t.left - n.left,
      i = t.top - n.top;
    if (r || i) {
      e.data.moved = !0;
      var o = e.elm.style
        ; (o.transform = o.WebkitTransform = 'translate(' + r + 'px,' + i + 'px)'),
          (o.transitionDuration = '0s');
    }
  }
  delete co.mode;
  var po = {
    Transition: so,
    TransitionGroup: {
      props: co,
      beforeMount: function () {
        var e = this,
          t = this._update;
        this._update = function (n, r) {
          var i = Gt(e);
          e.__patch__(e._vnode, e.kept, !1, !0),
            (e._vnode = e.kept),
            i(),
            t.call(e, n, r);
        };
      },
      render: function (e) {
        for (
          var t = this.tag || this.$vnode.data.tag || 'span',
          n = Object.create(null),
          r = (this.prevChildren = this.children),
          i = this.$slots.default || [],
          o = (this.children = []),
          a = ro(this),
          s = 0;
          s < i.length;
          s++
        ) {
          var c = i[s];
          c.tag &&
            null != c.key &&
            0 !== String(c.key).indexOf('__vlist') &&
            (o.push(c),
              (n[c.key] = c),
              ((c.data || (c.data = {})).transition = a));
        }
        if (r) {
          for (var u = [], l = [], f = 0; f < r.length; f++) {
            var p = r[f]
              ; (p.data.transition = a),
                (p.data.pos = p.elm.getBoundingClientRect()),
                n[p.key] ? u.push(p) : l.push(p);
          }
          ; (this.kept = e(t, null, u)), (this.removed = l);
        }
        return e(t, null, o);
      },
      updated: function () {
        var e = this.prevChildren,
          t = this.moveClass || (this.name || 'v') + '-move';
        e.length &&
          this.hasMove(e[0].elm, t) &&
          (e.forEach(uo),
            e.forEach(lo),
            e.forEach(fo),
            (this._reflow = document.body.offsetHeight),
            e.forEach(function (e) {
              if (e.data.moved) {
                var n = e.elm,
                  r = n.style;
                ji(n, t),
                  (r.transform = r.WebkitTransform = r.transitionDuration = ''),
                  n.addEventListener(
                    Oi,
                    (n._moveCb = function e(r) {
                      ; (r && r.target !== n) ||
                        (r && !/transform$/.test(r.propertyName)) ||
                        (n.removeEventListener(Oi, e),
                          (n._moveCb = null),
                          Di(n, t));
                    })
                  );
              }
            }));
      },
      methods: {
        hasMove: function (e, t) {
          if (!Ci) return !1;
          if (this._hasMove) return this._hasMove;
          var n = e.cloneNode();
          e._transitionClasses &&
            e._transitionClasses.forEach(function (e) {
              bi(n, e);
            }),
            _i(n, t),
            (n.style.display = 'none'),
            this.$el.appendChild(n);
          var r = Mi(n);
          return this.$el.removeChild(n), (this._hasMove = r.hasTransform);
        }
      }
    }
  }
    ; (Cn.config.mustUseProp = Dn),
      (Cn.config.isReservedTag = Zn),
      (Cn.config.isReservedAttr = En),
      (Cn.config.getTagNamespace = Gn),
      (Cn.config.isUnknownElement = function (e) {
        if (!V) return !0;
        if (Zn(e)) return !1;
        if (((e = e.toLowerCase()), null != Xn[e])) return Xn[e];
        var t = document.createElement(e);
        return e.indexOf('-') > -1
          ? (Xn[e] =
            t.constructor === window.HTMLUnknownElement ||
            t.constructor === window.HTMLElement)
          : (Xn[e] = /HTMLUnknownElement/.test(t.toString()));
      }),
      A(Cn.options.directives, eo),
      A(Cn.options.components, po),
      (Cn.prototype.__patch__ = V ? zi : S),
      (Cn.prototype.$mount = function (e, t) {
        return (function (e, t, n) {
          var r;
          return (
            (e.$el = t),
            e.$options.render || (e.$options.render = ve),
            Qt(e, 'beforeMount'),
            (r = function () {
              e._update(e._render(), n);
            }),
            new pn(
              e,
              r,
              S,
              {
                before: function () {
                  e._isMounted && !e._isDestroyed && Qt(e, 'beforeUpdate');
                }
              },
              !0
            ),
            (n = !1),
            null == e.$vnode && ((e._isMounted = !0), Qt(e, 'mounted')),
            e
          );
        })(this, (e = e && V ? Qn(e) : void 0), t);
      }),
      V &&
      setTimeout(function () {
        F.devtools && ne && ne.emit('init', Cn);
      }, 0);
  var vo = /\{\{((?:.|\r?\n)+?)\}\}/g,
    ho = /[-.*+?^${}()|[\]\/\\]/g,
    mo = g(function (e) {
      var t = e[0].replace(ho, '\\$&'),
        n = e[1].replace(ho, '\\$&');
      return new RegExp(t + '((?:.|\\n)+?)' + n, 'g');
    });
  var yo = {
    staticKeys: ['staticClass'],
    transformNode: function (e, t) {
      t.warn;
      var n = Pr(e, 'class');
      n && (e.staticClass = JSON.stringify(n));
      var r = Fr(e, 'class', !1);
      r && (e.classBinding = r);
    },
    genData: function (e) {
      var t = '';
      return (
        e.staticClass && (t += 'staticClass:' + e.staticClass + ','),
        e.classBinding && (t += 'class:' + e.classBinding + ','),
        t
      );
    }
  };
  var go,
    _o = {
      staticKeys: ['staticStyle'],
      transformNode: function (e, t) {
        t.warn;
        var n = Pr(e, 'style');
        n && (e.staticStyle = JSON.stringify(si(n)));
        var r = Fr(e, 'style', !1);
        r && (e.styleBinding = r);
      },
      genData: function (e) {
        var t = '';
        return (
          e.staticStyle && (t += 'staticStyle:' + e.staticStyle + ','),
          e.styleBinding && (t += 'style:(' + e.styleBinding + '),'),
          t
        );
      }
    },
    bo = function (e) {
      return (
        ((go = go || document.createElement('div')).innerHTML = e),
        go.textContent
      );
    },
    $o = p(
      'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr'
    ),
    wo = p('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'),
    Co = p(
      'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track'
    ),
    xo = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
    ko = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
    Ao = '[a-zA-Z_][\\-\\.0-9_a-zA-Z' + P.source + ']*',
    Oo = '((?:' + Ao + '\\:)?' + Ao + ')',
    So = new RegExp('^<' + Oo),
    To = /^\s*(\/?)>/,
    No = new RegExp('^<\\/' + Oo + '[^>]*>'),
    Eo = /^<!DOCTYPE [^>]+>/i,
    jo = /^<!\--/,
    Do = /^<!\[/,
    Lo = p('script,style,textarea', !0),
    Io = {},
    Mo = {
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&amp;': '&',
      '&#10;': '\n',
      '&#9;': '\t',
      '&#39;': "'"
    },
    Fo = /&(?:lt|gt|quot|amp|#39);/g,
    Po = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
    Ro = p('pre,textarea', !0),
    Ho = function (e, t) {
      return e && Ro(e) && '\n' === t[0];
    };
  function Bo(e, t) {
    var n = t ? Po : Fo;
    return e.replace(n, function (e) {
      return Mo[e];
    });
  }
  var Uo,
    Vo,
    zo,
    Ko,
    Jo,
    qo,
    Wo,
    Zo,
    Go = /^@|^v-on:/,
    Xo = /^v-|^@|^:|^#/,
    Yo = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
    Qo = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
    ea = /^\(|\)$/g,
    ta = /^\[.*\]$/,
    na = /:(.*)$/,
    ra = /^:|^\.|^v-bind:/,
    ia = /\.[^.\]]+(?=[^\]]*$)/g,
    oa = /^v-slot(:|$)|^#/,
    aa = /[\r\n]/,
    sa = /[ \f\t\r\n]+/g,
    ca = g(bo),
    ua = '_empty_';
  function la(e, t, n) {
    return {
      type: 1,
      tag: e,
      attrsList: t,
      attrsMap: ya(t),
      rawAttrsMap: {},
      parent: n,
      children: []
    };
  }
  function fa(e, t) {
    ; (Uo = t.warn || Tr),
      (qo = t.isPreTag || T),
      (Wo = t.mustUseProp || T),
      (Zo = t.getTagNamespace || T);
    t.isReservedTag
      ; (zo = Nr(t.modules, 'transformNode')),
        (Ko = Nr(t.modules, 'preTransformNode')),
        (Jo = Nr(t.modules, 'postTransformNode')),
        (Vo = t.delimiters);
    var n,
      r,
      i = [],
      o = !1 !== t.preserveWhitespace,
      a = t.whitespace,
      s = !1,
      c = !1;
    function u(e) {
      if (
        (l(e),
          s || e.processed || (e = pa(e, t)),
          i.length ||
          e === n ||
          (n.if && (e.elseif || e.else) && va(n, { exp: e.elseif, block: e })),
          r && !e.forbidden)
      )
        if (e.elseif || e.else)
          (a = e),
            (u = (function (e) {
              var t = e.length;
              for (; t--;) {
                if (1 === e[t].type) return e[t];
                e.pop();
              }
            })(r.children)) &&
            u.if &&
            va(u, { exp: a.elseif, block: a });
        else {
          if (e.slotScope) {
            var o = e.slotTarget || '"default"'
              ; (r.scopedSlots || (r.scopedSlots = {}))[o] = e;
          }
          r.children.push(e), (e.parent = r);
        }
      var a, u
        ; (e.children = e.children.filter(function (e) {
          return !e.slotScope;
        })),
          l(e),
          e.pre && (s = !1),
          qo(e.tag) && (c = !1);
      for (var f = 0; f < Jo.length; f++) Jo[f](e, t);
    }
    function l(e) {
      if (!c)
        for (
          var t;
          (t = e.children[e.children.length - 1]) &&
          3 === t.type &&
          ' ' === t.text;

        )
          e.children.pop();
    }
    return (
      (function (e, t) {
        for (
          var n,
          r,
          i = [],
          o = t.expectHTML,
          a = t.isUnaryTag || T,
          s = t.canBeLeftOpenTag || T,
          c = 0;
          e;

        ) {
          if (((n = e), r && Lo(r))) {
            var u = 0,
              l = r.toLowerCase(),
              f =
                Io[l] ||
                (Io[l] = new RegExp('([\\s\\S]*?)(</' + l + '[^>]*>)', 'i')),
              p = e.replace(f, function (e, n, r) {
                return (
                  (u = r.length),
                  Lo(l) ||
                  'noscript' === l ||
                  (n = n
                    .replace(/<!\--([\s\S]*?)-->/g, '$1')
                    .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1')),
                  Ho(l, n) && (n = n.slice(1)),
                  t.chars && t.chars(n),
                  ''
                );
              })
              ; (c += e.length - p.length), (e = p), A(l, c - u, c);
          } else {
            var d = e.indexOf('<');
            if (0 === d) {
              if (jo.test(e)) {
                var v = e.indexOf('--\x3e');
                if (v >= 0) {
                  t.shouldKeepComment &&
                    t.comment(e.substring(4, v), c, c + v + 3),
                    C(v + 3);
                  continue;
                }
              }
              if (Do.test(e)) {
                var h = e.indexOf(']>');
                if (h >= 0) {
                  C(h + 2);
                  continue;
                }
              }
              var m = e.match(Eo);
              if (m) {
                C(m[0].length);
                continue;
              }
              var y = e.match(No);
              if (y) {
                var g = c;
                C(y[0].length), A(y[1], g, c);
                continue;
              }
              var _ = x();
              if (_) {
                k(_), Ho(_.tagName, e) && C(1);
                continue;
              }
            }
            var b = void 0,
              $ = void 0,
              w = void 0;
            if (d >= 0) {
              for (
                $ = e.slice(d);
                !(
                  No.test($) ||
                  So.test($) ||
                  jo.test($) ||
                  Do.test($) ||
                  (w = $.indexOf('<', 1)) < 0
                );

              )
                (d += w), ($ = e.slice(d));
              b = e.substring(0, d);
            }
            d < 0 && (b = e),
              b && C(b.length),
              t.chars && b && t.chars(b, c - b.length, c);
          }
          if (e === n) {
            t.chars && t.chars(e);
            break;
          }
        }
        function C(t) {
          ; (c += t), (e = e.substring(t));
        }
        function x() {
          var t = e.match(So);
          if (t) {
            var n,
              r,
              i = { tagName: t[1], attrs: [], start: c };
            for (
              C(t[0].length);
              !(n = e.match(To)) && (r = e.match(ko) || e.match(xo));

            )
              (r.start = c), C(r[0].length), (r.end = c), i.attrs.push(r);
            if (n) return (i.unarySlash = n[1]), C(n[0].length), (i.end = c), i;
          }
        }
        function k(e) {
          var n = e.tagName,
            c = e.unarySlash;
          o && ('p' === r && Co(n) && A(r), s(n) && r === n && A(n));
          for (
            var u = a(n) || !!c, l = e.attrs.length, f = new Array(l), p = 0;
            p < l;
            p++
          ) {
            var d = e.attrs[p],
              v = d[3] || d[4] || d[5] || '',
              h =
                'a' === n && 'href' === d[1]
                  ? t.shouldDecodeNewlinesForHref
                  : t.shouldDecodeNewlines;
            f[p] = { name: d[1], value: Bo(v, h) };
          }
          u ||
            (i.push({
              tag: n,
              lowerCasedTag: n.toLowerCase(),
              attrs: f,
              start: e.start,
              end: e.end
            }),
              (r = n)),
            t.start && t.start(n, f, u, e.start, e.end);
        }
        function A(e, n, o) {
          var a, s;
          if ((null == n && (n = c), null == o && (o = c), e))
            for (
              s = e.toLowerCase(), a = i.length - 1;
              a >= 0 && i[a].lowerCasedTag !== s;
              a--
            );
          else a = 0;
          if (a >= 0) {
            for (var u = i.length - 1; u >= a; u--)
              t.end && t.end(i[u].tag, n, o)
                ; (i.length = a), (r = a && i[a - 1].tag);
          } else
            'br' === s
              ? t.start && t.start(e, [], !0, n, o)
              : 'p' === s &&
              (t.start && t.start(e, [], !1, n, o), t.end && t.end(e, n, o));
        }
        A();
      })(e, {
        warn: Uo,
        expectHTML: t.expectHTML,
        isUnaryTag: t.isUnaryTag,
        canBeLeftOpenTag: t.canBeLeftOpenTag,
        shouldDecodeNewlines: t.shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
        shouldKeepComment: t.comments,
        outputSourceRange: t.outputSourceRange,
        start: function (e, o, a, l, f) {
          var p = (r && r.ns) || Zo(e);
          q &&
            'svg' === p &&
            (o = (function (e) {
              for (var t = [], n = 0; n < e.length; n++) {
                var r = e[n];
                ga.test(r.name) ||
                  ((r.name = r.name.replace(_a, '')), t.push(r));
              }
              return t;
            })(o));
          var d,
            v = la(e, o, r);
          p && (v.ns = p),
            ('style' !== (d = v).tag &&
              ('script' !== d.tag ||
                (d.attrsMap.type && 'text/javascript' !== d.attrsMap.type))) ||
            te() ||
            (v.forbidden = !0);
          for (var h = 0; h < Ko.length; h++) v = Ko[h](v, t) || v;
          s ||
            (!(function (e) {
              null != Pr(e, 'v-pre') && (e.pre = !0);
            })(v),
              v.pre && (s = !0)),
            qo(v.tag) && (c = !0),
            s
              ? (function (e) {
                var t = e.attrsList,
                  n = t.length;
                if (n)
                  for (var r = (e.attrs = new Array(n)), i = 0; i < n; i++)
                    (r[i] = {
                      name: t[i].name,
                      value: JSON.stringify(t[i].value)
                    }),
                      null != t[i].start &&
                      ((r[i].start = t[i].start), (r[i].end = t[i].end));
                else e.pre || (e.plain = !0);
              })(v)
              : v.processed ||
              (da(v),
                (function (e) {
                  var t = Pr(e, 'v-if');
                  if (t) (e.if = t), va(e, { exp: t, block: e });
                  else {
                    null != Pr(e, 'v-else') && (e.else = !0);
                    var n = Pr(e, 'v-else-if');
                    n && (e.elseif = n);
                  }
                })(v),
                (function (e) {
                  null != Pr(e, 'v-once') && (e.once = !0);
                })(v)),
            n || (n = v),
            a ? u(v) : ((r = v), i.push(v));
        },
        end: function (e, t, n) {
          var o = i[i.length - 1]
            ; (i.length -= 1), (r = i[i.length - 1]), u(o);
        },
        chars: function (e, t, n) {
          if (
            r &&
            (!q || 'textarea' !== r.tag || r.attrsMap.placeholder !== e)
          ) {
            var i,
              u,
              l,
              f = r.children;
            if (
              (e =
                c || e.trim()
                  ? 'script' === (i = r).tag || 'style' === i.tag
                    ? e
                    : ca(e)
                  : f.length
                    ? a
                      ? 'condense' === a && aa.test(e)
                        ? ''
                        : ' '
                      : o
                        ? ' '
                        : ''
                    : '')
            )
              c || 'condense' !== a || (e = e.replace(sa, ' ')),
                !s &&
                  ' ' !== e &&
                  (u = (function (e, t) {
                    var n = t ? mo(t) : vo;
                    if (n.test(e)) {
                      for (
                        var r, i, o, a = [], s = [], c = (n.lastIndex = 0);
                        (r = n.exec(e));

                      ) {
                        ; (i = r.index) > c &&
                          (s.push((o = e.slice(c, i))), a.push(JSON.stringify(o)));
                        var u = Or(r[1].trim());
                        a.push('_s(' + u + ')'),
                          s.push({ '@binding': u }),
                          (c = i + r[0].length);
                      }
                      return (
                        c < e.length &&
                        (s.push((o = e.slice(c))), a.push(JSON.stringify(o))),
                        { expression: a.join('+'), tokens: s }
                      );
                    }
                  })(e, Vo))
                  ? (l = {
                    type: 2,
                    expression: u.expression,
                    tokens: u.tokens,
                    text: e
                  })
                  : (' ' === e && f.length && ' ' === f[f.length - 1].text) ||
                  (l = { type: 3, text: e }),
                l && f.push(l);
          }
        },
        comment: function (e, t, n) {
          if (r) {
            var i = { type: 3, text: e, isComment: !0 };
            r.children.push(i);
          }
        }
      }),
      n
    );
  }
  function pa(e, t) {
    var n, r
      ; (r = Fr((n = e), 'key')) && (n.key = r),
        (e.plain = !e.key && !e.scopedSlots && !e.attrsList.length),
        (function (e) {
          var t = Fr(e, 'ref');
          t &&
            ((e.ref = t),
              (e.refInFor = (function (e) {
                var t = e;
                for (; t;) {
                  if (void 0 !== t.for) return !0;
                  t = t.parent;
                }
                return !1;
              })(e)));
        })(e),
        (function (e) {
          var t;
          'template' === e.tag
            ? ((t = Pr(e, 'scope')), (e.slotScope = t || Pr(e, 'slot-scope')))
            : (t = Pr(e, 'slot-scope')) && (e.slotScope = t);
          var n = Fr(e, 'slot');
          n &&
            ((e.slotTarget = '""' === n ? '"default"' : n),
              (e.slotTargetDynamic = !(
                !e.attrsMap[':slot'] && !e.attrsMap['v-bind:slot']
              )),
              'template' === e.tag ||
              e.slotScope ||
              jr(
                e,
                'slot',
                n,
                (function (e, t) {
                  return (
                    e.rawAttrsMap[':' + t] ||
                    e.rawAttrsMap['v-bind:' + t] ||
                    e.rawAttrsMap[t]
                  );
                })(e, 'slot')
              ));
          if ('template' === e.tag) {
            var r = Rr(e, oa);
            if (r) {
              var i = ha(r),
                o = i.name,
                a = i.dynamic
                ; (e.slotTarget = o),
                  (e.slotTargetDynamic = a),
                  (e.slotScope = r.value || ua);
            }
          } else {
            var s = Rr(e, oa);
            if (s) {
              var c = e.scopedSlots || (e.scopedSlots = {}),
                u = ha(s),
                l = u.name,
                f = u.dynamic,
                p = (c[l] = la('template', [], e))
                ; (p.slotTarget = l),
                  (p.slotTargetDynamic = f),
                  (p.children = e.children.filter(function (e) {
                    if (!e.slotScope) return (e.parent = p), !0;
                  })),
                  (p.slotScope = s.value || ua),
                  (e.children = []),
                  (e.plain = !1);
            }
          }
        })(e),
        (function (e) {
          'slot' === e.tag && (e.slotName = Fr(e, 'name'));
        })(e),
        (function (e) {
          var t
            ; (t = Fr(e, 'is')) && (e.component = t);
          null != Pr(e, 'inline-template') && (e.inlineTemplate = !0);
        })(e);
    for (var i = 0; i < zo.length; i++) e = zo[i](e, t) || e;
    return (
      (function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          c,
          u = e.attrsList;
        for (t = 0, n = u.length; t < n; t++)
          if (((r = i = u[t].name), (o = u[t].value), Xo.test(r)))
            if (
              ((e.hasBindings = !0),
                (a = ma(r.replace(Xo, ''))) && (r = r.replace(ia, '')),
                ra.test(r))
            )
              (r = r.replace(ra, '')),
                (o = Or(o)),
                (c = ta.test(r)) && (r = r.slice(1, -1)),
                a &&
                (a.prop &&
                  !c &&
                  'innerHtml' === (r = b(r)) &&
                  (r = 'innerHTML'),
                  a.camel && !c && (r = b(r)),
                  a.sync &&
                  ((s = Ur(o, '$event')),
                    c
                      ? Mr(e, '"update:"+(' + r + ')', s, null, !1, 0, u[t], !0)
                      : (Mr(e, 'update:' + b(r), s, null, !1, 0, u[t]),
                        C(r) !== b(r) &&
                        Mr(e, 'update:' + C(r), s, null, !1, 0, u[t])))),
                (a && a.prop) || (!e.component && Wo(e.tag, e.attrsMap.type, r))
                  ? Er(e, r, o, u[t], c)
                  : jr(e, r, o, u[t], c);
            else if (Go.test(r))
              (r = r.replace(Go, '')),
                (c = ta.test(r)) && (r = r.slice(1, -1)),
                Mr(e, r, o, a, !1, 0, u[t], c);
            else {
              var l = (r = r.replace(Xo, '')).match(na),
                f = l && l[1]
                ; (c = !1),
                  f &&
                  ((r = r.slice(0, -(f.length + 1))),
                    ta.test(f) && ((f = f.slice(1, -1)), (c = !0))),
                  Lr(e, r, i, o, f, c, a, u[t]);
            }
          else
            jr(e, r, JSON.stringify(o), u[t]),
              !e.component &&
              'muted' === r &&
              Wo(e.tag, e.attrsMap.type, r) &&
              Er(e, r, 'true', u[t]);
      })(e),
      e
    );
  }
  function da(e) {
    var t;
    if ((t = Pr(e, 'v-for'))) {
      var n = (function (e) {
        var t = e.match(Yo);
        if (!t) return;
        var n = {};
        n.for = t[2].trim();
        var r = t[1].trim().replace(ea, ''),
          i = r.match(Qo);
        i
          ? ((n.alias = r.replace(Qo, '').trim()),
            (n.iterator1 = i[1].trim()),
            i[2] && (n.iterator2 = i[2].trim()))
          : (n.alias = r);
        return n;
      })(t);
      n && A(e, n);
    }
  }
  function va(e, t) {
    e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
  }
  function ha(e) {
    var t = e.name.replace(oa, '');
    return (
      t || ('#' !== e.name[0] && (t = 'default')),
      ta.test(t)
        ? { name: t.slice(1, -1), dynamic: !0 }
        : { name: '"' + t + '"', dynamic: !1 }
    );
  }
  function ma(e) {
    var t = e.match(ia);
    if (t) {
      var n = {};
      return (
        t.forEach(function (e) {
          n[e.slice(1)] = !0;
        }),
        n
      );
    }
  }
  function ya(e) {
    for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value;
    return t;
  }
  var ga = /^xmlns:NS\d+/,
    _a = /^NS\d+:/;
  function ba(e) {
    return la(e.tag, e.attrsList.slice(), e.parent);
  }
  var $a = [
    yo,
    _o,
    {
      preTransformNode: function (e, t) {
        if ('input' === e.tag) {
          var n,
            r = e.attrsMap;
          if (!r['v-model']) return;
          if (
            ((r[':type'] || r['v-bind:type']) && (n = Fr(e, 'type')),
              r.type || n || !r['v-bind'] || (n = '(' + r['v-bind'] + ').type'),
              n)
          ) {
            var i = Pr(e, 'v-if', !0),
              o = i ? '&&(' + i + ')' : '',
              a = null != Pr(e, 'v-else', !0),
              s = Pr(e, 'v-else-if', !0),
              c = ba(e);
            da(c),
              Dr(c, 'type', 'checkbox'),
              pa(c, t),
              (c.processed = !0),
              (c.if = '(' + n + ")==='checkbox'" + o),
              va(c, { exp: c.if, block: c });
            var u = ba(e);
            Pr(u, 'v-for', !0),
              Dr(u, 'type', 'radio'),
              pa(u, t),
              va(c, { exp: '(' + n + ")==='radio'" + o, block: u });
            var l = ba(e);
            return (
              Pr(l, 'v-for', !0),
              Dr(l, ':type', n),
              pa(l, t),
              va(c, { exp: i, block: l }),
              a ? (c.else = !0) : s && (c.elseif = s),
              c
            );
          }
        }
      }
    }
  ];
  var wa,
    Ca,
    xa = {
      expectHTML: !0,
      modules: $a,
      directives: {
        model: function (e, t, n) {
          var r = t.value,
            i = t.modifiers,
            o = e.tag,
            a = e.attrsMap.type;
          if (e.component) return Br(e, r, i), !1;
          if ('select' === o)
            !(function (e, t, n) {
              var r =
                'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' +
                (n && n.number ? '_n(val)' : 'val') +
                '});'
                ; (r =
                  r +
                  ' ' +
                  Ur(
                    t,
                    '$event.target.multiple ? $$selectedVal : $$selectedVal[0]'
                  )),
                  Mr(e, 'change', r, null, !0);
            })(e, r, i);
          else if ('input' === o && 'checkbox' === a)
            !(function (e, t, n) {
              var r = n && n.number,
                i = Fr(e, 'value') || 'null',
                o = Fr(e, 'true-value') || 'true',
                a = Fr(e, 'false-value') || 'false';
              Er(
                e,
                'checked',
                'Array.isArray(' +
                t +
                ')?_i(' +
                t +
                ',' +
                i +
                ')>-1' +
                ('true' === o ? ':(' + t + ')' : ':_q(' + t + ',' + o + ')')
              ),
                Mr(
                  e,
                  'change',
                  'var $$a=' +
                  t +
                  ',$$el=$event.target,$$c=$$el.checked?(' +
                  o +
                  '):(' +
                  a +
                  ');if(Array.isArray($$a)){var $$v=' +
                  (r ? '_n(' + i + ')' : i) +
                  ',$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(' +
                  Ur(t, '$$a.concat([$$v])') +
                  ')}else{$$i>-1&&(' +
                  Ur(t, '$$a.slice(0,$$i).concat($$a.slice($$i+1))') +
                  ')}}else{' +
                  Ur(t, '$$c') +
                  '}',
                  null,
                  !0
                );
            })(e, r, i);
          else if ('input' === o && 'radio' === a)
            !(function (e, t, n) {
              var r = n && n.number,
                i = Fr(e, 'value') || 'null';
              Er(
                e,
                'checked',
                '_q(' + t + ',' + (i = r ? '_n(' + i + ')' : i) + ')'
              ),
                Mr(e, 'change', Ur(t, i), null, !0);
            })(e, r, i);
          else if ('input' === o || 'textarea' === o)
            !(function (e, t, n) {
              var r = e.attrsMap.type,
                i = n || {},
                o = i.lazy,
                a = i.number,
                s = i.trim,
                c = !o && 'range' !== r,
                u = o ? 'change' : 'range' === r ? Zr : 'input',
                l = '$event.target.value';
              s && (l = '$event.target.value.trim()'),
                a && (l = '_n(' + l + ')');
              var f = Ur(t, l);
              c && (f = 'if($event.target.composing)return;' + f),
                Er(e, 'value', '(' + t + ')'),
                Mr(e, u, f, null, !0),
                (s || a) && Mr(e, 'blur', '$forceUpdate()');
            })(e, r, i);
          else if (!F.isReservedTag(o)) return Br(e, r, i), !1;
          return !0;
        },
        text: function (e, t) {
          t.value && Er(e, 'textContent', '_s(' + t.value + ')', t);
        },
        html: function (e, t) {
          t.value && Er(e, 'innerHTML', '_s(' + t.value + ')', t);
        }
      },
      isPreTag: function (e) {
        return 'pre' === e;
      },
      isUnaryTag: $o,
      mustUseProp: Dn,
      canBeLeftOpenTag: wo,
      isReservedTag: Zn,
      getTagNamespace: Gn,
      staticKeys: (function (e) {
        return e
          .reduce(function (e, t) {
            return e.concat(t.staticKeys || []);
          }, [])
          .join(',');
      })($a)
    },
    ka = g(function (e) {
      return p(
        'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
        (e ? ',' + e : '')
      );
    });
  function Aa(e, t) {
    e &&
      ((wa = ka(t.staticKeys || '')),
        (Ca = t.isReservedTag || T),
        (function e(t) {
          t.static = (function (e) {
            if (2 === e.type) return !1;
            if (3 === e.type) return !0;
            return !(
              !e.pre &&
              (e.hasBindings ||
                e.if ||
                e.for ||
                d(e.tag) ||
                !Ca(e.tag) ||
                (function (e) {
                  for (; e.parent;) {
                    if ('template' !== (e = e.parent).tag) return !1;
                    if (e.for) return !0;
                  }
                  return !1;
                })(e) ||
                !Object.keys(e).every(wa))
            );
          })(t);
          if (1 === t.type) {
            if (
              !Ca(t.tag) &&
              'slot' !== t.tag &&
              null == t.attrsMap['inline-template']
            )
              return;
            for (var n = 0, r = t.children.length; n < r; n++) {
              var i = t.children[n];
              e(i), i.static || (t.static = !1);
            }
            if (t.ifConditions)
              for (var o = 1, a = t.ifConditions.length; o < a; o++) {
                var s = t.ifConditions[o].block;
                e(s), s.static || (t.static = !1);
              }
          }
        })(e),
        (function e(t, n) {
          if (1 === t.type) {
            if (
              ((t.static || t.once) && (t.staticInFor = n),
                t.static &&
                t.children.length &&
                (1 !== t.children.length || 3 !== t.children[0].type))
            )
              return void (t.staticRoot = !0);
            if (((t.staticRoot = !1), t.children))
              for (var r = 0, i = t.children.length; r < i; r++)
                e(t.children[r], n || !!t.for);
            if (t.ifConditions)
              for (var o = 1, a = t.ifConditions.length; o < a; o++)
                e(t.ifConditions[o].block, n);
          }
        })(e, !1));
  }
  var Oa = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
    Sa = /\([^)]*?\);*$/,
    Ta = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
    Na = {
      esc: 27,
      tab: 9,
      enter: 13,
      space: 32,
      up: 38,
      left: 37,
      right: 39,
      down: 40,
      delete: [8, 46]
    },
    Ea = {
      esc: ['Esc', 'Escape'],
      tab: 'Tab',
      enter: 'Enter',
      space: [' ', 'Spacebar'],
      up: ['Up', 'ArrowUp'],
      left: ['Left', 'ArrowLeft'],
      right: ['Right', 'ArrowRight'],
      down: ['Down', 'ArrowDown'],
      delete: ['Backspace', 'Delete', 'Del']
    },
    ja = function (e) {
      return 'if(' + e + ')return null;';
    },
    Da = {
      stop: '$event.stopPropagation();',
      prevent: '$event.preventDefault();',
      self: ja('$event.target !== $event.currentTarget'),
      ctrl: ja('!$event.ctrlKey'),
      shift: ja('!$event.shiftKey'),
      alt: ja('!$event.altKey'),
      meta: ja('!$event.metaKey'),
      left: ja("'button' in $event && $event.button !== 0"),
      middle: ja("'button' in $event && $event.button !== 1"),
      right: ja("'button' in $event && $event.button !== 2")
    };
  function La(e, t) {
    var n = t ? 'nativeOn:' : 'on:',
      r = '',
      i = '';
    for (var o in e) {
      var a = Ia(e[o]);
      e[o] && e[o].dynamic
        ? (i += o + ',' + a + ',')
        : (r += '"' + o + '":' + a + ',');
    }
    return (
      (r = '{' + r.slice(0, -1) + '}'),
      i ? n + '_d(' + r + ',[' + i.slice(0, -1) + '])' : n + r
    );
  }
  function Ia(e) {
    if (!e) return 'function(){}';
    if (Array.isArray(e))
      return (
        '[' +
        e
          .map(function (e) {
            return Ia(e);
          })
          .join(',') +
        ']'
      );
    var t = Ta.test(e.value),
      n = Oa.test(e.value),
      r = Ta.test(e.value.replace(Sa, ''));
    if (e.modifiers) {
      var i = '',
        o = '',
        a = [];
      for (var s in e.modifiers)
        if (Da[s]) (o += Da[s]), Na[s] && a.push(s);
        else if ('exact' === s) {
          var c = e.modifiers;
          o += ja(
            ['ctrl', 'shift', 'alt', 'meta']
              .filter(function (e) {
                return !c[e];
              })
              .map(function (e) {
                return '$event.' + e + 'Key';
              })
              .join('||')
          );
        } else a.push(s);
      return (
        a.length &&
        (i += (function (e) {
          return (
            "if(!$event.type.indexOf('key')&&" +
            e.map(Ma).join('&&') +
            ')return null;'
          );
        })(a)),
        o && (i += o),
        'function($event){' +
        i +
        (t
          ? 'return ' + e.value + '.apply(null, arguments)'
          : n
            ? 'return (' + e.value + ').apply(null, arguments)'
            : r
              ? 'return ' + e.value
              : e.value) +
        '}'
      );
    }
    return t || n
      ? e.value
      : 'function($event){' + (r ? 'return ' + e.value : e.value) + '}';
  }
  function Ma(e) {
    var t = parseInt(e, 10);
    if (t) return '$event.keyCode!==' + t;
    var n = Na[e],
      r = Ea[e];
    return (
      '_k($event.keyCode,' +
      JSON.stringify(e) +
      ',' +
      JSON.stringify(n) +
      ',$event.key,' +
      JSON.stringify(r) +
      ')'
    );
  }
  var Fa = {
    on: function (e, t) {
      e.wrapListeners = function (e) {
        return '_g(' + e + ',' + t.value + ')';
      };
    },
    bind: function (e, t) {
      e.wrapData = function (n) {
        return (
          '_b(' +
          n +
          ",'" +
          e.tag +
          "'," +
          t.value +
          ',' +
          (t.modifiers && t.modifiers.prop ? 'true' : 'false') +
          (t.modifiers && t.modifiers.sync ? ',true' : '') +
          ')'
        );
      };
    },
    cloak: S
  },
    Pa = function (e) {
      ; (this.options = e),
        (this.warn = e.warn || Tr),
        (this.transforms = Nr(e.modules, 'transformCode')),
        (this.dataGenFns = Nr(e.modules, 'genData')),
        (this.directives = A(A({}, Fa), e.directives));
      var t = e.isReservedTag || T
        ; (this.maybeComponent = function (e) {
          return !!e.component || !t(e.tag);
        }),
          (this.onceId = 0),
          (this.staticRenderFns = []),
          (this.pre = !1);
    };
  function Ra(e, t) {
    var n = new Pa(t);
    return {
      render:
        'with(this){return ' +
        (e ? ('script' === e.tag ? 'null' : Ha(e, n)) : '_c("div")') +
        '}',
      staticRenderFns: n.staticRenderFns
    };
  }
  function Ha(e, t) {
    if (
      (e.parent && (e.pre = e.pre || e.parent.pre),
        e.staticRoot && !e.staticProcessed)
    )
      return Ba(e, t);
    if (e.once && !e.onceProcessed) return Ua(e, t);
    if (e.for && !e.forProcessed) return za(e, t);
    if (e.if && !e.ifProcessed) return Va(e, t);
    if ('template' !== e.tag || e.slotTarget || t.pre) {
      if ('slot' === e.tag)
        return (function (e, t) {
          var n = e.slotName || '"default"',
            r = Wa(e, t),
            i = '_t(' + n + (r ? ',function(){return ' + r + '}' : ''),
            o =
              e.attrs || e.dynamicAttrs
                ? Xa(
                  (e.attrs || [])
                    .concat(e.dynamicAttrs || [])
                    .map(function (e) {
                      return {
                        name: b(e.name),
                        value: e.value,
                        dynamic: e.dynamic
                      };
                    })
                )
                : null,
            a = e.attrsMap['v-bind']
            ; (!o && !a) || r || (i += ',null');
          o && (i += ',' + o);
          a && (i += (o ? '' : ',null') + ',' + a);
          return i + ')';
        })(e, t);
      var n;
      if (e.component)
        n = (function (e, t, n) {
          var r = t.inlineTemplate ? null : Wa(t, n, !0);
          return '_c(' + e + ',' + Ka(t, n) + (r ? ',' + r : '') + ')';
        })(e.component, e, t);
      else {
        var r
          ; (!e.plain || (e.pre && t.maybeComponent(e))) && (r = Ka(e, t));
        var i = e.inlineTemplate ? null : Wa(e, t, !0);
        n = "_c('" + e.tag + "'" + (r ? ',' + r : '') + (i ? ',' + i : '') + ')';
      }
      for (var o = 0; o < t.transforms.length; o++) n = t.transforms[o](e, n);
      return n;
    }
    return Wa(e, t) || 'void 0';
  }
  function Ba(e, t) {
    e.staticProcessed = !0;
    var n = t.pre;
    return (
      e.pre && (t.pre = e.pre),
      t.staticRenderFns.push('with(this){return ' + Ha(e, t) + '}'),
      (t.pre = n),
      '_m(' +
      (t.staticRenderFns.length - 1) +
      (e.staticInFor ? ',true' : '') +
      ')'
    );
  }
  function Ua(e, t) {
    if (((e.onceProcessed = !0), e.if && !e.ifProcessed)) return Va(e, t);
    if (e.staticInFor) {
      for (var n = '', r = e.parent; r;) {
        if (r.for) {
          n = r.key;
          break;
        }
        r = r.parent;
      }
      return n ? '_o(' + Ha(e, t) + ',' + t.onceId++ + ',' + n + ')' : Ha(e, t);
    }
    return Ba(e, t);
  }
  function Va(e, t, n, r) {
    return (
      (e.ifProcessed = !0),
      (function e(t, n, r, i) {
        if (!t.length) return i || '_e()';
        var o = t.shift();
        return o.exp
          ? '(' + o.exp + ')?' + a(o.block) + ':' + e(t, n, r, i)
          : '' + a(o.block);
        function a(e) {
          return r ? r(e, n) : e.once ? Ua(e, n) : Ha(e, n);
        }
      })(e.ifConditions.slice(), t, n, r)
    );
  }
  function za(e, t, n, r) {
    var i = e.for,
      o = e.alias,
      a = e.iterator1 ? ',' + e.iterator1 : '',
      s = e.iterator2 ? ',' + e.iterator2 : '';
    return (
      (e.forProcessed = !0),
      (r || '_l') +
      '((' +
      i +
      '),function(' +
      o +
      a +
      s +
      '){return ' +
      (n || Ha)(e, t) +
      '})'
    );
  }
  function Ka(e, t) {
    var n = '{',
      r = (function (e, t) {
        var n = e.directives;
        if (!n) return;
        var r,
          i,
          o,
          a,
          s = 'directives:[',
          c = !1;
        for (r = 0, i = n.length; r < i; r++) {
          ; (o = n[r]), (a = !0);
          var u = t.directives[o.name];
          u && (a = !!u(e, o, t.warn)),
            a &&
            ((c = !0),
              (s +=
                '{name:"' +
                o.name +
                '",rawName:"' +
                o.rawName +
                '"' +
                (o.value
                  ? ',value:(' +
                  o.value +
                  '),expression:' +
                  JSON.stringify(o.value)
                  : '') +
                (o.arg
                  ? ',arg:' + (o.isDynamicArg ? o.arg : '"' + o.arg + '"')
                  : '') +
                (o.modifiers
                  ? ',modifiers:' + JSON.stringify(o.modifiers)
                  : '') +
                '},'));
        }
        if (c) return s.slice(0, -1) + ']';
      })(e, t);
    r && (n += r + ','),
      e.key && (n += 'key:' + e.key + ','),
      e.ref && (n += 'ref:' + e.ref + ','),
      e.refInFor && (n += 'refInFor:true,'),
      e.pre && (n += 'pre:true,'),
      e.component && (n += 'tag:"' + e.tag + '",');
    for (var i = 0; i < t.dataGenFns.length; i++) n += t.dataGenFns[i](e);
    if (
      (e.attrs && (n += 'attrs:' + Xa(e.attrs) + ','),
        e.props && (n += 'domProps:' + Xa(e.props) + ','),
        e.events && (n += La(e.events, !1) + ','),
        e.nativeEvents && (n += La(e.nativeEvents, !0) + ','),
        e.slotTarget && !e.slotScope && (n += 'slot:' + e.slotTarget + ','),
        e.scopedSlots &&
        (n +=
          (function (e, t, n) {
            var r =
              e.for ||
              Object.keys(t).some(function (e) {
                var n = t[e];
                return n.slotTargetDynamic || n.if || n.for || Ja(n);
              }),
              i = !!e.if;
            if (!r)
              for (var o = e.parent; o;) {
                if ((o.slotScope && o.slotScope !== ua) || o.for) {
                  r = !0;
                  break;
                }
                o.if && (i = !0), (o = o.parent);
              }
            var a = Object.keys(t)
              .map(function (e) {
                return qa(t[e], n);
              })
              .join(',');
            return (
              'scopedSlots:_u([' +
              a +
              ']' +
              (r ? ',null,true' : '') +
              (!r && i
                ? ',null,false,' +
                (function (e) {
                  var t = 5381,
                    n = e.length;
                  for (; n;) t = (33 * t) ^ e.charCodeAt(--n);
                  return t >>> 0;
                })(a)
                : '') +
              ')'
            );
          })(e, e.scopedSlots, t) + ','),
        e.model &&
        (n +=
          'model:{value:' +
          e.model.value +
          ',callback:' +
          e.model.callback +
          ',expression:' +
          e.model.expression +
          '},'),
        e.inlineTemplate)
    ) {
      var o = (function (e, t) {
        var n = e.children[0];
        if (n && 1 === n.type) {
          var r = Ra(n, t.options);
          return (
            'inlineTemplate:{render:function(){' +
            r.render +
            '},staticRenderFns:[' +
            r.staticRenderFns
              .map(function (e) {
                return 'function(){' + e + '}';
              })
              .join(',') +
            ']}'
          );
        }
      })(e, t);
      o && (n += o + ',');
    }
    return (
      (n = n.replace(/,$/, '') + '}'),
      e.dynamicAttrs &&
      (n = '_b(' + n + ',"' + e.tag + '",' + Xa(e.dynamicAttrs) + ')'),
      e.wrapData && (n = e.wrapData(n)),
      e.wrapListeners && (n = e.wrapListeners(n)),
      n
    );
  }
  function Ja(e) {
    return 1 === e.type && ('slot' === e.tag || e.children.some(Ja));
  }
  function qa(e, t) {
    var n = e.attrsMap['slot-scope'];
    if (e.if && !e.ifProcessed && !n) return Va(e, t, qa, 'null');
    if (e.for && !e.forProcessed) return za(e, t, qa);
    var r = e.slotScope === ua ? '' : String(e.slotScope),
      i =
        'function(' +
        r +
        '){return ' +
        ('template' === e.tag
          ? e.if && n
            ? '(' + e.if + ')?' + (Wa(e, t) || 'undefined') + ':undefined'
            : Wa(e, t) || 'undefined'
          : Ha(e, t)) +
        '}',
      o = r ? '' : ',proxy:true';
    return '{key:' + (e.slotTarget || '"default"') + ',fn:' + i + o + '}';
  }
  function Wa(e, t, n, r, i) {
    var o = e.children;
    if (o.length) {
      var a = o[0];
      if (1 === o.length && a.for && 'template' !== a.tag && 'slot' !== a.tag) {
        var s = n ? (t.maybeComponent(a) ? ',1' : ',0') : '';
        return '' + (r || Ha)(a, t) + s;
      }
      var c = n
        ? (function (e, t) {
          for (var n = 0, r = 0; r < e.length; r++) {
            var i = e[r];
            if (1 === i.type) {
              if (
                Za(i) ||
                (i.ifConditions &&
                  i.ifConditions.some(function (e) {
                    return Za(e.block);
                  }))
              ) {
                n = 2;
                break;
              }
              ; (t(i) ||
                (i.ifConditions &&
                  i.ifConditions.some(function (e) {
                    return t(e.block);
                  }))) &&
                (n = 1);
            }
          }
          return n;
        })(o, t.maybeComponent)
        : 0,
        u = i || Ga;
      return (
        '[' +
        o
          .map(function (e) {
            return u(e, t);
          })
          .join(',') +
        ']' +
        (c ? ',' + c : '')
      );
    }
  }
  function Za(e) {
    return void 0 !== e.for || 'template' === e.tag || 'slot' === e.tag;
  }
  function Ga(e, t) {
    return 1 === e.type
      ? Ha(e, t)
      : 3 === e.type && e.isComment
        ? ((r = e), '_e(' + JSON.stringify(r.text) + ')')
        : '_v(' +
        (2 === (n = e).type ? n.expression : Ya(JSON.stringify(n.text))) +
        ')';
    var n, r;
  }
  function Xa(e) {
    for (var t = '', n = '', r = 0; r < e.length; r++) {
      var i = e[r],
        o = Ya(i.value);
      i.dynamic
        ? (n += i.name + ',' + o + ',')
        : (t += '"' + i.name + '":' + o + ',');
    }
    return (
      (t = '{' + t.slice(0, -1) + '}'),
      n ? '_d(' + t + ',[' + n.slice(0, -1) + '])' : t
    );
  }
  function Ya(e) {
    return e.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  }
  new RegExp(
    '\\b' +
    'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments'
      .split(',')
      .join('\\b|\\b') +
    '\\b'
  );
  function Qa(e, t) {
    try {
      return new Function(e);
    } catch (n) {
      return t.push({ err: n, code: e }), S;
    }
  }
  function es(e) {
    var t = Object.create(null);
    return function (n, r, i) {
      ; (r = A({}, r)).warn;
      delete r.warn;
      var o = r.delimiters ? String(r.delimiters) + n : n;
      if (t[o]) return t[o];
      var a = e(n, r),
        s = {},
        c = [];
      return (
        (s.render = Qa(a.render, c)),
        (s.staticRenderFns = a.staticRenderFns.map(function (e) {
          return Qa(e, c);
        })),
        (t[o] = s)
      );
    };
  }
  var ts,
    ns,
    rs = ((ts = function (e, t) {
      var n = fa(e.trim(), t);
      !1 !== t.optimize && Aa(n, t);
      var r = Ra(n, t);
      return { ast: n, render: r.render, staticRenderFns: r.staticRenderFns };
    }),
      function (e) {
        function t(t, n) {
          var r = Object.create(e),
            i = [],
            o = [];
          if (n)
            for (var a in (n.modules &&
              (r.modules = (e.modules || []).concat(n.modules)),
              n.directives &&
              (r.directives = A(
                Object.create(e.directives || null),
                n.directives
              )),
              n))
              'modules' !== a && 'directives' !== a && (r[a] = n[a]);
          r.warn = function (e, t, n) {
            ; (n ? o : i).push(e);
          };
          var s = ts(t.trim(), r);
          return (s.errors = i), (s.tips = o), s;
        }
        return { compile: t, compileToFunctions: es(t) };
      })(xa),
    is = (rs.compile, rs.compileToFunctions);
  function os(e) {
    return (
      ((ns = ns || document.createElement('div')).innerHTML = e
        ? '<a href="\n"/>'
        : '<div a="\n"/>'),
      ns.innerHTML.indexOf('&#10;') > 0
    );
  }
  var as = !!V && os(!1),
    ss = !!V && os(!0),
    cs = g(function (e) {
      var t = Qn(e);
      return t && t.innerHTML;
    }),
    us = Cn.prototype.$mount;
  return (
    (Cn.prototype.$mount = function (e, t) {
      if ((e = e && Qn(e)) === document.body || e === document.documentElement)
        return this;
      var n = this.$options;
      if (!n.render) {
        var r = n.template;
        if (r)
          if ('string' == typeof r) '#' === r.charAt(0) && (r = cs(r));
          else {
            if (!r.nodeType) return this;
            r = r.innerHTML;
          }
        else
          e &&
            (r = (function (e) {
              if (e.outerHTML) return e.outerHTML;
              var t = document.createElement('div');
              return t.appendChild(e.cloneNode(!0)), t.innerHTML;
            })(e));
        if (r) {
          var i = is(
            r,
            {
              outputSourceRange: !1,
              shouldDecodeNewlines: as,
              shouldDecodeNewlinesForHref: ss,
              delimiters: n.delimiters,
              comments: n.comments
            },
            this
          ),
            o = i.render,
            a = i.staticRenderFns
            ; (n.render = o), (n.staticRenderFns = a);
        }
      }
      return us.call(this, e, t);
    }),
    (Cn.compile = is),
    Cn
  );
});



define(
	'STAXS.CustomSearchVue.CustomSearchVue'
	, [
		'STAXS.CustomSearchVue.CustomSearchVue.View'
		, 'Utils'
	]
	, function (
		CustomSearchVueView
		, Utils
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');
				const myaccountmenu = container.getComponent("MyAccountMenu");
				const pageType = container.getComponent('PageType');
				pageType.registerPageType({
					name: 'Items',
					routes: ['cust-item'],
					view: CustomSearchVueView,
					defaultTemplate: {
						name: 'staxs_customsearchvue_customsearchvue_tpl',
						displayName: 'Item'
					}
				});
				myaccountmenu.addGroup({
					id: 'CustItem',
					name: Utils.translate('Items'),
					index: 13,
					url: "cust-item"
				});

				// myaccountmenu.addGroupEntry({
				// 	id: "certificates",
				// 	groupid: "Certificates",
				// 	name: "Item",
				// 	index: 1,
				// 	url: "cust-item"
				// });

				// if (layout) {
				// 	layout.addChildView('Vue', function () {
				// 		return new CustomSearchVueView({ container: container });
				// 	});
				// }

			}
		};
	});


};

extensions['Acme.ImagesGridSlideShow.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Acme/ImagesGridSlideShow/1.0.0/' + asset;
}

// @module Acme.ImagesGridSlideShow.ImagesGridSlideShow
define("Acme.ImagesGridSlideShow.ImagesGridSlideShow.View", [
  "CustomContentType.Base.View",
  "acme_imagesgridslideshow_imagesgridslideshow.tpl",
  "Utils",
  "Backbone",
  "jQuery",
  "underscore",
  "jquery.slick"
], function (
  CustomContentTypeBaseView,
  acme_imagesgridslideshow_imagesgridslideshow_tpl,
  Utils,
  Backbone,
  jQuery,
  _,
  slick
) {
  "use strict";

  // @class Acme.ImagesGridSlideShow.ImagesGridSlideShow.View @extends Backbone.View
  return CustomContentTypeBaseView.extend({
    template: acme_imagesgridslideshow_imagesgridslideshow_tpl,
    
    install: function (settings, context_data) {
       this._install(settings, context_data);
       
    },

    initialize: function (options) {
      var SettingOpt =[];
    
       this.on('afterViewRender',() =>{
         var self =this;
        //  console.log(self.sliderSettings);
         self.$(".slider").slick(self.sliderSettings);
        });
       
    },
    

    // The list of contexts that you may need to run the CCT
    contextDataRequest: ["item"],

    // By default when you drop a CCT in the SMT admin, it will run the 'validateContextDataRequest' method to check that you have
    // all the requested contexts and it will fail if some context is missing.
    validateContextDataRequest: function validateContextDataRequest() {
      return true;
    },

    getContext: function getContext() {     
       
      let resultData =this.settings;
      //  console.log(resultData);
      let Slick =[];
      var self = this;
  
      $.each(resultData,function(index, value) {
        	 
        var Index = index.split('custrecordcustom_images_grid_img')[1];
         if(!isNaN(Index) && value !=""){
            var obj ={};
           obj.imageURL =resultData[`custrecordcustom_images_grid_img${Index}_url`];
           obj.redirectUrl =resultData[`custrecordcustom_images_grid_href${Index}`];
           obj.altText =resultData[`custrecordcustom_images_grid_img_alt${Index}`];
           obj.button =resultData[`custrecordcustom_button${Index}`];
           obj.id =Index
           
           Slick.push(obj);
            
         }
          
        });
        Slick.sort((a,b) =>  a.id-b.id);

        var sliderSettings={
            rows:parseInt(resultData[`custrecordcustom_slick_grid_desk_rows`]),
            slidesToShow:parseInt(resultData[`custrecordcustom_slick_slides_show`]),
            // slidesToShow:4,
            slidesToScroll:parseInt(resultData[`custrecordcustom_slick_slides_scroll`]),
            dots:true,
            responsive: [{
                             breakpoint:767,
                             settings: { 
                               rows:parseInt(resultData[`custrecordcustom_slick_grid_mobile_rows`]),
                               slidesToShow:parseInt(resultData[`custrecordcustom_slick_slides_show_mobil`]),
                               slidesToScroll:parseInt(resultData[`custrecordcustom_slick_slides_scroll_mob`])

                              }
                           }
                          ]
             
        };
        if(sliderSettings){
          this.sliderSettings =sliderSettings

        } 
        // console.log(Slick);
      return {
          slideData:Slick
      };
    },
   
  });
});


// Model.js
// -----------------------
// @module Case
define("Acme.ImagesGridSlideShow.ImagesGridSlideShow.Model", [
  "Backbone",
  "Utils",
], function (Backbone, Utils) {
  "use strict";

  // @class Case.Fields.Model @extends Backbone.Model
  return Backbone.Model.extend({
    //@property {String} urlRoot
    urlRoot: Utils.getAbsoluteUrl(
      getExtensionAssetsPath("services/ImagesGridSlideShow.Service.ss")
    ),
  });
});


// Model.js
// -----------------------
// @module Case
define("Acme.ImagesGridSlideShow.ImagesGridSlideShow.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ImagesGridSlideShow/SuiteScript2/ImagesGridSlideShow.Service.ss"
            ),
            true
        )
});
});


 /*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */

define('jquery.slick', ['jQuery'], function ($) {
    var Slick = window.Slick || {};
  
    Slick = (function() {
  
        var instanceUid = 0;
  
        function Slick(element, settings) {
  
            var _ = this, dataSettings;
  
            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next " aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };
  
            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };
  
            $.extend(_, _.initials);
  
            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;
  
            dataSettings = $(element).data('slick') || {};
  
            _.options = $.extend({}, _.defaults, settings, dataSettings);
  
            _.currentSlide = _.options.initialSlide;
  
            _.originalSettings = _.options;
  
            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }
  
            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
  
            _.instanceUid = instanceUid++;
  
            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
  
  
            _.registerBreakpoints();
            _.init(true);
  
        }
  
        return Slick;
  
    }());
  
    Slick.prototype.activateADA = function() {
        var _ = this;
  
        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });
  
    };
  
    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
  
        var _ = this;
  
        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }
  
        _.unload();
  
        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }
  
        _.$slides = _.$slideTrack.children(this.options.slide);
  
        _.$slideTrack.children(this.options.slide).detach();
  
        _.$slideTrack.append(_.$slides);
  
        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });
  
        _.$slidesCache = _.$slides;
  
        _.reinit();
  
    };
  
    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };
  
    Slick.prototype.animateSlide = function(targetLeft, callback) {
  
        var animProps = {},
            _ = this;
  
        _.animateHeight();
  
        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }
  
        } else {
  
            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });
  
            } else {
  
                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);
  
                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);
  
                if (callback) {
                    setTimeout(function() {
  
                        _.disableTransition();
  
                        callback.call();
                    }, _.options.speed);
                }
  
            }
  
        }
  
    };
  
    Slick.prototype.getNavTarget = function() {
  
        var _ = this,
            asNavFor = _.options.asNavFor;
  
        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }
  
        return asNavFor;
  
    };
  
    Slick.prototype.asNavFor = function(index) {
  
        var _ = this,
            asNavFor = _.getNavTarget();
  
        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
  
    };
  
    Slick.prototype.applyTransition = function(slide) {
  
        var _ = this,
            transition = {};
  
        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }
  
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
  
    };
  
    Slick.prototype.autoPlay = function() {
  
        var _ = this;
  
        _.autoPlayClear();
  
        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }
  
    };
  
    Slick.prototype.autoPlayClear = function() {
  
        var _ = this;
  
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
  
    };
  
    Slick.prototype.autoPlayIterator = function() {
  
        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;
  
        if ( !_.paused && !_.interrupted && !_.focussed ) {
  
            if ( _.options.infinite === false ) {
  
                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }
  
                else if ( _.direction === 0 ) {
  
                    slideTo = _.currentSlide - _.options.slidesToScroll;
  
                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }
  
                }
  
            }
  
            _.slideHandler( slideTo );
  
        }
  
    };
  
    Slick.prototype.buildArrows = function() {
  
        var _ = this;
  
        if (_.options.arrows === true ) {
  
            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
  
            if( _.slideCount > _.options.slidesToShow ) {
  
                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
  
                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }
  
                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }
  
                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }
  
            } else {
  
                _.$prevArrow.add( _.$nextArrow )
  
                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });
  
            }
  
        }
  
    };
  
    Slick.prototype.buildDots = function() {
  
        var _ = this,
            i, dot;
  
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
  
            _.$slider.addClass('slick-dotted');
  
            dot = $('<ul />').addClass(_.options.dotsClass);
  
            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }
  
            _.$dots = dot.appendTo(_.options.appendDots);
  
            _.$dots.find('li').first().addClass('slick-active');
  
        }
  
    };
  
    Slick.prototype.buildOut = function() {
  
        var _ = this;
  
        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');
  
        _.slideCount = _.$slides.length;
  
        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });
  
        _.$slider.addClass('slick-slider');
  
        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();
  
        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);
  
        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }
  
        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
  
        _.setupInfinite();
  
        _.buildArrows();
  
        _.buildDots();
  
        _.updateDots();
  
  
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
  
        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }
  
    };
  
    Slick.prototype.buildRows = function() {
  
        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;
  
        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();
  
        if(_.options.rows > 0) {
  
            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );
  
            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }
  
            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });
  
        }
  
    };
  
    Slick.prototype.checkResponsive = function(initial, forceUpdate) {
  
        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();
  
        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }
  
        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {
  
            targetBreakpoint = null;
  
            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }
  
            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }
  
            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }
  
    };
  
    Slick.prototype.changeSlide = function(event, dontAnimate) {
  
        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;
  
        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }
  
        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }
  
        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
  
        switch (event.data.message) {
  
            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;
  
            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;
  
            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;
  
                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;
  
            default:
                return;
        }
  
    };
  
    Slick.prototype.checkNavigable = function(index) {
  
        var _ = this,
            navigables, prevNavigable;
  
        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }
  
        return index;
    };
  
    Slick.prototype.cleanUpEvents = function() {
  
        var _ = this;
  
        if (_.options.dots && _.$dots !== null) {
  
            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  
            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }
  
        _.$slider.off('focus.slick blur.slick');
  
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
  
            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }
  
        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
  
        _.$list.off('click.slick', _.clickHandler);
  
        $(document).off(_.visibilityChange, _.visibility);
  
        _.cleanUpSlideEvents();
  
        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }
  
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }
  
        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
  
        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
  
        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
  
        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
  
    };
  
    Slick.prototype.cleanUpSlideEvents = function() {
  
        var _ = this;
  
        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  
    };
  
    Slick.prototype.cleanUpRows = function() {
  
        var _ = this, originalSlides;
  
        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }
  
    };
  
    Slick.prototype.clickHandler = function(event) {
  
        var _ = this;
  
        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
  
    };
  
    Slick.prototype.destroy = function(refresh) {
  
        var _ = this;
  
        _.autoPlayClear();
  
        _.touchObject = {};
  
        _.cleanUpEvents();
  
        $('.slick-cloned', _.$slider).detach();
  
        if (_.$dots) {
            _.$dots.remove();
        }
  
        if ( _.$prevArrow && _.$prevArrow.length ) {
  
            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');
  
            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }
  
        if ( _.$nextArrow && _.$nextArrow.length ) {
  
            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');
  
            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }
  
  
        if (_.$slides) {
  
            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });
  
            _.$slideTrack.children(this.options.slide).detach();
  
            _.$slideTrack.detach();
  
            _.$list.detach();
  
            _.$slider.append(_.$slides);
        }
  
        _.cleanUpRows();
  
        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');
  
        _.unslicked = true;
  
        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }
  
    };
  
    Slick.prototype.disableTransition = function(slide) {
  
        var _ = this,
            transition = {};
  
        transition[_.transitionType] = '';
  
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
  
    };
  
    Slick.prototype.fadeSlide = function(slideIndex, callback) {
  
        var _ = this;
  
        if (_.cssTransitions === false) {
  
            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });
  
            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);
  
        } else {
  
            _.applyTransition(slideIndex);
  
            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });
  
            if (callback) {
                setTimeout(function() {
  
                    _.disableTransition(slideIndex);
  
                    callback.call();
                }, _.options.speed);
            }
  
        }
  
    };
  
    Slick.prototype.fadeSlideOut = function(slideIndex) {
  
        var _ = this;
  
        if (_.cssTransitions === false) {
  
            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
  
        } else {
  
            _.applyTransition(slideIndex);
  
            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });
  
        }
  
    };
  
    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
  
        var _ = this;
  
        if (filter !== null) {
  
            _.$slidesCache = _.$slides;
  
            _.unload();
  
            _.$slideTrack.children(this.options.slide).detach();
  
            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
  
            _.reinit();
  
        }
  
    };
  
    Slick.prototype.focusHandler = function() {
  
        var _ = this;
  
        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {
  
            event.stopImmediatePropagation();
            var $sf = $(this);
  
            setTimeout(function() {
  
                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }
  
            }, 0);
  
        });
    };
  
    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
  
        var _ = this;
        return _.currentSlide;
  
    };
  
    Slick.prototype.getDotCount = function() {
  
        var _ = this;
  
        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;
  
        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }
  
        return pagerQty - 1;
  
    };
  
    Slick.prototype.getLeft = function(slideIndex) {
  
        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;
  
        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);
  
        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1
  
                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }
  
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }
  
        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }
  
        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }
  
        if (_.options.variableWidth === true) {
  
            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }
  
            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }
  
            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }
  
                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }
  
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }
  
        return targetLeft;
  
    };
  
    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
  
        var _ = this;
  
        return _.options[option];
  
    };
  
    Slick.prototype.getNavigableIndexes = function() {
  
        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;
  
        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }
  
        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
  
        return indexes;
  
    };
  
    Slick.prototype.getSlick = function() {
  
        return this;
  
    };
  
    Slick.prototype.getSlideCount = function() {
  
        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;
  
        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
  
        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });
  
            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
  
            return slidesTraversed;
  
        } else {
            return _.options.slidesToScroll;
        }
  
    };
  
    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
  
        var _ = this;
  
        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);
  
    };
  
    Slick.prototype.init = function(creation) {
  
        var _ = this;
  
        if (!$(_.$slider).hasClass('slick-initialized')) {
  
            $(_.$slider).addClass('slick-initialized');
  
            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
  
        }
  
        if (creation) {
            _.$slider.trigger('init', [_]);
        }
  
        if (_.options.accessibility === true) {
            _.initADA();
        }
  
        if ( _.options.autoplay ) {
  
            _.paused = false;
            _.autoPlay();
  
        }
  
    };
  
    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });
  
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });
  
        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);
  
                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });
  
                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });
  
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];
  
                $(this).attr({
                    'role': 'presentation'
                });
  
                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });
  
            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }
  
        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }
  
        _.activateADA();
  
    };
  
    Slick.prototype.initArrowEvents = function() {
  
        var _ = this;
  
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);
  
            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }
  
    };
  
    Slick.prototype.initDotEvents = function() {
  
        var _ = this;
  
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
  
            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }
  
        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
  
            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));
  
        }
  
    };
  
    Slick.prototype.initSlideEvents = function() {
  
        var _ = this;
  
        if ( _.options.pauseOnHover ) {
  
            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
  
        }
  
    };
  
    Slick.prototype.initializeEvents = function() {
  
        var _ = this;
  
        _.initArrowEvents();
  
        _.initDotEvents();
        _.initSlideEvents();
  
        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);
  
        _.$list.on('click.slick', _.clickHandler);
  
        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
  
        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }
  
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }
  
        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
  
        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
  
        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
  
        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);
  
    };
  
    Slick.prototype.initUI = function() {
  
        var _ = this;
  
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
  
            _.$prevArrow.show();
            _.$nextArrow.show();
  
        }
  
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
  
            _.$dots.show();
  
        }
  
    };
  
    Slick.prototype.keyHandler = function(event) {
  
        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }
  
    };
  
    Slick.prototype.lazyLoad = function() {
  
        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;
  
        function loadImages(imagesScope) {
  
            $('img[data-lazy]', imagesScope).each(function() {
  
                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');
  
                imageToLoad.onload = function() {
  
                    image
                        .animate({ opacity: 0 }, 100, function() {
  
                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );
  
                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }
  
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });
  
                };
  
                imageToLoad.onerror = function() {
  
                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );
  
                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
  
                };
  
                imageToLoad.src = imageSource;
  
            });
  
        }
  
        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }
  
        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
  
        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');
  
            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }
  
        loadImages(loadRange);
  
        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
  
    };
  
    Slick.prototype.loadSlider = function() {
  
        var _ = this;
  
        _.setPosition();
  
        _.$slideTrack.css({
            opacity: 1
        });
  
        _.$slider.removeClass('slick-loading');
  
        _.initUI();
  
        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
  
    };
  
    Slick.prototype.next = Slick.prototype.slickNext = function() {
  
        var _ = this;
  
        _.changeSlide({
            data: {
                message: 'next'
            }
        });
  
    };
  
    Slick.prototype.orientationChange = function() {
  
        var _ = this;
  
        _.checkResponsive();
        _.setPosition();
  
    };
  
    Slick.prototype.pause = Slick.prototype.slickPause = function() {
  
        var _ = this;
  
        _.autoPlayClear();
        _.paused = true;
  
    };
  
    Slick.prototype.play = Slick.prototype.slickPlay = function() {
  
        var _ = this;
  
        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
  
    };
  
    Slick.prototype.postSlide = function(index) {
  
        var _ = this;
  
        if( !_.unslicked ) {
  
            _.$slider.trigger('afterChange', [_, index]);
  
            _.animating = false;
  
            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }
  
            _.swipeLeft = null;
  
            if ( _.options.autoplay ) {
                _.autoPlay();
            }
  
            if (_.options.accessibility === true) {
                _.initADA();
  
                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }
  
        }
  
    };
  
    Slick.prototype.prev = Slick.prototype.slickPrev = function() {
  
        var _ = this;
  
        _.changeSlide({
            data: {
                message: 'previous'
            }
        });
  
    };
  
    Slick.prototype.preventDefault = function(event) {
  
        event.preventDefault();
  
    };
  
    Slick.prototype.progressiveLazyLoad = function( tryCount ) {
  
        tryCount = tryCount || 1;
  
        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;
  
        if ( $imgsToLoad.length ) {
  
            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');
  
            imageToLoad.onload = function() {
  
                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );
  
                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }
  
                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');
  
                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }
  
                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();
  
            };
  
            imageToLoad.onerror = function() {
  
                if ( tryCount < 3 ) {
  
                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );
  
                } else {
  
                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );
  
                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
  
                    _.progressiveLazyLoad();
  
                }
  
            };
  
            imageToLoad.src = imageSource;
  
        } else {
  
            _.$slider.trigger('allImagesLoaded', [ _ ]);
  
        }
  
    };
  
    Slick.prototype.refresh = function( initializing ) {
  
        var _ = this, currentSlide, lastVisibleIndex;
  
        lastVisibleIndex = _.slideCount - _.options.slidesToShow;
  
        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }
  
        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;
  
        }
  
        currentSlide = _.currentSlide;
  
        _.destroy(true);
  
        $.extend(_, _.initials, { currentSlide: currentSlide });
  
        _.init();
  
        if( !initializing ) {
  
            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);
  
        }
  
    };
  
    Slick.prototype.registerBreakpoints = function() {
  
        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;
  
        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {
  
            _.respondTo = _.options.respondTo || 'window';
  
            for ( breakpoint in responsiveSettings ) {
  
                l = _.breakpoints.length-1;
  
                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
  
                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }
  
                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
  
                }
  
            }
  
            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });
  
        }
  
    };
  
    Slick.prototype.reinit = function() {
  
        var _ = this;
  
        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');
  
        _.slideCount = _.$slides.length;
  
        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }
  
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }
  
        _.registerBreakpoints();
  
        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();
  
        _.checkResponsive(false, true);
  
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }
  
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
  
        _.setPosition();
        _.focusHandler();
  
        _.paused = !_.options.autoplay;
        _.autoPlay();
  
        _.$slider.trigger('reInit', [_]);
  
    };
  
    Slick.prototype.resize = function() {
  
        var _ = this;
  
        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };
  
    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
  
        var _ = this;
  
        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }
  
        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }
  
        _.unload();
  
        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }
  
        _.$slides = _.$slideTrack.children(this.options.slide);
  
        _.$slideTrack.children(this.options.slide).detach();
  
        _.$slideTrack.append(_.$slides);
  
        _.$slidesCache = _.$slides;
  
        _.reinit();
  
    };
  
    Slick.prototype.setCSS = function(position) {
  
        var _ = this,
            positionProps = {},
            x, y;
  
        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
  
        positionProps[_.positionProp] = position;
  
        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
  
    };
  
    Slick.prototype.setDimensions = function() {
  
        var _ = this;
  
        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }
  
        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();
  
  
        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
  
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }
  
        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  
    };
  
    Slick.prototype.setFade = function() {
  
        var _ = this,
            targetLeft;
  
        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });
  
        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
  
    };
  
    Slick.prototype.setHeight = function() {
  
        var _ = this;
  
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
  
    };
  
    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {
  
        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */
  
        var _ = this, l, item, option, value, refresh = false, type;
  
        if( $.type( arguments[0] ) === 'object' ) {
  
            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';
  
        } else if ( $.type( arguments[0] ) === 'string' ) {
  
            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];
  
            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {
  
                type = 'responsive';
  
            } else if ( typeof arguments[1] !== 'undefined' ) {
  
                type = 'single';
  
            }
  
        }
  
        if ( type === 'single' ) {
  
            _.options[option] = value;
  
  
        } else if ( type === 'multiple' ) {
  
            $.each( option , function( opt, val ) {
  
                _.options[opt] = val;
  
            });
  
  
        } else if ( type === 'responsive' ) {
  
            for ( item in value ) {
  
                if( $.type( _.options.responsive ) !== 'array' ) {
  
                    _.options.responsive = [ value[item] ];
  
                } else {
  
                    l = _.options.responsive.length-1;
  
                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {
  
                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
  
                            _.options.responsive.splice(l,1);
  
                        }
  
                        l--;
  
                    }
  
                    _.options.responsive.push( value[item] );
  
                }
  
            }
  
        }
  
        if ( refresh ) {
  
            _.unload();
            _.reinit();
  
        }
  
    };
  
    Slick.prototype.setPosition = function() {
  
        var _ = this;
  
        _.setDimensions();
  
        _.setHeight();
  
        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }
  
        _.$slider.trigger('setPosition', [_]);
  
    };
  
    Slick.prototype.setProps = function() {
  
        var _ = this,
            bodyStyle = document.body.style;
  
        _.positionProp = _.options.vertical === true ? 'top' : 'left';
  
        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }
  
        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }
  
        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }
  
        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };
  
  
    Slick.prototype.setSlideClasses = function(index) {
  
        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;
  
        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');
  
        _.$slides
            .eq(index)
            .addClass('slick-current');
  
        if (_.options.centerMode === true) {
  
            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
  
            centerOffset = Math.floor(_.options.slidesToShow / 2);
  
            if (_.options.infinite === true) {
  
                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');
  
                } else {
  
                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');
  
                }
  
                if (index === 0) {
  
                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');
  
                } else if (index === _.slideCount - 1) {
  
                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');
  
                }
  
            }
  
            _.$slides
                .eq(index)
                .addClass('slick-center');
  
        } else {
  
            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
  
                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');
  
            } else if (allSlides.length <= _.options.slidesToShow) {
  
                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');
  
            } else {
  
                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
  
                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
  
                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');
  
                } else {
  
                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');
  
                }
  
            }
  
        }
  
        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };
  
    Slick.prototype.setupInfinite = function() {
  
        var _ = this,
            i, slideIndex, infiniteCount;
  
        if (_.options.fade === true) {
            _.options.centerMode = false;
        }
  
        if (_.options.infinite === true && _.options.fade === false) {
  
            slideIndex = null;
  
            if (_.slideCount > _.options.slidesToShow) {
  
                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }
  
                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });
  
            }
  
        }
  
    };
  
    Slick.prototype.interrupt = function( toggle ) {
  
        var _ = this;
  
        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;
  
    };
  
    Slick.prototype.selectHandler = function(event) {
  
        var _ = this;
  
        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');
  
        var index = parseInt(targetElement.attr('data-slick-index'));
  
        if (!index) index = 0;
  
        if (_.slideCount <= _.options.slidesToShow) {
  
            _.slideHandler(index, false, true);
            return;
  
        }
  
        _.slideHandler(index);
  
    };
  
    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
  
        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;
  
        sync = sync || false;
  
        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }
  
        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }
  
        if (sync === false) {
            _.asNavFor(index);
        }
  
        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);
  
        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
  
        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }
  
        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }
  
        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }
  
        _.animating = true;
  
        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
  
        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;
  
        _.setSlideClasses(_.currentSlide);
  
        if ( _.options.asNavFor ) {
  
            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');
  
            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }
  
        }
  
        _.updateDots();
        _.updateArrows();
  
        if (_.options.fade === true) {
            if (dontAnimate !== true) {
  
                _.fadeSlideOut(oldSlide);
  
                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });
  
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }
  
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
  
    };
  
    Slick.prototype.startLoad = function() {
  
        var _ = this;
  
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
  
            _.$prevArrow.hide();
            _.$nextArrow.hide();
  
        }
  
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
  
            _.$dots.hide();
  
        }
  
        _.$slider.addClass('slick-loading');
  
    };
  
    Slick.prototype.swipeDirection = function() {
  
        var xDist, yDist, r, swipeAngle, _ = this;
  
        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);
  
        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }
  
        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }
  
        return 'vertical';
  
    };
  
    Slick.prototype.swipeEnd = function(event) {
  
        var _ = this,
            slideCount,
            direction;
  
        _.dragging = false;
        _.swiping = false;
  
        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }
  
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;
  
        if ( _.touchObject.curX === undefined ) {
            return false;
        }
  
        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }
  
        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {
  
            direction = _.swipeDirection();
  
            switch ( direction ) {
  
                case 'left':
                case 'down':
  
                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();
  
                    _.currentDirection = 0;
  
                    break;
  
                case 'right':
                case 'up':
  
                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();
  
                    _.currentDirection = 1;
  
                    break;
  
                default:
  
  
            }
  
            if( direction != 'vertical' ) {
  
                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);
  
            }
  
        } else {
  
            if ( _.touchObject.startX !== _.touchObject.curX ) {
  
                _.slideHandler( _.currentSlide );
                _.touchObject = {};
  
            }
  
        }
  
    };
  
    Slick.prototype.swipeHandler = function(event) {
  
        var _ = this;
  
        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }
  
        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;
  
        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;
  
        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }
  
        switch (event.data.action) {
  
            case 'start':
                _.swipeStart(event);
                break;
  
            case 'move':
                _.swipeMove(event);
                break;
  
            case 'end':
                _.swipeEnd(event);
                break;
  
        }
  
    };
  
    Slick.prototype.swipeMove = function(event) {
  
        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;
  
        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
  
        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }
  
        curLeft = _.getLeft(_.currentSlide);
  
        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
  
        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
  
        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
  
        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }
  
        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }
  
        swipeDirection = _.swipeDirection();
  
        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }
  
        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }
  
  
        swipeLength = _.touchObject.swipeLength;
  
        _.touchObject.edgeHit = false;
  
        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }
  
        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }
  
        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }
  
        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }
  
        _.setCSS(_.swipeLeft);
  
    };
  
    Slick.prototype.swipeStart = function(event) {
  
        var _ = this,
            touches;
  
        _.interrupted = true;
  
        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }
  
        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }
  
        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
  
        _.dragging = true;
  
    };
  
    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
  
        var _ = this;
  
        if (_.$slidesCache !== null) {
  
            _.unload();
  
            _.$slideTrack.children(this.options.slide).detach();
  
            _.$slidesCache.appendTo(_.$slideTrack);
  
            _.reinit();
  
        }
  
    };
  
    Slick.prototype.unload = function() {
  
        var _ = this;
  
        $('.slick-cloned', _.$slider).remove();
  
        if (_.$dots) {
            _.$dots.remove();
        }
  
        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }
  
        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }
  
        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');
  
    };
  
    Slick.prototype.unslick = function(fromBreakpoint) {
  
        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();
  
    };
  
    Slick.prototype.updateArrows = function() {
  
        var _ = this,
            centerOffset;
  
        centerOffset = Math.floor(_.options.slidesToShow / 2);
  
        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {
  
            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
  
            if (_.currentSlide === 0) {
  
                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
  
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
  
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
  
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
  
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
  
            }
  
        }
  
    };
  
    Slick.prototype.updateDots = function() {
  
        var _ = this;
  
        if (_.$dots !== null) {
  
            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();
  
            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');
  
        }
  
    };
  
    Slick.prototype.visibility = function() {
  
        var _ = this;
  
        if ( _.options.autoplay ) {
  
            if ( document[_.hidden] ) {
  
                _.interrupted = true;
  
            } else {
  
                _.interrupted = false;
  
            }
  
        }
  
    };
  
    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };
  
  })
  

define("Acme.ImagesGridSlideShow.ImagesGridSlideShow", [
  "Acme.ImagesGridSlideShow.ImagesGridSlideShow.View",
], function (ImagesGridSlideShowView) {
  "use strict";

  return {
    mountToApp: function mountToApp(container) {
      // using the 'Layout' component we add a new child view inside the 'Header' existing view
      // (there will be a DOM element with the HTML attribute data-view="Header.Logo")
      // more documentation of the Extensibility API in
      // https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

      
        container.getComponent("CMS").registerCustomContentType({
          id: "images_grid_carousel_cct",
          view: ImagesGridSlideShowView,
          options: { container: container }
        });
      
    },
  };
});


};

extensions['mia.instafeed.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/mia/instafeed/1.0.0/' + asset;
}

// @module mia.instafeed.instafeedExt
define('mia.instafeed.instafeedExt.View'
,	[
	'mia_instafeed_instafeedext.tpl'
	
	,	'mia.instafeed.instafeedExt.SS2Model'
	,	'jQuery'
	,	'Backbone'
	, 	'Instafeed'
	,	"jquery.slick"
	,	'SC.Configuration'
    ]
, function (
	mia_instafeed_instafeedext_tpl
	
	,	instafeedExtSS2Model
	,	jQuery
	,	Backbone
	,	Instafeed
	,	slick
	,	Configuration
)
{
    'use strict';

	// @class mia.instafeed.instafeedExt.View @extends Backbone.View
	return Backbone.View.extend({ 

		template: mia_instafeed_instafeedext_tpl


	,	initialize: function initialize(options) {
		var access_token = Configuration.get('instagramApi.accessKey');
		var sort_by = Configuration.get('instagramApi.sortBy');
		var getData = Configuration.get('instagramApi.getData');
		var thumbnail = Configuration.get('instagramApi.getData');
		var responsiveData = Configuration.get('instagramApi.Resopnsiveness');
		var responsive = $.map(responsiveData,(x)=>{
			var object = {
				breakpoint:x.breakpoint,
				settings:{
					slidesToShow: x.slidesToShow,
					slidesToScroll: x.slidesToScroll,
				}
			}
			return object;
		 });

		 var sliderSetting = {
			 dots:Configuration.get('instagramApi.sliderDots'),
			 infinite: Configuration.get('instagramApi.infinite'),
			 slidesToShow:Configuration.get('instagramApi.slidesToShow'),
			 slidesToScroll: Configuration.get('instagramApi.slidesToScroll'),
			 arrows: Configuration.get('instagramApi.arrow'),
			 adaptiveHeight: Configuration.get('instagramApi.adaptiveHeight'),
			 autoplay: Configuration.get('instagramApi.autoplay'),
			 responsive:responsive
			}
			if(sliderSetting){
				this.sliderSettings =sliderSetting
	  
			  } 
	
			$(()=>{
			var self = this;
			var instafeeda = new Instafeed({
				accessToken: access_token,
				sortBy:sort_by,
				get:getData,
				resolution:thumbnail,
				after: function() {
				
					self.$('.instafeed').slick(sliderSetting);
				},
				template:'<div class="gallery-item" data-username="{{username}}" tabindex="0"><div class="image-section" style="background:url({{image}});background-position: top center;background-size: cover;background-repeat: no-repeat;"><a class="gallery-item-info" href="{{link}}"></a></div></div>'
				
			});
			if ($('#instafeed').length !== 0 ) {
				instafeeda.run();
			}
		});
		
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}
		//@method getContext @return mia.instafeed.instafeedExt.View.Context
	,	getContext: function getContext(data)
		{
			//@class mia.instafeed.instafeedExt.View.Context
			return {
				
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("mia.instafeed.instafeedExt.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/instafeedExt.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("mia.instafeed.instafeedExt.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/instafeedExt/SuiteScript2/instafeedExt.Service.ss"
            ),
            true
        )
});
});


// /* instafeed.js | v2.0.0 | https://github.com/stevenschobert/instafeed.js | License: MIT */
// (function(global, factory) {
//     typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, 
//     global.Instafeed = factory());
//   })(this, function() {
//     "use strict";
define('Instafeed', ['jQuery'], function ($) {
    function assert(val, msg) {
      if (!val) {
        throw new Error(msg);
      }
    }
    function Instafeed(options) {
      assert(!options || typeof options === "object", "options must be an object, got " + options + " (" + typeof options + ")");
      var opts = {
        accessToken: null,
        accessTokenTimeout: 1e4,
        after: null,
        apiTimeout: 1e4,
        apiLimit: null,
        before: null,
        debug: false,
        error: null,
        filter: null,
        limit: null,
        mock: false,
        render: null,
        sort: null,
        success: null,
        target: "instafeed",
        template: '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',
        templateBoundaries: [ "{{", "}}" ],
        transform: null
      };
      var state = {
        running: false,
        node: null,
        token: null,
        paging: null,
        pool: []
      };
      if (options) {
        for (var optKey in opts) {
          if (typeof options[optKey] !== "undefined") {
            opts[optKey] = options[optKey];
          }
        }
      }
      assert(typeof opts.target === "string" || typeof opts.target === "object", "target must be a string or DOM node, got " + opts.target + " (" + typeof opts.target + ")");
      assert(typeof opts.accessToken === "string" || typeof opts.accessToken === "function", "accessToken must be a string or function, got " + opts.accessToken + " (" + typeof opts.accessToken + ")");
      assert(typeof opts.accessTokenTimeout === "number", "accessTokenTimeout must be a number, got " + opts.accessTokenTimeout + " (" + typeof opts.accessTokenTimeout + ")");
      assert(typeof opts.apiTimeout === "number", "apiTimeout must be a number, got " + opts.apiTimeout + " (" + typeof opts.apiTimeout + ")");
      assert(typeof opts.debug === "boolean", "debug must be true or false, got " + opts.debug + " (" + typeof opts.debug + ")");
      assert(typeof opts.mock === "boolean", "mock must be true or false, got " + opts.mock + " (" + typeof opts.mock + ")");
      assert(typeof opts.templateBoundaries === "object" && opts.templateBoundaries.length === 2 && typeof opts.templateBoundaries[0] === "string" && typeof opts.templateBoundaries[1] === "string", "templateBoundaries must be an array of 2 strings, got " + opts.templateBoundaries + " (" + typeof opts.templateBoundaries + ")");
      assert(!opts.template || typeof opts.template === "string", "template must null or string, got " + opts.template + " (" + typeof opts.template + ")");
      assert(!opts.error || typeof opts.error === "function", "error must be null or function, got " + opts.error + " (" + typeof opts.error + ")");
      assert(!opts.before || typeof opts.before === "function", "before must be null or function, got " + opts.before + " (" + typeof opts.before + ")");
      assert(!opts.after || typeof opts.after === "function", "after must be null or function, got " + opts.after + " (" + typeof opts.after + ")");
      assert(!opts.success || typeof opts.success === "function", "success must be null or function, got " + opts.success + " (" + typeof opts.success + ")");
      assert(!opts.filter || typeof opts.filter === "function", "filter must be null or function, got " + opts.filter + " (" + typeof opts.filter + ")");
      assert(!opts.transform || typeof opts.transform === "function", "transform must be null or function, got " + opts.transform + " (" + typeof opts.transform + ")");
      assert(!opts.sort || typeof opts.sort === "function", "sort must be null or function, got " + opts.sort + " (" + typeof opts.sort + ")");
      assert(!opts.render || typeof opts.render === "function", "render must be null or function, got " + opts.render + " (" + typeof opts.render + ")");
      assert(!opts.limit || typeof opts.limit === "number", "limit must be null or number, got " + opts.limit + " (" + typeof opts.limit + ")");
      assert(!opts.apiLimit || typeof opts.apiLimit === "number", "apiLimit must null or number, got " + opts.apiLimit + " (" + typeof opts.apiLimit + ")");
      this._state = state;
      this._options = opts;
    }
    Instafeed.prototype.run = function run() {
      var scope = this;
      this._debug("run", "options", this._options);
      this._debug("run", "state", this._state);
      if (this._state.running) {
        this._debug("run", "already running, skipping");
        return false;
      }
      this._start();
      this._debug("run", "getting dom node");
      if (typeof this._options.target === "string") {
        this._state.node = document.getElementById(this._options.target);
      } else {
        this._state.node = this._options.target;
      }
      if (!this._state.node) {
        this._fail(new Error("no element found with ID " + this._options.target));
        return false;
      }
      this._debug("run", "got dom node", this._state.node);
      this._debug("run", "getting access token");
      this._getAccessToken(function onTokenReceived(err, token) {
        if (err) {
          scope._debug("onTokenReceived", "error", err);
          scope._fail(new Error("error getting access token: " + err.message));
          return;
        }
        scope._debug("onTokenReceived", "got token", token);
        scope._state.token = token;
        scope._showNext(function onNextShown(err) {
          if (err) {
            scope._debug("onNextShown", "error", err);
            scope._fail(err);
            return;
          }
          scope._finish();
        });
      });
      return true;
    };
    Instafeed.prototype.hasNext = function hasNext() {
      var paging = this._state.paging;
      var pool = this._state.pool;
      this._debug("hasNext", "paging", paging);
      this._debug("hasNext", "pool", pool.length, pool);
      return pool.length > 0 || paging && typeof paging.next === "string";
    };
    Instafeed.prototype.next = function next() {
      var scope = this;
      if (!scope.hasNext()) {
        scope._debug("next", "hasNext is false, skipping");
        return false;
      }
      if (scope._state.running) {
        scope._debug("next", "already running, skipping");
        return false;
      }
      scope._start();
      scope._showNext(function onNextShown(err) {
        if (err) {
          scope._debug("onNextShown", "error", err);
          scope._fail(err);
          return;
        }
        scope._finish();
      });
    };
    Instafeed.prototype._showNext = function showNext(callback) {
      var scope = this;
      var url = null;
      var poolItems = null;
      var hasLimit = typeof this._options.limit === "number";
      scope._debug("showNext", "pool", scope._state.pool.length, scope._state.pool);
      if (scope._state.pool.length > 0) {
        if (hasLimit) {
          poolItems = scope._state.pool.splice(0, scope._options.limit);
        } else {
          poolItems = scope._state.pool.splice(0);
        }
        scope._debug("showNext", "items from pool", poolItems.length, poolItems);
        scope._debug("showNext", "updated pool", scope._state.pool.length, scope._state.pool);
        if (scope._options.mock) {
          scope._debug("showNext", "mock enabled, skipping render");
        } else {
          try {
            scope._renderData(poolItems);
          } catch (renderErr) {
            callback(renderErr);
            return;
          }
        }
        callback(null);
      } else {
        if (scope._state.paging && typeof scope._state.paging.next === "string") {
          url = scope._state.paging.next;
        } else {
          url = "https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=" + scope._state.token;
          if (!scope._options.apiLimit && typeof scope._options.limit === "number") {
            scope._debug("showNext", "no apiLimit set, falling back to limit", scope._options.apiLimit, scope._options.limit);
            url = url + "&limit=" + scope._options.limit;
          } else if (typeof scope._options.apiLimit === "number") {
            scope._debug("showNext", "apiLimit set, overriding limit", scope._options.apiLimit, scope._options.limit);
            url = url + "&limit=" + scope._options.apiLimit;
          }
        }
        scope._debug("showNext", "making request", url);
        scope._makeApiRequest(url, function onResponseReceived(err, data) {
          var processed = null;
          if (err) {
            scope._debug("onResponseReceived", "error", err);
            callback(new Error("api request error: " + err.message));
            return;
          }
          scope._debug("onResponseReceived", "data", data);
          scope._success(data);
          scope._debug("onResponseReceived", "setting paging", data.paging);
          scope._state.paging = data.paging;
          try {
            processed = scope._processData(data);
            scope._debug("onResponseReceived", "processed data", processed);
            if (processed.unused && processed.unused.length > 0) {
              scope._debug("onResponseReceived", "saving unused to pool", processed.unused.length, processed.unused);
              for (var i = 0; i < processed.unused.length; i++) {
                scope._state.pool.push(processed.unused[i]);
              }
            }
          } catch (processErr) {
            callback(processErr);
            return;
          }
          if (scope._options.mock) {
            scope._debug("onResponseReceived", "mock enabled, skipping append");
          } else {
            try {
              scope._renderData(processed.items);
            } catch (renderErr) {
              callback(renderErr);
              return;
            }
          }
          callback(null);
        });
      }
    };
    Instafeed.prototype._processData = function processData(data) {
      var hasTransform = typeof this._options.transform === "function";
      var hasFilter = typeof this._options.filter === "function";
      var hasSort = typeof this._options.sort === "function";
      var hasLimit = typeof this._options.limit === "number";
      var transformedFiltered = [];
      var limitDelta = null;
      var dataItem = null;
      var transformedItem = null;
      var filterResult = null;
      var unusedItems = null;
      this._debug("processData", "hasFilter", hasFilter, "hasTransform", hasTransform, "hasSort", hasSort, "hasLimit", hasLimit);
      if (typeof data !== "object" || typeof data.data !== "object" || data.data.length <= 0) {
        return null;
      }
      for (var i = 0; i < data.data.length; i++) {
        dataItem = this._getItemData(data.data[i]);
        if (hasTransform) {
          try {
            transformedItem = this._options.transform(dataItem);
            this._debug("processData", "transformed item", dataItem, transformedItem);
          } catch (err) {
            this._debug("processData", "error calling transform", err);
            throw new Error("error in transform: " + err.message);
          }
        } else {
          transformedItem = dataItem;
        }
        if (hasFilter) {
          try {
            filterResult = this._options.filter(transformedItem);
            this._debug("processData", "filter item result", transformedItem, filterResult);
          } catch (err) {
            this._debug("processData", "error calling filter", err);
            throw new Error("error in filter: " + err.message);
          }
          if (filterResult) {
            transformedFiltered.push(transformedItem);
          }
        } else {
          transformedFiltered.push(transformedItem);
        }
      }
      if (hasSort) {
        try {
          transformedFiltered.sort(this._options.sort);
        } catch (err) {
          this._debug("processData", "error calling sort", err);
          throw new Error("error in sort: " + err.message);
        }
      }
      if (hasLimit) {
        limitDelta = transformedFiltered.length - this._options.limit;
        this._debug("processData", "checking limit", transformedFiltered.length, this._options.limit, limitDelta);
        if (limitDelta > 0) {
          unusedItems = transformedFiltered.slice(transformedFiltered.length - limitDelta);
          this._debug("processData", "unusedItems", unusedItems.length, unusedItems);
          transformedFiltered.splice(transformedFiltered.length - limitDelta, limitDelta);
        }
      }
      return {
        items: transformedFiltered,
        unused: unusedItems
      };
    };
    Instafeed.prototype._extractTags = function extractTags(str) {
      var exp = /#([^\s]+)/gi;
      var badChars = /[~`!@#$%^&*\(\)\-\+={}\[\]:;"'<>\?,\./|\\\s]+/i;
      var tags = [];
      var match = null;
      if (typeof str === "string") {
        while ((match = exp.exec(str)) !== null) {
          if (badChars.test(match[1]) === false) {
            tags.push(match[1]);
          }
        }
      }
      return tags;
    };
    Instafeed.prototype._getItemData = function getItemData(data) {
      var type = null;
      var image = null;
      switch (data.media_type) {
       case "IMAGE":
        type = "image";
        image = data.media_url;
        break;
  
       case "VIDEO":
        type = "video";
        image = data.thumbnail_url;
        break;
  
       case "CAROUSEL_ALBUM":
        type = "album";
        image = data.media_url;
        break;
      }
      return {
        caption: data.caption,
        tags: this._extractTags(data.caption),
        id: data.id,
        image: image,
        link: data.permalink,
        model: data,
        timestamp: data.timestamp,
        type: type,
        username: data.username
      };
    };
    Instafeed.prototype._renderData = function renderData(items) {
      var hasTemplate = typeof this._options.template === "string";
      var hasRender = typeof this._options.render === "function";
      var item = null;
      var itemHtml = null;
      var container = null;
      var html = "";
      this._debug("renderData", "hasTemplate", hasTemplate, "hasRender", hasRender);
      if (typeof items !== "object" || items.length <= 0) {
        return;
      }
      for (var i = 0; i < items.length; i++) {
        item = items[i];
        if (hasRender) {
          try {
            itemHtml = this._options.render(item, this._options);
            this._debug("renderData", "custom render result", item, itemHtml);
          } catch (err) {
            this._debug("renderData", "error calling render", err);
            throw new Error("error in render: " + err.message);
          }
        } else if (hasTemplate) {
          itemHtml = this._basicRender(item);
        }
        if (itemHtml) {
          html = html + itemHtml;
        } else {
          this._debug("renderData", "render item did not return any content", item);
        }
      }
      this._debug("renderData", "html content", html);
      container = document.createElement("div");
      container.innerHTML = html;
      this._debug("renderData", "container", container, container.childNodes.length, container.childNodes);
      while (container.childNodes.length > 0) {
        this._debug("renderData", "appending child", container.childNodes[0]);
        this._state.node.appendChild(container.childNodes[0]);
      }
    };
    Instafeed.prototype._basicRender = function basicRender(data) {
      var exp = new RegExp(this._options.templateBoundaries[0] + "([\\s\\w.]+)" + this._options.templateBoundaries[1], "gm");
      var template = this._options.template;
      var match = null;
      var output = "";
      var substr = null;
      var lastIndex = 0;
      var keyPath = null;
      var keyPathValue = null;
      while ((match = exp.exec(template)) !== null) {
        keyPath = match[1];
        substr = template.slice(lastIndex, match.index);
        output = output + substr;
        keyPathValue = this._valueForKeyPath(keyPath, data);
        if (keyPathValue) {
          output = output + keyPathValue.toString();
        }
        lastIndex = exp.lastIndex;
      }
      if (lastIndex < template.length) {
        substr = template.slice(lastIndex, template.length);
        output = output + substr;
      }
      return output;
    };
    Instafeed.prototype._valueForKeyPath = function valueForKeyPath(keyPath, data) {
      var exp = /([\w]+)/gm;
      var match = null;
      var key = null;
      var lastValue = data;
      while ((match = exp.exec(keyPath)) !== null) {
        if (typeof lastValue !== "object") {
          return null;
        }
        key = match[1];
        lastValue = lastValue[key];
      }
      return lastValue;
    };
    Instafeed.prototype._fail = function fail(err) {
      var didHook = this._runHook("error", err);
      if (!didHook && console && typeof console.error === "function") {
        console.error(err);
      }
      this._state.running = false;
    };
    Instafeed.prototype._start = function start() {
      this._state.running = true;
      this._runHook("before");
    };
    Instafeed.prototype._finish = function finish() {
      this._runHook("after");
      this._state.running = false;
    };
    Instafeed.prototype._success = function success(data) {
      this._runHook("success", data);
      this._state.running = false;
    };
    Instafeed.prototype._makeApiRequest = function makeApiRequest(url, callback) {
      var called = false;
      var scope = this;
      var apiRequest = null;
      var callbackOnce = function callbackOnce(err, value) {
        if (!called) {
          called = true;
          callback(err, value);
        }
      };
      apiRequest = new XMLHttpRequest();
      apiRequest.ontimeout = function apiRequestTimedOut() {
        callbackOnce(new Error("api request timed out"));
      };
      apiRequest.onerror = function apiRequestOnError() {
        callbackOnce(new Error("api connection error"));
      };
      apiRequest.onload = function apiRequestOnLoad(event) {
        var contentType = apiRequest.getResponseHeader("Content-Type");
        var responseJson = null;
        scope._debug("apiRequestOnLoad", "loaded", event);
        scope._debug("apiRequestOnLoad", "response status", apiRequest.status);
        scope._debug("apiRequestOnLoad", "response content type", contentType);
        if (contentType.indexOf("application/json") >= 0) {
          try {
            responseJson = JSON.parse(apiRequest.responseText);
          } catch (err) {
            scope._debug("apiRequestOnLoad", "json parsing error", err, apiRequest.responseText);
            callbackOnce(new Error("error parsing response json"));
            return;
          }
        }
        if (apiRequest.status !== 200) {
          if (responseJson && responseJson.error) {
            callbackOnce(new Error(responseJson.error.code + " " + responseJson.error.message));
          } else {
            callbackOnce(new Error("status code " + apiRequest.status));
          }
          return;
        }
        callbackOnce(null, responseJson);
      };
      apiRequest.open("GET", url, true);
      apiRequest.timeout = this._options.apiTimeout;
      apiRequest.send();
    };
    Instafeed.prototype._getAccessToken = function getAccessToken(callback) {
      var called = false;
      var scope = this;
      var timeoutCheck = null;
      var callbackOnce = function callbackOnce(err, value) {
        if (!called) {
          called = true;
          clearTimeout(timeoutCheck);
          callback(err, value);
        }
      };
      if (typeof this._options.accessToken === "function") {
        this._debug("getAccessToken", "calling accessToken as function");
        timeoutCheck = setTimeout(function accessTokenTimeoutCheck() {
          scope._debug("getAccessToken", "timeout check", called);
          callbackOnce(new Error("accessToken timed out"), null);
        }, this._options.accessTokenTimeout);
        try {
          this._options.accessToken(function accessTokenReceiver(err, value) {
            scope._debug("getAccessToken", "received accessToken callback", called, err, value);
            callbackOnce(err, value);
          });
        } catch (err) {
          this._debug("getAccessToken", "error invoking the accessToken as function", err);
          callbackOnce(err, null);
        }
      } else {
        this._debug("getAccessToken", "treating accessToken as static", typeof this._options.accessToken);
        callbackOnce(null, this._options.accessToken);
      }
    };
    Instafeed.prototype._debug = function debug() {
      var args = null;
      if (this._options.debug && console && typeof console.log === "function") {
        args = [].slice.call(arguments);
        args[0] = "[Instafeed] [" + args[0] + "]";
        console.log.apply(null, args);
      }
    };
    Instafeed.prototype._runHook = function runHook(hookName, data) {
      var success = false;
      if (typeof this._options[hookName] === "function") {
        try {
          this._options[hookName](data);
          success = true;
        } catch (err) {
          this._debug("runHook", "error calling hook", hookName, err);
        }
      }
      return success;
    };
    return Instafeed;
  });

 /*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */

define('jquery.slick', ['jQuery'], function ($) {
    var Slick = window.Slick || {};
  
    Slick = (function() {
  
        var instanceUid = 0;
  
        function Slick(element, settings) {
  
            var _ = this, dataSettings;
  
            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next " aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };
  
            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };
  
            $.extend(_, _.initials);
  
            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;
  
            dataSettings = $(element).data('slick') || {};
  
            _.options = $.extend({}, _.defaults, settings, dataSettings);
  
            _.currentSlide = _.options.initialSlide;
  
            _.originalSettings = _.options;
  
            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }
  
            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
  
            _.instanceUid = instanceUid++;
  
            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
  
  
            _.registerBreakpoints();
            _.init(true);
  
        }
  
        return Slick;
  
    }());
  
    Slick.prototype.activateADA = function() {
        var _ = this;
  
        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });
  
    };
  
    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
  
        var _ = this;
  
        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }
  
        _.unload();
  
        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }
  
        _.$slides = _.$slideTrack.children(this.options.slide);
  
        _.$slideTrack.children(this.options.slide).detach();
  
        _.$slideTrack.append(_.$slides);
  
        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });
  
        _.$slidesCache = _.$slides;
  
        _.reinit();
  
    };
  
    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };
  
    Slick.prototype.animateSlide = function(targetLeft, callback) {
  
        var animProps = {},
            _ = this;
  
        _.animateHeight();
  
        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }
  
        } else {
  
            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });
  
            } else {
  
                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);
  
                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);
  
                if (callback) {
                    setTimeout(function() {
  
                        _.disableTransition();
  
                        callback.call();
                    }, _.options.speed);
                }
  
            }
  
        }
  
    };
  
    Slick.prototype.getNavTarget = function() {
  
        var _ = this,
            asNavFor = _.options.asNavFor;
  
        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }
  
        return asNavFor;
  
    };
  
    Slick.prototype.asNavFor = function(index) {
  
        var _ = this,
            asNavFor = _.getNavTarget();
  
        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
  
    };
  
    Slick.prototype.applyTransition = function(slide) {
  
        var _ = this,
            transition = {};
  
        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }
  
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
  
    };
  
    Slick.prototype.autoPlay = function() {
  
        var _ = this;
  
        _.autoPlayClear();
  
        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }
  
    };
  
    Slick.prototype.autoPlayClear = function() {
  
        var _ = this;
  
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
  
    };
  
    Slick.prototype.autoPlayIterator = function() {
  
        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;
  
        if ( !_.paused && !_.interrupted && !_.focussed ) {
  
            if ( _.options.infinite === false ) {
  
                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }
  
                else if ( _.direction === 0 ) {
  
                    slideTo = _.currentSlide - _.options.slidesToScroll;
  
                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }
  
                }
  
            }
  
            _.slideHandler( slideTo );
  
        }
  
    };
  
    Slick.prototype.buildArrows = function() {
  
        var _ = this;
  
        if (_.options.arrows === true ) {
  
            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
  
            if( _.slideCount > _.options.slidesToShow ) {
  
                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
  
                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }
  
                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }
  
                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }
  
            } else {
  
                _.$prevArrow.add( _.$nextArrow )
  
                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });
  
            }
  
        }
  
    };
  
    Slick.prototype.buildDots = function() {
  
        var _ = this,
            i, dot;
  
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
  
            _.$slider.addClass('slick-dotted');
  
            dot = $('<ul />').addClass(_.options.dotsClass);
  
            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }
  
            _.$dots = dot.appendTo(_.options.appendDots);
  
            _.$dots.find('li').first().addClass('slick-active');
  
        }
  
    };
  
    Slick.prototype.buildOut = function() {
  
        var _ = this;
  
        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');
  
        _.slideCount = _.$slides.length;
  
        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });
  
        _.$slider.addClass('slick-slider');
  
        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();
  
        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);
  
        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }
  
        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
  
        _.setupInfinite();
  
        _.buildArrows();
  
        _.buildDots();
  
        _.updateDots();
  
  
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
  
        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }
  
    };
  
    Slick.prototype.buildRows = function() {
  
        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;
  
        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();
  
        if(_.options.rows > 0) {
  
            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );
  
            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }
  
            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });
  
        }
  
    };
  
    Slick.prototype.checkResponsive = function(initial, forceUpdate) {
  
        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();
  
        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }
  
        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {
  
            targetBreakpoint = null;
  
            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }
  
            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }
  
            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }
  
    };
  
    Slick.prototype.changeSlide = function(event, dontAnimate) {
  
        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;
  
        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }
  
        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }
  
        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
  
        switch (event.data.message) {
  
            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;
  
            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;
  
            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;
  
                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;
  
            default:
                return;
        }
  
    };
  
    Slick.prototype.checkNavigable = function(index) {
  
        var _ = this,
            navigables, prevNavigable;
  
        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }
  
        return index;
    };
  
    Slick.prototype.cleanUpEvents = function() {
  
        var _ = this;
  
        if (_.options.dots && _.$dots !== null) {
  
            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  
            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }
  
        _.$slider.off('focus.slick blur.slick');
  
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
  
            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }
  
        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
  
        _.$list.off('click.slick', _.clickHandler);
  
        $(document).off(_.visibilityChange, _.visibility);
  
        _.cleanUpSlideEvents();
  
        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }
  
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }
  
        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
  
        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
  
        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
  
        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
  
    };
  
    Slick.prototype.cleanUpSlideEvents = function() {
  
        var _ = this;
  
        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  
    };
  
    Slick.prototype.cleanUpRows = function() {
  
        var _ = this, originalSlides;
  
        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }
  
    };
  
    Slick.prototype.clickHandler = function(event) {
  
        var _ = this;
  
        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
  
    };
  
    Slick.prototype.destroy = function(refresh) {
  
        var _ = this;
  
        _.autoPlayClear();
  
        _.touchObject = {};
  
        _.cleanUpEvents();
  
        $('.slick-cloned', _.$slider).detach();
  
        if (_.$dots) {
            _.$dots.remove();
        }
  
        if ( _.$prevArrow && _.$prevArrow.length ) {
  
            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');
  
            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }
  
        if ( _.$nextArrow && _.$nextArrow.length ) {
  
            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');
  
            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }
  
  
        if (_.$slides) {
  
            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });
  
            _.$slideTrack.children(this.options.slide).detach();
  
            _.$slideTrack.detach();
  
            _.$list.detach();
  
            _.$slider.append(_.$slides);
        }
  
        _.cleanUpRows();
  
        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');
  
        _.unslicked = true;
  
        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }
  
    };
  
    Slick.prototype.disableTransition = function(slide) {
  
        var _ = this,
            transition = {};
  
        transition[_.transitionType] = '';
  
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
  
    };
  
    Slick.prototype.fadeSlide = function(slideIndex, callback) {
  
        var _ = this;
  
        if (_.cssTransitions === false) {
  
            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });
  
            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);
  
        } else {
  
            _.applyTransition(slideIndex);
  
            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });
  
            if (callback) {
                setTimeout(function() {
  
                    _.disableTransition(slideIndex);
  
                    callback.call();
                }, _.options.speed);
            }
  
        }
  
    };
  
    Slick.prototype.fadeSlideOut = function(slideIndex) {
  
        var _ = this;
  
        if (_.cssTransitions === false) {
  
            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
  
        } else {
  
            _.applyTransition(slideIndex);
  
            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });
  
        }
  
    };
  
    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
  
        var _ = this;
  
        if (filter !== null) {
  
            _.$slidesCache = _.$slides;
  
            _.unload();
  
            _.$slideTrack.children(this.options.slide).detach();
  
            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
  
            _.reinit();
  
        }
  
    };
  
    Slick.prototype.focusHandler = function() {
  
        var _ = this;
  
        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {
  
            event.stopImmediatePropagation();
            var $sf = $(this);
  
            setTimeout(function() {
  
                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }
  
            }, 0);
  
        });
    };
  
    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
  
        var _ = this;
        return _.currentSlide;
  
    };
  
    Slick.prototype.getDotCount = function() {
  
        var _ = this;
  
        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;
  
        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }
  
        return pagerQty - 1;
  
    };
  
    Slick.prototype.getLeft = function(slideIndex) {
  
        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;
  
        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);
  
        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1
  
                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }
  
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }
  
        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }
  
        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }
  
        if (_.options.variableWidth === true) {
  
            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }
  
            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }
  
            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }
  
                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }
  
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }
  
        return targetLeft;
  
    };
  
    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
  
        var _ = this;
  
        return _.options[option];
  
    };
  
    Slick.prototype.getNavigableIndexes = function() {
  
        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;
  
        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }
  
        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
  
        return indexes;
  
    };
  
    Slick.prototype.getSlick = function() {
  
        return this;
  
    };
  
    Slick.prototype.getSlideCount = function() {
  
        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;
  
        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
  
        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });
  
            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
  
            return slidesTraversed;
  
        } else {
            return _.options.slidesToScroll;
        }
  
    };
  
    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
  
        var _ = this;
  
        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);
  
    };
  
    Slick.prototype.init = function(creation) {
  
        var _ = this;
  
        if (!$(_.$slider).hasClass('slick-initialized')) {
  
            $(_.$slider).addClass('slick-initialized');
  
            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
  
        }
  
        if (creation) {
            _.$slider.trigger('init', [_]);
        }
  
        if (_.options.accessibility === true) {
            _.initADA();
        }
  
        if ( _.options.autoplay ) {
  
            _.paused = false;
            _.autoPlay();
  
        }
  
    };
  
    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });
  
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });
  
        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);
  
                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });
  
                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });
  
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];
  
                $(this).attr({
                    'role': 'presentation'
                });
  
                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });
  
            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }
  
        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }
  
        _.activateADA();
  
    };
  
    Slick.prototype.initArrowEvents = function() {
  
        var _ = this;
  
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);
  
            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }
  
    };
  
    Slick.prototype.initDotEvents = function() {
  
        var _ = this;
  
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
  
            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }
  
        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
  
            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));
  
        }
  
    };
  
    Slick.prototype.initSlideEvents = function() {
  
        var _ = this;
  
        if ( _.options.pauseOnHover ) {
  
            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
  
        }
  
    };
  
    Slick.prototype.initializeEvents = function() {
  
        var _ = this;
  
        _.initArrowEvents();
  
        _.initDotEvents();
        _.initSlideEvents();
  
        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);
  
        _.$list.on('click.slick', _.clickHandler);
  
        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
  
        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }
  
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }
  
        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
  
        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
  
        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
  
        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);
  
    };
  
    Slick.prototype.initUI = function() {
  
        var _ = this;
  
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
  
            _.$prevArrow.show();
            _.$nextArrow.show();
  
        }
  
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
  
            _.$dots.show();
  
        }
  
    };
  
    Slick.prototype.keyHandler = function(event) {
  
        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }
  
    };
  
    Slick.prototype.lazyLoad = function() {
  
        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;
  
        function loadImages(imagesScope) {
  
            $('img[data-lazy]', imagesScope).each(function() {
  
                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');
  
                imageToLoad.onload = function() {
  
                    image
                        .animate({ opacity: 0 }, 100, function() {
  
                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );
  
                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }
  
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });
  
                };
  
                imageToLoad.onerror = function() {
  
                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );
  
                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
  
                };
  
                imageToLoad.src = imageSource;
  
            });
  
        }
  
        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }
  
        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
  
        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');
  
            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }
  
        loadImages(loadRange);
  
        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
  
    };
  
    Slick.prototype.loadSlider = function() {
  
        var _ = this;
  
        _.setPosition();
  
        _.$slideTrack.css({
            opacity: 1
        });
  
        _.$slider.removeClass('slick-loading');
  
        _.initUI();
  
        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
  
    };
  
    Slick.prototype.next = Slick.prototype.slickNext = function() {
  
        var _ = this;
  
        _.changeSlide({
            data: {
                message: 'next'
            }
        });
  
    };
  
    Slick.prototype.orientationChange = function() {
  
        var _ = this;
  
        _.checkResponsive();
        _.setPosition();
  
    };
  
    Slick.prototype.pause = Slick.prototype.slickPause = function() {
  
        var _ = this;
  
        _.autoPlayClear();
        _.paused = true;
  
    };
  
    Slick.prototype.play = Slick.prototype.slickPlay = function() {
  
        var _ = this;
  
        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
  
    };
  
    Slick.prototype.postSlide = function(index) {
  
        var _ = this;
  
        if( !_.unslicked ) {
  
            _.$slider.trigger('afterChange', [_, index]);
  
            _.animating = false;
  
            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }
  
            _.swipeLeft = null;
  
            if ( _.options.autoplay ) {
                _.autoPlay();
            }
  
            if (_.options.accessibility === true) {
                _.initADA();
  
                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }
  
        }
  
    };
  
    Slick.prototype.prev = Slick.prototype.slickPrev = function() {
  
        var _ = this;
  
        _.changeSlide({
            data: {
                message: 'previous'
            }
        });
  
    };
  
    Slick.prototype.preventDefault = function(event) {
  
        event.preventDefault();
  
    };
  
    Slick.prototype.progressiveLazyLoad = function( tryCount ) {
  
        tryCount = tryCount || 1;
  
        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;
  
        if ( $imgsToLoad.length ) {
  
            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');
  
            imageToLoad.onload = function() {
  
                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );
  
                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }
  
                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');
  
                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }
  
                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();
  
            };
  
            imageToLoad.onerror = function() {
  
                if ( tryCount < 3 ) {
  
                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );
  
                } else {
  
                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );
  
                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
  
                    _.progressiveLazyLoad();
  
                }
  
            };
  
            imageToLoad.src = imageSource;
  
        } else {
  
            _.$slider.trigger('allImagesLoaded', [ _ ]);
  
        }
  
    };
  
    Slick.prototype.refresh = function( initializing ) {
  
        var _ = this, currentSlide, lastVisibleIndex;
  
        lastVisibleIndex = _.slideCount - _.options.slidesToShow;
  
        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }
  
        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;
  
        }
  
        currentSlide = _.currentSlide;
  
        _.destroy(true);
  
        $.extend(_, _.initials, { currentSlide: currentSlide });
  
        _.init();
  
        if( !initializing ) {
  
            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);
  
        }
  
    };
  
    Slick.prototype.registerBreakpoints = function() {
  
        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;
  
        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {
  
            _.respondTo = _.options.respondTo || 'window';
  
            for ( breakpoint in responsiveSettings ) {
  
                l = _.breakpoints.length-1;
  
                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
  
                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }
  
                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
  
                }
  
            }
  
            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });
  
        }
  
    };
  
    Slick.prototype.reinit = function() {
  
        var _ = this;
  
        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');
  
        _.slideCount = _.$slides.length;
  
        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }
  
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }
  
        _.registerBreakpoints();
  
        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();
  
        _.checkResponsive(false, true);
  
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }
  
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
  
        _.setPosition();
        _.focusHandler();
  
        _.paused = !_.options.autoplay;
        _.autoPlay();
  
        _.$slider.trigger('reInit', [_]);
  
    };
  
    Slick.prototype.resize = function() {
  
        var _ = this;
  
        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };
  
    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
  
        var _ = this;
  
        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }
  
        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }
  
        _.unload();
  
        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }
  
        _.$slides = _.$slideTrack.children(this.options.slide);
  
        _.$slideTrack.children(this.options.slide).detach();
  
        _.$slideTrack.append(_.$slides);
  
        _.$slidesCache = _.$slides;
  
        _.reinit();
  
    };
  
    Slick.prototype.setCSS = function(position) {
  
        var _ = this,
            positionProps = {},
            x, y;
  
        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
  
        positionProps[_.positionProp] = position;
  
        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
  
    };
  
    Slick.prototype.setDimensions = function() {
  
        var _ = this;
  
        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }
  
        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();
  
  
        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
  
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }
  
        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  
    };
  
    Slick.prototype.setFade = function() {
  
        var _ = this,
            targetLeft;
  
        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });
  
        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
  
    };
  
    Slick.prototype.setHeight = function() {
  
        var _ = this;
  
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
  
    };
  
    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {
  
        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */
  
        var _ = this, l, item, option, value, refresh = false, type;
  
        if( $.type( arguments[0] ) === 'object' ) {
  
            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';
  
        } else if ( $.type( arguments[0] ) === 'string' ) {
  
            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];
  
            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {
  
                type = 'responsive';
  
            } else if ( typeof arguments[1] !== 'undefined' ) {
  
                type = 'single';
  
            }
  
        }
  
        if ( type === 'single' ) {
  
            _.options[option] = value;
  
  
        } else if ( type === 'multiple' ) {
  
            $.each( option , function( opt, val ) {
  
                _.options[opt] = val;
  
            });
  
  
        } else if ( type === 'responsive' ) {
  
            for ( item in value ) {
  
                if( $.type( _.options.responsive ) !== 'array' ) {
  
                    _.options.responsive = [ value[item] ];
  
                } else {
  
                    l = _.options.responsive.length-1;
  
                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {
  
                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
  
                            _.options.responsive.splice(l,1);
  
                        }
  
                        l--;
  
                    }
  
                    _.options.responsive.push( value[item] );
  
                }
  
            }
  
        }
  
        if ( refresh ) {
  
            _.unload();
            _.reinit();
  
        }
  
    };
  
    Slick.prototype.setPosition = function() {
  
        var _ = this;
  
        _.setDimensions();
  
        _.setHeight();
  
        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }
  
        _.$slider.trigger('setPosition', [_]);
  
    };
  
    Slick.prototype.setProps = function() {
  
        var _ = this,
            bodyStyle = document.body.style;
  
        _.positionProp = _.options.vertical === true ? 'top' : 'left';
  
        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }
  
        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }
  
        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }
  
        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };
  
  
    Slick.prototype.setSlideClasses = function(index) {
  
        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;
  
        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');
  
        _.$slides
            .eq(index)
            .addClass('slick-current');
  
        if (_.options.centerMode === true) {
  
            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
  
            centerOffset = Math.floor(_.options.slidesToShow / 2);
  
            if (_.options.infinite === true) {
  
                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');
  
                } else {
  
                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');
  
                }
  
                if (index === 0) {
  
                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');
  
                } else if (index === _.slideCount - 1) {
  
                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');
  
                }
  
            }
  
            _.$slides
                .eq(index)
                .addClass('slick-center');
  
        } else {
  
            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
  
                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');
  
            } else if (allSlides.length <= _.options.slidesToShow) {
  
                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');
  
            } else {
  
                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
  
                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
  
                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');
  
                } else {
  
                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');
  
                }
  
            }
  
        }
  
        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };
  
    Slick.prototype.setupInfinite = function() {
  
        var _ = this,
            i, slideIndex, infiniteCount;
  
        if (_.options.fade === true) {
            _.options.centerMode = false;
        }
  
        if (_.options.infinite === true && _.options.fade === false) {
  
            slideIndex = null;
  
            if (_.slideCount > _.options.slidesToShow) {
  
                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }
  
                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });
  
            }
  
        }
  
    };
  
    Slick.prototype.interrupt = function( toggle ) {
  
        var _ = this;
  
        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;
  
    };
  
    Slick.prototype.selectHandler = function(event) {
  
        var _ = this;
  
        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');
  
        var index = parseInt(targetElement.attr('data-slick-index'));
  
        if (!index) index = 0;
  
        if (_.slideCount <= _.options.slidesToShow) {
  
            _.slideHandler(index, false, true);
            return;
  
        }
  
        _.slideHandler(index);
  
    };
  
    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
  
        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;
  
        sync = sync || false;
  
        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }
  
        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }
  
        if (sync === false) {
            _.asNavFor(index);
        }
  
        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);
  
        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
  
        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }
  
        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }
  
        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }
  
        _.animating = true;
  
        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
  
        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;
  
        _.setSlideClasses(_.currentSlide);
  
        if ( _.options.asNavFor ) {
  
            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');
  
            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }
  
        }
  
        _.updateDots();
        _.updateArrows();
  
        if (_.options.fade === true) {
            if (dontAnimate !== true) {
  
                _.fadeSlideOut(oldSlide);
  
                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });
  
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }
  
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
  
    };
  
    Slick.prototype.startLoad = function() {
  
        var _ = this;
  
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
  
            _.$prevArrow.hide();
            _.$nextArrow.hide();
  
        }
  
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
  
            _.$dots.hide();
  
        }
  
        _.$slider.addClass('slick-loading');
  
    };
  
    Slick.prototype.swipeDirection = function() {
  
        var xDist, yDist, r, swipeAngle, _ = this;
  
        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);
  
        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }
  
        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }
  
        return 'vertical';
  
    };
  
    Slick.prototype.swipeEnd = function(event) {
  
        var _ = this,
            slideCount,
            direction;
  
        _.dragging = false;
        _.swiping = false;
  
        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }
  
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;
  
        if ( _.touchObject.curX === undefined ) {
            return false;
        }
  
        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }
  
        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {
  
            direction = _.swipeDirection();
  
            switch ( direction ) {
  
                case 'left':
                case 'down':
  
                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();
  
                    _.currentDirection = 0;
  
                    break;
  
                case 'right':
                case 'up':
  
                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();
  
                    _.currentDirection = 1;
  
                    break;
  
                default:
  
  
            }
  
            if( direction != 'vertical' ) {
  
                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);
  
            }
  
        } else {
  
            if ( _.touchObject.startX !== _.touchObject.curX ) {
  
                _.slideHandler( _.currentSlide );
                _.touchObject = {};
  
            }
  
        }
  
    };
  
    Slick.prototype.swipeHandler = function(event) {
  
        var _ = this;
  
        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }
  
        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;
  
        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;
  
        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }
  
        switch (event.data.action) {
  
            case 'start':
                _.swipeStart(event);
                break;
  
            case 'move':
                _.swipeMove(event);
                break;
  
            case 'end':
                _.swipeEnd(event);
                break;
  
        }
  
    };
  
    Slick.prototype.swipeMove = function(event) {
  
        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;
  
        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
  
        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }
  
        curLeft = _.getLeft(_.currentSlide);
  
        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
  
        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
  
        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
  
        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }
  
        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }
  
        swipeDirection = _.swipeDirection();
  
        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }
  
        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }
  
  
        swipeLength = _.touchObject.swipeLength;
  
        _.touchObject.edgeHit = false;
  
        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }
  
        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }
  
        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }
  
        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }
  
        _.setCSS(_.swipeLeft);
  
    };
  
    Slick.prototype.swipeStart = function(event) {
  
        var _ = this,
            touches;
  
        _.interrupted = true;
  
        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }
  
        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }
  
        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
  
        _.dragging = true;
  
    };
  
    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
  
        var _ = this;
  
        if (_.$slidesCache !== null) {
  
            _.unload();
  
            _.$slideTrack.children(this.options.slide).detach();
  
            _.$slidesCache.appendTo(_.$slideTrack);
  
            _.reinit();
  
        }
  
    };
  
    Slick.prototype.unload = function() {
  
        var _ = this;
  
        $('.slick-cloned', _.$slider).remove();
  
        if (_.$dots) {
            _.$dots.remove();
        }
  
        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }
  
        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }
  
        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');
  
    };
  
    Slick.prototype.unslick = function(fromBreakpoint) {
  
        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();
  
    };
  
    Slick.prototype.updateArrows = function() {
  
        var _ = this,
            centerOffset;
  
        centerOffset = Math.floor(_.options.slidesToShow / 2);
  
        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {
  
            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
  
            if (_.currentSlide === 0) {
  
                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
  
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
  
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
  
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
  
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
  
            }
  
        }
  
    };
  
    Slick.prototype.updateDots = function() {
  
        var _ = this;
  
        if (_.$dots !== null) {
  
            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();
  
            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');
  
        }
  
    };
  
    Slick.prototype.visibility = function() {
  
        var _ = this;
  
        if ( _.options.autoplay ) {
  
            if ( document[_.hidden] ) {
  
                _.interrupted = true;
  
            } else {
  
                _.interrupted = false;
  
            }
  
        }
  
    };
  
    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };
  
  })
  


define(
	'mia.instafeed.instafeedExt'
,   [
		'mia.instafeed.instafeedExt.View'
	]
,   function (
		instafeedExtView
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
			
			if(layout)
			{
				layout.addChildView('instafeed_ext', function() { 
					return new instafeedExtView({ container: container });
				});
			}

		}
	};
});


};

extensions['Demo.RequestShippingAddress.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Demo/RequestShippingAddress/1.0.0/' + asset;
}

// @module Demo.RequestShippingAddress.RequestShippingAddressModule
define('Demo.RequestShippingAddress.RequestShippingAddressModule.View'
,	[
	'demo_requestshippingaddress_requestshippingaddressmodule.tpl'
	
	// ,	'Demo.RequestShippingAddress.RequestShippingAddressModule.SS2Model'

	,   'Demo.RequestShippingAddress.RequestShippingAddressModule.Model'

	,	'Backbone'

	,  'SC.Configuration'

	,  'Profile.Model'

	, 
    ]
, function (
	demo_requestshippingaddress_requestshippingaddressmodule_tpl
	
	// ,	RequestShippingAddressModuleSS2Model

	,   RequestShippingAddressModuleModel
	
	,	Backbone

	,  Configuration

	,  ProfileModel
)
{
    'use strict';

	// @class Demo.RequestShippingAddress.RequestShippingAddressModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: demo_requestshippingaddress_requestshippingaddressmodule_tpl


	,	initialize: function (options) {
		var self = this;
		this.profile =	ProfileModel.getInstance();
			console.log("view profile",self.profile);
		
		// ProfileModel.getInstance().then(function(profile) {
		
		// })
		console.log("options",options);
		console.log("ENvi",SC.ENVIRONMENT.companyId);

		}



	,	events: {
			'click [data-action="requestchange"]': 'changeshippingaddress',
			'click [data-action="requestcreate"]': 'createshippingaddress'
		}

	,	bindings: {
		}

	,	changeshippingaddress: function(e) {
		var self = this;
		var address = $('[name="address"]').val();

		console.log("Address",address);
		var model = new RequestShippingAddressModuleModel();

		var data = {};
		data.author = Configuration.RequestShippingAddressModule.eAuthor
		data.recipient = Configuration.RequestShippingAddressModule.eRecipient
		data.subject = "Request to update shipping address"
		data.body = `
		<p> ${address} </p><br/>
		<p> Customer Reference :  <a href="https://${SC.ENVIRONMENT.companyId}.app.netsuite.com/app/common/entity/custjob.nl?stage=Customer&id=${self.profile.get('internalid')}">Click Here </a>
		</p>`
		console.log("view profile",self.profile.get('email'));
		model.save(data, {
			success: function (model, response) {
				if(response.status == true){
					$('.change-status').html('<div class="alert alert-success" role="alert"> Email Sent Successfully </div>').css('color', 'green');;
				}

				setTimeout(function(){
					$('.change-status').html('');
				}, 3000);
			},
			error: function (model, response) {
				$('.change-status').html('<div class="alert alert-success" role="alert"> Email Failed to Send </div>').css('color', 'green');
				setTimeout(function(){
					$('.change-status').html('');
				}, 3000);
			}
		});
	}

	//request to create a shipping address if no address is available
	// ,	createshippingaddress: function(e) {
	// 	var self = this;

	// 	var model = new RequestShippingAddressModuleModel();
	// 	var data = {};
	// 	data.author = Configuration.RequestShippingAddressModule.eAuthor
	// 	data.recipient = Configuration.RequestShippingAddressModule.eRecipient
	// 	data.subject = "Request for creating shipping address"
	// 	data.body = `
	// 	<p>This message has been generated to request to create a shipping address</p><br/>
	// 	<p> Customer Reference :  <a href="https://${SC.ENVIRONMENT.companyId}.app.netsuite.com/app/common/entity/custjob.nl?stage=Customer&id=${self.profile.get('internalid')}">Click Here </a>
	// 	</p>`
	// 	model.save(data, {
	// 		success: function (model, response) {
	// 			if(response.status == true){
	// 				$('.create-status').html('<div class="alert alert-success" role="alert"> Email Sent Successfully </div>').css('color', 'green');
	// 			}
	// 			setTimeout(function(){
	// 				$('.create-status').html('');
	// 			}, 3000);
	// 		},
	// 		error: function (model, response) {
	// 			$('.create-status').html('<div class="alert alert-success" role="alert"> Email Failed to Send </div>').css('color', 'green');
	// 			setTimeout(function(){
	// 				$('.create-status').html('');
	// 			}, 3000);
	// 		}
	// 	});

	// }

	, 	childViews: {

		}

		//@method getContext @return Demo.RequestShippingAddress.RequestShippingAddressModule.View.Context
	,	getContext: function getContext()
		{
			//@class Demo.RequestShippingAddress.RequestShippingAddressModule.View.Context
			// this.message = this.message || 'Hello World!!'
			return {
				hidechkout : this.options.container.hideproceedtochkout,
				email:this.profile.get('email')
				// message: this.message

			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("Demo.RequestShippingAddress.RequestShippingAddressModule.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/RequestShippingAddressModule.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Demo.RequestShippingAddress.RequestShippingAddressModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/RequestShippingAddressModule/SuiteScript2/RequestShippingAddressModule.Service.ss"
            ),
            true
        )
});
});



define(
	'Demo.RequestShippingAddress.RequestShippingAddressModule'
,   [
		'Demo.RequestShippingAddress.RequestShippingAddressModule.View',

		'Cart.Summary.View',

	    'Profile.Model',

		'Header.MiniCart.View'
	]
,   function (
		RequestShippingAddressModuleView,

		CartSummaryView,

	    ProfileModel,

		HeaderMiniCartView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var userprofilecomponent = container.getComponent("UserProfile");
			
			if(layout)
			{

		
				layout.addChildView('RequestshippingAddress', function() { 
					return new RequestShippingAddressModuleView({ container: container });
				});

			}

			var hideproceedtochkout = true;
				// var cart = container.getComponent("Cart");

			var profile =	ProfileModel.getInstance();

				userprofilecomponent.getUserProfile().done(function(profile) {				
			});

		var cart = container.getComponent("Cart");
		cart.getShipAddress().then(function(shipaddress) {
			console.log("shipaddress",shipaddress);

			if (shipaddress.country.length > 0) { 
				hideproceedtochkout = false;
				container.hideproceedtochkout = hideproceedtochkout
				return new RequestShippingAddressModuleView({ container: container });

			}else{
				hideproceedtochkout = true;
			}
})

_.extend(CartSummaryView.prototype,{
	getContext: _.wrap(CartSummaryView.prototype.getContext, function getContext(fn){
		var ret= fn.apply(this, _.toArray(arguments).slice(1));

		ret.hideproceedtochkout = hideproceedtochkout;
		return ret                        
	})
})
_.extend(HeaderMiniCartView.prototype,{
	getContext: _.wrap(HeaderMiniCartView.prototype.getContext, function getContext(fn){
		var ret= fn.apply(this, _.toArray(arguments).slice(1));

		ret.hideproceedtochkout = hideproceedtochkout;
		return ret                        
	})
})

		}
	};
});


};

extensions['CA.RewardPoints.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/RewardPoints/1.0.0/' + asset;
}

// @module CA.RewardPoints.points
define('CA.RewardPoints.points.View'
,	[
	'ca_rewardpoints_points.tpl'
	,	'CA.RewardPoints.points.Model'
	,	'Backbone'
	,'jQuery'
	,'Profile.Model'
    ]
, function (
	ca_rewardpoints_points_tpl
	,	pointsModel
	,	Backbone
	,jQuery
	,profileModel
)
{
    'use strict';

	// @class CA.RewardPoints.points.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_rewardpoints_points_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			let userId = profileModel.getInstance();
			var cartsummary = this.options.Cart.summary;
			// console.log(cartsummary,"cartsummary");
			var Total =  cartsummary.total;
			var TaxTotal =  cartsummary.taxtotal;
			var ShippingCost =  cartsummary.shippingcost;
			var cost = Total - (TaxTotal + ShippingCost );
			if(cost >= 1000){
				this.RewardPoints = Math.trunc(cost/1000)*5;
			}
			var obj ={
				Points:this.RewardPoints,
				Total:cost,
				userId:userId.get('internalid'),
				userEmail:userId.get('email')
			};
			console.log("summary",cartsummary);
			this.model = new pointsModel();
			this.model.save(obj).then(
				res =>{
					console.log(res,"save-res");
				}
			)

		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}
// ,	 beforeShowContent: function () {
// 	var promise = jQuery.Deferred();

// 	console.log(this.options,"before");
// 	// this.model.save({data:"hellow"}).then(function (res) {
// 	// 		promise.resolve();
// 	// 		console.log(res, "backbone");
		
// 	// });
// 	// promise.resolve();
// 	return true
// }
		//@method getContext @return CA.RewardPoints.points.View.Context
	,	getContext: function getContext()
		{
			//@class CA.RewardPoints.points.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message,
				RewardPoints:this.RewardPoints
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("CA.RewardPoints.points.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/points.Service.ss"
            )
        )
        
});
});


// @module Acme.RedeemPoints.RedeemPoints
define('CA.RewardPoints.pointsApply.View'
,	[
  'ca_rewardpoints_pointsapply.tpl'
	,	'CA.RewardPoints.points.Model'
	,	'Backbone'
	,'jQuery'
	,'Profile.Model'
    ]
, function (
	ca_rewardpoints_points_apply_tpl
	,	pointsModel
	,	Backbone
	,jQuery
	,profileModel
)
{
    'use strict';

	// @class Acme.RedeemPoints.RedeemPoints.View @extends Backbone.View
	return Backbone.View.extend({

		template:ca_rewardpoints_points_apply_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			this.model = new	pointsModel();
			var self = this;
         	this.model.fetch().done(function(result) {
				
						 result.points = parseInt(result.points);
						 result.billCost = parseInt(result.billCost);
						 let date = new Date(result.date);
						let mm =  date.getMonth() + 1 ;
						let  dys =  date.getDate();
						let yy = date.getFullYear();
						let dd = `${mm}/${dys}/${yy}` ;
						result.date = dd;
						self.Redeemdata =result;
						self.render();
      		});
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Acme.RedeemPoints.RedeemPoints.View.Context
	,	getContext: function getContext()
		{
			var Points; 
			if(this.Redeemdata){
				if(this.Redeemdata.points > 0){
				 this.Redeemdata
				}
				
			}
			//@class Acme.RedeemPoints.RedeemPoints.View.Context
			return {
				isTrue: !!this.Redeemdata,
				Redeemdata : this.Redeemdata
			};
		}
	});
});



define(
	'CA.RewardPoints.points'
,   [
		'CA.RewardPoints.points.View'
		,'CA.RewardPoints.pointsApply.View'
	]
,   function (
		pointsView
	,	pointsApplyView
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
			var cart = container.getComponent('Cart');
			if(layout)
			{
			layout.addChildView('apply-earning-point', function() { 
					return new pointsApplyView({ container: container });
				});
			cart.on("afterSubmit",function(res){
				// Reward.points  ancelableOff
				layout.addChildView('Reward.points', function() { 
					return new pointsView({ container: container,Cart:res.confirmation});
				});
			});
		
		}
		}
	};
});


};

extensions['CA.SpecialOrderItems.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/SpecialOrderItems/1.0.0/' + asset;
}

// @module CA.SpecialOrderItems.Specialorderitem
define('CA.SpecialOrderItems.Specialorderitem.View'
,	[
	'ca_specialorderitems_specialorderitem.tpl'
	
	,	'CA.SpecialOrderItems.Specialorderitem.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_specialorderitems_specialorderitem_tpl
	
	,	SpecialorderitemSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.SpecialOrderItems.Specialorderitem.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_specialorderitems_specialorderitem_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new SpecialorderitemModel();
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

		//@method getContext @return CA.SpecialOrderItems.Specialorderitem.View.Context
	,	getContext: function getContext()
		{
			//@class CA.SpecialOrderItems.Specialorderitem.View.Context
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
define("CA.SpecialOrderItems.Specialorderitem.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/Specialorderitem.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CA.SpecialOrderItems.Specialorderitem.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/Specialorderitem/SuiteScript2/Specialorderitem.Service.ss"
            ),
            true
        )
});
});



define(
	'CA.SpecialOrderItems.Specialorderitem'
,   [
		'CA.SpecialOrderItems.Specialorderitem.View',
		"ProductDetails.Full.View",
		"underscore",
		"Facets.ItemCell.View"
	]
,   function (
		SpecialorderitemView,
		PDPFull,
		_,
		FacetsItemCellView
	)
{
	'use strict';
	
	return  {
		mountToApp: function mountToApp (container)
		{
			
			/** @type {LayoutComponent} */
			var PDP = container.getComponent("PDP");
			var PLP = container.getComponent("PLP");

		if (PDP) {
			PDP.on("beforeShowContent", function () {
				PDPFull.prototype.getContext = _.wrap(PDPFull.prototype.getContext, function (fn) {
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					var ItemInfo = PDP.getItemInfo();
					if (ItemInfo.item && ItemInfo.item.custitem_special_order_item) {
						context.is_special_order_item = true;
					} else {
						context.is_special_order_item = false;
					}
					return context;
					})
				})
		}
		if (PLP) {
			PLP.on("beforeShowContent", function () {
					FacetsItemCellView.prototype.getContext = _.wrap(FacetsItemCellView.prototype.getContext, function (fn) {
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						if (this.model && this.model.get("custitem_special_order_item")) {
								context.is_special_order_item = true;
						} else {
								context.is_special_order_item = false;
						}
						return context;
					});
				})
			}
		}
	};
});


};

extensions['CA.surchargeCreditcard.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/surchargeCreditcard/1.0.0/' + asset;
}

// @module CA.surchargeCreditcard.surchargeCreditcard
define('CA.surchargeCreditcard.surchargeCreditcard.View'
,	[
	'ca_surchargecreditcard_surchargecreditcard.tpl'
	
	
	,	'Backbone'
    ]
, function (
	ca_surchargecreditcard_surchargecreditcard_tpl
	
	
	,	Backbone
)
{
    'use strict';

	// @class CA.surchargeCreditcard.surchargeCreditcard.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_surchargecreditcard_surchargecreditcard_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new surchargeCreditcardModel();
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

		//@method getContext @return CA.surchargeCreditcard.surchargeCreditcard.View.Context
	,	getContext: function getContext()
		{
			//@class CA.surchargeCreditcard.surchargeCreditcard.View.Context
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
define("CA.surchargeCreditcard.surchargeCreditcard.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/surchargeCreditcard.Service.ss"
            )
        )
        
});
});



define(
	'CA.surchargeCreditcard.surchargeCreditcard'
,   [
		'CA.surchargeCreditcard.surchargeCreditcard.View'
	]
,   function (
		surchargeCreditcardView
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
			
			if(layout)
			{
				layout.addChildView('Header.Logo', function() { 
					return new surchargeCreditcardView({ container: container });
				});
			}

		}
	};
});


};

extensions['Uf.UserFilter.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Uf/UserFilter/1.0.0/' + asset;
}

// @module Uf.UserFilter.UserFilterModule
define('Uf.UserFilter.UserFilterModule.View'
,	[
	'uf_userfilter_userfiltermodule.tpl'
	
	,	'Backbone'
    ]
, function (
	uf_userfilter_userfiltermodule_tpl
	
	,	Backbone
)
{
    'use strict';

	// @class Uf.UserFilter.UserFilterModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: uf_userfilter_userfiltermodule_tpl

	,	initialize: function (options) {
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Uf.UserFilter.UserFilterModule.View.Context
	,	getContext: function getContext()
		{
			//@class Uf.UserFilter.UserFilterModule.View.Context
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
define("Uf.UserFilter.UserFilterModule.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
});
});



define(
	'Uf.UserFilter.UserFilterModule'
,   [
		'Uf.UserFilter.UserFilterModule.View'

		,  'Profile.Model'

		,'underscore'

		, 'Facets.Browse.View'

		,        'Facets.Browse.CategoryHeading.View'

	]
,   function (
		UserFilterModuleView,

		ProfileModel,

		  _,

		  FacetsBrowseView,

		  FacetsBrowseCategoryHeadingView
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
			var self = this;
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var checkout = container.getComponent('Checkout');	
			var userprofilecomponent = container.getComponent("UserProfile");

			var employee = false ;

			ProfileModel.getInstance().on('change', function(model) {
				// console.log("profilemodel change",model);
				_.each(model.get("customfields"), function(field) {
					// console.log('changed', key, value);
					if(field.name == "custentity3" && field.value == "1"){
						// console.log("custentity_3",field.value);
						return  employee = true;
					}
				});
			});


			_.extend(FacetsBrowseView.prototype,{
                // initialize:_.wrap(ProfileModel.prototype.initialize, function initialize(fn){
                //     fn.apply(this, _.toArray(arguments).slice(1));
					
                // }),
                getContext: _.wrap(FacetsBrowseView.prototype.getContext, function getContext(fn){
                    // console.log("starter getcontext this",this)

					var ret= fn.apply(this, _.toArray(arguments).slice(1));

					ret.employee = employee;

					return ret

                        
                })
            })

		}
	};
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["Asu.AdvancedSignUp.AdvancedSignUpModule.View","Asu.AdvancedSignUp.AdvancedSignUpModule.Model","Asu.AdvancedSignUp.AdvancedSignUpModule.SS2Model","CloudAlp.Certificates.Certificates.View","CloudAlp.Certificates.Certificates.Model","CA.customAddresses.customAddress.View","CA.customAddresses.customAddress.Model","CA.customAddresses.customAddress.SS2Model","CA.customFacetsItem.customFacetsItem.View","CA.customFacetsItem.customFacetsItem.Model","CA.customFacetsItem.customFacetsItem.SS2Model","STAXS.CustomSearchVue.CustomSearchVue.View","STAXS.CustomSearchVue.CustomSearchVue.Model","STAXS.CustomSearchVue.CustomSearchVue.SS2Model","","vue","Acme.ImagesGridSlideShow.ImagesGridSlideShow.View","Acme.ImagesGridSlideShow.ImagesGridSlideShow.Model","Acme.ImagesGridSlideShow.ImagesGridSlideShow.SS2Model","jquery.slick","mia.instafeed.instafeedExt.View","mia.instafeed.instafeedExt.Model","mia.instafeed.instafeedExt.SS2Model","Instafeed","jquery.slick","Demo.RequestShippingAddress.RequestShippingAddressModule.View","Demo.RequestShippingAddress.RequestShippingAddressModule.Model","Demo.RequestShippingAddress.RequestShippingAddressModule.SS2Model","CA.RewardPoints.points.View","CA.RewardPoints.points.Model","CA.RewardPoints.pointsApply.View","CA.SpecialOrderItems.Specialorderitem.View","CA.SpecialOrderItems.Specialorderitem.Model","CA.SpecialOrderItems.Specialorderitem.SS2Model","CA.surchargeCreditcard.surchargeCreditcard.View","CA.surchargeCreditcard.surchargeCreditcard.Model","Uf.UserFilter.UserFilterModule.View","Uf.UserFilter.UserFilterModule.Model"];
try{
	extensions['Asu.AdvancedSignUp.1.0.0']();
	SC.addExtensionModule('Asu.AdvancedSignUp.AdvancedSignUpModule');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CloudAlp.Certificates.1.0.0']();
	SC.addExtensionModule('CloudAlp.Certificates.Certificates');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CA.customAddresses.1.0.0']();
	SC.addExtensionModule('CA.customAddresses.customAddress');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CA.customFacetsItem.1.0.0']();
	SC.addExtensionModule('CA.customFacetsItem.customFacetsItem');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['STAXS.CustomSearchVue.1.0.0']();
	SC.addExtensionModule('STAXS.CustomSearchVue.CustomSearchVue');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Acme.ImagesGridSlideShow.1.0.0']();
	SC.addExtensionModule('Acme.ImagesGridSlideShow.ImagesGridSlideShow');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['mia.instafeed.1.0.0']();
	SC.addExtensionModule('mia.instafeed.instafeedExt');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Demo.RequestShippingAddress.1.0.0']();
	SC.addExtensionModule('Demo.RequestShippingAddress.RequestShippingAddressModule');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CA.RewardPoints.1.0.0']();
	SC.addExtensionModule('CA.RewardPoints.points');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CA.SpecialOrderItems.1.0.0']();
	SC.addExtensionModule('CA.SpecialOrderItems.Specialorderitem');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CA.surchargeCreditcard.1.0.0']();
	SC.addExtensionModule('CA.surchargeCreditcard.surchargeCreditcard');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Uf.UserFilter.1.0.0']();
	SC.addExtensionModule('Uf.UserFilter.UserFilterModule');
}
catch(error)
{
	console.error(error);
}

