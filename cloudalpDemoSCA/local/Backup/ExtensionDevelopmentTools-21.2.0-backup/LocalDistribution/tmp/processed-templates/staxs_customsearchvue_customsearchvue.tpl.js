define('staxs_customsearchvue_customsearchvue.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.escapeExpression;

  return "    <div class=\"col-sm-3 item-card\">\n      <img src=\""
    + alias1((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"url") : depth0),"thumbnail",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":52}}}))
    + "\" alt=\"\" srcset=\"\">\n      <h6>"
    + alias1(container.lambda((depth0 != null ? compilerNameLookup(depth0,"name") : depth0), depth0))
    + "</h6>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n<div id=\"app\">\n\n</div>\n\n<section class=\"row\" v-if=\"showcontent\">\n  <div class=\"input-search\">\n    <input type=\"text\" value=\"\" name=\"item\" class=\"cust-item-search\" placeholder=\"search by name\">\n  </div>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":20,"column":11}}})) != null ? stack1 : "")
    + "</section>\n\n<!--\n  Available helpers:\n  "
    + alias3((compilerNameLookup(helpers,"getExtensionAssetsPath")||(depth0 && compilerNameLookup(depth0,"getExtensionAssetsPath"))||alias2).call(alias1,"img/image.jpg",{"name":"getExtensionAssetsPath","hash":{},"data":data,"loc":{"start":{"line":25,"column":2},"end":{"line":25,"column":45}}}))
    + " - reference assets in your extension\n\n  "
    + alias3((compilerNameLookup(helpers,"getExtensionAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getExtensionAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getExtensionAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":27,"column":2},"end":{"line":27,"column":68}}}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder\n\n  "
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":29,"column":2},"end":{"line":29,"column":53}}}))
    + " - reference assets in the active theme\n\n  "
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/theme-image.jpg",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":31,"column":2},"end":{"line":31,"column":70}}}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder\n-->\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/STAXS/CustomSearchVue/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/21.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'staxs_customsearchvue_customsearchvue'; return template;});