define('subscriptions_addon_quantity_amount.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <button type=\"button\" class=\"subscriptions-addon-quantity-amount-quantity-input-remove\" data-action=\"minus\" data-type=\"subscriptions-addon-quantity-amount-quantity-input-remove\" data-value=\"-1\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isMinusButtonDisabled") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":210},"end":{"line":8,"column":267}}})) != null ? stack1 : "")
    + ">-</button>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " disabled=\"disabled\" ";
},"4":function(container,depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"6":function(container,depth0,helpers,partials,data) {
    return "                <button type=\"button\" class=\"subscriptions-addon-quantity-amount-quantity-input-add\" data-action=\"plus\" data-value=\"+1\">+</button>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "        <div class=\"subscriptions-addon-quantity-amount-total-amount\">\r\n            <span class=\"subscriptions-addon-quantity-amount-total-amount-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Discount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":81},"end":{"line":19,"column":105}}}))
    + ":</span>\r\n            <div class=\"subscriptions-addon-quantity-amount-total-amount-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"discount") || (depth0 != null ? compilerNameLookup(depth0,"discount") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"discount","hash":{},"data":data,"loc":{"start":{"line":20,"column":80},"end":{"line":20,"column":92}}}) : helper)))
    + "</div>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<section class=\"subscriptions-addon-quantity-amount\">\r\n\r\n    <div class=\"subscriptions-addon-quantity-amount-quantity-input\" data-validation=\"control-group\">\r\n        <label for=\"quantity\" class=\"subscriptions-addon-quantity-amount-quantity-input-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Quantity",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":95},"end":{"line":4,"column":119}}}))
    + ":</label>\r\n        <div data-validation=\"control\">\r\n            <div class=\"subscriptions-addon-quantity-amount-quantity-input-container\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isReadOnly") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":9,"column":23}}})) != null ? stack1 : "")
    + "            <input"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isReadOnly") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":63}}})) != null ? stack1 : "")
    + "  type=\"number\" data-type=\"quantity-input\" name=\"quantity\" id=\"quantity\" data-action=\"changeQuantity\" class=\"subscriptions-addon-quantity-amount-quantity-input-value\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":10,"column":237},"end":{"line":10,"column":249}}}) : helper)))
    + "\" min=\"1\" step=\"1\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isReadOnly") : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":13,"column":23}}})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n    </div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDiscount") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "</section>\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_addon_quantity_amount'; return template;});