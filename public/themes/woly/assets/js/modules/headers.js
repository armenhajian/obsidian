(function($) {
    "use strict";

    var header = {};
    eltd.modules.header = header;

    header.isStickyVisible = false;
    header.stickyAppearAmount = 0;
    header.behaviour;
    header.eltdSideArea = eltdSideArea;
    header.eltdSideAreaScroll = eltdSideAreaScroll;
    header.eltdFullscreenMenu = eltdFullscreenMenu;
    header.eltdInitMobileNavigation = eltdInitMobileNavigation;
    header.eltdMobileHeaderBehavior = eltdMobileHeaderBehavior;
    header.eltdSetDropDownMenuPosition = eltdSetDropDownMenuPosition;
    header.eltdDropDownMenu = eltdDropDownMenu;
    header.eltdSearch = eltdSearch;
    header.eltdRemoveFullScreenOpener = eltdRemoveFullScreenOpener;
    header.eltdRemoveSideAreaOpener = eltdRemoveSideAreaOpener;

    header.eltdOnDocumentReady = eltdOnDocumentReady;
    header.eltdOnWindowLoad = eltdOnWindowLoad;
    header.eltdOnWindowResize = eltdOnWindowResize;
    header.eltdOnWindowScroll = eltdOnWindowScroll;

    $(document).ready(eltdOnDocumentReady);
    $(window).load(eltdOnWindowLoad);
    $(window).resize(eltdOnWindowResize);
    $(window).scroll(eltdOnWindowScroll);
    
    /* 
        All functions to be called on $(document).ready() should be in this function
    */
    function eltdOnDocumentReady() {
        eltdHeaderBehaviour();
        eltdSideArea();
        eltdSideAreaScroll();
        eltdFullscreenMenu();
        eltdInitMobileNavigation();
        eltdMobileHeaderBehavior();
        eltdSetDropDownMenuPosition();
        eltdDropDownMenu();
        eltdSearch();
        eltdVerticalMenu().init();
        eltdRemoveFullScreenOpener();
        eltdRemoveSideAreaOpener();
    }

    /* 
        All functions to be called on $(window).load() should be in this function
    */
    function eltdOnWindowLoad() {
        eltdSetDropDownMenuPosition();
    }

    /* 
        All functions to be called on $(window).resize() should be in this function
    */
    function eltdOnWindowResize() {
        eltdDropDownMenu();
    }

    /* 
        All functions to be called on $(window).scroll() should be in this function
    */
    function eltdOnWindowScroll() {
        
    }

    /*
     *	Remove fullscreen menu opener from menu widgets if disabled
     */
    function eltdRemoveFullScreenOpener(){

        var element = $('.eltd-disable-fullscreen-menu-opener .eltd-position-right-inner .widget_eltd_full_screen_menu_opener');
        if(typeof (element)!=='undefined'){
            element.remove();
        }

    }

    /*
     *	Remove SideArea opener from menu widgets if disabled
     */

    function eltdRemoveSideAreaOpener(){

        var element = $('.eltd-disable-sidemenu-area-opener .eltd-position-right-inner .widget_eltd_side_area_opener');
        if(typeof (element)!=='undefined'){
            element.remove();
        }

    }



    /*
     **	Show/Hide sticky header on window scroll
     */
    function eltdHeaderBehaviour() {

        var header = $('.eltd-page-header');
        var stickyHeader = $('.eltd-sticky-header');
        var fixedHeaderWrapper = $('.eltd-fixed-wrapper');

        var headerMenuAreaOffset = $('.eltd-page-header').find('.eltd-fixed-wrapper').length ? $('.eltd-page-header').find('.eltd-fixed-wrapper').offset().top : null;

        var stickyAppearAmount;


        switch(true) {
            // sticky header that will be shown when user scrolls up
            case eltd.body.hasClass('eltd-sticky-header-on-scroll-up'):
                eltd.modules.header.behaviour = 'eltd-sticky-header-on-scroll-up';
                var docYScroll1 = $(document).scrollTop();
                stickyAppearAmount = eltdGlobalVars.vars.eltdTopBarHeight + eltdGlobalVars.vars.eltdLogoAreaHeight + eltdGlobalVars.vars.eltdMenuAreaHeight + eltdGlobalVars.vars.eltdStickyHeaderHeight;

                var headerAppear = function(){
                    var docYScroll2 = $(document).scrollTop();

                    if((docYScroll2 > docYScroll1 && docYScroll2 > stickyAppearAmount) || (docYScroll2 < stickyAppearAmount)) {
                        eltd.modules.header.isStickyVisible= false;
                        stickyHeader.removeClass('header-appear').find('.eltd-main-menu .second').removeClass('eltd-drop-down-start');
                    }else {
                        eltd.modules.header.isStickyVisible = true;
                        stickyHeader.addClass('header-appear');
                    }

                    docYScroll1 = $(document).scrollTop();
                };
                headerAppear();

                $(window).scroll(function() {
                    headerAppear();
                });

                break;

            // sticky header that will be shown when user scrolls both up and down
            case eltd.body.hasClass('eltd-sticky-header-on-scroll-down-up'):
                eltd.modules.header.behaviour = 'eltd-sticky-header-on-scroll-down-up';

                if(eltdPerPageVars.vars.eltdStickyScrollAmount !== 0){
                    eltd.modules.header.stickyAppearAmount = eltdPerPageVars.vars.eltdStickyScrollAmount;
                }else{
                    eltd.modules.header.stickyAppearAmount = eltdGlobalVars.vars.eltdStickyScrollAmount !== 0 ? eltdGlobalVars.vars.eltdStickyScrollAmount : eltdGlobalVars.vars.eltdTopBarHeight + eltdGlobalVars.vars.eltdLogoAreaHeight + eltdGlobalVars.vars.eltdMenuAreaHeight;
                }

                var headerAppear = function(){
                    if(eltd.scroll < eltd.modules.header.stickyAppearAmount) {
                        eltd.modules.header.isStickyVisible = false;
                        stickyHeader.removeClass('header-appear').find('.eltd-main-menu .second').removeClass('eltd-drop-down-start');
                    }else{
                        eltd.modules.header.isStickyVisible = true;
                        stickyHeader.addClass('header-appear');
                    }
                };

                headerAppear();

                $(window).scroll(function() {
                    headerAppear();
                });

                break;

            // on scroll down, part of header will be sticky
            case eltd.body.hasClass('eltd-fixed-on-scroll'):
                eltd.modules.header.behaviour = 'eltd-fixed-on-scroll';
                var headerFixed = function(){
                    if(eltd.scroll < headerMenuAreaOffset){
                        fixedHeaderWrapper.removeClass('fixed');
                        header.css('margin-bottom',0);}
                    else{
                        fixedHeaderWrapper.addClass('fixed');
                        header.css('margin-bottom',fixedHeaderWrapper.height());
                    }
                };

                headerFixed();

                $(window).scroll(function() {
                    headerFixed();
                });

                break;
        }
    }

    /**
     * Show/hide side area
     */
    function eltdSideArea() {

        var wrapper = $('.eltd-wrapper'),
            sideMenu = $('.eltd-side-menu'),
            sideMenuButtonOpen = $('a.eltd-side-menu-button-opener'),
            cssClass,
        //Flags
            slideFromRight = false,
            slideWithContent = false,
            slideUncovered = false;

        if (eltd.body.hasClass('eltd-side-menu-slide-from-right')) {
            $('.eltd-cover').remove();
            cssClass = 'eltd-right-side-menu-opened';
            wrapper.prepend('<div class="eltd-cover"/>');
            slideFromRight = true;

        } else if (eltd.body.hasClass('eltd-side-menu-slide-with-content')) {

            cssClass = 'eltd-side-menu-open';
            slideWithContent = true;

        } else if (eltd.body.hasClass('eltd-side-area-uncovered-from-content')) {

            cssClass = 'eltd-right-side-menu-opened';
            slideUncovered = true;

        }

        $('a.eltd-side-menu-button-opener, a.eltd-close-side-menu').click( function(e) {
            e.preventDefault();

            if(!sideMenuButtonOpen.hasClass('opened')) {

                sideMenuButtonOpen.addClass('opened');
                eltd.body.addClass(cssClass);

                if (slideFromRight) {
                    $('.eltd-wrapper .eltd-cover').click(function() {
                        eltd.body.removeClass('eltd-right-side-menu-opened');
                        sideMenuButtonOpen.removeClass('opened');
                    });
                }

                if (slideUncovered) {
                    sideMenu.css({
                        'visibility' : 'visible'
                    });
                }

                var currentScroll = $(window).scrollTop();
                $(window).scroll(function() {
                    if(Math.abs(eltd.scroll - currentScroll) > 400){
                        eltd.body.removeClass(cssClass);
                        sideMenuButtonOpen.removeClass('opened');
                        if (slideUncovered) {
                            var hideSideMenu = setTimeout(function(){
                                sideMenu.css({'visibility':'hidden'});
                                clearTimeout(hideSideMenu);
                            },400);
                        }
                    }
                });

            } else {

                sideMenuButtonOpen.removeClass('opened');
                eltd.body.removeClass(cssClass);
                if (slideUncovered) {
                    var hideSideMenu = setTimeout(function(){
                        sideMenu.css({'visibility':'hidden'});
                        clearTimeout(hideSideMenu);
                    },400);
                }

            }

            if (slideWithContent) {

                e.stopPropagation();
                wrapper.click(function() {
                    e.preventDefault();
                    sideMenuButtonOpen.removeClass('opened');
                    eltd.body.removeClass('eltd-side-menu-open');
                });

            }

        });

    }

    /*
    **  Smooth scroll functionality for Side Area
    */
    function eltdSideAreaScroll(){

        var sideMenu = $('.eltd-side-menu');

        if(sideMenu.length){    
            sideMenu.niceScroll({ 
                scrollspeed: 60,
                mousescrollstep: 40,
                cursorwidth: 0, 
                cursorborder: 0,
                cursorborderradius: 0,
                cursorcolor: "transparent",
                autohidemode: false, 
                horizrailenabled: false 
            });
        }
    }

    /**
     * Init Fullscreen Menu
     */
    function eltdFullscreenMenu() {

        if ($('a.eltd-fullscreen-menu-opener').length) {

            var popupMenuOpener = $( 'a.eltd-fullscreen-menu-opener'),
                popupMenuHolderOuter = $(".eltd-fullscreen-menu-holder-outer"),
                cssClass,
            //Flags for type of animation
                fadeRight = false,
                fadeTop = false,
            //Widgets
                widgetAboveNav = $('.eltd-fullscreen-above-menu-widget-holder'),
                widgetBelowNav = $('.eltd-fullscreen-below-menu-widget-holder'),
            //Menu
                menuItems = $('.eltd-fullscreen-menu-holder-outer nav > ul > li > a'),
                menuItemWithChild =  $('.eltd-fullscreen-menu > ul li.has_sub > a'),
                menuItemWithoutChild = $('.eltd-fullscreen-menu ul li:not(.has_sub) a');


            //set height of popup holder and initialize nicescroll
            popupMenuHolderOuter.height(eltd.windowHeight).niceScroll({
                scrollspeed: 30,
                mousescrollstep: 20,
                cursorwidth: 0,
                cursorborder: 0,
                cursorborderradius: 0,
                cursorcolor: "transparent",
                autohidemode: false,
                horizrailenabled: false
            }); //200 is top and bottom padding of holder

            //set height of popup holder on resize
            $(window).resize(function() {
                popupMenuHolderOuter.height(eltd.windowHeight);
            });

            if (eltd.body.hasClass('eltd-fade-push-text-right')) {
                cssClass = 'eltd-push-nav-right';
                fadeRight = true;
            } else if (eltd.body.hasClass('eltd-fade-push-text-top')) {
                cssClass = 'eltd-push-text-top';
                fadeTop = true;
            }

            //Appearing animation
            if (fadeRight || fadeTop) {
                if (widgetAboveNav.length) {
                    widgetAboveNav.children().css({
                        '-webkit-animation-delay' : 0 + 'ms',
                        '-moz-animation-delay' : 0 + 'ms',
                        'animation-delay' : 0 + 'ms'
                    });
                }
                menuItems.each(function(i) {
                    $(this).css({
                        '-webkit-animation-delay': (i+1) * 70 + 'ms',
                        '-moz-animation-delay': (i+1) * 70 + 'ms',
                        'animation-delay': (i+1) * 70 + 'ms'
                    });
                });
                if (widgetBelowNav.length) {
                    widgetBelowNav.children().css({
                        '-webkit-animation-delay' : (menuItems.length + 1)*70 + 'ms',
                        '-moz-animation-delay' : (menuItems.length + 1)*70 + 'ms',
                        'animation-delay' : (menuItems.length + 1)*70 + 'ms'
                    });
                }
            }

            // Open popup menu
            popupMenuOpener.on('click',function(e){
                e.preventDefault();

                if (!popupMenuOpener.hasClass('opened')) {
                    popupMenuOpener.addClass('opened');
                    eltd.body.addClass('eltd-fullscreen-menu-opened');
                    eltd.body.removeClass('eltd-fullscreen-fade-out').addClass('eltd-fullscreen-fade-in');
                    eltd.body.removeClass(cssClass);
                    if(!eltd.body.hasClass('page-template-full_screen-php')){
                        eltd.modules.common.eltdDisableScroll();
                    }
                    $(document).keyup(function(e){
                        if (e.keyCode == 27 ) {
                            popupMenuOpener.removeClass('opened');
                            eltd.body.removeClass('eltd-fullscreen-menu-opened');
                            eltd.body.removeClass('eltd-fullscreen-fade-in').addClass('eltd-fullscreen-fade-out');
                            eltd.body.addClass(cssClass);
                            if(!eltd.body.hasClass('page-template-full_screen-php')){
                                eltd.modules.common.eltdEnableScroll();
                            }
                            $("nav.eltd-fullscreen-menu ul.sub_menu").slideUp(200, function(){
                                $('nav.popup_menu').getNiceScroll().resize();
                            });
                        }
                    });
                } else {
                    popupMenuOpener.removeClass('opened');
                    eltd.body.removeClass('eltd-fullscreen-menu-opened');
                    eltd.body.removeClass('eltd-fullscreen-fade-in').addClass('eltd-fullscreen-fade-out');
                    eltd.body.addClass(cssClass);
                    if(!eltd.body.hasClass('page-template-full_screen-php')){
                        eltd.modules.common.eltdEnableScroll();
                    }
                    $("nav.eltd-fullscreen-menu ul.sub_menu").slideUp(200, function(){
                        $('nav.popup_menu').getNiceScroll().resize();
                    });
                }
            });

            //logic for open sub menus in popup menu
            menuItemWithChild.on('tap click', function(e) {
                e.preventDefault();

                if ($(this).parent().hasClass('has_sub')) {
                    var submenu = $(this).parent().find('> ul.sub_menu');
                    if (submenu.is(':visible')) {
                        submenu.slideUp(200, function() {
                            popupMenuHolderOuter.getNiceScroll().resize();
                        });
                        $(this).parent().removeClass('open_sub');
                    } else {
                        $(this).parent().addClass('open_sub');
                        submenu.slideDown(200, function() {
                            popupMenuHolderOuter.getNiceScroll().resize();
                        });
                        $(this).parent().siblings().find('> ul.sub_menu').slideUp(200, function() {
                            popupMenuHolderOuter.getNiceScroll().resize();
                        });
                    }
                }
                return false;
            });

            //if link has no submenu and if it's not dead, than open that link
            menuItemWithoutChild.click(function (e) {

                if(($(this).attr('href') !== "http://#") && ($(this).attr('href') !== "#")){

                    if (e.which == 1) {
                        popupMenuOpener.removeClass('opened');
                        eltd.body.removeClass('eltd-fullscreen-menu-opened');
                        eltd.body.removeClass('eltd-fullscreen-fade-in').addClass('eltd-fullscreen-fade-out');
                        eltd.body.addClass(cssClass);
                        $("nav.eltd-fullscreen-menu ul.sub_menu").slideUp(200, function(){
                            $('nav.popup_menu').getNiceScroll().resize();
                        });
                        eltd.modules.common.eltdEnableScroll();
                    }
                }else{
                    return false;
                }

            });

        }



    }

    function eltdInitMobileNavigation() {
        var navigationOpener = $('.eltd-mobile-header .eltd-mobile-menu-opener');
        var navigationHolder = $('.eltd-mobile-header .eltd-mobile-nav');
        var dropdownOpener = $('.eltd-mobile-nav .mobile_arrow, .eltd-mobile-nav h4, .eltd-mobile-nav a[href*="#"]');
        var animationSpeed = 200;

        //whole mobile menu opening / closing
        if(navigationOpener.length && navigationHolder.length) {
            navigationOpener.on('tap click', function(e) {
                e.stopPropagation();
                e.preventDefault();

                if(navigationHolder.is(':visible')) {
                    navigationHolder.slideUp(animationSpeed);
                } else {
                    navigationHolder.slideDown(animationSpeed);
                }
            });
        }

        //dropdown opening / closing
        if(dropdownOpener.length) {
            dropdownOpener.each(function() {
                $(this).on('tap click', function(e) {
                    var dropdownToOpen = $(this).nextAll('ul').first();

                    if(dropdownToOpen.length) {
                        e.preventDefault();
                        e.stopPropagation();

                        var openerParent = $(this).parent('li');
                        if(dropdownToOpen.is(':visible')) {
                            dropdownToOpen.slideUp(animationSpeed);
                            openerParent.removeClass('eltd-opened');
                        } else {
                            dropdownToOpen.slideDown(animationSpeed);
                            openerParent.addClass('eltd-opened');
                        }
                    }

                });
            });
        }

        $('.eltd-mobile-nav a, .eltd-mobile-logo-wrapper a').on('click tap', function(e) {
            if($(this).attr('href') !== 'http://#' && $(this).attr('href') !== '#') {
                navigationHolder.slideUp(animationSpeed);
            }
        });
    }

    function eltdMobileHeaderBehavior() {
        if(eltd.body.hasClass('eltd-sticky-up-mobile-header')) {
            var stickyAppearAmount;
            var topBar = $('.eltd-top-bar');
            var mobileHeader = $('.eltd-mobile-header');
            var adminBar     = $('#wpadminbar');
            var mobileHeaderHeight = mobileHeader.length ? mobileHeader.height() : 0;
            var topBarHeight = topBar.is(':visible') ? topBar.height() : 0;
            var adminBarHeight = adminBar.length ? adminBar.height() : 0;

            var docYScroll1 = $(document).scrollTop();
            stickyAppearAmount = topBarHeight + mobileHeaderHeight + adminBarHeight;

            $(window).scroll(function() {
                var docYScroll2 = $(document).scrollTop();

                if(docYScroll2 > stickyAppearAmount) {
                    mobileHeader.addClass('eltd-animate-mobile-header');
                    mobileHeader.css('margin-bottom',  mobileHeaderHeight);
                } else {
                    mobileHeader.removeClass('eltd-animate-mobile-header');
                    mobileHeader.css('margin-bottom', 0);
                }

                if((docYScroll2 > docYScroll1 && docYScroll2 > stickyAppearAmount) || (docYScroll2 < stickyAppearAmount)) {
                    mobileHeader.removeClass('mobile-header-appear');
                    if(adminBar.length) {
                        mobileHeader.find('.eltd-mobile-header-inner').css('top', 0);
                    }
                } else {
                    mobileHeader.addClass('mobile-header-appear');

                }

                docYScroll1 = $(document).scrollTop();
            });
        }
    }

    /**
     * Set dropdown position
     */
    function eltdSetDropDownMenuPosition(){

        var menuItems = $(".eltd-drop-down > ul > li.narrow");
        menuItems.each( function(i) {

            var browserWidth = eltd.windowWidth-16; // 16 is width of scroll bar
            var menuItemPosition = $(this).offset().left;
            var dropdownMenuWidth = $(this).find('.second .inner ul').width();

            var menuItemFromLeft = 0;

            if(eltd.body.hasClass('boxed')){
                menuItemFromLeft = eltd.boxedLayoutWidth  - (menuItemPosition - (browserWidth - eltd.boxedLayoutWidth )/2);
            } else {
                menuItemFromLeft = browserWidth - menuItemPosition;
            }

            var dropDownMenuFromLeft; //has to stay undefined beacuse 'dropDownMenuFromLeft < dropdownMenuWidth' condition will be true

            if($(this).find('li.sub').length > 0){
                dropDownMenuFromLeft = menuItemFromLeft - dropdownMenuWidth;
            }

            if(menuItemFromLeft < dropdownMenuWidth || dropDownMenuFromLeft < dropdownMenuWidth){
                $(this).find('.second').addClass('right');
                $(this).find('.second .inner ul').addClass('right');
            }
        });

    }



    function eltdDropDownMenu() {

        var menu_items = $('.eltd-drop-down > ul > li');
        var paspartuSize = 0;

        menu_items.each(function(i) {
            if($(menu_items[i]).find('.second').length > 0) {

                var dropDownSecondDiv = $(menu_items[i]).find('.second');

                if($(menu_items[i]).hasClass('wide')) {

                    var dropdown = $(this).find('.inner > ul');
                    var dropdownPadding = parseInt(dropdown.css('padding-left').slice(0, -2)) + parseInt(dropdown.css('padding-right').slice(0, -2));
                    var headerContainer = $('.eltd-page-header .eltd-vertical-align-containers');
                    var leftPadding  = headerContainer.css('padding-left');

                    var dropdownWidth = dropdown.outerWidth();
                    if($(this).hasClass('wide_full_width')){
                        dropdownWidth = headerContainer.width();
                        dropdown.css('width', dropdownWidth + 'px');
                        dropdown.css('left', leftPadding);
                    }


                    if(!$(this).hasClass('left_position') && !$(this).hasClass('right_position')) {
                        dropDownSecondDiv.css('left', 0);
                    }

                    //set columns to be same height - start
                    var tallest = 0;
                    $(this).find('.second > .inner > ul > li').each(function() {
                        var thisHeight = $(this).height();
                        if(thisHeight > tallest) {
                            tallest = thisHeight;
                        }
                    });
                    $(this).find('.second > .inner > ul > li').css("height", ""); // delete old inline css - via resize
                    $(this).find('.second > .inner > ul > li').height(tallest);
                    //set columns to be same height - end

                    if(!$(this).hasClass('wide_background') && !$(this).hasClass('wide_full_width') ) {
                        if(!$(this).hasClass('left_position') && !$(this).hasClass('right_position')) {
                            var left_position = (eltd.windowWidth - 2 * (eltd.windowWidth - dropdown.offset().left)) / 2 + (dropdownWidth + dropdownPadding) / 2;
                            dropDownSecondDiv.css('left', -left_position);
                        }
                    } else {
                        if(!$(this).hasClass('left_position') && !$(this).hasClass('right_position')) {
                            var left_position = dropDownSecondDiv.offset().left;
                            if(eltd.body.hasClass('eltd-paspartu-enabled')){
                                paspartuSize = parseInt($('body.eltd-paspartu-enabled .eltd-wrapper').css('padding-left'));
                            }
                            if(eltd.body.hasClass('eltd-header-type2')){
                                left_position = (eltd.windowWidth - 2 * (eltd.windowWidth - dropdown.offset().left)) / 2 + (dropdownWidth + dropdownPadding) / 2;
                            }

                            dropDownSecondDiv.css('left', -left_position + paspartuSize);
                            dropDownSecondDiv.css('width', eltd.windowWidth);

                        }
                    }
                }

                if(!eltd.menuDropdownHeightSet) {
                    $(menu_items[i]).data('original_height', dropDownSecondDiv.height() + 'px');
                    dropDownSecondDiv.height(0);
                }

                if(navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
                    $(menu_items[i]).on("touchstart mouseenter", function() {
                        dropDownSecondDiv.css({
                            'height': $(menu_items[i]).data('original_height'),
                            'overflow': 'visible',
                            'visibility': 'visible',
                            'opacity': '1'
                        });
                    }).on("mouseleave", function() {
                        dropDownSecondDiv.css({
                            'height': '0px',
                            'overflow': 'hidden',
                            'visibility': 'hidden',
                            'opacity': '0'
                        });
                    });

                } else {
                    if(eltd.body.hasClass('eltd-dropdown-animate-height')) {
                        $(menu_items[i]).mouseenter(function() {
                            dropDownSecondDiv.css({
                                'visibility': 'visible',
                                'height': '0px',
                                'opacity': '0'
                            });
                            dropDownSecondDiv.stop().animate({
                                'height': $(menu_items[i]).data('original_height'),
                                opacity: 1
                            }, 200, function() {
                                dropDownSecondDiv.css('overflow', 'visible');
                            });
                        }).mouseleave(function() {
                            dropDownSecondDiv.stop().animate({
                                'height': '0px'
                            }, 0, function() {
                                dropDownSecondDiv.css({
                                    'overflow': 'hidden',
                                    'visibility': 'hidden'
                                });
                            });
                        });
                    } else {
                        var config = {
                            interval: 0,
                            over: function() {
                                setTimeout(function() {
                                    dropDownSecondDiv.addClass('eltd-drop-down-start');
                                    dropDownSecondDiv.stop().css({'height': $(menu_items[i]).data('original_height')});
                                }, 150);
                            },
                            timeout: 150,
                            out: function() {
                                dropDownSecondDiv.stop().css({'height': '0px'});
                                dropDownSecondDiv.removeClass('eltd-drop-down-start');
                            }
                        };
                        $(menu_items[i]).hoverIntent(config);
                    }
                }
            }
        });
         $('.eltd-drop-down ul li.wide ul li a').on('click', function(e) {
            if (e.which == 1){
                var $this = $(this);
                setTimeout(function() {
                    $this.mouseleave();
                }, 500);
            }
        });

        eltd.menuDropdownHeightSet = true;
    }

    /**
     * Init Search Types
     */
    function eltdSearch() {

        var searchOpener = $('a.eltd-search-opener'),
            searchClose,
            searchForm,
            touch = false;

        if ( $('html').hasClass( 'touch' ) ) {
            touch = true;
        }

        if ( searchOpener.length > 0 ) {
            //Check for type of search
            if ( eltd.body.hasClass( 'eltd-fullscreen-search' ) ) {


                searchClose = $( '.eltd-fullscreen-search-close' );
                eltdFullscreenSearch();

            } else if ( eltd.body.hasClass( 'eltd-search-covers-header' ) ) {

                eltdSearchCoversHeader();

            }

            //Check for hover color of search
            if(typeof searchOpener.data('hover-color') !== 'undefined') {
                var changeSearchColor = function(event) {
                    event.data.searchOpener.css('color', event.data.color);
                };

                var originalColor = searchOpener.css('color');
                var hoverColor = searchOpener.data('hover-color');

                searchOpener.on('mouseenter', { searchOpener: searchOpener, color: hoverColor }, changeSearchColor);
                searchOpener.on('mouseleave', { searchOpener: searchOpener, color: originalColor }, changeSearchColor);
            }

        }

        /**
         * Search covers header type of search
         */
        function eltdSearchCoversHeader() {

            searchOpener.click( function(e) {
                e.preventDefault();
                var searchFormHeight,
                    searchFormHolder = $('.eltd-search-cover .eltd-form-holder-outer'),
                    searchForm,
                    searchFormLandmark; // there is one more div element if header is in grid

                if($(this).closest('.eltd-grid').length){
                    searchForm = $(this).closest('.eltd-grid').children().first();
                    searchFormLandmark = searchForm.parent();
                }
                else{
                    searchForm = $(this).closest('.eltd-menu-area').children().first();
                    searchFormLandmark = searchForm;
                }

                if ( $(this).closest('.eltd-sticky-header').length > 0 ) {
                    searchForm = $(this).closest('.eltd-sticky-header').children().first();
                }
                if ( $(this).closest('.eltd-mobile-header').length > 0 ) {
                    searchForm = $(this).closest('.eltd-mobile-header').children().children().first();
                }

                //Find search form position in header and height
                if ( searchFormLandmark.parent().hasClass('eltd-logo-area') ) {
                    searchFormHeight = eltdGlobalVars.vars.eltdLogoAreaHeight;
                } else if ( searchFormLandmark.parent().hasClass('eltd-top-bar') ) {
                    searchFormHeight = eltdGlobalVars.vars.eltdTopBarHeight;
                } else if ( searchFormLandmark.parent().hasClass('eltd-menu-area') ) {
                    searchFormHeight = eltdGlobalVars.vars.eltdMenuAreaHeight;
                } else if ( searchFormLandmark.hasClass('eltd-sticky-header') ) {
                    searchFormHeight = eltdGlobalVars.vars.eltdMenuAreaHeight;
                } else if ( searchFormLandmark.parent().hasClass('eltd-mobile-header') ) {
                    searchFormHeight = $('.eltd-mobile-header-inner').height();
                }

                searchFormHolder.height(searchFormHeight);
                searchForm.stop(true).fadeIn(600);
                $('.eltd-search-cover input[type="text"]').focus();
                $('.eltd-search-close, .content, footer').click(function(e){
                    e.preventDefault();
                    searchForm.stop(true).fadeOut(450);
                });
                searchForm.blur(function() {
                    searchForm.stop(true).fadeOut(450);
                });
            });

        }

        /**
         * Fullscreen search (two types: fade and from circle)
         */
        function eltdFullscreenSearch() {

            var searchHolder = $( '.eltd-fullscreen-search-holder'),
                searchOverlay = $( '.eltd-fullscreen-search-overlay' );

            searchOpener.click( function(e) {
                e.preventDefault();
                var samePosition = false;
                if ( $(this).data('icon-close-same-position') === 'yes' ) {
                    var closeTop = $(this).offset().top;
                    var closeLeft = $(this).offset().left;
                    samePosition = true;
                }
               
                if ( searchHolder.hasClass( 'eltd-animate' ) ) {
                    eltd.body.removeClass('eltd-fullscreen-search-opened');
                    eltd.body.addClass( 'eltd-search-fade-out' );
                    eltd.body.removeClass( 'eltd-search-fade-in' );
                    searchHolder.removeClass( 'eltd-animate' );
                    if(!eltd.body.hasClass('page-template-full_screen-php')){
                        eltd.modules.common.eltdEnableScroll();
                    }
                } else {
                    eltd.body.addClass('eltd-fullscreen-search-opened');
                    eltd.body.removeClass('eltd-search-fade-out');
                    eltd.body.addClass('eltd-search-fade-in');
                    searchHolder.addClass('eltd-animate');
                    setTimeout(function(){
                        $('.eltd-fullscreen-search-holder .eltd-search-field').focus();
                    },300);
                    if (samePosition) {
                        searchClose.css({
                            'top' : closeTop - eltd.scroll, // Distance from top of viewport ( distance from top of window - scroll distance )
                            'left' : closeLeft
                        });
                    }
                    if(!eltd.body.hasClass('page-template-full_screen-php')){
                        eltd.modules.common.eltdDisableScroll();
                    }
                }
                searchClose.click( function(e) {
                    e.preventDefault();
                    eltd.body.removeClass('eltd-fullscreen-search-opened');
                    searchHolder.removeClass('eltd-animate');
                    eltd.body.removeClass('eltd-search-fade-in');
                    eltd.body.addClass('eltd-search-fade-out');
                    if(!eltd.body.hasClass('page-template-full_screen-php')){
                        eltd.modules.common.eltdEnableScroll();
                    }
                });
                //Close on escape
                $(document).keyup(function(e){
                    if (e.keyCode == 27 ) { //KeyCode for ESC button is 27
                        eltd.body.removeClass('eltd-fullscreen-search-opened');
                        searchHolder.removeClass('eltd-animate');
                        eltd.body.removeClass('eltd-search-fade-in');
                        eltd.body.addClass('eltd-search-fade-out');
                        if(!eltd.body.hasClass('page-template-full_screen-php')){
                            eltd.modules.common.eltdEnableScroll();
                        }
                    }
                });

                //Close on click away
                $(document).mouseup(function (e) {
                    var container = $(".eltd-form-holder");
                    if (!container.is(e.target) && container.has(e.target).length === 0)  {
                        e.preventDefault();
                        eltd.body.removeClass('eltd-fullscreen-search-opened');
                        searchHolder.removeClass('eltd-animate');
                        setTimeout(function(){
                            searchHolder.find('.eltd-search-field').val('');
                            searchHolder.find('.eltd-search-field').blur();
                        },300);
                        eltd.body.removeClass('eltd-search-fade-in');
                        eltd.body.addClass('eltd-search-fade-out');
                        if(!eltd.body.hasClass('page-template-full_screen-php')){
                            eltd.modules.common.eltdEnableScroll();
                        }
                    }
                });
            });

        }

    }

    /**
     * Function object that represents vertical menu area.
     * @returns {{init: Function}}
     */
    var eltdVerticalMenu = function() {
        /**
         * Main vertical area object that used through out function
         * @type {jQuery object}
         */
        var verticalMenuObject = $('.eltd-vertical-menu-area');

        /**
         * Resizes vertical area. Called whenever height of navigation area changes
         * It first check if vertical area is scrollable, and if it is resizes scrollable area
         */
        var resizeVerticalArea = function() {
            if(verticalAreaScrollable()) {
                verticalMenuObject.getNiceScroll().resize();
            }
        };

        /**
         * Checks if vertical area is scrollable (if it has eltd-with-scroll class)
         *
         * @returns {bool}
         */
        var verticalAreaScrollable = function() {
            return verticalMenuObject.hasClass('.eltd-with-scroll');
        };

        /**
         * Initialzes navigation functionality. It checks navigation type data attribute and calls proper functions
         */
        var initNavigation = function() {
            var verticalNavObject = verticalMenuObject.find('.eltd-vertical-menu');
            var navigationType = typeof verticalNavObject.data('navigation-type') !== 'undefined' ? verticalNavObject.data('navigation-type') : '';

            switch(navigationType) {
                case 'dropdown-toggle':
                    dropdownHoverToggle();
                    break;
                case 'dropdown-toggle-click':
                    dropdownClickToggle();
                    break;
                case 'float':
                    dropdownFloat();
                    break;
                case 'slide-in':
                    dropdownSlideIn();
                    break;
                default:
                    dropdownFloat();
                    break;
            }

            /**
             * Initializes hover toggle navigation type. It has separate functionalities for touch and no-touch devices
             */
            function dropdownHoverToggle() {
                var menuItems = verticalNavObject.find('ul li.menu-item-has-children');

                menuItems.each(function() {
                    var elementToExpand = $(this).find(' > .second, > ul');
                    var numberOfChildItems = elementToExpand.find(' > .inner > ul > li, > li').length;

                    var animSpeed = numberOfChildItems * 40;
                    var animFunc = 'easeInOutSine';
                    var that = this;

                    //touch devices functionality
                    if(Modernizr.touch) {
                        var dropdownOpener = $(this).find('> a');

                        dropdownOpener.on('click tap', function(e) {
                            e.preventDefault();
                            e.stopPropagation();

                            if(elementToExpand.is(':visible')) {
                                $(that).removeClass('open');
                                elementToExpand.slideUp(animSpeed, animFunc, function() {
                                    resizeVerticalArea();
                                });
                            } else {
                                $(that).addClass('open');
                                elementToExpand.slideDown(animSpeed, animFunc, function() {
                                    resizeVerticalArea();
                                });
                            }
                        });
                    } else {
                        $(this).hover(function() {
                            $(that).addClass('open');
                            elementToExpand.slideDown(animSpeed, animFunc, function() {
                                resizeVerticalArea();
                            });
                        }, function() {
                            setTimeout(function() {
                                $(that).removeClass('open');
                                elementToExpand.slideUp(animSpeed, animFunc, function() {
                                    resizeVerticalArea();
                                });
                            }, 1000);
                        });
                    }
                });
            }

            /**
             * Initializes click toggle navigation type. Works the same for touch and no-touch devices
             */
            function dropdownClickToggle() {
                var menuItems = verticalNavObject.find('ul li.menu-item-has-children');

                menuItems.each(function() {
                    var elementToExpand = $(this).find(' > .second, > ul');
                    var menuItem = this;
                    var dropdownOpener = $(this).find('> a');
                    var slideUpSpeed = 'fast';
                    var slideDownSpeed = 'slow';

                    dropdownOpener.on('click tap', function(e) {
                        e.preventDefault();
                        e.stopPropagation();

                        if(elementToExpand.is(':visible')) {
                            $(menuItem).removeClass('open');
                            elementToExpand.slideUp(slideUpSpeed, function() {
                                resizeVerticalArea();
                            });
                        } else {
                            if(!$(this).parents('li').hasClass('open')) {
                                menuItems.removeClass('open');
                                menuItems.find(' > .second, > ul').slideUp(slideUpSpeed);
                            }

                            $(menuItem).addClass('open');
                            elementToExpand.slideDown(slideDownSpeed, function() {
                                resizeVerticalArea();
                            });
                        }
                    });
                });
            }

            /**
             * Initializes floating navigation type (it comes from the side as a dropdown)
             */
            function dropdownFloat() {
                var menuItems = verticalNavObject.find('ul li.menu-item-has-children');
                var allDropdowns = menuItems.find(' > .second, > ul');

                menuItems.each(function() {
                    var elementToExpand = $(this).find(' > .second, > ul');
                    var menuItem = this;

                    if(Modernizr.touch) {
                        var dropdownOpener = $(this).find('> a');

                        dropdownOpener.on('click tap', function(e) {
                            e.preventDefault();
                            e.stopPropagation();

                            if(elementToExpand.hasClass('eltd-float-open')) {
                                elementToExpand.removeClass('eltd-float-open');
                                $(menuItem).removeClass('open');
                            } else {
                                if(!$(this).parents('li').hasClass('open')) {
                                    menuItems.removeClass('open');
                                    allDropdowns.removeClass('eltd-float-open');
                                }

                                elementToExpand.addClass('eltd-float-open');
                                $(menuItem).addClass('open');
                            }
                        });
                    } else {
                        //must use hoverIntent because basic hover effect doesn't catch dropdown
                        //it doesn't start from menu item's edge
                        $(this).hoverIntent({
                            over: function() {
                                elementToExpand.addClass('eltd-float-open');
                                $(menuItem).addClass('open');
                            },
                            out: function() {
                                elementToExpand.removeClass('eltd-float-open');
                                $(menuItem).removeClass('open');
                            },
                            timeout: 300
                        });
                    }
                });
            }

            /**
             * Initializes slide in navigation type (dropdowns are coming on top of parent element and cover whole navigation area)
             */
            function dropdownSlideIn() {
                var menuItems = verticalNavObject.find('ul li.menu-item-has-children');
                var menuItemsLinks = menuItems.find('> a');

                menuItemsLinks.each(function() {
                    var elementToExpand = $(this).next('.second, ul');
                    appendToExpandableElement(elementToExpand, this);

                    if($(this).parent('li').is('.current-menu-ancestor', '.current_page_parent', '.current-menu-parent ')) {
                        elementToExpand.addClass('eltd-vertical-slide-open');
                    }

                    $(this).on('click tap', function(e) {
                        e.preventDefault();
                        e.stopPropagation();

                        menuItems.removeClass('open');

                        $(this).parent('li').addClass('open');
                        elementToExpand.addClass('eltd-vertical-slide-open');
                    });
                });

                var previousLevelItems = menuItems.find('li.eltd-previous-level > a');

                previousLevelItems.on('click tap', function(e) {
                    e.preventDefault();
                    e.stopPropagation();

                    menuItems.removeClass('open');
                    $(this).parents('.eltd-vertical-slide-open').first().removeClass('eltd-vertical-slide-open');
                });

                /**
                 * Appends 'li' element as first element in dropdown, which will close current dropdown when clicked
                 * @param {jQuery object} elementToExpand current dropdown to append element to
                 * @param currentMenuItem
                 */
                function appendToExpandableElement(elementToExpand, currentMenuItem) {
                    var itemUrl = $(currentMenuItem).attr('href');
                    var itemText = $(currentMenuItem).text();

                    var liItem = $('<li />', {class: 'eltd-previous-level'});

                    $('<a />', {
                        'href': itemUrl,
                        'html': '<i class="eltd-vertical-slide-arrow fa fa-angle-left"></i>' + itemText
                    }).appendTo(liItem);

                    if(elementToExpand.hasClass('second')) {
                        elementToExpand.find('> div > ul').prepend(liItem);
                    } else {
                        elementToExpand.prepend(liItem);
                    }
                }
            }
        };

        /**
         * Initializes scrolling in vertical area. It checks if vertical area is scrollable before doing so
         */
        var initVerticalAreaScroll = function() {
            if(verticalAreaScrollable()) {
                verticalMenuObject.niceScroll({
                    scrollspeed: 60,
                    mousescrollstep: 40,
                    cursorwidth: 0,
                    cursorborder: 0,
                    cursorborderradius: 0,
                    cursorcolor: "transparent",
                    autohidemode: false,
                    horizrailenabled: false
                });
            }
        };

        var initHiddenVerticalArea = function() {
            var verticalLogo = $('.eltd-vertical-area-bottom-logo');
            var verticalMenuOpener = verticalMenuObject.find('.eltd-vertical-menu-hidden-button');
            var scrollPosition = 0;

            verticalMenuOpener.on('click tap', function() {
                if(isVerticalAreaOpen()) {
                    closeVerticalArea();
                } else {
                    openVerticalArea();
                }
            });

            //take click outside vertical left/right area and close it
            $j(verticalMenuObject).outclick({
                callback: function() {
                    closeVerticalArea();
                }
            });

            $(window).scroll(function() {
                if(Math.abs($(window).scrollTop() - scrollPosition) > 400){
                    closeVerticalArea();
                }
            });

            /**
             * Closes vertical menu area by removing 'active' class on that element
             */
            function closeVerticalArea() {
                verticalMenuObject.removeClass('active');

                if(verticalLogo.length) {
                    verticalLogo.removeClass('active');
                }
            }

            /**
             * Opens vertical menu area by adding 'active' class on that element
             */
            function openVerticalArea() {
                verticalMenuObject.addClass('active');

                if(verticalLogo.length) {
                    verticalLogo.addClass('active');
                }

                scrollPosition = $(window).scrollTop();
            }

            function isVerticalAreaOpen() {
                return verticalMenuObject.hasClass('active');
            }
        };


        return {
            /**
             * Calls all necessary functionality for vertical menu area if vertical area object is valid
             */
            init: function() {
                if(verticalMenuObject.length) {
                    initNavigation();
                    initVerticalAreaScroll();

                    if(eltd.body.hasClass('eltd-vertical-header-hidden')) {
                        initHiddenVerticalArea();
                    }
                }
            }
        };
    };

})(jQuery);