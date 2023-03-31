{{#if headerImageURL}}
  <div class="sc-blog-component-header-image">
    <div class="sc-blog-component-header-image-container"
         style="background-image:url('{{resizeImage headerImageURL headerImageResizeName}}')">
      <span role="img"
        {{#if headerImageAlt }} alt="{{ headerImageAlt }}" aria-label="{{ headerImageAlt }}"
        {{else}} alt="Post Image" aria-label="Post Image" {{/if}}></span>
    </div>

    <div class="sc-blog-component-header-image-clear-box"></div>
  </div>
{{/if}}
