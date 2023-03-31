define('address_edit_fields.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"address-edit-fields-group\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCompanyFieldMandatory") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":40},"end":{"line":16,"column":132}}})) != null ? stack1 : "")
    + ">\r\n	<label class=\"address-edit-fields-group-label\" for=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":17,"column":53},"end":{"line":17,"column":63}}}) : helper)))
    + "company\">\r\n		"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Company",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":18,"column":25}}}))
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCompanyFieldMandatory") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":23,"column":9}}})) != null ? stack1 : "")
    + "	</label>\r\n	<div  class=\"address-edit-fields-group-form-controls\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCompanyFieldMandatory") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":55},"end":{"line":25,"column":120}}})) != null ? stack1 : "")
    + ">\r\n	<input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":26,"column":64},"end":{"line":26,"column":74}}}) : helper)))
    + "company\" name=\"company\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"company") || (depth0 != null ? compilerNameLookup(depth0,"company") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"company","hash":{},"data":data,"loc":{"start":{"line":26,"column":105},"end":{"line":26,"column":116}}}) : helper)))
    + "\" >\r\n</div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " data-input=\"company\" data-validation=\"control-group\" ";
},"4":function(container,depth0,helpers,partials,data) {
    return "		<span class=\"address-edit-fields-group-label-required\">*</span>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "		<p class=\"address-edit-fields-company-optional-label\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"(optional)",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":22,"column":56},"end":{"line":22,"column":82}}}))
    + "</p>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return " data-validation=\"control\" ";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"address-edit-fields-group address-edit-fields-group-big\" data-input=\"addr2\">\r\n	<label for=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":43,"column":13},"end":{"line":43,"column":23}}}) : helper)))
    + "addr2\" class=\"address-edit-fields-addr2-optional-label\">\r\n		"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"(optional)",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":44,"column":2},"end":{"line":44,"column":28}}}))
    + "\r\n	</label>\r\n	<div>\r\n		<input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":47,"column":65},"end":{"line":47,"column":75}}}) : helper)))
    + "addr2\" name=\"addr2\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"addressLine2") || (depth0 != null ? compilerNameLookup(depth0,"addressLine2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressLine2","hash":{},"data":data,"loc":{"start":{"line":47,"column":102},"end":{"line":47,"column":118}}}) : helper)))
    + "\">\r\n		<small class=\"address-edit-fields-input-help\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Example: Apt. 3 or Suite #1516",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":48,"column":48},"end":{"line":48,"column":94}}}))
    + "</small>\r\n	</div>\r\n</div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    return " hide ";
},"14":function(container,depth0,helpers,partials,data) {
    return " style=\"display: none;\" ";
},"16":function(container,depth0,helpers,partials,data) {
    return "		<span class=\"address-edit-fields-input-required\">*</span>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "		<p class=\"address-edit-fields-phone-optional-label\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"(optional)",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":83,"column":54},"end":{"line":83,"column":80}}}))
    + "</p>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"address-edit-fields-group\" data-input=\"defaultbilling\">\r\n	<label class=\"address-edit-fields-group-input-checkbox\">\r\n		<input type=\"checkbox\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":104,"column":29},"end":{"line":104,"column":39}}}) : helper)))
    + "defaultbilling\" value=\"T\" data-unchecked-value=\"F\" name=\"defaultbilling\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAddressDefaultBilling") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":104,"column":112},"end":{"line":104,"column":159}}})) != null ? stack1 : "")
    + ">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCurrentTouchPointCheckout") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":105,"column":2},"end":{"line":109,"column":9}}})) != null ? stack1 : "")
    + "	</label>\r\n</div>\r\n\r\n<div class=\"address-edit-fields-group\" data-input=\"defaultshipping\">\r\n	<label class=\"address-edit-fields-group-input-checkbox\">\r\n		<input type=\"checkbox\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":115,"column":29},"end":{"line":115,"column":39}}}) : helper)))
    + "defaultshipping\" value=\"T\" data-unchecked-value=\"F\" name=\"defaultshipping\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAddressDefaultShipping") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":115,"column":114},"end":{"line":115,"column":162}}})) != null ? stack1 : "")
    + ">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCurrentTouchPointCheckout") : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.program(29, data, 0),"data":data,"loc":{"start":{"line":116,"column":2},"end":{"line":120,"column":9}}})) != null ? stack1 : "")
    + "	</label>\r\n</div>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Save as my primary billing address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":106,"column":2},"end":{"line":106,"column":52}}}))
    + "\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Make this my default billing address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":108,"column":2},"end":{"line":108,"column":54}}}))
    + "\r\n";
},"27":function(container,depth0,helpers,partials,data) {
    return "		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Save as my primary shipping address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":117,"column":2},"end":{"line":117,"column":53}}}))
    + "\r\n";
},"29":function(container,depth0,helpers,partials,data) {
    return "		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Make this my default shipping address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":119,"column":2},"end":{"line":119,"column":55}}}))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<div class=\"address-edit-fields\">\r\n	<div data-type=\"alert-placeholder\"></div>\r\n\r\n	<small class=\"address-edit-fields\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Required",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":36},"end":{"line":4,"column":60}}}))
    + " <span class=\"address-edit-fields-required\">*</span></small>\r\n	<div class=\"address-edit-fields-group\" data-input=\"fullname\" data-validation=\"control-group\">\r\n		<label class=\"address-edit-fields-group-label\" for=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":6,"column":54},"end":{"line":6,"column":64}}}) : helper)))
    + "fullname\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Full Name",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":3},"end":{"line":7,"column":28}}}))
    + " <span class=\"address-edit-fields-group-label-required\">*</span>\r\n		</label>\r\n		<div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\">\r\n			<input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":10,"column":66},"end":{"line":10,"column":76}}}) : helper)))
    + "fullname\" name=\"fullname\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"fullName") || (depth0 != null ? compilerNameLookup(depth0,"fullName") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"fullName","hash":{},"data":data,"loc":{"start":{"line":10,"column":109},"end":{"line":10,"column":121}}}) : helper)))
    + "\">\r\n		</div>\r\n	</div>\r\n\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCompanyField") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":1},"end":{"line":29,"column":7}}})) != null ? stack1 : "")
    + "\r\n<div class=\"address-edit-fields-group\" data-input=\"addr1\" data-validation=\"control-group\">\r\n	<label class=\"address-edit-fields-group-label\" for=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":32,"column":53},"end":{"line":32,"column":63}}}) : helper)))
    + "addr1\">\r\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":33,"column":2},"end":{"line":33,"column":25}}}))
    + " <span class=\"address-edit-fields-input-required\">*</span>\r\n	</label>\r\n	<div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\">\r\n		<input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":36,"column":65},"end":{"line":36,"column":75}}}) : helper)))
    + "addr1\" name=\"addr1\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"addressLine1") || (depth0 != null ? compilerNameLookup(depth0,"addressLine1") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"addressLine1","hash":{},"data":data,"loc":{"start":{"line":36,"column":102},"end":{"line":36,"column":118}}}) : helper)))
    + "\">\r\n		<small class=\"address-edit-fields-input-help\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Example: 1234 Main Street",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":37,"column":48},"end":{"line":37,"column":89}}}))
    + "</small>\r\n	</div>\r\n</div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showAddressFormSecondAddress") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":0},"end":{"line":51,"column":7}}})) != null ? stack1 : "")
    + "<div class=\"address-edit-fields-group\" data-input=\"city\" data-validation=\"control-group\">\r\n	<label class=\"address-edit-fields-group-label\" for=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":53,"column":53},"end":{"line":53,"column":63}}}) : helper)))
    + "city\">\r\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"City",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":54,"column":2},"end":{"line":54,"column":22}}}))
    + " <span class=\"address-edit-fields-input-required\">*</span>\r\n	</label>\r\n	<div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\">\r\n		<input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":57,"column":65},"end":{"line":57,"column":75}}}) : helper)))
    + "city\" name=\"city\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"city") || (depth0 != null ? compilerNameLookup(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":57,"column":100},"end":{"line":57,"column":108}}}) : helper)))
    + "\">\r\n	</div>\r\n</div>\r\n\r\n<div class=\"address-edit-fields-group "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCountriesField") : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":38},"end":{"line":61,"column":85}}})) != null ? stack1 : "")
    + "\" data-view=\"CountriesDropdown\" data-input=\"country\" data-validation=\"control-group\">\r\n</div>\r\n\r\n<div class=\"address-edit-fields-group\" data-input=\"state\" data-view=\"StatesView\" data-validation=\"control-group\">\r\n</div>\r\n\r\n<div class=\"address-edit-fields-group\" data-input=\"zip\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isZipOptional") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":56},"end":{"line":67,"column":108}}})) != null ? stack1 : "")
    + " data-validation=\"control-group\">\r\n<label class=\"address-edit-fields-group-label\" for=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":68,"column":52},"end":{"line":68,"column":62}}}) : helper)))
    + "zip\">\r\n	"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Zip Code",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":69,"column":1},"end":{"line":69,"column":25}}}))
    + " <span class=\"address-edit-fields-input-required\">*</span>\r\n</label>\r\n<div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\">\r\n	<input type=\"text\" class=\"address-edit-fields-group-input-zip\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":72,"column":68},"end":{"line":72,"column":78}}}) : helper)))
    + "zip\" name=\"zip\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"zip") || (depth0 != null ? compilerNameLookup(depth0,"zip") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"zip","hash":{},"data":data,"loc":{"start":{"line":72,"column":101},"end":{"line":72,"column":108}}}) : helper)))
    + "\" data-type=\"zip\">\r\n	<small class=\"address-edit-fields-input-help\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Example: 94117",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":73,"column":47},"end":{"line":73,"column":77}}}))
    + "</small>\r\n</div>\r\n</div>\r\n\r\n<div class=\"address-edit-fields-group\"  data-input=\"phone\" data-validation=\"control-group\">\r\n	<label class=\"address-edit-fields-group-label\" for=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":78,"column":53},"end":{"line":78,"column":63}}}) : helper)))
    + "phone\">\r\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Phone Number",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":79,"column":2},"end":{"line":79,"column":30}}}))
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPhoneFieldMandatory") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":80,"column":2},"end":{"line":84,"column":9}}})) != null ? stack1 : "")
    + "	</label>\r\n	<div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\">\r\n		<input type=\"tel\" class=\"address-edit-fields-group-input\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":87,"column":64},"end":{"line":87,"column":74}}}) : helper)))
    + "phone\" name=\"phone\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"phone") || (depth0 != null ? compilerNameLookup(depth0,"phone") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"phone","hash":{},"data":data,"loc":{"start":{"line":87,"column":101},"end":{"line":87,"column":110}}}) : helper)))
    + "\" data-action=\"inputphone\">\r\n		<small class=\"address-edit-fields-input-help\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Example: 555-123-1234",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":88,"column":48},"end":{"line":88,"column":85}}}))
    + "</small>\r\n	</div>\r\n</div>\r\n\r\n<div class=\"address-edit-fields-group\" data-input=\"isresidential\">\r\n	<label class=\"address-edit-fields-group-input-checkbox\">\r\n		<input type=\"checkbox\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":94,"column":29},"end":{"line":94,"column":39}}}) : helper)))
    + "isresidential\" value=\"T\" data-unchecked-value=\"F\" name=\"isresidential\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAddressResidential") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":94,"column":110},"end":{"line":94,"column":154}}})) != null ? stack1 : "")
    + " >\r\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"This is a Residential Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":95,"column":2},"end":{"line":95,"column":47}}}))
    + "\r\n		<i class=\"address-edit-fields-icon-question-sign\" data-toggle=\"tooltip\" title=\"\" data-original-title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Indicating that this is a residential address will help us determine the best delivery method for your items.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":96,"column":104},"end":{"line":96,"column":229}}}))
    + "\"></i>\r\n	</label>\r\n</div>\r\n\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDefaultControls") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":101,"column":0},"end":{"line":123,"column":7}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'address_edit_fields'; return template;});