define('example_sccctencourage_encourage.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div  class=\"sccctencourage-container\" data-banner=\"encourage\">\n\n    <div class=\"bannerhead\" data-type=\"banner-head\">\n    <a class=\"itemsix\">\n    <img class=\"sccctencourage-banner\" src=\"https://www.w3schools.com/images/picture.jpg\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"data") : depth0)) != null ? compilerNameLookup(stack1,"custrecord_cctenc_altt") : stack1), depth0))
    + "\">\n  </a>\n    <a class=\"itemsix\">\n    <img class=\"sccctencourage-banner\" src=\"https://www.w3schools.com/images/picture.jpg\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"data") : depth0)) != null ? compilerNameLookup(stack1,"custrecord_cctenc_altt") : stack1), depth0))
    + "\">\n  </a>\n    <a class=\"itemsix\">\n    <img class=\"sccctencourage-banner\" src=\"https://www.w3schools.com/images/picture.jpg\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"data") : depth0)) != null ? compilerNameLookup(stack1,"custrecord_cctenc_altt") : stack1), depth0))
    + "\">\n  </a>\n    <a class=\"itemsix\">\n    <img class=\"sccctencourage-banner\" src=\"https://www.w3schools.com/images/picture.jpg\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"data") : depth0)) != null ? compilerNameLookup(stack1,"custrecord_cctenc_altt") : stack1), depth0))
    + "\">\n  </a>\n    <a class=\"itemsix\">\n    <img class=\"sccctencourage-banner\" src=\"https://www.w3schools.com/images/picture.jpg\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"data") : depth0)) != null ? compilerNameLookup(stack1,"custrecord_cctenc_altt") : stack1), depth0))
    + "\">\n  </a>\n\n\n    </div>\n\n</div>";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Example/SCCCTEncourage/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'example_sccctencourage_encourage'; return template;});