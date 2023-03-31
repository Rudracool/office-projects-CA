// @module Cloudalp.SlideShowPro.SlideShowModule
define('Cloudalp.SlideShowPro.SlideShowModule.View'
,	[
		'CustomContentType.Base.View'
	,	'cloudalp_slideshowpro_slideshowmodule.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		CustomContentTypeBaseView
	,	cloudalp_slideshowpro_slideshowmodule_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class Cloudalp.SlideShowPro.SlideShowModule.View @extends CustomContentTypeBaseView
	return CustomContentTypeBaseView.extend({

		template: cloudalp_slideshowpro_slideshowmodule_tpl

	,	IMG_OVERLAY_MAP: {
			1: '',
			2: 'content-light',
			3: 'content-dark'
		}

	,	TEXT_ALIGN_MAP: {
			1: 'content-box-left',
			2: 'content-box-right',
			3: 'content-box-center'
		}

	,	TEXT_COLOR_MAP: {
			1: 'content-color-text-dark',
			2: 'content-color-text-light'
		}

	,	BTN_STYLE_MAP: {
			1: 'button-style-one',
			2: 'button-style-two'
		}
			
	,	initialize: function (options) {

		  if (options)
		  {
			this.container = options.container;
		  }

		  this._initialize();
		  
		  var self= this;
		  this.on('afterViewRender',function(){
			  
			  var sliderEl = self.$('.slideshow-slider');
			  
			  if(sliderEl.length > 0 && !_.isUndefined(self.sliderSettings)){
				  
				  sliderEl.ready(function(){
					  Utils.initBxSlider(sliderEl,self.sliderSettings);
					  
				  });
			  }
				
		  });
		}
	,	install: function (settings, context_data)
		{
			this._install(settings, context_data);

			// call some ajax here
			return jQuery.Deferred().resolve();
		}

		// The list of contexts that you may need to run the CCT
	,	contextDataRequest: ['item']

		// By default when you drop a CCT in the SMT admin, it will run the 'validateContextDataRequest' method to check that you have
		// all the requested contexts and it will fail if some context is missing.
	,	validateContextDataRequest: function validateContextDataRequest()
		{
			return true;
		}
		
	,	getContext: function getContext()
		{
			//console.log(this.settings);
			var result = this.settings;
			var slides = [];
			
			var self = this;
			for (var key in result) {
				
				
				
				if(key.indexOf('custrecord_slider_img') != -1){
					
					var index = key.split('custrecord_slider_img')[1];
					var value = result[key];
					
					if(!isNaN(index) && value != ""){
						
						
						var obj = {};
						
						var btn_style = (result['custrecord_slider_btn_style' + index] == "")? 1 : result['custrecord_slider_btn_style' + index];
						var overlay = (result['custrecord_slider_img_overlay' + index] == "")? 1 :result['custrecord_slider_img_overlay' + index];
						var text_align = (result['custrecord_slider_text_align' + index] == "")? 1 : result['custrecord_slider_text_align' + index];
						var text_color = (result['custrecord_slider_text_color' + index] == "")? 2 : result['custrecord_slider_text_color' + index];
						obj.id = index;
						obj.imageURL = result['custrecord_slider_img'+ index +'_url'];
						
						obj.altText = result['custrecord_slider_img_alt'+ index];
						
						obj.text = result['custrecord_slider_text'+ index];
						
						obj.btnText = result['custrecord_slider_btn_text'+ index];
						obj.btnLink = result['custrecord_slider_btn_link'+ index ];
						
						obj.imgOverlayClass = self.IMG_OVERLAY_MAP[overlay];
						obj.opacityClass = !!self.IMG_OVERLAY_MAP[overlay] ? 'image-opacity' : '';
						
						
						obj.textAlignClass = self.TEXT_ALIGN_MAP[text_align];
						
						obj.textColorClass = self.TEXT_COLOR_MAP[text_color];
						
						obj.btnStyleClass = self.BTN_STYLE_MAP[btn_style];
						
						slides.push(obj);
					}
				}
				
				
			}
			slides.sort(function(a, b){
				return a.id-b.id;
			});
			//console.log(slides);
			
			var sliderSettings = {
				
				
				auto: (result['custrecord_slider_automatic'] == "T")? true : false,
				
				pager: (result['custrecord_slider_pager'] == "T")? true : false,
				controls: (result['custrecord_slider_controls'] == "T")? true : false,
				
				forceStart: true,
				touchEnabled: true,
				preloadImages: "all",
				nextText: '<a class="item-relations-related-carousel-next"><span class="control-text">next</span> <i class="carousel-next-arrow"></i></a>',
				prevText: '<a class="item-relations-related-carousel-prev"><i class="carousel-prev-arrow"></i> <span class="control-text">prev</span></a>'
			};
			
			var slideWidth = result['custrecord_slider_width'],
				duration = result['custrecord_slider_duration'],
				mode = result['custrecord_slider_mode'],
				minSlides = result['custrecord_slider_min_slides'],
				maxSlides = result['custrecord_slider_max_slides'],
				animate = (result['custrecord_slider_text_animate'] == "T")? true : false;
			
			if(slideWidth)
				sliderSettings.slideWidth = slideWidth;
			if(duration){
				
				if(animate){
					if(parseInt(duration) > 1800)
						sliderSettings.speed = duration;
				}
				else
					sliderSettings.speed = duration;
			}
			if(mode == "2")
				sliderSettings.mode = 'vertical';
			if(minSlides)
				sliderSettings.minSlides = minSlides;
			if(maxSlides)
				sliderSettings.maxSlides = maxSlides;
			
			
			
			if(sliderSettings){
				this.sliderSettings = sliderSettings;
			}
			else{
				this.sliderSettings = SC.CONFIGURATION.bxSliderDefaults;
				
			}
			
			
			return {
				slides: slides
			,	sectionHeight: result['custrecord_slider_height']
			,	animate: animate
			};
		}
	});
});