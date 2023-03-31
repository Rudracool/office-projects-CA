define('cloudalp_slideshowpro_slideshowmodule.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <div class=\"slideshow-slide\">\n                <div class=\"content "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"imgOverlayClass") || (depth0 != null ? compilerNameLookup(depth0,"imgOverlayClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgOverlayClass","hash":{},"data":data,"loc":{"start":{"line":5,"column":36},"end":{"line":5,"column":55}}}) : helper)))
    + "\">\n                    <div class=\"crop-height bg-image-wedding bg-center-center "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"opacityClass") || (depth0 != null ? compilerNameLookup(depth0,"opacityClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opacityClass","hash":{},"data":data,"loc":{"start":{"line":6,"column":78},"end":{"line":6,"column":94}}}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"altText") || (depth0 != null ? compilerNameLookup(depth0,"altText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"altText","hash":{},"data":data,"loc":{"start":{"line":6,"column":103},"end":{"line":6,"column":114}}}) : helper)))
    + "\" style=\"background-image: url("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"imageURL") || (depth0 != null ? compilerNameLookup(depth0,"imageURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageURL","hash":{},"data":data,"loc":{"start":{"line":6,"column":145},"end":{"line":6,"column":157}}}) : helper)))
    + "); "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depths[1] != null ? compilerNameLookup(depths[1],"sectionHeight") : depths[1]),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":160},"end":{"line":6,"column":221}}})) != null ? stack1 : "")
    + "\">\n                        <img class=\"scale transparent\" src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"imageURL") || (depth0 != null ? compilerNameLookup(depth0,"imageURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageURL","hash":{},"data":data,"loc":{"start":{"line":7,"column":60},"end":{"line":7,"column":72}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"altText") || (depth0 != null ? compilerNameLookup(depth0,"altText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"altText","hash":{},"data":data,"loc":{"start":{"line":7,"column":79},"end":{"line":7,"column":90}}}) : helper)))
    + "\" />\n                    </div>\n                    <div class=\"content-box "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"textAlignClass") || (depth0 != null ? compilerNameLookup(depth0,"textAlignClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textAlignClass","hash":{},"data":data,"loc":{"start":{"line":9,"column":44},"end":{"line":9,"column":62}}}) : helper)))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depths[1] != null ? compilerNameLookup(depths[1],"animate") : depths[1]),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":63},"end":{"line":9,"column":99}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":24},"end":{"line":12,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"btnText") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":24},"end":{"line":17,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n            </div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "height:"
    + container.escapeExpression(container.lambda((depths[1] != null ? compilerNameLookup(depths[1],"sectionHeight") : depths[1]), depth0))
    + "px;";
},"4":function(container,depth0,helpers,partials,data) {
    return "for-animate";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function";

  return "                            <div class=\"slider-text "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"textColorClass") || (depth0 != null ? compilerNameLookup(depth0,"textColorClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textColorClass","hash":{},"data":data,"loc":{"start":{"line":11,"column":52},"end":{"line":11,"column":70}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":11,"column":72},"end":{"line":11,"column":82}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                            <div class=\"button-container\">\n                                <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"btnLink") || (depth0 != null ? compilerNameLookup(depth0,"btnLink") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"btnLink","hash":{},"data":data,"loc":{"start":{"line":15,"column":41},"end":{"line":15,"column":52}}}) : helper)))
    + "\" target=\"_blank\" class=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"btnStyleClass") || (depth0 != null ? compilerNameLookup(depth0,"btnStyleClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"btnStyleClass","hash":{},"data":data,"loc":{"start":{"line":15,"column":77},"end":{"line":15,"column":94}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"btnText") || (depth0 != null ? compilerNameLookup(depth0,"btnText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"btnText","hash":{},"data":data,"loc":{"start":{"line":15,"column":96},"end":{"line":15,"column":107}}}) : helper)))
    + "</a>\n                            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<section class=\"slideshow-cct-container\">\n    <div class=\"slideshow-slider\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"slides") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":21,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n</section>";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/CA/SlideShowPro/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'cloudalp_slideshowpro_slideshowmodule'; return template;});