{{!-- Edited for Threads Theme--}}

<section class="facets-browse-category-heading-list-header {{#if hasBanner}}facets-browse-category-heading-list-header-with-image{{/if}} row">

	{{!-- {{#if thumbnail}} --}}
		<div class="facets-browse-category-heading-main-image-cust col-sm-2">
			<img class="facets-browse-category-heading-img" src="{{resizeImage thumbnail 'sc_blog_preview'}}" alt="{{pageheading}}" />
		</div>
	{{!-- {{/if}} --}}
	<div class="facets-browse-category-heading col-sm-10">

	<div class="facets-browse-category-heading-cust">
		<h2>{{pageheading}}</h3>
	</div>

		{{#if showDescription}}
    <div class="facets-browse-category-heading-main-description-cust">
        <p>{{{description}}}</p>
    </div>
    {{/if}}


	</div>
  
</section>




{{!----
Use the following context variables when customizing this template:

	name (String)
	banner (String)
	description (String)
	pageheading (String)
	hasBanner (Boolean)
	showDescription (Boolean)

----}}
