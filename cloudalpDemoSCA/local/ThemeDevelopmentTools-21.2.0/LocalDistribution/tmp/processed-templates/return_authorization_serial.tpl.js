define('return_authorization_serial.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div><label><input type=\"checkbox\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"serial") || (depth0 != null ? compilerNameLookup(depth0,"serial") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serial","hash":{},"data":data,"loc":{"start":{"line":2,"column":43},"end":{"line":2,"column":53}}}) : helper)))
    + "\" name=\"return_lines_serial\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":82},"end":{"line":2,"column":114}}})) != null ? stack1 : "")
    + "/>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"serial") || (depth0 != null ? compilerNameLookup(depth0,"serial") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serial","hash":{},"data":data,"loc":{"start":{"line":2,"column":116},"end":{"line":2,"column":126}}}) : helper)))
    + "</label></div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "checked";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"serialNumbers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "")
    + "<div data-view=\"return_lines_serial_submit\"></div>\n<button class=\"button-secondary button-small\" name=\"return_lines_serial_submit\">Submit</button>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'return_authorization_serial'; return template;});