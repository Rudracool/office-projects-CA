<div class="sc-blog-latest-posts-slide" data-post-url="{{url}}">
    <div class="sc-blog-latest-posts-slide-wrapper" data-action="navigate-to-blog">
      {{#if showThumbnailContainer}}
        <div class="sc-blog-latest-posts-slide-wrapper-thumbnail {{#unless showThumbnail }}non-thumbnail{{/unless}}"
          {{#if showThumbnail }}
             style="background-image: url('{{resizeImage imageUrl imageResizeId}}')"
          {{/if}}>
          <span role="img"
            {{#if thumbnailAlt}} alt="{{thumbnailAlt}}" aria-label="{{ thumbnailAlt }}"
            {{else}} alt="Post Image" aria-label="Post Image" {{/if}}></span>
        </div>
      {{/if}}
      <div class="sc-blog-latest-posts-slide-wrapper-content{{#unless showThumbnail }} non-thumbnail{{/unless}}">
        <div class="sc-blog-latest-posts-slide-wrapper-content-category">
          <a href="{{categoryURL}}">{{category}}</a>
        </div>
        <div class="sc-blog-latest-posts-slide-wrapper-content-body{{#unless showThumbnail }} non-thumbnail{{/unless}}">
          <div class="sc-blog-latest-posts-slide-wrapper-content-body-title">
            <h4>{{header}}</h4>
          </div>
          <div class="sc-blog-latest-posts-slide-wrapper-content-body-excerpt">
            <p>{{{excerpt}}}</p>
          </div>
        </div>
        <div class="sc-blog-latest-posts-slide-wrapper-content-read-more-action">
          <a href="{{url}}">{{readMoreLabel}}</a>
        </div>
      </div>
    </div>
  </div>
</div>

