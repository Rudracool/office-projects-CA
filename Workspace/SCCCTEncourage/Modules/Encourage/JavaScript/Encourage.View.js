define('Example.SCCCTEncourage.Encourage.View'
, [
    'CustomContentType.Base.View'
  , 'example_sccctencourage_encourage.tpl',
  'jQuery',
  'jquery.slick',
  "underscore",
  ]
, function
  (
    CustomContentTypeBaseView
  , encourage_tpl,
  jQuery,
  slick,
  underscore
  )
{
  'use strict';

  return CustomContentTypeBaseView.extend({
    template: encourage_tpl

  , events: {
      'click [data-banner="encourage"]': 'setOptions',
      'click [data-action="test"]': 'sliderfun',
    },
    initialize: function (options) {
      if (options) {
        this.container = options.container;
      }

      this._initialize();
      var self = this;

  // jQuery(document).on('ready', function () {
      $(document).ready(function(){
        var $slider = $('.bannerhead');
        console.log("slider new ", $slider)
        console.log("onready slider ", $slider)

                  $slider.slick({
                    rows:1,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    dots:true
                  });
      })


    },


 install: function install (settings, context_data)
    {
      // this.pdp = this.application.getComponent('PDP');
      this._install(settings, context_data);
       return  jQuery.Deferred().resolve();
    } 

  // , setOptions: function setOptions()
  //   {
  //     this.pdp.setOption(this.settings.custrecord_cctenc_col_key, this.settings.custrecord_cctenc_col_val);
  //     this.pdp.setQuantity(parseInt(this.settings.custrecord_cctenc_quantity));
  //   }

  , contextDataRequest: ['item']

  , getContext: function getContext ()
    {
      console.log("this.settings New" , this.settings)
      return {
        banner: 'img/' + this.settings.custrecord_cctenc_banner
      , alt_text: this.settings.custrecord_cctenc_alt,
      data :  this.settings
      }
    }
  });
});