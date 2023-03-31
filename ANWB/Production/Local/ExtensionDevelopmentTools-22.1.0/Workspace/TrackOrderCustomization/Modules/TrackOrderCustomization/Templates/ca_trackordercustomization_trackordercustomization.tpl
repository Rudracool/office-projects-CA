{{#if isTrackNumber}}
  <span class="order-history-list-tracking-number-not-available-label">
    {{translate "Tracking Number:"}}
  </span>
  <span class="order-history-list-tracking-number-not-available">
    {{translate "N/A"}}
  </span>
{{else}}

  <span class="order-history-list-tracking-number-available">
    
    <a class="{{className}}" target="_blank" href="{{trackURL}}">{{{trimHtml trackURL 25}}}</a>
  </span>

{{/if}}
