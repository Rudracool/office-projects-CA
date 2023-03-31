define('menu_tree.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<a data-hashtag=\"/product/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"side_banner_item") || (depth0 != null ? compilerNameLookup(depth0,"side_banner_item") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"side_banner_item","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":47}}}) : helper)))
    + "\" data-touchpoint=\"home\" target=\"_blank\" class=\"marketing-banners\"><img src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"side_banner") || (depth0 != null ? compilerNameLookup(depth0,"side_banner") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"side_banner","hash":{},"data":data,"loc":{"start":{"line":3,"column":124},"end":{"line":3,"column":139}}}) : helper)))
    + "\"/></a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"menu-tree\" data-type=\"menu-tree-root\" data-view=\"MenuItems.Collection\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"marketingBanners") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":4,"column":9}}})) != null ? stack1 : "")
    + "\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'menu_tree'; return template;});