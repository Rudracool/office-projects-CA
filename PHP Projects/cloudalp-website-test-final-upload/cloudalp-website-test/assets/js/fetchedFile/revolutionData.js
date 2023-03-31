var $window = $(window);

var ProfileData;

function test(callback) {
    $.getJSON('assets/js/customChanges/revSliderData.json', function (data) {
        callback(data);
    });
}

test(function (data) {
    ProfileData = data;
    autoPopulate('field', 'id');
});

function autoPopulate(field, id) {
    var responsivedata = ProfileData.revsliderData;
    var custmobileview = ProfileData.responsivenessMobileView;
    var revslidertemplate = $("#revSliderCustomData").html();
    if (!_.isUndefined(revslidertemplate)) {
        var custMainWindowWidth = $window.width();
        var condition;

        $window.on('resize', function () {
            custMainWindowWidth = $(window).width();
        });
        if (custMainWindowWidth < 991) {
            condition = true

        } else {
            condition = false
        }
        responsivedata[0].responsiveness = condition;


        // Compile the template data into a function
        var templateScript = Handlebars.compile(revslidertemplate);
        var context = {
            revAllData: responsivedata,

        };

        // Pass Data to template script.
        var html = templateScript(context);
        // Insert the HTML code into the page
        $(document).ready(function () {

            $("#renderTemplate").html(html);
        })

    }
}