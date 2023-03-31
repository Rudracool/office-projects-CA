<section class="promotion-items-list">
	<header class="promotion-items-list-header">
    <h2>{{pageHeader}}</h2>
    
	</header>
  <div data-view="ListHeader"></div>
  {{#if promotionalItemsGreaterThan0}}
    <div class="promotional-item-banner-view alert" role="alert">
      <div>
        Discount will be applied only when you add an item to the shopping cart.
      </div>
      <button class="promotional-item-banner-view-close-button" data-action="close-message" type="button" data-dismiss="alert">&times;</button>	
    </div>
    <!-- <div class="promo-filter-search"><input type="text" name= "search" style="width:20%;float:right" placeholder="Search Item"/><i></i><div name="filter_by_promo_reset">×</div><button name="promo-item">click</button></div> --->
    
    <div class="promotion-items-container">
      {{#each promoItems}}
          <div>
            <a data-hashtag="/product/{{internalid}}" data-touchpoint="home" target = "_blank" class="promotion-banners">
              <img class="promotion-item-image" src="{{_thumbnail.url}}"/>
              <!--- <img class="promotion-item-image" src = "/core/media/media.nl?id=36079151&c=4220479&h=nTHYMV_ZriBnOHlBcj00mWrxk56hDQza7hno_ziV07CuAqy8"> --->
              <h3 class="promotion-item-name">{{#ifEquals displayname ''}}{{itemid}}{{else}}{{displayname}}{{/ifEquals}}</h3>
              <p class="price">{{translate 'Original Price:'}}{{onlinecustomerprice_detail.onlinecustomerprice_formatted}}</p>
              <p class="price">{{translate 'Discounted Price:'}}{{discountedPrice.price_formatted}}</p>
            </a>
              
          </div> 
      {{/each}}
    </div>
    
	{{else}}
	  <div class="promotion-items-list-empty-section">
      <h5 class="promotion-items-zero">{{translate 'You don\'t have any Promotions now'}}</h5>
    </div>
    
	{{/if}}
  {{#if showPagination}}
      <div class="facets-facet-browse-pagination" data-view="GlobalViews.Pagination"></div>
  {{/if}}
  

</section>
<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->