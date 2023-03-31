


// function getHeaderLink(data,isEmpty){
//     var template = $("#BlogPostData").html();

//     _.each(data,(x)=>{
//         var postData= x.postDetails;
         
//         if ((postData===null) || (postData==='')){

//             return false;
//         }
//    else{
       
//        postData = postData.toString();
//        var Newstr= postData.replace(/<[^>]*>/g, '');
//        Newstr = Newstr.substring(0,100)+'...';
//        x.postDetails= Newstr;
//    }
//     });

//     if(!_.isUndefined(template)){
//          // Compile the template data into a function
//         var templateScript = Handlebars.compile(template);
//         // Define data in JSON format.
//         var context = {
//             blogPostData: data,
//             showData: 2,
//             booleanData:isEmpty
//         };
       
//         // Pass Data to template script.
//         var html = templateScript(context);
//         // Insert the HTML code into the page
//         $("#dynamicBlogAppend").html(html);
    
//     }

// }


// // console.log(strip_html_tags('PHP Exercises'));

//         function getBlogData(){

//             $.ajax({    //create an ajax request to display.php
//               type: "GET",
//               url: "../Header/HeaderNavigation/headerFetchNav.php",             
//               // dataType: "html",   //expect html to be returned     
//               success: function(response){  
                
//                   var jsonDataContentBlogSection = JSON.parse(response);
//                 //   console.log(jsonDataContentBlogSection,"uploadBlogData");
//                 if(jsonDataContentBlogSection.length == 0){
//                     blogPostTemplate(jsonDataContentBlogSection,true);

//                 }else{

//                     blogPostTemplate(jsonDataContentBlogSection,false);
//                 } 
      
//               }
      
//           });
//         }
        

   

//         // initialize in page load 
//         $(function() {
//             getBlogData();
//         });
//         //  end




