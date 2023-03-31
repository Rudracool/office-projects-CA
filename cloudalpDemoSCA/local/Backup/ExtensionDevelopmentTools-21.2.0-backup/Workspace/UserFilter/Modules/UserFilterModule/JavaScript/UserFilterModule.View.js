// @module Uf.UserFilter.UserFilterModule
define('Uf.UserFilter.UserFilterModule.View'
,	[
	'uf_userfilter_userfiltermodule.tpl'
	
	,	'Backbone'
    ]
, function (
	uf_userfilter_userfiltermodule_tpl
	
	,	Backbone
)
{
    'use strict';

	// @class Uf.UserFilter.UserFilterModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: uf_userfilter_userfiltermodule_tpl

	,	initialize: function (options) {
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Uf.UserFilter.UserFilterModule.View.Context
	,	getContext: function getContext()
		{
			//@class Uf.UserFilter.UserFilterModule.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
