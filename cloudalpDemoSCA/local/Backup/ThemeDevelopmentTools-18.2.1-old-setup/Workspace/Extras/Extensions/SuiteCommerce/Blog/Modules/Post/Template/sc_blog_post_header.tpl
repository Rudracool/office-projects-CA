<div class="sc-blog-component-header" role="region" aria-label="Blog Post Header">
  <div class="sc-blog-component-header-category">
    <h5 data-view="Category.View"></h5>
  </div>
  <div class="sc-blog-component-header-title">
    <h2>{{header}}</h2>
  </div>
  <div class="sc-blog-component-header-subtitle">
    <h4>{{subHeading}}</h4>
  </div>
  <div class="sc-blog-component-header-creation-info">
    <div class="sc-blog-component-header-creation-info-author">
      <h6 data-view="Author.View"></h6>
    </div>
    <div class="sc-blog-component-header-creation-info-date">
      {{#if publishingDate }}
        <h6>{{publishedDateLabel}} <br/> {{publishingDate}}</h6>
      {{/if}}
    </div>
  </div>
</div>
