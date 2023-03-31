define('address_edit_fields.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"address-edit-fields-group\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCompanyFieldMandatory") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":40},"end":{"line":16,"column":132}}})) != null ? stack1 : "")
    + ">\n		<label class=\"address-edit-fields-group-label\" for=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":17,"column":54},"end":{"line":17,"column":64}}}) : helper)))
    + "company\">\n			"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Company name",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":3},"end":{"line":18,"column":31}}}))
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCompanyFieldMandatory") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":19,"column":3},"end":{"line":23,"column":10}}})) != null ? stack1 : "")
    + "		</label>\n		<div  class=\"address-edit-fields-group-form-controls\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCompanyFieldMandatory") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":56},"end":{"line":25,"column":121}}})) != null ? stack1 : "")
    + ">\n			<input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":26,"column":66},"end":{"line":26,"column":76}}}) : helper)))
    + "company\" name=\"company\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"company") || (depth0 != null ? compilerNameLookup(depth0,"company") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"company","hash":{},"data":data,"loc":{"start":{"line":26,"column":107},"end":{"line":26,"column":118}}}) : helper)))
    + "\" >\n		</div>\n	</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " data-input=\"company\" data-validation=\"control-group\" ";
},"4":function(container,depth0,helpers,partials,data) {
    return "				 <span class=\"address-edit-fields-group-label-required\">*</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "				<span class=\"address-edit-fields-company-optional-label\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"(optional)",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":22,"column":61},"end":{"line":22,"column":87}}}))
    + "</span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return " data-validation=\"control\" ";
},"10":function(container,depth0,helpers,partials,data) {
    return " hide ";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"address-edit-fields-group address-edit-fields-group-big\" data-input=\"addr2\">\n		<div>\n			<input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":44,"column":66},"end":{"line":44,"column":76}}}) : helper)))
    + "addr2\" name=\"addr2\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"addressLine2") || (depth0 != null ? compilerNameLookup(depth0,"addressLine2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressLine2","hash":{},"data":data,"loc":{"start":{"line":44,"column":103},"end":{"line":44,"column":119}}}) : helper)))
    + "\">\n		</div>\n	</div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return " style=\"display: none;\" ";
},"16":function(container,depth0,helpers,partials,data) {
    return "				 <span class=\"address-edit-fields-input-required\">*</span>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "				<p class=\"address-edit-fields-phone-optional-label\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"(optional)",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":77,"column":56},"end":{"line":77,"column":82}}}))
    + "</p>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div class=\"address-edit-fields-group\" data-input=\"defaultbilling\">\n			<label class=\"address-edit-fields-group-input-checkbox\">\n				<input type=\"checkbox\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":97,"column":31},"end":{"line":97,"column":41}}}) : helper)))
    + "defaultbilling\" value=\"T\" data-unchecked-value=\"F\" name=\"defaultbilling\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAddressDefaultBilling") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":97,"column":114},"end":{"line":97,"column":161}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCurrentTouchPointCheckout") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":98,"column":4},"end":{"line":102,"column":11}}})) != null ? stack1 : "")
    + "			</label>\n		</div>\n\n		<div class=\"address-edit-fields-group\" data-input=\"defaultshipping\">\n			<label class=\"address-edit-fields-group-input-checkbox\">\n				<input type=\"checkbox\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":108,"column":31},"end":{"line":108,"column":41}}}) : helper)))
    + "defaultshipping\" value=\"T\" data-unchecked-value=\"F\" name=\"defaultshipping\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAddressDefaultShipping") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":108,"column":116},"end":{"line":108,"column":164}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCurrentTouchPointCheckout") : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.program(29, data, 0),"data":data,"loc":{"start":{"line":109,"column":4},"end":{"line":113,"column":11}}})) != null ? stack1 : "")
    + "			</label>\n		</div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Save as my primary billing address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":99,"column":5},"end":{"line":99,"column":55}}}))
    + "\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Make this my default billing address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":101,"column":5},"end":{"line":101,"column":57}}}))
    + "\n";
},"27":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Save as my primary shipping address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":110,"column":5},"end":{"line":110,"column":56}}}))
    + "\n";
},"29":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Make this my default shipping address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":112,"column":5},"end":{"line":112,"column":58}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<div class=\"address-edit-fields\">\n	<div data-type=\"alert-placeholder\"></div>\n\n	<small class=\"address-edit-fields\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Required",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":36},"end":{"line":4,"column":60}}}))
    + " <span class=\"address-edit-fields-required\">*</span></small>\n	<div class=\"address-edit-fields-group\" data-input=\"fullname\" data-validation=\"control-group\">\n		<label class=\"address-edit-fields-group-label\" for=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":6,"column":54},"end":{"line":6,"column":64}}}) : helper)))
    + "fullname\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Full Name",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":3},"end":{"line":7,"column":28}}}))
    + " <span class=\"address-edit-fields-group-label-required\">*</span>\n		</label>\n		<div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\">\n			<input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":10,"column":66},"end":{"line":10,"column":76}}}) : helper)))
    + "fullname\" name=\"fullname\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"fullName") || (depth0 != null ? compilerNameLookup(depth0,"fullName") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"fullName","hash":{},"data":data,"loc":{"start":{"line":10,"column":109},"end":{"line":10,"column":121}}}) : helper)))
    + "\">\n		</div>\n	</div>\n\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCompanyField") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":1},"end":{"line":29,"column":8}}})) != null ? stack1 : "")
    + "	<div class=\"address-edit-fields-group "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCountriesField") : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":39},"end":{"line":30,"column":86}}})) != null ? stack1 : "")
    + "\" data-view=\"CountriesDropdown\" data-input=\"country\" data-validation=\"control-group\">\n	</div>\n	<div class=\"address-edit-fields-group\" data-input=\"addr1\" data-validation=\"control-group\">\n		<label class=\"address-edit-fields-group-label\" for=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":33,"column":54},"end":{"line":33,"column":64}}}) : helper)))
    + "addr1\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Street address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":34,"column":3},"end":{"line":34,"column":33}}}))
    + " <span class=\"address-edit-fields-input-required\">*</span>\n		</label>\n		<div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\">\n			<input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":37,"column":66},"end":{"line":37,"column":76}}}) : helper)))
    + "addr1\" name=\"addr1\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"addressLine1") || (depth0 != null ? compilerNameLookup(depth0,"addressLine1") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"addressLine1","hash":{},"data":data,"loc":{"start":{"line":37,"column":103},"end":{"line":37,"column":119}}}) : helper)))
    + "\">\n		</div>\n	</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showAddressFormSecondAddress") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":1},"end":{"line":47,"column":8}}})) != null ? stack1 : "")
    + "	<div class=\"address-edit-fields-group\" data-input=\"city\" data-validation=\"control-group\">\n		<label class=\"address-edit-fields-group-label\" for=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":49,"column":54},"end":{"line":49,"column":64}}}) : helper)))
    + "city\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Town / City",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":50,"column":3},"end":{"line":50,"column":30}}}))
    + " <span class=\"address-edit-fields-input-required\">*</span>\n		</label>\n		<div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\">\n			<input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":53,"column":66},"end":{"line":53,"column":76}}}) : helper)))
    + "city\" name=\"city\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"city") || (depth0 != null ? compilerNameLookup(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":53,"column":101},"end":{"line":53,"column":109}}}) : helper)))
    + "\">\n		</div>\n	</div>\n\n	\n\n	<div class=\"address-edit-fields-group\" data-input=\"state\" data-view=\"StatesView\" data-validation=\"control-group\">\n	</div>\n\n	<div class=\"address-edit-fields-group\" data-input=\"zip\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isZipOptional") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":57},"end":{"line":62,"column":109}}})) != null ? stack1 : "")
    + " data-validation=\"control-group\">\n		<label class=\"address-edit-fields-group-label\" for=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":63,"column":54},"end":{"line":63,"column":64}}}) : helper)))
    + "zip\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Postcode / ZIP",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":64,"column":3},"end":{"line":64,"column":33}}}))
    + " <span class=\"address-edit-fields-input-required\">*</span>\n		</label>\n		<div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\">\n			<input type=\"text\" class=\"address-edit-fields-group-input-zip\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":67,"column":70},"end":{"line":67,"column":80}}}) : helper)))
    + "zip\" name=\"zip\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"zip") || (depth0 != null ? compilerNameLookup(depth0,"zip") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"zip","hash":{},"data":data,"loc":{"start":{"line":67,"column":103},"end":{"line":67,"column":110}}}) : helper)))
    + "\" data-type=\"zip\">\n		</div>\n	</div>\n\n	<div class=\"address-edit-fields-group\"  data-input=\"phone\" data-validation=\"control-group\">\n		<label class=\"address-edit-fields-group-label\" for=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":72,"column":54},"end":{"line":72,"column":64}}}) : helper)))
    + "phone\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Phone",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":73,"column":3},"end":{"line":73,"column":24}}}))
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPhoneFieldMandatory") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":74,"column":3},"end":{"line":78,"column":10}}})) != null ? stack1 : "")
    + "		</label>\n		<div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\">\n			<input type=\"tel\" class=\"address-edit-fields-group-input\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":81,"column":65},"end":{"line":81,"column":75}}}) : helper)))
    + "phone\" name=\"phone\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"phone") || (depth0 != null ? compilerNameLookup(depth0,"phone") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"phone","hash":{},"data":data,"loc":{"start":{"line":81,"column":102},"end":{"line":81,"column":111}}}) : helper)))
    + "\" data-action=\"inputphone\">\n		</div>\n	</div>\n\n	<div class=\"address-edit-fields-group\" data-input=\"isresidential\">\n		<label class=\"address-edit-fields-group-input-checkbox\">\n			<input type=\"checkbox\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":87,"column":30},"end":{"line":87,"column":40}}}) : helper)))
    + "isresidential\" value=\"T\" data-unchecked-value=\"F\" name=\"isresidential\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAddressResidential") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":87,"column":111},"end":{"line":87,"column":155}}})) != null ? stack1 : "")
    + " >\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"This is a Residential Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":88,"column":3},"end":{"line":88,"column":48}}}))
    + "\n			<i class=\"address-edit-fields-icon-question-sign\" data-toggle=\"tooltip\" title=\"\" data-original-title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Indicating that this is a residential address will help us determine the best delivery method for your items.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":89,"column":105},"end":{"line":89,"column":230}}}))
    + "\"></i>\n		</label>\n	</div>\n\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDefaultControls") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":94,"column":1},"end":{"line":116,"column":8}}})) != null ? stack1 : "")
    + "</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'address_edit_fields'; return template;});