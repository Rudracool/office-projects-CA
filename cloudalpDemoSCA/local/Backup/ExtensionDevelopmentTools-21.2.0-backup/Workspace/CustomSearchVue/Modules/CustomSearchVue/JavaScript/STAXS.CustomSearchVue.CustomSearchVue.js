
define(
	'STAXS.CustomSearchVue.CustomSearchVue'
	, [
		'STAXS.CustomSearchVue.CustomSearchVue.View'
		, 'Utils'
	]
	, function (
		CustomSearchVueView
		, Utils
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
				const myaccountmenu = container.getComponent("MyAccountMenu");
				const pageType = container.getComponent('PageType');
				pageType.registerPageType({
					name: 'Items',
					routes: ['cust-item'],
					view: CustomSearchVueView,
					defaultTemplate: {
						name: 'staxs_customsearchvue_customsearchvue_tpl',
						displayName: 'Item'
					}
				});
				myaccountmenu.addGroup({
					id: 'CustItem',
					name: Utils.translate('Items'),
					index: 13,
					url: "cust-item"
				});

				// myaccountmenu.addGroupEntry({
				// 	id: "certificates",
				// 	groupid: "Certificates",
				// 	name: "Item",
				// 	index: 1,
				// 	url: "cust-item"
				// });

				// if (layout) {
				// 	layout.addChildView('Vue', function () {
				// 		return new CustomSearchVueView({ container: container });
				// 	});
				// }

			}
		};
	});
