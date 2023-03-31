
{{#if isTrackNumber}}


{{else}}

    <div class="track-package">
        <div class="TrackPackage-text">
            <span class="order-history-packages-delivery-label">
            {{translate 'Track Package: '}}

            </span>
        </div>
        <a href="{{trackURL}}" target="_blank" class="custom-css-button">{{{trimHtml trackURL 25}}}</a>
    </div>
{{/if}}