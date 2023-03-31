<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="<?php echo $descriptionContent?>">
    <meta name="keywords" content="<?php echo $searchKeyword?>">
    <meta name="author" content="<?php echo $authorName?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<!--meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" /-->



    <!-- for facebook -->
    <meta property="og:title" content="CloudAlp Technologies" />
    <meta property="og:image" content="https://cloudalp.com/assets/img/CloudAlp-main.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="200" />
    <meta property="og:image:alt" content="CloudAlp Technologies" />
    <meta property="og:url" content="https://cloudalp.com" />
    <!-- end -->
    

    <!-- For twitter  -->
    <meta name="twitter:title" content="CloudAlp Technologies ">
    <meta name="twitter:description" content="CloudAlp Technologies is an expert enterprise solutions provider and Oracle-NetSuite Commerce Partner in Asia. We provide end to end NetSuite consulting services, Scripting, Integration and Support">
    <meta name="twitter:image" content="https://cloudalp.com/assets/img/CloudAlp-main.png">
    <meta name="twitter:card" content="cloudalp_img_summery">
    <!-- end -->
    
    <title> <?php echo $title; ?></title>
	<link rel="manifest" href="manifest.json">
	<link rel="shortcut icon" type="image/png" href="assets/img/favicon.png"/>
    <link rel="apple-touch-icon" href="assets/img/favicon.png">
    <link rel="apple-touch-icon" sizes="152x152" href="assets/img/favicon.png">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicon.png">
    <link rel="apple-touch-icon" sizes="167x167" href="assets/img/favicon.png">

	<link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/custom-css/main.css?v=<?php echo time(); ?>"/>
    <link rel="stylesheet" href="assets/css/variables/color.css?v= <?php echo time();?>">
    <link rel="stylesheet" href="assets/css/variables/fontSize.css?v= <?php echo time();?>">
	
	<link rel="stylesheet" href="assets/css/animate.css"/>
	<link rel="stylesheet" href="assets/css/custom-css/animate.min.css"/>
    <link rel="stylesheet" href="assets/css/slick-slider/slick-theme.css?v=<?php echo time(); ?>"/>
    <link rel="stylesheet" href="assets/css/slick-slider/slick.css?v=<?php echo time(); ?>"/>
	
	<script  type="text/javascript" src="assets/js/jquery/jquery.js"></script>
	<script  type="text/javascript" src="assets/js/vendor/bootstrap.min.js"></script>

	<script  src="assets/js/wow.min.js"></script>
    <script  src="assets/js/vendor/underscore.min.js"></script>
    <script  type='text/javascript' src="assets/js/vendor/handlebar.min.js"></script>

    

 

    
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-NZQ8B5H1RB"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'G-NZQ8B5H1RB');
    </script>
    <!-- end -->

</head>

<body>
 
    <div class="preloader">
        <div class="preloader_image  pulse animated" style="background-image: url(assets/img/CloudAlp-main.png);background-size: contain; background-position: center; background-repeat: no-repeat;"></div>
    </div>
	<a id="inside-nav">down</a>

    <div id="canvas">
        <div id="box_wrapper">
            
			<div class="header_absolute affix-wrapper">
               

                	<header data-spy="affix" class="page_header without-dots justify-nav-center affix" data-offset-top="200" >
                    <div class="container">

                              <div class="row align-items-center"> 
                            <div class="col-xl-3 col-md-7 col-10">
                                <a href="index.php" rel="home" class="logo logo_image_and_text">
									<img class="logo-color small-logo" src="assets/img/CAlogo.png" alt="CloudAlp-small-logo" width="70" height="45" >
									<img class="logo-color main-logo" src="assets/img/CloudAlp-main.png" alt="CloudAlp-main-logo" width="198" height="47" >
								</a>
							</div>
                            <div class="col-xl-9 col-1 flex-menu">

                                  <div class="home-nav-home-content nav-container-content">
                                      <ul class="home-nav-home-content-all-nav-dropdown-content sf-menu-nav-content" style="touch-action: pan-y;">
                                          <li class="home-nav-text">
                                              <a href="index.php" class="home-nav-one-css-content">Home</a>
                                          </li>
                                          <li class="services-nav-text">
                                              <a href="NetsuiteService.php" class="home-nav-one-css-content sf-with-ul-nav">Services</a>
                                              
                                              <ul class="services-nav-dropdown-content sub-menu-content">
                                                  <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated"><a href="NetsuiteImplementation.php">Implementation</a></li>
                                                  <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-1"><a href="NetsuiteSuiteCommerce.php">Suitecommerce</a></li>
                                                  <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-2"><a href="NetsuiteCustomization.php">Customization</a></li>
                                                  <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-3"><a href="NetsuiteIntegration.php">Integration</a></li>
                                                  <!-- <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-4"><a href="NetsuiteSuiteApps.php">Comming soon</a></li> -->
                                              </ul>
                                          </li>
                                          <li class="about-us-nav-text">
                                              <a href="AboutUs.php" class="home-nav-one-css-content sf-with-ul-nav">About Us</a>
                                            
                                               <ul class="about-us-nav-dropdown-content sub-menu-content">
                                                   <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated"><a href="AboutUs.php#section-2">Our vision</a></li>
                                                   <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-1"><a href="AboutUs.php#section-4">Why CloudAlp?</a></li>
                                                   <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-2"><a href="AboutUs.php#section-5">Our Approach</a></li>
                                                   <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-3"><a href="AboutUs.php#section-6">The Team</a></li>
                                                   <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-4"><a href="AboutUs.php#section-7">Partner With Us</a></li>
                                                   <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-5"><a href="career.php">Careers</a></li>
                                               </ul>
                                         </li>
                                          <li class="contact-us-nav-text">
                                              <a href="ContactUs.php" class="home-nav-one-css-content">Contact Us</a>
                                          </li>
                                      </ul>
                                  </div>
                            </div>
                        </div>
                    </div>

                    
                </header>


