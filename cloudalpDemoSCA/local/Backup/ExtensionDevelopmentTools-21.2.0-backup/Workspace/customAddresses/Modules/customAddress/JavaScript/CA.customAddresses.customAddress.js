
define(
	'CA.customAddresses.customAddress'
,   [
		'CA.customAddresses.customAddress.View',
		'OrderWizard.Module.Confirmation',
		'Profile.Model',
		'CA.customAddresses.customAddress.Model',
		'jQuery'
		
	]
	, function (
		customAddressView,
		OrderWizardModuleConfirmation,
		ProfileModel,
		CAcustomAddressescustomAddressModel,
		jQuery
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');

				OrderWizardModuleConfirmation.prototype.removeaddress = function removeaddress() {
					var profile = ProfileModel.getInstance();
					console.log('in removeadd methos');
					_.each(profile.get('addresses').models, function (add) {
						var promise = jQuery.Deferred();
						debugger
						if (add.get('company') == 'CA') {
							var addremovemodel = new CAcustomAddressescustomAddressModel();
							addremovemodel.save({ addressId: add.get('internalid') }).done((res) => {
								promise.resolve();
							});
							return promise;
						}
					})
				};

				OrderWizardModuleConfirmation.prototype.getContext = _.wrap(OrderWizardModuleConfirmation.prototype.getContext, function (fn) {
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						var profile = ProfileModel.getInstance();
					    console.log("profile", profile.get('addresses'));
						debugger
						this.removeaddress();
						return context
				})
			}
		}
	});
