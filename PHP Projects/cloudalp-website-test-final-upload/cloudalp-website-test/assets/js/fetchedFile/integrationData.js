var $window = $(window);

var integrationAllDAta;

function test(callback) {
    $.getJSON('assets/js/customChanges/IntegrationSection/integrationData.json', function (data) {
        callback(data);
    });
}

test(function (data) {
    integrationAllDAta = data;
    autoPopulate('field', 'id');
});

function autoPopulate(field, id) {
 /* for 3pl section*/ 
//  console.log(integrationAllDAta);
 var ThreePLResultantData = integrationAllDAta.threePlintegrationData;
 var Customtemplate3pl = $("#mobileViewThreePlsection").html();
 if(!_.isUndefined(Customtemplate3pl)){
     var templateScript3pl = Handlebars.compile(Customtemplate3pl);
     var contextDataFor3pl = {
         Integration3PL: ThreePLResultantData,
     };
     var htmlData3PL = templateScript3pl(contextDataFor3pl);
     $('[data-view="DynamicDataForthreeplIntegration"]').html(htmlData3PL);
 }

 /* for integration Method*/
 var IntegrationMethodResultantData = integrationAllDAta.integrationMethodData;
 var CustomtemplateMethod = $("#mobileViewIntegrationsection").html();
 if(!_.isUndefined(CustomtemplateMethod)){
     var templateScriptMethod = Handlebars.compile(CustomtemplateMethod);
     var contextDataFormethod = {
         integrationMethod: IntegrationMethodResultantData,
     };
     var htmlDataMethod = templateScriptMethod(contextDataFormethod);
     $('[data-view="DynamicDataForIntegrationSection"]').html(htmlDataMethod);
 }

 /* for payment section */
 var paymentResultantData = integrationAllDAta.paymentData;
 var CustomtemplatePayment = $("#mobilePaymentsection").html();
 if(!_.isUndefined(CustomtemplatePayment)){
     var templateScriptPayment = Handlebars.compile(CustomtemplatePayment);
     var contextDataForPayment = {
         paymentData: paymentResultantData,
     };
     var htmlDataPayment = templateScriptPayment(contextDataForPayment);
     $('[data-view="DynamicDataForPayment"]').html(htmlDataPayment);
 }

 /* for applicaation section */

 var resultantData = integrationAllDAta.applicationdata;
 var CustomtemplateApplication = $("#mobileViewApplicationsection").html();
 if(!_.isUndefined(CustomtemplateApplication)){
     var templateScriptApplication = Handlebars.compile(CustomtemplateApplication);
     var contextData = {
         applicationData: resultantData,
     };
     var htmlDataApplication = templateScriptApplication(contextData);
     $('[data-view="DynamicDataForApplication"]').html(htmlDataApplication);
 }
 
}

