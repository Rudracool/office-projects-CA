
define(
	'Uf.UserFilter.UserFilterModule'
,   [
		'Uf.UserFilter.UserFilterModule.View'

		,  'Profile.Model'

		,'underscore'

		, 'Facets.Browse.View'

		,        'Facets.Browse.CategoryHeading.View'

	]
,   function (
		UserFilterModuleView,

		ProfileModel,

		  _,

		  FacetsBrowseView,

		  FacetsBrowseCategoryHeadingView
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
			var self = this;
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var checkout = container.getComponent('Checkout');	
			var userprofilecomponent = container.getComponent("UserProfile");

			var employee = false ;

			ProfileModel.getInstance().on('change', function(model) {
				// console.log("profilemodel change",model);
				_.each(model.get("customfields"), function(field) {
					// console.log('changed', key, value);
					if(field.name == "custentity3" && field.value == "1"){
						// console.log("custentity_3",field.value);
						return  employee = true;
					}
				});
			});


			_.extend(FacetsBrowseView.prototype,{
                // initialize:_.wrap(ProfileModel.prototype.initialize, function initialize(fn){
                //     fn.apply(this, _.toArray(arguments).slice(1));
					
                // }),
                getContext: _.wrap(FacetsBrowseView.prototype.getContext, function getContext(fn){
                    // console.log("starter getcontext this",this)

					var ret= fn.apply(this, _.toArray(arguments).slice(1));

					ret.employee = employee;

					return ret

                        
                })
            })

		}
	};
});
