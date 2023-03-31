define('sc_columns_cct.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "columnscct-empty";
},"3":function(container,depth0,helpers,partials,data) {
    return "columnscct-extra-padding";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"columnscct-layout "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEmpty") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":72}}})) != null ? stack1 : "")
    + " "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"textColorClass") || (depth0 != null ? compilerNameLookup(depth0,"textColorClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textColorClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":73},"end":{"line":1,"column":91}}}) : helper)))
    + " "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"textAlignClass") || (depth0 != null ? compilerNameLookup(depth0,"textAlignClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textAlignClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":92},"end":{"line":1,"column":110}}}) : helper)))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isExtraPadding") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":111},"end":{"line":1,"column":164}}})) != null ? stack1 : "")
    + "\">\n    <h3 class=\"columnscct-header\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"header") || (depth0 != null ? compilerNameLookup(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data,"loc":{"start":{"line":2,"column":34},"end":{"line":2,"column":44}}}) : helper)))
    + "</h3>\n    <div class=\"columnscct-columns-wrapper "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"gridPhoneClass") || (depth0 != null ? compilerNameLookup(depth0,"gridPhoneClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gridPhoneClass","hash":{},"data":data,"loc":{"start":{"line":3,"column":43},"end":{"line":3,"column":61}}}) : helper)))
    + " "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"gridClass") || (depth0 != null ? compilerNameLookup(depth0,"gridClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gridClass","hash":{},"data":data,"loc":{"start":{"line":3,"column":62},"end":{"line":3,"column":75}}}) : helper)))
    + "\" data-view=\"NetSuite.ColumnsCCT.Column.View\"/>\n</section>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/NetSuite/Columns/1.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/CA/ANWBTheme/22.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_columns_cct'; return template;});