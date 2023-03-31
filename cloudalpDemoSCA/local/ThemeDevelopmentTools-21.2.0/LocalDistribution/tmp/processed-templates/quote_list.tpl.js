define('quote_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"quote-list-button-back\">\n	<i class=\"quote-list-button-back-icon\"></i>\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":33}}}))
    + "\n	</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n			<table class=\"quote-list-quotes-table\">\n				<thead class=\"quote-list-content-table\">\n					<tr class=\"quote-list-content-table-header-row\">\n						<th class=\"quote-list-content-table-header-row-title\">\n							<span>"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpportunity") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":20,"column":13},"end":{"line":20,"column":105}}})) != null ? stack1 : "")
    + "</span>\n						</th>\n						<th class=\"quote-list-content-table-header-row-request-date\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Request date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":13},"end":{"line":23,"column":41}}}))
    + "</span>\n						</th>\n						\n						<th class=\"quote-list-content-table-header-row-currency\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":13},"end":{"line":27,"column":35}}}))
    + "</span>\n						</th>\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpportunity") : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":6},"end":{"line":33,"column":17}}})) != null ? stack1 : "")
    + "						<th class=\"quote-list-content-table-header-row-status\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Status",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":35,"column":13},"end":{"line":35,"column":35}}}))
    + "</span>\n						</th>\n					</tr>\n				</thead>\n				<tbody data-view=\"Quote.List.Items\"></tbody>\n			</table>\n\n";
},"4":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Opportunity No.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":34},"end":{"line":20,"column":65}}}));
},"6":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Quote No.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":73},"end":{"line":20,"column":98}}}));
},"8":function(container,depth0,helpers,partials,data) {
    return "							<th class=\"quote-list-content-table-header-row-expiration-date\">\n								<span>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Expiration date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":31,"column":14},"end":{"line":31,"column":45}}}))
    + "</span>\n							</th>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isLoading") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":43,"column":3},"end":{"line":49,"column":10}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "				<p class=\"quote-list-empty\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Loading...",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":44,"column":32},"end":{"line":44,"column":58}}}))
    + "</p>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<div class=\"quote-list-empty-section\">\n					<h5>"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isOpportunity") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":47,"column":9},"end":{"line":47,"column":123}}})) != null ? stack1 : "")
    + "</h5>\n				</div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No opportunity are found",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":47,"column":31},"end":{"line":47,"column":71}}}))
    + " ";
},"16":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No quotes were found",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":47,"column":80},"end":{"line":47,"column":116}}}));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\n<section class=\"quote-list\">\n	<header class=\"quote-list-header\">\n		<h2>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":20}}}) : helper)))
    + "</h2>\n	</header>\n	<div data-view=\"List.Header\"></div>\n	<div class=\"quote-list-results-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"collectionLength") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":50,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n</section>\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'quote_list'; return template;});