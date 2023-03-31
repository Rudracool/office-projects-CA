
define(
	'CA.AddToCompareExt.AddToCompareModule'
,   [
		'CA.AddToCompareExt.AddToCompareModule.View',
		'ItemRelations.RelatedItem.View',
	    'CA.AddToCompareExt.AddToCompareRouter.View',
		'ProductDetails.Full.View',
		'underscore',
		'Utils',
		'Backbone'
	]
,   function (
		AddToCompareModuleView,
		ItemRelationsRelatedItemView,
	    AddToCompareRouterView,
		ProductDetailsFullView,
		_,
		Utils,
		Backbone
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
			const pageType = container.getComponent('PageType');

			pageType.registerPageType({
				name: 'Compare_products',
				routes: ['compare-items','compare-items?*params'],
				view: AddToCompareRouterView,
				defaultTemplate: {
					name: 'ca_addtocompareext_addtocomparerouter.tpl',
					displayName: 'My Default Template'
				}
			});
			_.extend(ItemRelationsRelatedItemView.prototype,{
				childViews: _.extend({}, ItemRelationsRelatedItemView.prototype.childViews, {
					'ItemRelations.RelatedItemCst': function() {
						var showCheckBox = false;
					//	console.log(this);
						if(!_.isEmpty(this.attributes) && !_.isUndefined(this.attributes) && !_.isUndefined(this.attributes['data-root-component-id']) && this.attributes['data-root-component-id'] != '' && this.attributes['data-root-component-id'] == "ProductDetails.Full.View"){
							showCheckBox = true;
						}
					  return new AddToCompareModuleView({
						model: this.model,
						showCheckBox: showCheckBox
					  });
					},
				
				  })
			});
			if(layout)
			{
				// layout.addChildView('ItemRelations.RelatedItemCst', function() { 
				// 	return new AddToCompareModuleView({ container: container });
				// });
				layout.on('afterShowContent', function() {
				//	console.log($('.product-details-full-content'));
                    $('.product-details-full-content').append('<div class="sc-item-comparison-widget-container container"><p>'+Utils.translate("select upto to 3 items")+'</p><button class="product-details-full-comp-btn" name="compare-btn" >'+Utils.translate("compare now")+'</button></div>');
				// $('.recently-viewed-cell-item-cell').find('.product_comparison_view').html('');
			  });
			}
			_.extend(ProductDetailsFullView.prototype, {
              
				events: {
					"click [data-action='add-to-compare']": "getItemsColl",
					'click [name="compare-btn"]' :"compareInModal"
				},
				initialize: _.wrap(ProductDetailsFullView.prototype.initialize, function initialize(fn) {
					fn.apply(this, _.toArray(arguments).slice(1));
					var self = this;
				}),
		
				getItemsColl : function (e) {
					var $boxes = $('input[name=compChk]:checked');
					this.items_Ids = [];
					var self = this;
					$boxes.each(function(){
						self.items_Ids.push(String($(this).data('id')));
					});
					this.string_id = self.items_Ids.toString();
				       console.log(self.string_id);
					  // console.log("hi");
					if($boxes.length>0)
					{
						$('.sc-item-comparison-widget-container').addClass("shown");
					}
					else{
						$('.sc-item-comparison-widget-container').removeClass("shown");
					}
					if($boxes.length == 3)
					{
					//	console.log($boxes.length);
						$('input[name=compChk]').not(':checked').prop('disabled', true);
					}
					else{
						$('input[name=compChk]').not(':checked').prop('disabled', false); 
					}
	
					// $('.product-details-full-comp-btn').attr('href','/'+commoUrlString);
					// $('.product-details-full-comp-btn').attr('data-hashtag','#'+commoUrlString);
			
				},
				
			
				compareInModal: function(e){
					console.log(self.string_id);
                    e.preventDefault();
					var commoUrlString = /*SC.CONFIGURATION.productcomparison.comparisonPageURL*/'compare-items'+'?items='+this.string_id;
					Backbone.history.navigate(commoUrlString, { trigger: true, replace: true });

				
				},

			});
		    

		}
	};
});
