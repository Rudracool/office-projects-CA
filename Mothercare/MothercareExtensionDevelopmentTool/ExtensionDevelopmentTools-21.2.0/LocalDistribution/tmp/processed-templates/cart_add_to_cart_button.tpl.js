define('cart_add_to_cart_button.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isCurrentItemPurchasable") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":13,"column":7}}})) != null ? stack1 : "")
    + "\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<div class=\"cart-add-to-cart-button-container\">\r\n		<div class=\"cart-add-to-cart-button\">\r\n			<button type=\"submit\" data-type=\"add-to-cart\" data-action=\"sticky\" class=\"related-items-cart-btn\">\r\n			<i class=\"quickshopcart\" "
    + container.escapeExpression(compilerNameLookup(helpers,"log").call(alias1,depth0,{"name":"log","hash":{},"data":data,"loc":{"start":{"line":8,"column":28},"end":{"line":8,"column":40}}}))
    + "></i>\r\n			"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isUpdate") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":9,"column":3},"end":{"line":9,"column":82}}})) != null ? stack1 : "")
    + " \r\n			</button/>\r\n		</div>\r\n	</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Update",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":19},"end":{"line":9,"column":41}}}));
},"5":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"quick shop",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":49},"end":{"line":9,"column":75}}}));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isCurrentItemPurchasable") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":24,"column":7}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"cart-add-to-cart-button-container\">\r\n		<div class=\"cart-add-to-cart-button\">\r\n			<button type=\"submit\" data-type=\"add-to-cart\" data-action=\"sticky\" class=\"cart-add-to-cart-button-button\">\r\n				"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isUpdate") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":20,"column":87}}})) != null ? stack1 : "")
    + "\r\n			</button/>\r\n		</div>\r\n	</div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"add to basket ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":50},"end":{"line":20,"column":80}}}));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"relateditemsaddtocart") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":25,"column":7}}})) != null ? stack1 : "")
    + "\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'cart_add_to_cart_button'; return template;});