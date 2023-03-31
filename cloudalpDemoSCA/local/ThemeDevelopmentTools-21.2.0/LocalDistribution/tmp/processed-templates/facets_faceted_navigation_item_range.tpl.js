define('facets_faceted_navigation_item_range.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"facets-faceted-navigation-item-range-facet-group\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"htmlId","hash":{},"data":data,"loc":{"start":{"line":4,"column":67},"end":{"line":4,"column":77}}}) : helper)))
    + "\" data-type=\"rendered-facet\" data-facet-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetId") || (depth0 != null ? compilerNameLookup(depth0,"facetId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetId","hash":{},"data":data,"loc":{"start":{"line":4,"column":121},"end":{"line":4,"column":132}}}) : helper)))
    + "\">\n    <!--\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showHeading") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":29,"column":9}}})) != null ? stack1 : "")
    + "    -->\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isUncollapsible") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":31,"column":1},"end":{"line":35,"column":8}}})) != null ? stack1 : "")
    + "		<span class=\"facets-faceted-navigation-item-range-end\" data-range-indicator=\"end\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeToLabel") || (depth0 != null ? compilerNameLookup(depth0,"rangeToLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeToLabel","hash":{},"data":data,"loc":{"start":{"line":36,"column":84},"end":{"line":36,"column":100}}}) : helper)))
    + "</span>\n		<span class=\"facets-faceted-navigation-item-range-start\" data-range-indicator=\"start\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeFromLabel") || (depth0 != null ? compilerNameLookup(depth0,"rangeFromLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeFromLabel","hash":{},"data":data,"loc":{"start":{"line":37,"column":88},"end":{"line":37,"column":106}}}) : helper)))
    + "</span>\n\n		<div\n			class=\"facets-faceted-navigation-item-range-slider\"\n			data-toggle=\"slider\"\n			data-facet-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetId") || (depth0 != null ? compilerNameLookup(depth0,"facetId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetId","hash":{},"data":data,"loc":{"start":{"line":42,"column":18},"end":{"line":42,"column":29}}}) : helper)))
    + "\"\n			data-min=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeMin") || (depth0 != null ? compilerNameLookup(depth0,"rangeMin") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeMin","hash":{},"data":data,"loc":{"start":{"line":43,"column":13},"end":{"line":43,"column":25}}}) : helper)))
    + "\"\n			data-max=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeMax") || (depth0 != null ? compilerNameLookup(depth0,"rangeMax") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeMax","hash":{},"data":data,"loc":{"start":{"line":44,"column":13},"end":{"line":44,"column":25}}}) : helper)))
    + "\"\n			data-low=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeFrom") || (depth0 != null ? compilerNameLookup(depth0,"rangeFrom") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeFrom","hash":{},"data":data,"loc":{"start":{"line":45,"column":13},"end":{"line":45,"column":26}}}) : helper)))
    + "\"\n			data-high=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeTo") || (depth0 != null ? compilerNameLookup(depth0,"rangeTo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeTo","hash":{},"data":data,"loc":{"start":{"line":46,"column":14},"end":{"line":46,"column":25}}}) : helper)))
    + "\">\n						<div class=\"facets-faceted-navigation-item-range-slider-bar\" data-control=\"bar\" style=\"left: 0%; width: 100%;\"></div>\n						<button class=\"facets-faceted-navigation-item-range-slider-bar-right\" data-control=\"low\" style=\"left: 0%;\"></button>\n						<button class=\"facets-faceted-navigation-item-range-slider-bar-left\" data-control=\"high\" style=\"left: 100%;\"></button>\n					</div>\n\n	</div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isUncollapsible") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":7,"column":3},"end":{"line":28,"column":10}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "				<div class=\"facets-faceted-navigation-item-range-facet-group-expander "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCollapsed") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":74},"end":{"line":8,"column":111}}})) != null ? stack1 : "")
    + "\">\n					<h4 class=\"facets-faceted-navigation-item-range-facet-group-title\">\n						"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"facetDisplayName","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":26}}}) : helper)))
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRemoveLink") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":15,"column":13}}})) != null ? stack1 : "")
    + "					</h4>\n				</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " collapsed ";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						<a class=\"facets-faceted-navigation-item-range-filter-delete\" href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"removeLink") || (depth0 != null ? compilerNameLookup(depth0,"removeLink") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"removeLink","hash":{},"data":data,"loc":{"start":{"line":12,"column":74},"end":{"line":12,"column":88}}}) : helper)))
    + "\">\n							<i class=\"facets-faceted-navigation-item-range-filter-delete-icon\"></i>\n						</a>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<a href=\"#\" class=\"facets-faceted-navigation-item-range-facet-group-expander "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCollapsed") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":81},"end":{"line":19,"column":118}}})) != null ? stack1 : "")
    + "\" data-toggle=\"collapse\" data-target=\"#"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"htmlId","hash":{},"data":data,"loc":{"start":{"line":19,"column":157},"end":{"line":19,"column":167}}}) : helper)))
    + " .facets-faceted-navigation-item-range-facet-group-wrapper\" data-type=\"collapse\" title=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetDisplayName","hash":{},"data":data,"loc":{"start":{"line":19,"column":255},"end":{"line":19,"column":275}}}) : helper)))
    + "\">\n					<i class=\"facets-faceted-navigation-item-range-facet-group-expander-icon\"></i>\n					<h4 class=\"facets-faceted-navigation-item-range-facet-group-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetDisplayName","hash":{},"data":data,"loc":{"start":{"line":21,"column":72},"end":{"line":21,"column":92}}}) : helper)))
    + "</h4>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRemoveLink") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":5},"end":{"line":26,"column":12}}})) != null ? stack1 : "")
    + "				</a>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"facets-faceted-navigation-item-range-facet-group-wrapper\">\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"facets-faceted-navigation-item-range-facet-group-wrapper "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isCollapsed") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":34,"column":70},"end":{"line":34,"column":116}}})) != null ? stack1 : "")
    + "\">\n";
},"13":function(container,depth0,helpers,partials,data) {
    return " collapse";
},"15":function(container,depth0,helpers,partials,data) {
    return " in";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showFacet") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":54,"column":7}}})) != null ? stack1 : "")
    + "\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'facets_faceted_navigation_item_range'; return template;});