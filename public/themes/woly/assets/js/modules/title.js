(function($) {
    "use strict";

    var title = {};
    eltd.modules.title = title;

    title.eltdParallaxTitle = eltdParallaxTitle;

    title.eltdOnDocumentReady = eltdOnDocumentReady;
    title.eltdOnWindowLoad = eltdOnWindowLoad;
    title.eltdOnWindowResize = eltdOnWindowResize;
    title.eltdOnWindowScroll = eltdOnWindowScroll;

    title.eltdTypeOutTitleArea = eltdTypeOutTitleArea;

    $(document).ready(eltdOnDocumentReady);
    $(window).load(eltdOnWindowLoad);
    $(window).resize(eltdOnWindowResize);
    $(window).scroll(eltdOnWindowScroll);
    
    /* 
        All functions to be called on $(document).ready() should be in this function
    */
    function eltdOnDocumentReady() {
        eltdParallaxTitle();
        eltdTypeOutTitleArea();
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

    }

    /* 
        All functions to be called on $(window).scroll() should be in this function
    */
    function eltdOnWindowScroll() {

    }
    

    /*
     **	Title image with parallax effect
     */
    function eltdParallaxTitle(){
        if($('.eltd-title.eltd-has-parallax-background').length > 0 && $('.touch').length === 0){

            var parallaxBackground = $('.eltd-title.eltd-has-parallax-background');
            var parallaxBackgroundWithZoomOut = $('.eltd-title.eltd-has-parallax-background.eltd-zoom-out');

            var backgroundSizeWidth = parseInt(parallaxBackground.data('background-width').match(/\d+/));
            var titleHolderHeight = parallaxBackground.data('height');
            var titleRate = (titleHolderHeight / 10000) * 7;
            var titleYPos = -(eltd.scroll * titleRate);

            //set position of background on doc ready
            parallaxBackground.css({'background-position': 'center '+ (titleYPos+eltdGlobalVars.vars.eltdAddForAdminBar) +'px' });
            parallaxBackgroundWithZoomOut.css({'background-size': backgroundSizeWidth-eltd.scroll + 'px auto'});

            //set position of background on window scroll
            $(window).scroll(function() {
                titleYPos = -(eltd.scroll * titleRate);
                parallaxBackground.css({'background-position': 'center ' + (titleYPos+eltdGlobalVars.vars.eltdAddForAdminBar) + 'px' });
                parallaxBackgroundWithZoomOut.css({'background-size': backgroundSizeWidth-eltd.scroll + 'px auto'});
            });

        }
    }
    /*
     * Type out functionality for Title Area
     */
    function eltdTypeOutTitleArea() {
        
        var typeOuts = $('.eltd-type-out-yes .eltd-typed');

        if (typeOuts.length) {
            typeOuts.each(function(){

                //vars
                var typeOut = $(this),
                    typeOutHolder = typeOut.parent('.eltd-typed-wrap'),
                    str,
                    string_1 = typeOut.find('.eltd-typed-strings:first-child').text(),
                    string_2 = typeOut.find('.eltd-typed-strings:nth-child(2)').text(),
                    string_3 = typeOut.find('.eltd-typed-strings:last-child').text();

                //show only the strings that are entered in
                if (!string_2.trim() || !string_3.trim() ) {
                    str = [string_1];
                }
                if (!string_3.trim() && string_2.length) {
                    str = [string_1,string_2];
                }
                if (string_1.length && string_2.length && string_3.length) {
                    str = [string_1,string_2,string_3];
                }


                //typeout
                typeOutHolder.appear(function(){
                    typeOutHolder.addClass('eltd-typing');
                    setTimeout(function(){
                        typeOut.typed({
                            strings: str,
                            typeSpeed: 60,
                            backDelay: 700,
                            loop: true,
                            contentType: 'text',
                            loopCount: true,
                            cursorChar: "",
                        });
                    },1800); // wait for CSS blink animation to end
                });

            });
        }
    }

})(jQuery);
