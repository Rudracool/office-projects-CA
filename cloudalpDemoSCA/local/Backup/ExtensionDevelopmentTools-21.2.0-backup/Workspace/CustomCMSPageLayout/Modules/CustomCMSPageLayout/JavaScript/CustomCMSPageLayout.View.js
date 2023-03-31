// @module CA.CustomCMSPageLayout.CustomCMSPageLayout
define('CA.CustomCMSPageLayout.CustomCMSPageLayout.View'
,	[
	'ca_customcmspagelayout_customcmspagelayout.tpl'
	
	,	'CA.CustomCMSPageLayout.CustomCMSPageLayout.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_customcmspagelayout_customcmspagelayout_tpl
	
	,	CustomCMSPageLayoutSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.CustomCMSPageLayout.CustomCMSPageLayout.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_customcmspagelayout_customcmspagelayout_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new CustomCMSPageLayoutModel();
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

		//@method getContext @return CA.CustomCMSPageLayout.CustomCMSPageLayout.View.Context
	,	getContext: function getContext()
		{
			//@class CA.CustomCMSPageLayout.CustomCMSPageLayout.View.Context
			
		}
	});
});
