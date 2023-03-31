var $window = $(window);

var suiteAllData;

function test(callback) {
    $.getJSON('assets/js/customChanges/SuiteBundlesSection/ApplicationDetails.json', function (data) {
        callback(data);
    });
}

test(function (data) {
    suiteAllData = data;
    autoPopulate('field', 'id');
});

function autoPopulate(field, id) {
    var suiteBundlesData = suiteAllData.suiteBundlesDetails;
    var suiteTemplates = $("#suiteBundleData").html();
    if(!_.isUndefined(suiteTemplates)){
        var SuiteTemplatesData = Handlebars.compile(suiteTemplates);
        var getContext = {
            allData: suiteBundlesData,
        };
        var handleBarCompileData = SuiteTemplatesData(getContext);
        $('[data-id="SuiteData"]').html(handleBarCompileData);
    }
}

