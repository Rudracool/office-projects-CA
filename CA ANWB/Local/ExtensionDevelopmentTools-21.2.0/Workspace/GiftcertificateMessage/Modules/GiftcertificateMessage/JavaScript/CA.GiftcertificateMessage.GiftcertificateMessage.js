
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
