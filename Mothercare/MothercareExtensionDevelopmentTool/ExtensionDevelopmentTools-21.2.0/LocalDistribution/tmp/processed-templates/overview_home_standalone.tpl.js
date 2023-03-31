define('overview_home_standalone.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\r\n            <table class=\"overview-home-invoices-list-table\">\r\n                <thead class=\"overview-home-content-table\">\r\n                    <tr class=\"overview-home-content-table-header-row\">\r\n                        <th class=\"overview-home-content-table-header-row-title\">\r\n                            <span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Invoice No.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":34},"end":{"line":20,"column":61}}}))
    + "</span>\r\n                        </th>\r\n                        <th class=\"overview-home-content-table-header-row-date\">\r\n                            <span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":34},"end":{"line":23,"column":54}}}))
    + "</span>\r\n                        </th>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSCISIntegrationEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":26,"column":24},"end":{"line":41,"column":31}}})) != null ? stack1 : "")
    + "                    </tr>\r\n                </thead>\r\n                <tbody class=\"overview-home-invoices-list\" data-view=\"Invoices.Results\"></tbody>\r\n            </table>\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "\r\n                        <th class=\"overview-home-content-table-header-row-amount\">\r\n                            <span>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Amount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":34},"end":{"line":29,"column":56}}}))
    + "</span>\r\n                        </th>\r\n\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\r\n                        <th class=\"overview-home-content-table-header-row-amount\">\r\n                            <span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":35,"column":34},"end":{"line":35,"column":56}}}))
    + "</span>\r\n                        </th>\r\n                        <th class=\"overview-home-content-table-header-row-status\">\r\n                            <span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Status",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":38,"column":34},"end":{"line":38,"column":56}}}))
    + "</span>\r\n                        </th>\r\n\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "\r\n            <div class=\"overview-home-invoices-empty-section\">\r\n                <h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You don't have any invoice in your account right now.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":50,"column":20},"end":{"line":50,"column":90}}}))
    + "</h5>\r\n            </div>\r\n\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"overview-home-header-links\">\r\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Need Help? Contact <a href=\"$(0)\">Customer Service</a>",(depth0 != null ? compilerNameLookup(depth0,"customerSupportURL") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":77,"column":2},"end":{"line":77,"column":91}}}))
    + "\r\n	</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<section class=\"overview-home-standalone\">\r\n\r\n  <div class=\"overview-home-invoices\">\r\n    <div class=\"overview-home-invoices-header\">\r\n      <h2 class=\"overview-home-title\">Account Overview</h2>\r\n      <hr>\r\n      <h3 class=\"overview-home-invoices-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Recent Invoices",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":47},"end":{"line":7,"column":78}}}))
    + "</h3>\r\n        <a href=\"/invoices\" data-type=\"invoices-list\" class=\"overview-home-anchor-invoices-list\">\r\n          "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"View Invoices List",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":10},"end":{"line":9,"column":44}}}))
    + "\r\n        </a>\r\n      </div>\r\n		  <div class=\"overview-home-invoices-results-container\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"collectionLengthGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":53,"column":13}}})) != null ? stack1 : "")
    + "\r\n		</div>\r\n	</div>\r\n</section>\r\n\r\n<section class=\"overview-home-mysettings\">\r\n    <h3>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"My Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":60,"column":8},"end":{"line":60,"column":35}}}))
    + "</h3>\r\n    <div class=\"overview-home-mysettings-row\">\r\n        <div class=\"overview-home-mysettings-profile\">\r\n            <div data-view=\"Overview.Profile\"></div>\r\n        </div>\r\n        <div class=\"overview-home-mysettings-shipping\">\r\n            <div data-view=\"Overview.Shipping\"></div>\r\n        </div>\r\n        <div class=\"overview-home-mysettings-payment\">\r\n            <div data-view=\"Overview.Payment\"></div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<div data-view=\"Overview.Banner\"></div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasCustomerSupportURL") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":75,"column":0},"end":{"line":79,"column":7}}})) != null ? stack1 : "")
    + "\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'overview_home_standalone'; return template;});