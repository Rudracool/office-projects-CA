/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Home.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>

import * as _ from 'underscore';
import * as home_tpl from 'home.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../SCA/JavaScript/Configuration';

import Tracker = require('../../../Commons/Tracker/JavaScript/Tracker');

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');

// @module Home.View @extends Backbone.View

const HomeView: any = BackboneView.extend({
    template: home_tpl,

    title: Utils.translate('Welcome to the store'),

    page_header: Utils.translate('Welcome to the store'),

    attributes: {
        id: 'home-page',
        class: 'home-page'
    },

    events: {
        'click [data-action=slide-carousel]': 'carouselSlide'
    },

    // initSlider: function initSlider() {
    //     Utils.initBxSlider(this.$('[data-slider]'), {
    //         // auto: true,
    //         nextText: '<a class="home-gallery-next-icon"></a>',
    //         prevText: '<a class="home-gallery-prev-icon"></a>',
            
    //     });
    // },
    initSlider: function initSlider() {
        Utils.initBxSlider(this.$('[data-slider]'), {
            nextText: '<a class="home-gallery-next-icon"></a>',
           prevText: '<a class="home-gallery-prev-icon"></a>',
            auto: true,
            controls:false,
        
        });
    },



    initialize: function() {
      
        this.windowWidth = jQuery(window).width();
        this.options.application.getLayout().on('afterAppendView', this.initSlider, this);

        this.options.application.getLayout().once('afterAppendView', ():void => {
                Tracker.getInstance().trackHomePageview('/' + Backbone.history.fragment);
            },
            this
            
        );
        // window.onload = function() {
        const windowResizeHandler = _.throttle(function() {
            var $window = $(window);
            var $animation_elements = $('.animation-element');
            var $right_left=$('.right');
            var $down_top=$('.down');
            
                
           
            function check_if_in_view() {
                var window_top_position = $window.scrollTop();
                var window_height = $window.height();
        
        var window_bottom_position = (window_top_position + window_height);
       
        $.each($animation_elements, function() {
          var $element = $(this);
          var element_height = $element.outerHeight();
          var element_top_position = $element.offset().top;
          var element_bottom_position = (element_top_position + element_height);
       
          //check to see if this current container is within viewport
          if ((element_bottom_position >= window_top_position) &&
              (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
            // console.log("hello2");
            
            
            
          } else {
            $element.removeClass('in-view');
        //    console.log("hello");
           
            
        }
    });
    
    
       $.each($right_left, function() {
          var $element = $(this);
          var element_height = $element.outerHeight();
          var element_top_position = $element.offset().top;
          var element_bottom_position = (element_top_position + element_height);
       
          //check to see if this current container is within viewport
          if ((element_bottom_position >= window_top_position) &&
              (element_top_position <= window_bottom_position)) {
            $element.addClass('view');
            // console.log("hello2");
            
            
            
          } else {
            $element.removeClass('view');
        //    console.log("hello");
           
            
        }
    });
    
    $.each($down_top, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
     
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('in');
        //   console.log("hello2");
          
          
          
        } else {
          $element.removeClass('in');
        //  console.log("hello");
         
          
      }
    });
    
            }
            
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
           
        
            if (
                Utils.getDeviceType(this.windowWidth) ===
                Utils.getDeviceType(jQuery(window).width())
            ) {
                return;
            }
            this.showContent();

            Utils.resetViewportWidth();

            this.windowWidth = jQuery(window).width();
        }, 1000);

        this._windowResizeHandler = _.bind(windowResizeHandler, this);

        jQuery(window).on('resize', this._windowResizeHandler);
         
        //this.check_if_in_view;
    },
    // check_if_in_view: function() {
    //     var $window = $(window);
    //     var window_height = $window.height();
    //     var window_top_position = $window.scrollTop();
    //     var $animation_elements = $('.animation-element');
        
    //     var window_bottom_position = (window_top_position + window_height);
       
    //     $.each($animation_elements, function() {
    //       var $element = $(this);
    //       var element_height = $element.outerHeight();
    //       var element_top_position = $element.offset().top;
    //       var element_bottom_position = (element_top_position + element_height);
       
    //       //check to see if this current container is within viewport
    //       if ((element_bottom_position >= window_top_position) &&
    //           (element_top_position <= window_bottom_position)) {
    //         $element.addClass('in-view');
    //         console.log("hello2");
            
            
            
    //       } else {
    //         $element.removeClass('in-view');
    //        console.log("hello");
           
            
    //     }
    // });
    // },

    destroy: function() {
        BackboneView.prototype.destroy.apply(this, arguments);
        jQuery(window).off('resize', this._windowResizeHandler);
        this.options.application.getLayout().off('afterAppendView', this.initSlider, this);
    },
    

    // @method getContext @return Home.View.Context
    getContext: function() {
    

// function check_if_in_view() {
 
// }

// $window.on('scroll resize', check_if_in_view);
// $window.trigger('scroll');
        const carouselImages = _.map(Configuration.get('home.carouselImages', []), function(
            url: string
        ) {
            return Utils.getAbsoluteUrlOfNonManagedResources(url);
        });

        const bottomBannerImages = _.map(Configuration.get('home.bottomBannerImages', []), function(
            url: string
        ) {
            return Utils.getAbsoluteUrlOfNonManagedResources(url);
        });
        

        return {
            // @class Home.View.Context
            // @property {String} imageResizeId
            imageHomeSize: Utils.getViewportWidth() < 768 ? 'homeslider' : 'main',
            // @property {String} imageHomeSizeBottom
            imageHomeSizeBottom: Utils.getViewportWidth() < 768 ? 'homecell' : 'main',
            // @property {Array} carouselImages
            carouselImages: carouselImages,
            // @property {Array} bottomBannerImages
            bottomBannerImages: bottomBannerImages
            // @class Home.View
        };
    }
    
    
});


export = HomeView;
function check_if_in_view() {
    throw new Error('Function not implemented.');
}

