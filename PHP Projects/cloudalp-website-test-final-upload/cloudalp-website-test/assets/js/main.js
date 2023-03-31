"use strict";
//Wrapping all JavaScript code into a IIFE function for prevent global variables creation
(function($) {

    var $body = $('body');
    var $window = $(window);


	
    

    

    
    //photoSwipe gallery plugin
    function initPhotoSwipe() {
        if (typeof PhotoSwipe !== 'undefined') {

            //adding prettyPhoto for backward compatibility. Deprecated.
            //will leave only .photoswipe-link later
            var gallerySelectors = '.photoswipe-link, a[data-gal^="prettyPhoto"], [data-thumb] a';
            var $galleryLinks = $(gallerySelectors);
            if ($galleryLinks.length) {

                //adding photoswipe gallery markup
                if (!($('.pswp').length)) {
                    $body.append('<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><a class="pswp__button pswp__button--close" title="Close (Esc)"></a><a class="pswp__button pswp__button--share" title="Share"></a><a class="pswp__button pswp__button--fs" title="Toggle fullscreen"></a><a class="pswp__button pswp__button--zoom" title="Zoom in/out"></a><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div> </div><a class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></a><a class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></a><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>');
                    //if function already was called - return (all listeners was setted and .pswp gallery container was added)
                } else {
                    return;
                }
                //adding prettyPhoto for backward compatibility. Deprecated.
                $('body').on('click', gallerySelectors, function(e) {
                    e.preventDefault();

                    var $link = $(this);
                    var $linksParentContainer = $link.closest('.photoswipe-container, .isotope-wrapper, .owl-carousel, .flickr_ul, .images');
                    var $links = $linksParentContainer.find(gallerySelectors);

                    //if no container only adding this link
                    if (!$links.length) {
                        $links.push($link);
                    }
                    var items = [];

                    var options = {
                        bgOpacity: 0.7,
                        showHideOpacity: true,
                        history: false,
                        shareEl: false,
                        index: 0
                    };
                    var gallery = $('.pswp')[0];
                    //building items array
                    var counter = 0;
                    var clonedClick = false;
                    var clonedRealIndex = 0;
                    $links.each(function(i) {
                        var $this = $(this);
                        //if cloned element (owl or flexslider thumbs) - continue
                        if ($this.closest('.clone, .cloned').length) {
                            if (($link[0] === $this[0])) {
                                clonedClick = true;
                                clonedRealIndex = parseInt($this.data('index'), 10);
                                options.index = clonedRealIndex;
                            }
                            return;
                        }
                        var item = {};
                        //start slide from clicked element
                        if (($link[0] === $this[0])) {
                            options.index = counter;
                        }

                        //video or image
                        if ($this.data('iframe')) {
                            var autoplay = ($links.length > 1) ? '' : '&autoplay=1';
                            item.html = '<div class="embed-responsive embed-responsive-16by9">';
                            //for wordpress - iframe tag is escaped
                            if ($this.data('iframe').indexOf('src=') !== -1) {
                                item.html += $this.data('iframe').replace(/&amp/g, '&').replace(/$lt;/g, '<').replace(/&gt;/g, '>').replace(/$quot;/g, '"');

                                //for html - building iframe manually
                            } else {
                                //autoplay only if 1 iframe in gallery
                                item.html += '<iframe class="embed-responsive-item" src="' + $(this).data('iframe') + '?rel=0' + autoplay + '&enablejsapi=1&api=1"></iframe>';
                            }

                            item.html += '</div>';
                        } else {
                            item.src = $this.attr('href');
                            //default values
                            var width = 1170;
                            var height = 780;
                            //template data on A element
                            var data = $this.data();
                            //image data in Woo
                            var dataImage = $this.find('img').first().data();
                            if (data.width) {
                                width = data.width;
                            }
                            if (data.height) {
                                height = data.height;
                            }
                            if (typeof dataImage !== 'undefined') {
                                if (dataImage.large_image_width) {
                                    width = dataImage.large_image_width;
                                }
                                if (dataImage.large_image_height) {
                                    height = dataImage.large_image_height;
                                }
                            }
                            item.w = width;
                            item.h = height;
                        }
                        items.push(item);
                        counter++;
                    });

                    var pswpGallery = new PhotoSwipe(gallery, PhotoSwipeUI_Default, items, options);
                    pswpGallery.init();

                    //pausing video on close and on slide change
                    pswpGallery.listen('afterChange', function() {
                        $(pswpGallery.container).find('iframe').each(function() {
                            //"method":"pause" - form Vimeo, other - for YouTube
                            $(this)[0].contentWindow.postMessage('{"method":"pause","event":"command","func":"pauseVideo","args":""}', '*')
                        });
                    });
                    pswpGallery.listen('close', function() {
                        $(pswpGallery.container).find('iframe').each(function() {
                            //"method":"pause" - form Vimeo, other - for YouTube
                            $(this)[0].contentWindow.postMessage('{"method":"pause","event":"command","func":"pauseVideo","args":""}', '*')
                        });
                    });

                });
            }

        }
    }

    

    //function that initiating template plugins on window.load event
    function documentReadyInit() {
        ////////////
        //mainmenu//
        ////////////
        
        
        if ($().superfish) {
            $('ul.sf-menu').superfish({
                popUpSelector: 'ul:not(.mega-menu ul), .mega-menu ',
                delay: 700,
                animation: {
                    opacity: 'show'
                },
                animationOut: {
                    opacity: 'hide'
					
                    
                },
                speed: 100,
                speedOut: 200,
                disableHI: false,
                cssArrows: true,
                autoArrows: true,
                onInit: function() {
                    var $thisMenu = $(this);
                    $thisMenu.find('.sf-with-ul').after('<span class="sf-menu-item-mobile-toggler"/>');
                    $thisMenu.find('.sf-menu-item-mobile-toggler').on('click', function(e) {
                        var $parentLi = $(this).parent();
                        if ($parentLi.hasClass('sfHover')) {
                            $parentLi.superfish('hide');
                        } else {
                            $parentLi.superfish('show');
                        }
                    });
                    //for wp - add .active on li
                    $thisMenu.find('.current-menu-parent, .current-menu-item').addClass('active');

                   
                }

            });
            $('ul.sf-menu-side').superfish({
                popUpSelector: 'ul:not(.mega-menu ul), .mega-menu ',
                delay: 500,
                animation: {
                    opacity: 'show',
                    height: 100 + '%'
                },
                animationOut: {
                    opacity: 'hide',
                    height: 0
                },
                speed: 100,
                speedOut: 300,
                disableHI: false,
                cssArrows: true,
                autoArrows: true
            });
        }

          

        if ($().superfish) {
            $('ul.sf-menu-nav-content').superfish({
                popUpSelector: 'ul:not(.mega-menu ul), .mega-menu ',
                delay: 700,
                animation: {
                    opacity: 'show'
                },
                animationOut: {
                    opacity: 'hide'
					
                    
                },
                speed: 100,
                speedOut: 200,
                disableHI: false,
                cssArrows: true,
                autoArrows: true,
                onInit: function() {
                    var $thisMenu = $(this);
                    

                    $thisMenu.find('.sf-with-ul-nav').after('<span class="sf-menu-item-mobile-toggler"/>');
                    $thisMenu.find('.sf-menu-item-mobile-toggler').on('click', function(e) {
                        var $parentLi = $(this).parent();
                        if ($parentLi.hasClass('sfHover')) {
                            $parentLi.superfish('hide');
                        } else {
                            $parentLi.superfish('show');
                        }
                    });
                    //for wp - add .active on li
                    $thisMenu.find('.current-menu-parent, .current-menu-item').addClass('active');
                }

            });
            $('ul.sf-menu-side').superfish({
                popUpSelector: 'ul:not(.mega-menu ul), .mega-menu ',
                delay: 500,
                animation: {
                    opacity: 'show',
                    height: 100 + '%'
                },
                animationOut: {
                    opacity: 'hide',
                    height: 0
                },
                speed: 100,
                speedOut: 300,
                disableHI: false,
                cssArrows: true,
                autoArrows: true
            });
        }






        $('.page_header_side_special .close-wrapper a').on('click', function() {
            $(this).closest('.page_header_side_special').removeClass('active-slide-side-header');
        });

        //toggle mobile menu
        $('.toggle_menu:not(.toggle_menu_side_special), .page_toplogo .toggle_menu').on('click', function() {
            
			$(this).toggleClass('mobile-active');

                
            $('#nav-container').toggleClass('mobile-active');
            $body.toggleClass('overflow-hidden-lg');
        });

        $('.sf-menu a').on('click', function() {
            var $this = $(this);
            //If this is a local link or item with sumbenu - not toggling menu
            if (($this.hasClass('sf-with-ul')) || !($this.attr('href').charAt(0) === '#')) {
                return;
            }
            
                
			$('.toggle_menu').toggleClass('mobile-active');
			$('#nav-container').toggleClass('mobile-active');
			
            $body.toggleClass('overflow-hidden-lg');
        });

        
        
        

        //1 and 2/3/4th level offscreen fix
        var MainWindowWidth = $window.width();
        $window.on('resize', function() {
            MainWindowWidth = $(window).width();
        });
        
        //2/3/4 levels
        $('.top-nav .sf-menu').on('mouseover', 'ul > li', function() {

            if (MainWindowWidth > 991) {
                var $this = $(this);
                // checks if third level menu exist
                var subMenuExist = $this.find('ul').length;
                if (subMenuExist > 0) {
                    var subMenuWidth = $this.find('ul, div').first().width();
                    var subMenuOffset = $this.find('ul, div').first().parent().offset().left + subMenuWidth;
                    // if sub menu is off screen, give new position
                    if ((subMenuOffset + subMenuWidth) > MainWindowWidth) {
                        var newSubMenuPosition = subMenuWidth + 0;
                        $this.find('ul, div').first().css({
                            left: -newSubMenuPosition,
                        });
                    } else {
                        $this.find('ul, div').first().css({
                            left: '100%',
                        });
                    }
                }
            }
            //1st level
        }).on('mouseover', '> li', function() {
            if (MainWindowWidth > 991) {
                var $this = $(this);
                var subMenuExist = $this.find('ul').length;
                if (subMenuExist > 0) {
                    var subMenuWidth = $this.find('ul').width();
                    var subMenuOffset = $this.find('ul').parent().offset().left;
                    // if sub menu is off screen, give new position
                    if ((subMenuOffset + subMenuWidth) > MainWindowWidth) {
                        var newSubMenuPosition = MainWindowWidth - (subMenuOffset + subMenuWidth);
                        $this.find('ul').first().css({
                            left: newSubMenuPosition,
                        });
                    }
                }
            }
        });

        ////////////////////////////////////////////////////
        //                                                //
        //             REV Slider Data                    //
        //                                                //
        ////////////////////////////////////////////////////



        /////////////////////////////////////////
        //single page localscroll and scrollspy//
        /////////////////////////////////////////
        var navHeight = $('.page_header').outerHeight(true);
        //if sidebar nav exists - binding to it. Else - to main horizontal nav
        if ($('.mainmenu_side_wrapper').length) {
            $body.scrollspy({
                target: '.mainmenu_side_wrapper',
                offset: navHeight ? navHeight : 50
            });
        } else if ($('.top-nav').length) {
            $body.scrollspy({
                target: '.top-nav',
                offset: navHeight
            })
        }
        if ($().localScroll) {
            $('.top-nav > ul, .mainmenu_side_wrapper > ul, #land,  .comments-link').localScroll({
                duration: 900,
                easing: 'easeInOutQuart',
                offset: navHeight ? -navHeight + 40 : -20 
            });
        }

        //background image teaser and sections with half image bg
        

        

        //toTop
        if ($().UItoTop) {
            $().UItoTop({
                easingType: 'easeInOutQuart'
            });
        }

        initPhotoSwipe();

        ////////////////////////////////////////
        //init Bootstrap JS components//
        ////////////////////////////////////////
        


        //bootstrap carousel
        if ($().carousel) {
            $('.carousel').carousel();
        }

        //bootstrap collapse - show first tab
        $('.panel-group').each(function() {
            $(this).find('a').first().filter('.collapsed').trigger('click');
        });
        //tooltip
        if ($().tooltip) {
            $('[data-toggle="tooltip"]').tooltip();
        }

        //comingsoon counter
        if ($().countdown) {
            var $counter = $('#comingsoon-countdown, .comingsoon-countdown');
            $counter.each(function() {
                var $this = $(this);
                //today date plus month for demo purpose
                var date = ($this.data('date') !== 'undefined') ? $this.data('date') : false;
                if (date) {
                    date = new Date(date);
                } else {
                    date = new Date();
                    date.setMonth(date.getMonth() + 1);
                }
                $this.countdown({
                    until: date
                });
            });
        }

        /////////////////////////////////////////////////
        //PHP widgets - contact form, search, MailChimp//
        /////////////////////////////////////////////////

        //contact form processing
        $('form.contact-form').on('submit', function(e) {
            e.preventDefault();
            var $form = $(this);
            $($form).find('.contact-form-respond').remove();

            //checking on empty values
            $($form).find('[aria-required="true"]').each(function(index) {
                var $thisRequired = $(this);
                if (!$thisRequired.val().length) {
                    $thisRequired
                        .addClass('invalid')
                        .on('focus', function() {
                            $thisRequired
                                .removeClass('invalid');
                        });
                }
            });
            //if one of form fields is empty - exit
            if ($form.find('[aria-required="true"]').hasClass('invalid')) {
                return;
            }

            //sending form data to PHP server if fields are not empty
            // var request = $form.serialize();
            let request = new FormData(document.querySelector("#contact-form-content"));
            jQuery.ajax({
                url: "mail.php",
                type: "POST",
                data: request,
                processData: false,
                contentType: false,
                beforeSend: function(){
                   $($form).find('[data-action="cust"]').text('Processing...');
                },
                complete:function(){
                   $($form).find('[data-action="cust"]').text('send us');
                },
                success: function (data, textStatus, jqXHR) {
                    $($form).find('[type="submit"]').attr('disabled', false).parent().append('<div class="contact-form-respond color-main mt-20">' + data + '</div>');
                    //cleaning form
                    var $formErrors = $form.find('.form-errors');
                    if (!$formErrors.length) {
                        $form[0].reset();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    //if fails 
                    $($form).find('[type="submit"]').attr('disabled', false).blur().parent().append('<div class="contact-form-respond color-main mt-20">Mail cannot be sent. You need PHP server to send mail.</div>');
                }
            });
        });

		// $('[name="user-name"]').keyup(function(){
			
		// 	if($(this).val().length >2)
		// 		$('.next-fields').show();
		// 	else
		// 		$('.next-fields').hide();
		// });
		
        
    }

    //function that initiating template plugins on window.load event
    function windowLoadInit() {
        


		new WOW().init();
		
        var DataAutoPlay=$('#section-4-owl');
        if(document.documentElement.clientWidth < 1200){
            DataAutoPlay.data('autoplay',true);
        }
   //////////////////////////////////////////////////////
   //                                                  //
   //          CUSTOM OWL CAROSOUL SETTING             //
   //                                                  //
   //////////////////////////////////////////////////////

   var OwlCarosoulCustom=$('.custom-slider-owl-carosoul');
   
   if(document.documentElement.clientWidth < 768){

       OwlCarosoulCustom.removeClass('container-fluid');
    OwlCarosoulCustom.addClass('container');

      
    }
    if(document.documentElement.clientWidth >= 768){
        OwlCarosoulCustom.addClass('container-fluid');
        OwlCarosoulCustom.removeClass('container');
    }

    ///////////////////////////////
    //                           //
    //      SLICK SLIDER         //
    //                           //
    ///////////////////////////////

    //   if(){
        
        $('#slick-slider').slick({
            dots: true,
            horizontal: true,
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
            // infinite: true,
            arrows: true,
            // autoplay:true,
            autoplaySpeed:4000, //  Slide Delay
            speed:800,
            prevArrow:'<div class="tp-leftarrow tparrows arrow-2" style=" position:absolute; top: 50%; transform: matrix(0, -1, 1, 0, -125, -112); left: 100%;"></div>' ,        
            nextArrow:'<div class="tp-rightarrow tparrows arrow-2" style="position:absolute; top: 50%; transform: matrix(0, -1, 1, 0, -125, 88); left: 100%;"></div>' 
        });
        
        $('.slick-dots li:nth-child(1)').html('<span></span>');
        $('.slick-dots li:nth-child(2)').html('<span></span>');
        
        
        $('#newSectionLogoHomePage').slick({
            //    dots:true,
            horizontal:true,
            cssEase: 'linear',
            infinite: true,
            prevArrow:'<a class="home-brand-prev-icon"></a>' ,
            nextArrow:'<a class="home-brand-next-icon"></a>', 
            arrows: true,
            autoplay:true,
            autoplaySpeed:2000, //  Slide Delay
            speed:3000,
            slidesToShow: 4,
           
            slidesToScroll: 2,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
       })
        $('.newSectionLogocustomerHomePage').slick({
            //    dots:true,
            horizontal:true,
            cssEase: 'linear',
            infinite: true,
            prevArrow:'<a class="home-brand-prev-icon"></a>' ,
            nextArrow:'<a class="home-brand-next-icon"></a>', 
            arrows: true,
            autoplay:true,
            autoplaySpeed:2000, //  Slide Delay
            speed:3000,
            lazyLoad: 'ondemand',
            slidesToShow: 4,
           
            slidesToScroll: 2,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
       })
    //   }
        ////////////////
        //owl carousel//
        ////////////////
        if ($().owlCarousel) {
            $('.owl-carousel').each(function() {
                var $carousel = $(this);
                $carousel.find('> *').each(function(i) {
                    $(this).attr('data-index', i);
                });
                var data = $carousel.data();

                var loop = data.loop ? data.loop : false,
                    margin = (data.margin || data.margin === 0) ? data.margin : 30,
                    nav = data.nav ? data.nav : false,
                    navPrev = data.navPrev ? data.navPrev : '<i class="fa fa-chevron-left">',
                    navNext = data.navNext ? data.navNext : '<i class="fa fa-chevron-right">',
                    dots = data.dots ? data.dots : false,
                    themeClass = data.themeclass ? data.themeclass : 'owl-theme',
                    center = data.center ? data.center : false,
                    items = data.items ? data.items : 4,
                    autoplay = data.autoplay ? data.autoplay : false,
                    responsiveXs = data.responsiveXs ? data.responsiveXs : 1,
                    responsiveSm = data.responsiveSm ? data.responsiveSm : 2,
                    responsiveMd = data.responsiveMd ? data.responsiveMd : 3,
                    responsiveLg = data.responsiveLg ? data.responsiveLg : 4,
                    draggable = (data.draggable === false) ? data.draggable : true,
                    syncedClass = (data.syncedClass) ? data.syncedClass : false,
                    filters = data.filters ? data.filters : false;

                if (filters) {
                    $carousel.after($carousel.clone().addClass('owl-carousel-filter-cloned'));
                    $(filters).on('click', 'a', function(e) {
                        //processing filter link
                        e.preventDefault();
                        if ($(this).hasClass('selected')) {
                            return;
                        }
                        var filterValue = $(this).attr('data-filter');
                        $(this).siblings().removeClass('selected active');
                        $(this).addClass('selected active');

                        //removing old items
                        for (var i = $carousel.find('.owl-item').length - 1; i >= 0; i--) {
                            $carousel.trigger('remove.owl.carousel', [1]);
                        };

                        //adding new items
                        var $filteredItems = $($carousel.next().find(' > ' + filterValue).clone());
                        $filteredItems.each(function() {
                            $carousel.trigger('add.owl.carousel', $(this));
                            $(this).addClass('scaleAppear');
                        });

                        $carousel.trigger('refresh.owl.carousel');

                        //reinit prettyPhoto in filtered OWL carousel
                        if ($().prettyPhoto) {
                            $carousel.find("a[data-gal^='prettyPhoto']").prettyPhoto({
                                hook: 'data-gal',
                                theme: 'facebook' /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/
                            });
                        }
                    });

                } //filters





                $carousel.owlCarousel({
                    // animateOut: 'flip',
                    // animateIn: 'flip',
                    // smartSpeed:450, 
    //                 autoHeight: false,
    // autoHeightClass: 'owl-height',
                        loop: loop,
                        margin: margin,
                        nav: nav,
                        autoplay: autoplay,
                        dots: dots,
                        themeClass: themeClass,
                        center: center,
                        navText: [navPrev, navNext],
                        mouseDrag: draggable,
                        touchDrag: draggable,
                        items: items,
                        responsive: {
                            0: {
                                items: responsiveXs
                            },
                            767: {
                                items: responsiveSm
                            },
                            992: {
                                items: responsiveMd
                            },
                            1200: {
                                items: responsiveLg
                            }
                        },
                    })
                    .addClass(themeClass);
                if (center) {
                    $carousel.addClass('owl-center');
                }

                $window.on('resize', function() {
                    $carousel.trigger('refresh.owl.carousel');
                });

                //topline two synced carousels
                if ($carousel.hasClass('owl-news-slider-items') && syncedClass) {
                    $carousel.on('changed.owl.carousel', function(e) {
                        var indexTo = loop ? e.item.index + 1 : e.item.index;
                        $(syncedClass).trigger('to.owl.carousel', [indexTo]);
                    })
                }


            });
           
        } //eof owl-carousel
        jQuery('.testimonials-owl-dots').each(function() {
            var $owl1 = jQuery(this);
            var $owl2 = $owl1.next('.testimonials-owl-content');

            $owl2.on('change.owl.carousel', function(event) {
                if (event.namespace && event.property.name === 'position') {
                    var target = event.relatedTarget.relative(event.property.value, true);
                    $owl1.owlCarousel('to', target, 300, true);
                }
            });
        });



        $body.scrollspy('refresh');

        

 

        // Select

        // wrap select fields
        jQuery('select').each(function() {
            var s = jQuery(this);
            s.wrap('<div class="select_container"></div>');
        });

        ////////////////
        //TESTIMONIALS//
        ////////////////

        var $testimonials_owl = $('.testimonials-owl');
        var $testimonials_children_length = $testimonials_owl.find('.owl-item:not(.cloned)').children().length;
        if ($testimonials_children_length <= 10) {
            var text = ' / 0' + $testimonials_children_length;
        } else {
            var text = ' / ' + $testimonials_children_length;
        }
        $testimonials_owl.find('.owl-dots').append(text);

        // Custom nav of owl carousel
        var $carouselSection = $('.owl_custom_nav');
        var $carouselNav = $carouselSection.next('.owl-custom-nav');
        $carouselNav.find('.owl-prev').on('click', function() {
            $carouselSection.trigger('prev.owl');
        });
        $carouselNav.find('.owl-next').on('click', function() {
            $carouselSection.trigger('next.owl');
        });

        if ($carouselSection.find('.owl-nav').hasClass('disabled')) $carouselNav.addClass('disabled');


        
        

        

        //Dropdowns
        $('.dropdown-toggle').on('click', function(e) {
            e.stopPropagation();
            var item = $(this);
            $('.dropdown-menu').not(item.next()).slideUp(300);
            item.next().slideToggle(300);
        });
        $('.dropdown-menu').on('click', function(e) {
            e.stopPropagation();
        });
        $('body').on('click', function() {
            $('.dropdown-menu').slideUp(300);
        });

        //flexslider - only for HTML
        $('.images').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            selector: "figure > div",
            directionNav: false,
        });

        // Footer menu count
        var $list = $('.page_footer ul');
        var $length = $list.children().length;
        if ($length > 5) {
            $list.addClass('count');
        }

        //page preloader
        $(".preloader_img, .preloader_css").fadeOut(800);
        setTimeout(function() {
            $(".preloader").fadeOut(800, function() {

            });
        }, 200);
		
		console.log('%c Developed by CloudAlp', 'background: #45469b; color: #fff;padding:5px 10px;');
    } //eof windowLoadInit

    $(function() {
        documentReadyInit();
    });

		
    $window.on('load', function() {
        
		windowLoadInit();
		
    }); //end of "window load" event

    $window.on('resize', function() {

        $body.scrollspy('refresh');
        
    });

	jQuery(window).bind("scroll", function() {
		
		var scrollPos = (window.scrollY || window.pageYOffset);
		
		if(scrollPos >346 && scrollPos < (parseFloat(jQuery('#bottom')[0].offsetTop) - window.screen.height))
			jQuery('#inside-nav').show();
		else
			jQuery('#inside-nav').hide();
		
		if(jQuery('#section-1').length >0){
			
			if(scrollPos >= (jQuery('#section-1')[0].offsetTop + jQuery('#section-1')[0].offsetHeight)){
                if (document.documentElement.clientWidth <= 992) {
                    jQuery('header').addClass('show-small-logo');
                jQuery('.home-nav-home-content').addClass('nav-bar-show');
                jQuery('.toggle_menu').addClass('toggle-bar-show');
                }
			}
			else{
                if (document.documentElement.clientWidth <= 992) {
                     jQuery('header').removeClass('show-small-logo');
                // $('[data-spy="affix"]').removeClass("affix-top");
                jQuery('.home-nav-home-content').removeClass('nav-bar-show');
                jQuery('.toggle_menu').removeClass('toggle-bar-show');

                }
				
				
			}
           
		}
		
		if(jQuery('.stats').length >0){
			
			var topPos = jQuery('.stats')[0].offsetTop + jQuery('.stats')[0].offsetHeight;
			var botPos = jQuery('.stats')[0].offsetTop - window.screen.height;
			
			
			if( scrollPos > botPos && scrollPos < topPos){
                if (document.documentElement.clientWidth >=768) {

                        var pos1 = (topPos - scrollPos)/10+10;//Custom minus added

                        var pos2 = (pos1* -1); //(botPos - scrollPos)/11;
                        
                        jQuery('.stat-row1').css("transform", "translate3d( "+ pos1 + "px, 0px, 0px)");
                        jQuery('.stat-row2').css("transform", "translate3d("+ pos2 + "px, 0px, 0px)");
                    }
                    if(document.documentElement.clientWidth <768){
                        
                        var pos1 = (topPos - scrollPos)/10-150;//Custom minus added
                        var pos2 = (pos1* +1.5)/2; //(botPos - scrollPos)/11;


                        

                        
                        jQuery('.stat-row1').css("transform", "translate3d( "+ pos1 + "px, 0px, 0px)");
                        jQuery('.stat-row2').css("transform", "translate3d("+ pos2 + "px, 0px, 0px)");


                    }
				
			
			}
		}
	});
    if (document.documentElement.clientWidth >767) {

        $(window).on("scroll", function (t) {
            if ($(this).scrollTop() > 0) {
                $('[data-spy="affix"]').addClass("affix-top");
            }else{
                $('[data-spy="affix"]').removeClass("affix-top")
            }
          });
       
    }
    


    $(".customAddCssInJs").each(function(){
        $(".custom_card_content").on("mouseover",function(){
         
            $(this).find('.content-of-animate').addClass('hover-animation ');
        
       
        });
    });
    
    
    
        $(".customAddCssInJs").each(function(){
        $(".custom_card_content").on("mouseout",function(){
    
            $(this).find('.content-of-animate').removeClass('hover-animation ');
      
    });
    });
    // find the about-us page 
      var className = $(".home-nav-home-content").parents("div").find('#about-us');
             if(className.length >0){
                jQuery('.home-nav-home-content').addClass('about-us-nav');

             }else{
                jQuery('.home-nav-home-content').removeClass('about-us-nav');

             }
            //  find the home page 
             var homeName = $(".home-nav-home-content").parents("div").find('.home-content');
             if(homeName.length >0){
                jQuery('[data-spy="affix"]').addClass('home-nav-content');

             }else{
                jQuery('[data-spy="affix"]').removeClass('home-nav-content');

             }
            //  find the service page 
             var serviceNav = $('.home-nav-home-content').parents("div").find('[data-action="services-section"]');
            if(serviceNav.length >0){
                jQuery('.text-under-banner').addClass('service-section-banner');

            }else{
                jQuery('.text-under-banner').removeClass('service-section-banner');

            }
     
      var classNameSca= $(".home-nav-home-content").parents("div").find('[data-div="suiteCommerce"]');
      if(classNameSca.length >0){
        jQuery('.home-nav-home-content').addClass('suite-commerce-nav');

     }else{
        jQuery('.home-nav-home-content').removeClass('suite-commerce-nav');

     }
     var findsectionName=$('.technologies').parent().find('section');
      $.map(findsectionName ,function(value,index){
        $(value).attr('id', `section-${index+1}`);
      })
    
      var careerPageSection=$('.career-section').find('section');
      $.map(careerPageSection ,function(value,index){
        $(value).attr('id', `section-${index+1}`);
      })
	
	jQuery('#inside-nav').click(function(){
		
		var viewportTop = window.scrollY || window.pageYOffset;
		var id='#';
		
		jQuery("section").each(function() {
			var elTop = jQuery(this)[0].getBoundingClientRect().top + viewportTop;
			if((elTop-1) > viewportTop){
				
				if(id == '#'){
                    id +=jQuery(this)[0].id  || 'bottom';
                    jQuery.scrollTo(id,{duration:'2000'});
					return;
				}
			}
			
			
		});
	});
 
   //////////////////////////////////// 
   //                                //
   //   SHOW MODAL POPUP CAREERPAGE  //
   //                                //
   ////////////////////////////////////
   $('#modalPopup-1').on('click', function(e){
    e.preventDefault();
    $('#theModal').modal('show').find('.modal-content').load($(this).attr('href'));
  });
  $('#modalPopup-2').on('click', function(e){
    e.preventDefault();
    $('#theModal').modal('show').find('.modal-content').load($(this).attr('href'));
  });





//   /////////////////////////////////////



$('.click-on-read-more').hide();
$('#business').on('click',function(e){
    e.preventDefault();

    $('.click-on-read-more.active').slideUp(1000);
    $(this).parent().parent().find('[data-target="designing"]').removeClass('active');
    $(this).parent().parent().find('[data-target="maintainance"]').removeClass('active');
    $(this).parent().parent().find('[data-target="website"]').removeClass('active');

    // add class name   
    $(this).parent().parent().find('[data-target="business"]').toggleClass('active');
    if($('.content-1-section-1').hasClass('active')){
        $('.click-on-read-more.active').slideDown(1000);

    }else{
        $('.click-on-read-more').slideUp(1000);

    }
})

$('#designing').on('click',function(e){
    e.preventDefault();
    // delete the current element
        $('.click-on-read-more.active').slideUp(1000);
       $(this).parent().parent().find('[data-target="business"]').removeClass('active');
       $(this).parent().parent().find('[data-target="maintainance"]').removeClass('active');
       $(this).parent().parent().find('[data-target="website"]').removeClass('active');
    // add class name    
    $(this).parent().parent().find('[data-target="designing"]').toggleClass('active');
    if($('.content-1-section-1').hasClass('active')){
        $('.click-on-read-more.active').slideDown(1000);

    }else{
        $('.click-on-read-more').slideUp(1000);

    }
})

$('#maintainance').on('click',function(e){
    e.preventDefault();
    // delete the current element
        $('.click-on-read-more.active').slideUp(1000);
        $(this).parent().parent().find('[data-target="designing"]').removeClass('active');
        $(this).parent().parent().find('[data-target="business"]').removeClass('active');
        $(this).parent().parent().find('[data-target="website"]').removeClass('active');

    // add class name 
    $(this).parent().parent().find('[data-target="maintainance"]').toggleClass('active');
    if($('.content-1-section-1').hasClass('active')){
        $('.click-on-read-more.active').slideDown(1000);

    }else{
        $('.click-on-read-more').slideUp(1000);

    }
   
})

$('#website').on('click',function(e){
    e.preventDefault();
    // delete the current element
        $('.click-on-read-more.active').slideUp(1000);
        $(this).parent().parent().find('[data-target="designing"]').removeClass('active');
        $(this).parent().parent().find('[data-target="business"]').removeClass('active');
        $(this).parent().parent().find('[data-target="maintainance"]').removeClass('active');

    // add class name 
    $(this).parent().parent().find('[data-target="website"]').toggleClass('active');
    if($('.content-1-section-1').hasClass('active')){
        $('.click-on-read-more.active').slideDown(1000);

    }else{
        $('.click-on-read-more').slideUp(1000);

    }
})



///////////////////////////////////
//    modal open button          //
///////////////////////////////////
    $('#AboutUsModal').on('click', function(e){
      e.preventDefault();
       $('#aboutUsModalForm').modal('show').find('.modal-content').load($(this).attr('href'));
    });
    $('#partnerModalPopup').on('click',function(e){
        e.preventDefault();
        $('#aboutUsModalForm').modal('show').find('.modal-content').load($(this).attr('href'));
    
      })
    $('#IntegrationModal').on('click', function(e){
      e.preventDefault();
       $('#integrationFormGetInTouch').modal('show').find('.modal-content').load($(this).attr('href'));
    });
    $('#serviceModal').on('click', function(e){
      e.preventDefault();
       $('#serviceFormGetInTouch').modal('show').find('.modal-content').load($(this).attr('href'));
    });
    $('#customizationModal').on('click', function(e){
      e.preventDefault();
       $('#customizationFormGetInTouch').modal('show').find('.modal-content').load($(this).attr('href'));
    });
    $('#SuiteCommerceModal').on('click', function(e){
      e.preventDefault();
       $('#SuiteCommerceFormGetInTouch').modal('show').find('.modal-content').load($(this).attr('href'));
    });
    $('#ImplementationModal').on('click', function(e){
      e.preventDefault();
       $('#ImplementationFormGetInTouch').modal('show').find('.modal-content').load($(this).attr('href'));
    });
    $('#suiteAppsModal').on('click', function(e){
      e.preventDefault();
       $('#suiteAppsFormGetInTouch').modal('show').find('.modal-content').load($(this).attr('href'));
    });


    //////////////////////////////////////////
    //                                      //
    // Integration Page Application Section //
    //                                      //
    //////////////////////////////////////////


    $(".tabs-to-carousel").length &&$(function () {
        $(".tabs-to-carousel").each(function () {
            const e = this,
              t = $(e).find(" a:first-child").data("bgcolor");
            function n(t) {
              const n = t.item.index,
                o = $(e).find(".tab-controller").toArray(),
                a = $(e).find(".tabbed-container").toArray();
              $(e).find(".tab-controller").removeClass("selected"),
                $(e)
                  .find(".tabbed-container")
                  .removeClass("tabbed-container-active"),
                $(o[n]).addClass("selected"),
                $(a[n]).addClass("tabbed-container-active"),
                setTimeout(function () {
                  $(e)
                    .find(".owl-item-content")
                    .each(function () {
                      $(this).find("video").length > 0 &&
                      $(this).parents(".owl-item").hasClass("active")
                        ? $(this).find("video").trigger("play")
                        : $(this).find("video").trigger("destroy");
                    });
                }, 100);
            }
            $(e).addClass(t),
              $(".tabbed-nav a:first-child").addClass("selected"),
              $(".tab1").addClass("tabbed-container-active"),
              $(".tabbed-nav a", this).each(function () {
                "#" === this.getAttribute("href") && (this.href = "#!"),
                  $(this).on("click", function (t) {
                    const n = $(this).data("target"),
                      o = $(this).data("bgcolor");
                    t.preventDefault(),
                      $(e).find(".tabbed-nav a").removeClass("selected"),
                      $(this).addClass("selected"),
                      $(e)
                        .find(".tabbed-container")
                        .removeClass("tabbed-container-active"),
                      $(e)
                        .find(".tabbed-container." + n)
                        .addClass("tabbed-container-active"),
                      $(e).attr("class", "tabs-to-carousel"),
                      $(e).addClass(o),
                      setTimeout(function () {
                        $(e)
                          .find(".tabbed-container")
                          .each(function () {
                            $(this).find("video").length > 0 &&
                            $(this).hasClass("tabbed-container-active")
                              ? $(this).find("video").trigger("play")
                              : $(this).find("video").trigger("destroy");
                          });
                      }, 100);
                  });
              }),
              $(".tabbed-nav a", this).first().click(),
              $("a.tab-controller", this).each(function () {
                $(this).on("click", function () {
                  const t = $(e).find(".owl-carousel"),
                    n = $(this).data("index");
                  t.trigger("to.owl.carousel", n);
                });
              }),
              $(this)
                .find(".owl-carousel")
                .owlCarousel({
                    center: !0,
                    items: 1,
                    loop: !1,
                    stagePadding: 30,
                    dots: !0,
                    onInitialized: n,
                    onChanged: n,
                });
          });
    })


    // /////////////////////////////

    $('[data-action="pixel"]').hide();

    
     if(jQuery('[data-testid="icon-section-animated-group"]').length >0){

    }

    if((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth <= 992)){
        
        if($('.fw-page-builder-content').find('.implementation_banner_new')){
            $('.fw-page-builder-content').addClass('customPadding');
        }else{
            $('.fw-page-builder-content').removeClass('customPadding');
        }
        $('[data-action="changesClass"]').removeClass( "col-md-6" ).addClass( "col-md-12" );
     }
     $('[data-action="preventDefault"]').on('click',function(e){
         e.preventDefault();
     })
     if((document.documentElement.clientWidth < 768)){
        $('[data-action="changesClass"]').removeClass( "col-md-12" ).addClass( "col-md-12" );

     }
     if((document.documentElement.clientWidth > 992)){
        $('[data-action="changesClass"]').removeClass( "col-md-12" ).addClass( "col-md-6" );

     }
    //  .main-container-section



    ///////////////////////////
    //                       //
    // cookie banner Section //
    //                       //
    ///////////////////////////

    if(localStorage.getItem('cookieSeen')!= 'shown'){
        $('#consent_blackbar').delay(2000).fadeIn();

    }else{
        $('#consent_blackbar').hide();
         //google tag manager code exicute after button clicking
    //   window.dataLayer = window.dataLayer || [];
    //   function gtag(){dataLayer.push(arguments);}
    //   gtag('js', new Date());
    //   gtag('config', 'G-NZQ8B5H1RB');
    }
    $('#truste-consent-button').on('click',function() {
        localStorage.setItem('cookieSeen','shown');
      $('#consent_blackbar').fadeOut();
      //google tag manager code exicute after button clicking
    //   window.dataLayer = window.dataLayer || [];
    //   function gtag(){dataLayer.push(arguments);}
    //   gtag('js', new Date());
    //   gtag('config', 'G-NZQ8B5H1RB');
    });
    
   
    //end of IIFE function
})(jQuery);