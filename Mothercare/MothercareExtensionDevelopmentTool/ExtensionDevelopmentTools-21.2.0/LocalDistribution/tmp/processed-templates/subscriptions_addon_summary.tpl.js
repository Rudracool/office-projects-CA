define('subscriptions_addon_summary.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemPrice") || (depth0 != null ? compilerNameLookup(depth0,"itemPrice") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"itemPrice","hash":{},"data":data,"loc":{"start":{"line":6,"column":85},"end":{"line":6,"column":98}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"-",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":6,"column":106},"end":{"line":6,"column":123}}}));
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemPriceTotal") || (depth0 != null ? compilerNameLookup(depth0,"itemPriceTotal") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"itemPriceTotal","hash":{},"data":data,"loc":{"start":{"line":11,"column":107},"end":{"line":11,"column":125}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"subscriptions-addon-summary-container\">\r\n    <h3 class=\"subscriptions-addon-summary-title\">Summary</h3>\r\n    <div class=\"subscriptions-addon-summary-subtotal\">\r\n        <p class=\"subscriptions-addon-summary-grid-float\">\r\n            <span class=\"subscriptions-addon-summary-grid-left\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Subtotal",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":64},"end":{"line":5,"column":88}}}))
    + " <span>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemQuantity") || (depth0 != null ? compilerNameLookup(depth0,"itemQuantity") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemQuantity","hash":{},"data":data,"loc":{"start":{"line":5,"column":95},"end":{"line":5,"column":111}}}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"item",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":112},"end":{"line":5,"column":132}}}))
    + "(s)</span></span>\r\n            <span class=\"subscriptions-addon-summary-grid-right\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasItemPrice") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":6,"column":65},"end":{"line":6,"column":130}}})) != null ? stack1 : "")
    + "</span>\r\n        </p>\r\n    </div>\r\n    <div class=\"subscriptions-addon-summary-total\">\r\n        <p class=\"subscriptions-addon-summary-grid-float\">\r\n            "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":33}}}))
    + " <span class=\"subscriptions-addon-summary-grid-right\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasItemPrice") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":11,"column":87},"end":{"line":11,"column":157}}})) != null ? stack1 : "")
    + "</span>\r\n        </p>\r\n    </div>\r\n</div>\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_addon_summary'; return template;});