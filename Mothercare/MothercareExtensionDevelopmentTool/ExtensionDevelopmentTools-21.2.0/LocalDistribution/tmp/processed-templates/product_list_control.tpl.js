define('product_list_control.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "		<button class=\"product-list-control-button-move\" data-action=\"show-productlist-control\" data-toggle=\"showFlyout\" type=\"button\">\r\n			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Move",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":3},"end":{"line":3,"column":23}}}))
    + "\r\n		</button>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isProductAlreadyAdded") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":14,"column":9}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "				\r\n		<i class=\" wishlist-pink\" class=\"settingoptions\" data-type=\"change-icon\" data-action=\"show-productlist-control\" data-toggle=\"showFlyout\" type=\"button\" "
    + container.escapeExpression(compilerNameLookup(helpers,"log").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"itemid") : depth0),{"name":"log","hash":{},"data":data,"loc":{"start":{"line":9,"column":153},"end":{"line":9,"column":172}}}))
    + " >\r\n					<a class=\"settingoptions\"></a>	</i>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "			<i class=\" wishlist\" class=\"settingoptions\" data-type=\"change-icon\" data-action=\"show-productlist-control\" data-toggle=\"showFlyout\" type=\"button\" "
    + container.escapeExpression(compilerNameLookup(helpers,"log").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"itemid") : depth0),{"name":"log","hash":{},"data":data,"loc":{"start":{"line":12,"column":149},"end":{"line":12,"column":168}}}))
    + " >\r\n						<a class=\"settingoptions\"></a>	</i>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "product-list-control-move";
},"10":function(container,depth0,helpers,partials,data) {
    return "style=\"display: block\"";
},"12":function(container,depth0,helpers,partials,data) {
    return "		<div data-confirm-message=\"\"></div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Add to",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":30,"column":3},"end":{"line":30,"column":25}}}))
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasProductLists") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":3},"end":{"line":38,"column":10}}})) != null ? stack1 : "")
    + ":\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "				("
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"productListLength") || (depth0 != null ? compilerNameLookup(depth0,"productListLength") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"productListLength","hash":{},"data":data,"loc":{"start":{"line":32,"column":5},"end":{"line":32,"column":26}}}) : helper)))
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasOneProductList") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":33,"column":4},"end":{"line":37,"column":11}}})) != null ? stack1 : "")
    + "			";
},"16":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"list",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":34,"column":5},"end":{"line":34,"column":25}}}))
    + ")\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"lists",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":36,"column":5},"end":{"line":36,"column":26}}}))
    + ")\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Add to",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":40,"column":3},"end":{"line":40,"column":25}}}))
    + "\r\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<li class=\"product-list-control-nolists-messages\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":46,"column":4},"end":{"line":50,"column":11}}})) != null ? stack1 : "")
    + "			</li>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"There are no other lists",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":47,"column":5},"end":{"line":47,"column":45}}}))
    + "	\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"There are no lists",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":49,"column":5},"end":{"line":49,"column":39}}}))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":1},"end":{"line":21,"column":8}}})) != null ? stack1 : "")
    + "	<div class=\"product-list-control-flyout "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":41},"end":{"line":22,"column":89}}})) != null ? stack1 : "")
    + "\" data-type=\"productlist-control\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showControl") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":123},"end":{"line":22,"column":171}}})) != null ? stack1 : "")
    + " data-dropdown-content>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":1},"end":{"line":26,"column":12}}})) != null ? stack1 : "")
    + "\r\n	<h5 class=\"product-list-control-flyout-title\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":29,"column":2},"end":{"line":41,"column":9}}})) != null ? stack1 : "")
    + "	</h5>\r\n	<ul class=\"product-list-control-flyout-product-lists\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEmpty") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":2},"end":{"line":52,"column":9}}})) != null ? stack1 : "")
    + "	</ul>\r\n	<h5 class=\"product-list-control-flyout-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Or: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":54,"column":47},"end":{"line":54,"column":67}}}))
    + "</h5>\r\n	<div class=\"product-list-control-new-product-list-container\" data-type=\"new-item-container\"></div>\r\n</div>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_list_control'; return template;});