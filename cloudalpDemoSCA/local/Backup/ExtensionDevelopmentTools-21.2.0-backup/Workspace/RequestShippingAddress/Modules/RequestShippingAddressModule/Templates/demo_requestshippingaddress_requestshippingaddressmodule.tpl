		{{#if hidechkout}}
    <a id="btn-proceed-checkout" class="cart-summary-button-proceed-checkout rqstshpaddr"  data-toggle="modal" data-target="#shippingAddressModal">
			{{translate 'Request to Create a shipping address'}}
		</a>
    <div class="create-status"></div>

    {{else}}

    	<a id="btn-proceed-checkout" class="cart-summary-button-proceed-checkout rqstshpaddr"  data-toggle="modal" data-target="#shippingAddressModal">
					{{translate 'Request to change shipping address'}}
				</a>
         <div class="change-status"></div>
        {{/if}}



        <div class="modal fade" id="shippingAddressModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
           <h5 class="modal-title" id="exampleModalLabel"> Shipping Details </h5>
        		<button type="button" class="global-views-modal-content-header-close" data-dismiss="modal" aria-hidden="true">
				    &times;
			      </button>
      </div>
      <div class="modal-body">
        <label for="email">Email Address</label>
        <input type="email"  id="mail" name="email" value="{{email}}" disabled>
        <label for="address"> Shipping Address </label>
        <textarea style="width:100%" id="address" name="address" ></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-action="requestchange"> Submit </button>
      </div>
    </div>
  </div>
</div>


<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->