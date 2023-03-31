define('ca_trackordercustomization_trackordercustomization.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "  <span class=\"order-history-list-tracking-number-not-available-label\">\n    "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Tracking Number:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":36}}}))
    + "\n  </span>\n  <span class=\"order-history-list-tracking-number-not-available\">\n    "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"N/A",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":23}}}))
    + "\n  </span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n  <span class=\"order-history-list-tracking-number-available\">\n    \n    <a class=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"className") || (depth0 != null ? compilerNameLookup(depth0,"className") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data,"loc":{"start":{"line":12,"column":14},"end":{"line":12,"column":27}}}) : helper)))
    + "\" target=\"_blank\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"trackURL") || (depth0 != null ? compilerNameLookup(depth0,"trackURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trackURL","hash":{},"data":data,"loc":{"start":{"line":12,"column":51},"end":{"line":12,"column":63}}}) : helper)))
    + "\">"
    + ((stack1 = (compilerNameLookup(helpers,"trimHtml")||(depth0 && compilerNameLookup(depth0,"trimHtml"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"trackURL") : depth0),25,{"name":"trimHtml","hash":{},"data":data,"loc":{"start":{"line":12,"column":65},"end":{"line":12,"column":91}}})) != null ? stack1 : "")
    + "</a>\n  </span>\n\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isTrackNumber") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":15,"column":7}}})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/CA/TrackOrderCustomization/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/CA/ANWBTheme/22.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'ca_trackordercustomization_trackordercustomization'; return template;});