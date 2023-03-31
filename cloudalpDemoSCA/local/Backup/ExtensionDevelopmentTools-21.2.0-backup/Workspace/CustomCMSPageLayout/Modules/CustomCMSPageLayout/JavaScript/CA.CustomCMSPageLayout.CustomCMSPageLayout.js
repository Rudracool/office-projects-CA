
define(
	'CA.CustomCMSPageLayout.CustomCMSPageLayout'
,   [
		'CA.CustomCMSPageLayout.CustomCMSPageLayout.View'
	]
,   function (
		CustomCMSPageLayoutView
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
			var pageType = container.getComponent('PageType');

			pageType.registerPageType({
					'name': 'CustomCMSPageLayout',
					'view': CustomCMSPageLayoutView,
					   'defaultTemplate': {
						name: 'ca_customcmspagelayout_customcmspagelayout.tpl',
						displayName: 'Non Blog Page layout',
						thumbnail:""
					}
				});
				
			
			pageType.registerTemplate({
					pageTypes: ['CustomCMSPageLayout', 'cms-landing-page'],
					template: {
						name: 'ca_customcmspagelayout_customcmspagelayout.tpl',
						displayName: 'My Alternate Layout',
						thumbnail: ""
					}

				});

		}
	};
});
