
// fetchlistofdatabaseFields

function blogPostTemplate(data,isEmpty){
    var template = $("#fetchfieldandaddcustominputfield").html();


    if(!_.isUndefined(template)){
         // Compile the template data into a function
        var templateScript = Handlebars.compile(template);
        // Define data in JSON format.
        var context = {
            loopingData: data,
            booleanData:isEmpty
        };
       
        // Pass Data to template script.
        var html = templateScript(context);
        // Insert the HTML code into the page
        $("#dyanmicAppendOptions").html(html);
    
    }

}


// console.log(strip_html_tags('PHP Exercises'));

        function getBlogData(){

            $.ajax({    //create an ajax request to display.php
              type: "GET",
              url: "fetchListoftables.php",             
              // dataType: "html",   //expect html to be returned     
              success: function(response){  
                
                  var jsonDataContentBlogSection = JSON.parse(response);
                //   console.log(jsonDataContentBlogSection,"uploadBlogData");
                if(jsonDataContentBlogSection.length == 0){
                    blogPostTemplate(jsonDataContentBlogSection,true);
                    
                }else{
                    
                    blogPostTemplate(jsonDataContentBlogSection,false);
                } 
                console.log(jsonDataContentBlogSection);
      
              }
      
          });
          var getinputTypes = ['button','checkbox','color','date',
                            'datetime-local','email','file','hidden',
                            'image','month','number','password',
                            'radio','range','reset','search',
                            'submit','tel','text','url']
        }
        

        (function($) {
            "use strict";
            getBlogData();
        })(jQuery)

      




