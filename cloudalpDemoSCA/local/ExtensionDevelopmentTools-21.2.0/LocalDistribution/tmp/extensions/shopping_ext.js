var extensions = {};

extensions['CA.HideAddtoCartBtnInGiftItem.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/HideAddtoCartBtnInGiftItem/1.0.0/' + asset;
}

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
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/HideAddtoCartBtnInGiftItem.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/HideAddtoCartBtnInGiftItem/SuiteScript2/HideAddtoCartBtnInGiftItem.Service.ss"
            ),
            true
        )
});
});



define(
	'CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem'
,   [
		'CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.View'
	,	'ProductDetails.Full.View'
	,	'Cart.AddToCart.Button.View'
	,	'OrderWizard.Module.NonShippableItems'
	]
,   function (
		HideAddtoCartBtnInGiftItemView
	,	ProductDetailsFullView
	,	CartAddToCartButtonView
	,	OrderWizardModuleNonShippableItems
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
			// var layout = container.getComponent('Layout');
			
			// if(layout)
			// {
			// 	layout.addChildView('Header.Logo', function() { 
			// 		return new HideAddtoCartBtnInGiftItemView({ container: container });
			// 	});
			// }
			_.extend(CartAddToCartButtonView.prototype,{
				getContext:_.wrap(CartAddToCartButtonView.prototype.getContext,function getContext(fn){
					var self = this;
					let context = fn.apply(this, _.toArray(arguments).slice(1));
					var itemType =self.model.get('item').get('itemtype');
					var showAddToCartButton = true;
					if (itemType === "GiftCert") {
						showAddToCartButton = false;
					}
					context.showaddtocartbtn = showAddToCartButton;
					return context;
				})
			})
			_.extend(OrderWizardModuleNonShippableItems.prototype,{
				getContext:_.wrap(OrderWizardModuleNonShippableItems.prototype.getContext,function getContext(fn) {
					console.log(this);
					let context = fn.apply(this, _.toArray(arguments).slice(1));
					return context;
				})
			})

		}
	};
});


};

extensions['mia.instafeed.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/mia/instafeed/1.0.0/' + asset;
}

