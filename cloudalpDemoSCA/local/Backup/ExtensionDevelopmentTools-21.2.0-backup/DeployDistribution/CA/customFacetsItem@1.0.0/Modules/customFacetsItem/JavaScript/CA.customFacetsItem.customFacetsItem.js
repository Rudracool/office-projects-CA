
define(
	'CA.customFacetsItem.customFacetsItem'
,   [
		'CA.customFacetsItem.customFacetsItem.View'
	,	'Profile.Model'
	]
,   function (
		customFacetsItemView
	,	ProfileModel
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
			
			// /** @type {LayoutComponent} */
			// var layout = container.getComponent('Layout');
			
			// if(layout)
			// {
			// 	layout.addChildView('Header.Logo', function() { 
			// 		return new customFacetsItemView({ container: container });
			// 	});
			// }
			// console.log(ProfileModel.getInstance());
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
