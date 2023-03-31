{{!-- <section class="customsearchvue-info-card">
    <span class="customsearchvue-info-card-content">
      {{message}}
    </span>
</section> --}}

<div id="app">

</div>

<section class="row" v-if="showcontent">
  <div class="input-search">
    <input type="text" value="" name="item" class="cust-item-search" placeholder="search by name">
  </div>
  {{#each item}}
    <div class="col-sm-3 item-card">
      <img src="{{resizeImage this.url 'thumbnail'}}" alt="" srcset="">
      <h6>{{this.name}}</h6>
    </div>
  {{/each}}
</section>

<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension

  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder

  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme

  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->
