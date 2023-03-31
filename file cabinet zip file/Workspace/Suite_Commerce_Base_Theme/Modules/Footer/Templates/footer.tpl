{{!----<div data-view="Global.BackToTop"></div>
<div class="footer-content">

	<div id="banner-footer1" class="footer-content-col2 ">
	<div data-cms-area="global_banner_footer1" data-cms-area-filters="global" class="global-footer-content">
		    <div class="footer-img-logo">
			   <a href="#">
			      <img src="{{getThemeAssetsPath (resizeImage 'img/forney.png' ../imageHomeSize)}}" alt="" />
			   </a>
		    </div>
			<div class="footer-list-item">
			    <div class="footer-list-content1">
			         
		                 <a href="#">About</a>
				         <a href="#">Articles</a>
				         <a href="#">Products</a>
				         <a href="#">Applications</a>
				      
				</div>
				<div class="footer-list-content2">
				      
		                 <a href="#">Literatures</a>
				         <a href="#">Software & Services</a>
				         <a href="#">Contact</a>
				      
				</div>
				<div class="footer-list-content3">
				    
					    <a href="#">Sitemap</a>
				        <a href="#">Privacy Policy</a>
		            
				</div>


			</div>
			
		
	
	
	<div id="banner-footer2" class="footer-content-col2">
		<div data-cms-area="global_banner_footer2" data-cms-area-filters="global">
		   
		</div>
	</div>
	<div id="banner-footer3" class="footer-content-col2">
		<div data-cms-area="global_banner_footer3" data-cms-area-filters="global">
		   
		</div>
	</div>
	<div id="banner-footer4" class="footer-content-col2">
		<div data-cms-area="global_banner_footer4" data-cms-area-filters="global">
	       
		</div>
	</div>
	

	<div id="banner-footer5" class="footer-content-col4">
		<div data-cms-area="global_banner_footer5" data-cms-area-filters="global">
		<p>
        
          {{translate ' Copyright <strong> &#169; Forney Corporation2021. All Rights Reserved'}}
		  </p>
		</div>
	</div>
</div>----}}


{{!----
Use the following context variables when customizing this template:

	showFooterNavigationLinks (Boolean)
	footerNavigationLinks (Array)
	
----}}





<div data-view="Global.BackToTop"></div>
<div class="footer-content">
  
	<div id="banner-footer1" class="footer-content-col2">
		<div data-cms-area="global_banner_footer1" data-cms-area-filters="global">
		   <div class="footer-img-logo">

             
                <img src="{{translate logourl }}" alt="">
				
			
		     {{!----
			   <a href="#">
			      <img src="{{getThemeAssetsPath (resizeImage 'img/cloudalp.png' ../imageHomeSize)}}" alt="" />
			   </a>----}}
		    </div>
		</div>
	</div>
	<div id="banner-footer4" class="footer-content-col2">
		<div data-cms-area="global_banner_footer4" data-cms-area-filters="global">
	         <div class="footer-list-content3">
				       
						 {{#each footerContent3}}
						    
							   <a {{objectToAtrributes this}}>
							     {{translate name}}
							   </a>
							
							{{/each}}
					


		            
				</div>
		</div>
	</div>
	<div id="banner-footer3" class="footer-content-col2">
		<div data-cms-area="global_banner_footer3" data-cms-area-filters="global">
		   <div class="footer-list-content2">
		             
						 {{#each footerContent2}}
						   
							   <a {{objectToAtrributes this}}>
							     {{translate name}}
							   </a>
							
							{{/each}}
						
				     
				</div>
		</div>
	</div>
	
	<div id="banner-footer2" class="footer-content-col2">
		<div data-cms-area="global_banner_footer2" data-cms-area-filters="global">
		   <div class="footer-list-content1">
		        
				 {{#each footerContent1}}
						    
							   <a {{objectToAtrributes this}}>
							     {{translate name}}
							   </a>
						
							{{/each}}
					


			         
				</div>
		</div>
	</div>

	<div id="banner-footer5" class="footer-content-col4">
		<div data-cms-area="global_banner_footer5" data-cms-area-filters="global">

		
		    <p>
              {{translate ' Copyright <strong> &#169; CloudAlp .com . All Rights Reserved'}}
		    </p>
		
		    
		    
		</div>
	</div>
	
</div>


{{!----
Use the following context variables when customizing this template:

	showFooterNavigationLinks (Boolean)
	footerNavigationLinks (Array)
	
----}}



