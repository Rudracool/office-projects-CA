define('global_views_pagination.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<nav class=\"global-views-pagination\">\r\n		\r\n		\r\n	<ul class=\"global-views-pagination-links "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPaginationLinksCompactClass") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":42},"end":{"line":7,"column":127}}})) != null ? stack1 : "")
    + "\">\r\n\r\n		<div class=\"restOfDev\">\r\n		\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"restOfPrev") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":15,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"restOfPrev") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":22,"column":9}}})) != null ? stack1 : "")
    + "\r\n		</div>\r\n\r\n\r\n		<div class=\"pagenation-main\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCurrentPageDifferentThan1") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":28,"column":2},"end":{"line":42,"column":9}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPageIndicator") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":2},"end":{"line":46,"column":9}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPageList") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":2},"end":{"line":73,"column":9}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCurrentPageLast") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":75,"column":2},"end":{"line":89,"column":9}}})) != null ? stack1 : "")
    + "	</div>\r\n\r\n	<div class=\"nextOfDev\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"restOfNext") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":93,"column":2},"end":{"line":99,"column":10}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"restOfNext") : depth0),{"name":"each","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":101,"column":2},"end":{"line":105,"column":11}}})) != null ? stack1 : "")
    + "\r\n		\r\n			\r\n\r\n	</div>\r\n\r\n	</ul>\r\n \r\n\r\n</nav>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " global-views-pagination-links-compact ";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<li class=\"global-views-pagination-prev-number\">\r\n			<a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":19}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":13,"column":21},"end":{"line":13,"column":27}}}) : helper)))
    + "</a>\r\n			</li>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "			<li>\r\n				<i class=\"global-views-pagination-restprev-icon\"></i>\r\n				<div class=\"vertical-line\"></div>\r\n			</li>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<li class=\"global-views-pagination-prev\">\r\n			<a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"previousPageURL") || (depth0 != null ? compilerNameLookup(depth0,"previousPageURL") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"previousPageURL","hash":{},"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":31}}}) : helper)))
    + "\" class=\"global-views-pagination-previous-link\">\r\n				<i class=\"global-views-pagination-prev-icon\"></i>\r\n				Previous\r\n			</a>\r\n		</li>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<li class=\"global-views-pagination-prev-disabled\">\r\n			<a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentPageURL") || (depth0 != null ? compilerNameLookup(depth0,"currentPageURL") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"currentPageURL","hash":{},"data":data,"loc":{"start":{"line":37,"column":12},"end":{"line":37,"column":30}}}) : helper)))
    + "\" class=\"global-views-pagination-previous-link\">\r\n				<i class=\"global-views-pagination-prev-icon\"></i>\r\n				Previous\r\n			</a>\r\n		</li>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "		<p class=\"global-views-pagination-count\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Page $(0) of $(1)",(depth0 != null ? compilerNameLookup(depth0,"currentPage") : depth0),(depth0 != null ? compilerNameLookup(depth0,"totalPages") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":45,"column":43},"end":{"line":45,"column":99}}}))
    + " </p>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRangeStartGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":2},"end":{"line":53,"column":9}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRangeEndLowerThanTotalPages") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":2},"end":{"line":71,"column":9}}})) != null ? stack1 : "")
    + "\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<li class=\"global-views-pagination-disabled\">\r\n			<a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentPageURL") || (depth0 != null ? compilerNameLookup(depth0,"currentPageURL") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"currentPageURL","hash":{},"data":data,"loc":{"start":{"line":51,"column":12},"end":{"line":51,"column":30}}}) : helper)))
    + "\">...</a>\r\n		</li>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<li class=\"global-views-pagination-next-disabled\">\r\n			<a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentPageURL") || (depth0 != null ? compilerNameLookup(depth0,"currentPageURL") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"currentPageURL","hash":{},"data":data,"loc":{"start":{"line":77,"column":12},"end":{"line":77,"column":30}}}) : helper)))
    + "\" class=\"global-views-pagination-next-link\">\r\n				<i class=\"global-views-pagination-next-icon\"></i>\r\n				Next\r\n			</a>\r\n		</li>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<li class=\"global-views-pagination-next\">\r\n			<a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"nextPageURL") || (depth0 != null ? compilerNameLookup(depth0,"nextPageURL") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"nextPageURL","hash":{},"data":data,"loc":{"start":{"line":84,"column":12},"end":{"line":84,"column":27}}}) : helper)))
    + "\" class=\"global-views-pagination-next-link\">\r\n				Next\r\n				<i class=\"global-views-pagination-next-icon\"></i>\r\n			</a>\r\n		</li>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "			<li>\r\n				<i class=\"global-views-pagination-restnext-icon\">\r\n						<div class=\"vertical-line-right\"></div>\r\n				</i>\r\n			</li>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li class=\"global-views-pagination-next-number\">\r\n			<a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":103,"column":12},"end":{"line":103,"column":19}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":103,"column":21},"end":{"line":103,"column":27}}}) : helper)))
    + "</a>\r\n		</li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"currentPageLowerThanTotalPagesAndCurrentPageGreaterThan0AndPagesCountGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":119,"column":7}}})) != null ? stack1 : "")
    + "\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'global_views_pagination'; return template;});