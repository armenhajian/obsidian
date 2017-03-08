(function($) {
    'use strict';

    var portfolio = {};
    eltd.modules.portfolio = portfolio;

    portfolio.eltdOnDocumentReady = eltdOnDocumentReady;
    portfolio.eltdOnWindowLoad = eltdOnWindowLoad;
    portfolio.eltdOnWindowResize = eltdOnWindowResize;
    portfolio.eltdOnWindowScroll = eltdOnWindowScroll;
    portfolio.eltdSetInfoSliderHeight = eltdSetInfoSliderHeight;

    portfolio.eltdPortfolioSingleMasonryImages = eltdPortfolioSingleMasonryImages;

    $(document).ready(eltdOnDocumentReady);
    $(window).load(eltdOnWindowLoad);
    $(window).resize(eltdOnWindowResize);
    $(window).scroll(eltdOnWindowScroll);
    
    /* 
        All functions to be called on $(document).ready() should be in this function
    */
    function eltdOnDocumentReady() {

    }

    /* 
        All functions to be called on $(window).load() should be in this function
    */
    function eltdOnWindowLoad() {
        eltdPortfolioSingleMasonryImages().init();
        eltdPortfolioSingleFollow().init();
        eltdSetInfoSliderHeight();
        eltd.modules.common.eltdInitParallax();
    }

    /* 
        All functions to be called on $(window).resize() should be in this function
    */
    function eltdOnWindowResize() {
        eltdSetInfoSliderHeight();
    }

    /* 
        All functions to be called on $(window).scroll() should be in this function
    */
    function eltdOnWindowScroll() {

    }

    

    var eltdPortfolioSingleFollow = function() {

        var info = $('.eltd-follow-portfolio-info .small-images.eltd-portfolio-single-holder .eltd-portfolio-info-holder, ' +
            '.eltd-follow-portfolio-info .small-slider.eltd-portfolio-single-holder .eltd-portfolio-info-holder, ' +
            '.eltd-follow-portfolio-info .masonry.eltd-portfolio-single-holder .eltd-portfolio-info-holder');

        if (info.length) {
            var infoHolder = info.parent(),
                infoHolderOffset = infoHolder.offset().top,
                infoHolderHeight = infoHolder.height(),
                mediaHolder = $('.eltd-portfolio-media, .eltd-ptf-gallery'),
                mediaHolderHeight = mediaHolder.height(),
                header = $('.header-appear, .eltd-fixed-wrapper'),
                headerHeight = (header.length) ? header.height() : 0;
        }

        var infoHolderPosition = function() {

            if(info.length) {

                if (mediaHolderHeight > infoHolderHeight) {
                    if(eltd.scroll > infoHolderOffset) {
                        info.animate({
                            marginTop: (eltd.scroll - (infoHolderOffset) + eltdGlobalVars.vars.eltdAddForAdminBar + headerHeight + 20) //20 px is for styling, spacing between header and info holder
                        });
                    }
                }

            }
        };

        var recalculateInfoHolderPosition = function() {

            if (info.length) {
                if(mediaHolderHeight > infoHolderHeight) {
                    if(eltd.scroll > infoHolderOffset) {

                        if(eltd.scroll + headerHeight + eltdGlobalVars.vars.eltdAddForAdminBar + infoHolderHeight + 20 < infoHolderOffset + mediaHolderHeight) {    //20 px is for styling, spacing between header and info holder

                            //Calculate header height if header appears
                            if ($('.header-appear, .eltd-fixed-wrapper').length) {
                                headerHeight = $('.header-appear, .eltd-fixed-wrapper').height();
                            }
                            info.stop().animate({
                                marginTop: (eltd.scroll - (infoHolderOffset) + eltdGlobalVars.vars.eltdAddForAdminBar + headerHeight + 20) //20 px is for styling, spacing between header and info holder
                            });
                            //Reset header height
                            headerHeight = 0;
                        }
                        else{
                            info.stop().animate({
                                marginTop: mediaHolderHeight - infoHolderHeight
                            });
                        }
                    } else {
                        info.stop().animate({
                            marginTop: 0
                        });
                    }
                }
            }
        };

        return {

            init : function() {

                infoHolderPosition();
                $(window).scroll(function(){
                    recalculateInfoHolderPosition();
                });

            }

        };

    };

    function eltdPortfolioSingleMasonryImages(){

        var holder = $('.eltd-portfolio-single-holder.masonry, .eltd-portfolio-single-holder.masonry-wide');
        var ptfGallery = holder.find('.eltd-ptf-gallery');
        var coeficient = 1.48; //in order to make images to be landscape
        var sizerWidth = ptfGallery.find('.eltd-ptf-gallery-sizer').outerWidth();

        var size = sizerWidth/coeficient + 23; //23px is spacing between items

        var resizeMasonryImages = function(){

            sizerWidth = ptfGallery.find('.eltd-ptf-gallery-sizer').outerWidth();
            size = sizerWidth/coeficient + 23; //23px is spacing between items

            var defaultItem = ptfGallery.find('.eltd-ptf-gallery-item.default');
            var largeHeightItem = ptfGallery.find('.eltd-ptf-img-large-height');
            var largeHeightWidthItem = ptfGallery.find('.eltd-ptf-img-large-height-width');

            defaultItem.css('height', size);
            largeHeightItem.css('height', Math.round(2*size));

            if(eltd.windowInnerWidth > 600){
                largeHeightWidthItem.css('height', Math.round(2*size));
            }else{
                largeHeightWidthItem.css('height', size);
            }


        };

        var initMasonryItems = function(){

            ptfGallery.isotope({
                itemSelector: '.eltd-ptf-gallery-item',
                masonry: {
                    columnWidth: '.eltd-ptf-gallery-sizer',
                    gutter: '.eltd-ptf-gallery-gutter'
                }
            });

        };

        return {

            init : function() {

                resizeMasonryImages();
                initMasonryItems();

                $(window).resize(function(){
                    resizeMasonryImages();
                });

            }

        };

    }

    function eltdSetInfoSliderHeight(){

        var initialHeaderHeight = $('header.eltd-page-header').outerHeight();
        var mobileHeaderHeight = eltd.windowInnerWidth < 1025 ? eltdGlobalVars.vars.eltdMobileHeaderHeight + $('.eltd-top-bar').height() : 0;
        var headerHeight;
        if(eltd.windowInnerWidth > 1025){
            headerHeight = initialHeaderHeight;
        }
        else{
            headerHeight = mobileHeaderHeight;
        }

        var adminBarHeight = $('#wpadminbar').outerHeight();
        if(adminBarHeight === 'undefined'){
            adminBarHeight = 0;
        }
        var sliderHeight = eltd.windowHeight - headerHeight - adminBarHeight;

        var templateHolder = $('.eltd-portfolio-single-holder.info-slider');
        var itemHolder = $('.eltd-portfolio-single-holder.info-slider .eltd-portfolio-single-media');

        templateHolder.waitForImages(function(){
            templateHolder.find('.eltd-portfolio-media').css('height',sliderHeight + 'px');
            templateHolder.css('height', sliderHeight + 'px');
            itemHolder.css('height', sliderHeight + 'px');
            templateHolder.css('opacity', '1');
        });

        $(window).resize(function() {
            if(eltd.windowInnerWidth > 1025){
                headerHeight = initialHeaderHeight;
            }
            else{
                headerHeight = mobileHeaderHeight;
            }

            var adminBarHeight = $('#wpadminbar').outerHeight();
            if(adminBarHeight === 'undefined'){
                adminBarHeight = 0;
            }
            var sliderHeight = eltd.windowHeight - headerHeight - adminBarHeight;

            var templateHolder = $('.eltd-portfolio-single-holder.info-slider');
            var itemHolder = $('.eltd-portfolio-single-holder.info-slider .eltd-portfolio-single-media');
            templateHolder.find('.eltd-portfolio-media').css('height',sliderHeight + 'px');
            templateHolder.css('height', sliderHeight + 'px');
            itemHolder.css('height', sliderHeight + 'px');
        });

    }

})(jQuery);