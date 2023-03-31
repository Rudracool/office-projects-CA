define('return_authorization_form.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"return-authorization-form-button-back\">\n		<i class=\"return-authorization-form-button-back-icon\"></i>\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":33}}}))
    + "\n	</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<p class=\"return-authorization-form-kit-item-note\">\n		This order #"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1), depth0))
    + " cannot be returned online, as it contains a kit item, <br/>Please reach out to support using the link <a href=\"/newcase\">create a case</a>\n		</p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "	<form class=\"return-authorization-form-form\">\n		<fieldset class=\"return-authorization-form-items-fieldset\">\n\n			<p class=\"return-authorization-form-items-info\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"<label class=\"return-authorization-form-items-fieldset-from-label\">From: </label><a href=\"$(0)\">Purchase #$(1)</a>",(depth0 != null ? compilerNameLookup(depth0,"createdFromURL") : depth0),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":4},"end":{"line":23,"column":162}}}))
    + "\n			</p>\n			<input type=\"hidden\" name=\"type\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"recordtype") : stack1), depth0))
    + "\">\n\n			\n			<h5 class=\"return-authorization-form-products-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Select products to return",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":56},"end":{"line":28,"column":97}}}))
    + "</h5>\n			<input type=\"hidden\" name=\"id\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\">\n			<div data-view=\"ListHeader\"></div>\n\n			<div class=\"return-authorization-form-list\">\n				<table class=\"return-authorization-form-returnable-products-table md2sm\">\n						<tbody data-view=\"Returnable.Lines.Collection\"></tbody>\n				</table>\n			</div>\n			<p>\n				<small class=\"return-authorization-form-counter-legend\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"activeLinesLengthGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":39,"column":5},"end":{"line":43,"column":12}}})) != null ? stack1 : "")
    + "				</small>\n			</p>\n			<p>\n				<small class=\"return-authorization-form-counter-legend\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"itemsToReturnLengthGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":48,"column":5},"end":{"line":52,"column":12}}})) != null ? stack1 : "")
    + "				</small>\n			</p>\n		</fieldset>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInvalidLines") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":2},"end":{"line":80,"column":9}}})) != null ? stack1 : "")
    + "		\n		<fieldset class=\"return-authorization-form-comment-fieldset\">\n			<label class=\"return-authorization-form-comment-label\" for=\"comment\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Add a comment <span class=\"return-authorization-form-comment-label-optional\">(optional)</span>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":83,"column":72},"end":{"line":83,"column":182}}}))
    + "</label>\n			<textarea data-action=\"comments\"  class=\"return-authorization-form-comment\" rows=\"4\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"comments") || (depth0 != null ? compilerNameLookup(depth0,"comments") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"comments","hash":{},"data":data,"loc":{"start":{"line":84,"column":88},"end":{"line":84,"column":100}}}) : helper)))
    + "</textarea>\n		</fieldset>\n		<div class=\"form-actions\">\n			<button type=\"submit\" class=\"return-authorization-form-submit-button\" "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasAtLeastOneActiveLine") : depth0),{"name":"unless","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":87,"column":73},"end":{"line":87,"column":127}}})) != null ? stack1 : "")
    + ">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Submit Request",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":87,"column":128},"end":{"line":87,"column":158}}}))
    + "</button>\n		</div>\n		\n	</form>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<b>$(0)</b> products selected",(depth0 != null ? compilerNameLookup(depth0,"activeLinesLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":40,"column":6},"end":{"line":40,"column":69}}}))
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<b>$(0)</b> product selected",(depth0 != null ? compilerNameLookup(depth0,"activeLinesLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":6},"end":{"line":42,"column":68}}}))
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<b>$(0)</b> items in total to return",(depth0 != null ? compilerNameLookup(depth0,"itemsToReturnLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":49,"column":6},"end":{"line":49,"column":78}}}))
    + "\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<b>$(0)</b> item in total to return",(depth0 != null ? compilerNameLookup(depth0,"itemsToReturnLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":51,"column":6},"end":{"line":51,"column":77}}}))
    + "\n";
},"14":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<div class=\"return-authorization-form-accordion-divider\">\n				<div class=\"return-authorization-form-accordion-head\">\n					<a class=\"return-authorization-form-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#return-authorization-form-products\" aria-expanded=\"true\" aria-controls=\"return-authorization-form-products\">\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Products from original order not eligible for return ($(0))",(depth0 != null ? compilerNameLookup(depth0,"invalidLinesLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":61,"column":6},"end":{"line":61,"column":100}}}))
    + "\n					<i class=\"return-authorization-form-accordion-toggle-icon\"></i>\n					</a>\n				</div>\n				<div class=\"return-authorization-form-accordion-body collapse\" id=\"return-authorization-form-products\" role=\"tabpanel\" data-target=\"#return-authorization-form-products\">\n					<div data-content=\"items-body\">\n							<table class=\"return-authorization-form-products-list\">\n								<thead class=\"return-authorization-form-table-products-header\">\n									<th class=\"return-authorization-form-table-products-header-image\"></th>\n									<th class=\"return-authorization-form-table-products-header-product\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Product",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":70,"column":77},"end":{"line":70,"column":100}}}))
    + "</th>\n									<th class=\"return-authorization-form-table-products-header-qty\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Qty",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":71,"column":73},"end":{"line":71,"column":92}}}))
    + "</th>\n									<!--th class=\"return-authorization-form-table-products-header-unit-price\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Unit price",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":72,"column":83},"end":{"line":72,"column":109}}}))
    + "</th-->\n									<th class=\"return-authorization-form-table-products-header-amount\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":73,"column":76},"end":{"line":73,"column":98}}}))
    + "</th>\n								</thead>\n								<tbody data-view=\"Invalid.Lines.Collection\"></tbody>\n							</table>\n					</div>\n				</div>\n			</div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\n<section class=\"return-authorization-form\">\n	<header>\n		<h2 class=\"return-authorization-form-title\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":10,"column":46},"end":{"line":10,"column":60}}}) : helper)))
    + "</h2>\n	</header>\n\n	<div data-type=\"alert-placeholder\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasKitItems") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":14,"column":1},"end":{"line":91,"column":8}}})) != null ? stack1 : "")
    + "</section>\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'return_authorization_form'; return template;});