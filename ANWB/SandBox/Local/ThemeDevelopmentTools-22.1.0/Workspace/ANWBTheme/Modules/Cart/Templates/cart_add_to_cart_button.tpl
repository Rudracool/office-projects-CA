{{#if isCurrentItemPurchasable}}
	{{#if showaddtocartbtn}}
		<div class="cart-add-to-cart-button-container">
			<div class="cart-add-to-cart-button">
				<button type="submit" data-type="add-to-cart" data-action="sticky" class="cart-add-to-cart-button-button">
					{{#if isUpdate}}{{translate 'Update'}}{{else}}{{translate 'Add to Cart'}}{{/if}}
				</button/>
			</div>
		</div>
	{{/if}}
{{/if}}


{{!-- 
	Customized on cart button if the type of iteem is gift certificate then add to cart button is hide

	showaddtocartbtn(Boolean)

 --}}

{{!----
Use the following context variables when customizing this template: 
	
	isCurrentItemPurchasable (Boolean)
	isUpdate (Boolean)

----}}
