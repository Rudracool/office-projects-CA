
define(
	'ANWB.FooterConfiguration.FooterConfiguration'
,   [
		'ANWB.FooterConfiguration.FooterConfiguration.View'
	,	'Footer.View'
	,	'Configuration'
	,	'Header.Menu.View'
	]
,   function (
		FooterConfigurationView
	,	FooterView
	,	Configuration
	,	HeaderMenuView
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
			
				_.extend(FooterView.prototype,{
					getContext:_.wrap(FooterView.prototype.getContext, function (fn) {
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						var footerinConfiguration = Configuration.get('footer');
						if(!_.isUndefined(footerinConfiguration)){
							context.heading1 = footerinConfiguration.contentoneheadingOne;
							context.heading2 = footerinConfiguration.contentoneheadingTwo;
							context.heading3 = footerinConfiguration.contentoneheadingThree;
							context.heading4 = footerinConfiguration.contentoneheadingFour;
							context.datarow1 = footerinConfiguration.contentOne;
							context.datarow2 = footerinConfiguration.contentTwo;
							context.datarow3 = footerinConfiguration.contentThree;
							context.datarow4 = footerinConfiguration.contentFour;

						}
						return context;
					})
				});
				

			}

		}
	};
});
