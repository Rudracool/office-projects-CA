define('facets_browse_category_heading.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "facets-browse-category-heading-list-header-with-image";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <div class=\"facets-browse-category-heading-main-description-cust\">\r\n        <p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":18,"column":11},"end":{"line":18,"column":28}}}) : helper))) != null ? stack1 : "")
    + "</p>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n<section class=\"facets-browse-category-heading-list-header "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":59},"end":{"line":3,"column":136}}})) != null ? stack1 : "")
    + " row\">\r\n\r\n		<div class=\"facets-browse-category-heading-main-image-cust col-sm-2\">\r\n			<img class=\"facets-browse-category-heading-img\" src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"thumbnail") || (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnail","hash":{},"data":data,"loc":{"start":{"line":7,"column":56},"end":{"line":7,"column":70}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data,"loc":{"start":{"line":7,"column":77},"end":{"line":7,"column":92}}}) : helper)))
    + "\" />\r\n		</div>\r\n	<div class=\"facets-browse-category-heading col-sm-10\">\r\n\r\n	<div class=\"facets-browse-category-heading-cust\">\r\n		<h2>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":13,"column":21}}}) : helper)))
    + "</h3>\r\n	</div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDescription") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":20,"column":11}}})) != null ? stack1 : "")
    + "\r\n\r\n	</div>\r\n  \r\n</section>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'facets_browse_category_heading'; return template;});