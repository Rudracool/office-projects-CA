
define(
	'Cloudalp.SlideShowPro.SlideShowModule'
,   [
		'Cloudalp.SlideShowPro.SlideShowModule.View'
	]
,   function (
		SlideShowModuleView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			
			container.getComponent('CMS').registerCustomContentType({
				
				// this property value MUST be lowercase
				id: 'slide_show_cct_pro'
				
				// The view to render the CCT
			,	view: SlideShowModuleView
			,  options: {
				  container: container
				}
			});

		}
	};
});
