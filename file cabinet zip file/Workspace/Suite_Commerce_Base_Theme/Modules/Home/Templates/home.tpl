<div class="home">
	<div data-cms-area="home_cms_area_1" data-cms-area-filters="path"></div>

	{{!---<div class="home-banner-top">
		<p class="home-banner-top-message">
			{{translate 'Use promo code <strong>SCADEMO</strong> for <strong>30%</strong> off your purchase'}}
		</p>
	</div> ---}}

	<div data-cms-area="home_cms_area_2" data-cms-area-filters="path"></div>

	<div class="home-slider-container" >
		<div class="home-image-slider">
			<ul data-slider class="home-image-slider-list">
				{{#each carouselImages}}
					<li>
						<div class="home-slide-main-container">
							<div class="home-slide-image-container">
								<img src="{{resizeImage this ../imageHomeSize}}" alt="" />
							</div>

							<div class="home-slide-caption">
								<h2 class="home-slide-caption-title">SAMPLE HEADLINE</h2>
								<p>Example descriptive text displayed on multiple lines.</p>
								<div class="home-slide-caption-button-container">
									<a href="/search" class="home-slide-caption-button">Shop Now</a>
								</div>
							</div>
						</div>
					</li>
				{{else}}
				<li>
					<div class="home-slide-main-container " id="slider1">
						<div class="home-slide-image-container">
							<img src="{{getThemeAssetsPath (resizeImage 'img/nav_slider_1.png' ../imageHomeSize)}}" alt="" />
						</div>

						<div class="home-slide-caption">
						    <span class="header-slider-caption-span-content">CloudAlp’s New</span>
							<h2 class="home-slide-caption-title">Success Road To E-Commerce</h2>
							<p>Start your online store today with certified consultants</p>
							<div class="home-slide-caption-button-container">
								<a href="/search" class="home-slide-caption-button">Start Now</a>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="home-slide-main-container" id="slider2">
						<div class="home-slide-image-container">
							<img src="{{getThemeAssetsPath (resizeImage 'img/nav_slider_2.png' ../imageHomeSize)}}" alt="" />
						</div>

						<div class="home-slide-caption">
							<h2 class="home-slide-caption-title">Optimizing Netsuite</h2>
							<p>Unlock Business Success by ...</p>
							<div class="home-slide-caption-button-container">
								<a href="/search" class="home-slide-caption-button">Read More</a>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="home-slide-main-container " id="slider3" >
						<div class="home-slide-image-container">
							<img src="{{getThemeAssetsPath (resizeImage 'img/nav_slider_3.png' ../imageHomeSize)}}" alt="" />
						</div>

						<div class="home-slide-caption">
							<h2 class="home-slide-caption-title">Suite Commerce Advanced</h2>
							<p>CloudAlp + SuiteCommerce Advanced can create endless possibilities for your business.</p>
							<div class="home-slide-caption-button-container">
								<a href="/search" class="home-slide-caption-button">Read More</a>
							</div>
						</div>
					</div>
				</li>
			 {{!---- 	<li>
					<div class="home-slide-main-container " id="slider4">
						<div class="home-slide-image-container">
							<img src="{{getThemeAssetsPath (resizeImage 'img/nav_slider_4_5.png' ../imageHomeSize)}}" alt="" class="nav_slider_4_5" />
						</div>

						<div class="home-slide-caption">
							<h2 class="home-slide-caption-title">HD Flame Detector</h2>
							<p>New documentation released.</p>
							<div class="home-slide-caption-button-container">
								<a href="/search" class="home-slide-caption-button">Shop Now</a>
							</div>
						</div>
					</div>
				</li>----}}
				{{/each}}
			</ul>
		</div>
	</div>



	<div data-cms-area="home_cms_area_3" data-cms-area-filters="path"></div>
      <div class="home-video-content">
	     <div class="home-video-main-content">
           <div class="home-video-image-content">
		       <a href="#">
			      <img src="{{getThemeAssetsPath (resizeImage 'img/home-video-content.png' ../imageHomeSizeBottom)}}" alt="" >
			   </a>
		   </div>
		   <div class="home-video-arrow-content">
		        <img src="{{getThemeAssetsPath (resizeImage 'img/home-video-arrow.png' ../imageHomeSizeBottom)}}" alt="" >
		   </div>
		   <div class="home-video-text-content">
		      <p class="home-video-click-button-content">{{translate '<strong>CLICK “PLAY” BUTTON TO</strong> '}}</p>
			  <h2 class="home-video-watch-text-content">{{translate '<strong>WATCH OUR VIDEO!</strong> '}}</h2>
		   </div>		 
		 </div>  
    </div>



  



  {{!----  <div class="home-aboutus-content">
        <div class="home-aboutus-main-content">
		    <div class="home-aboutus-upper-main-content">
				<div class="home-aboutus-description-content">
				    <div class="home-aboutus-heading-content">
					    <h1>
						     {{translate '<strong>OVER 90 YEARS OF PROVIDING SAFE COMBUSTION</strong> '}}
						</h1>
					</div>
					<div class="home-aboutus-heading-description-content">
					    <p>
						     {{translate '<strong>Forney&reg;</strong>has maintained its position as a leader in power plant and large industrial systems for more than 90 years by designing, manufacturing, installing and servicing the most innovative lines of combustion equipment. '}}
						</p>
					</div>
				</div> 
			    <div class="home-aboutus-heading-image-content">
				     <img src="{{getThemeAssetsPath (resizeImage 'img/forney-industry.png' ../imageHomeSizeBottom)}}" alt="" >
				</div>
			</div>
			<div class="home-aboutus-down-main-content">
			    <div class="home-aboutus-down-description-content">
				    <div class="home-aboutus-down-description-content1">
					    <p>
						     {{translate 'Forney’s full line of combustion products includes igniters, flame detectors, Burner Management Systems (BMS), dampers, burners and duct burners. '}}
						</p>
					</div>
					<div class="home-aboutus-down-description-content2">
					    <p>
						     {{translate 'With field offices and sales representatives around the world, Forney can serve customers with local product and application support. '}}
						</p>
					</div>
				</div>
				

				<div class="home-aboutus-down-image-content">
				    <div class="home-aboutus-down-image-content1">
					     <img src="{{getThemeAssetsPath (resizeImage 'img/furney-industry-1.png' ../imageHomeSizeBottom)}}" alt="" >
					</div>
					<div class="home-aboutus-down-image-content2">
					     <img src="{{getThemeAssetsPath (resizeImage 'img/forney-industry2.png' ../imageHomeSizeBottom)}}" alt="" >
					</div>
				</div>
			</div>
		</div>
    </div>
----}}
<div  class="home-aboutus-content" >
  <div class="home-aboutus-main-content">
   
    <div class="home-header-aboutus-main-text-content">
	    <div class="animation-element slide-left home-heade-aboutus-main-text-header-content-1">
		    <h1 class="">
			     {{translate '<strong>OVER 08 YEARS OF PROVIDING E-COMMERCE SERVICES</strong> '}}
			</h1>
		</div>
		<div class="home-header-aboutus-main-text-header-content-2">
		    <h3 class="animation-element slide-left" >
				 {{translate '<strong>CloudAlp&reg;</strong>leadership has more than 20+years of experience in IT and ERP consulting. Part of this experience includes working and serving various Industries like Retail, Health Care, Services, IT, eCommerce, Financials and Media & Publishing. CloudAlp staff has diverse backgrounds and carry deep product knowledge.'}}
			</h3>
		</div>
		<div class="home-header-aboutus-main-text-header-content-3">
			<p class="any1 animation-element slide-left ">
				 {{translate 'We provide full suite of Netsuite services that facilitates all your Cloud ERP,CRM and business needs. Our development capability extends from small script to complex business solution, that fit exactly what you are dreaming. Whether you are seeking Cloud Solution, Integration expertise, Custom development or support, our experts will work with you to design, develop and deploy by innovative approaches to meet your service and business objectives. '}}
			</p>		
		</div>
		<div class="home-header-aboutus-main-text-header-content-4">
		    <p class="any2 animation-element slide-left">
				 {{translate 'If you are unsure where to get started, we will help you to navigate till you accomplish goals. Selecting a right solution should be based on what makes sense for your organization and not what is trendy. Taking into account your current and future needs should be forefront in forecast and decision making process; we will guide you where you want to go with our unique blend of team. '}}
			</p>
		</div>
	</div>
	<div class="home-aboutus-main-image-content">
	    <div class="home-aboutus-image-main-content">
		     <img class="right slide-right" src="{{getThemeAssetsPath (resizeImage 'img/forney-industry.jpg' ../imageHomeSizeBottom)}}" alt="" >
		</div>
		<div class="home-aboutus-image-content">
		    <div class=" home-aboutus-image-content-subcontent-1">
			     <img class="right slide-right" src="{{getThemeAssetsPath (resizeImage 'img/furney-industry-1.png' ../imageHomeSizeBottom)}}" alt="" >
			</div>
			<div class="home-aboutus-image-content-subcontent-2">
			     <img class="right slide-right" src="{{getThemeAssetsPath (resizeImage 'img/forney-industry2.png' ../imageHomeSizeBottom)}}" alt="" > 
			</div>
		</div>
	</div>
  </div>	
</div>


 <div   class="home-application-content">
       <div class="home-application-main-content">
	       <div class="home-application-header-text-content">
		       <h1>
		             {{translate '<strong>APPLICATIONS</strong> '}}
			   </h1>
		   </div>
		   <div class="home-application-header-subcontent">
		       <div class="home-application-header-left-subcontent">
			       <div class="home-application-header-left-content-img">
				       <img src="{{getThemeAssetsPath (resizeImage 'img/application-1.png' ../imageHomeSizeBottom)}}" alt="" > 
				   </div>
				   <div class="home-application-header-left-right-subcontent">
				        <h1 class="right slide-right">
						   {{translate '<strong>COMBINED CYCLE PLANT</strong> '}}
						</h1>
						<p class="right slide-right">
						   {{translate 'For Cogeneration or combined cycle plants, CloudAlp offers a wide variety of products to help improve your process efficiency. '}}
						</p>
						<p class="right slide-right">
						   {{translate 'Click the icon for more information about CloudAlp’s products on a Combined Cycle Plant. '}}
						</p>
				   </div>
			   </div>
			   <div class="home-application-header-right-subcontent">
			       <div class="home-application-header-right-subcontent-img">
				        <img src="{{getThemeAssetsPath (resizeImage 'img/application-2.png' ../imageHomeSizeBottom)}}" alt="" > 
				   </div>
				   <div class="home-application-header-right-subcontent-text">
				        <h1 class="right slide-right">
						   {{translate '<strong>THERMAL PLANTS</strong> '}}
						</h1>
						<p class="right slide-right">
						   {{translate 'For thermal plants, CloudAlp offers a variety of combustion and safety products to help keep your plant up and running. '}}
						</p>
						<p class="right slide-right">
						   {{translate 'Click the Coal Plant icon to view CloudAlp’s products on a coal plant. '}}
						</p>
				   </div>
			   </div>
		   </div>
	   </div>
   </div>


  <div  class="home-whatsnew-content">
      <div class="home-whatsnew-main-content">
           <div class="home-whatsnew-heading-content">
		       <h1>
			      WHAT'S NEW
			   </h1>
		   </div>
	        <div class="home-whatsnew-card-main-content">
	            <div class="down slide-down home-whatsnew-card-content-1">
				  <div class=" home-whatsnew-card-1">
				    <h1>
			            HOW TO DECREASE STARTUP TIMES
			        </h1>
					<p>
					    Purge cycles can add between 5 and 20 minutes to your startup time, which can cost your plant thousands of dollars in lost revenue.
					</p>
					<a href="#">
					     READ MORE 
					</a>
					</div>
				</div>
		        <div class="down slide-down1 home-whatsnew-card-content-2">
				  <div class=" home-whatsnew-card-2">
				    <h1>
			            NEW PRICING OPTION FOR DUCT BURNERS
			        </h1>
					<p>
					    OEM and Retrofit pricing now available. Cloudalp has new pricing options available ...
					</p>
					<a href="#">
					    READ MORE
					</a>
					</div>
				</div>
		        <div class="down slide-down2 home-whatsnew-card-content-3">
				  <div class=" home-whatsnew-card-3">
				    <h1>
			            HD FLAME DETECTOR WEBINARS
			        </h1>
					<p>
					    Recording of HD Flame Detector Webinar available. At this time, Cloudalp does not ...
					</p>
					<a href="#">
					    READ MORE
					</a>
					</div>
				</div>
	        </div>
       </div>
  </div>


  {{!---home  slider images---}}
	<div class="home-slider-Custom">
		<div class="home-slider-images">
			<ul data-slide class="home-image-slider-lis" >
				{{#each  sliderCarouselImages}}
					<li class="home-slide-li">
					 
							<div class="home-slider-image-container">
							<a  {{objectToAtrributes this}}>
							<img src="{{resizeImage this }}" alt=""/>
						    </a>
							</div>
					 
					</li>
				{{/each}}
			</ul>
		</div>
	</div>

    <div data-test="" class="flex-container">
     {{!----   <div class="spinner"><p>
            <div class="cube1"></div>
            <div class="cube2"></div>
            Loading...
            </p>
        </div>----}}
        <div class="flex-slide any6">
            <div class="flex-title flex-title-home">Home</div>
            <div class="flex-about flex-about-home"><p class="about-any">Click here to navigate to the home section of the website</p></div>
        </div>
        <div class="flex-slide about">
            <div class="flex-title">About</div>
            <div class="flex-about"><p class="about-any">Click here to navigate to the About section of the website</p></div>
        </div>
        <div class="flex-slide work">
            <div class="flex-title">Work</div>
            <div class="flex-about"><p class="about-any">Listing relevant snippets of work:</p>
                <ul>
                    <li>First piece of work</li>
                    <li>Second piece of work</li>
                    <li>Third piece of work</li>
                </ul>
            </div>
        </div>
        <div class="flex-slide contact">
            <div class="flex-title">Contact</div>
                    <div class="flex-about">
                        <p class="about-any">Use the contact form below</p>
                        <form class="contact-form">
                            <p class="about-any">Email <input type="text" name="email"></p>
                            <p class="about-any">Comment <textarea type="text" name="comment" row="5"></textarea></p>
                            <p class="about-any"><input type="submit" name="email" value="Send Message"></p>
                        </form>
    
            </div>
        </div>
    </div>
   
   

{{!----
<div class="home-banner-main">
	{{#each bottomBannerImages}}
    	<div class="home-banner-main-cell-nth{{@index}}">
    		<div class="home-banner-main-cell-bg">
        		<img src="{{resizeImage this ../imageHomeSizeBottom}}" alt="" >
        		<div class="home-banner-main-cell-text">EXAMPLE TEXT</div>
    		</div>
   		</div>
	{{else}}
      	<div class="home-banner-main-cell-nth0">
      		<div class="home-banner-main-cell-bg">
        		<img src="{{getThemeAssetsPath (resizeImage 'img/banner-bottom-home-1.jpg' ../imageHomeSizeBottom)}}" alt="" >
        		<div class="home-banner-main-cell-text">EXAMPLE TEXT</div>
        	</div>
      	</div>
      	<div class="home-banner-main-cell-nth1">
      		<div class="home-banner-main-cell-bg">
        		<img src="{{getThemeAssetsPath (resizeImage 'img/banner-bottom-home-2.jpg' ../imageHomeSizeBottom)}}" alt="" >
        		<div class="home-banner-main-cell-text">EXAMPLE TEXT</div>
        	</div>
      	</div>
     	<div class="home-banner-main-cell-nth2">
      		<div class="home-banner-main-cell-bg">
        		<img src="{{getThemeAssetsPath (resizeImage 'img/banner-bottom-home-3.jpg' ../imageHomeSizeBottom)}}" alt="" >
        		<div class="home-banner-main-cell-text">EXAMPLE TEXT</div>
        	</div>
      	</div>
    {{/each}}
	</div>

	<div data-cms-area="home_cms_area_4" data-cms-area-filters="path"></div>

	<div class="home-merchandizing-zone">
		<div data-id="your-merchandising-zone" data-type="merchandising-zone"></div>
	</div>
</div>
----}}
{{!----
Use the following context variables when customizing this template:

	imageHomeSize (String)
	imageHomeSizeBottom (String)
	carouselImages (Array)
	bottomBannerImages (Array)

----}}
