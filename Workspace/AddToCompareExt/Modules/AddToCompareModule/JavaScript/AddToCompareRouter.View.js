// @module CA.AddToCompareExt.AddToCompareRouter
define('CA.AddToCompareExt.AddToCompareRouter.View'
,	[
	'ca_addtocompareext_addtocomparerouter.tpl'
	
	//,	'CA.AddToCompareExt.AddToCompareRouter.SS2Model'
	,"Item.Collection"
	
	,	'Backbone'
    ]
, function (
	ca_addtocompareext_addtocomparerouter_tpl
	
	//,	AddToCompareRouterSS2Model
	, ItemCollection
	
	,	Backbone
)
{
    'use strict';

	// @class CA.AddToCompareExt.AddToCompareRouter.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_addtocompareext_addtocomparerouter_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new AddToCompareRouterModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });

			  var self = this;
			  $.urlParam = function (name) {
				  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
				  return results[1] || 0;
			  }
			  var params = $.urlParam('items');

			  var search = this.options.container.getComponent("Search");
			  var searchParams = {
				  id:params,
				  apiMasterOptions: "itemDetails"
			  };

			  this.searchUrl = search.getUrl(searchParams);

		}
	,	beforeShowContent: function beforeShowContent() {
		var self = this;
		const promise = jQuery.Deferred();

		console.log(self.searchUrl);
		Backbone.ajax({
			url: self.searchUrl
		,	success: function(result){
				if(result && result.total>0)
				{ 
					self.items = result.items;
					self.items = new ItemCollection(_.compact(self.items));
					//self.render();
				}
				promise.resolve();
			}
		});
		return promise;
	}
	,	render: function render() {
			Backbone.View.prototype.render.apply(this, arguments);
        }

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return CA.AddToCompareExt.AddToCompareRouter.View.Context
	,	getContext: function getContext()
		{
			//@class CA.AddToCompareExt.AddToCompareRouter.View.Context
			//this.message = this.message || 'Hello World!!'
			console.log(this);
			return {
			//	message: this.message
			};
		}
	});
});
