define('item_relations_related_item.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"item-relations-related-item-actions\">\n			<div data-view=\"CartAddToCart\" class=\"cart-btn\"></div>\n			<div class=\"quickview\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isEnvironmentBrowser") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n\n		</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<div class=\"item-relations-related-item-quickview\">\n						<a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data,"loc":{"start":{"line":14,"column":15},"end":{"line":14,"column":22}}}) : helper)))
    + "\" class=\"item-relations-related-item-quickview\" data-toggle=\"show-in-modal\">\n							<p class=\"item-relations-related-item-quickview-icon\"><i></i></p>\n\n						</a>\n					</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div style=\"text-align:left\"><span "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"qtyAvailable") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":33,"column":37},"end":{"line":33,"column":115}}})) != null ? stack1 : "")
    + ">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"qtyAvailable") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":33,"column":116},"end":{"line":33,"column":175}}})) != null ? stack1 : "")
    + "</span></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return " style=\"color:green;\" ";
},"7":function(container,depth0,helpers,partials,data) {
    return "  style=\"color:red\"; ";
},"9":function(container,depth0,helpers,partials,data) {
    return " In stock ";
},"11":function(container,depth0,helpers,partials,data) {
    return " Out of stock ";
},"13":function(container,depth0,helpers,partials,data) {
    return "	<!-- <div class=\"item-relations-related-item-rate\" data-view=\"Global.StarRating\">\n	</div> -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<div itemprop=\"itemListElement\" itemtype=\"http://schema.org/Product\" data-item-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":3,"column":83},"end":{"line":3,"column":93}}}) : helper)))
    + "\" data-track-productlist-list=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"track_productlist_list") || (depth0 != null ? compilerNameLookup(depth0,"track_productlist_list") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"track_productlist_list","hash":{},"data":data,"loc":{"start":{"line":3,"column":124},"end":{"line":3,"column":150}}}) : helper)))
    + "\" data-track-productlist-category=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"track_productlist_category") || (depth0 != null ? compilerNameLookup(depth0,"track_productlist_category") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"track_productlist_category","hash":{},"data":data,"loc":{"start":{"line":3,"column":185},"end":{"line":3,"column":215}}}) : helper)))
    + "\" data-track-productlist-position=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"track_productlist_position") || (depth0 != null ? compilerNameLookup(depth0,"track_productlist_position") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"track_productlist_position","hash":{},"data":data,"loc":{"start":{"line":3,"column":250},"end":{"line":3,"column":280}}}) : helper)))
    + "\" data-sku=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"sku") || (depth0 != null ? compilerNameLookup(depth0,"sku") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sku","hash":{},"data":data,"loc":{"start":{"line":3,"column":292},"end":{"line":3,"column":299}}}) : helper)))
    + "\">\n  <div class=\"wrapper\">\n		<a class=\"item-relations-related-item-thumbnail\" "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"itemURL") || (depth0 != null ? compilerNameLookup(depth0,"itemURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemURL","hash":{},"data":data,"loc":{"start":{"line":5,"column":51},"end":{"line":5,"column":64}}}) : helper))) != null ? stack1 : "")
    + ">\n			<img src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"thumbnail",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":6,"column":13},"end":{"line":6,"column":54}}}))
    + "\" alt=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\" />\n		</a>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":23,"column":9}}})) != null ? stack1 : "")
    + "  </div>\n\n	<a "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"itemURL") || (depth0 != null ? compilerNameLookup(depth0,"itemURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemURL","hash":{},"data":data,"loc":{"start":{"line":26,"column":4},"end":{"line":26,"column":17}}}) : helper))) != null ? stack1 : "")
    + " class=\"item-relations-related-item-title\">\n		<span itemprop=\"name\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemName","hash":{},"data":data,"loc":{"start":{"line":27,"column":24},"end":{"line":27,"column":36}}}) : helper)))
    + "</span>\n	</a>\n	<div class=\"item-relations-related-item-price\" data-view=\"Item.Price\">\n	</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"onlyRelated") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":1},"end":{"line":34,"column":8}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRating") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":1},"end":{"line":39,"column":8}}})) != null ? stack1 : "")
    + "\n</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'item_relations_related_item'; return template;});