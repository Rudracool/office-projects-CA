
define(
	'RFI.CustomBlogSlider.CustomBlogerSlider'
,   [
		'RFI.CustomBlogSlider.CustomBlogerSlider.View'
		,'Home.View'
		,'Utils'
		,'underscore'
	]
,   function (
		CustomBlogerSliderView
		,HomeView
		,Utils
		,_
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
			this.application = container;
			var url = Utils.getAbsoluteUrl(
				getExtensionAssetsPath(
					"services/CustomBlogerSlider.Service.ss"
				)
			)
			var promise = $.get(url);
			promise.then(function (res) {
				if (_.has(res, 'blog')) {
					container.data = res.blog;
				}
			})
			this.application.waitForPromise(promise);	
			_.extend(HomeView.prototype,{
				getContext: _.wrap(HomeView.prototype.getContext, function getContext(fn){
					var ret= fn.apply(this, _.toArray(arguments).slice(1));
			
					var categories = SC.CATEGORIES;
					var level_two_categories = [];
					_.each(categories,(category)=>{
							if(!_.isEmpty(category.categories)){
								category.categories.find(level2 =>{
									let obj ={};
									obj.name =level2.name;
									obj.url =level2.fullurl;
									obj.img = 'https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg';
									level_two_categories.push(obj)
								})
							}
					
					})
				ret.categories = level_two_categories;
					return ret                        
				})
			})
			if(layout)
			{
				layout.addChildView('Blogs.Slider', function() { 
					var blogs =	container.data.map(i =>{
				var removeHtmlTag = i.text.replace(/<(.|\n)*?>/g, ''); 
					i.text = removeHtmlTag.substring(0,60)+'...' ;
					return i;
				});
					return new CustomBlogerSliderView({ container:blogs});
				});
			}

		}
	};
});
