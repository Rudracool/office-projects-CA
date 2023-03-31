define('cashsale_open_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"invoice-open-list-button-back\">\n		<i class=\"invoice-open-list-button-back-icon\"></i>\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":33}}}))
    + "\n	</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<div data-view=\"Invoices.Message\"></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n		<table class=\"invoice-open-list-records\">\n			<thead class=\"invoice-open-list-records-head\">\n			<tr class=\"invoice-open-list-records-head-row\">\n				\n				<th class=\"invoice-open-list-records-head-row-invoice-number\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Cash Sale No.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":66},"end":{"line":29,"column":95}}}))
    + "</th>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"columns") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":4},"end":{"line":34,"column":13}}})) != null ? stack1 : "")
    + "			</thead>\n\n			<tbody class=\"invoice-open-list-records-body\" data-view=\"CashSale.Results\"></tbody>\n\n		</table>\n\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<th>\n					"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"label","hash":{},"data":data,"loc":{"start":{"line":32,"column":5},"end":{"line":32,"column":14}}}) : helper)))
    + "\n				</th>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"invoice-open-list-no-records\">\n			<h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You don't have any Cash Sales at the moment.<br/>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":7},"end":{"line":43,"column":73}}}))
    + "</h5>\n		</div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"invoice-open-list-paginator\">\n		<div data-view=\"GlobalViews.Pagination\"></div>\n	</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\n<section class=\"invoice-open-list\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCashSales") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":1},"end":{"line":12,"column":8}}})) != null ? stack1 : "")
    + "\n	<header class=\"invoice-open-list-header\">\n		<h2 class=\"invoice-open-list-title\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":15,"column":38},"end":{"line":15,"column":52}}}) : helper)))
    + "</h2>\n	</header>\n\n	\n\n	<div data-view=\"ListHeader\"></div>\n\n	<div class=\"invoice-open-list-body\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCashSales") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":45,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPagination") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":1},"end":{"line":51,"column":8}}})) != null ? stack1 : "")
    + "</section>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'cashsale_open_list'; return template;});