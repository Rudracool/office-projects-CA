// @module CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem
define('CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.View'
,	[
	'ca_hideaddtocartbtningiftitem_hideaddtocartbtningiftitem.tpl'
	
	,	'CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_hideaddtocartbtningiftitem_hideaddtocartbtningiftitem_tpl
	
	,	HideAddtoCartBtnInGiftItemSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_hideaddtocartbtningiftitem_hideaddtocartbtningiftitem_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new HideAddtoCartBtnInGiftItemModel();
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

		//@method getContext @return CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.View.Context
	,	getContext: function getContext()
		{
			//@class CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.View.Context
			// this.message = this.message || 'Hello World!!'
			return {
				// message: this.message
			};
		}
	});
});
