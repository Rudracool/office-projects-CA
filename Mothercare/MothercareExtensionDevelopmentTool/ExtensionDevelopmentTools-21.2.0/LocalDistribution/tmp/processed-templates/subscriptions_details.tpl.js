define('subscriptions_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "            <span class=\"subscriptions-details-label subscriptions-details-label-"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"statusLowerCase") || (depth0 != null ? compilerNameLookup(depth0,"statusLowerCase") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"statusLowerCase","hash":{},"data":data,"loc":{"start":{"line":5,"column":81},"end":{"line":5,"column":100}}}) : helper)))
    + "\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"status") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":102},"end":{"line":5,"column":122}}}))
    + "</span>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <section class=\"subscriptions-details-plan\">\r\n	<div class=\"subscriptions-details-plan-header\">\r\n                <h3>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Subscription",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":48}}}))
    + "</h3>\r\n	</div>\r\n            <div data-view='Required.Lines.Collection' class=\"subscriptions-details-required-lines-list\"></div>\r\n        </section>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <section class=\"subscriptions-details-lines\">\r\n	<div class=\"subscriptions-details-lines-header\">\r\n                <h3>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Add-ons",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":33,"column":20},"end":{"line":33,"column":43}}}))
    + "</h3>\r\n	</div>\r\n            <div data-view='Optional.Lines.Collection' class=\"subscriptions-details-optional-lines-list\"></div>\r\n        </section>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "    <button class=\"subscriptions-details-cancel-button\" data-action=\"cancel-subscription\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Cancel Subscription",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":90},"end":{"line":42,"column":125}}}))
    + "</button>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "    <button class=\"subscriptions-details-reactivate-button\" data-action=\"reactivate-subscription\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Reactivate Subscription",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":45,"column":98},"end":{"line":45,"column":137}}}))
    + "</button>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "    <button data-action=\"goToAddOnsMarket\" class=\"subscriptions-details-addons-button\">\r\n        "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Add-ons",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":49,"column":8},"end":{"line":49,"column":31}}}))
    + "\r\n    </button>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"subscriptions-details\">\r\n<header class=\"subscriptions-details-top-header\">\r\n        <h2>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":12},"end":{"line":3,"column":20}}}) : helper)))
    + "</h2>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSubscriptionStatus") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":6,"column":15}}})) != null ? stack1 : "")
    + "</header>\r\n\r\n<section class=\"subscriptions-details-top-info\">\r\n        <div class=\"subscriptions-details-header-container subscriptions-details-last-bill\">\r\n            <span class=\"subscriptions-details-line-label\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Last Billing",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":59},"end":{"line":11,"column":87}}}))
    + "</span><br/>\r\n            <span class=\"subscriptions-details-line-value\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"lastBillDate") || (depth0 != null ? compilerNameLookup(depth0,"lastBillDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastBillDate","hash":{},"data":data,"loc":{"start":{"line":12,"column":59},"end":{"line":12,"column":75}}}) : helper)))
    + "</span>\r\n    	</div>\r\n        <div class=\"subscriptions-details-header-container subscriptions-details-next-bill\">\r\n            <span class=\"subscriptions-details-line-label\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Next Billing",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":59},"end":{"line":15,"column":87}}}))
    + "</span><br/>\r\n            <span class=\"subscriptions-details-line-value\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"nextBillCycleDate") || (depth0 != null ? compilerNameLookup(depth0,"nextBillCycleDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nextBillCycleDate","hash":{},"data":data,"loc":{"start":{"line":16,"column":59},"end":{"line":16,"column":80}}}) : helper)))
    + "</span>\r\n        </div>\r\n        <a class=\"subscriptions-details-invoice-link\" href=\"/invoices\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"View Invoices",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":71},"end":{"line":18,"column":100}}}))
    + "</a>\r\n</section>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRequiredLinesCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":28,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOptionalLinesCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":0},"end":{"line":37,"column":7}}})) != null ? stack1 : "")
    + "\r\n<div class=\"subscriptions-details-buttons-container\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"canBeSuspended") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":4},"end":{"line":43,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"canBeReactivated") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":4},"end":{"line":46,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isNonIncludedLinesCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":4},"end":{"line":51,"column":11}}})) != null ? stack1 : "")
    + "</div>\r\n</div>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_details'; return template;});