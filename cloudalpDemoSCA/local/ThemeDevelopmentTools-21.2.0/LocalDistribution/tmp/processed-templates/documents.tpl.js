define('documents.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<option value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":8,"column":18},"end":{"line":8,"column":24}}}) : helper)))
    + "\" "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals")||(depth0 && compilerNameLookup(depth0,"ifEquals"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"id") : depth0),(depths[1] != null ? compilerNameLookup(depths[1],"vendor") : depths[1]),{"name":"ifEquals","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":26},"end":{"line":8,"column":73}}})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":8,"column":74},"end":{"line":8,"column":82}}}) : helper)))
    + "</option>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<option value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":18},"end":{"line":18,"column":24}}}) : helper)))
    + "\" "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals")||(depth0 && compilerNameLookup(depth0,"ifEquals"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"id") : depth0),(depths[1] != null ? compilerNameLookup(depths[1],"category") : depths[1]),{"name":"ifEquals","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":26},"end":{"line":18,"column":75}}})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":18,"column":76},"end":{"line":18,"column":84}}}) : helper)))
    + "</option>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "	<table class=\"documents-list-table\">\n	\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"documents") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":1},"end":{"line":43,"column":10}}})) != null ? stack1 : "")
    + "	</table>\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<tr>\n		<th colspan=\"2\" class=\"docs-keys\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"key") || (depth0 != null ? compilerNameLookup(depth0,"key") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":29,"column":36},"end":{"line":29,"column":43}}}) : helper)))
    + "</th>\n		</tr>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"items") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":2},"end":{"line":42,"column":9}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "			<tr>\n			<th>Name</th>\n			<th>Downloads</th>\n			</tr>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":3},"end":{"line":41,"column":12}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "				<tr>\n					<td>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":38,"column":9},"end":{"line":38,"column":17}}}) : helper)))
    + "</td>\n					<td>"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"docUrl") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":9},"end":{"line":39,"column":113}}})) != null ? stack1 : "")
    + "</td>\n				</tr>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression;

  return "<a href=\""
    + alias1(container.lambda((depths[1] != null ? compilerNameLookup(depths[1],"domain") : depths[1]), depth0))
    + alias1(((helper = (helper = compilerNameLookup(helpers,"docUrl") || (depth0 != null ? compilerNameLookup(depth0,"docUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"docUrl","hash":{},"data":data,"loc":{"start":{"line":39,"column":45},"end":{"line":39,"column":55}}}) : helper)))
    + "\" target=\"_blank\">Download <i class=\"lock\"></i></a>";
},"12":function(container,depth0,helpers,partials,data) {
    return "<p>No Records Available</p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<h2>Downloads</h2>\n<div class=\"doc_filters_row\">\n	<div>\n		<label>Vendor</label>\n		<select name=\"doc_filter\" id=\"doc_vendor\">\n		<option value=\"all\">ALL</option>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"vendorsOptions") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":9,"column":11}}})) != null ? stack1 : "")
    + "		</each>\n		</select>\n	</div>\n	<div>\n		<label>Download Category</label>\n		<select name=\"doc_filter\" id=\"doc_category\">\n		<option value=\"all\">ALL</option>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"downloadCatOptions") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + "		</each>\n		</select>\n	</div>\n</div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"documents") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(12, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":47,"column":7}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'documents'; return template;});