
define(
	'CA.PdpPdf.PDPCustompdf'
,   [
	'CA.PdpPdf.PDPCustompdf.View',
	"ProductDetails.Full.View",
  	"Handlebars",
  	"underscore",
	"Profile.Model",
	"CA.PdpPdf.PDPCustompdf.Model",
	 'ProductDetails.Base.View',
	 'ProductDetails.Quantity.View',
	 'Backbone',
	 'Utils',
	 'AjaxRequestsKiller'

	]
,   function (
	  PDPCustompdfView,
	  ProductDetailsFullView,
	  Handlebars,
	  _,
	  ProfileModel,
	  CAPdpPdfPDPCustompdfModel,
	  ProductDetailsBaseView,
	  ProductDetailsQuantityView,
	  Backbone, 
	  Utils, 
	  AjaxRequestsKiller
	)
{
	'use strict';

	return  {
	mountToApp: function mountToApp (container)
	{

				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');

				var PDP = container.getComponent("PDP");
			
				ProductDetailsBaseView.prototype.productDetails = function productDetails(api_query, options) {
					const application = this.application;
					const product = this.model;
					const promise = jQuery.Deferred();
					const item = product.get('item');
					const self = this;
					var PDPCustompdfModel = new CAPdpPdfPDPCustompdfModel();

					item.fetch({
							data: api_query,
							killerId: AjaxRequestsKiller.getKillerId(),
							pageGeneratorPreload: true
					}).then(
							// Success function
							function(data, _result, jqXhr) {
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
											var itemid = self.model.get('item').get('itemid')	;
											var id = 	self.model.get('item').get('internalid')
		
										  PDPCustompdfModel.save({ id: id, sku:itemid }).done((res) => {
												console.log("res", res);
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
							function(jqXhr) {
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
			// function fileExtension(url){fileSplit = url.split('?')[0]; fileIndex = fileSplit.substr(fileSplit.lastIndexOf(".")+1); alert(fileIndex); }; 
			_.extend(ProductDetailsFullView.prototype, {
				getContext: _.wrap(ProductDetailsFullView.prototype.getContext, function getContext(fn) {
					var self = this;
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					_.each(self.pdfsExtras,(pdf) =>{
						var PDF = pdf.name;
						var pdfname = PDF.substr(PDF.indexOf("_") + 1);
						pdfname = pdfname.substr(0,pdfname.indexOf("."));
						pdf.name =  pdfname;

						var url = pdf.url;
						var ext = url.substr(url.lastIndexOf('.') + 1);
						pdf.xls = false; pdf.doc = false; pdf.pdf = false;pdf.img = false; 			//showing icons according to the url extension (pdf, xls, doc)
						if(ext == 'xls'){
							pdf.xls = true;
						}
						if(ext == 'doc'){
							pdf.doc = true;
						}
						if(ext == 'pdf'){
							pdf.pdf = true;
						}
						if(ext !== 'pdf' && ext !== 'doc' && ext !== 'xls'){
							pdf.img = true;
						}
						console.log(ext)
					})					
					console.log("Extras", self.pdfsExtras)
					context.pdfsExtras = self.pdfsExtras ;
					return context;
				})

				
			})
			

				layout.on('beforeShowContent', function () {
					var customerGroupingItemIsId = container.items;
					var currentRole = container.currentRole;
					_.extend(ProductDetailsQuantityView.prototype, {
						getContext: _.wrap(ProductDetailsQuantityView.prototype.getContext, function getContext(fn) {
							var self = this;
							var returnContext = fn.apply(this, _.toArray(arguments).slice(1));
							var items = self.model.get('item').get('internalid');
							if (currentRole == 1087) {
								var hideQuantityInputBox;
								customerGroupingItemIsId.find(id => id.includes(items) ? hideQuantityInputBox = true : hideQuantityInputBox = false)
								// console.log(hideQuantityInputBox);
								returnContext.hideQuantityInputBox = hideQuantityInputBox;
							}

							return returnContext;
						})
					})
				})

			
		}
	};
});




