// @module ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf
define('ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf.View'
,	[
	'reorderextensionlistheader_reorderitemextpdfandcsv_reorderextensionslistheaderpdf.tpl'
	
	,	'ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf.SS2Model'
	
	,	'Backbone'
    ]
, function (
	reorderextensionlistheader_reorderitemextpdfandcsv_reorderextensionslistheaderpdf_tpl
	
	,	ReorderExtensionsListHeaderPdfSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf.View @extends Backbone.View
	return Backbone.View.extend({

		template: reorderextensionlistheader_reorderitemextpdfandcsv_reorderextensionslistheaderpdf_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new ReorderExtensionsListHeaderPdfModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf.View.Context
	,	getContext: function getContext()
		{
			//@class ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
