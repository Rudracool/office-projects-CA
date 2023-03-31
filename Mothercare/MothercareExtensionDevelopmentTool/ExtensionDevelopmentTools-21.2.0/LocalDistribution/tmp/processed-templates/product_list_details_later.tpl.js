define('product_list_details_later.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "						("
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No products yet",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":7},"end":{"line":13,"column":38}}}))
    + ")\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasMoreThanOneItem") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":19,"column":13}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "							("
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) Products",(depth0 != null ? compilerNameLookup(depth0,"itemsLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":16,"column":49}}}))
    + ")\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "							("
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) Product",(depth0 != null ? compilerNameLookup(depth0,"itemsLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":8},"end":{"line":18,"column":48}}}))
    + ")\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"product-list-details-later-list-items\" data-type=\"product-list-items\">\r\n					<div data-view=\"ProductList.DetailsLater.Collection\"></div>\r\n				</div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"product-list-details-later-header-no-items\">\r\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You don't have items in this list yet.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":32,"column":5},"end":{"line":32,"column":60}}}))
    + "\r\n				</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\r\n<div class=\"product-list-details-later\">\r\n	<button class=\"product-list-details-later-button-saveforlater-pusher\" data-type=\"sc-pusher\" data-target=\"cart-save-for-later\">\r\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Saved for Later",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":5,"column":33}}}))
    + " <i></i>\r\n	</button>\r\n	<div class=\"product-list-details-later-row\" data-action=\"pushable\" data-id=\"cart-save-for-later\">\r\n		<div class=\"product-list-details-later-col\">\r\n			<h3 class=\"product-list-details-later-list-header-title\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Saved for Later",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":10,"column":35}}}))
    + "\r\n				<small class=\"product-list-details-later-shopping-cart-title-details-count\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEmpty") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":12,"column":5},"end":{"line":20,"column":12}}})) != null ? stack1 : "")
    + "				</small>\r\n			</h3>\r\n\r\n			<div data-confirm-message class=\"product-list-details-later-confirm-message\"></div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasItems") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":26,"column":3},"end":{"line":34,"column":10}}})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_list_details_later'; return template;});