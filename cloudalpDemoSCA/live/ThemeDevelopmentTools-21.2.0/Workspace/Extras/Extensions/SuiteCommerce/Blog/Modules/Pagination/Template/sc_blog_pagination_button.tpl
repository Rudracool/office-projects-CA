{{#if isActive}}
  <li class="pagination-active-page">{{#unless hideDivider}}<span class="pagination-button-divider"></span>{{/unless}} {{label}} </li>
{{else}}
  {{#if isEnabledEventsHandling}}
    <li>{{#unless hideDivider}}<span class="pagination-button-divider"></span>{{/unless}}<a href="#" data-action="trigger-pagination" data-page="{{pageNumber}}"> {{label}} </a></li>
  {{else}}
    <li> {{#unless hideDivider}}<span class="pagination-button-divider"></span>{{/unless}} <a href="{{url}}"> {{label}} </a></li>
  {{/if}}
{{/if}}
