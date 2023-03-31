
define(
	'CA.AddressBookCustomization.AddressBookCustomization'
,   [
		'CA.AddressBookCustomization.AddressBookCustomization.View'
	,	'Address.Edit.View'
	,	'Configuration'
	,	'Utils'
	]
,   function (
		AddressBookCustomizationView
	,	AddressEditView
	,	Configuration
	,	Utils
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
			
			/**
			* @description AddressBook error message
			*/
			_.extend(AddressEditView.prototype,{
				getContext:_.wrap(AddressEditView.prototype.getContext,function getContext(fn){
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					var ConfigurationData = Configuration.get('checkoutcustomization');
					if(ConfigurationData.AddressMessage !== ''){
						context.addressMessage = Utils.translate(ConfigurationData.AddressMessage);
					}
					return context;
				})
			})

		}
	};
});
