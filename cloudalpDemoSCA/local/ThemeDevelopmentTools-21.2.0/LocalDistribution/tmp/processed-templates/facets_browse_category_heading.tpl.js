define('facets_browse_category_heading.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "   <!---<div class=\"category-pusher\"></div>\n    <div class=\"facets-browse-category-heading-main-image\" style=\"background-image: url('"
    + alias3((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"banner") : depth0),"categorybanner",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":5,"column":89},"end":{"line":5,"column":128}}}))
    + "');\">\n	\n		<div class=\"row\">\n			<div class=\"col-sm-2\"></div>\n			<div class=\"col-sm-8\">\n					<h1>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data,"loc":{"start":{"line":10,"column":9},"end":{"line":10,"column":24}}}) : helper)))
    + "</h1>\n					<div class=\"row\">\n						<a class=\"col-sm-4 col-xs-4\" data-navigate=\"#categories_section\"><img src=\""
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||alias2).call(alias1,"img/CATEGORY.png",{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":12,"column":81},"end":{"line":12,"column":122}}}))
    + "\"></a>\n						<a class=\"col-sm-4 col-xs-4\" data-navigate=\"#featured_item_section\"><img src=\""
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||alias2).call(alias1,"img/FEATURED-PRODUCT.png",{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":13,"column":84},"end":{"line":13,"column":133}}}))
    + "\"></a>\n						<a class=\"col-sm-4 col-xs-4\" data-navigate=\"#featured_video_section\"><img src=\""
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||alias2).call(alias1,"img/VIDEO.png",{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":14,"column":85},"end":{"line":14,"column":123}}}))
    + "\"></a>\n					</div>\n			</div>\n			<div class=\"col-sm-2\"><a href=\"/shop-main\" class=\"back-to-shop\">Back to Shop</a></div>\n		</div>\n		<svg fill=\"#fff\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 100\" preserveAspectRatio=\"none\"> <path d=\"M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z\"></path> </svg>\n	</div>--->\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<section class=\"facets-browse-category-heading-list-header\">\n	<div class=\"facets-browse-category-heading-main-description\">\n		<h1>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data,"loc":{"start":{"line":25,"column":6},"end":{"line":25,"column":21}}}) : helper)))
    + "</h1>\n		"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":2},"end":{"line":26,"column":52}}})) != null ? stack1 : "")
    + "\n	</div>\n</section>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":26,"column":24},"end":{"line":26,"column":41}}}) : helper))) != null ? stack1 : "")
    + "</p>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"banner") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":29,"column":7}}})) != null ? stack1 : "")
    + "\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'facets_browse_category_heading'; return template;});