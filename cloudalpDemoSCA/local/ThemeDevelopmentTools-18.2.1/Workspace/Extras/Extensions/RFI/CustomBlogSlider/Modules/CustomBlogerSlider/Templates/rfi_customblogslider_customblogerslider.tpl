
<div class='blogs-slick-slider'>
  {{#each blogData}}
  <div class="custom-blogs-slides">
    <div class="blogs-imgs">
      <img class="img-fluid" src="{{img}}" alt="">
    </div>
    <div class="blogs-content">
      <div class="blogs-content-bg">
        <p class="blogs-text">
          {{text}}
        </p>
        <div class="blog-redirect">
          <a href="{{url}}" class="blogs-page-link">Read More</a>
        </div>
      </div>
    </div>
  </div>

{{/each}}
</div>

{{!-- <div class="custom-blogs-slides">
    <div class="blogs-imgs">
      <img src="https://i.imgur.com/e61hFPI.jpg" alt="">
    </div>
    <div class="blogs-content">
      <div class="blogs-content-bg">
        <p class="blogs-text">
          Australia's first range of certified flame retardant workwear has unveiled its new brand direction, with a
          nod...
        </p>
        <div class="blog-redirect">
          <a href="" class="blogs-page-link">Read More</a>
        </div>
      </div>
    </div>
  </div> --}}
<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->