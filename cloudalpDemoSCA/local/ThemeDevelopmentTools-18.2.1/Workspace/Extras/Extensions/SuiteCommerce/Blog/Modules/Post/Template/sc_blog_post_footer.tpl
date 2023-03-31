<div class="sc-blog-component-footer" role="region" aria-label="Post Blog footer" tabindex="-1">
  {{#if showTags }}
    <div class="sc-blog-component-footer-tags-container">
      {{#each tags}}
        <h6 class="sc-blog-component-footer-tags-container-tag">
          <a href="{{../tagURL}}{{this}}">#{{this}}</a>
        </h6>
      {{/each}}
    </div>
  {{/if}}
  <div class="sc-blog-component-footer-category">
    <h6 data-view="Category.View"></h6>
  </div>
</div>
