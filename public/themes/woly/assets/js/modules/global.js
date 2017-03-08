(function($) {
    "use strict";

    window.eltd = {};
    eltd.modules = {};

    eltd.scroll = 0;
    eltd.window = $(window);
    eltd.document = $(document);
    eltd.windowWidth = $(window).width();
    eltd.windowInnerWidth  = window.innerWidth;
    eltd.windowHeight = $(window).height();
    eltd.body = $('body');
    eltd.html = $('html, body');
    eltd.htmlEl = $('html');
    eltd.menuDropdownHeightSet = false;
    eltd.defaultHeaderStyle = '';
    eltd.minVideoWidth = 1500;
    eltd.videoWidthOriginal = 1280;
    eltd.videoHeightOriginal = 720;
    eltd.videoRatio = 1280/720;

    eltd.eltdOnDocumentReady = eltdOnDocumentReady;
    eltd.eltdOnWindowLoad = eltdOnWindowLoad;
    eltd.eltdOnWindowResize = eltdOnWindowResize;
    eltd.eltdOnWindowScroll = eltdOnWindowScroll;

    $(document).ready(eltdOnDocumentReady);
    $(window).load(eltdOnWindowLoad);
    $(window).resize(eltdOnWindowResize);
    $(window).scroll(eltdOnWindowScroll);
    
    /* 
        All functions to be called on $(document).ready() should be in this function
    */
    function eltdOnDocumentReady() {
        eltd.scroll = $(window).scrollTop();

        //set global variable for header style which we will use in various functions
        if(eltd.body.hasClass('eltd-dark-header')){ eltd.defaultHeaderStyle = 'eltd-dark-header';}
        if(eltd.body.hasClass('eltd-light-header')){ eltd.defaultHeaderStyle = 'eltd-light-header';}
	    eltdCalcGridWidth()
    }

    /* 
        All functions to be called on $(window).load() should be in this function
    */
    function eltdOnWindowLoad() {

    }

    /* 
        All functions to be called on $(window).resize() should be in this function
    */
    function eltdOnWindowResize() {
        eltd.windowInnerWidth = $(window).width();
        eltd.windowHeight = $(window).height();
	    eltd.windowWidth = $(window).width();
        eltdCalcGridWidth();
    }

    /* 
        All functions to be called on $(window).scroll() should be in this function
    */
    function eltdOnWindowScroll() {
        eltd.scroll = $(window).scrollTop();
    }



    //set boxed layout width variable for various calculations

    switch(true){
        case eltd.body.hasClass('eltd-grid-1300'):
            eltd.boxedLayoutWidth = 1350;
            eltd.gridWidth = 1300;
            break;
        case eltd.body.hasClass('eltd-grid-1200'):
            eltd.boxedLayoutWidth = 1250;
            eltd.gridWidth = 1200;
            break;
        case eltd.body.hasClass('eltd-grid-1000'):
            eltd.boxedLayoutWidth = 1050;
            eltd.gridWidth = 1000;
            break;
        case eltd.body.hasClass('eltd-grid-800'):
            eltd.boxedLayoutWidth = 850;
            eltd.gridWidth = 800;
            break;
        default :
            eltd.boxedLayoutWidth = 1150;
            eltd.gridWidth = 1100;
            break;
    }

    function eltdCalcGridWidth(){

        if (eltd.windowWidth <= 320){
            eltd.boxedLayoutWidth = eltd.windowWidth * 0.96;
            eltd.gridWidth = eltd.windowWidth * 0.95;
        }
        else if (eltd.windowWidth <= 480){
            eltd.boxedLayoutWidth = 350;
            eltd.gridWidth = 300;
        }
        else if (eltd.windowWidth <= 600){
            eltd.boxedLayoutWidth = 470;
            eltd.gridWidth = 420;
        }
        else if (eltd.windowWidth <= 768){
            eltd.boxedLayoutWidth = 650;
            eltd.gridWidth = 600;
        }
        else if (eltd.body.hasClass('eltd-grid-800')){
            eltd.boxedLayoutWidth = 850;
            eltd.gridWidth = 800;
        }
        else if (eltd.windowWidth <= 1024){
            eltd.boxedLayoutWidth = 818;
            eltd.gridWidth = 768;
        }
        else if (eltd.windowWidth <= 1200){
            eltd.boxedLayoutWidth = 1000;
            eltd.gridWidth = 950;
        }
        else if (eltd.body.hasClass('eltd-grid-1000')){
            eltd.boxedLayoutWidth = 1050;
            eltd.gridWidth = 1000;
        }
        else if (eltd.windowWidth <= 1300 && eltd.body.hasClass('eltd-grid-1200')){
            eltd.boxedLayoutWidth = 1150;
            eltd.gridWidth = 1100;
        }
        else if (eltd.windowWidth <= 1400 && eltd.body.hasClass('eltd-grid-1300')){
            eltd.boxedLayoutWidth = 1150;
            eltd.gridWidth = 1100;
        }
    }

})(jQuery);