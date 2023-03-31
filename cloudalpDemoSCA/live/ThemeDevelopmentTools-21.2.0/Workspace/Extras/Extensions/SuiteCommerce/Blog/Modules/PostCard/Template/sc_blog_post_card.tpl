<div class="sc-blog-post-card-{{layout}}" data-post-url="{{url}}">
  <div class="sc-blog-post-card-{{layout}}-wrapper" data-action="navigate-to-blog">
    {{#if showThumbnailContainer}}
      <div class="sc-blog-post-card-{{layout}}-wrapper-thumbnail {{#unless showThumbnail }}non-thumbnail{{/unless}}"
        {{#if showThumbnail }}
           style="background-image: url('{{resizeImage thumbnailUrl thumbnailResizeId}}')"
        {{/if}}>
        <span role="img"
          {{#if thumbnailAlt }} alt="{{ thumbnailAlt }}" aria-label="{{ thumbnailAlt }}"
          {{else}} alt="Post Image" aria-label="Post Image" {{/if}}></span>
      </div>
    {{/if}}
    <div class="sc-blog-post-card-{{layout}}-wrapper-content {{#unless showThumbnail }}non-thumbnail{{/unless}}"
         aria-label="Post general information" tabindex="0">
      <div class="sc-blog-post-card-{{layout}}-wrapper-content-category">
        <a href="{{categoryURL}}" name="Post category" tabindex="0">{{category}}</a>
      </div>
      <div class="sc-blog-post-card-{{layout}}-wrapper-content-body">
        <div class="sc-blog-post-card-{{layout}}-wrapper-content-body-title">
          <h4>{{{header}}}</h4>
        </div>
        <div class="sc-blog-post-card-{{layout}}-wrapper-content-body-excerpt">
          <p>{{{excerpt}}}</p>
        </div>
      </div>
      <div class="sc-blog-post-card-{{layout}}-wrapper-content-read-more-action">
        <a href="{{url}}" aria-label="Read more about post" tabindex="0">{{readMoreLabel}}</a>
      </div>
    </div>
  </div>
</div>
