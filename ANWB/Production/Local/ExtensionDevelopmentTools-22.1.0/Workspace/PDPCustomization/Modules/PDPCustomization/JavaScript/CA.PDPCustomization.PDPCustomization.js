
define(
	'CA.PDPCustomization.PDPCustomization'
,   [
		'CA.PDPCustomization.PDPCustomSalesUnit.View'
	,	'CA.PDPCustomization.PDPCustomization.Model'
	,	'ProductDetails.Full.View'
	,   'ProductDetails.Base.View'
	,   'ProductDetails.Quantity.View'
	,   'Profile.Model'
	,   'Backbone'
	,   'Utils'
	,   'AjaxRequestsKiller'
	,   'underscore'
	,   'Configuration'
	,	'CA.PDPCustomization.PDPSalesUnit.View'
	,	'ProductDetails.QuickView.View'
	]
,   function (
		PDPCustomSalesUnitView
	,	PDPCustomizationModel
	,	ProductDetailsFullView
	,   ProductDetailsBaseView
	,   ProductDetailsQuantityView
	,   ProfileModel
	,   Backbone
	,   Utils
	,   AjaxRequestsKiller
	,   _
	,   Configuration
	,	PDPSalesUnitView
	,	ProductDetailsQuickViewView
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
			var layout = container.getComponent("Layout");
            let profile = ProfileModel.getInstance();
            var PDP = container.getComponent("PDP");

			ProductDetailsBaseView.prototype.productDetails = function productDetails(api_query, options) {
				const application = this.application;
				const product = this.model;
				const promise = jQuery.Deferred();
				const item = product.get('item');
				const self = this;
				var PDPCustompdfModel = new PDPCustomizationModel();

				item.fetch({
					data: api_query,
					killerId: AjaxRequestsKiller.getKillerId(),
					pageGeneratorPreload: true
				}).then(
					// Success function
					function (data, _result, jqXhr) {
						if (!item.isNew()) {
							// once the item is fully loaded we set its options
							product.setOptionsFromURL(options);

							product.set('source', options && options.source);

							product.set('internalid', options && options.internalid);

							if (
								api_query.id &&
								item.get('urlcomponent') &&
								SC.ENVIRONMENT.jsEnvironment === 'server'
							) {
								nsglobal.statusCode = 301;
								nsglobal.location = product.generateURL();
							}

							if (data.corrections && data.corrections.length > 0) {
								if (
									item.get('urlcomponent') &&
									SC.ENVIRONMENT.jsEnvironment === 'server'
								) {
									nsglobal.statusCode = 301;
									nsglobal.location = data.corrections[0].url + product.getQuery();
								} else {
									Backbone.history.navigate(
										`#${data.corrections[0].url}${product.getQuery()}`,
										{ trigger: true }
									);
									promise.reject();
								}
							}

							self.bindModel();
							var itemid = self.model.get('item').get('itemid');
							
							var id = self.model.get('item').get('internalid');

							PDPCustompdfModel.save({ id: id, sku: itemid }).done((res) => {
								self.pdfsExtras = res.lengthExtras;
								promise.resolve();
							})
							

						} else if (jqXhr.status >= 500) {
							application.getLayout().internalError();
							promise.reject();
						} else if (jqXhr.responseJSON.errorCode !== 'ERR_USER_SESSION_TIMED_OUT') {
							// We just show the 404 page
							application.getLayout().notFound();
							promise.reject();
						}
					},
					// Error function
					function (jqXhr) {
						// this will stop the ErrorManagment module to process this error
						// as we are taking care of it
						jqXhr.preventDefault = true;

						if (jqXhr.status >= 500) {
							application.getLayout().internalError();
							promise.reject();
						} else if (jqXhr.responseJSON.errorCode !== 'ERR_USER_SESSION_TIMED_OUT') {
							// We just show the 404 page
							application.getLayout().notFound();
							promise.reject();
						}
					}
				);

				return promise;
			}

			_.extend(ProductDetailsQuickViewView.prototype,{
				childViews:_.extend({},ProductDetailsQuickViewView.prototype.childViews,{
					'CustomSalesunit':function(){
						
						return new PDPCustomSalesUnitView({
							model:this.model.get('item')
						})
					},
					// 'Salesunit':function(){
						
					// 	return new PDPSalesUnitView({
					// 		model:this.model.get('item')
					// 	})
					// }
				}),
			})

			_.extend(ProductDetailsFullView.prototype, {
				events: {

					'click [data-action="tabs-change"]': 'tabChange'

				},
				childViews:_.extend({},ProductDetailsFullView.prototype.childViews,{
					'CustomSalesunit':function(){
						
						return new PDPCustomSalesUnitView({
							model:this.model.get('item')
						})
					},
					// 'Salesunit':function(){
						
					// 	return new PDPSalesUnitView({
					// 		model:this.model.get('item')
					// 	})
					// }
				}),

				tabChange: function (event) {
					var i, tabcontent, tablinks;
					tabcontent = $('.tabcontent');
					for (i = 0; i < tabcontent.length; i++) {
						tabcontent[i].style.display = "none";
					}
					tablinks = $('.tablinks');
					for (i = 0; i < tablinks.length; i++) {
						tablinks[i].className = tablinks[i].className.replace("active", "");
					}
					var tabName = $(event.target).data('id');
					$(`#${tabName}`).css('display', 'block');
					event.currentTarget.className += " active";


				},
				getContext: _.wrap(ProductDetailsFullView.prototype.getContext, function getContext(fn) {
					var self = this;
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					
					_.each(self.pdfsExtras, (pdf) => {
						var PDF = pdf.name;
						var pdfname = PDF.substr(PDF.indexOf("_") + 1);
						pdfname = pdfname.substr(0, pdfname.indexOf("."));
						pdf.name = pdfname;

						var url = pdf.url;
						var ext = url.substr(url.lastIndexOf('.') + 1);
						pdf.xls = false; pdf.doc = false; pdf.pdf = false; pdf.img = false;
						if (ext == 'xls') {
							pdf.xls = true;
						}
						if (ext == 'doc') {
							pdf.doc = true;
						}
						if (ext == 'pdf') {
							pdf.pdf = true;
						}
						if (ext !== 'pdf' && ext !== 'doc' && ext !== 'xls') {
							pdf.img = true;
						}

					})
					if (self.pdfsExtras.length > 0) {
						context.isDownloadsAvailable = true;
					} else {
						context.isDownloadsAvailable = false;
					}
					context.pdfsExtras = self.pdfsExtras;
					return context;
				})
			})

		}
	};
});
