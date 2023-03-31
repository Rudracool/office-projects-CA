define('quote_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Opportunity ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":6,"column":25},"end":{"line":6,"column":53}}}));
},"3":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Quote ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":6,"column":61},"end":{"line":6,"column":83}}}));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "					<p class=\"quote-details-header-info-expiration-date\">\n						<span class=\"quote-details-header-info-expiration-date-label\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Expiration date: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":68},"end":{"line":25,"column":102}}}))
    + "</span>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDuedate") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "					</p>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "							<span class=\"quote-details-header-info-expiration-date-value\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"duedate") || (depth0 != null ? compilerNameLookup(depth0,"duedate") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"duedate","hash":{},"data":data,"loc":{"start":{"line":27,"column":69},"end":{"line":27,"column":80}}}) : helper)))
    + "</span>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"isOverdue") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":29,"column":7},"end":{"line":35,"column":14}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "								<i class=\"quote-details-header-info-expiration-date-icon-overdue\"></i>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"isCloseOverdue") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":34,"column":15}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "									<i class=\"quote-details-header-info-expiration-date-icon-closeoverdue\"></i>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "							<span class=\"quote-details-header-info-expiration-date-value\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Not specified",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":37,"column":69},"end":{"line":37,"column":98}}}))
    + "</span>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<p class=\"quote-details-header-info-status\">\n						<span class=\"quote-details-header-label-status\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Status: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":45,"column":54},"end":{"line":45,"column":78}}}))
    + "</span>\n						<span class=\"quote-details-header-value-status\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"entityStatusName") || (depth0 != null ? compilerNameLookup(depth0,"entityStatusName") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"entityStatusName","hash":{},"data":data,"loc":{"start":{"line":46,"column":54},"end":{"line":46,"column":74}}}) : helper)))
    + "</span>\n					</p>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "					<div class=\"opportunity_field_values\">\n					<label><b>Title:</b>"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"title") : stack1), depth0))
    + "</label>\n					<label><b>Estimated Budget: </b>"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"estimatedbudget") : stack1), depth0))
    + "</label>\n					<label><b>Budget Approved:</b>"
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals")||(depth0 && compilerNameLookup(depth0,"ifEquals"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"isbudgetapproved") : stack1),"T",{"name":"ifEquals","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":60,"column":35},"end":{"line":60,"column":101}}})) != null ? stack1 : "")
    + "</label>\n					<label><b>Buying Time Frame: </b>"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"buyingtimeframe") : stack1), depth0))
    + "</label>\n					<label><b>Buying Reason:</b>"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"buyingreason") : stack1), depth0))
    + "</label>\n					<label><b>Sales Readiness: </b>"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"salesreadiness") : stack1), depth0))
    + "</label>\n					<label><b>Details:</b>"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"memo") : stack1), depth0))
    + "</label>\n					</div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "Yes";
},"19":function(container,depth0,helpers,partials,data) {
    return "No";
},"21":function(container,depth0,helpers,partials,data) {
    return "collapsed";
},"23":function(container,depth0,helpers,partials,data) {
    return "in";
},"25":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<div class=\"quote-details-accordion-divider\">\n\n						<div class=\"quote-details-accordion-head\">\n							<a class=\"quote-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#quote-comments\" aria-expanded=\"false\" aria-controls=\"#quote-comments\">\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"My comments",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":88,"column":8},"end":{"line":88,"column":35}}}))
    + "\n								<i class=\"quote-details-accordion-toggle-icon\"></i>\n							</a>\n						</div>\n\n						<div class=\"quote-details-accordion-body collapse\" id=\"quote-comments\" role=\"tabpanel\" data-target=\"quote-comments\">\n							<div class=\"quote-details-accordion-container\">\n								<div class=\"quote-details-comments-row\">\n									"
    + alias3((compilerNameLookup(helpers,"breaklines")||(depth0 && compilerNameLookup(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"memo") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":96,"column":9},"end":{"line":96,"column":28}}}))
    + "\n								</div>\n							</div>\n						</div>\n					</div>\n";
},"27":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<div class=\"quote-details-accordion-divider\">\n						<div class=\"quote-details-accordion-head\">\n							<a class=\"quote-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#quote-billing-info\" aria-expanded=\"false\" aria-controls=\"#quote-billing-info\">\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Payment Information",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":108,"column":8},"end":{"line":108,"column":43}}}))
    + "\n								<i class=\"quote-details-accordion-toggle-icon\"></i>\n							</a>\n						</div>\n						<div class=\"quote-details-accordion-body collapse\" id=\"quote-billing-info\" role=\"tabpanel\" data-target=\"quote-billing-info\">\n							<div class=\"quote-details-accordion-container\">\n								<div class=\"quote-details-billing-row\">\n									<div class=\"quote-details-billing-info-card\">\n										<h5 class=\"quote-details-billing-info-card-title\">\n											"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Bill to:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":117,"column":11},"end":{"line":117,"column":35}}}))
    + "\n										</h5>\n										<div data-view=\"Billing.Address\"></div>\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<div class=\"quote-details-accordion-divider\">\n\n						<div class=\"quote-details-accordion-head\">\n							<a class=\"quote-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#quote-messages\" aria-expanded=\"false\" aria-controls=\"#quote-messages\">\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Message from Sales Representative",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":133,"column":8},"end":{"line":133,"column":57}}}))
    + "\n								<i class=\"quote-details-accordion-toggle-icon\"></i>\n							</a>\n						</div>\n\n						<div class=\"quote-details-accordion-body collapse\" id=\"quote-messages\" role=\"tabpanel\" data-target=\"quote-messages\">\n							<div class=\"quote-details-accordion-container\">\n								<div class=\"quote-details-message-row\">\n								"
    + alias3((compilerNameLookup(helpers,"breaklines")||(depth0 && compilerNameLookup(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"message") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":141,"column":8},"end":{"line":141,"column":30}}}))
    + "\n								</div>\n							</div>\n						</div>\n					</div>\n";
},"31":function(container,depth0,helpers,partials,data) {
    return "						<small class=\"quote-details-disclaimer-message\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"For immediate assistance contact <strong>$(0)</strong> at <strong>$(1)</strong>. For additional information, send an email to <strong>$(2)</strong>.",(depth0 != null ? compilerNameLookup(depth0,"salesrepName") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":150,"column":54},"end":{"line":150,"column":259}}}))
    + "</small>\n";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "						<small class=\"quote-details-disclaimer-message\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"disclaimer") || (depth0 != null ? compilerNameLookup(depth0,"disclaimer") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disclaimer","hash":{},"data":data,"loc":{"start":{"line":152,"column":54},"end":{"line":152,"column":70}}}) : helper))) != null ? stack1 : "")
    + "</small>\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "					<div class=\"quote-details-summary-subtotal\">\n						<p class=\"quote-details-summary-grid-float\">\n							<span class=\"quote-details-summary-amount-subtotal\">\n							"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"subtotal_formatted") : stack1), depth0))
    + "\n							</span>\n							"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Subtotal",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":169,"column":7},"end":{"line":169,"column":31}}}))
    + "\n						</p>\n					</div>\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "						<p class=\"quote-details-summary-grid-float\">\n							<span class=\"quote-details-summary-amount-discount\">\n								"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"discounttotal_formatted") : stack1), depth0))
    + "\n							</span>\n							"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias2,"Discount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":178,"column":7},"end":{"line":178,"column":31}}}))
    + "\n						</p>\n						<div class=\"quote-details-summary-grid\">\n							<div class=\"quote-details-summary-amount-discount-text-success\">\n								<span class=\"quote-details-summary-amount-discount-code\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,true,{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":183,"column":8},"end":{"line":185,"column":15}}})) != null ? stack1 : "")
    + "								</span>\n							</div>\n						</div>\n";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "									("
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"discount") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + ")\n";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "						<p class=\"quote-details-summary-grid-float\">\n							<span class=\"quote-details-summary-promo-code\">\n								"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"discountrate_formatted") : stack1), depth0))
    + "\n							</span>\n							"
    + alias2((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Promo Code Applied",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":196,"column":7},"end":{"line":196,"column":41}}}))
    + "\n						</p>\n						<div class=\"quote-details-summary-grid\">\n							<div class=\"quote-details-summary-promocode-text-success\">\n								<span class=\"quote-details-summary-promocode-code\">#"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"promocode") : stack1)) != null ? compilerNameLookup(stack1,"code") : stack1), depth0))
    + "</span>\n							</div>\n						</div>\n";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "					<p class=\"quote-details-summary-grid-float\">\n						<span class=\"quote-details-summary-amount-shipping\">\n						"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"shippingcost_formatted") : stack1), depth0))
    + "\n						</span>\n						"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Shipping",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":209,"column":6},"end":{"line":209,"column":30}}}))
    + "\n					</p>\n";
},"44":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "					<p class=\"quote-details-summary-grid-float\">\n						<span class=\"quote-details-summary-handling-cost-formatted\">\n							"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"handlingcost_formatted") : stack1), depth0))
    + "\n						</span>\n						"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Handling",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":217,"column":6},"end":{"line":217,"column":30}}}))
    + "\n					</p>\n";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"purchasablestatus") : stack1)) != null ? compilerNameLookup(stack1,"isPurchasable") : stack1),{"name":"unless","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":241,"column":6},"end":{"line":269,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasPermission") : depth0),{"name":"if","hash":{},"fn":container.program(57, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":271,"column":6},"end":{"line":273,"column":13}}})) != null ? stack1 : "");
},"47":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "							<div data-type=\"quote-details-and-order-msg-placeholder\">\n								<div class=\"quote-details-msg\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasPermissionAndHasErrors") : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":244,"column":9},"end":{"line":251,"column":16}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0),{"name":"if","hash":{},"fn":container.program(51, data, 0),"inverse":container.program(53, data, 0),"data":data,"loc":{"start":{"line":253,"column":9},"end":{"line":257,"column":16}}})) != null ? stack1 : "")
    + "								</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showGiftCertificateMessage") : depth0),{"name":"if","hash":{},"fn":container.program(55, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":260,"column":8},"end":{"line":267,"column":15}}})) != null ? stack1 : "")
    + "							</div>\n";
},"48":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "										<p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"The following information is needed:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":245,"column":13},"end":{"line":245,"column":65}}}))
    + "</p>\n										<ul>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"purchaseValidationErrors") : depth0),{"name":"each","hash":{},"fn":container.program(49, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":247,"column":11},"end":{"line":249,"column":20}}})) != null ? stack1 : "")
    + "										</ul>\n";
},"49":function(container,depth0,helpers,partials,data) {
    return "												<li>- "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"51":function(container,depth0,helpers,partials,data) {
    return "										<p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"To place the order please contact <strong>$(0)</strong> at <strong>$(1)</strong> or send an email to <strong>$(2)</strong>",(depth0 != null ? compilerNameLookup(depth0,"salesrepName") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":254,"column":13},"end":{"line":254,"column":192}}}))
    + "</p>\n";
},"53":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "										<p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"disclaimerSummary") || (depth0 != null ? compilerNameLookup(depth0,"disclaimerSummary") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disclaimerSummary","hash":{},"data":data,"loc":{"start":{"line":256,"column":13},"end":{"line":256,"column":36}}}) : helper))) != null ? stack1 : "")
    + "</p>\n";
},"55":function(container,depth0,helpers,partials,data) {
    return "									<div class=\"quote-details-msg-certificate\">\n										<p>\n											<i class=\"quote-details-msg-certificate-icon\"></i>\n											"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Gift Certificate not allowed",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":264,"column":11},"end":{"line":264,"column":55}}}))
    + "\n										</p>\n									</div>\n";
},"57":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "							<a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"reviewQuoteURL") || (depth0 != null ? compilerNameLookup(depth0,"reviewQuoteURL") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"reviewQuoteURL","hash":{},"data":data,"loc":{"start":{"line":272,"column":16},"end":{"line":272,"column":34}}}) : helper)))
    + "\" class=\"quote-details-button-review-and-order\" "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"purchasablestatus") : stack1)) != null ? compilerNameLookup(stack1,"isPurchasable") : stack1),{"name":"unless","hash":{},"fn":container.program(58, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":272,"column":82},"end":{"line":272,"column":150}}})) != null ? stack1 : "")
    + ">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Review and Place Order",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":272,"column":151},"end":{"line":272,"column":189}}}))
    + "</a>\n";
},"58":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"60":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isQuoteCreated") : depth0),{"name":"unless","hash":{},"fn":container.program(61, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":276,"column":6},"end":{"line":279,"column":17}}})) != null ? stack1 : "");
},"61":function(container,depth0,helpers,partials,data) {
    return "						<a name=\"transform_to_quote\" class=\"quote-details-button-download-pdf\">Convert as Quote</a>\n						<small class=\"quote-details-disclaimer-message\"></small>\n";
},"63":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pdfUrl") || (depth0 != null ? compilerNameLookup(depth0,"pdfUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pdfUrl","hash":{},"data":data,"loc":{"start":{"line":281,"column":14},"end":{"line":281,"column":24}}}) : helper)))
    + "\" target=\"_blank\" class=\"quote-details-button-download-pdf\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":281,"column":84},"end":{"line":281,"column":115}}}))
    + "</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<a href=\"/quotes\" class=\"quote-details-header-back-btn\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"&lt; Back to quotes",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":1,"column":56},"end":{"line":1,"column":91}}}))
    + "</a>\n<section class=\"quote-details\">\n	<div class=\"quote-details-view\">\n		<header>\n			<h2 class=\"quote-details-header-title\">\n				"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpportunity") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":90}}})) != null ? stack1 : "")
    + "\n				<span class=\"quote-details-quote-id\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"tranid") || (depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"tranid","hash":{},"data":data,"loc":{"start":{"line":7,"column":41},"end":{"line":7,"column":51}}}) : helper)))
    + "</span>\n\n				<span class=\"quote-details-header-amount-total\">\n					"
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + "\n				</span>\n			</h2>\n		</header>\n\n		<!--GENERATE HEADER -->\n		<div class=\"quote-details-header-information\">\n			<div class=\"quote-details-row\">\n				<div class=\"quote-details-header-col-left\">\n					<p class=\"quote-details-header-info-request-date\">\n						<span class=\"quote-details-header-label-request-date\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Request date: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":60},"end":{"line":20,"column":90}}}))
    + "</span>\n						<span class=\"quote-details-header-value-date\">"
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"trandate") : stack1), depth0))
    + "</span>\n					</p>\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpportunity") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":5},"end":{"line":40,"column":16}}})) != null ? stack1 : "")
    + "				</div>\n				<div class=\"quote-details-header-col-right\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showQuoteStatus") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":4},"end":{"line":48,"column":11}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n		\n		<!-- CONTENT -->\n		<div class=\"quote-details-row\">\n			<div class=\"quote-details-content-col\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpportunity") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":4},"end":{"line":66,"column":11}}})) != null ? stack1 : "")
    + "				<div class=\"quote-details-accordion-divider\">\n					<div class=\"quote-details-accordion-head\">\n							<a class=\"quote-details-accordion-head-toggle "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"unless","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":53},"end":{"line":69,"column":104}}})) != null ? stack1 : "")
    + "\" data-toggle=\"collapse\" data-target=\"#quote-products\" aria-expanded=\"true\" aria-controls=\"#quote-products\">\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Items ($(0))",(depth0 != null ? compilerNameLookup(depth0,"lineItemsLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":70,"column":8},"end":{"line":70,"column":52}}}))
    + "\n							<i class=\"quote-details-accordion-toggle-icon\"></i>\n						</a>\n					</div>\n\n						<div class=\"quote-details-accordion-body collapse  "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":75,"column":57},"end":{"line":75,"column":93}}})) != null ? stack1 : "")
    + "\" id=\"quote-products\" role=\"tabpanel\" data-target=\"#quote-products\">\n						<table class=\"quote-details-products-table lg2sm-first\">\n							<tbody data-view=\"Items.Collection\"></tbody>\n						</table>\n					</div>\n				</div>\n\n				<!-- COMMENTS/MEMO -->\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":83,"column":4},"end":{"line":101,"column":11}}})) != null ? stack1 : "")
    + "\n				<!-- BILLADDRESS -->\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBillingAddress") : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":104,"column":4},"end":{"line":125,"column":11}}})) != null ? stack1 : "")
    + "\n				<!-- MESSAGE -->\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMessage") : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":128,"column":4},"end":{"line":146,"column":11}}})) != null ? stack1 : "")
    + "\n				<div class=\"quote-details-disclaimer-bottom-content\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.program(33, data, 0),"data":data,"loc":{"start":{"line":149,"column":5},"end":{"line":153,"column":12}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n\n			<!-- SUMMARY -->\n			<div class=\"quote-details-summary-col\">\n				<div class=\"quote-details-summary-container\">\n					<h3 class=\"quote-details-summary-title\">\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"SUMMARY",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":161,"column":6},"end":{"line":161,"column":29}}}))
    + "\n					</h3>\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpportunity") : depth0),{"name":"unless","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":163,"column":5},"end":{"line":172,"column":16}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDiscount") : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":173,"column":5},"end":{"line":189,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPromocode") : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":191,"column":5},"end":{"line":203,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpportunity") : depth0),{"name":"unless","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":204,"column":5},"end":{"line":211,"column":16}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showHandlingCost") : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":212,"column":5},"end":{"line":219,"column":12}}})) != null ? stack1 : "")
    + "\n					<p class=\"quote-details-summary-grid-float\">\n						<span class=\"quote-details-summary-amount-tax\">\n						"
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"taxtotal_formatted") : stack1), depth0))
    + "\n						</span>\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Tax Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":225,"column":6},"end":{"line":225,"column":31}}}))
    + "\n					</p>\n\n					<div class=\"quote-details-summary-total\">\n						<p class=\"quote-details-summary-grid-float\">\n							<span class=\"quote-details-summary-amount-total\">\n							"
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + "\n							</span>\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":233,"column":7},"end":{"line":233,"column":28}}}))
    + "\n						</p>\n					</div>\n\n				</div>\n				<div class=\"quote-details-row-fluid\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0),{"name":"if","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":240,"column":5},"end":{"line":274,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpportunity") : depth0),{"name":"if","hash":{},"fn":container.program(60, data, 0),"inverse":container.program(63, data, 0),"data":data,"loc":{"start":{"line":275,"column":5},"end":{"line":282,"column":12}}})) != null ? stack1 : "")
    + "				</div>\n				<div class=\"quote-details-disclaimer-bottom\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.program(33, data, 0),"data":data,"loc":{"start":{"line":285,"column":5},"end":{"line":289,"column":12}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n	</div>\n</section>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'quote_details'; return template;});