<span class="toggle_menu"><span></span></span>
                           <div id="nav-container">
	                           <nav class="top-nav">
                                    <ul id="menu-main_menu" class="sf-menu nav">
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="index.php">Home</a></li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="NetsuiteService.php">Services</a>
                                            <ul class="sub-menu">
                                                <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated"><a href="NetsuiteImplementation.php">Implementation</a></li>
												<li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-1"><a href="NetsuiteSuiteCommerce.php">SuiteCommerce</a></li>
                                                <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-2"><a href="NetsuiteCustomization.php">Customization</a></li>
                                                <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-3"><a href="NetsuiteIntegration.php">Integration</a></li>
                                                <!-- <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-4"><a href="NetsuiteSuiteApps.php">Comming soon</a></li> -->
                                                
                                        
                                            </ul>
                                        </li>
										<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="AboutUs.php">About Us</a>
                                            <ul class="sub-menu">
                                                <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated"><a href="AboutUs.php#section-2">Our vision</a></li>
                                                <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-1"><a href="AboutUs.php#section-4">Why CloudAlp?</a></li>
                                                <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-2"><a href="AboutUs.php#section-5">Our Approach</a></li>
                                                <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-3"><a href="AboutUs.php#section-6">The Team</a></li>
                                                <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-4"><a href="AboutUs.php#section-7">Partner With Us</a></li>
                                                
                                                <li class="menu-item menu-item-type-post_type menu-item-object-page fadeInUp animated delay-5"><a href="career.php">Careers</a></li> 
                                            </ul>
                                        </li>
                                       
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="ContactUs.php">Contact Us</a></li>
										<li class="social-icons-div row">
											
											<div class="social-address">
											<h4>Get Connected</h4>
												<a href="" style="line-height: 20px;letter-spacing: 0.7px;"><i class="fa fa-map-marker fa-lg"></i>#305, Level III, Legend Venkatesha,Narayanguda, Hyderabad, IN - 500029</a>
												<a href="tel:+14152511510"><i class="fa fa-phone"></i>+1 -415 -251 -1510</a>
												<a href="tel:+919502867669"><i class="fa fa-phone"></i> +91 -950 -286 -7669</a>
												<a href="tel:+919849987913"><i class="fa fa-phone"></i> +91 -984 -998 -7913</a>
												<a href="mailto:info@yourdomain.com"><i class="fa fa-envelope"></i> info@cloudalp.com</a>
											</div>
											<div class="social-icons">
												<a href="https://www.facebook.com/cloud.alp" class="fa fa-facebook"><span class=""></span></a>
												<a href="https://twitter.com/cloudalp" class="fa fa-twitter"><span class=""></span></a>
												<a href="https://www.linkedin.com/company/cloudalp-technologies" class="fa fa-linkedin"><span class=""></span></a>
											</div>
																	
										</li>
                                    </ul>
                                </nav>
                           </div>
            </div>
<div class="fw-page-builder-content">