// @module mia.instafeed.instafeedExt
define('mia.instafeed.instafeedExt.View'
,	[
	'mia_instafeed_instafeedext.tpl'
	
	,	'mia.instafeed.instafeedExt.SS2Model'
	,	'jQuery'
	,	'Backbone'
	, 	'Instafeed'
	,	"jquery.slick"
	,	'SC.Configuration'
    ]
, function (
	mia_instafeed_instafeedext_tpl
	
	,	instafeedExtSS2Model
	,	jQuery
	,	Backbone
	,	Instafeed
	,	slick
	,	Configuration
)
{
    'use strict';

	// @class mia.instafeed.instafeedExt.View @extends Backbone.View
	return Backbone.View.extend({ 

		template: mia_instafeed_instafeedext_tpl


	,	initialize: function initialize(options) {
		// var access_token = Configuration.get('instagramApi.accessKey');
		// var sort_by = Configuration.get('instagramApi.sortBy');
		// var getData = Configuration.get('instagramApi.getData');
		// var thumbnail = Configuration.get('instagramApi.getData');
		// 	$(()=>{
		// 	var self = this;
		// 	var instafeeda = new Instafeed({
		// 		// accessToken: 'IGQVJYbGd5eG5tTnlEbEVvUGp3Y2NoNXNMSF96enItN3JlTzFTeWpSTXdYWkJHcWJ6Qi1XSTIzUVNBM1hpVUg5TGFfSnNBeEcwcXNYSmtleFZAnMHM3SVBqTC0xR1NaVVo1X1poZAFR3cjctYUJrWW03OQZDZD',
		// 		accessToken: access_token,
		// 		sortBy:sort_by,
		// 		get:getData,
		// 		resolution:thumbnail,
		// 		after: function() {
				
		// 			self.$('.instafeed').slick({
		// 				dots: false,
		// 				infinite: true,
		// 				slidesToShow: 8,
		// 				slidesToScroll: 2,
		// 				arrows: false,
		// 				adaptiveHeight: true,
		// 				autoplay: true,
		// 				responsive: [{
		// 						breakpoint: 700,
		// 						settings: {
		// 							slidesToShow: 2,
		// 							slidesToScroll: 2,
		// 						}
		// 					},
		// 					{
		// 						breakpoint: 1024,
		// 						settings: {
		// 							slidesToShow: 3,
		// 							slidesToScroll: 2
		// 						}
		// 					}
		// 				]
		// 			});
		// 		},
		// 		template:'<div class="gallery-item" data-username="{{username}}" tabindex="0"><div class="image-section" style="background:url({{image}});background-position: top center;background-size: cover;background-repeat: no-repeat;"><a class="gallery-item-info" href="{{link}}"></a></div></div>'
				
		// 	});
		// 	if ($('#instafeed').length !== 0 ) {
		// 		instafeeda.run();
		// 	}
		// });
		
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}
		//@method getContext @return mia.instafeed.instafeedExt.View.Context
	,	getContext: function getContext(data)
		{
			// var sliderSetting = {
			// 	dots:Configuration.get('instagramApi.sliderDots'),
			// 	infinite: Configuration.get('instagramApi.infinite'),
			// 	slidesToShow:Configuration.get('instagramApi.slidesToShow'),
			// 	slidesToScroll: Configuration.get('instagramApi.slidesToScroll'),
			// 	arrows: Configuration.get('instagramApi.arrow'),
			// 	adaptiveHeight: Configuration.get('instagramApi.adaptiveHeight'),
			// 	autoplay: Configuration.get('instagramApi.autoplay'),
			// 	responsive:[{
			// 		breakpoint: 700,
			// 			settings: {
			// 				slidesToShow: 2,
			// 				slidesToScroll: 2,
			// 			}
			// 		},
			// 		{
			// 			breakpoint: 1024,
			// 			settings: {
			// 				slidesToShow: 3,
			// 				slidesToScroll: 2
			// 			}
			// 		}]


			// }

			//@class mia.instafeed.instafeedExt.View.Context
			return {
				
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("mia.instafeed.instafeedExt.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/instafeedExt.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("mia.instafeed.instafeedExt.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/instafeedExt/SuiteScript2/instafeedExt.Service.ss"
            ),
            true
        )
});
});


// /* instafeed.js | v2.0.0 | https://github.com/stevenschobert/instafeed.js | License: MIT */
// (function(global, factory) {
//     typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, 
//     global.Instafeed = factory());
//   })(this, function() {
//     "use strict";
define('Instafeed', ['jQuery'], function ($) {
    function assert(val, msg) {
      if (!val) {
        throw new Error(msg);
      }
    }
    function Instafeed(options) {
      assert(!options || typeof options === "object", "options must be an object, got " + options + " (" + typeof options + ")");
      var opts = {
        accessToken: null,
        accessTokenTimeout: 1e4,
        after: null,
        apiTimeout: 1e4,
        apiLimit: null,
        before: null,
        debug: false,
        error: null,
        filter: null,
        limit: null,
        mock: false,
        render: null,
        sort: null,
        success: null,
        target: "instafeed",
        template: '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',
        templateBoundaries: [ "{{", "}}" ],
        transform: null
      };
      var state = {
        running: false,
        node: null,
        token: null,
        paging: null,
        pool: []
      };
      if (options) {
        for (var optKey in opts) {
          if (typeof options[optKey] !== "undefined") {
            opts[optKey] = options[optKey];
          }
        }
      }
      assert(typeof opts.target === "string" || typeof opts.target === "object", "target must be a string or DOM node, got " + opts.target + " (" + typeof opts.target + ")");
      assert(typeof opts.accessToken === "string" || typeof opts.accessToken === "function", "accessToken must be a string or function, got " + opts.accessToken + " (" + typeof opts.accessToken + ")");
      assert(typeof opts.accessTokenTimeout === "number", "accessTokenTimeout must be a number, got " + opts.accessTokenTimeout + " (" + typeof opts.accessTokenTimeout + ")");
      assert(typeof opts.apiTimeout === "number", "apiTimeout must be a number, got " + opts.apiTimeout + " (" + typeof opts.apiTimeout + ")");
      assert(typeof opts.debug === "boolean", "debug must be true or false, got " + opts.debug + " (" + typeof opts.debug + ")");
      assert(typeof opts.mock === "boolean", "mock must be true or false, got " + opts.mock + " (" + typeof opts.mock + ")");
      assert(typeof opts.templateBoundaries === "object" && opts.templateBoundaries.length === 2 && typeof opts.templateBoundaries[0] === "string" && typeof opts.templateBoundaries[1] === "string", "templateBoundaries must be an array of 2 strings, got " + opts.templateBoundaries + " (" + typeof opts.templateBoundaries + ")");
      assert(!opts.template || typeof opts.template === "string", "template must null or string, got " + opts.template + " (" + typeof opts.template + ")");
      assert(!opts.error || typeof opts.error === "function", "error must be null or function, got " + opts.error + " (" + typeof opts.error + ")");
      assert(!opts.before || typeof opts.before === "function", "before must be null or function, got " + opts.before + " (" + typeof opts.before + ")");
      assert(!opts.after || typeof opts.after === "function", "after must be null or function, got " + opts.after + " (" + typeof opts.after + ")");
      assert(!opts.success || typeof opts.success === "function", "success must be null or function, got " + opts.success + " (" + typeof opts.success + ")");
      assert(!opts.filter || typeof opts.filter === "function", "filter must be null or function, got " + opts.filter + " (" + typeof opts.filter + ")");
      assert(!opts.transform || typeof opts.transform === "function", "transform must be null or function, got " + opts.transform + " (" + typeof opts.transform + ")");
      assert(!opts.sort || typeof opts.sort === "function", "sort must be null or function, got " + opts.sort + " (" + typeof opts.sort + ")");
      assert(!opts.render || typeof opts.render === "function", "render must be null or function, got " + opts.render + " (" + typeof opts.render + ")");
      assert(!opts.limit || typeof opts.limit === "number", "limit must be null or number, got " + opts.limit + " (" + typeof opts.limit + ")");
      assert(!opts.apiLimit || typeof opts.apiLimit === "number", "apiLimit must null or number, got " + opts.apiLimit + " (" + typeof opts.apiLimit + ")");
      this._state = state;
      this._options = opts;
    }
    Instafeed.prototype.run = function run() {
      var scope = this;
      this._debug("run", "options", this._options);
      this._debug("run", "state", this._state);
      if (this._state.running) {
        this._debug("run", "already running, skipping");
        return false;
      }
      this._start();
      this._debug("run", "getting dom node");
      if (typeof this._options.target === "string") {
        this._state.node = document.getElementById(this._options.target);
      } else {
        this._state.node = this._options.target;
      }
      if (!this._state.node) {
        this._fail(new Error("no element found with ID " + this._options.target));
        return false;
      }
      this._debug("run", "got dom node", this._state.node);
      this._debug("run", "getting access token");
      this._getAccessToken(function onTokenReceived(err, token) {
        if (err) {
          scope._debug("onTokenReceived", "error", err);
          scope._fail(new Error("error getting access token: " + err.message));
          return;
        }
        scope._debug("onTokenReceived", "got token", token);
        scope._state.token = token;
        scope._showNext(function onNextShown(err) {
          if (err) {
            scope._debug("onNextShown", "error", err);
            scope._fail(err);
            return;
          }
          scope._finish();
        });
      });
      return true;
    };
    Instafeed.prototype.hasNext = function hasNext() {
      var paging = this._state.paging;
      var pool = this._state.pool;
      this._debug("hasNext", "paging", paging);
      this._debug("hasNext", "pool", pool.length, pool);
      return pool.length > 0 || paging && typeof paging.next === "string";
    };
    Instafeed.prototype.next = function next() {
      var scope = this;
      if (!scope.hasNext()) {
        scope._debug("next", "hasNext is false, skipping");
        return false;
      }
      if (scope._state.running) {
        scope._debug("next", "already running, skipping");
        return false;
      }
      scope._start();
      scope._showNext(function onNextShown(err) {
        if (err) {
          scope._debug("onNextShown", "error", err);
          scope._fail(err);
          return;
        }
        scope._finish();
      });
    };
    Instafeed.prototype._showNext = function showNext(callback) {
      var scope = this;
      var url = null;
      var poolItems = null;
      var hasLimit = typeof this._options.limit === "number";
      scope._debug("showNext", "pool", scope._state.pool.length, scope._state.pool);
      if (scope._state.pool.length > 0) {
        if (hasLimit) {
          poolItems = scope._state.pool.splice(0, scope._options.limit);
        } else {
          poolItems = scope._state.pool.splice(0);
        }
        scope._debug("showNext", "items from pool", poolItems.length, poolItems);
        scope._debug("showNext", "updated pool", scope._state.pool.length, scope._state.pool);
        if (scope._options.mock) {
          scope._debug("showNext", "mock enabled, skipping render");
        } else {
          try {
            scope._renderData(poolItems);
          } catch (renderErr) {
            callback(renderErr);
            return;
          }
        }
        callback(null);
      } else {
        if (scope._state.paging && typeof scope._state.paging.next === "string") {
          url = scope._state.paging.next;
        } else {
          url = "https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=" + scope._state.token;
          if (!scope._options.apiLimit && typeof scope._options.limit === "number") {
            scope._debug("showNext", "no apiLimit set, falling back to limit", scope._options.apiLimit, scope._options.limit);
            url = url + "&limit=" + scope._options.limit;
          } else if (typeof scope._options.apiLimit === "number") {
            scope._debug("showNext", "apiLimit set, overriding limit", scope._options.apiLimit, scope._options.limit);
            url = url + "&limit=" + scope._options.apiLimit;
          }
        }
        scope._debug("showNext", "making request", url);
        scope._makeApiRequest(url, function onResponseReceived(err, data) {
          var processed = null;
          if (err) {
            scope._debug("onResponseReceived", "error", err);
            callback(new Error("api request error: " + err.message));
            return;
          }
          scope._debug("onResponseReceived", "data", data);
          scope._success(data);
          scope._debug("onResponseReceived", "setting paging", data.paging);
          scope._state.paging = data.paging;
          try {
            processed = scope._processData(data);
            scope._debug("onResponseReceived", "processed data", processed);
            if (processed.unused && processed.unused.length > 0) {
              scope._debug("onResponseReceived", "saving unused to pool", processed.unused.length, processed.unused);
              for (var i = 0; i < processed.unused.length; i++) {
                scope._state.pool.push(processed.unused[i]);
              }
            }
          } catch (processErr) {
            callback(processErr);
            return;
          }
          if (scope._options.mock) {
            scope._debug("onResponseReceived", "mock enabled, skipping append");
          } else {
            try {
              scope._renderData(processed.items);
            } catch (renderErr) {
              callback(renderErr);
              return;
            }
          }
          callback(null);
        });
      }
    };
    Instafeed.prototype._processData = function processData(data) {
      var hasTransform = typeof this._options.transform === "function";
      var hasFilter = typeof this._options.filter === "function";
      var hasSort = typeof this._options.sort === "function";
      var hasLimit = typeof this._options.limit === "number";
      var transformedFiltered = [];
      var limitDelta = null;
      var dataItem = null;
      var transformedItem = null;
      var filterResult = null;
      var unusedItems = null;
      this._debug("processData", "hasFilter", hasFilter, "hasTransform", hasTransform, "hasSort", hasSort, "hasLimit", hasLimit);
      if (typeof data !== "object" || typeof data.data !== "object" || data.data.length <= 0) {
        return null;
      }
      for (var i = 0; i < data.data.length; i++) {
        dataItem = this._getItemData(data.data[i]);
        if (hasTransform) {
          try {
            transformedItem = this._options.transform(dataItem);
            this._debug("processData", "transformed item", dataItem, transformedItem);
          } catch (err) {
            this._debug("processData", "error calling transform", err);
            throw new Error("error in transform: " + err.message);
          }
        } else {
          transformedItem = dataItem;
        }
        if (hasFilter) {
          try {
            filterResult = this._options.filter(transformedItem);
            this._debug("processData", "filter item result", transformedItem, filterResult);
          } catch (err) {
            this._debug("processData", "error calling filter", err);
            throw new Error("error in filter: " + err.message);
          }
          if (filterResult) {
            transformedFiltered.push(transformedItem);
          }
        } else {
          transformedFiltered.push(transformedItem);
        }
      }
      if (hasSort) {
        try {
          transformedFiltered.sort(this._options.sort);
        } catch (err) {
          this._debug("processData", "error calling sort", err);
          throw new Error("error in sort: " + err.message);
        }
      }
      if (hasLimit) {
        limitDelta = transformedFiltered.length - this._options.limit;
        this._debug("processData", "checking limit", transformedFiltered.length, this._options.limit, limitDelta);
        if (limitDelta > 0) {
          unusedItems = transformedFiltered.slice(transformedFiltered.length - limitDelta);
          this._debug("processData", "unusedItems", unusedItems.length, unusedItems);
          transformedFiltered.splice(transformedFiltered.length - limitDelta, limitDelta);
        }
      }
      return {
        items: transformedFiltered,
        unused: unusedItems
      };
    };
    Instafeed.prototype._extractTags = function extractTags(str) {
      var exp = /#([^\s]+)/gi;
      var badChars = /[~`!@#$%^&*\(\)\-\+={}\[\]:;"'<>\?,\./|\\\s]+/i;
      var tags = [];
      var match = null;
      if (typeof str === "string") {
        while ((match = exp.exec(str)) !== null) {
          if (badChars.test(match[1]) === false) {
            tags.push(match[1]);
          }
        }
      }
      return tags;
    };
    Instafeed.prototype._getItemData = function getItemData(data) {
      var type = null;
      var image = null;
      switch (data.media_type) {
       case "IMAGE":
        type = "image";
        image = data.media_url;
        break;
  
       case "VIDEO":
        type = "video";
        image = data.thumbnail_url;
        break;
  
       case "CAROUSEL_ALBUM":
        type = "album";
        image = data.media_url;
        break;
      }
      return {
        caption: data.caption,
        tags: this._extractTags(data.caption),
        id: data.id,
        image: image,
        link: data.permalink,
        model: data,
        timestamp: data.timestamp,
        type: type,
        username: data.username
      };
    };
    Instafeed.prototype._renderData = function renderData(items) {
      var hasTemplate = typeof this._options.template === "string";
      var hasRender = typeof this._options.render === "function";
      var item = null;
      var itemHtml = null;
      var container = null;
      var html = "";
      this._debug("renderData", "hasTemplate", hasTemplate, "hasRender", hasRender);
      if (typeof items !== "object" || items.length <= 0) {
        return;
      }
      for (var i = 0; i < items.length; i++) {
        item = items[i];
        if (hasRender) {
          try {
            itemHtml = this._options.render(item, this._options);
            this._debug("renderData", "custom render result", item, itemHtml);
          } catch (err) {
            this._debug("renderData", "error calling render", err);
            throw new Error("error in render: " + err.message);
          }
        } else if (hasTemplate) {
          itemHtml = this._basicRender(item);
        }
        if (itemHtml) {
          html = html + itemHtml;
        } else {
          this._debug("renderData", "render item did not return any content", item);
        }
      }
      this._debug("renderData", "html content", html);
      container = document.createElement("div");
      container.innerHTML = html;
      this._debug("renderData", "container", container, container.childNodes.length, container.childNodes);
      while (container.childNodes.length > 0) {
        this._debug("renderData", "appending child", container.childNodes[0]);
        this._state.node.appendChild(container.childNodes[0]);
      }
    };
    Instafeed.prototype._basicRender = function basicRender(data) {
      var exp = new RegExp(this._options.templateBoundaries[0] + "([\\s\\w.]+)" + this._options.templateBoundaries[1], "gm");
      var template = this._options.template;
      var match = null;
      var output = "";
      var substr = null;
      var lastIndex = 0;
      var keyPath = null;
      var keyPathValue = null;
      while ((match = exp.exec(template)) !== null) {
        keyPath = match[1];
        substr = template.slice(lastIndex, match.index);
        output = output + substr;
        keyPathValue = this._valueForKeyPath(keyPath, data);
        if (keyPathValue) {
          output = output + keyPathValue.toString();
        }
        lastIndex = exp.lastIndex;
      }
      if (lastIndex < template.length) {
        substr = template.slice(lastIndex, template.length);
        output = output + substr;
      }
      return output;
    };
    Instafeed.prototype._valueForKeyPath = function valueForKeyPath(keyPath, data) {
      var exp = /([\w]+)/gm;
      var match = null;
      var key = null;
      var lastValue = data;
      while ((match = exp.exec(keyPath)) !== null) {
        if (typeof lastValue !== "object") {
          return null;
        }
        key = match[1];
        lastValue = lastValue[key];
      }
      return lastValue;
    };
    Instafeed.prototype._fail = function fail(err) {
      var didHook = this._runHook("error", err);
      if (!didHook && console && typeof console.error === "function") {
        console.error(err);
      }
      this._state.running = false;
    };
    Instafeed.prototype._start = function start() {
      this._state.running = true;
      this._runHook("before");
    };
    Instafeed.prototype._finish = function finish() {
      this._runHook("after");
      this._state.running = false;
    };
    Instafeed.prototype._success = function success(data) {
      this._runHook("success", data);
      this._state.running = false;
    };
    Instafeed.prototype._makeApiRequest = function makeApiRequest(url, callback) {
      var called = false;
      var scope = this;
      var apiRequest = null;
      var callbackOnce = function callbackOnce(err, value) {
        if (!called) {
          called = true;
          callback(err, value);
        }
      };
      apiRequest = new XMLHttpRequest();
      apiRequest.ontimeout = function apiRequestTimedOut() {
        callbackOnce(new Error("api request timed out"));
      };
      apiRequest.onerror = function apiRequestOnError() {
        callbackOnce(new Error("api connection error"));
      };
      apiRequest.onload = function apiRequestOnLoad(event) {
        var contentType = apiRequest.getResponseHeader("Content-Type");
        var responseJson = null;
        scope._debug("apiRequestOnLoad", "loaded", event);
        scope._debug("apiRequestOnLoad", "response status", apiRequest.status);
        scope._debug("apiRequestOnLoad", "response content type", contentType);
        if (contentType.indexOf("application/json") >= 0) {
          try {
            responseJson = JSON.parse(apiRequest.responseText);
          } catch (err) {
            scope._debug("apiRequestOnLoad", "json parsing error", err, apiRequest.responseText);
            callbackOnce(new Error("error parsing response json"));
            return;
          }
        }
        if (apiRequest.status !== 200) {
          if (responseJson && responseJson.error) {
            callbackOnce(new Error(responseJson.error.code + " " + responseJson.error.message));
          } else {
            callbackOnce(new Error("status code " + apiRequest.status));
          }
          return;
        }
        callbackOnce(null, responseJson);
      };
      apiRequest.open("GET", url, true);
      apiRequest.timeout = this._options.apiTimeout;
      apiRequest.send();
    };
    Instafeed.prototype._getAccessToken = function getAccessToken(callback) {
      var called = false;
      var scope = this;
      var timeoutCheck = null;
      var callbackOnce = function callbackOnce(err, value) {
        if (!called) {
          called = true;
          clearTimeout(timeoutCheck);
          callback(err, value);
        }
      };
      if (typeof this._options.accessToken === "function") {
        this._debug("getAccessToken", "calling accessToken as function");
        timeoutCheck = setTimeout(function accessTokenTimeoutCheck() {
          scope._debug("getAccessToken", "timeout check", called);
          callbackOnce(new Error("accessToken timed out"), null);
        }, this._options.accessTokenTimeout);
        try {
          this._options.accessToken(function accessTokenReceiver(err, value) {
            scope._debug("getAccessToken", "received accessToken callback", called, err, value);
            callbackOnce(err, value);
          });
        } catch (err) {
          this._debug("getAccessToken", "error invoking the accessToken as function", err);
          callbackOnce(err, null);
        }
      } else {
        this._debug("getAccessToken", "treating accessToken as static", typeof this._options.accessToken);
        callbackOnce(null, this._options.accessToken);
      }
    };
    Instafeed.prototype._debug = function debug() {
      var args = null;
      if (this._options.debug && console && typeof console.log === "function") {
        args = [].slice.call(arguments);
        args[0] = "[Instafeed] [" + args[0] + "]";
        console.log.apply(null, args);
      }
    };
    Instafeed.prototype._runHook = function runHook(hookName, data) {
      var success = false;
      if (typeof this._options[hookName] === "function") {
        try {
          this._options[hookName](data);
          success = true;
        } catch (err) {
          this._debug("runHook", "error calling hook", hookName, err);
        }
      }
      return success;
    };
    return Instafeed;
  });

 /*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */

define('jquery.slick', ['jQuery'], function ($) {
    var Slick = window.Slick || {};
  
    Slick = (function() {
  
        var instanceUid = 0;
  
        function Slick(element, settings) {
  
            var _ = this, dataSettings;
  
            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next " aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };
  
            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };
  
            $.extend(_, _.initials);
  
            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;
  
            dataSettings = $(element).data('slick') || {};
  
            _.options = $.extend({}, _.defaults, settings, dataSettings);
  
            _.currentSlide = _.options.initialSlide;
  
            _.originalSettings = _.options;
  
            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }
  
            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
  
            _.instanceUid = instanceUid++;
  
            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
  
  
            _.registerBreakpoints();
            _.init(true);
  
        }
  
        return Slick;
  
    }());
  
    Slick.prototype.activateADA = function() {
        var _ = this;
  
        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });
  
    };
  
    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
  
        var _ = this;
  
        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }
  
        _.unload();
  
        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }
  
        _.$slides = _.$slideTrack.children(this.options.slide);
  
        _.$slideTrack.children(this.options.slide).detach();
  
        _.$slideTrack.append(_.$slides);
  
        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });
  
        _.$slidesCache = _.$slides;
  
        _.reinit();
  
    };
  
    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };
  
    Slick.prototype.animateSlide = function(targetLeft, callback) {
  
        var animProps = {},
            _ = this;
  
        _.animateHeight();
  
        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }
  
        } else {
  
            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });
  
            } else {
  
                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);
  
                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);
  
                if (callback) {
                    setTimeout(function() {
  
                        _.disableTransition();
  
                        callback.call();
                    }, _.options.speed);
                }
  
            }
  
        }
  
    };
  
    Slick.prototype.getNavTarget = function() {
  
        var _ = this,
            asNavFor = _.options.asNavFor;
  
        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }
  
        return asNavFor;
  
    };
  
    Slick.prototype.asNavFor = function(index) {
  
        var _ = this,
            asNavFor = _.getNavTarget();
  
        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
  
    };
  
    Slick.prototype.applyTransition = function(slide) {
  
        var _ = this,
            transition = {};
  
        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }
  
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
  
    };
  
    Slick.prototype.autoPlay = function() {
  
        var _ = this;
  
        _.autoPlayClear();
  
        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }
  
    };
  
    Slick.prototype.autoPlayClear = function() {
  
        var _ = this;
  
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
  
    };
  
    Slick.prototype.autoPlayIterator = function() {
  
        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;
  
        if ( !_.paused && !_.interrupted && !_.focussed ) {
  
            if ( _.options.infinite === false ) {
  
                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }
  
                else if ( _.direction === 0 ) {
  
                    slideTo = _.currentSlide - _.options.slidesToScroll;
  
                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }
  
                }
  
            }
  
            _.slideHandler( slideTo );
  
        }
  
    };
  
    Slick.prototype.buildArrows = function() {
  
        var _ = this;
  
        if (_.options.arrows === true ) {
  
            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
  
            if( _.slideCount > _.options.slidesToShow ) {
  
                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
  
                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }
  
                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }
  
                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }
  
            } else {
  
                _.$prevArrow.add( _.$nextArrow )
  
                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });
  
            }
  
        }
  
    };
  
    Slick.prototype.buildDots = function() {
  
        var _ = this,
            i, dot;
  
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
  
            _.$slider.addClass('slick-dotted');
  
            dot = $('<ul />').addClass(_.options.dotsClass);
  
            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }
  
            _.$dots = dot.appendTo(_.options.appendDots);
  
            _.$dots.find('li').first().addClass('slick-active');
  
        }
  
    };
  
    Slick.prototype.buildOut = function() {
  
        var _ = this;
  
        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');
  
        _.slideCount = _.$slides.length;
  
        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });
  
        _.$slider.addClass('slick-slider');
  
        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();
  
        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);
  
        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }
  
        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
  
        _.setupInfinite();
  
        _.buildArrows();
  
        _.buildDots();
  
        _.updateDots();
  
  
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
  
        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }
  
    };
  
    Slick.prototype.buildRows = function() {
  
        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;
  
        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();
  
        if(_.options.rows > 0) {
  
            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );
  
            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }
  
            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });
  
        }
  
    };
  
    Slick.prototype.checkResponsive = function(initial, forceUpdate) {
  
        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();
  
        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }
  
        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {
  
            targetBreakpoint = null;
  
            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }
  
            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }
  
            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }
  
    };
  
    Slick.prototype.changeSlide = function(event, dontAnimate) {
  
        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;
  
        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }
  
        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }
  
        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
  
        switch (event.data.message) {
  
            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;
  
            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;
  
            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;
  
                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;
  
            default:
                return;
        }
  
    };
  
    Slick.prototype.checkNavigable = function(index) {
  
        var _ = this,
            navigables, prevNavigable;
  
        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }
  
        return index;
    };
  
    Slick.prototype.cleanUpEvents = function() {
  
        var _ = this;
  
        if (_.options.dots && _.$dots !== null) {
  
            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  
            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }
  
        _.$slider.off('focus.slick blur.slick');
  
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
  
            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }
  
        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
  
        _.$list.off('click.slick', _.clickHandler);
  
        $(document).off(_.visibilityChange, _.visibility);
  
        _.cleanUpSlideEvents();
  
        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }
  
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }
  
        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
  
        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
  
        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
  
        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
  
    };
  
    Slick.prototype.cleanUpSlideEvents = function() {
  
        var _ = this;
  
        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  
    };
  
    Slick.prototype.cleanUpRows = function() {
  
        var _ = this, originalSlides;
  
        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }
  
    };
  
    Slick.prototype.clickHandler = function(event) {
  
        var _ = this;
  
        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
  
    };
  
    Slick.prototype.destroy = function(refresh) {
  
        var _ = this;
  
        _.autoPlayClear();
  
        _.touchObject = {};
  
        _.cleanUpEvents();
  
        $('.slick-cloned', _.$slider).detach();
  
        if (_.$dots) {
            _.$dots.remove();
        }
  
        if ( _.$prevArrow && _.$prevArrow.length ) {
  
            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');
  
            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }
  
        if ( _.$nextArrow && _.$nextArrow.length ) {
  
            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');
  
            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }
  
  
        if (_.$slides) {
  
            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });
  
            _.$slideTrack.children(this.options.slide).detach();
  
            _.$slideTrack.detach();
  
            _.$list.detach();
  
            _.$slider.append(_.$slides);
        }
  
        _.cleanUpRows();
  
        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');
  
        _.unslicked = true;
  
        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }
  
    };
  
    Slick.prototype.disableTransition = function(slide) {
  
        var _ = this,
            transition = {};
  
        transition[_.transitionType] = '';
  
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
  
    };
  
    Slick.prototype.fadeSlide = function(slideIndex, callback) {
  
        var _ = this;
  
        if (_.cssTransitions === false) {
  
            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });
  
            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);
  
        } else {
  
            _.applyTransition(slideIndex);
  
            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });
  
            if (callback) {
                setTimeout(function() {
  
                    _.disableTransition(slideIndex);
  
                    callback.call();
                }, _.options.speed);
            }
  
        }
  
    };
  
    Slick.prototype.fadeSlideOut = function(slideIndex) {
  
        var _ = this;
  
        if (_.cssTransitions === false) {
  
            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
  
        } else {
  
            _.applyTransition(slideIndex);
  
            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });
  
        }
  
    };
  
    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
  
        var _ = this;
  
        if (filter !== null) {
  
            _.$slidesCache = _.$slides;
  
            _.unload();
  
            _.$slideTrack.children(this.options.slide).detach();
  
            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
  
            _.reinit();
  
        }
  
    };
  
    Slick.prototype.focusHandler = function() {
  
        var _ = this;
  
        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {
  
            event.stopImmediatePropagation();
            var $sf = $(this);
  
            setTimeout(function() {
  
                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }
  
            }, 0);
  
        });
    };
  
    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
  
        var _ = this;
        return _.currentSlide;
  
    };
  
    Slick.prototype.getDotCount = function() {
  
        var _ = this;
  
        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;
  
        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }
  
        return pagerQty - 1;
  
    };
  
    Slick.prototype.getLeft = function(slideIndex) {
  
        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;
  
        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);
  
        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1
  
                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }
  
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }
  
        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }
  
        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }
  
        if (_.options.variableWidth === true) {
  
            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }
  
            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }
  
            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }
  
                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }
  
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }
  
        return targetLeft;
  
    };
  
    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
  
        var _ = this;
  
        return _.options[option];
  
    };
  
    Slick.prototype.getNavigableIndexes = function() {
  
        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;
  
        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }
  
        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
  
        return indexes;
  
    };
  
    Slick.prototype.getSlick = function() {
  
        return this;
  
    };
  
    Slick.prototype.getSlideCount = function() {
  
        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;
  
        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
  
        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });
  
            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
  
            return slidesTraversed;
  
        } else {
            return _.options.slidesToScroll;
        }
  
    };
  
    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
  
        var _ = this;
  
        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);
  
    };
  
    Slick.prototype.init = function(creation) {
  
        var _ = this;
  
        if (!$(_.$slider).hasClass('slick-initialized')) {
  
            $(_.$slider).addClass('slick-initialized');
  
            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
  
        }
  
        if (creation) {
            _.$slider.trigger('init', [_]);
        }
  
        if (_.options.accessibility === true) {
            _.initADA();
        }
  
        if ( _.options.autoplay ) {
  
            _.paused = false;
            _.autoPlay();
  
        }
  
    };
  
    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });
  
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });
  
        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);
  
                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });
  
                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });
  
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];
  
                $(this).attr({
                    'role': 'presentation'
                });
  
                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });
  
            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }
  
        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }
  
        _.activateADA();
  
    };
  
    Slick.prototype.initArrowEvents = function() {
  
        var _ = this;
  
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);
  
            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }
  
    };
  
    Slick.prototype.initDotEvents = function() {
  
        var _ = this;
  
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
  
            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }
  
        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
  
            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));
  
        }
  
    };
  
    Slick.prototype.initSlideEvents = function() {
  
        var _ = this;
  
        if ( _.options.pauseOnHover ) {
  
            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
  
        }
  
    };
  
    Slick.prototype.initializeEvents = function() {
  
        var _ = this;
  
        _.initArrowEvents();
  
        _.initDotEvents();
        _.initSlideEvents();
  
        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);
  
        _.$list.on('click.slick', _.clickHandler);
  
        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
  
        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }
  
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }
  
        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
  
        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
  
        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
  
        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);
  
    };
  
    Slick.prototype.initUI = function() {
  
        var _ = this;
  
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
  
            _.$prevArrow.show();
            _.$nextArrow.show();
  
        }
  
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
  
            _.$dots.show();
  
        }
  
    };
  
    Slick.prototype.keyHandler = function(event) {
  
        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }
  
    };
  
    Slick.prototype.lazyLoad = function() {
  
        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;
  
        function loadImages(imagesScope) {
  
            $('img[data-lazy]', imagesScope).each(function() {
  
                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');
  
                imageToLoad.onload = function() {
  
                    image
                        .animate({ opacity: 0 }, 100, function() {
  
                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );
  
                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }
  
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });
  
                };
  
                imageToLoad.onerror = function() {
  
                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );
  
                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
  
                };
  
                imageToLoad.src = imageSource;
  
            });
  
        }
  
        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }
  
        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
  
        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');
  
            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }
  
        loadImages(loadRange);
  
        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
  
    };
  
    Slick.prototype.loadSlider = function() {
  
        var _ = this;
  
        _.setPosition();
  
        _.$slideTrack.css({
            opacity: 1
        });
  
        _.$slider.removeClass('slick-loading');
  
        _.initUI();
  
        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
  
    };
  
    Slick.prototype.next = Slick.prototype.slickNext = function() {
  
        var _ = this;
  
        _.changeSlide({
            data: {
                message: 'next'
            }
        });
  
    };
  
    Slick.prototype.orientationChange = function() {
  
        var _ = this;
  
        _.checkResponsive();
        _.setPosition();
  
    };
  
    Slick.prototype.pause = Slick.prototype.slickPause = function() {
  
        var _ = this;
  
        _.autoPlayClear();
        _.paused = true;
  
    };
  
    Slick.prototype.play = Slick.prototype.slickPlay = function() {
  
        var _ = this;
  
        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
  
    };
  
    Slick.prototype.postSlide = function(index) {
  
        var _ = this;
  
        if( !_.unslicked ) {
  
            _.$slider.trigger('afterChange', [_, index]);
  
            _.animating = false;
  
            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }
  
            _.swipeLeft = null;
  
            if ( _.options.autoplay ) {
                _.autoPlay();
            }
  
            if (_.options.accessibility === true) {
                _.initADA();
  
                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }
  
        }
  
    };
  
    Slick.prototype.prev = Slick.prototype.slickPrev = function() {
  
        var _ = this;
  
        _.changeSlide({
            data: {
                message: 'previous'
            }
        });
  
    };
  
    Slick.prototype.preventDefault = function(event) {
  
        event.preventDefault();
  
    };
  
    Slick.prototype.progressiveLazyLoad = function( tryCount ) {
  
        tryCount = tryCount || 1;
  
        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;
  
        if ( $imgsToLoad.length ) {
  
            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');
  
            imageToLoad.onload = function() {
  
                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );
  
                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }
  
                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');
  
                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }
  
                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();
  
            };
  
            imageToLoad.onerror = function() {
  
                if ( tryCount < 3 ) {
  
                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );
  
                } else {
  
                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );
  
                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
  
                    _.progressiveLazyLoad();
  
                }
  
            };
  
            imageToLoad.src = imageSource;
  
        } else {
  
            _.$slider.trigger('allImagesLoaded', [ _ ]);
  
        }
  
    };
  
    Slick.prototype.refresh = function( initializing ) {
  
        var _ = this, currentSlide, lastVisibleIndex;
  
        lastVisibleIndex = _.slideCount - _.options.slidesToShow;
  
        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }
  
        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;
  
        }
  
        currentSlide = _.currentSlide;
  
        _.destroy(true);
  
        $.extend(_, _.initials, { currentSlide: currentSlide });
  
        _.init();
  
        if( !initializing ) {
  
            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);
  
        }
  
    };
  
    Slick.prototype.registerBreakpoints = function() {
  
        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;
  
        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {
  
            _.respondTo = _.options.respondTo || 'window';
  
            for ( breakpoint in responsiveSettings ) {
  
                l = _.breakpoints.length-1;
  
                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
  
                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }
  
                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
  
                }
  
            }
  
            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });
  
        }
  
    };
  
    Slick.prototype.reinit = function() {
  
        var _ = this;
  
        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');
  
        _.slideCount = _.$slides.length;
  
        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }
  
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }
  
        _.registerBreakpoints();
  
        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();
  
        _.checkResponsive(false, true);
  
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }
  
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
  
        _.setPosition();
        _.focusHandler();
  
        _.paused = !_.options.autoplay;
        _.autoPlay();
  
        _.$slider.trigger('reInit', [_]);
  
    };
  
    Slick.prototype.resize = function() {
  
        var _ = this;
  
        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };
  
    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
  
        var _ = this;
  
        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }
  
        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }
  
        _.unload();
  
        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }
  
        _.$slides = _.$slideTrack.children(this.options.slide);
  
        _.$slideTrack.children(this.options.slide).detach();
  
        _.$slideTrack.append(_.$slides);
  
        _.$slidesCache = _.$slides;
  
        _.reinit();
  
    };
  
    Slick.prototype.setCSS = function(position) {
  
        var _ = this,
            positionProps = {},
            x, y;
  
        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
  
        positionProps[_.positionProp] = position;
  
        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
  
    };
  
    Slick.prototype.setDimensions = function() {
  
        var _ = this;
  
        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }
  
        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();
  
  
        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
  
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }
  
        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  
    };
  
    Slick.prototype.setFade = function() {
  
        var _ = this,
            targetLeft;
  
        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });
  
        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
  
    };
  
    Slick.prototype.setHeight = function() {
  
        var _ = this;
  
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
  
    };
  
    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {
  
        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */
  
        var _ = this, l, item, option, value, refresh = false, type;
  
        if( $.type( arguments[0] ) === 'object' ) {
  
            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';
  
        } else if ( $.type( arguments[0] ) === 'string' ) {
  
            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];
  
            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {
  
                type = 'responsive';
  
            } else if ( typeof arguments[1] !== 'undefined' ) {
  
                type = 'single';
  
            }
  
        }
  
        if ( type === 'single' ) {
  
            _.options[option] = value;
  
  
        } else if ( type === 'multiple' ) {
  
            $.each( option , function( opt, val ) {
  
                _.options[opt] = val;
  
            });
  
  
        } else if ( type === 'responsive' ) {
  
            for ( item in value ) {
  
                if( $.type( _.options.responsive ) !== 'array' ) {
  
                    _.options.responsive = [ value[item] ];
  
                } else {
  
                    l = _.options.responsive.length-1;
  
                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {
  
                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
  
                            _.options.responsive.splice(l,1);
  
                        }
  
                        l--;
  
                    }
  
                    _.options.responsive.push( value[item] );
  
                }
  
            }
  
        }
  
        if ( refresh ) {
  
            _.unload();
            _.reinit();
  
        }
  
    };
  
    Slick.prototype.setPosition = function() {
  
        var _ = this;
  
        _.setDimensions();
  
        _.setHeight();
  
        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }
  
        _.$slider.trigger('setPosition', [_]);
  
    };
  
    Slick.prototype.setProps = function() {
  
        var _ = this,
            bodyStyle = document.body.style;
  
        _.positionProp = _.options.vertical === true ? 'top' : 'left';
  
        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }
  
        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }
  
        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }
  
        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };
  
  
    Slick.prototype.setSlideClasses = function(index) {
  
        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;
  
        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');
  
        _.$slides
            .eq(index)
            .addClass('slick-current');
  
        if (_.options.centerMode === true) {
  
            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
  
            centerOffset = Math.floor(_.options.slidesToShow / 2);
  
            if (_.options.infinite === true) {
  
                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');
  
                } else {
  
                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');
  
                }
  
                if (index === 0) {
  
                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');
  
                } else if (index === _.slideCount - 1) {
  
                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');
  
                }
  
            }
  
            _.$slides
                .eq(index)
                .addClass('slick-center');
  
        } else {
  
            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
  
                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');
  
            } else if (allSlides.length <= _.options.slidesToShow) {
  
                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');
  
            } else {
  
                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
  
                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
  
                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');
  
                } else {
  
                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');
  
                }
  
            }
  
        }
  
        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };
  
    Slick.prototype.setupInfinite = function() {
  
        var _ = this,
            i, slideIndex, infiniteCount;
  
        if (_.options.fade === true) {
            _.options.centerMode = false;
        }
  
        if (_.options.infinite === true && _.options.fade === false) {
  
            slideIndex = null;
  
            if (_.slideCount > _.options.slidesToShow) {
  
                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }
  
                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });
  
            }
  
        }
  
    };
  
    Slick.prototype.interrupt = function( toggle ) {
  
        var _ = this;
  
        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;
  
    };
  
    Slick.prototype.selectHandler = function(event) {
  
        var _ = this;
  
        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');
  
        var index = parseInt(targetElement.attr('data-slick-index'));
  
        if (!index) index = 0;
  
        if (_.slideCount <= _.options.slidesToShow) {
  
            _.slideHandler(index, false, true);
            return;
  
        }
  
        _.slideHandler(index);
  
    };
  
    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
  
        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;
  
        sync = sync || false;
  
        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }
  
        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }
  
        if (sync === false) {
            _.asNavFor(index);
        }
  
        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);
  
        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
  
        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }
  
        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }
  
        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }
  
        _.animating = true;
  
        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
  
        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;
  
        _.setSlideClasses(_.currentSlide);
  
        if ( _.options.asNavFor ) {
  
            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');
  
            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }
  
        }
  
        _.updateDots();
        _.updateArrows();
  
        if (_.options.fade === true) {
            if (dontAnimate !== true) {
  
                _.fadeSlideOut(oldSlide);
  
                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });
  
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }
  
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
  
    };
  
    Slick.prototype.startLoad = function() {
  
        var _ = this;
  
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
  
            _.$prevArrow.hide();
            _.$nextArrow.hide();
  
        }
  
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
  
            _.$dots.hide();
  
        }
  
        _.$slider.addClass('slick-loading');
  
    };
  
    Slick.prototype.swipeDirection = function() {
  
        var xDist, yDist, r, swipeAngle, _ = this;
  
        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);
  
        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }
  
        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }
  
        return 'vertical';
  
    };
  
    Slick.prototype.swipeEnd = function(event) {
  
        var _ = this,
            slideCount,
            direction;
  
        _.dragging = false;
        _.swiping = false;
  
        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }
  
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;
  
        if ( _.touchObject.curX === undefined ) {
            return false;
        }
  
        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }
  
        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {
  
            direction = _.swipeDirection();
  
            switch ( direction ) {
  
                case 'left':
                case 'down':
  
                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();
  
                    _.currentDirection = 0;
  
                    break;
  
                case 'right':
                case 'up':
  
                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();
  
                    _.currentDirection = 1;
  
                    break;
  
                default:
  
  
            }
  
            if( direction != 'vertical' ) {
  
                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);
  
            }
  
        } else {
  
            if ( _.touchObject.startX !== _.touchObject.curX ) {
  
                _.slideHandler( _.currentSlide );
                _.touchObject = {};
  
            }
  
        }
  
    };
  
    Slick.prototype.swipeHandler = function(event) {
  
        var _ = this;
  
        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }
  
        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;
  
        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;
  
        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }
  
        switch (event.data.action) {
  
            case 'start':
                _.swipeStart(event);
                break;
  
            case 'move':
                _.swipeMove(event);
                break;
  
            case 'end':
                _.swipeEnd(event);
                break;
  
        }
  
    };
  
    Slick.prototype.swipeMove = function(event) {
  
        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;
  
        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
  
        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }
  
        curLeft = _.getLeft(_.currentSlide);
  
        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
  
        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
  
        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
  
        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }
  
        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }
  
        swipeDirection = _.swipeDirection();
  
        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }
  
        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }
  
  
        swipeLength = _.touchObject.swipeLength;
  
        _.touchObject.edgeHit = false;
  
        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }
  
        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }
  
        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }
  
        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }
  
        _.setCSS(_.swipeLeft);
  
    };
  
    Slick.prototype.swipeStart = function(event) {
  
        var _ = this,
            touches;
  
        _.interrupted = true;
  
        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }
  
        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }
  
        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
  
        _.dragging = true;
  
    };
  
    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
  
        var _ = this;
  
        if (_.$slidesCache !== null) {
  
            _.unload();
  
            _.$slideTrack.children(this.options.slide).detach();
  
            _.$slidesCache.appendTo(_.$slideTrack);
  
            _.reinit();
  
        }
  
    };
  
    Slick.prototype.unload = function() {
  
        var _ = this;
  
        $('.slick-cloned', _.$slider).remove();
  
        if (_.$dots) {
            _.$dots.remove();
        }
  
        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }
  
        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }
  
        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');
  
    };
  
    Slick.prototype.unslick = function(fromBreakpoint) {
  
        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();
  
    };
  
    Slick.prototype.updateArrows = function() {
  
        var _ = this,
            centerOffset;
  
        centerOffset = Math.floor(_.options.slidesToShow / 2);
  
        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {
  
            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
  
            if (_.currentSlide === 0) {
  
                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
  
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
  
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
  
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
  
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
  
            }
  
        }
  
    };
  
    Slick.prototype.updateDots = function() {
  
        var _ = this;
  
        if (_.$dots !== null) {
  
            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();
  
            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');
  
        }
  
    };
  
    Slick.prototype.visibility = function() {
  
        var _ = this;
  
        if ( _.options.autoplay ) {
  
            if ( document[_.hidden] ) {
  
                _.interrupted = true;
  
            } else {
  
                _.interrupted = false;
  
            }
  
        }
  
    };
  
    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };
  
  })
  


define(
	'mia.instafeed.instafeedExt'
,   [
		'mia.instafeed.instafeedExt.View'
	,	'Header.View'
	,	'Footer.View'
	,	'Header.MiniCart.View'
	,	'Cart.Summary.View'
	]
,   function (
		instafeedExtView
	,	HeaderView
	,	FooterView
	,	HeaderMiniCartView
	,	CartSummaryView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			var layout = container.getComponent('Layout');
				// layout.on('afterShowContent',()=>{
				// 	if($('#content').find('.home-page').length !== 0){
				// 		$('.shopping-layout-content').addClass('hello')
				// 	}else{
				// 		$('.shopping-layout-content').removeClass('hello')
				// 	}
				// })
				
			// })
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			
			// _.extend(CartSummaryView.prototype,{
			// 	getContext:_.wrap(CartSummaryView.prototype.getContext, function getContext(fn){
			// 		var context = fn.apply(this, _.toArray(arguments).slice(1));
			// 		console.log(context);
			// 		return context;
			// 	})
			// })

			
			if(layout)
			{
				layout.addChildView('instafeed_ext', function() { 
					return new instafeedExtView({ container: container });
				});
			}

		}
	};
});


};

extensions['CA.OfferModalPopupAfterLogin.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/OfferModalPopupAfterLogin/1.0.0/' + asset;
}

// @module CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin
define('CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.View'
,	[
	'ca_offermodalpopupafterlogin_offermodalpopupafterlogin.tpl'
	
	,	'CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_offermodalpopupafterlogin_offermodalpopupafterlogin_tpl
	
	,	OfferModalPopupAfterLoginSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_offermodalpopupafterlogin_offermodalpopupafterlogin_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new OfferModalPopupAfterLoginModel();
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

		//@method getContext @return CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.View.Context
	,	getContext: function getContext()
		{
			//@class CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/OfferModalPopupAfterLogin.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/OfferModalPopupAfterLogin/SuiteScript2/OfferModalPopupAfterLogin.Service.ss"
            ),
            true
        )
});
});



define(
	'CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin'
,   [
		'CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.View'
	]
,   function (
		OfferModalPopupAfterLoginView
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
			var layout = container.getComponent('Layout');
			
			if(layout)
			{
				layout.addChildView('Header.Logo', function() { 
					return new OfferModalPopupAfterLoginView({ container: container });
				});
			}

		}
	};
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.View","CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.Model","CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem.SS2Model","mia.instafeed.instafeedExt.View","mia.instafeed.instafeedExt.Model","mia.instafeed.instafeedExt.SS2Model","Instafeed","jquery.slick","CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.View","CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.Model","CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin.SS2Model"];
try{
	extensions['CA.HideAddtoCartBtnInGiftItem.1.0.0']();
	SC.addExtensionModule('CA.HideAddtoCartBtnInGiftItem.HideAddtoCartBtnInGiftItem');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['mia.instafeed.1.0.0']();
	SC.addExtensionModule('mia.instafeed.instafeedExt');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CA.OfferModalPopupAfterLogin.1.0.0']();
	SC.addExtensionModule('CA.OfferModalPopupAfterLogin.OfferModalPopupAfterLogin');
}
catch(error)
{
	console.error(error);
}

