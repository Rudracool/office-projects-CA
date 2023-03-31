
<h2 class="preferreddelivery-title">{{translate 'Delivery comments'}}</h2>
<div id="preferreddelivery-container" class="preferreddelivery-container">
    {{#if isReview}}
        {{#if model.options.custbody_preferred_date}}
            <p>{{model.options.custbody_preferred_date}}</p>
        {{else}}
            <p>{{translate 'No comments'}}</p>
        {{/if}}
    {{else}}
        <textarea class="preferreddelivery-input" name="custbody_preferred_date" placeholder="enter delivery comments">{{model.options.custbody_preferred_date}}</textarea>
    {{/if}}
</div>