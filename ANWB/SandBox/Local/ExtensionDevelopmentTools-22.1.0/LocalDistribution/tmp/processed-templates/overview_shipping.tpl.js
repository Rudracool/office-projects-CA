define('overview_shipping.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "		<div data-view=\"Address.Details\" class=\"overview-shipping-card-content\"></div>\n		<div class=\"overview-shipping-card-button-edit-container\">\n		</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"overview-shipping-card-content\">\n			<p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"We have no default address on file for this account.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":13,"column":74}}}))
    + "</p>\n		</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<article class=\"overview-shipping\">\n	<div class=\"overview-shipping-header\">\n		<h4>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Shipping",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":30}}}))
    + "</h4>\n	</div>\n	<section class=\"overview-shipping-card\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDefaultShippingAddress") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":6,"column":1},"end":{"line":16,"column":8}}})) != null ? stack1 : "")
    + "	</section>\n</article>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/CA/ANWBTheme/22.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/CA/ANWBTheme/22.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'overview_shipping'; return template;});