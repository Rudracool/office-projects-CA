define('product_views_price.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isPriceRange") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":39,"column":9}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<span class=\"product-views-price-range\" itemprop=\"offers\" itemscope itemtype=\"https://schema.org/AggregateOffer\">\n				<meta itemprop=\"priceCurrency\" content=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"currencyCode") || (depth0 != null ? compilerNameLookup(depth0,"currencyCode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currencyCode","hash":{},"data":data,"loc":{"start":{"line":7,"column":44},"end":{"line":7,"column":60}}}) : helper)))
    + "\"/>\n				<meta itemprop=\"highPrice\" data-rate=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"maxPrice") || (depth0 != null ? compilerNameLookup(depth0,"maxPrice") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxPrice","hash":{},"data":data,"loc":{"start":{"line":8,"column":42},"end":{"line":8,"column":54}}}) : helper)))
    + "\" content=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"maxPrice") || (depth0 != null ? compilerNameLookup(depth0,"maxPrice") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxPrice","hash":{},"data":data,"loc":{"start":{"line":8,"column":65},"end":{"line":8,"column":77}}}) : helper)))
    + "\"/>\n				<meta itemprop=\"lowPrice\" data-rate=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"minPrice") || (depth0 != null ? compilerNameLookup(depth0,"minPrice") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"minPrice","hash":{},"data":data,"loc":{"start":{"line":9,"column":41},"end":{"line":9,"column":53}}}) : helper)))
    + "\" content=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"minPrice") || (depth0 != null ? compilerNameLookup(depth0,"minPrice") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"minPrice","hash":{},"data":data,"loc":{"start":{"line":9,"column":64},"end":{"line":9,"column":76}}}) : helper)))
    + "\"/>\n				<!-- Price Range -->\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showComparePrice") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":15,"column":11}}})) != null ? stack1 : "")
    + "                <span class=\"product-views-price-lead\">\n					"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"<span data-rate=\"$(0)\" >$(1)</span> to <span data-rate=\"$(2)\">$(3)</span>",(depth0 != null ? compilerNameLookup(depth0,"minPrice") : depth0),(depth0 != null ? compilerNameLookup(depth0,"minPriceFormatted") : depth0),(depth0 != null ? compilerNameLookup(depth0,"maxPrice") : depth0),(depth0 != null ? compilerNameLookup(depth0,"maxPriceFormatted") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":5},"end":{"line":17,"column":148}}}))
    + "\n				</span>\n				<span class=\"product-views-price-lead-suffix\">ex GST</span>\n				<link itemprop=\"availability\" href=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isInStock") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":20,"column":40},"end":{"line":20,"column":127}}})) != null ? stack1 : "")
    + "\"/>\n			</span>\n\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<small class=\"product-views-price-old\">\n						"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"comparePriceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"comparePriceFormatted") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"comparePriceFormatted","hash":{},"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":13,"column":31}}}) : helper)))
    + "\n					</small>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "https://schema.org/InStock";
},"7":function(container,depth0,helpers,partials,data) {
    return "https://schema.org/OutOfStock";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<span class=\"product-views-price-exact\" itemprop=\"offers\" itemscope itemtype=\"https://schema.org/Offer\">\n				<meta itemprop=\"priceCurrency\" content=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"currencyCode") || (depth0 != null ? compilerNameLookup(depth0,"currencyCode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currencyCode","hash":{},"data":data,"loc":{"start":{"line":25,"column":44},"end":{"line":25,"column":60}}}) : helper)))
    + "\"/>\n				<meta itemprop=\"price\" data-rate=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"price") || (depth0 != null ? compilerNameLookup(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":26,"column":38},"end":{"line":26,"column":47}}}) : helper)))
    + "\" content=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"price") || (depth0 != null ? compilerNameLookup(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":26,"column":58},"end":{"line":26,"column":67}}}) : helper)))
    + "\"/>\n				<!-- Single -->\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showComparePrice") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":4},"end":{"line":32,"column":11}}})) != null ? stack1 : "")
    + "                <span class=\"product-views-price-lead\" data-rate=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"price") || (depth0 != null ? compilerNameLookup(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":33,"column":66},"end":{"line":33,"column":75}}}) : helper)))
    + "\">\n					"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"priceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"priceFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"priceFormatted","hash":{},"data":data,"loc":{"start":{"line":34,"column":5},"end":{"line":34,"column":23}}}) : helper)))
    + "\n				</span>\n				<span class=\"product-views-price-lead-suffix\">ex GST</span>\n				<link itemprop=\"availability\" href=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isInStock") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":37,"column":40},"end":{"line":37,"column":127}}})) != null ? stack1 : "")
    + "\"/>\n			</span>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showHighlightedMessage") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":42,"column":2},"end":{"line":54,"column":9}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"product-views-price-login-to-see-prices-highlighted\">\n				<p class=\"product-views-price-message\">\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Please <a href=\"$(0)\" data-navigation=\"ignore-click\">log in</a> to see price or purchase this item",(depth0 != null ? compilerNameLookup(depth0,"urlLogin") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":45,"column":5},"end":{"line":45,"column":128}}}))
    + "\n				</p>\n			</div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"product-views-price-login-to-see-prices\">\n				<p class=\"product-views-price-message\">\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<a href=\"$(0)\" data-navigation=\"ignore-click\">Log in</a> to see price",(depth0 != null ? compilerNameLookup(depth0,"urlLogin") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":51,"column":5},"end":{"line":51,"column":99}}}))
    + "\n				</p>\n			</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<div class=\"product-views-price\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":55,"column":8}}})) != null ? stack1 : "")
    + "</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_views_price'; return template;});