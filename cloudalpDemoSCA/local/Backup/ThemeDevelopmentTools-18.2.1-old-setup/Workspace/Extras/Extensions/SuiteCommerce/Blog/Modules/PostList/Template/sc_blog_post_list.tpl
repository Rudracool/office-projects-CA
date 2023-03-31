{{#unless hideList}}
  <section class="sc-blog-post-list">
    {{#if title}}
      <h5 class="sc-blog-post-list-section-title" tabindex="0">
        {{title}}
      </h5>
    {{/if}}
    <div class="sc-blog-post-list-container" data-view="PostCards.View"></div>
  </section>
{{/unless}}
