<div class="header-message" data-view="Message.Placeholder"></div>


<div class="header-main-wrapper {{#if isStandalone}}header-main-wrapper-standalone{{/if}}">
    {{#unless isStandalone}}
	<div class="header-top-subheader" >
	    <div class="header-top-subheader-content">
		    <div class="header-top-content">
			    <p>
				  {{translate '<i>CloudAlp &#174; operations with COVID-19 precautions.</i>'}}
				</p>
				<a href="#">Learn More</a>

			</div>

		</div>
	</div>
	<div class="header-subheader">
        <div class="header-subheader-container">
            <div class="header-sidebar-toggle-wrapper">
                <button class="header-sidebar-toggle" data-action="header-sidebar-show">
                    <i class="header-sidebar-toggle-icon"></i>
                </button>
            </div>
           
		</div>
	</div>
    {{/unless}}

	<nav class="header-main-nav">
		<div id="banner-header-top" class="content-banner banner-header-top" data-cms-area="header_banner_top" data-cms-area-filters="global"></div>
		<div class="header-sidebar-toggle-wrapper">
			<button class="header-sidebar-toggle" data-action="header-sidebar-show">
				<i class="header-sidebar-toggle-icon"></i>
			</button>
		</div>
		<div class="header-right-menu-container">
		  <div class="header-right-menu-main-content">
		<div class="font-icon-content">
			    <a href="#">
				   <i class="fa-facebook"></i>
				</a>
				<a href="#">
				   <i class="fa-feed"></i>
				</a>
				<a href="#">
				 <i class="fa-linkedin"></i>
				</a>
			</div>
		<div class="header-right-menu">
				<div class="header-menu-profile" data-view="Header.Profile"></div>
				{{#unless isStandalone}}
				<div class="header-menu-locator-mobile" data-view="StoreLocatorHeaderLink"></div>
				<div class="header-menu-searchmobile" data-view="SiteSearch.Button"></div>
				<div class="header-menu-cart">
					<div class="header-menu-cart-dropdown" >
						<div data-view="Header.MiniCart"></div>
					</div>
				</div>
				{{/unless}}
			</div>
			</div>
			</div>
		<div class="header-content">
			<div class="header-logo-wrapper">
			<div class="header-logo-content">
				<div data-view="Header.Logo"></div>
			</div>
				 <div class="header-logo-contact-no">
				    <div class="heade-logo-contact-no-img">
					 	<img src="{{getThemeAssetsPath (resizeImage 'img/header-contact-img.png' ../imageHomeSize)}}" alt="" />

					</div>
                        <div class="header-logo-contact-no-content">
		                     <a href="#">1-800-356-7740</a>
							 <p>for 24-hour Emergency Support</p>
                        </div>
                    </div>
			</div>
			
		</div>
		<div id="banner-header-bottom" class="content-banner banner-header-bottom" data-cms-area="header_banner_bottom" data-cms-area-filters="global"></div>
	</nav>

</div>

<div class="header-sidebar-overlay" data-action="header-sidebar-hide"></div>
<div class="header-secondary-wrapper{{#if isStandalone}} header-secondary-wrapper-standalone{{/if}}" data-view="Header.Menu" data-phone-template="header_sidebar" data-tablet-template="header_sidebar"></div>
{{#unless isStandalone}}
<div data-view="SiteSearch"></div>
{{/unless}}


{{!----
Use the following context variables when customizing this template:

	profileModel (Object)
	profileModel.addresses (Array)
	profileModel.addresses.0 (Array)
	profileModel.creditcards (Array)
	profileModel.firstname (String)
	profileModel.paymentterms (undefined)
	profileModel.phoneinfo (undefined)
	profileModel.middlename (String)
	profileModel.vatregistration (undefined)
	profileModel.creditholdoverride (undefined)
	profileModel.lastname (String)
	profileModel.internalid (String)
	profileModel.addressbook (undefined)
	profileModel.campaignsubscriptions (Array)
	profileModel.isperson (undefined)
	profileModel.balance (undefined)
	profileModel.companyname (undefined)
	profileModel.name (undefined)
	profileModel.emailsubscribe (String)
	profileModel.creditlimit (undefined)
	profileModel.email (String)
	profileModel.isLoggedIn (String)
	profileModel.isRecognized (String)
	profileModel.isGuest (String)
	profileModel.priceLevel (String)
	profileModel.subsidiary (String)
	profileModel.language (String)
	profileModel.currency (Object)
	profileModel.currency.internalid (String)
	profileModel.currency.symbol (String)
	profileModel.currency.currencyname (String)
	profileModel.currency.code (String)
	profileModel.currency.precision (Number)
	showLanguages (Boolean)
	showCurrencies (Boolean)
	showLanguagesOrCurrencies (Boolean)
	showLanguagesAndCurrencies (Boolean)
	isHomeTouchpoint (Boolean)
	cartTouchPoint (String)

----}}
