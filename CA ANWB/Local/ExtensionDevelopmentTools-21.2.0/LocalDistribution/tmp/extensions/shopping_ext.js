var extensions = {};

extensions['ANWB.FooterConfiguration.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/ANWB/FooterConfiguration/1.0.0/' + asset;
}

// @module ANWB.FooterConfiguration.FooterConfiguration
define('ANWB.FooterConfiguration.FooterConfiguration.View'
,	[
	'anwb_footerconfiguration_footerconfiguration.tpl'
	
	// ,	'ANWB.FooterConfiguration.FooterConfiguration.SS2Model'
	
	,	'Backbone'
    ]
, function (
	anwb_footerconfiguration_footerconfiguration_tpl
	
	// ,	FooterConfigurationSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class ANWB.FooterConfiguration.FooterConfiguration.View @extends Backbone.View
	return Backbone.View.extend({

		template: anwb_footerconfiguration_footerconfiguration_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new FooterConfigurationModel();
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

		//@method getContext @return ANWB.FooterConfiguration.FooterConfiguration.View.Context
	,	getContext: function getContext()
		{
			//@class ANWB.FooterConfiguration.FooterConfiguration.View.Context
			// this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("ANWB.FooterConfiguration.FooterConfiguration.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
});
});



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


};

extensions['CA.GiftcertificateMessage.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/GiftcertificateMessage/1.0.0/' + asset;
}

// @module CA.GiftcertificateMessage.GiftcertificateMessage
define('CA.GiftcertificateMessage.GiftcertificateMessage.View'
,	[
	'ca_giftcertificatemessage_giftcertificatemessage.tpl'
	
	,	'CA.GiftcertificateMessage.GiftcertificateMessage.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_giftcertificatemessage_giftcertificatemessage_tpl
	
	,	GiftcertificateMessageSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.GiftcertificateMessage.GiftcertificateMessage.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_giftcertificatemessage_giftcertificatemessage_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new GiftcertificateMessageModel();
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

		//@method getContext @return CA.GiftcertificateMessage.GiftcertificateMessage.View.Context
	,	getContext: function getContext()
		{
			//@class CA.GiftcertificateMessage.GiftcertificateMessage.View.Context
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
define("CA.GiftcertificateMessage.GiftcertificateMessage.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/GiftcertificateMessage.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CA.GiftcertificateMessage.GiftcertificateMessage.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/GiftcertificateMessage/SuiteScript2/GiftcertificateMessage.Service.ss"
            ),
            true
        )
});
});



define(
	'CA.GiftcertificateMessage.GiftcertificateMessage'
,   [
		'CA.GiftcertificateMessage.GiftcertificateMessage.View'
	]
,   function (
		GiftcertificateMessageView
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
			var checkout = container.getComponent('Checkout');
			
			checkout.addStepsGroup({group: {
                index: 0, 
                name: 'Gift Item Message', 
                url: 'paying' 
            }})

                .done(function () {
                    checkout.addModuleToStep({
                        step_url: 'gift-certificate-message', 
                        module: { 
                            id: 'searchForAddress', 
                            index: 0, 
                            classname: 'CA.GiftcertificateMessage.GiftcertificateMessage.View', 
                            options: {container: '#wizard-step-content',
                            isurl:'search-for-address'
                           
                        }
                        }
                        
                    })
                });

		}
	};
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["ANWB.FooterConfiguration.FooterConfiguration.View","ANWB.FooterConfiguration.FooterConfiguration.Model","CA.GiftcertificateMessage.GiftcertificateMessage.View","CA.GiftcertificateMessage.GiftcertificateMessage.Model","CA.GiftcertificateMessage.GiftcertificateMessage.SS2Model"];
try{
	extensions['ANWB.FooterConfiguration.1.0.0']();
	SC.addExtensionModule('ANWB.FooterConfiguration.FooterConfiguration');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CA.GiftcertificateMessage.1.0.0']();
	SC.addExtensionModule('CA.GiftcertificateMessage.GiftcertificateMessage');
}
catch(error)
{
	console.error(error);
}

