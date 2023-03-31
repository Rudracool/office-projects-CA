
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
					// console.log(self);
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
