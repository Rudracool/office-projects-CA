{{#if render}}
  <div class="sc-blog-suggestions">
    <h4 class="sc-blog-suggestions-title">{{{title}}}</h4>
    {{#if showSuggestions}}
      <h4 class="sc-blog-suggestions-message">{{{suggestionMessage}}}</h4>
      <div class="sc-blog-suggestions-list" data-view="PostList.View"></div>
    {{/if}}
  </div>
{{/if}}



