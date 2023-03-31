// @module CA.AddToCompareExt.AddToCompareModule
define('CA.AddToCompareExt.AddToCompareModule.View'
,	[
	'ca_addtocompareext_addtocomparemodule.tpl'
	
	,	'CA.AddToCompareExt.AddToCompareModule.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_addtocompareext_addtocomparemodule_tpl
	
	,	AddToCompareModuleSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.AddToCompareExt.AddToCompareModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_addtocompareext_addtocomparemodule_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new AddToCompareModuleModel();
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

		//@method getContext @return CA.AddToCompareExt.AddToCompareModule.View.Context
	,	getContext: function getContext()
		{
			//@class CA.AddToCompareExt.AddToCompareModule.View.Context
			//this.message = this.message || 'Hello World!!'
		//	console.log(this);
			return {
				itemId: !_.isUndefined(this.model.get('internalid'))?this.model.get('internalid'):"",
				showCheckBox: this.options.showCheckBox ? this.options.showCheckBox : false
			};
		}
	});
});
