define('pdp_sales_unit.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"saleUnit\">\r\n  <span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Maateenheid: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":2,"column":8},"end":{"line":2,"column":37}}}))
    + "</span>\r\n  <span>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"salesUnit") || (depth0 != null ? compilerNameLookup(depth0,"salesUnit") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"salesUnit","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":21}}}) : helper)))
    + "</span>\r\n</div>";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/CA/PDPCustomization/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/CA/ANWBTheme/22.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'pdp_sales_unit'; return template;});