define('header.tpl', ['Handlebars','Handlebars.CompilerNameLookup','header_sidebar.tpl','header_sidebar.tpl'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return " style=\"display:inline\" ";
},"3":function(container,depth0,helpers,partials,data) {
    return " style=\"display:none\"\n						";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n					<div class=\"favourite-list\">\n						<ul>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"list") : depth0)) != null ? compilerNameLookup(stack1,"children") : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":6},"end":{"line":39,"column":15}}})) != null ? stack1 : "")
    + "						</ul>\n					</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "							<li>\n								<a  href=\"#\" data-touchpoint=\"customercenter\"\n					data-hashtag=\"#"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":37,"column":20},"end":{"line":37,"column":27}}}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":37,"column":35},"end":{"line":37,"column":43}}}) : helper)))
    + "\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"name") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":37,"column":45},"end":{"line":37,"column":63}}}))
    + "</a>\n							</li>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<li class=\"header-subheader-settings\">\n						<a href=\"#\" class=\"header-subheader-settings-link\" data-toggle=\"dropdown\" title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":79,"column":87},"end":{"line":79,"column":111}}}))
    + "\">\n							<i class=\"header-menu-settings-icon\"></i> <span class=\"header-menu-settings-text\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"EN",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":80,"column":89},"end":{"line":81,"column":14}}}))
    + "</span>\n						</a>\n						<div class=\"header-menu-settings-dropdown\">\n							<h5 class=\"header-menu-settings-dropdown-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Site Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":84,"column":55},"end":{"line":84,"column":84}}}))
    + "</h5>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguages") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":7},"end":{"line":87,"column":14}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":88,"column":7},"end":{"line":90,"column":14}}})) != null ? stack1 : "")
    + "						</div>\n					</li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "							<div data-view=\"Global.HostSelector\"></div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "							<div data-view=\"Global.CurrencySelector\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"header-message\" data-view=\"Message.Placeholder\"></div>\n\n<div class=\"header-main-wrapper\">\n	<nav class=\"header-main-nav\">\n		<div id=\"banner-header-top\" class=\"content-banner banner-header-top\" data-cms-area=\"header_banner_top\"\n			data-cms-area-filters=\"global\"></div>\n\n		<div class=\"header-sidebar-toggle-wrapper\">\n			<button class=\"header-sidebar-toggle\" data-action=\"header-sidebar-show\">\n				<i class=\"header-sidebar-toggle-icon\"></i>\n			</button>\n		</div>\n\n		<div class=\"header-content\">\n			<div class=\"header-logo-wrapper-mobile\">\n				<div data-view=\"Header.Logo\"></div>\n			</div>\n			<div class=\"header-menu-searchmobile \">\n				<div class=\"header-logos-icons-mobile\">\n					<a "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals")||(depth0 && compilerNameLookup(depth0,"ifEquals"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"profileModel") : depth0)) != null ? compilerNameLookup(stack1,"isLoggedIn") : stack1),"F",{"name":"ifEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":25,"column":8},"end":{"line":26,"column":19}}})) != null ? stack1 : "")
    + " data-hashtag=\"login-register\" data-touchpoint=\"login\">\n						<i class=\"mcicon-Register reg-icon mobile-resize-icon\"></i>\n					</a>\n					<i class=\"header-like-icon mobile-resize-icon header-favourite-list-open\"></i>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"list") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":6},"end":{"line":42,"column":11}}})) != null ? stack1 : "")
    + "\n				\n				\n					\n					<div data-view=\"Header.MiniCart\"></div>\n			\n				\n\n\n					<button class=\"header-menu-searchmobile-link\" data-action=\"show-sitesearch\" title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Search",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":55,"column":88},"end":{"line":55,"column":110}}}))
    + "\">\n						<i class=\"header-menu-searchmobile-icon mobile-resize-icon\"></i>\n					</button>\n				</div>\n			</div>\n\n\n			<div class=\"header-right-menu\">\n\n				<ul class=\"header-subheader-options\">\n					<li>\n						<a href=\"#\">\n							<span class=\"header-menu-settings-text\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"track order",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":67,"column":47},"end":{"line":67,"column":74}}}))
    + "</span>\n						</a>\n					</li>\n\n					<li>\n						<a href=\"#\">\n							<span class=\"header-menu-settings-text\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"contact us",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":73,"column":47},"end":{"line":73,"column":73}}}))
    + "</span>\n						</a>\n					</li>\n					<li data-view=\"StoreLocatorHeaderLink\"></li>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguagesOrCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":77,"column":5},"end":{"line":93,"column":12}}})) != null ? stack1 : "")
    + "\n				</ul>\n			</div>\n\n		</div>\n\n\n		<div class=\"row header-custom-logo-icons-search\">\n\n			<div class=\"col-sm-3 header-logo-wrapper header-logo-wrapper-desktop\">\n				<div data-view=\"Header.Logo\"></div>\n			</div>\n\n			<div class=\"col-sm-6 header-site-search-tablet\">\n				<div class=\"header-site-search\" data-view=\"SiteSearch\" data-type=\"SiteSearch\"></div>\n			</div>\n\n			<div class=\"col-sm-3 header-left-section-icons\">\n\n				<div class=\"header-logos-icons\">\n\n\n					<div class=\"header-menu-cart\">\n						<div class=\"header-menu-cart-dropdown\">\n							<div data-view=\"Header.MiniCart\"></div>\n						</div>\n					</div>\n\n					<i class=\"header-like-icon header-favourite-list-open\"></i>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"list") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":128,"column":4},"end":{"line":140,"column":11}}})) != null ? stack1 : "")
    + "\n					<div class=\"account\">\n						<div class=\"header-menu-profile\" data-view=\"Header.Profile\">\n						</div>\n\n					</div>\n				</div>\n\n			</div>\n			<div id=\"banner-header-bottom\" class=\"content-banner banner-header-bottom\" data-cms-area=\"header_banner_bottom\"\n				data-cms-area-filters=\"global\"></div>\n	</nav>\n</div>\n<div class=\"hr-line\">\n	<hr>\n</div>\n<div class=\"header-sidebar-overlay\" data-action=\"header-sidebar-hide\"></div>\n<div class=\"header-secondary-wrapper\" data-view=\"Header.Menu\" data-phone-template=\"header_sidebar\"\n	data-tablet-template=\"header_sidebar\">\n</div>\n\n\n<script>\n	\n	$('.header-favourite-list-open').click(()=>{\n\n	$('.favourite-list').toggle();\n	})\n</script>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header'; return template;});