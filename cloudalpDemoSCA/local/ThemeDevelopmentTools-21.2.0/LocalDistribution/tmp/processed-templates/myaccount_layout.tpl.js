define('myaccount_layout.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<div class=\"channel-manager-details\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"fullname") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"mobilephone") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":4},"end":{"line":25,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"email") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":4},"end":{"line":28,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				Channel Manager: "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"fullname") || (depth0 != null ? compilerNameLookup(depth0,"fullname") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"fullname","hash":{},"data":data,"loc":{"start":{"line":21,"column":21},"end":{"line":21,"column":33}}}) : helper)))
    + " <br/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				Contact Phone: <a href=\"tel:"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"mobilephone") || (depth0 != null ? compilerNameLookup(depth0,"mobilephone") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mobilephone","hash":{},"data":data,"loc":{"start":{"line":24,"column":32},"end":{"line":24,"column":47}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"mobilephone") || (depth0 != null ? compilerNameLookup(depth0,"mobilephone") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mobilephone","hash":{},"data":data,"loc":{"start":{"line":24,"column":49},"end":{"line":24,"column":64}}}) : helper)))
    + "</a><br/>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				Contact Email: <a href=\"mailto:"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"email") || (depth0 != null ? compilerNameLookup(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":27,"column":35},"end":{"line":27,"column":44}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"email") || (depth0 != null ? compilerNameLookup(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":27,"column":46},"end":{"line":27,"column":55}}}) : helper)))
    + "</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<div id=\"layout\" class=\"myaccount-layout\">\n	<header id=\"site-header\" class=\"myaccount-layout-header\" data-view=\"Header\"></header>\n\n    <div class=\"myaccount-layout-breadcrumb\" data-view=\"Global.Breadcrumb\" data-type=\"breadcrumb\"></div>\n\n	<div id=\"main-container\" class=\"myaccount-layout-container theme-has-static-header\">\n		<div class=\"myaccount-layout-notifications\">\n			<div data-view=\"Notifications\"></div>\n		</div>\n\n		<div class=\"myaccount-layout-error-placeholder\"></div>\n\n		<h2 class=\"myaccount-layout-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"My Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":37},"end":{"line":15,"column":63}}}))
    + "</h2>\n		<div class=\"myaccount-layout-row\">\n			<nav id=\"side-nav\" class=\"myaccount-layout-side-nav\" data-view=\"MenuTree\"></nav>\n"
    + ((stack1 = compilerNameLookup(helpers,"with").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"salesRep") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":3},"end":{"line":30,"column":12}}})) != null ? stack1 : "")
    + "			<div id=\"content\" class=\"myaccount-layout-main\"></div>\n		</div>\n\n	</div>\n\n	<footer id=\"site-footer\" class=\"myaccount-layout-footer\" data-view=\"Footer\"></footer>\n\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'myaccount_layout'; return template;});