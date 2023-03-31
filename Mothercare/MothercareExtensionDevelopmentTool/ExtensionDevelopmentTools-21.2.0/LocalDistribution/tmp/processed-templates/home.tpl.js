define('home.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <h2 class=\"home-freetext-title\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHomeViewContext") : depth0)) != null ? compilerNameLookup(stack1,"freeTextTitle") : stack1), depth0))
    + "</h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <h3 class=\"home-freetext-subtitle\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHomeViewContext") : depth0)) != null ? compilerNameLookup(stack1,"freeTextSubtitle") : stack1), depth0))
    + "</h3>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"home-freetext-text\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHomeViewContext") : depth0)) != null ? compilerNameLookup(stack1,"freeTextText") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHomeViewContext") : depth0)) != null ? compilerNameLookup(stack1,"freeTextBtnHref") : stack1), depth0))
    + "\" class=\"home-freetext-link\">\n                "
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHomeViewContext") : depth0)) != null ? compilerNameLookup(stack1,"freeTextBtnText") : stack1), depth0))
    + "\n            </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<div class=\"home\">\n    <div class=\"home-banner\">\n        <div class=\"home-banner-text-container\">\n            <div class=\"home-banner-text\">\n         \n                 <a class=\"home-banner-anchor\" href=\"\">free delivery <span class=\"home-banner-sub-text\">on all orders obve $100</span> </a>\n                 <a class=\"home-banner-anchor\"href=\"\">shop online <span class=\"home-banner-sub-text\">24/7</span> </a>\n                 <a class=\"home-banner-anchor\"href=\"\">click & collect <span class=\"home-banner-sub-text\">available on all items</span> </a>\n            </div>\n        </div>\n    </div>\n\n	<div class=\"home-slider-container\">\n\n        <div data-cms-area=\"home_cms_area_slider_section\" data-cms-area-filters=\"path\"></div>\n	</div>\n\n    <div data-cms-area=\"home_cms_area_1\" data-cms-area-filters=\"path\"></div>\n\n    <div data-cms-area=\"home_cms_area_2\" data-cms-area-filters=\"path\"></div>\n\n\n\n\n\n    <!--div class=\"home-freetext-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHomeViewContext") : depth0)) != null ? compilerNameLookup(stack1,"freeTextTitle") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":164,"column":8},"end":{"line":166,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHomeViewContext") : depth0)) != null ? compilerNameLookup(stack1,"freeTextSubtitle") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":167,"column":8},"end":{"line":169,"column":15}}})) != null ? stack1 : "")
    + "        <hr class=\"home-freetext-divider\" />\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHomeViewContext") : depth0)) != null ? compilerNameLookup(stack1,"freeTextText") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":171,"column":8},"end":{"line":173,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHomeViewContext") : depth0)) != null ? compilerNameLookup(stack1,"freeTextBtnHref") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":174,"column":8},"end":{"line":178,"column":15}}})) != null ? stack1 : "")
    + "    </div-->\n\n    <div data-cms-area=\"home_cms_area_3\" data-cms-area-filters=\"path\"></div>\n\n\n\n	<div class=\"home-merchandizing-zone\">\n		<div data-id=\"your-merchandising-zone\" data-type=\"merchandising-zone\"></div>\n	</div>\n    <div data-cms-area=\"home_cms_area_4\" data-cms-area-filters=\"path\"></div>\n    <div data-cms-area=\"home_cms_area_5\" data-cms-area-filters=\"path\"></div>\n    <div data-cms-area=\"home_cms_area_6\" data-cms-area-filters=\"path\"></div>\n    <div data-cms-area=\"home_cms_area_7\" data-cms-area-filters=\"path\"></div>\n    <div data-cms-area=\"home_cms_area_8\" data-cms-area-filters=\"path\"></div>\n</div>\n\n<script>\n  \n     if(jQuery(window).width() < 768)\n     {\n       $('.home-banner-text').bxSlider({\n               controls: true,\n               maxSlides: 1,\n               minSlides: 1,\n               moveSlides: 1,\n               pager: false,\n               preloadImages: \"all\",\n               nextText: '<a class=\"home-banner-prev-icon\"></a>',\n               prevText: '<a class=\"home-banner-next-icon\"></a>',\n               touchEnabled: true\n        })\n     }\n\n\n</script>";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'home'; return template;});