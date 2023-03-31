<div data-view="Global.BackToTop"></div>
<div class="footer-content">

	<div id="banner-footer1" class="footer-content-col2">
		<div data-cms-area="global_banner_footer1" data-cms-area-filters="global"></div>

            <div class="footer-nav-section-1">
              <div class="footer-nav-section-1-heading" data-toggle="contact">
                <h2> {{heading1}} </h2>
                <span class="toggleArrow"></span>
              </div>
              <div class="footer-nav-section-1-data">
                <ul class="footer-nav-section-1-ul-data">
					{{#each datarow1}}
                  		<li>
                    		<a class="{{class}}" data-touchpoint="{{dataTouchPoints}}" data-hashtag="{{dataHashTag}}">{{name}}</a>
                  		</li>
					{{/each}}
                </ul>
              </div>
  
            </div>

	</div>
	<div id="banner-footer2" class="footer-content-col2">
		<div data-cms-area="global_banner_footer2" data-cms-area-filters="global"></div>

		    <div class="footer-nav-section-1">
              <div class="footer-nav-section-1-heading" data-toggle="contact">
                <h2> {{heading2}} </h2>
                <span class="toggleArrow"></span>
              </div>
              <div class="footer-nav-section-1-data">
                <ul class="footer-nav-section-1-ul-data">
					{{#each datarow2}}
                  		<li>
                    		<a class="{{class}}" data-touchpoint="{{dataTouchPoints}}" data-hashtag="{{dataHashTag}}">{{name}}</a>
                  		</li>
					{{/each}}
                </ul>
              </div>
  
            </div>

	</div>
	<div id="banner-footer3" class="footer-content-col2">
		<div data-cms-area="global_banner_footer3" data-cms-area-filters="global"></div>

		    <div class="footer-nav-section-1">
              <div class="footer-nav-section-1-heading" data-toggle="contact">
                <h2> {{heading3}} </h2>
                <span class="toggleArrow"></span>
              </div>
              <div class="footer-nav-section-1-data">
                <ul class="footer-nav-section-1-ul-data">
					{{#each datarow3}}
                  		<li>
                    		<a class="{{class}}" data-touchpoint="{{dataTouchPoints}}" data-hashtag="{{dataHashTag}}">{{name}}</a>
                  		</li>
					{{/each}}
                </ul>
              </div>
  
            </div>
			
	</div>
	<div id="banner-footer4" class="footer-content-col2">
		 <div class="footer-nav-section-1">
              <div class="footer-nav-section-1-heading" data-toggle="contact">
                <h2> {{heading4}} </h2>
                <span class="toggleArrow"></span>
              </div>
		<div data-cms-area="global_banner_footer4" data-cms-area-filters="global"></div>
		 </div>
	</div>

	{{!-- <div id="banner-footer5" class="footer-content-col4">
		<div data-cms-area="global_banner_footer5" data-cms-area-filters="global">
		
		</div>
	</div> --}}
</div>


{{!----
Use the following context variables when customizing this template:

	showFooterNavigationLinks (Boolean)
	footerNavigationLinks (Array)
	
----}}

