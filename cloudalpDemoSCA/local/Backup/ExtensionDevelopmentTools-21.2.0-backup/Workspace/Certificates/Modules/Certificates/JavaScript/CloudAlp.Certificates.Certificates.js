
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
