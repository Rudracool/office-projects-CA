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
