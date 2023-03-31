
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
