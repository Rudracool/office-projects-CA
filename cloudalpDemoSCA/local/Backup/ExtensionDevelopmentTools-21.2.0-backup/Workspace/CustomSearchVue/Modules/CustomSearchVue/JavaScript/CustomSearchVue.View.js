// @module STAXS.CustomSearchVue.CustomSearchVue
define('STAXS.CustomSearchVue.CustomSearchVue.View'
	, [
		'staxs_customsearchvue_customsearchvue.tpl'

		, 'STAXS.CustomSearchVue.CustomSearchVue.Model'

		, 'Backbone'
		, 'vue'
		, 'lodash'
	]
	, function (
		staxs_customsearchvue_customsearchvue_tpl

		, CustomSearchVueModel

		, Backbone
		, vue
		, lodash
	) {


		// @class STAXS.CustomSearchVue.CustomSearchVue.View @extends Backbone.View
		return Backbone.View.extend({

			template: staxs_customsearchvue_customsearchvue_tpl

			, initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				this.model = new CustomSearchVueModel();

				// var self = this;
				// this.model.fetch().done(function (result) {
				// 	self.records = result.records;
				// 	self.render();
				// });

				// const app = vue.createApp({
				// 	template: '<h1>Welcome</h1>'
				// });
				// app.mount('#app');
			}
			, beforeShowContent: function () {
				var promise = jQuery.Deferred();
				this.model.fetch().then((res) => {
					promise.resolve();
				});
				return promise;
			}

			, events: {
				'change .cust-item-search': "cust_item_search"
			}

			, bindings: {
			}

			, childViews: {

			}
			, cust_item_search: function (e) {
				let userInput = (e.target.value).toLowerCase();
				var fil = lodash.filter(this.model.get('records'), (dataObj) => {
					if ((dataObj.name.indexOf(userInput) != -1)) {

						return dataObj;
					}
				});
				// window.vue = vue;
				// window.createApp = new vue({
				// 		el: "#app",
				// 		mounted: function (){
				// 		this.showcontent = true;
				// 	},

				// 	data: function (){
				// 			var data = lodash.extend(fil,{showcontent:false});
				// 			console.log(data ,"vue");
				// 			return data;
				// 	},
				// 		methods:{}

				// 	});
				// console.log( window.createApp._data,"window.createApp");
			}

			//@method getContext @return STAXS.CustomSearchVue.CustomSearchVue.View.Context
			, getContext: function getContext() {
				//@class STAXS.CustomSearchVue.CustomSearchVue.View.Context
				// this.message = this.message || 'Hello World!!';
				console.log(this.model.get('records'), "get");
				return {
					item: this.model.get('records')
				};
			}
		});
	});
