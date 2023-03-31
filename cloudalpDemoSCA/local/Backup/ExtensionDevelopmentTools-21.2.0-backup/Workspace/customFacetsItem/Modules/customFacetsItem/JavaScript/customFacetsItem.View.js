// @module CA.customFacetsItem.customFacetsItem
define('CA.customFacetsItem.customFacetsItem.View'
,	[
	'ca_customfacetsitem_customfacetsitem.tpl'
	
	,	'CA.customFacetsItem.customFacetsItem.Model'
	,	'Profile.Model'
	,	'Backbone'
	,	'Utils'
	,	'Facets.Browse.View'
    ]
, function (
	ca_customfacetsitem_customfacetsitem_tpl
	
	,	customFacetsItemModel
	,	ProfileModel
	,	Backbone
	,	Utils
	,	FacetsBrowseView
)
{
    'use strict';

	// @class CA.customFacetsItem.customFacetsItem.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_customfacetsitem_customfacetsitem_tpl

		,	beforeShowContent:function beforeShowContent(){
			var self = this;
			let FinalItemdata = [...new Set(this.options.container.records.itemIds)];
			var profileData = ProfileModel.getInstance();
			const promise =  jQuery.Deferred();
				Backbone.ajax({
					url:profileData.getSearchApiUrl()+"?id="+ FinalItemdata +"&fieldset=details",
					success:function(data){
						self.item= data;
						
					}
				})
				promise.resolve();
				this.contextData();
				return promise;
				
		}
	
		,	initialize: function (options) {

			
			
		}
	,
	events: {
		}

	,	bindings: {
		}


	, 	childViews: {

		}
	,	contextData:function(){
		_.extend(FacetsBrowseView.prototype,{
			initialize:_.wrap(FacetsBrowseView.prototype.initialize,function initialize(fn){
				fn.apply(this, _.toArray(arguments).slice(1));
				
			})
			
			
		})
	}

		//@method getContext @return CA.customFacetsItem.customFacetsItem.View.Context
	,	getContext: function getContext()
		{
			
			return {

			};
		}
	});
});
