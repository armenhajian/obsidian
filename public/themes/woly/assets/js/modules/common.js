(function($) {
	"use strict";

    var common = {};
    eltd.modules.common = common;

    common.eltdProgressCircle = eltdProgressCircle;
    common.eltdIsTouchDevice = eltdIsTouchDevice;
    common.eltdDisableSmoothScrollForMac = eltdDisableSmoothScrollForMac;
    common.eltdFluidVideo = eltdFluidVideo;
    common.eltdPreloadBackgrounds = eltdPreloadBackgrounds;
    common.eltdPrettyPhoto = eltdPrettyPhoto;
    common.eltdCheckHeaderStyleOnScroll = eltdCheckHeaderStyleOnScroll;
    common.eltdInitParallax = eltdInitParallax;
    common.eltdEnableScroll = eltdEnableScroll;
    common.eltdDisableScroll = eltdDisableScroll;
    common.eltdWheel = eltdWheel;
    common.eltdKeydown = eltdKeydown;
    common.eltdPreventDefaultValue = eltdPreventDefaultValue;
    common.eltdOwlSlider = eltdOwlSlider;
    common.eltdInitSelfHostedVideoPlayer = eltdInitSelfHostedVideoPlayer;
    common.eltdSelfHostedVideoSize = eltdSelfHostedVideoSize;
    common.eltdInitBackToTop = eltdInitBackToTop;
    common.eltdBackButtonShowHide = eltdBackButtonShowHide;
    common.eltdSmoothTransition = eltdSmoothTransition;
    common.eltdInitStickySidebarWidget = eltdInitStickySidebarWidget;

    common.eltdOnDocumentReady = eltdOnDocumentReady;
    common.eltdOnWindowLoad = eltdOnWindowLoad;
    common.eltdOnWindowResize = eltdOnWindowResize;
    common.eltdOnWindowScroll = eltdOnWindowScroll;
    common.eltdEnable404FullScreen= eltdEnable404FullScreen;
    common.eltdIEVersion = eltdIEVersion;

    $(document).ready(eltdOnDocumentReady);
    $(window).load(eltdOnWindowLoad);
    $(window).resize(eltdOnWindowResize);
    $(window).scroll(eltdOnWindowScroll);
    
    /* 
        All functions to be called on $(document).ready() should be in this function
    */
    function eltdOnDocumentReady() {
        eltdProgressCircle();
        eltdIsTouchDevice();
        eltdDisableSmoothScrollForMac();
        eltdFluidVideo();
        eltdPreloadBackgrounds();
        eltdPrettyPhoto();
        eltdInitElementsAnimations();
        eltdInitAnchor().init();
        eltdInitVideoBackground();
        eltdInitVideoBackgroundSize();
        eltdSetContentBottomMargin();
        eltdOwlSlider();
        eltdInitSelfHostedVideoPlayer();
        eltdSelfHostedVideoSize();
        eltdBackButtonShowHide();
        eltdEnable404FullScreen();
        eltdIEVersion();
    }

    /* 
        All functions to be called on $(window).load() should be in this function
    */
    function eltdOnWindowLoad() {
        eltdCheckHeaderStyleOnScroll(); //called on load since all content needs to be loaded in order to calculate row's position right
        eltdSmoothTransition();
        eltdInitStickySidebarWidget().init();
        eltdInitBackToTop();
    }

    /* 
        All functions to be called on $(window).resize() should be in this function
    */
    function eltdOnWindowResize() {
        eltdInitVideoBackgroundSize();
        eltdSelfHostedVideoSize();
        eltdEnable404FullScreen();
    }

    /* 
        All functions to be called on $(window).scroll() should be in this function
    */
    function eltdOnWindowScroll() {
        
    }

    /*
     ** Disable shortcodes animation on appear for touch devices
     */
    function eltdIsTouchDevice() {
        if(Modernizr.touch && !eltd.body.hasClass('eltd-no-animations-on-touch')) {
            eltd.body.addClass('eltd-no-animations-on-touch');
        }
    }

    /*
     ** Disable smooth scroll for mac if smooth scroll is enabled
     */
    function eltdDisableSmoothScrollForMac() {
        var os = navigator.appVersion.toLowerCase();

        if (os.indexOf('mac') > -1 && eltd.body.hasClass('eltd-smooth-scroll')) {
            eltd.body.removeClass('eltd-smooth-scroll');
        }
    }

	function eltdFluidVideo() {
        fluidvids.init({
			selector: ['iframe'],
			players: ['www.youtube.com', 'player.vimeo.com']
		});
	}

    /**
     * Init Owl Carousel
     */
    function eltdOwlSlider() {

        var sliders = $('.eltd-owl-slider');

        if (sliders.length) {
            sliders.each(function(){

                var slider = $(this);
                slider.waitForImages(function(){
                    slider.owlCarousel({
                        items: 1,
                        nav: true,
                        dots: false,
                        autoHeight:true,
                        loop:true,
                        smartSpeed: 500,
                        navText: [
                            '<span class="eltd-prev-icon"><span class="arrow_left"></span></span>',
                            '<span class="eltd-next-icon"><span class="arrow_right"></span></span>'
                        ],
                        onInitialized: function(){
                            slider.css('visibility','visible');
                        }
                    });
                });

            });
        }

    }


    /*
     *	Preload background images for elements that have 'eltd-preload-background' class
     */
    function eltdPreloadBackgrounds(){

        $(".eltd-preload-background").each(function() {
            var preloadBackground = $(this);
            if(preloadBackground.css("background-image") !== "" && preloadBackground.css("background-image") != "none") {

                var bgUrl = preloadBackground.attr('style');

                bgUrl = bgUrl.match(/url\(["']?([^'")]+)['"]?\)/);
                bgUrl = bgUrl ? bgUrl[1] : "";

                if (bgUrl) {
                    var backImg = new Image();
                    backImg.src = bgUrl;
                    $(backImg).load(function(){
                        preloadBackground.removeClass('eltd-preload-background');
                    });
                }
            }else{
                $(window).load(function(){ preloadBackground.removeClass('eltd-preload-background'); }); //make sure that eltd-preload-background class is removed from elements with forced background none in css
            }
        });
    }

    function eltdPrettyPhoto() {
        /*jshint multistr: true */
        var markupWhole = '<div class="pp_pic_holder"> \
                        <div class="ppt">&nbsp;</div> \
                        <div class="pp_top"> \
                            <div class="pp_left"></div> \
                            <div class="pp_middle"></div> \
                            <div class="pp_right"></div> \
                        </div> \
                        <div class="pp_content_container"> \
                            <div class="pp_left"> \
                            <div class="pp_right"> \
                                <div class="pp_content"> \
                                    <div class="pp_loaderIcon"></div> \
                                    <div class="pp_fade"> \
                                        <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
                                        <div class="pp_hoverContainer"> \
                                            <a class="pp_next" href="#"><span class="fa fa-angle-right"></span></a> \
                                            <a class="pp_previous" href="#"><span class="fa fa-angle-left"></span></a> \
                                        </div> \
                                        <div id="pp_full_res"></div> \
                                        <div class="pp_details"> \
                                            <div class="pp_nav"> \
                                                <a href="#" class="pp_arrow_previous">Previous</a> \
                                                <p class="currentTextHolder">0/0</p> \
                                                <a href="#" class="pp_arrow_next">Next</a> \
                                            </div> \
                                            <p class="pp_description"></p> \
                                            {pp_social} \
                                            <a class="pp_close" href="#">Close</a> \
                                        </div> \
                                    </div> \
                                </div> \
                            </div> \
                            </div> \
                        </div> \
                        <div class="pp_bottom"> \
                            <div class="pp_left"></div> \
                            <div class="pp_middle"></div> \
                            <div class="pp_right"></div> \
                        </div> \
                    </div> \
                    <div class="pp_overlay"></div>';

        $("a[data-rel^='prettyPhoto']").prettyPhoto({
            hook: 'data-rel',
            animation_speed: 'normal', /* fast/slow/normal */
            slideshow: false, /* false OR interval time in ms */
            autoplay_slideshow: false, /* true/false */
            opacity: 0.80, /* Value between 0 and 1 */
            show_title: true, /* true/false */
            allow_resize: true, /* Resize the photos bigger than viewport. true/false */
            horizontal_padding: 0,
            default_width: 960,
            default_height: 540,
            counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
            theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
            hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
            wmode: 'opaque', /* Set the flash wmode attribute */
            autoplay: true, /* Automatically start videos: True/False */
            modal: false, /* If set to true, only the close button will close the window */
            overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
            keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
            deeplinking: false,
            custom_markup: '',
            social_tools: false,
            markup: markupWhole
        });
    }
    function  eltdEnable404FullScreen() {
        if(eltd.body.hasClass('error404')){
            var content404=  $('.eltd-404-page');
            $('.eltd-page-header').hide();
            $('.eltd-title').hide();
            $('.eltd-footer-inner').hide();
            content404.css({'height': (eltd.windowHeight) + 'px'});
            content404.css({'width': (eltd.windowWidth) + 'px'});
        }

    }

    /*
     *	Check header style on scroll, depending on row settings
     */
    function eltdCheckHeaderStyleOnScroll(){

        if($('[data-eltd_header_style]').length > 0 && eltd.body.hasClass('eltd-header-style-on-scroll')) {

            var waypointSelectors = $('.eltd-full-width-inner > .wpb_row.eltd-section, .eltd-full-width-inner > .eltd-parallax-section-holder, .eltd-container-inner > .wpb_row.eltd-section, .eltd-container-inner > .eltd-parallax-section-holder, .eltd-portfolio-single > .wpb_row.eltd-section');
            var changeStyle = function(element){
                (element.data("eltd_header_style") !== undefined) ? eltd.body.removeClass('eltd-dark-header eltd-light-header').addClass(element.data("eltd_header_style")) : eltd.body.removeClass('eltd-dark-header eltd-light-header').addClass(''+eltd.defaultHeaderStyle);
            };

            waypointSelectors.waypoint( function(direction) {
                if(direction === 'down') { changeStyle($(this.element)); }
            }, { offset: 0});

            waypointSelectors.waypoint( function(direction) {
                if(direction === 'up') { changeStyle($(this.element)); }
            }, { offset: function(){
                return -$(this.element).outerHeight();
            } });
        }
    }

    /*
     *	Start animations on elements
     */
    function eltdInitElementsAnimations(){

        var touchClass = $('.eltd-no-animations-on-touch'),
            noAnimationsOnTouch = true,
            elements = $('.eltd-grow-in, .eltd-fade-in-down, .eltd-element-from-fade, .eltd-element-from-left, .eltd-element-from-right, .eltd-element-from-top, .eltd-element-from-bottom, .eltd-flip-in, .eltd-x-rotate, .eltd-z-rotate, .eltd-y-translate, .eltd-fade-in, .eltd-fade-in-left-x-rotate'),
            clasess,
            animationClass,
            animationData;

        if (touchClass.length) {
            noAnimationsOnTouch = false;
        }

        if(elements.length > 0 && noAnimationsOnTouch){
            elements.each(function(){
				$(this).appear(function() {
					animationData = $(this).data('animation');
					if(typeof animationData !== 'undefined' && animationData !== '') {
						animationClass = animationData;
						$(this).addClass(animationClass+'-on');
					}
                },{accX: 0, accY: eltdGlobalVars.vars.eltdElementAppearAmount});
            });
        }

    }


/*
 ** Sections with parallax background image
 */
function eltdInitParallax(){

        /*
            Old and slower code, revert to it in case of gaps
        */
        $('.eltd-parallax-section-holder').each(function() {

            var parallaxElement = $(this);
            if(parallaxElement.hasClass('eltd-full-screen-height-parallax')){

                               //get paspartu size if is set on page
                var topPaspartu = parseInt($('body.eltd-paspartu-enabled .eltd-wrapper').css('padding-top'));
                if(typeof topPaspartu === 'undefined' || topPaspartu === null || isNaN(topPaspartu)){
                    topPaspartu = 0;
                }

                var bottomPaspartu = parseInt($('body.eltd-paspartu-enabled .eltd-wrapper').css('padding-bottom'));
                if(typeof bottomPaspartu === 'undefined' || bottomPaspartu === null || isNaN(bottomPaspartu)){
                    bottomPaspartu = 0;
                }

                var paspartuSize = topPaspartu + bottomPaspartu;

                parallaxElement.height(eltd.windowHeight - paspartuSize);
                parallaxElement.find('.eltd-parallax-content-outer').css('padding',0);
            }
            var speed = parallaxElement.data('eltd-parallax-speed')*0.4;

            parallaxElement.parallax("50%", speed);
        });
}

/*
 **	Anchor functionality
 */
var eltdInitAnchor = eltd.modules.common.eltdInitAnchor = function() {

    /**
     * Set active state on clicked anchor
     * @param anchor, clicked anchor
     */
    var setActiveState = function(anchor){

        $('.eltd-main-menu .eltd-active-item, .eltd-mobile-nav .eltd-active-item, .eltd-vertical-menu .eltd-active-item, .eltd-fullscreen-menu .eltd-active-item').removeClass('eltd-active-item');
        anchor.parent().addClass('eltd-active-item');

        $('.eltd-main-menu a, .eltd-mobile-nav a, .eltd-vertical-menu a, .eltd-fullscreen-menu a').removeClass('current');
        anchor.addClass('current');
    };

    /**
     * Check anchor active state on scroll
     */
    var checkActiveStateOnScroll = function(){

        $('[data-eltd-anchor]').waypoint( function(direction) {
            if(direction === 'down') {
                setActiveState($("a[href='"+window.location.href.split('#')[0]+"#"+$(this.element).data("eltd-anchor")+"']"));
            }
        }, { offset: '50%' });

        $('[data-eltd-anchor]').waypoint( function(direction) {
            if(direction === 'up') {
                setActiveState($("a[href='"+window.location.href.split('#')[0]+"#"+$(this.element).data("eltd-anchor")+"']"));
            }
        }, { offset: function(){
            return -($(this.element).outerHeight() - 150);
        } });

    };

    /**
     * Check anchor active state on load
     */
    var checkActiveStateOnLoad = function(){
        var hash = window.location.hash.split('#')[1];

	    if(hash !== "" && $('[data-eltd-anchor="'+hash+'"]').length > 0){
		    //triggers click which is handled in 'anchorClick' function
		    var linkURL = window.location.href.split('#')[0]+"#"+hash;
		    if($("a[href='"+linkURL+"']").length){ //if there is a link on page with such href
			    $("a[href='"+linkURL+"']").trigger( "click" );
		    }else{ //than create a fake link and click it
			    var link = $('<a/>').attr({'href':linkURL,'class':'eltd-anchor'}).appendTo('body');
			    link.trigger('click');
		    }
	    }
    };

    /**
     * Calculate header height to be substract from scroll amount
     * @param anchoredElementOffset, anchorded element offest
     */
    var headerHeihtToSubtract = function(anchoredElementOffset){

        if(eltd.modules.header.behaviour == 'eltd-sticky-header-on-scroll-down-up') {
            (anchoredElementOffset > eltd.modules.header.stickyAppearAmount) ? eltd.modules.header.isStickyVisible = true : eltd.modules.header.isStickyVisible = false;
        }

        if(eltd.modules.header.behaviour == 'eltd-sticky-header-on-scroll-up') {
            (anchoredElementOffset > eltd.scroll) ? eltd.modules.header.isStickyVisible = false : '';
        }

        var headerHeight = eltd.modules.header.isStickyVisible ? eltdGlobalVars.vars.eltdStickyHeaderTransparencyHeight : eltdPerPageVars.vars.eltdHeaderTransparencyHeight;

        return headerHeight;
    };

    /**
     * Handle anchor click
     */
    var anchorClick = function() {
        eltd.document.on("click", ".eltd-main-menu a, .eltd-vertical-menu a, .eltd-fullscreen-menu a, .eltd-btn, .eltd-anchor, .eltd-mobile-nav a", function() {
            var scrollAmount;
            var anchor = $(this);
            var hash = anchor.prop("hash").split('#')[1];

            if(hash !== "" && $('[data-eltd-anchor="' + hash + '"]').length > 0 /*&& anchor.attr('href').split('#')[0] == window.location.href.split('#')[0]*/) {

                var anchoredElementOffset = $('[data-eltd-anchor="' + hash + '"]').offset().top;
                scrollAmount = $('[data-eltd-anchor="' + hash + '"]').offset().top - headerHeihtToSubtract(anchoredElementOffset);

                setActiveState(anchor);

                eltd.html.stop().animate({
                    scrollTop: Math.round(scrollAmount)
                }, 1000, function() {
                    //change hash tag in url
                    if(history.pushState) { history.pushState(null, null, '#'+hash); }
                });
                return false;
            }
        });
    };

    return {
        init: function() {
            if($('[data-eltd-anchor]').length) {
                anchorClick();
                checkActiveStateOnScroll();
                $(window).load(function() { checkActiveStateOnLoad(); });
            }
        }
    };

};

/*
 **	Video background initialization
 */
function eltdInitVideoBackground(){

    $('.eltd-section .eltd-video-wrap .eltd-video').mediaelementplayer({
        enableKeyboard: false,
        iPadUseNativeControls: false,
        pauseOtherPlayers: false,
        // force iPhone's native controls
        iPhoneUseNativeControls: false,
        // force Android's native controls
        AndroidUseNativeControls: false
    });

    //mobile check
    if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)){
        eltdInitVideoBackgroundSize();
        $('.eltd-section .eltd-mobile-video-image').show();
        $('.eltd-section .eltd-video-wrap').remove();
    }
}

    /*
     **	Calculate video background size
     */
    function eltdInitVideoBackgroundSize(){

        $('.eltd-section .eltd-video-wrap').each(function(){

            var element = $(this);
            var sectionWidth = element.closest('.eltd-section').outerWidth();
            element.width(sectionWidth);

            var sectionHeight = element.closest('.eltd-section').outerHeight();
            eltd.minVideoWidth = eltd.videoRatio * (sectionHeight+20);
            element.height(sectionHeight);

            var scaleH = sectionWidth / eltd.videoWidthOriginal;
            var scaleV = sectionHeight / eltd.videoHeightOriginal;
            var scale =  scaleV;
            if (scaleH > scaleV)
                scale =  scaleH;
            if (scale * eltd.videoWidthOriginal < eltd.minVideoWidth) {scale = eltd.minVideoWidth / eltd.videoWidthOriginal;}

            element.find('video, .mejs-overlay, .mejs-poster').width(Math.ceil(scale * eltd.videoWidthOriginal +2));
            element.find('video, .mejs-overlay, .mejs-poster').height(Math.ceil(scale * eltd.videoHeightOriginal +2));
            element.scrollLeft((element.find('video').width() - sectionWidth) / 2);
            element.find('.mejs-overlay, .mejs-poster').scrollTop((element.find('video').height() - (sectionHeight)) / 2);
            element.scrollTop((element.find('video').height() - sectionHeight) / 2);
        });

    }

    /*
     **	Set content bottom margin because of the uncovering footer
     */
    function eltdSetContentBottomMargin(){
        var uncoverFooter = $('.eltd-footer-uncover');

        if(uncoverFooter.length){
            $('.eltd-content').css('margin-bottom', $('.eltd-footer-inner').height());
        }
    }


    function eltdDisableScroll() {

        if (window.addEventListener) {
            window.addEventListener('DOMMouseScroll', eltdWheel, false);
        }
        window.onmousewheel = document.onmousewheel = eltdWheel;
        document.onkeydown = eltdKeydown;

        if(eltd.body.hasClass('eltd-smooth-scroll')){
            window.removeEventListener('mousewheel', smoothScrollListener, false);
            window.removeEventListener('DOMMouseScroll', smoothScrollListener, false);
        }
    }

    function eltdEnableScroll() {
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', eltdWheel, false);
        }
        window.onmousewheel = document.onmousewheel = document.onkeydown = null;

        if(eltd.body.hasClass('eltd-smooth-scroll')){
            window.addEventListener('mousewheel', smoothScrollListener, false);
            window.addEventListener('DOMMouseScroll', smoothScrollListener, false);
        }
    }

    function eltdWheel(e) {
        eltdPreventDefaultValue(e);
    }

    function eltdKeydown(e) {
        var keys = [37, 38, 39, 40];

        for (var i = keys.length; i--;) {
            if (e.keyCode === keys[i]) {
                eltdPreventDefaultValue(e);
                return;
            }
        }
    }

    function eltdPreventDefaultValue(e) {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
    }

    function eltdInitSelfHostedVideoPlayer() {

        var players = $('.eltd-self-hosted-video');
            players.mediaelementplayer({
                audioWidth: '100%'
            });
    }

	function eltdSelfHostedVideoSize(){

		$('.eltd-self-hosted-video-holder .eltd-video-wrap').each(function(){
			var thisVideo = $(this);

			var videoWidth = thisVideo.closest('.eltd-self-hosted-video-holder').outerWidth();
			var videoHeight = videoWidth / eltd.videoRatio;

			if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)){
				thisVideo.parent().width(videoWidth);
				thisVideo.parent().height(videoHeight);
			}

			thisVideo.width(videoWidth);
			thisVideo.height(videoHeight);

			thisVideo.find('video, .mejs-overlay, .mejs-poster').width(videoWidth);
			thisVideo.find('video, .mejs-overlay, .mejs-poster').height(videoHeight);
		});
	}

    function eltdProgressCircle() {
        var progressCircle = $('.eltd-progress-circle-holder'),
            preloader = $('.eltd-smooth-transition-loader.eltd-mimic-ajax');

        if (progressCircle.length) {

            var eltdLoading = function() {
                TweenLite.to(".eltd-loading-countdown", 1, {opacity: 1, delay: 0.1});

                setTimeout(function() { // 500ms
                    TweenLite.to(".eltd-wheel-small, .eltd-wheel-large", 0.7, {rotation: "+=90deg"});
                    TweenLite.to(".eltd-wheel-small > .eltd-circle-window-left > .eltd-circle-part-left", 0.7, {rotation: "135deg", ease: "Power1.easeInOut"});
                    TweenLite.to(".eltd-wheel-large > .eltd-circle-window-left > .eltd-circle-part-left", 0.7, {rotation: "135deg", ease: "Power1.easeInOut"});
                    TweenLite.to(".eltd-digit-1", 0.7, {y: "-40px", ease: "Power2.easeOut"});
                    TweenLite.to(".eltd-digit-2", 0.7, {y: "-300px", ease: "Power2.easeOut"});

                    TweenLite.to(".eltd-wheel-small", 0.7, {rotation: "+=90deg", delay: 0.8});
                    TweenLite.to(".eltd-wheel-large", 0.7, {rotation: "+=45deg", delay: 0.8});
                    TweenLite.to(".eltd-wheel-small > .eltd-circle-window-left > .eltd-circle-part-left", 0.7, {rotation: "225deg", ease: "Power1.easeInOut", delay: 0.8});
                    TweenLite.to(".eltd-wheel-large > .eltd-circle-window-left > .eltd-circle-part-left", 0.7, {rotation: "225deg", ease: "Power1.easeInOut", delay: 0.8});
                    TweenLite.to(".eltd-digit-1", 0.7, {y: "-80px", ease: "Power2.easeOut", delay: 0.8});
                    TweenLite.fromTo(".eltd-digit-2", 0.7, {y: "-80px"}, {y: "-360px", ease: "Power2.easeOut", delay: 0.8});

                    TweenLite.to(".eltd-wheel-small", 0.7, {rotation: "+=90deg", delay: 1.7});
                    TweenLite.to(".eltd-wheel-large", 0.7, {rotation: "+=45deg", delay: 1.7});
                    TweenLite.to(".eltd-wheel-small > .eltd-circle-window-right > .eltd-circle-part-right", 0.7, {rotation: "+=90deg", ease: "Power1.easeInOut", delay: 1.7});
                    TweenLite.to(".eltd-wheel-large > .eltd-circle-window-right > .eltd-circle-part-right", 0.7, {rotation: "+=90deg", ease: "Power1.easeInOut", delay: 1.7});
                    TweenLite.to(".eltd-digit-1", 0.7, {y: "-160px", ease: "Power2.easeOut", delay: 1.7});
                    TweenLite.fromTo(".eltd-digit-2", 0.7, {y: "-80px"}, {y: "-280px", ease: "Power2.easeOut", delay: 1.7});

                    TweenLite.to(".eltd-wheel-small", 0.7, {rotation: "+=90deg", delay: 2.5});
                    TweenLite.to(".eltd-wheel-large", 0.7, {rotation: "+=45deg", delay: 2.5});
                    TweenLite.to(".eltd-wheel-small > .eltd-circle-window-right > .eltd-circle-part-right", 0.7, {rotation: "+=90deg", ease: "Power1.easeInOut", delay: 2.5});
                    TweenLite.to(".eltd-wheel-large > .eltd-circle-window-right > .eltd-circle-part-right", 0.7, {rotation: "+=90deg", ease: "Power1.easeInOut", delay: 2.5});
                    TweenLite.to(".eltd-digit-1", 0.7, {y: "-180px", ease: "Power2.easeOut", delay: 2.5});
                    TweenLite.fromTo(".eltd-digit-2", 0.7, {y: "-280px"}, {y: "-400px", ease: "Power2.easeOut", delay: 2.5, onComplete: eltdAddLabel});
                }, 500);
            }

            var eltdAddLabel = function() {
                TweenLite.to(".eltd-label", 1, {opacity: 1, ease: "Power2.easeOut", delay: 2});
                eltdLoadingContinue();
            }

            //continue loading
            $(window).load(function(){
                eltd.body.addClass('eltd-content-loaded');
                if(eltd.body.hasClass('eltd-content-preloaded')){
                    eltdLoadingFinished();
                }
            });

            var eltdLoadingContinue = function() {
                if(eltd.body.hasClass('eltd-content-loaded')){
                    eltdLoadingFinished();
                }else{
                    eltd.body.addClass('eltd-content-preloaded');
                }
            }

            //finish loading
            var eltdLoadingFinished = function() {
                // 100 %
                TweenLite.to(".eltd-digit-1, .eltd-digit-2, .eltd-digit-0", 0.7, {y: "-=20px", ease: "Power2.easeOut", delay: .1});
                TweenLite.to(".eltd-label", .3, {opacity: 0, display: "none", ease: "Power2.easeOut", delay: .3});
                TweenLite.to(".eltd-loading-countdown", 0.7, {opacity: 0, display: "none", ease: "Power2.easeOut", delay: .6});
                // Squeeze
                TweenLite.to(".eltd-wheel-small", 0.3, {scale: 0.85, opacity:0, ease: "Power2.easeOut", delay: 1});
                TweenLite.to(".eltd-wheel-large", 0.3, {scale: 0.8, opacity:0, ease: "Power2.easeOut", delay: 1, onComplete: eltdRemovePreloader});
            }

            //remove preloader
            var eltdRemovePreloader = function() {
                preloader.fadeOut(200);
                eltd.modules.shortcodes.eltdIntroSectionAppear(); //sync intro section with preogress circle
            }

            eltdLoading();
        } else {
            $(window).load(function(){
                eltd.modules.shortcodes.eltdIntroSectionAppear(); //if circle preloader is not present trigger eltdIntroSections normally, on load
            });
        }
    }

    function eltdToTopButton(a) {

        var b = $("#eltd-back-to-top");
        b.removeClass('off on');
        if (a === 'on') { b.addClass('on'); } else { b.addClass('off'); }
    }

    function eltdBackButtonShowHide(){
        eltd.window.scroll(function () {
            var b = $(this).scrollTop();
            var c = $(this).height();
            var d;
            if (b > 0) { d = b + c / 2; } else { d = 1; }
            if (d < 1e3) { eltdToTopButton('off'); } else { eltdToTopButton('on'); }
        });
    }

    function eltdInitBackToTop(){
        var backToTopButton = $('#eltd-back-to-top'),
            footer = $('footer'),
            contentBottom = $('.eltd-content-bottom'),
            contentBottomHeight = 0;

        if (contentBottom.length) {
            contentBottomHeight = contentBottom.outerHeight();
        }

        backToTopButton.on('click',function(e){
            e.preventDefault();
            eltd.html.animate({scrollTop: 0}, eltd.window.scrollTop()/3, 'easeInOutQuad');
        });

        if (footer.length) {
            $(window).scroll(function(){
                var footerDistance = footer.offset().top - $(window).scrollTop() - eltd.windowHeight - contentBottomHeight + 94;
                if (footerDistance < 0) {
                    backToTopButton.addClass('light');
                } else {
                    backToTopButton.removeClass('light');
                }
            });
        }

    }


    function eltdSmoothTransition() {
        var loader = $('body > .eltd-smooth-transition-loader.eltd-mimic-ajax'),
            circleProgressPreloader =  loader.find('.eltd-progress-circle-holder');

        if (loader.length) {
            if (!circleProgressPreloader.length) {
                loader.fadeOut(500);

                $(window).bind("pageshow", function(event) {
                    if (event.originalEvent.persisted) {
                        loader.fadeOut(500);
                    }
                });
            } //if circle progress preloader present, loader fades out in eltdProgressCircle function

            $('a').click(function(e) {
                var a = $(this);
                if (
                    e.which == 1 && // check if the left mouse button has been pressed
                    a.attr('href').indexOf(window.location.host) >= 0 && // check if the link is to the same domain
					(typeof a.data('rel') === 'undefined') && //Not pretty photo link
                    (typeof a.attr('rel') === 'undefined') && //Not VC pretty photo link
                    !a.hasClass('eltd-like') && //Not like link
                    (typeof a.attr('target') === 'undefined' || a.attr('target') === '_self') && // check if the link opens in the same window
                    (a.attr('href').split('#')[0] !== window.location.href.split('#')[0]) // check if it is an anchor aiming for a different page
                ) {
                    e.preventDefault();
                    loader.addClass('eltd-hide-spinner');
                    loader.fadeIn(500, function() {
                        window.location = a.attr('href');
                    });
                }
            });
        }
    }

    /*
     **  Init sticky sidebar widget
     */
    function eltdInitStickySidebarWidget(){

        var sswHolder = $('.eltd-widget-sticky-sidebar');
        var headerHeightOffset = 0;
        var widgetTopOffset = 0;
        var widgetTopPosition = 0;
        var sidebarHeight = 0;
        var sidebarWidth = 0;
        var objectsCollection = [];

        function addObjectItems() {
            if (sswHolder.length){
                sswHolder.each(function(){
                    var thisSswHolder = $(this);

                    widgetTopOffset = thisSswHolder.offset().top;
                    widgetTopPosition = thisSswHolder.position().top;

                    if (thisSswHolder.parents('aside.eltd-sidebar').length) {
                        sidebarHeight = thisSswHolder.parents('aside.eltd-sidebar').outerHeight();
                    } else if (thisSswHolder.parents('.wpb_widgetised_column').length) {
                        var sidebarShortcodeHolder = thisSswHolder.parents('.wpb_widgetised_column');
                        sidebarHeight = sidebarShortcodeHolder.parent('.wpb_wrapper').outerHeight();
                    }

                    if (thisSswHolder.parents('aside.eltd-sidebar').length) {
                        sidebarWidth = thisSswHolder.parents('aside.eltd-sidebar').width();
                    } else if (thisSswHolder.parents('.wpb_widgetised_column').length) {
                        sidebarWidth = thisSswHolder.parents('.wpb_widgetised_column').width();
                    }

                    objectsCollection.push({'object': thisSswHolder, 'offset': widgetTopOffset, 'position': widgetTopPosition, 'height': sidebarHeight, 'width': sidebarWidth});
                });
            }
        }

        function initStickySidebarWidget() {

            if (objectsCollection.length){
                $.each(objectsCollection, function(i){

                    var thisSswHolder = objectsCollection[i]['object'];
                    var thisWidgetTopOffset = objectsCollection[i]['offset'];
                    var thisWidgetTopPosition = objectsCollection[i]['position'];
                    var thisSidebarHeight = objectsCollection[i]['height'];
                    var thisSidebarWidth = objectsCollection[i]['width'];

                    if (eltd.body.hasClass('eltd-fixed-on-scroll')) {
                        headerHeightOffset = 42;
                        if ($('.eltd-fixed-wrapper').hasClass('eltd-fixed')) {
                            headerHeightOffset = $('.eltd-fixed-wrapper.eltd-fixed').height();
                        }
                    } else {
                        headerHeightOffset = $('.eltd-page-header').height();
                    }

                    if (eltd.windowWidth > 1024) {

                        var widgetBottomMargin = 65;
                        var sidebarPosition = -(thisWidgetTopPosition - headerHeightOffset - 10);
                        var stickySidebarHeight = thisSidebarHeight - thisWidgetTopPosition - widgetBottomMargin;
                        var stickySidebarRowHolderHeight = 0;
                        if (thisSswHolder.parents('aside.eltd-sidebar').length) {
                            if(thisSswHolder.parents('.eltd-content-has-sidebar').children('.eltd-content-right-from-sidebar').length) {
                                stickySidebarRowHolderHeight = thisSswHolder.parents('.eltd-content-has-sidebar').children('.eltd-content-right-from-sidebar').outerHeight();
                            } else {
                                stickySidebarRowHolderHeight = thisSswHolder.parents('.eltd-content-has-sidebar').children('.eltd-content-left-from-sidebar').outerHeight();
                            }
                        } else if (thisSswHolder.parents('.wpb_widgetised_column').length) {
                            stickySidebarRowHolderHeight = thisSswHolder.parents('.vc_row').height();
                        }

                        //move sidebar up when hits the end of section row
                        var rowSectionEndInViewport = thisWidgetTopOffset - headerHeightOffset - thisWidgetTopPosition - eltdGlobalVars.vars.eltdTopBarHeight + stickySidebarRowHolderHeight;

                        if ((eltd.scroll >= thisWidgetTopOffset - headerHeightOffset) && thisSidebarHeight < stickySidebarRowHolderHeight) {
                            if (thisSswHolder.parents('aside.eltd-sidebar').length) {
                                if(thisSswHolder.parents('aside.eltd-sidebar').hasClass('eltd-sticky-sidebar-appeared')) {
                                    thisSswHolder.parents('aside.eltd-sidebar.eltd-sticky-sidebar-appeared').css({'top': sidebarPosition+'px'});
                                } else {
                                    thisSswHolder.parents('aside.eltd-sidebar').addClass('eltd-sticky-sidebar-appeared').css({'position': 'fixed', 'top': sidebarPosition+'px', 'width': thisSidebarWidth, 'margin-top': '-10px'}).animate({'margin-top': '0'}, 200);
                                }
                            } else if (thisSswHolder.parents('.wpb_widgetised_column').length) {
                                if(thisSswHolder.parents('.wpb_widgetised_column').hasClass('eltd-sticky-sidebar-appeared')) {
                                    thisSswHolder.parents('.wpb_widgetised_column.eltd-sticky-sidebar-appeared').css({'top': sidebarPosition+'px'});
                                } else {
                                    thisSswHolder.parents('.wpb_widgetised_column').addClass('eltd-sticky-sidebar-appeared').css({'position': 'fixed', 'top': sidebarPosition+'px', 'width': thisSidebarWidth, 'margin-top': '-10px'}).animate({'margin-top': '0'}, 200);
                                }
                            }

                            if (eltd.scroll + stickySidebarHeight >= rowSectionEndInViewport) {
                                if (thisSswHolder.parents('aside.eltd-sidebar').length) {

                                    thisSswHolder.parents('aside.eltd-sidebar.eltd-sticky-sidebar-appeared').css({'position': 'absolute', 'top': stickySidebarRowHolderHeight-stickySidebarHeight+sidebarPosition-widgetBottomMargin-headerHeightOffset+'px'});

                                } else if (thisSswHolder.parents('.wpb_widgetised_column').length) {

                                    thisSswHolder.parents('.wpb_widgetised_column.eltd-sticky-sidebar-appeared').css({'position': 'absolute', 'top': stickySidebarRowHolderHeight-stickySidebarHeight+sidebarPosition-widgetBottomMargin-headerHeightOffset+'px'});
                                }
                            } else {
                                if (thisSswHolder.parents('aside.eltd-sidebar').length) {

                                    thisSswHolder.parents('aside.eltd-sidebar.eltd-sticky-sidebar-appeared').css({'position': 'fixed', 'top': sidebarPosition+'px'});

                                } else if (thisSswHolder.parents('.wpb_widgetised_column').length) {

                                    thisSswHolder.parents('.wpb_widgetised_column.eltd-sticky-sidebar-appeared').css({'position': 'fixed', 'top': sidebarPosition+'px'});
                                }
                            }
                        } else {

                            if (thisSswHolder.parents('aside.eltd-sidebar').length) {
                                thisSswHolder.parents('aside.eltd-sidebar').removeClass('eltd-sticky-sidebar-appeared').css({'position': 'relative', 'top': '0',  'width': 'auto'});
                            } else if (thisSswHolder.parents('.wpb_widgetised_column').length) {
                                thisSswHolder.parents('.wpb_widgetised_column').removeClass('eltd-sticky-sidebar-appeared').css({'position': 'relative', 'top': '0',  'width': 'auto'});
                            }
                        }
                    } else {
                        if (thisSswHolder.parents('aside.eltd-sidebar').length) {
                            thisSswHolder.parents('aside.eltd-sidebar').removeClass('eltd-sticky-sidebar-appeared').css({'position': 'relative', 'top': '0',  'width': 'auto'});
                        } else if (thisSswHolder.parents('.wpb_widgetised_column').length) {
                            thisSswHolder.parents('.wpb_widgetised_column').removeClass('eltd-sticky-sidebar-appeared').css({'position': 'relative', 'top': '0',  'width': 'auto'});
                        }
                    }
                });
            }
        }

        return {
            init: function() {
                addObjectItems();

                initStickySidebarWidget();

                $(window).scroll(function(){
                    initStickySidebarWidget();
                });
            }
        }
    }

    /*
    * IE version
    */
    function eltdIEVersion() {
        var ua = window.navigator.userAgent;
        var version;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            version = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
           // Edge (IE 12+) => return version number
           version = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        if ((version != undefined) && (version != '')) {
            eltd.body.addClass('eltd-ms-ie-'+version);
        }
    }


})(jQuery);


