define('cloudalp_preferreddeliverydate_preferreddeliverydate.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"options") : stack1)) != null ? compilerNameLookup(stack1,"custbody_preferred_date") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":9,"column":15}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <p>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"options") : stack1)) != null ? compilerNameLookup(stack1,"custbody_preferred_date") : stack1), depth0))
    + "</p>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No comments",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":15},"end":{"line":8,"column":42}}}))
    + "</p>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <textarea class=\"preferreddelivery-input\" name=\"custbody_preferred_date\" placeholder=\"enter delivery comments\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"options") : stack1)) != null ? compilerNameLookup(stack1,"custbody_preferred_date") : stack1), depth0))
    + "</textarea>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<h2 class=\"preferreddelivery-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Delivery comments",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":69}}}))
    + "</h2>\n<div id=\"preferreddelivery-container\" class=\"preferreddelivery-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isReview") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/CloudAlp/PreferredDeliveryDate/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/21.2.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'cloudalp_preferreddeliverydate_preferreddeliverydate'; return template;});