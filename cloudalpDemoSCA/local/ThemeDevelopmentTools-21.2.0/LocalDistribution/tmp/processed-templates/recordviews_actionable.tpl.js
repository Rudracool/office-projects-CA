define('recordviews_actionable.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<span data-touchpoint=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"touchpoint") || (depth0 != null ? compilerNameLookup(depth0,"touchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"touchpoint","hash":{},"data":data,"loc":{"start":{"line":4,"column":26},"end":{"line":4,"column":40}}}) : helper)))
    + "\" data-hashtag=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"detailsURL") || (depth0 != null ? compilerNameLookup(depth0,"detailsURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"detailsURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":56},"end":{"line":4,"column":70}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":72},"end":{"line":4,"column":81}}}) : helper)))
    + "</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<a href=\"#\" data-touchpoint=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"touchpoint") || (depth0 != null ? compilerNameLookup(depth0,"touchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"touchpoint","hash":{},"data":data,"loc":{"start":{"line":6,"column":32},"end":{"line":6,"column":46}}}) : helper)))
    + "\" data-hashtag=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"detailsURL") || (depth0 != null ? compilerNameLookup(depth0,"detailsURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"detailsURL","hash":{},"data":data,"loc":{"start":{"line":6,"column":62},"end":{"line":6,"column":76}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":78},"end":{"line":6,"column":87}}}) : helper)))
    + "</a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<td class=\"recordviews-actionable-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"type") || (depth0 != null ? compilerNameLookup(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":11,"column":36},"end":{"line":11,"column":44}}}) : helper)))
    + "\" data-name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":11,"column":57},"end":{"line":11,"column":65}}}) : helper)))
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLabel") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":3},"end":{"line":14,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isComposite") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":15,"column":3},"end":{"line":19,"column":10}}})) != null ? stack1 : "")
    + "		</td>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<span class=\"recordviews-actionable-label\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"label","hash":{},"data":data,"loc":{"start":{"line":13,"column":47},"end":{"line":13,"column":56}}}) : helper)))
    + "</span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<span class=\"recordviews-actionable-composite\" data-view=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"compositeKey") || (depth0 != null ? compilerNameLookup(depth0,"compositeKey") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"compositeKey","hash":{},"data":data,"loc":{"start":{"line":16,"column":62},"end":{"line":16,"column":78}}}) : helper)))
    + "\"></span>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<span class=\"recordviews-actionable-value\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"value") || (depth0 != null ? compilerNameLookup(depth0,"value") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data,"loc":{"start":{"line":18,"column":47},"end":{"line":18,"column":56}}}) : helper)))
    + "</span>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<td class=\"recordviews-actionable-actions\">\n			<p class=\"recordviews-actionable-label\"> "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"actionTitle") || (depth0 != null ? compilerNameLookup(depth0,"actionTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"actionTitle","hash":{},"data":data,"loc":{"start":{"line":24,"column":44},"end":{"line":24,"column":59}}}) : helper)))
    + " </p>\n			<div data-view=\"Action.View\" ></div>\n		</td>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<td class=\"recordviews-actionable-followup\" data-name=\"followup\">\n		<button name=\"follow_up_order\" data-id=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":30,"column":42},"end":{"line":30,"column":48}}}) : helper)))
    + "\">Follow Up</button>\n		<small class=\"quote-details-disclaimer-message\"></small>\n	</td>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr class=\"recordviews-actionable\" data-item-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":1,"column":49},"end":{"line":1,"column":59}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":70},"end":{"line":1,"column":76}}}) : helper)))
    + "\" data-record-type=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"recordType") || (depth0 != null ? compilerNameLookup(depth0,"recordType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recordType","hash":{},"data":data,"loc":{"start":{"line":1,"column":96},"end":{"line":1,"column":110}}}) : helper)))
    + "\" data-type=\"order-item\" data-action=\"navigate\">\n	<td class=\"recordviews-actionable-title\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"backOrdersPage") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":7,"column":9}}})) != null ? stack1 : "")
    + "	</td>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"columns") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":1},"end":{"line":21,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hideTracking") : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":1},"end":{"line":27,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showFollowUp") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":1},"end":{"line":33,"column":8}}})) != null ? stack1 : "")
    + "</tr>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'recordviews_actionable'; return template;});