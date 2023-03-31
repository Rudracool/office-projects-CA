var $window = $(window);

var aboutUsData;
// var ;

function aboutUsDataSection(callback) {
    $.getJSON('assets/js/customChanges/profileConfig.json', function (data) {
        callback(data);
    });
}

aboutUsDataSection(function (data) {
  aboutUsData = data;
    autoPopulate('field', 'id');
});

function autoPopulate(field, id) {

    var data = aboutUsData.profileData;

    // sending the data to the template using handlebar js
    var template = $("#ProfileData").html();
    if(!_.isUndefined(template)){
         // Compile the template data into a function
    var templateScript = Handlebars.compile(template);
    // Define data in JSON format.
    var context = {
    cust: data,
    };
    // Pass Data to template script.
    var html = templateScript(context);
    // Insert the HTML code into the page
    $(".taem_lead").html(html);
    
    }
  

    // any=aboutUsData.profileData;
    $(function () {
      var CurrentElement = $(".team_img");
      $(CurrentElement).on('click',function (e) {
        e.preventDefault();
        var getDataFromTemplate = e.currentTarget.dataset.id;
    
        var ResultantData = $.map(data, (value) => {
          if (value.id == getDataFromTemplate) {
            return value;
          }
        });
        if (getDataFromTemplate == "director1" || getDataFromTemplate == "director2" || getDataFromTemplate == "director3") {
          var template = $("#ProfileDetails").html();
          if (!_.isUndefined(template)) {
            // Compile the template data into a function
            var templateScript = Handlebars.compile(template);
            // Define data in JSON format.
            var context = {
              Profile: ResultantData,
            };
            // Pass Data to template script.
            var html = templateScript(context);
            // Insert the HTML code into the page
            $(".customDiv").html(html);
    
          }
          var dataAddon = jQuery(".data-add-on");
          dataAddon.addClass("active");
          dataAddon.removeClass("closed");
          if (document.documentElement.clientWidth < 769) {
            $("html,body").animate(
              {
                scrollTop: $(".customDiv").offset().top - 70,
              },
              2000
            );
          }
    
        } else {
          var template3 = $("#profileDetails2").html();
          if (!_.isUndefined(template3)) {
            // Compile the template data into a function
            var templateScriptData = Handlebars.compile(template3);
            // Define data in JSON format.
            var context = {
              customProfile2: ResultantData,
            };
            // Pass Data to template script.
            var html2 = templateScriptData(context);
            // Insert the HTML code into the page
            $(".add-second-content-profileDetails").html(html2);
    
          }
    
          var dataAddon = jQuery(".data-add-on-2");
          dataAddon.addClass("active1");
          dataAddon.removeClass("closed1");
          if (document.documentElement.clientWidth < 769) {
            $("html,body").animate(
              {
                scrollTop: $(".add-second-content-profileDetails .data-add-on-2").offset().top - 70,
              },
              2000
            );
          }
        }
      });
    
     
    
    
    })
}
var DesktopView = $('.desktop-view');
var mobileView = $('.mobile-view');
if (document.documentElement.clientWidth < 768) {
  mobileView.css({
    'display': 'grid'
  })
  DesktopView.css({
    'display': 'none'
  })

}
if (document.documentElement.clientWidth >= 768) {
  mobileView.css({
    'display': 'none'
  })
  DesktopView.css({
    'display': 'grid'
  })

}


