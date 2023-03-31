define('trackorder_details_customization.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "\r\n\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\r\n    <div class=\"track-package\">\r\n        <div class=\"TrackPackage-text\">\r\n            <span class=\"order-history-packages-delivery-label\">\r\n            "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Track Package: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":43}}}))
    + "\r\n\r\n            </span>\r\n        </div>\r\n        <a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"trackURL") || (depth0 != null ? compilerNameLookup(depth0,"trackURL") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"trackURL","hash":{},"data":data,"loc":{"start":{"line":14,"column":17},"end":{"line":14,"column":29}}}) : helper)))
    + "\" target=\"_blank\" class=\"custom-css-button\">"
    + ((stack1 = (compilerNameLookup(helpers,"trimHtml")||(depth0 && compilerNameLookup(depth0,"trimHtml"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"trackURL") : depth0),25,{"name":"trimHtml","hash":{},"data":data,"loc":{"start":{"line":14,"column":73},"end":{"line":14,"column":99}}})) != null ? stack1 : "")
    + "</a>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isTrackNumber") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":16,"column":7}}})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/CA/TrackOrderCustomization/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/CA/ANWBTheme/22.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'trackorder_details_customization'; return template;});