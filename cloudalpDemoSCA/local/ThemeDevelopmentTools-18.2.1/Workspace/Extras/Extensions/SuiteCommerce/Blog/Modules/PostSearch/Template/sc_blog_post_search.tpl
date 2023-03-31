<div class="sc-blog-post-search" aria-label="Search form">
  <div class="sc-blog-post-search-title">
    <h6>{{searchLabel}}</h6>
  </div>
  <div class="sc-blog-post-search-form">
    <label aria-label="Search input">
      <input type="text" class="sc-blog-post-search-form-input"
             data-action="search-for-phrase" placeholder="{{searchHint}}"
             value="{{defaultText}}" aria-label="Search input, press Enter to Search"/>
    </label>
    <button class="sc-blog-post-search-form-close-button" data-action="close-search">{{closeButtonLabel}}</button>
  </div>
  <div class="sc-blog-post-search-results" data-component="mobile-results" data-view="SearchResults.View"></div>
  <div class="sc-blog-post-search-suggestions" data-component="mobile-suggestions-results" data-view="Suggestions.View"></div>
  <div class="sc-blog-post-search-footer">
    <div class="sc-blog-post-search-footer-pagination" data-view="Pagination.View"></div>
    <div class="sc-blog-post-search-footer-back-to-top-link hide">
      <a href="#" data-action="scroll-to-top">{{backToTopLabel}}</a>
    </div>
  </div>
</div>

