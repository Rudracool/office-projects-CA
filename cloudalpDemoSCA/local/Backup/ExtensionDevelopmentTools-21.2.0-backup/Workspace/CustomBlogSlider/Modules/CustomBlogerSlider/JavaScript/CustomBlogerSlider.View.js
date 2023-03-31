// @module RFI.CustomBlogSlider.CustomBlogerSlider
define('RFI.CustomBlogSlider.CustomBlogerSlider.View'
,	[
	'rfi_customblogslider_customblogerslider.tpl'
	,'jquery.slick'
	,	'RFI.CustomBlogSlider.CustomBlogerSlider.Model'
	,	'Backbone'
    ]
, function (
	rfi_customblogslider_customblogerslider_tpl
	,slick
	,	CustomBlogerSliderModel
	,	Backbone
)
{
	// @class RFI.CustomBlogSlider.CustomBlogerSlider.View @extends Backbone.View
	return Backbone.View.extend({

		template: rfi_customblogslider_customblogerslider_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			this.on('afterViewRender',() =>{
				var self =this;
				self.$(".blogs-slick-slider").slick({
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
					responsive: [
						{
							breakpoint: 768,
							settings: {
								arrows:true,
								centerMode: true,
								centerPadding: '40px',
								slidesToShow: 3
							}
						},
						{
							breakpoint: 480,
							settings: {
								arrows:true,
								centerMode: true,
								centerPadding: '30px',
								slidesToShow: 1
							}
						}
					]
				});
			 });
			// this.model = new CustomBlogerSliderModel();
			// var self = this;
      //    	this.model.fetch().done(function(result) {
			// 	// self.message = result.message;
			// 	self.render();
      // 		});

		}
	,	events: {
		}

	,	bindings: {
		}

	,childViews:{

		}

		//@method getContext @return RFI.CustomBlogSlider.CustomBlogerSlider.View.Context
	,	getContext: function getContext()
		{
			var blogData = this.options.container;
			//@class RFI.CustomBlogSlider.CustomBlogerSlider.View.Context
			return {
				blogData:blogData
			} 
	
		}
	});
});
