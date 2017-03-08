(function($) {
    'use strict';

    var shortcodes = {};

    eltd.modules.shortcodes = shortcodes;

    shortcodes.eltdInitCounter = eltdInitCounter;
    shortcodes.eltdInitProgressBars = eltdInitProgressBars;
    shortcodes.eltdInitCountdown = eltdInitCountdown;
    shortcodes.eltdInitMessages = eltdInitMessages;
    shortcodes.eltdInitMessageHeight = eltdInitMessageHeight;
    shortcodes.eltdInitTestimonials = eltdInitTestimonials;
    shortcodes.eltdInitCarousels = eltdInitCarousels;
    shortcodes.eltdInitPieChart = eltdInitPieChart;
    shortcodes.eltdInitPieChartDoughnut = eltdInitPieChartDoughnut;
    shortcodes.eltdInitTabs = eltdInitTabs;
    shortcodes.eltdInitTabIcons = eltdInitTabIcons;
    shortcodes.eltdInitBlogListMasonry = eltdInitBlogListMasonry;
    shortcodes.eltdCustomFontResize = eltdCustomFontResize;
    shortcodes.eltdInitImageGallery = eltdInitImageGallery;
    shortcodes.eltdInitAccordions = eltdInitAccordions;
    shortcodes.eltdShowGoogleMap = eltdShowGoogleMap;
    shortcodes.eltdInitPortfolioListMasonry = eltdInitPortfolioListMasonry;
    shortcodes.eltdInitPortfolioListPinterest = eltdInitPortfolioListPinterest;
    shortcodes.eltdInitPortfolio = eltdInitPortfolio;
    shortcodes.eltdPortfolioTiledGallery = eltdPortfolioTiledGallery;
    shortcodes.eltdInitPortfolioMasonryFilter = eltdInitPortfolioMasonryFilter;
    shortcodes.eltdInitPortfolioSlider = eltdInitPortfolioSlider;
    shortcodes.eltdInitPortfolioLoadMore = eltdInitPortfolioLoadMore;
    shortcodes.eltdInitPortfolioStandardPag = eltdInitPortfolioStandardPag;
    shortcodes.eltdCheckSliderForHeaderStyle = eltdCheckSliderForHeaderStyle;
    shortcodes.eltdIntroSectionAppear = eltdIntroSectionAppear;
    shortcodes.eltdDeviceMarquee = eltdDeviceMarquee;
    shortcodes.eltdParallaxHeading = eltdParallaxHeading;
    shortcodes.eltdParallaxImages = eltdParallaxImages;
    shortcodes.eltdInitBlogCarousel = eltdInitBlogCarousel;
    shortcodes.eltdInitBlogSlider = eltdInitBlogSlider;
    shortcodes.eltdInitProductSlider = eltdInitProductSlider;
    shortcodes.eltdInfoBox = eltdInfoBox;
    shortcodes.eltdProductListFilter = eltdProductListFilter;
    shortcodes.eltdPtfFilterAnimation = eltdPtfFilterAnimation;
    shortcodes.eltdIconWithTextHover = eltdIconWithTextHover;
    shortcodes.eltdInitPortfolioAppear = eltdInitPortfolioAppear;
    shortcodes.eltdInitInteractiveElementsHolder = eltdInitInteractiveElementsHolder;
    shortcodes.eltdTypeOutSectionTitle = eltdTypeOutSectionTitle;
    shortcodes.eltdDisplayVerticalTabs = eltdDisplayVerticalTabs;
    shortcodes.eltdDragAndDropElements = eltdDragAndDropElements;
    shortcodes.eltdCardsGallery = eltdCardsGallery;
    shortcodes.eltdLazyImages = eltdLazyImages;
    shortcodes.eltdInitVerticalSplitSlider = eltdInitVerticalSplitSlider;
    shortcodes.eltdSkrollr = eltdSkrollr;
    shortcodes.eltdMarks = eltdMarks;

    shortcodes.eltdOnDocumentReady = eltdOnDocumentReady;
    shortcodes.eltdOnWindowLoad = eltdOnWindowLoad;
    shortcodes.eltdOnWindowResize = eltdOnWindowResize;
    shortcodes.eltdOnWindowScroll = eltdOnWindowScroll;

    $(document).ready(eltdOnDocumentReady);
    $(window).load(eltdOnWindowLoad);
    $(window).resize(eltdOnWindowResize);
    $(window).scroll(eltdOnWindowScroll);

    /*
     All functions to be called on $(document).ready() should be in this function
     */
    function eltdOnDocumentReady() {
        eltdInitCounter();
        eltdInitProgressBars();
        eltdInitCountdown();
        eltdIcon().init();
        eltdInitMessages();
        eltdInitMessageHeight();
        eltdInitCarousels();
        eltdInitPieChart();
        eltdInitPieChartDoughnut();
        eltdInitTabs();
        eltdInitTabIcons();
        eltdButton().init();
        eltdInitBlogListMasonry();
        eltdCustomFontResize();
        eltdInitImageGallery();
        eltdInitAccordions();
        eltdShowGoogleMap();
        eltdParallaxHeading();
        eltdParallaxImages();
        eltdInitPortfolioListMasonry();
        eltdInitPortfolioListPinterest();
        eltdInitPortfolio();
        eltdInitPortfolioMasonryFilter();
        eltdInitPortfolioSlider().init();
        eltdInitPortfolioLoadMore();
        eltdInitPortfolioStandardPag();
        eltdInitBlogCarousel().init();
        eltdSlider().init();
        eltdSocialIconWidget().init();
        eltdInitIconList().init();
        eltdInitTestimonials();
        eltdProductListFilter();
        eltdInitVideoButton();
        eltdPtfFilterAnimation();
        eltdIconWithTextHover();
        eltdTypeOutSectionTitle();
        eltdDisplayVerticalTabs();
        eltdInitProductSlider();
        eltdInitVerticalSplitSlider();
        eltdMarks();
	    eltdIntroSection();
    }

    /*
     All functions to be called on $(window).load() should be in this function
     */
    function eltdOnWindowLoad() {
        eltdContentSlider();
        setTimeout(function(){
            eltdContentScroll();
        },1000); //because of the safari mac and width calcs problems
        eltdInfoBox();
        eltdDeviceMarquee();
        eltdPortfolioTiledGallery();
        eltdInitPortfolioAppear();
        eltdInitBlogSlider();
        eltdDragAndDropElements().init();
        eltdCardsGallery();
        eltdLazyImages();
        eltdInitInteractiveElementsHolder();
    }

    /*
     All functions to be called on $(window).resize() should be in this function
     */
    function eltdOnWindowResize() {
        eltdInitBlogListMasonry();
        eltdCustomFontResize();
        eltdInitPortfolioListMasonry();
        eltdInitPortfolioListPinterest();
        eltdDisplayVerticalTabs();
        eltdInitProductSlider();
    }

    /*
     All functions to be called on $(window).scroll() should be in this function
     */
    function eltdOnWindowScroll() {
        eltdLazyImages();
    }



    /**
     * Counter Shortcode
     */
    function eltdInitCounter() {

        var counters = $('.eltd-counter');

        if (counters.length) {
            counters.each(function() {
                var counter = $(this),
                    max = parseFloat(counter.text());

                counter.text('0'); //set counters to 0

                counter.appear(function() {
                    setTimeout(function(){
                        //Counter zero type
                        if (counter.hasClass('zero')) {
                            counter.countTo({
                                from: 0,
                                to: max,
                                speed: 2000,
                                refreshInterval: 78,
                            });
                        } else {
                            counter.absoluteCounter({
                                speed: 2000,
                                fadeInDelay: 1000
                            });
                        }
                    },150);
                },{accX: 0, accY: eltdGlobalVars.vars.eltdElementAppearAmount});
            });
        }

    }

    /*
     **	Horizontal progress bars shortcode
     */
    function eltdInitProgressBars(){

        var progressBar = $('.eltd-progress-bar');

        if(progressBar.length){

            progressBar.each(function() {

                var thisBar = $(this);

                thisBar.appear(function() {
                    eltdInitToCounterProgressBar(thisBar);
                    if(thisBar.find('.eltd-floating.eltd-floating-inside') !== 0){
                        var floatingInsideMargin = thisBar.find('.eltd-progress-content').height();
                        floatingInsideMargin += parseFloat(thisBar.find('.eltd-progress-title-holder').css('padding-bottom'));
                        floatingInsideMargin += parseFloat(thisBar.find('.eltd-progress-title-holder').css('margin-bottom'));
                        thisBar.find('.eltd-floating-inside').css('margin-bottom',-(floatingInsideMargin)+'px');
                    }
                    var percentage = thisBar.find('.eltd-progress-content').data('percentage'),
                        progressContent = thisBar.find('.eltd-progress-content'),
                        progressNumber = thisBar.find('.eltd-progress-number');

                    progressContent.css('width', '0%');
                    progressContent.animate({'width': percentage+'%'}, 1500);
                    progressNumber.css('left', '0%');
                    progressNumber.animate({'left': percentage+'%'}, 1500);

                });
            });
        }
    }

    function eltdDisplayVerticalTabs(){
        var elementHolder= $('.eltd-tabs.eltd-vertical-tab');

        if(eltd.windowInnerWidth > 1024){

            if(elementHolder.length) {
                elementHolder.each(function() {
                    var thisHolder = $(this);
                    var holderWidth =thisHolder.width();
                    var list = thisHolder.children('.eltd-tabs-nav');

                    // '+1' in the next line is added in order to prevent width() function to round down

                    var listWidth = list.outerWidth() + 1;
                    list.css('width',listWidth);
                    var containerWidth = holderWidth-listWidth;
                    thisHolder.children('.eltd-tab-container').css('width',containerWidth);

                });
            }

        }

    }

    /*
     **	Counter for horizontal progress bars percent from zero to defined percent
     */
    function eltdInitToCounterProgressBar(progressBar){
        var percentage = parseFloat(progressBar.find('.eltd-progress-content').data('percentage'));
        var percent = progressBar.find('.eltd-progress-number .eltd-percent');
        if(percent.length) {
            percent.each(function() {
                var thisPercent = $(this);
                thisPercent.parents('.eltd-progress-number-wrapper').css('opacity', '1');
                thisPercent.countTo({
                    from: 0,
                    to: percentage,
                    speed: 1500,
                    refreshInterval: 50
                });
            });
        }
    }

    /*
     **	Function to close message shortcode
     */
    function eltdInitMessages(){
        var message = $('.eltd-message');
        if(message.length){
            message.each(function(){
                var thisMessage = $(this);
                thisMessage.find('.eltd-close').click(function(e){
                    e.preventDefault();
                    $(this).parent().parent().fadeOut(500);
                });
            });
        }
    }

    /*
     **	Init message height
     */
    function eltdInitMessageHeight(){
        var message = $('.eltd-message.eltd-with-icon');
        if(message.length){
            message.each(function(){
                var thisMessage = $(this);
                var textHolderHeight = thisMessage.find('.eltd-message-text-holder').height();
                var iconHolderHeight = thisMessage.find('.eltd-message-icon-holder').height();

                if(textHolderHeight > iconHolderHeight) {
                    thisMessage.find('.eltd-message-icon-holder').height(textHolderHeight);
                } else {
                    thisMessage.find('.eltd-message-text-holder').height(iconHolderHeight);
                }
            });
        }
    }

    /**
     * Countdown Shortcode
     */
    function eltdInitCountdown() {

        var countdowns = $('.eltd-countdown'),
            year,
            month,
            day,
            hour,
            minute,
            timezone,
            monthLabel,
            dayLabel,
            hourLabel,
            minuteLabel,
            secondLabel;

        if (countdowns.length) {

            countdowns.each(function(){

                //Find countdown elements by id-s
                var countdownId = $(this).attr('id'),
                    countdown = $('#'+countdownId),
                    digitFontSize,
                    labelFontSize;

                //Get data for countdown
                year = countdown.data('year');
                month = countdown.data('month');
                day = countdown.data('day');
                hour = countdown.data('hour');
                minute = countdown.data('minute');
                timezone = countdown.data('timezone');
                monthLabel = countdown.data('month-label');
                dayLabel = countdown.data('day-label');
                hourLabel = countdown.data('hour-label');
                minuteLabel = countdown.data('minute-label');
                secondLabel = countdown.data('second-label');
                digitFontSize = countdown.data('digit-size');
                labelFontSize = countdown.data('label-size');


                //Initialize countdown
                countdown.countdown({
                    until: new Date(year, month - 1, day, hour, minute, 44),
                    labels: ['Years', monthLabel, 'Weeks', dayLabel, hourLabel, minuteLabel, secondLabel],
                    format: 'ODHMS',
                    timezone: timezone,
                    padZeroes: true,
                    onTick: setCountdownStyle
                });

                function setCountdownStyle() {
                    countdown.find('.countdown-amount').css({
                        'font-size' : digitFontSize+'px',
                        'line-height' : digitFontSize+'px'
                    });
                    countdown.find('.countdown-period').css({
                        'font-size' : labelFontSize+'px'
                    });
                }

            });

        }

    }

    /**
     * Object that represents icon shortcode
     * @returns {{init: Function}} function that initializes icon's functionality
     */
    var eltdIcon = eltd.modules.shortcodes.eltdIcon = function() {
        //get all icons on page
        var icons = $('.eltd-icon-shortcode');

        /**
         * Function that triggers icon animation and icon animation delay
         */
        var iconAnimation = function(icon) {
            if(icon.hasClass('eltd-icon-animation')) {
                icon.appear(function() {
                    icon.parent('.eltd-icon-animation-holder').addClass('eltd-icon-animation-show');
                }, {accX: 0, accY: eltdGlobalVars.vars.eltdElementAppearAmount});
            }
        };

        /**
         * Function that triggers icon hover color functionality
         */
        var iconHoverColor = function(icon) {
            if(typeof icon.data('hover-color') !== 'undefined') {
                var changeIconColor = function(event) {
                    event.data.icon.css('color', event.data.color);
                };

                var iconElement = icon.find('.eltd-icon-element');
                var hoverColor = icon.data('hover-color');
                var originalColor = iconElement.css('color');

                if(hoverColor !== '') {
                    icon.on('mouseenter', {icon: iconElement, color: hoverColor}, changeIconColor);
                    icon.on('mouseleave', {icon: iconElement, color: originalColor}, changeIconColor);
                }
            }
        };

        /**
         * Function that triggers icon holder background color hover functionality
         */
        var iconHolderBackgroundHover = function(icon) {
            if(typeof icon.data('hover-background-color') !== 'undefined') {
                var changeIconBgColor = function(event) {
                    event.data.icon.css('background-color', event.data.color);
                };

                var hoverBackgroundColor = icon.data('hover-background-color');
                var originalBackgroundColor = icon.css('background-color');

                if(hoverBackgroundColor !== '') {
                    icon.on('mouseenter', {icon: icon, color: hoverBackgroundColor}, changeIconBgColor);
                    icon.on('mouseleave', {icon: icon, color: originalBackgroundColor}, changeIconBgColor);
                }
            }
        };

        /**
         * Function that initializes icon holder border hover functionality
         */
        var iconHolderBorderHover = function(icon) {
            if(typeof icon.data('hover-border-color') !== 'undefined') {
                var changeIconBorder = function(event) {
                    event.data.icon.css('border-color', event.data.color);
                };

                var hoverBorderColor = icon.data('hover-border-color');
                var originalBorderColor = icon.css('border-color');

                if(hoverBorderColor !== '') {
                    icon.on('mouseenter', {icon: icon, color: hoverBorderColor}, changeIconBorder);
                    icon.on('mouseleave', {icon: icon, color: originalBorderColor}, changeIconBorder);
                }
            }
        };

        return {
            init: function() {
                if(icons.length) {
                    icons.each(function() {
                        iconAnimation($(this));
                        iconHoverColor($(this));
                        iconHolderBackgroundHover($(this));
                        iconHolderBorderHover($(this));
                    });

                }
            }
        };
    };

    /**
     * Object that represents social icon widget
     * @returns {{init: Function}} function that initializes icon's functionality
     */
    var eltdSocialIconWidget = eltd.modules.shortcodes.eltdSocialIconWidget = function() {
        //get all social icons on page
        var icons = $('.eltd-social-icon-widget-holder');

        /**
         * Function that triggers icon hover color functionality
         */
        var socialIconHoverColor = function(icon) {
            if(typeof icon.data('hover-color') !== 'undefined') {
                var changeIconColor = function(event) {
                    event.data.icon.css('color', event.data.color);
                };

                var iconElement = icon;
                var hoverColor = icon.data('hover-color');
                var originalColor = iconElement.css('color');

                if(hoverColor !== '') {
                    icon.on('mouseenter', {icon: iconElement, color: hoverColor}, changeIconColor);
                    icon.on('mouseleave', {icon: iconElement, color: originalColor}, changeIconColor);
                }
            }
        };

        return {
            init: function() {
                if(icons.length) {
                    icons.each(function() {
                        socialIconHoverColor($(this));
                    });

                }
            }
        };
    };

    /*
     * Icon with text hover class
     */
    function eltdIconWithTextHover() {
        var iwts = $('.eltd-iwt');
        if(iwts.length) {
            iwts.each(function(){
                var iwt = $(this),
                    circleLink = iwt.find('.eltd-icon-shortcode.circle a');
                if (circleLink.length) {
                    circleLink.css('color', circleLink.parent().css('background-color'));
                    iwt.find('a').mouseenter(function(){
                        iwt.addClass('eltd-hovered');
                    });
                    iwt.find('a').mouseleave(function(){
                        iwt.removeClass('eltd-hovered');
                    });
                }
            });
        }
    }

    /**
     * Init testimonials shortcode
     */
    function eltdInitTestimonials(){

        var testimonial = $('.eltd-testimonials');
        if(testimonial.length){
            testimonial.each(function(){

                var thisTestimonial = $(this);

                thisTestimonial.waitForImages(function() {
                    thisTestimonial.css({
                        'visibility':'visible',
                        'opacity': 1
                    });
                });

                var  numberofItems = 3,
                    itemsMobile,
                    itemsMobileLandscape,
                    itemsTablet,
                    itemsTabletLandscape;

                if ( thisTestimonial.hasClass('eltd-with-icon') ) {
                    numberofItems = itemsMobile = itemsMobileLandscape = itemsTablet = itemsTabletLandscape = 1;
                } else {
                    numberofItems = thisTestimonial.data('items');
                    itemsMobile = 1;
                    itemsMobileLandscape = 2;
                    itemsTablet = 2;
                    itemsTabletLandscape = 3;
                }

                var controlNav = false;
                if (thisTestimonial.data('pagination') == 'yes')  {
                    controlNav = true;
                }

                var directionNav = false;
                if (thisTestimonial.data('navigation') == 'yes') {
                    directionNav  = true;
                }

                var autoplaySpeed,
                    autoplay = false;
                if(typeof thisTestimonial.data('autoplay-speed') !== 'undefined' && thisTestimonial.data('autoplay-speed') !== false) {
                    autoplaySpeed = thisTestimonial.data('autoplay-speed');
                    autoplay = true;
                }

                thisTestimonial.owlCarousel({
                    items: numberofItems,
                    responsive:{
                        0:{
                            items:itemsMobile,
                            nav: false,
                        },
                        600:{
                            items:itemsMobileLandscape,
                            nav: false,
                        },
                        768: {
                            items:itemsTablet,
                        },
                        1024:{
                            items:itemsTabletLandscape,
                        }
                    },
                    smartSpeed: 800,
                    autoplay:autoplay,
                    autoplayTimeout:autoplaySpeed,
                    autoplayHoverPause:true,
                    loop:true,
                    nav: directionNav,
                    dots: controlNav,
                    navText: [
                        '<span class="eltd-prev-icon"><i class="arrow_left"></i></span>',
                        '<span class="eltd-next-icon"><i class="arrow_right"></i></span>'
                    ],
                    animateOut: 'fadeOutRight',
                    animateIn: 'fadeInLeft'
                });

            });

        }

    }

    /**
     * Init Carousel shortcode
     */
    function eltdInitCarousels() {

        var carouselHolders = $('.eltd-carousel-holder'),
            carousel,
            navigation;

        if (carouselHolders.length) {
            carouselHolders.each(function(){
                var carousel = $(this).children('.eltd-carousel'),
                    numberOfItems = carousel.data('items'),
                    navigation = carousel.data('navigation') == 'yes',
                    pagination = carousel.data('pagination') == 'yes',
                    autoplayEnabled = carousel.data('autoplay') == 'yes',
                    duration = carousel.data('autoplay-duration');

                carousel.waitForImages(function(){
                    carousel.css('visibility','visible');
                });
                if (autoplayEnabled) {
                    var autoplay = true;
                    var autoplaySpeed = duration;
                } else {
                    var autoplay = false;
                    var autoplaySpeed = '';
                }

                carousel.owlCarousel({
                    items: numberOfItems,
                    responsive:{
                        0:{
                            items:1,
                            nav: false,
                        },
                        600:{
                            items:2,
                            nav: false,
                        },
                        768: {
                            items:3,
                        },
                        1024:{
                            items:numberOfItems,
                        }
                    },
                    smartSpeed: 400,
                    autoplay:autoplay,
                    autoplayTimeout:autoplaySpeed,
                    autoplayHoverPause:true,
                    loop: true,
                    dots: pagination,
                    nav: navigation,
                    navText: [
                        '<span class="eltd-prev-icon"><i class="arrow_left"></i></span>',
                        '<span class="eltd-next-icon"><i class="arrow_right"></i></span>'
                    ]
                });

            });
        }

    }

    /**
     * Init Pie Chart and Pie Chart With Icon shortcode
     */
    function eltdInitPieChart() {

        var pieCharts = $('.eltd-pie-chart-holder, .eltd-pie-chart-with-icon-holder');

        if (pieCharts.length) {

            pieCharts.each(function () {

                var pieChart = $(this),
                    percentageHolder = pieChart.children('.eltd-percentage, .eltd-percentage-with-icon'),
                    barColor = '#444444',
                    trackColor,
                    lineWidth = 4,
                    size = 165;

                if(typeof percentageHolder.data('bar-color') !== 'undefined' && percentageHolder.data('bar-color') !== '') {
                    barColor = percentageHolder.data('bar-color');
                }

                if(typeof percentageHolder.data('track-color') !== 'undefined' && percentageHolder.data('track-color') !== '') {
                    trackColor = percentageHolder.data('track-color');
                }

                if(typeof percentageHolder.data('size') !== 'undefined' && percentageHolder.data('size') !== '') {
                    size = percentageHolder.data('size');
                }

                percentageHolder.appear(function() {
                    initToCounterPieChart(pieChart);
                    percentageHolder.css('opacity', '1');

                    percentageHolder.easyPieChart({
                        barColor: barColor,
                        trackColor: trackColor,
                        scaleColor: false,
                        lineCap: 'butt',
                        lineWidth: lineWidth,
                        animate: 1500,
                        size: size
                    });
                },{accX: 0, accY: eltdGlobalVars.vars.eltdElementAppearAmount});

            });

        }

    }

    /*
     **	Counter for pie chart number from zero to defined number
     */
    function initToCounterPieChart( pieChart ){

        pieChart.css('opacity', '1');
        var counter = pieChart.find('.eltd-to-counter'),
            max = parseFloat(counter.text());
        counter.countTo({
            from: 0,
            to: max,
            speed: 1500,
            refreshInterval: 50
        });

    }

    /**
     * Init Pie Chart shortcode
     */
    function eltdInitPieChartDoughnut() {

        var pieCharts = $('.eltd-pie-chart-doughnut-holder, .eltd-pie-chart-pie-holder');

        pieCharts.each(function(){

            var pieChart = $(this),
                canvas = pieChart.find('canvas'),
                chartID = canvas.attr('id'),
                chart = document.getElementById(chartID).getContext('2d'),
                data = [],
                jqChart = $(chart.canvas); //Convert canvas to JQuery object and get data parameters

            for (var i = 1; i<=10; i++) {

                var chartItem,
                    value = jqChart.data('value-' + i),
                    color = jqChart.data('color-' + i);

                if (typeof value !== 'undefined' && typeof color !== 'undefined' ) {
                    chartItem = {
                        value : value,
                        color : color
                    };
                    data.push(chartItem);
                }

            }

            if (canvas.hasClass('eltd-pie')) {
                new Chart(chart).Pie(data,
                    {segmentStrokeColor : 'transparent'}
                );
            } else {
                new Chart(chart).Doughnut(data,
                    {segmentStrokeColor : 'transparent'}
                );
            }

        });

    }

    /*
     **	Init tabs shortcode
     */
    function eltdInitTabs(){

        var tabs = $('.eltd-tabs');
        if(tabs.length){
            tabs.each(function(){
                var thisTabs = $(this);

                thisTabs.children('.eltd-tab-container').each(function(index){
                    index = index + 1;
                    var that = $(this),
                        link = that.attr('id'),
                        navItem = that.parent().find('.eltd-tabs-nav li:nth-child('+index+') a'),
                        navLink = navItem.attr('href');

                    link = '#'+link;

                    if(link.indexOf(navLink) > -1) {
                        navItem.attr('href',link);
                    }
                });

                if(thisTabs.hasClass('eltd-horizontal-tab')){
                    thisTabs.tabs();
                } else if(thisTabs.hasClass('eltd-vertical-tab')){
                    thisTabs.tabs().addClass( 'ui-tabs-vertical ui-helper-clearfix' );
                    thisTabs.find('.eltd-tabs-nav > ul >li').removeClass( 'ui-corner-top' ).addClass( 'ui-corner-left' );
                }

                //animate tab content
                var tabContent = thisTabs.find('.eltd-tab-container');

                thisTabs.appear(function(){
                    showTabContent(tabContent);
                })

                thisTabs.find('li').each(function(){
                    var singleTab = $(this);
                    singleTab.click(function(){
                        setTimeout(function(){
                            showTabContent(tabContent);
                        },50);
                    });
                });

                function showTabContent(tabContent) {
                    tabContent.each(function(){
                        var thisTabContent = $(this);
                        if(thisTabContent.is(':visible')) {
                            thisTabContent.addClass('eltd-visible');
                        } else {
                            thisTabContent.removeClass('eltd-visible');
                        }
                    });
                }

            });
        }
    }

    /*
     **	Generate icons in tabs navigation
     */
    function eltdInitTabIcons(){

        var tabContent = $('.eltd-tab-container');
        if(tabContent.length){

            tabContent.each(function(){
                var thisTabContent = $(this);

                var id = thisTabContent.attr('id');
                var icon = '';
                if(typeof thisTabContent.data('icon-html') !== 'undefined' || thisTabContent.data('icon-html') !== 'false') {
                    icon = thisTabContent.data('icon-html');
                }

                var tabNav = thisTabContent.parents('.eltd-tabs').find('.eltd-tabs-nav > li > a[href="#'+id+'"]');

                if(typeof(tabNav) !== 'undefined') {
                    tabNav.children('.eltd-icon-frame').append(icon);
                }
            });
        }
    }

    /**
     * Button object that initializes whole button functionality
     * @type {Function}
     */
    var eltdButton = eltd.modules.shortcodes.eltdButton = function() {
        //all buttons on the page
        var buttons = $('.eltd-btn');

        /**
         * Initializes button hover color
         * @param button current button
         */
        var buttonHoverColor = function(button) {
            if(typeof button.data('hover-color') !== 'undefined') {
                var changeButtonColor = function(event) {
                    event.data.button.css('color', event.data.color);
                };

                var originalColor = button.css('color');
                var hoverColor = button.data('hover-color');

                button.on('mouseenter', { button: button, color: hoverColor }, changeButtonColor);
                button.on('mouseleave', { button: button, color: originalColor }, changeButtonColor);
            }
        };



        /**
         * Initializes button hover background color
         * @param button current button
         */
        var buttonHoverBgColor = function(button) {
            if(typeof button.data('hover-bg-color') !== 'undefined') {
                var changeButtonBg = function(event) {
                    event.data.button.css('background-color', event.data.color);
                };

                var originalBgColor = button.css('background-color');
                var hoverBgColor = button.data('hover-bg-color');

                button.on('mouseenter', { button: button, color: hoverBgColor }, changeButtonBg);
                button.on('mouseleave', { button: button, color: originalBgColor }, changeButtonBg);
            }
        };

        /**
         * Initializes button border color
         * @param button
         */
        var buttonHoverBorderColor = function(button) {
            if(typeof button.data('hover-border-color') !== 'undefined') {
                var changeBorderColor = function(event) {
                    event.data.button.css('border-color', event.data.color);
                };

                var originalBorderColor = button.css('borderTopColor'); //take one of the four sides
                var hoverBorderColor = button.data('hover-border-color');

                button.on('mouseenter', { button: button, color: hoverBorderColor }, changeBorderColor);
                button.on('mouseleave', { button: button, color: originalBorderColor }, changeBorderColor);
            }
        };

        return {
            init: function() {
                if(buttons.length) {
                    buttons.each(function() {
                        buttonHoverColor($(this));
                        buttonHoverBgColor($(this));
                        buttonHoverBorderColor($(this));
                    });
                }
            }
        };
    };

    /*
     **	Init blog list masonry type
     */
    function eltdInitBlogListMasonry(){
        var blogList = $('.eltd-blog-list-holder.eltd-masonry .eltd-blog-list');
        if(blogList.length) {
            blogList.each(function() {
                var thisBlogList = $(this);
                blogList.waitForImages(function() {
                    thisBlogList.isotope({
                        itemSelector: '.eltd-blog-list-masonry-item',
                        masonry: {
                            columnWidth: '.eltd-blog-list-masonry-grid-sizer',
                            gutter: '.eltd-blog-list-masonry-grid-gutter'
                        }
                    });
                    thisBlogList.addClass('eltd-appeared');
                });
            });

        }
    }

    /*
     **	Custom Font resizing
     */
    function eltdCustomFontResize(){
        var customFont = $('.eltd-custom-font-holder');
        if (customFont.length){
            customFont.each(function(){
                var thisCustomFont = $(this);
                var fontSize;
                var lineHeight;
                var coef1 = 1;
                var coef2 = 1;

                if (eltd.windowInnerWidth < 1200){
                    coef1 = 0.8;
                }

                if (eltd.windowInnerWidth < 1025){
                    coef1 = 0.7;
                }

                if (eltd.windowInnerWidth < 768){
                    coef1 = 0.6;
                    coef2 = 0.7;
                }

                if (eltd.windowInnerWidth < 600){
                    coef1 = 0.5;
                    coef2 = 0.6;
                }

                if (eltd.windowInnerWidth < 480){
                    coef1 = 0.4;
                    coef2 = 0.5;
                }

                if (typeof thisCustomFont.data('font-size') !== 'undefined' && thisCustomFont.data('font-size') !== false) {
                    fontSize = parseInt(thisCustomFont.data('font-size'));

                    if (fontSize > 70) {
                        fontSize = Math.round(fontSize*coef1);
                    }
                    else if (fontSize > 35) {
                        fontSize = Math.round(fontSize*coef2);
                    }

                    thisCustomFont.css('font-size',fontSize + 'px');
                }

                if (typeof thisCustomFont.data('line-height') !== 'undefined' && thisCustomFont.data('line-height') !== false) {
                    lineHeight = parseInt(thisCustomFont.data('line-height'));

                    if (lineHeight > 70 && eltd.windowInnerWidth < 1200) {
                        lineHeight = '1.2em';
                    }
                    else if (lineHeight > 35 && eltd.windowInnerWidth < 768) {
                        lineHeight = '1.2em';
                    }
                    else{
                        lineHeight += 'px';
                    }

                    thisCustomFont.css('line-height', lineHeight);
                }
            });
        }
    }

    /*
     **	Show Google Map
     */
    function eltdShowGoogleMap(){

        if($('.eltd-google-map').length){
            $('.eltd-google-map').each(function(){

                var element = $(this);

                var customMapStyle;
                if(typeof element.data('custom-map-style') !== 'undefined') {
                    customMapStyle = element.data('custom-map-style');
                }

                var colorOverlay;
                if(typeof element.data('color-overlay') !== 'undefined' && element.data('color-overlay') !== false) {
                    colorOverlay = element.data('color-overlay');
                }

                var saturation;
                if(typeof element.data('saturation') !== 'undefined' && element.data('saturation') !== false) {
                    saturation = element.data('saturation');
                }

                var lightness;
                if(typeof element.data('lightness') !== 'undefined' && element.data('lightness') !== false) {
                    lightness = element.data('lightness');
                }

                var zoom;
                if(typeof element.data('zoom') !== 'undefined' && element.data('zoom') !== false) {
                    zoom = element.data('zoom');
                }

                var pin;
                if(typeof element.data('pin') !== 'undefined' && element.data('pin') !== false) {
                    pin = element.data('pin');
                }

                var mapHeight;
                if(typeof element.data('height') !== 'undefined' && element.data('height') !== false) {
                    mapHeight = element.data('height');
                }

                var uniqueId;
                if(typeof element.data('unique-id') !== 'undefined' && element.data('unique-id') !== false) {
                    uniqueId = element.data('unique-id');
                }

                var scrollWheel;
                if(typeof element.data('scroll-wheel') !== 'undefined') {
                    scrollWheel = element.data('scroll-wheel');
                }
                var addresses;
                if(typeof element.data('addresses') !== 'undefined' && element.data('addresses') !== false) {
                    addresses = element.data('addresses');
                }

                var map = "map_"+ uniqueId;
                var geocoder = "geocoder_"+ uniqueId;
                var holderId = "eltd-map-"+ uniqueId;

                eltdInitializeGoogleMap(customMapStyle, colorOverlay, saturation, lightness, scrollWheel, zoom, holderId, mapHeight, pin,  map, geocoder, addresses);
            });
        }

    }
    /*
     **	Init Google Map
     */
    function eltdInitializeGoogleMap(customMapStyle, color, saturation, lightness, wheel, zoom, holderId, height, pin,  map, geocoder, data){

        var mapStyles = [
            {
                stylers: [
                    {hue: color },
                    {saturation: saturation},
                    {lightness: lightness},
                    {gamma: 1}
                ]
            }
        ];

        var googleMapStyleId;

        if(customMapStyle){
            googleMapStyleId = 'eltd-style';
        } else {
            googleMapStyleId = google.maps.MapTypeId.ROADMAP;
        }

        var qoogleMapType = new google.maps.StyledMapType(mapStyles,
            {name: "Elated Google Map"});

        geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(-34.397, 150.644);

        if (!isNaN(height)){
            height = height + 'px';
        }

        var myOptions = {

            zoom: zoom,
            scrollwheel: wheel,
            center: latlng,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            scaleControl: false,
            scaleControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            streetViewControl: false,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            panControl: false,
            panControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            mapTypeControl: false,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'eltd-style'],
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            mapTypeId: googleMapStyleId
        };

        map = new google.maps.Map(document.getElementById(holderId), myOptions);
        map.mapTypes.set('eltd-style', qoogleMapType);

        var index;

        for (index = 0; index < data.length; ++index) {
            eltdInitializeGoogleAddress(data[index], pin, map, geocoder);
        }

        var holderElement = document.getElementById(holderId);
        holderElement.style.height = height;
    }
    /*
     **	Init Google Map Addresses
     */
    function eltdInitializeGoogleAddress(data, pin,  map, geocoder){
        if (data === '')
            return;
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<div id="bodyContent">'+
            '<p>'+data+'</p>'+
            '</div>'+
            '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        geocoder.geocode( { 'address': data}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    icon:  pin,
                    title: data['store_title']
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map,marker);
                });

                google.maps.event.addDomListener(window, 'resize', function() {
                    map.setCenter(results[0].geometry.location);
                });

            }
        });
    }

    function eltdInitAccordions(){
        var accordion = $('.eltd-accordion-holder');
        if(accordion.length){
            accordion.each(function(){

                var thisAccordion = $(this);

                if(thisAccordion.hasClass('eltd-accordion')){

                    thisAccordion.accordion({
                        animate: "swing",
                        collapsible: true,
                        active: 0,
                        icons: "",
                        heightStyle: "content"
                    });
                }

                if(thisAccordion.hasClass('eltd-toggle')){

                    var toggleAccordion = $(this);
                    var toggleAccordionTitle = toggleAccordion.find('.eltd-title-holder');
                    var toggleAccordionContent = toggleAccordionTitle.next();

                    toggleAccordion.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset");
                    toggleAccordionTitle.addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom");
                    toggleAccordionContent.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide();

                    toggleAccordionTitle.each(function(){
                        var thisTitle = $(this);
                        thisTitle.hover(function(){
                            thisTitle.toggleClass("ui-state-hover");
                        });

                        thisTitle.on('click',function(){
                            thisTitle.toggleClass('ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom');
                            thisTitle.next().toggleClass('ui-accordion-content-active').slideToggle(400);
                        });
                    });
                }
            });
        }
    }

    function eltdInitImageGallery() {

        var galleries = $('.eltd-image-gallery');

        if (galleries.length) {
            galleries.each(function () {
                var gallery = $(this).children('.eltd-image-gallery-slides-holder');

                gallery.waitForImages(function(){
                    gallery.css('visibility','visible');
                });

                var navigation = false;
                if (gallery.data('navigation') == 'yes') {
                    navigation = true;
                }

                var pagination = false;
                if (gallery.data('pagination') == 'yes') {
                    pagination = true;
                }

                var autoplay = false,
                    autoplaySpeed;

                if ( gallery.data('autoplay') !== 'disable') {
                    autoplay = true;
                    autoplaySpeed = gallery.data('autoplay') * 1000;
                }

                var items = 1;
                if(gallery.hasClass('eltd-image-gallery-carousel')){
                    //set default value
                    items = 3;
                    if (typeof gallery.data('items') !== 'undefined' && gallery.data('items') !== false) {
                        items = gallery.data('items');
                    }
                }


                gallery.owlCarousel({
                    items: items,
                    smartSpeed: 400,
                    autoplay: autoplay,
                    autoplayTimeout: autoplaySpeed,
                    autoplayHoverPause: true,
                    loop: true,
                    nav: navigation,
                    dots: pagination,
                    mouseDrag : true,
                    touchDrag : true,
                    autoHeight: true,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:items
                        }
                    },
                    navText: [
                        '<span class="eltd-prev-icon"><span class="arrow_left"></span></span>',
                        '<span class="eltd-next-icon"><span class="arrow_right"></span></span>'
                    ]
                });
            });
        }

    }
    /**
     * Initializes portfolio list
     */
    function eltdInitPortfolio(){
        var portList = $('.eltd-portfolio-list-holder-outer.eltd-ptf-standard, .eltd-portfolio-list-holder-outer.eltd-ptf-gallery,' +
            '.eltd-portfolio-list-holder-outer.eltd-ptf-standard-no-space, .eltd-portfolio-list-holder-outer.eltd-ptf-gallery-no-space,' +
            '.eltd-portfolio-list-holder-outer.eltd-ptf-gallery-var-img-size');
        if(portList.length){
            portList.each(function(){
                var thisPortList = $(this);
                eltdInitPortMixItUp(thisPortList);
            });
        }
    }
    /**
     * Initializes mixItUp function for specific container
     */
    function eltdInitPortMixItUp(container){

        var filterClass = '';
        if(container.hasClass('eltd-ptf-has-filter')){
            filterClass = container.find('.eltd-portfolio-filter-holder-inner ul li').data('class');
            filterClass = '.'+filterClass;
        }

        var holderInner = container.find('.eltd-portfolio-list-holder');
        holderInner.mixItUp({
            callbacks: {
                onMixLoad: function(){
                    holderInner.find('article').css('visibility','visible');
                },
                onMixStart: function(){
                    holderInner.find('article').css('visibility','visible');
                },
                onMixBusy: function(){
                    holderInner.find('article').css('visibility','visible');
                },
                onMixEnd: function() {
                    eltd.modules.common.eltdInitParallax();
                    if (eltd.body.hasClass('eltd-skrollr-set')) {
                        window.eltdSkrollr.refresh();
                    }
                }
            },
            selectors: {
                filter: filterClass
            },
            animation: {
                duration: 500,
                effects: 'fade stagger(120ms) scale(0.5)',
                easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
                animateResizeContainer: true
            }
        });
    }

    function eltdPortfolioTiledGallery() {

        var portList = $('.eltd-portfolio-list-holder-outer.eltd-ptf-gallery-tiled');
        if(portList.length){
            portList.each(function() {
                var thisPortList = $(this);
                eltdInitPortfolioTiledGallery(thisPortList).init();
            })
        }

    }
    function eltdInitPortfolioTiledGallery(portList){

        var initGallery = function() {
            var gallery = portList.find('.eltd-portfolio-list-holder');

            var rowHeight = typeof portList.data('row-height') !== 'undefined' ? portList.data('row-height') : 200,
                spacing = typeof portList.data('spacing') !== 'undefined' ? portList.data('spacing') : 0,
                lastRow = typeof portList.data('last-row') !== 'undefined' ? portList.data('last-row') : 'nojustify',
                threshold = typeof portList.data('threshold') !== 'undefined' ? portList.data('threshold') : 0.75;

            setTimeout(function () {
                gallery.justifiedGallery({
                    rowHeight: rowHeight,
                    margins: spacing,
                    lastRow: lastRow,
                    justifyThreshold: threshold,
                    selector: '> article'
                }).on('jg.complete jg.rowflush', function() {
                    gallery.find('article').addClass('show');
                });
            }, 100);  //Timeout because of ajax page transitions

        };
        var initGalleryFilter = function(){
            if(portList.hasClass('eltd-ptf-has-filter')){

                var thisPortList = portList;
                var gallery = thisPortList.find('.eltd-portfolio-list-holder');
                var filterHolder = thisPortList.find('.eltd-portfolio-filter-holder');
                var filterItems = filterHolder.find('li');

                var currentItem;
                if(filterItems.length){
                    filterItems.each(function(){
                        if($(this).hasClass('active')){
                            currentItem = $(this);
                        }
                    })
                }

                if(typeof (currentItem) !== 'undefined'){
                    //filter items after ajax pagination call
                    eltdFilterPortfolioTiledGallery(currentItem);
                }else{
                    //filter items initially
                    filterItems.first().addClass('active');
                }

                //filter articles on click event
                filterHolder.find('li').on('click',function(){
                    eltdFilterPortfolioTiledGallery($(this));
                });

            }
            function eltdFilterPortfolioTiledGallery(filterItem){

                var selector = filterItem.attr('data-filter');
                var articles = gallery.find('article');
                var transitionDuration = 200;

                articles.css('transition','all '+transitionDuration+'ms ease');
                articles.not(selector).css({
                    'transform': 'scale(0)'
                });
                if(selector === '.all'){
                    articles.addClass('all');
                }
                setTimeout(function() {

                    articles.filter(selector).css({
                        'transform': ''
                    });

                    gallery.css('transition','height '+transitionDuration+'ms ease').justifiedGallery({selector: '>article'+(selector ? selector : '')});
                },  1.1*transitionDuration);
                setTimeout(function() {
                    articles.css('transition','');
                    gallery.css('transition','');
                }, 2.2*transitionDuration);

                filterItems.removeClass("active");
                filterItem.addClass("active");

                return false;

            }
        };

        return {

            init : function() {

                initGallery();
                initGalleryFilter();

            }

        };

    }
    /*
     **	Init portfolio list masonry type
     */
    function eltdInitPortfolioListMasonry(){
        var portList = $('.eltd-portfolio-list-holder-outer.eltd-ptf-masonry, .eltd-portfolio-list-holder-outer.eltd-ptf-masonry-with-space');
        if(portList.length) {
            portList.each(function() {
                var thisPortList = $(this).children('.eltd-portfolio-list-holder');

                var size = thisPortList.find('.eltd-portfolio-list-masonry-grid-sizer').width();
                eltdResizeMasonry(size,thisPortList);

                eltdInitMasonry(thisPortList);
                $(window).resize(function(){
                    eltdResizeMasonry(size,thisPortList);
                    eltdInitMasonry(thisPortList);
                });
            });
        }
    }

    function eltdInitMasonry(container){
        container.waitForImages(function() {
            container.isotope({
                itemSelector: '.eltd-portfolio-item',
                masonry: {
                    columnWidth: '.eltd-portfolio-list-masonry-grid-sizer'
                }
            });
            container.addClass('eltd-appeared');
        });
    }

    function eltdResizeMasonry(size,container){

        var defaultMasonryItem = container.find('.eltd-default-masonry-item');
        var largeWidthMasonryItem = container.find('.eltd-large-width-masonry-item');
        var largeHeightMasonryItem = container.find('.eltd-large-height-masonry-item');
        var largeWidthHeightMasonryItem = container.find('.eltd-large-width-height-masonry-item');

        defaultMasonryItem.css('height', size);
        largeWidthMasonryItem.css('height', Math.round(size));

        if(eltd.windowInnerWidth > 600){
            largeWidthHeightMasonryItem.css('height', Math.round(2*size));
            largeHeightMasonryItem.css('height', Math.round(2*size));
        }else{
            largeWidthHeightMasonryItem.css('height', size);
            largeHeightMasonryItem.css('height', size);
        }
    }
    /**
     * Initializes portfolio pinterest
     */
    function eltdInitPortfolioListPinterest(){

        var portList = $('.eltd-portfolio-list-holder-outer.eltd-ptf-pinterest');
        if(portList.length) {
            portList.each(function() {
                var thisPortList = $(this).children('.eltd-portfolio-list-holder');
                eltdInitPinterest(thisPortList);
                $(window).resize(function(){
                    eltdInitPinterest(thisPortList);
                });
            });

        }
    }

    function eltdInitPinterest(container){
        container.waitForImages(function() {
            container.isotope({
                itemSelector: '.eltd-portfolio-item',
                masonry: {
                    columnWidth: '.eltd-portfolio-list-masonry-grid-sizer'
                }
            });
        });
        container.addClass('eltd-appeared');

    }
    /**
     * Initializes portfolio masonry filter
     */
    function eltdInitPortfolioMasonryFilter(){

        var filterHolder = $('.eltd-portfolio-filter-holder.eltd-masonry-filter');

        if(filterHolder.length){
            filterHolder.each(function(){

                var thisFilterHolder = $(this);

                var portfolioIsotopeAnimation = null;

                var filter = thisFilterHolder.find('ul li').data('class');

                thisFilterHolder.find('.filter:first').addClass('active');

                thisFilterHolder.find('.filter').click(function(){

                    var currentFilter = $(this);
                    clearTimeout(portfolioIsotopeAnimation);

                    $('.isotope, .isotope .isotope-item').css('transition-duration','0.8s');

                    portfolioIsotopeAnimation = setTimeout(function(){
                        $('.isotope, .isotope .isotope-item').css('transition-duration','0s');
                    },700);

                    var selector = $(this).attr('data-filter');
                    thisFilterHolder.siblings('.eltd-portfolio-list-holder-outer').find('.eltd-portfolio-list-holder').isotope({ filter: selector });

                    thisFilterHolder.find('.filter').removeClass('active');
                    currentFilter.addClass('active');

                    return false;

                });

            });
        }
    }
    /**
     * Initializes portfolio slider
     */

    function eltdInitPortfolioSlider(){
        var portfolioOwlSliders = function(){
            var portSlider = $('.eltd-portfolio-slider-holder.eltd-ptf-gallery, .eltd-portfolio-slider-holder.eltd-ptf-standard');
            if(portSlider.length){
                portSlider.each(function(){
                    var thisPortSlider = $(this);
                    var sliderWrapper = thisPortSlider.children('.eltd-portfolio-list-holder');
                    var numberOfItems = thisPortSlider.data('items');


                    var navigation = false;
                    if (thisPortSlider.data('navigation') == 'yes') {
                        navigation = true;
                    }

                    var pagination = false;
                    if (thisPortSlider.data('pagination') == 'yes') {
                        pagination = true;
                    }

                    thisPortSlider.appear(function(){
                        sliderWrapper.owlCarousel({
                            autoPlay: 3000,
                            items: numberOfItems,
                            responsive:{
                                0:{
                                    items:1,
                                    nav: false,
                                    dots:true,
                                },
                                480:{
                                    items:2,
                                    nav: false,
                                    dots:true,
                                },
                                768: {
                                    items:3,
                                    dots:false,
                                },
                                1024:{
                                    items:numberOfItems,
                                }
                            },
                            smartSpeed: 600,
                            autoplay:true,
                            autoplayTimeout:3000,
                            autoplayHoverPause:true,
                            loop:false,
                            dots: pagination,
                            nav: navigation,
                            navText: [
                                '<span class="eltd-prev-icon"><span class="arrow_left"></span></span>',
                                '<span class="eltd-next-icon"><span class="arrow_right"></span></span>'
                            ]
                        });
                    },{accX: 0, accY: 200});
                });
            }
        }
        var portfolioSlickSliders = function(){
            var portSlider = $('.eltd-portfolio-slider-holder.eltd-ptf-gallery-var-img-size');
            if(portSlider.length){
                portSlider.each(function(){
                    var thisPortSlider = $(this);
                    var sliderWrapper = thisPortSlider.children('.eltd-portfolio-list-holder');

                    thisPortSlider.waitForImages(function(){
                        thisPortSlider.delay(2000).animate({opacity:1},1000);
                    });

                    var navigation = false;
                    if (thisPortSlider.data('navigation') == 'yes') {
                        navigation = true;
                    }

                    var pagination = false;
                    if (thisPortSlider.data('pagination') == 'yes') {
                        pagination = true;
                    }

                    sliderWrapper.slick({
                        dots: pagination,
                        infinite: true,
                        speed: 800,
                        slidesToShow: 1,
                        variableWidth: true,
                        centerMode: true,
                        arrows: navigation,
                        autoplay:true,
                        autoplaySpeed: 2000,
                        prevArrow: '<i class="arrow_left left"></i>',
                        nextArrow: '<i class="arrow_right right"></i>'
                    });
                });
            }
        }
        return{
            init: function(){
                portfolioOwlSliders();
                portfolioSlickSliders();
            }
        }

    }
    /**
     * Initializes portfolio load more function
     */
    function eltdInitPortfolioLoadMore(){
        var portList = $('.eltd-portfolio-list-holder-outer.eltd-ptf-load-more');
        if(portList.length){
            portList.each(function(){

                var thisPortList = $(this);
                var nextPage;
                var maxNumPages;
                var loadMoreButton = thisPortList.find('.eltd-ptf-list-load-more a');

                if (typeof thisPortList.data('max-num-pages') !== 'undefined' && thisPortList.data('max-num-pages') !== false) {
                    maxNumPages = thisPortList.data('max-num-pages');
                }

                loadMoreButton.on('click', function (e) {
                    var loadMoreDatta = eltdGetPortfolioAjaxData(thisPortList);
                    nextPage = loadMoreDatta.nextPage;
                    e.preventDefault();
                    e.stopPropagation();
                    loadMoreButton.closest('.eltd-ptf-list-paging').removeClass('eltd-appeared'); //hide button on click
                    if(nextPage <= maxNumPages){
                        var ajaxData = eltdSetPortfolioAjaxData(loadMoreDatta);

                        //generate ajax response
                        eltdPtfGetAjaxResponse(thisPortList, ajaxData, nextPage, 'load-more');

                    }
                    if(nextPage === maxNumPages){
                        loadMoreButton.hide();
                    }
                });

            });
        }
    }

    function eltdInitPortfolioStandardPag(){

        var portList = $('.eltd-portfolio-list-holder-outer.eltd-ptf-standard-pagination');
        if(portList.length){
            portList.each(function(){

                var thisPortList = $(this);
                var pagHolder = $(this).find('.eltd-ptf-standard-pag-holder');
                var pagItem = pagHolder.find('ul li');
                var choosenPage;
                var maxNumPages;
                var previousPageId;
                if (typeof thisPortList.data('max-num-pages') !== 'undefined' && thisPortList.data('max-num-pages') !== false) {
                    maxNumPages = thisPortList.data('max-num-pages');
                }

                //set first page to be active on init
                pagItem.eq(1).addClass('active');

                pagItem.on('click', function (e) {

                    e.preventDefault();
                    e.stopPropagation();
                    //this is for prev and next button
                    pagItem.removeClass('eltd-disabled-pag-item');

                    //get previous pagination page id.This is important because of next and prev buttons
                    if(pagItem.length){
                        pagItem.each(function(){

                            if($(this).hasClass('active')){
                                previousPageId = $(this).data('current-page');
                            }

                        });
                    }

                    var thisPagItem = $(this);

                    var loadMoreDatta = eltdGetPortfolioAjaxData(thisPortList);

                    //get id of selected pagination page
                    choosenPage = parseInt(thisPagItem.data('current-page'));


                    //define choosenPage if is prev button clicked
                    if(thisPagItem.hasClass('eltd-pagination-prev')){

                        if(previousPageId === 1){
                            choosenPage = false;
                        }else{
                            choosenPage = previousPageId - 1;
                        }

                    }
                    //define choosenPage if is next button clicked
                    if(thisPagItem.hasClass('eltd-pagination-next')){

                        if(previousPageId === maxNumPages){
                            choosenPage = false;
                        }else{
                            choosenPage = previousPageId + 1;
                        }
                    }

                    //set nextPage attr for ajax function
                    loadMoreDatta.nextPage = choosenPage;
                    var ajaxData = eltdSetPortfolioAjaxData(loadMoreDatta);

                    //generate ajax response
                    if(choosenPage){

                        //remove active class from current page and set active class for page which will be loaded
                        pagItem.removeClass('active');
                        if(pagItem.length){
                            pagItem.each(function(){

                                if(parseInt($(this).data('current-page')) === choosenPage){
                                    $(this).addClass('active');
                                }
                            });
                        }
                        //call ajax functionality
                        eltdPtfGetAjaxResponse(thisPortList, ajaxData, choosenPage, 'standard-pagination');
                    }
                    else{
                        //set class to disable prev/next button
                        thisPagItem.addClass('eltd-disabled-pag-item');
                    }
                });

            });
        }

    }


    /*
     * Portfolio appear effect
     */
    function eltdInitPortfolioAppear() {
        var ptfLists = $('.eltd-portfolio-list-holder-outer.eltd-appear-effect');
        if (ptfLists.length) {
            ptfLists.each(function(){
                var thisPortfolioList = $(this);
                if (thisPortfolioList.hasClass('eltd-ptf-one-by-one')) {
                    var article = thisPortfolioList.find('article'),
                        loadMore = thisPortfolioList.find('.eltd-ptf-list-paging'),
                        articleCounter = 0,
                        animateCycle, // rewind delay initial
                        animateCycleCounter = 0;

                    article.each(function(){
                        var thisArticle = $(this);
                        if(thisArticle.offset().top == article.first().offset().top) {
                            articleCounter ++;
                        }
                    })
                    animateCycle = articleCounter + 1;


                    article.each(function(){
                        var thisArticle = $(this);
                        setTimeout(function(){
                            thisArticle.appear(function(){
                                animateCycleCounter ++;
                                if(animateCycleCounter == animateCycle) {
                                    animateCycleCounter = 0;
                                }
                                setTimeout(function(){
                                    thisArticle.addClass('eltd-appeared');
                                },animateCycleCounter * 150);
                            },{accX: 0, accY: 0});
                        },30);
                    });

                    if(loadMore.length){
                        loadMore.addClass('eltd-appeared');
                    }
                }
            });
        }
    }

    /*
     * Portfolio list filter hover animation
     */
    function eltdPtfFilterAnimation() {
        var ptfFilters = $('.eltd-portfolio-filter-holder')
        if (ptfFilters.length) {
            ptfFilters.each(function(){
                var ptfFilter = $(this),
                    filterItem = ptfFilter.find('li'),
                    filterLine = ptfFilter.find('.eltd-filter-line');

                filterLine.css({width: filterItem.first().outerWidth()});
                filterLine.css({left: 0});

                filterItem.each(function(){
                    var thisItem = $(this);
                    thisItem.mouseenter(function(){
                        filterLine.css({width: thisItem.outerWidth()});
                        filterLine.css({left: thisItem.offset().left - thisItem.parent().offset().left});
                    });
                });

                ptfFilters.mouseleave(function(){
                    if (filterItem.filter('.active').length) {
                        filterLine.css({width: filterItem.filter('.active').outerWidth()});
                        filterLine.css({left: filterItem.filter('.active').offset().left - filterItem.filter('.active').parent().offset().left});
                    } else {
                        filterLine.css({width: filterItem.first().outerWidth()});
                        filterLine.css({left: 0});
                    }
                });
            });
        }
    }

    function eltdPtfGetAjaxResponse(container, ajaxParams, nextPage, action){

        var containerInner = container.find('.eltd-portfolio-list-holder');

        $.ajax({
            type: 'POST',
            data: ajaxParams,
            url: eltdCoreAjaxUrl,
            success: function (data) {
                nextPage++;
                container.data('next-page', nextPage);
                var response = $.parseJSON(data);
                var responseHtml = eltdConvertHTML(response.html); //convert response html into jQuery collection that Mixitup can work with


                container.waitForImages(function(){
                    if(action === 'standard-pagination'){
                        //remove previous articles
                        containerInner.find('article').remove();
                    }

                    if(container.hasClass('eltd-ptf-masonry') || container.hasClass('eltd-ptf-masonry-with-sapce') || container.hasClass('eltd-ptf-pinterest') ){
                        setTimeout(function(){
                            containerInner.isotope().append( responseHtml ).isotope( 'appended', responseHtml ).isotope('reloadItems');
                            eltdInitPortfolioAppear();
                        },300);
                    }else if(container.hasClass('eltd-ptf-gallery-tiled')){

                        containerInner.append(responseHtml);
                        container.waitForImages(function(){
                            setTimeout(function(){
                                eltdInitPortfolioTiledGallery(container).init();
                                eltdInitPortfolioAppear();
                            },300);
                        });

                    }
                    else {
                        containerInner.mixItUp('append' , responseHtml,function(){
                            eltdInitPortfolioAppear();
                        });
                    };
                });

            }
        });
    }

    function eltdConvertHTML ( html ) {
        var newHtml = $.trim( html ),
            $html = $(newHtml ),
            $empty = $();

        $html.each(function ( index, value ) {
            if ( value.nodeType === 1) {
                $empty = $empty.add ( this );
            }
        });

        return $empty;
    }

    /**
     * Initializes portfolio load more data params
     * @param portfolio list container with defined data params
     * return array
     */
    function eltdGetPortfolioAjaxData(container){
        var returnValue = {};

        returnValue.type = '';
        returnValue.columns = '';
        returnValue.gridSize = '';
        returnValue.orderBy = '';
        returnValue.order = '';
        returnValue.number = '';
        returnValue.imageSize = '';
        returnValue.filter = '';
        returnValue.filterOrderBy = '';
        returnValue.category = '';
        returnValue.selectedProjectes = '';
        returnValue.enablePagination = '';
        returnValue.paginationType = '';
        returnValue.titleTag = '';
        returnValue.nextPage = '';
        returnValue.maxNumPages = '';
        returnValue.showExcerpt = '';
        returnValue.showExcerptOnHover = '';
        returnValue.excerptLength = '';

        if (typeof container.data('type') !== 'undefined' && container.data('type') !== false) {
            returnValue.type = container.data('type');
        }
        if (typeof container.data('grid-size') !== 'undefined' && container.data('grid-size') !== false) {
            returnValue.gridSize = container.data('grid-size');
        }
        if (typeof container.data('columns') !== 'undefined' && container.data('columns') !== false) {
            returnValue.columns = container.data('columns');
        }
        if (typeof container.data('order-by') !== 'undefined' && container.data('order-by') !== false) {
            returnValue.orderBy = container.data('order-by');
        }
        if (typeof container.data('order') !== 'undefined' && container.data('order') !== false) {
            returnValue.order = container.data('order');
        }
        if (typeof container.data('number') !== 'undefined' && container.data('number') !== false) {
            returnValue.number = container.data('number');
        }
        if (typeof container.data('image-size') !== 'undefined' && container.data('image-size') !== false) {
            returnValue.imageSize = container.data('image-size');
        }
        if (typeof container.data('show-excerpt') !== 'undefined' && container.data('show-excerpt') !== false) {
            returnValue.showExcerpt = container.data('show-excerpt');
        }
        if (typeof container.data('show-excerpt-on-hover') !== 'undefined' && container.data('show-excerpt-on-hover') !== false) {
            returnValue.showExcerptOnHover = container.data('show-excerpt-on-hover');
        }
        if (typeof container.data('excerpt-length') !== 'undefined' && container.data('excerpt-length') !== false) {
            returnValue.excerptLength = container.data('excerpt-length');
        }
        if (typeof container.data('filter') !== 'undefined' && container.data('filter') !== false) {
            returnValue.filter = container.data('filter');
        }
        if (typeof container.data('filter-order-by') !== 'undefined' && container.data('filter-order-by') !== false) {
            returnValue.filterOrderBy = container.data('filter-order-by');
        }
        if (typeof container.data('category') !== 'undefined' && container.data('category') !== false) {
            returnValue.category = container.data('category');
        }
        if (typeof container.data('selected-projects') !== 'undefined' && container.data('selected-projects') !== false) {
            returnValue.selectedProjectes = container.data('selected-projects');
        }
        if (typeof container.data('enable-pagination') !== 'undefined' && container.data('enable-pagination') !== false) {
            returnValue.enablePagination = container.data('enable-pagination');
        }
        if (typeof container.data('pagination-type') !== 'undefined' && container.data('pagination-type') !== false) {
            returnValue.paginationType = container.data('pagination-type');
        }
        if (typeof container.data('title-tag') !== 'undefined' && container.data('title-tag') !== false) {
            returnValue.titleTag = container.data('title-tag');
        }
        if (typeof container.data('next-page') !== 'undefined' && container.data('next-page') !== false) {
            returnValue.nextPage = container.data('next-page');
        }
        if (typeof container.data('max-num-pages') !== 'undefined' && container.data('max-num-pages') !== false) {
            returnValue.maxNumPages = container.data('max-num-pages');
        }
        return returnValue;
    }
    /**
     * Sets portfolio load more data params for ajax function
     * @param portfolio list container with defined data params
     * return array
     */
    function eltdSetPortfolioAjaxData(container){
        var returnValue = {
            action: 'eltd_core_portfolio_ajax_load_more',
            type: container.type,
            columns: container.columns,
            gridSize: container.gridSize,
            orderBy: container.orderBy,
            order: container.order,
            number: container.number,
            imageSize: container.imageSize,
            showExcerpt: container.showExcerpt,
            showExcerptOnHover: container.showExcerptOnHover,
            excerptLength: container.excerptLength,
            filter: container.filter,
            filterOrderBy: container.filterOrderBy,
            category: container.category,
            selectedProjectes: container.selectedProjectes,
            enablePagination: container.enablePagination,
            paginationType: container.paginationType,
            titleTag: container.titleTag,
            nextPage: container.nextPage
        };
        return returnValue;
    }

    /**
     * Slider object that initializes whole slider functionality
     * @type {Function}
     */
    var eltdSlider = eltd.modules.shortcodes.eltdSlider = function() {

        //all sliders on the page
        var sliders = $('.eltd-slider .carousel');
        //image regex used to extract img source
        var imageRegex = /url\(["']?([^'")]+)['"]?\)/;

        /*** Functionality for translating image in slide - START ***/

        var matrixArray = { zoom_center : '1.2, 0, 0, 1.2, 0, 0', zoom_top_left: '1.2, 0, 0, 1.2, -150, -150', zoom_top_right : '1.2, 0, 0, 1.2, 150, -150', zoom_bottom_left: '1.2, 0, 0, 1.2, -150, 150', zoom_bottom_right: '1.2, 0, 0, 1.2, 150, 150'};

        // regular expression for parsing out the matrix components from the matrix string
        var matrixRE = /\([0-9epx\.\, \t\-]+/gi;

        // parses a matrix string of the form "matrix(n1,n2,n3,n4,n5,n6)" and
        // returns an array with the matrix components
        var parseMatrix = function (val) {
            return val.match(matrixRE)[0].substr(1).
            split(",").map(function (s) {
                return parseFloat(s);
            });
        };

        // transform css property names with vendor prefixes;
        // the plugin will check for values in the order the names are listed here and return as soon as there
        // is a value; so listing the W3 std name for the transform results in that being used if its available
        var transformPropNames = [
            "transform",
            "-webkit-transform"
        ];

        var getTransformMatrix = function (el) {
            // iterate through the css3 identifiers till we hit one that yields a value
            var matrix = null;
            transformPropNames.some(function (prop) {
                matrix = el.css(prop);
                return (matrix !== null && matrix !== "");
            });

            // if "none" then we supplant it with an identity matrix so that our parsing code below doesn't break
            matrix = (!matrix || matrix === "none") ?
                "matrix(1,0,0,1,0,0)" : matrix;
            return parseMatrix(matrix);
        };

        // set the given matrix transform on the element; note that we apply the css transforms in reverse order of how its given
        // in "transformPropName" to ensure that the std compliant prop name shows up last
        var setTransformMatrix = function (el, matrix) {
            var m = "matrix(" + matrix.join(",") + ")";
            for (var i = transformPropNames.length - 1; i >= 0; --i) {
                el.css(transformPropNames[i], m + ' rotate(0.01deg)');
            }
        };

        // interpolates a value between a range given a percent
        var interpolate = function (from, to, percent) {
            return from + ((to - from) * (percent / 100));
        };

        $.fn.transformAnimate = function (opt) {
            // extend the options passed in by caller
            var options = {
                transform: "matrix(1,0,0,1,0,0)"
            };
            $.extend(options, opt);

            // initialize our custom property on the element to track animation progress
            this.css("percentAnim", 0);

            // supplant "options.step" if it exists with our own routine
            var sourceTransform = getTransformMatrix(this);
            var targetTransform = parseMatrix(options.transform);
            options.step = function (percentAnim, fx) {
                // compute the interpolated transform matrix for the current animation progress
                var $this = $(this);
                var matrix = sourceTransform.map(function (c, i) {
                    return interpolate(c, targetTransform[i],
                        percentAnim);
                });

                // apply the new matrix
                setTransformMatrix($this, matrix);

                // invoke caller's version of "step" if one was supplied;
                if (opt.step) {
                    opt.step.apply(this, [matrix, fx]);
                }
            };

            // animate!
            return this.stop().animate({ percentAnim: 100 }, options);
        };

        /*** Functionality for translating image in slide - END ***/


        /**
         * Calculate heights for slider holder and slide item, depending on window width, but only if slider is set to be responsive
         * @param slider, current slider
         * @param defaultHeight, default height of slider, set in shortcode
         * @param responsive_breakpoint_set, breakpoints set for slider responsiveness
         * @param reset, boolean for reseting heights
         */
        var setSliderHeight = function(slider, defaultHeight, responsive_breakpoint_set, reset) {
            var sliderHeight = defaultHeight;
            if(!reset) {
                if(eltd.windowInnerWidth > responsive_breakpoint_set[0]) {
                    sliderHeight = defaultHeight;
                } else if(eltd.windowInnerWidth > responsive_breakpoint_set[1]) {
                    sliderHeight = defaultHeight * 0.75;
                } else if(eltd.windowInnerWidth > responsive_breakpoint_set[2]) {
                    sliderHeight = defaultHeight * 0.6;
                } else if(eltd.windowInnerWidth > responsive_breakpoint_set[3]) {
                    sliderHeight = defaultHeight * 0.55;
                } else if(eltd.windowInnerWidth <= responsive_breakpoint_set[3]) {
                    sliderHeight = defaultHeight * 0.45;
                }
            }

            slider.css({'height': (sliderHeight) + 'px'});
            slider.find('.eltd-slider-preloader').css({'height': (sliderHeight) + 'px'});
            slider.find('.eltd-slider-preloader .eltd-ajax-loader').css({'display': 'block'});
            slider.find('.item').css({'height': (sliderHeight) + 'px'});
            if(eltdPerPageVars.vars.eltdStickyScrollAmount === 0) {
                eltd.modules.header.stickyAppearAmount = sliderHeight; //set sticky header appear amount if slider there is no amount entered on page itself
            }
        };

        /**
         * Calculate heights for slider holder and slide item, depending on window size, but only if slider is set to be full height
         * @param slider, current slider
         */
        var setSliderFullHeight = function(slider) {
            var gap;
            //mobile header has white background and then slider should have something like paspartu on mobile devices
            var mobileHeaderHeight = eltd.windowInnerWidth < 1025 ? eltdGlobalVars.vars.eltdMobileHeaderHeight*1.5 + $('.eltd-top-bar').height() : 0;

            var topPaspartu = parseInt($('body.eltd-paspartu-enabled .eltd-wrapper').css('padding-top'));

            if(typeof topPaspartu === 'undefined' || topPaspartu === null || isNaN(topPaspartu)){
                topPaspartu = 0;
            }
            var paspartuSize = topPaspartu;

            //if is set header type 2
            var pageHeader = $('body.eltd-header-type2 .eltd-page-header').outerHeight()/2;
            if(typeof pageHeader === 'undefined' || pageHeader === null || isNaN(pageHeader)){
                pageHeader = 0;
            }
            pageHeader = eltd.windowInnerWidth > 1024 ? pageHeader : 0;

            //if is set header standard and transparency on that page is disabled
            var headerStandardHeight = $('body.eltd-header-standard.eltd-header-standard-disable-transparency .eltd-page-header').outerHeight()/2;
            if(typeof headerStandardHeight === 'undefined' || headerStandardHeight === null || isNaN(headerStandardHeight)){
                headerStandardHeight = 0;
            }
            headerStandardHeight = eltd.windowInnerWidth > 1024 ? headerStandardHeight : 0;

            if(slider.hasClass('eltd-slider-show-bottom-paspartu')){
                gap =  mobileHeaderHeight + 2*paspartuSize + pageHeader + headerStandardHeight;
            }else{
                gap = 0;
            }
            slider.css({'height': (eltd.windowHeight - gap) + 'px'});
            slider.find('.eltd-slider-preloader').css({'height': (eltd.windowHeight - gap) + 'px'});
            slider.find('.eltd-slider-preloader .eltd-ajax-loader').css({'display': 'block'});
            slider.find('.item').css({'height': (eltd.windowHeight - gap) + 'px'});
            if(eltdPerPageVars.vars.eltdStickyScrollAmount === 0) {
                eltd.modules.header.stickyAppearAmount = eltd.windowHeight; //set sticky header appear amount if slider there is no amount entered on page itself
            }
        };

        var setElementsResponsiveness = function(slider) {
            // Basic text styles responsiveness
            slider
                .find('.eltd-slide-element-text-small, .eltd-slide-element-text-normal, .eltd-slide-element-text-large, .eltd-slide-element-text-extra-large')
                .each(function() {
                    var element = $(this);
                    if (typeof element.data('default-font-size') === 'undefined') { element.data('default-font-size', parseInt(element.css('font-size'),10)); }
                    if (typeof element.data('default-line-height') === 'undefined') { element.data('default-line-height', parseInt(element.css('line-height'),10)); }
                    if (typeof element.data('default-letter-spacing') === 'undefined') { element.data('default-letter-spacing', parseInt(element.css('letter-spacing'),10)); }
                });
            // Advanced text styles responsiveness
            slider.find('.eltd-slide-element-responsive-text').each(function() {
                if (typeof $(this).data('default-font-size') === 'undefined') { $(this).data('default-font-size', parseInt($(this).css('font-size'),10)); }
                if (typeof $(this).data('default-line-height') === 'undefined') { $(this).data('default-line-height', parseInt($(this).css('line-height'),10)); }
                if (typeof $(this).data('default-letter-spacing') === 'undefined') { $(this).data('default-letter-spacing', parseInt($(this).css('letter-spacing'),10)); }
            });
            // Button responsiveness
            slider.find('.eltd-slide-element-responsive-button').each(function() {
                if (typeof $(this).data('default-font-size') === 'undefined') { $(this).data('default-font-size', parseInt($(this).find('a').css('font-size'),10)); }
                if (typeof $(this).data('default-line-height') === 'undefined') { $(this).data('default-line-height', parseInt($(this).find('a').css('line-height'),10)); }
                if (typeof $(this).data('default-letter-spacing') === 'undefined') { $(this).data('default-letter-spacing', parseInt($(this).find('a').css('letter-spacing'),10)); }
                if (typeof $(this).data('default-ver-padding') === 'undefined') { $(this).data('default-ver-padding', parseInt($(this).find('a').css('padding-top'),10)); }
                if (typeof $(this).data('default-hor-padding') === 'undefined') { $(this).data('default-hor-padding', parseInt($(this).find('a').css('padding-left'),10)); }
            });
            // Margins for non-custom layouts
            slider.find('.eltd-slide-element').each(function() {
                var element = $(this);
                if (typeof element.data('default-margin-top') === 'undefined') { element.data('default-margin-top', parseInt(element.css('margin-top'),10)); }
                if (typeof element.data('default-margin-bottom') === 'undefined') { element.data('default-margin-bottom', parseInt(element.css('margin-bottom'),10)); }
                if (typeof element.data('default-margin-left') === 'undefined') { element.data('default-margin-left', parseInt(element.css('margin-left'),10)); }
                if (typeof element.data('default-margin-right') === 'undefined') { element.data('default-margin-right', parseInt(element.css('margin-right'),10)); }
            });
            adjustElementsSizes(slider);
        };

        var adjustElementsSizes = function(slider) {
            var boundaries = {
                // These values must match those in map.php (for slider), slider.php and eltd.layout.inc
                mobile: 600,
                tabletp: 800,
                tabletl: 1024,
                laptop: 1440
            };
            slider.find('.eltd-slider-elements-container').each(function() {
                var container = $(this);
                var target = container.filter('.eltd-custom-elements').add(container.not('.eltd-custom-elements').find('.eltd-slider-elements-holder-frame')).not('.eltd-grid');
                if (target.length) {
                    if (boundaries.mobile >= eltd.windowInnerWidth && typeof container.attr('data-width-mobile') !== 'undefined') {
                        target.css('width', container.data('width-mobile') + '%');
                    }
                    else if (boundaries.tabletp >= eltd.windowInnerWidth && typeof container.attr('data-width-tablet-p') !== 'undefined' ) {
                        target.css('width', container.data('width-tablet-p') + '%');
                    }
                    else if (boundaries.tabletl >= eltd.windowInnerWidth && typeof container.attr('data-width-tablet-l') !== 'undefined' ) {
                        target.css('width', container.data('width-tablet-l') + '%');
                    }
                    else if (boundaries.laptop >= eltd.windowInnerWidth && typeof container.attr('data-width-laptop') !== 'undefined' ) {
                        target.css('width', container.data('width-laptop') + '%');
                    }
                    else if ( typeof container.attr('data-width-desktop') !== 'undefined' ){
                        target.css('width', container.data('width-desktop') + '%');
                    }
                }
            });
            slider.find('.item').each(function() {
                var slide = $(this);
                var def_w = slide.find('.eltd-slider-elements-holder-frame').data('default-width');
                var elements = slide.find('.eltd-slide-element');

                // Adjusting margins for all elements
                elements.each(function() {
                    var element = $(this);
                    var def_m_top = element.data('default-margin-top'),
                        def_m_bot = element.data('default-margin-bottom'),
                        def_m_l = element.data('default-margin-left'),
                        def_m_r = element.data('default-margin-right');
                    var scale_data = (typeof element.data('resp-scale') !== 'undefined') ? element.data('resp-scale') : undefined;
                    var factor;

                    if (boundaries.mobile >= eltd.windowInnerWidth) {
                        factor = (typeof scale_data === 'undefined') ? eltd.windowInnerWidth / def_w : parseFloat(scale_data.mobile);
                    }
                    else if (boundaries.tabletp >= eltd.windowInnerWidth) {
                        factor = (typeof scale_data === 'undefined') ? eltd.windowInnerWidth / def_w : parseFloat(scale_data.tabletp);
                    }
                    else if (boundaries.tabletl >= eltd.windowInnerWidth) {
                        factor = (typeof scale_data === 'undefined') ? eltd.windowInnerWidth / def_w : parseFloat(scale_data.tabletl);
                    }
                    else if (boundaries.laptop >= eltd.windowInnerWidth) {
                        factor = (typeof scale_data === 'undefined') ? eltd.windowInnerWidth / def_w : parseFloat(scale_data.laptop);
                    }
                    else {
                        factor = (typeof scale_data === 'undefined') ? eltd.windowInnerWidth / def_w : parseFloat(scale_data.desktop);
                    }

                    element.css({
                        'margin-top': Math.round(factor * def_m_top )+ 'px',
                        'margin-bottom': Math.round(factor * def_m_bot )+ 'px',
                        'margin-left': Math.round(factor * def_m_l )+ 'px',
                        'margin-right': Math.round(factor * def_m_r) + 'px'
                    });
                });

                // Adjusting responsiveness
                elements
                    .filter('.eltd-slide-element-responsive-text, .eltd-slide-element-responsive-button, .eltd-slide-element-responsive-image')
                    .add(elements.find('a.eltd-slide-element-responsive-text, span.eltd-slide-element-responsive-text'))
                    .each(function() {
                        var element = $(this);
                        var scale_data = (typeof element.data('resp-scale') !== 'undefined') ? element.data('resp-scale') : undefined,
                            left_data = (typeof element.data('resp-left') !== 'undefined') ? element.data('resp-left') : undefined,
                            top_data = (typeof element.data('resp-top') !== 'undefined') ? element.data('resp-top') : undefined;
                        var factor, new_left, new_top;

                        if (boundaries.mobile >= eltd.windowInnerWidth) {
                            factor = (typeof scale_data === 'undefined') ? eltd.windowInnerWidth / def_w : parseFloat(scale_data.mobile);
                            new_left = (typeof left_data === 'undefined') ? (typeof element.data('left') !== 'undefined' ? element.data('left')+'%' : '') : (left_data.mobile != '' ? left_data.mobile+'%' : element.data('left')+'%');
                            new_top = (typeof top_data === 'undefined') ? (typeof element.data('top') !== 'undefined' ? element.data('top')+'%' : '') : (top_data.mobile != '' ? top_data.mobile+'%' : element.data('top')+'%');
                        }
                        else if (boundaries.tabletp >= eltd.windowInnerWidth) {
                            factor = (typeof scale_data === 'undefined') ? eltd.windowInnerWidth / def_w : parseFloat(scale_data.tabletp);
                            new_left = (typeof left_data === 'undefined') ? (typeof element.data('left') !== 'undefined' ? element.data('left')+'%' : '') : (left_data.tabletp != '' ? left_data.tabletp+'%' : element.data('left')+'%');
                            new_top = (typeof top_data === 'undefined') ? (typeof element.data('top') !== 'undefined' ? element.data('top')+'%' : '') : (top_data.tabletp != '' ? top_data.tabletp+'%' : element.data('top')+'%');
                        }
                        else if (boundaries.tabletl >= eltd.windowInnerWidth) {
                            factor = (typeof scale_data === 'undefined') ? eltd.windowInnerWidth / def_w : parseFloat(scale_data.tabletl);
                            new_left = (typeof left_data === 'undefined') ? (typeof element.data('left') !== 'undefined' ? element.data('left')+'%' : '') : (left_data.tabletl != '' ? left_data.tabletl+'%' : element.data('left')+'%');
                            new_top = (typeof top_data === 'undefined') ? (typeof element.data('top') !== 'undefined' ? element.data('top')+'%' : '') : (top_data.tabletl != '' ? top_data.tabletl+'%' : element.data('top')+'%');
                        }
                        else if (boundaries.laptop >= eltd.windowInnerWidth) {
                            factor = (typeof scale_data === 'undefined') ? eltd.windowInnerWidth / def_w : parseFloat(scale_data.laptop);
                            new_left = (typeof left_data === 'undefined') ? (typeof element.data('left') !== 'undefined' ? element.data('left')+'%' : '') : (left_data.laptop != '' ? left_data.laptop+'%' : element.data('left')+'%');
                            new_top = (typeof top_data === 'undefined') ? (typeof element.data('top') !== 'undefined' ? element.data('top')+'%' : '') : (top_data.laptop != '' ? top_data.laptop+'%' : element.data('top')+'%');
                        }
                        else {
                            factor = (typeof scale_data === 'undefined') ? eltd.windowInnerWidth / def_w : parseFloat(scale_data.desktop);
                            new_left = (typeof left_data === 'undefined') ? (typeof element.data('left') !== 'undefined' ? element.data('left')+'%' : '') : (left_data.desktop != '' ? left_data.desktop+'%' : element.data('left')+'%');
                            new_top = (typeof top_data === 'undefined') ? (typeof element.data('top') !== 'undefined' ? element.data('top')+'%' : '') : (top_data.desktop != '' ? top_data.desktop+'%' : element.data('top')+'%');
                        }

                        if (!factor) {
                            element.hide();
                        }
                        else {
                            element.show();
                            var def_font_size,
                                def_line_h,
                                def_let_spac,
                                def_ver_pad,
                                def_hor_pad;

                            if (element.is('.eltd-slide-element-responsive-button')) {
                                def_font_size = element.data('default-font-size');
                                def_line_h = element.data('default-line-height');
                                def_let_spac = element.data('default-letter-spacing');
                                def_ver_pad = element.data('default-ver-padding');
                                def_hor_pad = element.data('default-hor-padding');

                                element.css({
                                        'left': new_left,
                                        'top': new_top
                                    })
                                    .find('.eltd-btn').css({
                                    'font-size': Math.round(factor * def_font_size) + 'px',
                                    'line-height': Math.round(factor * def_line_h) + 'px',
                                    'letter-spacing': Math.round(factor * def_let_spac) + 'px',
                                    'padding-left': Math.round(factor * def_hor_pad) + 'px',
                                    'padding-right': Math.round(factor * def_hor_pad) + 'px',
                                    'padding-top': Math.round(factor * def_ver_pad) + 'px',
                                    'padding-bottom': Math.round(factor * def_ver_pad) + 'px'
                                });
                            }
                            else if (element.is('.eltd-slide-element-responsive-image')) {
                                if (factor != eltd.windowInnerWidth / def_w) { // if custom factor has been set for this screen width
                                    var up_w = element.data('upload-width'),
                                        up_h = element.data('upload-height');

                                    element.filter('.custom-image').css({
                                            'left': new_left,
                                            'top': new_top
                                        })
                                        .add(element.not('.custom-image').find('img'))
                                        .css({
                                            'width': Math.round(factor * up_w) + 'px',
                                            'height': Math.round(factor * up_h) + 'px'
                                        });
                                }
                                else {
                                    var w = element.data('width');

                                    element.filter('.custom-image').css({
                                            'left': new_left,
                                            'top': new_top
                                        })
                                        .add(element.not('.custom-image').find('img'))
                                        .css({
                                            'width': w + '%',
                                            'height': ''
                                        });
                                }
                            }
                            else {
                                def_font_size = element.data('default-font-size');
                                def_line_h = element.data('default-line-height');
                                def_let_spac = element.data('default-letter-spacing');

                                element.css({
                                    'left': new_left,
                                    'top': new_top,
                                    'font-size': Math.round(factor * def_font_size) + 'px',
                                    'line-height': Math.round(factor * def_line_h) + 'px',
                                    'letter-spacing': Math.round(factor * def_let_spac) + 'px'
                                });
                            }
                        }
                    });
            });
            var nav = slider.find('.carousel-indicators');
            slider.find('.eltd-slide-element-section-link').css('bottom', nav.length ? parseInt(nav.css('bottom'),10) + nav.outerHeight() + 10 + 'px' : '20px');
        };

        var checkButtonsAlignment = function(slider) {
            slider.find('.item').each(function() {
                var inline_buttons = $(this).find('.eltd-slide-element-button-inline');
                inline_buttons.css('display', 'inline-block').wrapAll('<div class="eltd-slide-elements-buttons-wrapper" style="text-align: ' + inline_buttons.eq(0).css('text-align') + ';"/>');
            });
        };

        /**
         * Set heights for slider and elemnts depending on slider settings (full height, responsive height od set height)
         * @param slider, current slider
         */
        var setHeights =  function(slider) {

            var responsiveBreakpointSet = [1600,1200,900,650,500,320];

            setElementsResponsiveness(slider);

            if(slider.hasClass('eltd-full-screen')){

                setSliderFullHeight(slider);

                $(window).resize(function() {
                    setSliderFullHeight(slider);
                    adjustElementsSizes(slider);
                });

            }else if(slider.hasClass('eltd-responsive-height')){

                var defaultHeight = slider.data('height');
                setSliderHeight(slider, defaultHeight, responsiveBreakpointSet, false);

                $(window).resize(function() {
                    setSliderHeight(slider, defaultHeight, responsiveBreakpointSet, false);
                    adjustElementsSizes(slider);
                });

            }else {
                var defaultHeight = slider.data('height');

                slider.find('.eltd-slider-preloader').css({'height': (slider.height()) + 'px'});
                slider.find('.eltd-slider-preloader .eltd-ajax-loader').css({'display': 'block'});

                eltd.windowInnerWidth < 1025 ? setSliderHeight(slider, defaultHeight, responsiveBreakpointSet, false) : setSliderHeight(slider, defaultHeight, responsiveBreakpointSet, true);

                $(window).resize(function() {
                    if(eltd.windowInnerWidth < 1025){
                        setSliderHeight(slider, defaultHeight, responsiveBreakpointSet, false);
                    }else{
                        setSliderHeight(slider, defaultHeight, responsiveBreakpointSet, true);
                    }
                    adjustElementsSizes(slider);
                });
            }
        };

        /**
         * Set prev/next numbers on navigation arrows
         * @param slider, current slider
         * @param currentItem, current slide item index
         * @param totalItemCount, total number of slide items
         */
        var setPrevNextNumbers = function(slider, currentItem, totalItemCount) {
            if(currentItem == 1){
                slider.find('.left.carousel-control .prev').html(totalItemCount);
                slider.find('.right.carousel-control .next').html(currentItem + 1);
            }else if(currentItem == totalItemCount){
                slider.find('.left.carousel-control .prev').html(currentItem - 1);
                slider.find('.right.carousel-control .next').html(1);
            }else{
                slider.find('.left.carousel-control .prev').html(currentItem - 1);
                slider.find('.right.carousel-control .next').html(currentItem + 1);
            }
        };

        /**
         * Set video background size
         * @param slider, current slider
         */
        var initVideoBackgroundSize = function(slider){
            var min_w = 1500; // minimum video width allowed
            var video_width_original = 1920;  // original video dimensions
            var video_height_original = 1080;
            var vid_ratio = 1920/1080;

            slider.find('.item .eltd-video .eltd-video-wrap').each(function(){

                var slideWidth = eltd.windowInnerWidth;
                var slideHeight = $(this).closest('.carousel').height();

                $(this).width(slideWidth);

                min_w = vid_ratio * (slideHeight+20);
                $(this).height(slideHeight);

                var scale_h = slideWidth / video_width_original;
                var scale_v = (slideHeight - eltdGlobalVars.vars.eltdMenuAreaHeight) / video_height_original;
                var scale =  scale_v;
                if (scale_h > scale_v)
                    scale =  scale_h;
                if (scale * video_width_original < min_w) {scale = min_w / video_width_original;}

                $(this).find('video, .mejs-overlay, .mejs-poster').width(Math.ceil(scale * video_width_original +2));
                $(this).find('video, .mejs-overlay, .mejs-poster').height(Math.ceil(scale * video_height_original +2));
                $(this).scrollLeft(($(this).find('video').width() - slideWidth) / 2);
                $(this).find('.mejs-overlay, .mejs-poster').scrollTop(($(this).find('video').height() - slideHeight) / 2);
                $(this).scrollTop(($(this).find('video').height() - slideHeight) / 2);
            });
        };

        /**
         * Init video background
         * @param slider, current slider
         */
        var initVideoBackground = function(slider) {
            $('.item .eltd-video-wrap .eltd-video-element').mediaelementplayer({
                enableKeyboard: false,
                iPadUseNativeControls: false,
                pauseOtherPlayers: false,
                // force iPhone's native controls
                iPhoneUseNativeControls: false,
                // force Android's native controls
                AndroidUseNativeControls: false
            });

            initVideoBackgroundSize(slider);
            $(window).resize(function() {
                initVideoBackgroundSize(slider);
            });

            //mobile check
            if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)){
                $('.eltd-slider .eltd-mobile-video-image').show();
                $('.eltd-slider .eltd-video-wrap').remove();
            }
        };

        var initPeek = function(slider) {
            if (slider.hasClass('eltd-slide-peek')) {

                var navArrowHover = function(arrow, entered) {
                    var dir = arrow.is('.left') ? 'left' : 'right';
                    var targ_peeker = peekers.filter('.'+dir);
                    if (entered) {
                        arrow.addClass('hovered');
                        var targ_item = (items.index(items.filter('.active')) + (dir=='left' ? -1 : 1) + items.length) % items.length;
                        targ_peeker.find('.eltd-slider-peeker-inner').css({
                            'background-image': items.eq(targ_item).find('.eltd-image, .eltd-mobile-video-image').css('background-image'),
                            'width': itemWidth + 'px'
                        });
                        targ_peeker.addClass('shown');
                    }
                    else {
                        arrow.removeClass('hovered');
                        peekers.removeClass('shown');
                    }
                };

                var navBulletHover = function(bullet, entered) {
                    if (entered) {
                        bullet.addClass('hovered');

                        var targ_item = bullet.data('slide-to');
                        var cur_item = items.index(items.filter('.active'));
                        if (cur_item != targ_item) {
                            var dir = (targ_item < cur_item) ? 'left' : 'right';
                            var targ_peeker = peekers.filter('.'+dir);
                            targ_peeker.find('.eltd-slider-peeker-inner').css({
                                'background-image': items.eq(targ_item).find('.eltd-image, .eltd-mobile-video-image').css('background-image'),
                                'width': itemWidth + 'px'
                            });
                            targ_peeker.addClass('shown');
                        }
                    }
                    else {
                        bullet.removeClass('hovered');
                        peekers.removeClass('shown');
                    }
                };

                var handleResize = function() {
                    itemWidth = items.filter('.active').width();
                    itemWidth += (itemWidth % 2) ? 1 : 0; // To make it even
                    items.children('.eltd-image, .eltd-video').css({
                        'position': 'absolute',
                        'width': itemWidth + 'px',
                        'height': '110%',
                        'left': '50%',
                        'transform': 'translateX(-50%)'
                    });
                };

                var items = slider.find('.item');
                var itemWidth;
                handleResize();
                $(window).resize(handleResize);

                slider.find('.carousel-inner').append('<div class="eltd-slider-peeker left"><div class="eltd-slider-peeker-inner"></div></div><div class="eltd-slider-peeker right"><div class="eltd-slider-peeker-inner"></div></div>');
                var peekers = slider.find('.eltd-slider-peeker');
                var nav_arrows = slider.find('.carousel-control');
                var nav_bullets = slider.find('.carousel-indicators > li');

                nav_arrows
                    .hover(
                        function() {
                            navArrowHover($(this), true);
                        },
                        function() {
                            navArrowHover($(this), false);
                        }
                    );

                nav_bullets
                    .hover(
                        function() {
                            navBulletHover($(this), true);
                        },
                        function() {
                            navBulletHover($(this), false);
                        }
                    );

                slider.on('slide.bs.carousel', function() {
                    setTimeout(function() {
                        peekers.addClass('eltd-slide-peek-in-progress').removeClass('shown');
                    }, 500);
                });

                slider.on('slid.bs.carousel', function() {
                    nav_arrows.filter('.hovered').each(function() {
                        navArrowHover($(this), true);
                    });
                    setTimeout(function() {
                        nav_bullets.filter('.hovered').each(function() {
                            navBulletHover($(this), true);
                        });
                    }, 200);
                    peekers.removeClass('eltd-slide-peek-in-progress');
                });
            }
        };

        var updateNavigationThumbs = function(slider) {
            if (slider.hasClass('eltd-slider-thumbs')) {
                var src, prev_image, next_image;
                var all_items_count = slider.find('.item').length;
                var curr_item = slider.find('.item').index($('.item.active')[0]) + 1;
                setPrevNextNumbers(slider, curr_item, all_items_count);

                // prev thumb
                if(slider.find('.item.active').prev('.item').length){
                    if(slider.find('.item.active').prev('div').find('.eltd-image').length){
                        src = imageRegex.exec(slider.find('.active').prev('div').find('.eltd-image').attr('style'));
                        prev_image = new Image();
                        prev_image.src = src[1];
                    }else{
                        prev_image = slider.find('.active').prev('div').find('> .eltd-video').clone();
                        prev_image.find('.eltd-video-overlay, .mejs-offscreen').remove();
                        prev_image.find('.eltd-video-wrap').width(150).height(84);
                        prev_image.find('.mejs-container').width(150).height(84);
                        prev_image.find('video').width(150).height(84);
                    }
                    slider.find('.left.carousel-control .img .old').fadeOut(300,function(){
                        $(this).remove();
                    });
                    slider.find('.left.carousel-control .img').append(prev_image).find('div.thumb-image, > img, div.eltd-video').fadeIn(300).addClass('old');

                }else{
                    if(slider.find('.carousel-inner .item:last-child .eltd-image').length){
                        src = imageRegex.exec(slider.find('.carousel-inner .item:last-child .eltd-image').attr('style'));
                        prev_image = new Image();
                        prev_image.src = src[1];
                    }else{
                        prev_image = slider.find('.carousel-inner .item:last-child > .eltd-video').clone();
                        prev_image.find('.eltd-video-overlay, .mejs-offscreen').remove();
                        prev_image.find('.eltd-video-wrap').width(150).height(84);
                        prev_image.find('.mejs-container').width(150).height(84);
                        prev_image.find('video').width(150).height(84);
                    }
                    slider.find('.left.carousel-control .img .old').fadeOut(300,function(){
                        $(this).remove();
                    });
                    slider.find('.left.carousel-control .img').append(prev_image).find('div.thumb-image, > img, div.eltd-video').fadeIn(300).addClass('old');
                }

                // next thumb
                if(slider.find('.active').next('div.item').length){
                    if(slider.find('.active').next('div').find('.eltd-image').length){
                        src = imageRegex.exec(slider.find('.active').next('div').find('.eltd-image').attr('style'));
                        next_image = new Image();
                        next_image.src = src[1];
                    }else{
                        next_image = slider.find('.active').next('div').find('> .eltd-video').clone();
                        next_image.find('.eltd-video-overlay, .mejs-offscreen').remove();
                        next_image.find('.eltd-video-wrap').width(150).height(84);
                        next_image.find('.mejs-container').width(150).height(84);
                        next_image.find('video').width(150).height(84);
                    }

                    slider.find('.right.carousel-control .img .old').fadeOut(300,function(){
                        $(this).remove();
                    });
                    slider.find('.right.carousel-control .img').append(next_image).find('div.thumb-image, > img, div.eltd-video').fadeIn(300).addClass('old');

                }else{
                    if(slider.find('.carousel-inner .item:first-child .eltd-image').length){
                        src = imageRegex.exec(slider.find('.carousel-inner .item:first-child .eltd-image').attr('style'));
                        next_image = new Image();
                        next_image.src = src[1];
                    }else{
                        next_image = slider.find('.carousel-inner .item:first-child > .eltd-video').clone();
                        next_image.find('.eltd-video-overlay, .mejs-offscreen').remove();
                        next_image.find('.eltd-video-wrap').width(150).height(84);
                        next_image.find('.mejs-container').width(150).height(84);
                        next_image.find('video').width(150).height(84);
                    }
                    slider.find('.right.carousel-control .img .old').fadeOut(300,function(){
                        $(this).remove();
                    });
                    slider.find('.right.carousel-control .img').append(next_image).find('div.thumb-image, > img, div.eltd-video').fadeIn(300).addClass('old');
                }
            }
        };

        /**
         * initiate slider
         * @param slider, current slider
         * @param currentItem, current slide item index
         * @param totalItemCount, total number of slide items
         * @param slideAnimationTimeout, timeout for slide change
         */
        var initiateSlider = function(slider, totalItemCount, slideAnimationTimeout) {

            //set active class on first item
            slider.find('.carousel-inner .item:first-child').addClass('active');
            //check for header style
            eltdCheckSliderForHeaderStyle($('.carousel .active'), slider.hasClass('eltd-header-effect'));
            // setting numbers on carousel controls
            if(slider.hasClass('eltd-slider-numbers')) {
                setPrevNextNumbers(slider, 1, totalItemCount);
            }
            // set video background if there is video slide
            if(slider.find('.item video').length){
                initVideoBackground(slider);
            }

            // update thumbs
            updateNavigationThumbs(slider);

            // initiate peek
            initPeek(slider);

            // enable link hover color for slide elements with links
            slider.find('.eltd-slide-element-wrapper-link')
                .mouseenter(function() {
                    $(this).removeClass('inheriting');
                })
                .mouseleave(function() {
                    $(this).addClass('inheriting');
                })
            ;

            //init slider
            if(slider.hasClass('eltd-auto-start')){
                slider.carousel({
                    interval: slideAnimationTimeout,
                    pause: false
                });

                //pause slider when hover slider button
                slider.find('.slide_buttons_holder .qbutton')
                    .mouseenter(function() {
                        slider.carousel('pause');
                    })
                    .mouseleave(function() {
                        slider.carousel('cycle');
                    });
            } else {
                slider.carousel({
                    interval: 0,
                    pause: false
                });
            }

            $(window).scroll(function() {
                if(slider.hasClass('eltd-full-screen') && eltd.scroll > eltd.windowHeight && eltd.windowInnerWidth > 1024){
                    slider.carousel('pause');
                }else if(!slider.hasClass('eltd-full-screen') && eltd.scroll > slider.height() && eltd.windowInnerWidth > 1024){
                    slider.carousel('pause');
                }else{
                    slider.carousel('cycle');
                }
            });


            //initiate image animation
            if($('.carousel-inner .item:first-child').hasClass('eltd-animate-image') && eltd.windowInnerWidth > 1024){
                slider.find('.carousel-inner .item.eltd-animate-image:first-child .eltd-image').transformAnimate({
                    transform: "matrix("+matrixArray[$('.carousel-inner .item:first-child').data('eltd_animate_image')]+")",
                    duration: 30000
                });
            }
        };

        return {
            init: function() {
                if(sliders.length) {
                    sliders.each(function() {
                        var $this = $(this);
                        var slideAnimationTimeout = $this.data('slide_animation_timeout');
                        var totalItemCount = $this.find('.item').length;
                        var highlightTextAnimation = false;
                        var slideTextTypeOutAnimation = false;

                        checkButtonsAlignment($this);

                        setHeights($this);

                        //trigger text background highlight logic
                        if ($this.find('.eltd-slide-element-highlight-bgrnd').length) {
                            backgroundHighlightPrep($this);
                            highlightTextAnimation = true;
                        }


                        if ($this.find('.eltd-slide-element-type-out').length) {
                            slideTextTypeOutPrep($this);
                            slideTextTypeOutAnimation = true;
                        }


                        /*** wait until first video or image is loaded and than initiate slider - start ***/
                        if(eltd.htmlEl.hasClass('touch')){
                            if($this.find('.item:first-child .eltd-mobile-video-image').length > 0){
                                var src = imageRegex.exec($this.find('.item:first-child .eltd-mobile-video-image').attr('style'));
                            }else{
                                var src = imageRegex.exec($this.find('.item:first-child .eltd-image').attr('style'));
                            }
                            if(src) {
                                var backImg = new Image();
                                backImg.src = src[1];
                                $(backImg).load(function(){
                                    $('.eltd-slider-preloader').fadeOut(500, function() {
                                        backgroundHighlightExecute($this);
                                        slideTextTypeOut($this);
                                    });
                                    initiateSlider($this,totalItemCount,slideAnimationTimeout);
                                });
                            }
                        } else {
                            if($this.find('.item:first-child video').length > 0){
                                $this.find('.item:first-child video').eq(0).one('loadeddata',function(){
                                    $('.eltd-slider-preloader').fadeOut(500, function() {
                                        backgroundHighlightExecute($this);
                                        slideTextTypeOut($this);
                                    });
                                    initiateSlider($this,totalItemCount,slideAnimationTimeout);
                                });
                            }else{
                                var src = imageRegex.exec($this.find('.item:first-child .eltd-image').attr('style'));
                                if (src) {
                                    var backImg = new Image();
                                    backImg.src = src[1];
                                    $(backImg).load(function(){
                                        $('.eltd-slider-preloader').fadeOut(500, function() {
                                            backgroundHighlightExecute($this);
                                            slideTextTypeOut($this);
                                        });
                                        initiateSlider($this,totalItemCount,slideAnimationTimeout);
                                    });
                                }
                            }
                        }
                        /*** wait until first video or image is loaded and than initiate slider - end ***/

                        /* before slide transition - start */
                        $this.on('slide.bs.carousel', function () {
                            $this.addClass('eltd-in-progress');
                            $this.find('.active .eltd-slider-elements-holder-frame, .active .eltd-slide-element-section-link').fadeTo(250,0);
                        });
                        /* before slide transition - end */

                        /* after slide transition - start */
                        $this.on('slid.bs.carousel', function () {
                            $this.removeClass('eltd-in-progress');
                            $this.find('.active .eltd-slider-elements-holder-frame, .active .eltd-slide-element-section-link').fadeTo(0,1);

                            // setting numbers on carousel controls
                            if($this.hasClass('eltd-slider-numbers')) {
                                var currentItem = $('.item').index($('.item.active')[0]) + 1;
                                setPrevNextNumbers($this, currentItem, totalItemCount);
                            }

                            //Highlight text backgrund animation triggered on each slide transition end
                            if (highlightTextAnimation) {
                                backgroundHighlightExecute($this);
                            }

                            //Trigger type out on transition end
                            if (slideTextTypeOutAnimation) {
                                slideTextTypeOut($this);
                            }

                            // initiate image animation on active slide and reset all others
                            $('.item.eltd-animate-image .eltd-image').stop().css({'transform':'', '-webkit-transform':''});
                            if($('.item.active').hasClass('eltd-animate-image') && eltd.windowInnerWidth > 1024){
                                $('.item.eltd-animate-image.active .eltd-image').transformAnimate({
                                    transform: "matrix("+matrixArray[$('.item.eltd-animate-image.active').data('eltd_animate_image')]+")",
                                    duration: 30000
                                });
                            }

                            // setting thumbnails on navigation controls
                            if($this.hasClass('eltd-slider-thumbs')) {
                                updateNavigationThumbs($this);
                            }
                        });
                        /* after slide transition - end */

                        /* swipe functionality - start */
                        $this.swipe( {
                            swipeLeft: function(){ $this.carousel('next'); },
                            swipeRight: function(){ $this.carousel('prev'); },
                            threshold:20
                        });
                        /* swipe functionality - end */

                    });

                    //adding parallax functionality on slider
                    if($('.no-touch .carousel').length){
                        var skrollr_slider = skrollr.init({
                            smoothScrolling: false,
                            forceHeight: false
                        });
                        skrollr_slider.refresh();
                    }

                    $(window).scroll(function(){
                        //set control class for slider in order to change header style
                        if($('.eltd-slider .carousel').height() < eltd.scroll){
                            $('.eltd-slider .carousel').addClass('eltd-disable-slider-header-style-changing');
                        }else{
                            $('.eltd-slider .carousel').removeClass('eltd-disable-slider-header-style-changing');
                            eltdCheckSliderForHeaderStyle($('.eltd-slider .carousel .active'),$('.eltd-slider .carousel').hasClass('eltd-header-effect'));
                        }

                        //hide slider when it is out of viewport
                        if($('.eltd-slider .carousel').hasClass('eltd-full-screen') && eltd.scroll > eltd.windowHeight && eltd.windowInnerWidth > 1024){
                            $('.eltd-slider .carousel').find('.carousel-inner, .carousel-indicators').hide();
                        }else if(!$('.eltd-slider .carousel').hasClass('eltd-full-screen') && eltd.scroll > $('.eltd-slider .carousel').height() && eltd.windowInnerWidth > 1024){
                            $('.eltd-slider .carousel').find('.carousel-inner, .carousel-indicators').hide();
                        }else{
                            $('.eltd-slider .carousel').find('.carousel-inner, .carousel-indicators').show();
                        }
                    });
                }
            }
        };
    };

    /**
     *  If slide text element set to highlight background, store background color as image in data attr and set the initial background image to none
     */
    function backgroundHighlightPrep(slider) {
        var slideTextElements = slider.find('.eltd-slide-element-text.eltd-slide-element-highlight-bgrnd');
        if (slideTextElements.length) {
            slideTextElements.each(function(){
                var slideTextElement = $(this),
                    bgrnd;
                bgrnd = slideTextElement.css('background-image');
                slideTextElement.data( "background-highlight", bgrnd)
                slideTextElement.css('background-image', 'none');
            });
        }
    }

    /**
     *  Animate background highlight logic
     */
    function backgroundHighlightExecute(slider) {
        var activeItem = slider.find('.item.active .eltd-slide-element-highlight-bgrnd');
        var nonActiveItem = slider.find('.item:not(.active) .eltd-slide-element-highlight-bgrnd');

        if(activeItem.length) {
            activeItem.each(function(i){
                var slideTextElement = $(this);
                var bgrnd = slideTextElement.data('background-highlight');
                setTimeout(function(){
                    setTimeout(function(){
                        slideTextElement.css('background-image',bgrnd);
                    },20); // prevent initial background flicker
                    slideTextElement.css('background-position','-99.99% 0');
                }, i*450);
            });
        }

        if(nonActiveItem.length) {
            nonActiveItem.each(function(){
                var slideTextElement = $(this);
                slideTextElement.css('background-image','none');
                slideTextElement.css('background-position','-0% 0');
            });
        }
    }

    /**
     *  Slide text element type out prep, store text in data attr and remove the initial text from span
     */
    function slideTextTypeOutPrep(slider) {
        var slideTextElements = slider.find('.eltd-slide-element-text.eltd-slide-element-type-out');
        if (slideTextElements.length) {
            slideTextElements.each(function(){
                var slideTextElement = $(this),
                    strEl = slideTextElement.find('span'),
                    str = strEl.text();

                slideTextElement.data( 'type-out-text', str);
                strEl.empty();

            });
        }
    }


    /**
     *  Slide text element type out logic
     */
    function slideTextTypeOut(slider) {
        var activeItem = slider.find('.item.active .eltd-slide-element-type-out');
        var nonActiveItem = slider.find('.item:not(.active) .eltd-slide-element-type-out');
        if(activeItem.length) {
            activeItem.each(function(){
                var slideTextElement = $(this),
                    strEl = slideTextElement.find('span'),
                    str = slideTextElement.data('type-out-text');

                function showText (target, message, index, interval) {
                    if (index < message.length) {
                        $(target).append(message[index++]);
                        setTimeout(function () {
                            showText(target, message, index, interval);
                        }, interval);
                    }
                }
                showText(strEl, str, 0, 80);
            });
        }

        if(nonActiveItem.length) {
            nonActiveItem.each(function(){
                var slideTextElement = $(this),
                    strEl = slideTextElement.find('span');
                strEl.empty();
            });
        }
    }

    /**
     * Check if slide effect on header style changing
     * @param slide, current slide
     * @param headerEffect, flag if slide
     */
    function eltdCheckSliderForHeaderStyle(slide, headerEffect) {

        if($('.eltd-slider .carousel').not('.eltd-disable-slider-header-style-changing').length > 0) {

            var slideHeaderStyle = "";
            if (slide.hasClass('light')) { slideHeaderStyle = 'eltd-light-header'; }
            if (slide.hasClass('dark')) { slideHeaderStyle = 'eltd-dark-header'; }

            if (slideHeaderStyle !== "") {
                if (headerEffect) {
                    eltd.body.removeClass('eltd-dark-header eltd-light-header').addClass(slideHeaderStyle);
                }
            } else {
                if (headerEffect) {
                    eltd.body.removeClass('eltd-dark-header eltd-light-header').addClass(eltd.defaultHeaderStyle);
                }

            }
        }
    }

    /**
     * List object that initializes list with animation
     * @type {Function}
     */
    var eltdInitIconList = eltd.modules.shortcodes.eltdInitIconList = function() {
        var iconList = $('.eltd-animate-list');

        /**
         * Initializes icon list animation
         * @param list current list shortcode
         */
        var iconListInit = function(list) {
            setTimeout(function(){
                list.appear(function(){
                    list.addClass('eltd-appeared');
                },{accX: 0, accY: eltdGlobalVars.vars.eltdElementAppearAmount});
            },30);
        };

        return {
            init: function() {
                if(iconList.length) {
                    iconList.each(function() {
                        iconListInit($(this));
                    });
                }
            }
        };
    };

    /*
     * Parallax Heading within vc_row
     */
    function eltdParallaxHeading() {
        var parallaxHeadings = $('.eltd-parallax-heading');

        if (parallaxHeadings.length) {
            parallaxHeadings.each(function(){
                var heading = $(this),
                    headingHolder = heading.closest('.eltd-parallax-heading-holder');

                eltdParallaxHeadingCalcs(heading, headingHolder);
                eltdSkrollr();

                $(window).resize(function(){
                    heading.unwrap('.stretch--resizer');
                    heading.unwrap('.stretch--handle');
                    eltdParallaxHeadingCalcs(heading, headingHolder);
                });
            });
        }
    }

    /*
     * Parallax Heading Calcs
     */
    function eltdParallaxHeadingCalcs(heading, headingHolder) {
        heading.stretch();
        headingHolder.css('height',heading.height());
    }

    /*
     * Parallax Images shortcode
     */
    function eltdParallaxImages() {
        var parallaxImagesShortcodes = $('.eltd-parallax-images');

        if (parallaxImagesShortcodes) {
            parallaxImagesShortcodes.each(function(){
                var parallaxImagesShortcode = $(this),
                    parallaxImages = $(this).find('.eltd-parallax-image-holder');


                //text marquee - horizontal scrolling effect
                if (parallaxImagesShortcode.hasClass('eltd-text-scroll') && !$('html').hasClass('touch')) {
                    parallaxImages.each(function(){
                        var parallaxImage = $(this),
                            parallaxImageHeadingWrapper = parallaxImage.find('.eltd-heading-wrapper');

                        eltdAnimationFrame();

                        parallaxImageHeadingWrapper.each(function(){
                            var headings = $(this).find('.eltd-parallax-image-heading'),
                                firstHeading = $(this).find('.eltd-parallax-image-heading:first-child'),
                                firstHeadingOffset = firstHeading.offset().left,
                                lastHeading = $(this).find('.eltd-parallax-image-heading:last-child');

                            lastHeading.offset({left: firstHeadingOffset - eltd.windowWidth});

                            headings.each(function(i){
                                var heading = $(this),
                                    offset = heading.offset().left,
                                    currentPos = 0,
                                    delta = 2;

                                var eltdMarqueeText = function() {
                                    currentPos += delta;

                                    if (heading.offset().left > eltd.windowWidth) {
                                        currentPos =  -(eltd.windowWidth + offset) ; //reset
                                    }

                                    heading.css('transform','translate3d('+currentPos+'px,0,0)');
                                    requestAnimFrame(eltdMarqueeText);
                                }

                                eltdMarqueeText();
                            });
                        });

                    });
                }

                //appear effect
                if (!$('html').hasClass('touch')) {
                    parallaxImages.each(function(i){
                        var parallaxImage = $(this),
                            imgWrapper = parallaxImage.find('.eltd-img-wrapper');

                        imgWrapper.css('pointer-events','none'); //disable hovers until elements fully animated

                        parallaxImage.appear(function(){
                            if (!parallaxImage.hasClass('eltd-appeared')) {
                                setTimeout(function(){
                                    parallaxImage.addClass('eltd-appeared', function(){
                                        setTimeout(function(){
                                            parallaxImage.addClass('eltd-animated');
                                        }, 1200);
                                    });
                                }, (i%2) * 200);
                            }
                        });

                        parallaxImage.mousemove(function (event) {
                            if (parallaxImage.hasClass('eltd-animated')) {
                                imgWrapper.css('pointer-events','all'); //enable hovers when elements fully animated
                            }
                        });
                    });
                }

                //parallax hover effect
                if (parallaxImagesShortcode.hasClass('eltd-parallax-effect') && !$('html').hasClass('touch')) {
                    parallaxImages.each(function(){
                        var parallaxImage = $(this),
                            imgWrapper =parallaxImage.find('.eltd-img-wrapper'),
                            maxMove = 8, //maximum movement in px
                            move = 0, //move
                            rotateFactor = 0.01,
                            w,
                            h,
                            topOffset,
                            leftOffset,
                            xPos,
                            yPos,
                            xShift,
                            yShift,
                            pause,
                            pauseFlag = true;

                        //tilt effect
                        imgWrapper.mouseenter(function(){
                            w = imgWrapper.outerWidth();
                            h = imgWrapper.outerHeight();
                            topOffset = imgWrapper.offset().top;
                            leftOffset = imgWrapper.offset().left;
                            xPos = 0;
                            yPos = 0;

                            imgWrapper.css('transition', 'none');

                            pause = setTimeout(function(){
                                pauseFlag = false;
                            }, 200); //wait for image to be zoomed in

                            imgWrapper.mousemove(function (event) {
                                if (pauseFlag) {
                                    event.stopPropagation();
                                }
                                else {
                                    xPos = event.pageX - leftOffset;
                                    yPos = event.pageY - topOffset;
                                    xShift = ((w / 2 - xPos) / w * 2) * move;
                                    yShift = ((h / 2 - yPos) / h * 2) * move;

                                    var transformOffset = "translateX("+ xShift+"px) translateY("+ yShift+"px) rotateX(" + -xShift * rotateFactor + "deg) rotateY(" + yShift * rotateFactor + "deg) ";

                                    imgWrapper.css('transform', transformOffset);

                                    if(move < maxMove){
                                        move += 0.3; //increment slowly to its final value to avoid flicker on first move
                                    }
                                }
                            });

                        });

                        //tilt reset
                        imgWrapper.mouseleave(function(){
                            move = 0;
                            pauseFlag = true;
                            imgWrapper.css('transition', 'all .45s cubic-bezier(0.19, 0.65, 0.02, 0.93)');
                            imgWrapper.css('transform', 'translateX(0) translateY(0) rotateX(0) rotateY(0)');
                        });
                    });
                }
            });
        }
    }

    /**
     * Intro Section shortcode
     */
    function eltdIntroSection() {
        var introSections = $('.eltd-intro-section');

        if (introSections.length) {
            introSections.each(function(i){
                var introSection = $(this);

                eldtIntroSectionCalcs(introSection);

                if (introSection.hasClass('eltd-is-one-scroll-hide') && i==0) { //allows only first intro section to trigger JS for one scroll hide
                    var eltdScrollHandler = function(introSection) {
                        var sectionHeight = introSection.height(),
                            sectionTopOffset = introSection.offset().top,
                            sectionArea = sectionHeight + sectionTopOffset,
                            pageJump = false,
                            normalScroll = true;

                        if  ($(window).scrollTop() < sectionArea) {
                            normalScroll = false;
                        }

                        function eltdScrollTo() {
                            pageJump = true;
                            $('html, body').animate({
                                scrollTop: sectionArea
                            }, 1000, 'easeInOutQuint', function() {
                                pageJump = false;
                                normalScroll = true;
                            });
                        }

                        window.addEventListener('wheel', function(event) {
                            var scroll = event.deltaY,
                                scrollingForward = false;

                            if (scroll > 0) {
                                scrollingForward = true;
                            } else {
                                scrollingForward = false;
                            }

                            var reInitOneScroll = false;
                            if ($(window).scrollTop() - sectionTopOffset <=  Math.round(sectionHeight * 0.5)) {
                                reInitOneScroll = true;
                            }

                            if (!pageJump && !normalScroll) {
                                if (scrollingForward && ($(window).scrollTop() < sectionArea)) {
                                    event.preventDefault();
                                    eltdScrollTo();
                                }
                            } else {
                                if (!normalScroll) {
                                    event.preventDefault();
                                }

                                if (normalScroll && !scrollingForward && reInitOneScroll) {
                                    pageJump = false;
                                    normalScroll = false;
                                    event.preventDefault();
                                }
                            }
                        });
                    }

                    eltdScrollHandler(introSection);
                }

                $(window).resize(function(){
                    eldtIntroSectionCalcs(introSection);
                });
            });
        }
    }
	function eltdIntroSectionAppear() {
		var introSections = $('.eltd-intro-section');

		if (introSections.length) {
			introSections.each(function(i){
				var introSection = $(this);

				introSection.css('visibility','visible');

				if (!introSection.hasClass('eltd-appeared') && introSection.hasClass('eltd-is-animate-images')) {
					introSection.appear(function(){
						setTimeout(function(){
							introSection.addClass('eltd-appeared');
						},30);
					},{accX: 0, accY: eltdGlobalVars.vars.eltdElementAppearAmount});
				}
			});
		}
	}
    /**
     * Intro Section Calcs
     */
    function eldtIntroSectionCalcs(introSection) {
        var sectionWidth = eltd.windowInnerWidth;
        var sectionHeight = eltd.windowHeight;

        var header = $('header'),
            transparentHeader = false;

        if (eltd.body.hasClass('eltd-header-standard-enable-transparency')) {
            transparentHeader = true;
        }

        if (header.filter(':visible').length && !transparentHeader) {
            sectionHeight = eltd.windowHeight - header.height();
        }

        introSection.css('width', sectionWidth);
        introSection.css('height', sectionHeight);
        eltd.modules.common.eltdInitParallax();
    }

    /**
     * Device Marquee Shortcode
     */
    function eltdDeviceMarquee() {
        var deviceMarquees = $('.eltd-device-marquee');
        if (deviceMarquees.length) {

            deviceMarquees.each(function(){
                var deviceMarquee = $(this),
                    deviceMarqueeItems = deviceMarquee.find('.eltd-device-marquee-item');

                if (eltd.windowWidth > 1024 && $('html').hasClass('no-touch')) {
                    //vertical offsets
                    deviceMarqueeItems.each(function(){
                        var deviceMarqueeItem = $(this),
                            desktopYOffset = deviceMarqueeItem.parent().data('top-desktop'),
                            laptopLargeYOffset = deviceMarqueeItem.parent().data('top-laptop-large'),
                            laptopYOffset = deviceMarqueeItem.parent().data('top-laptop');

                        var eltdMarqueeYOffset = function(yOffset) {
                            if (yOffset) {
                                yOffset = parseInt(yOffset);
                                deviceMarqueeItem.parent().css('margin-top',yOffset);
                            }
                        }

                        if (eltd.windowWidth > 1440) {
                            eltdMarqueeYOffset(desktopYOffset);
                        }
                        if ((eltd.windowWidth <= 1440) && (eltd.windowWidth > 1280))  {
                            eltdMarqueeYOffset(laptopLargeYOffset);
                        }
                        if ((eltd.windowWidth <= 1280) && (eltd.windowWidth > 1024))  {
                            eltdMarqueeYOffset(laptopYOffset);
                        }
                    });

                    //parallax effect
                    if (deviceMarquee.hasClass('eltd-parallax-effect')) {
                        eltdSkrollr();
                    }

                    //text marquee - horizontal scrolling effect
                    if (deviceMarquee.hasClass('eltd-text-scroll')) {
                        var marqueeHeadingsHolder = deviceMarquee.find('.eltd-device-marquee-headings-holder');

                        eltdAnimationFrame();

                        marqueeHeadingsHolder.each(function(k){
                            var headings = $(this).find('.eltd-device-marquee-heading');

                            headings.each(function(i){
                                var heading = $(this),
                                    range = 130,
                                    diff = 30,
                                    currentPos = -range*i - k*diff,
                                    delta = 0.15;

                                var eltdMarqueeText = function() {
                                    currentPos += delta;

                                    if (heading.offset().left > eltd.windowWidth) {
                                        currentPos = -range*1.25 - k*diff; //reset
                                    }

                                    heading.css('transform','translate3d('+currentPos+'%,0,0)');
                                    requestAnimFrame(eltdMarqueeText);
                                }

                                eltdMarqueeText();
                            });
                        });
                    }
                }

                var rearrangeHeadings = function() {
                    var headingsHolders =  deviceMarquee.find('.eltd-device-marquee-headings-holder');

                    headingsHolders.each(function(){
                        var headingHolder = $(this),
                            textHolder = headingHolder.parent().find('.eltd-device-marquee-item-text-holder-inner');

                        headingHolder.find('.eltd-device-marquee-heading:last-child').remove();
                        headingHolder.prependTo(textHolder);
                    });
                }

                //basic, non-animated layout
                if (!deviceMarquee.hasClass('eltd-text-scroll')) {
                    rearrangeHeadings();
                }

                //responsive layout
                if (eltd.windowWidth <= 1024 && $('html').hasClass('touch')) {
                    if (deviceMarquee.hasClass('eltd-text-scroll')) {
                        deviceMarquee.removeClass('eltd-text-scroll');
                        rearrangeHeadings();
                    }
                }
            });
        }
    }

    /**
     * Skrollr functionality
     */
    function eltdSkrollr() {
        if (!$('html').hasClass('touch') && !eltd.body.hasClass('eltd-skrollr-set')) {
            window.eltdSkrollr = skrollr.init({
                forceHeight: false,
                smoothScrolling: false
            });

            eltd.body.addClass('eltd-skrollr-set');
        }
    }

    /**
     * Request animation frame
     */
    function eltdAnimationFrame() {
        if (!$('html').hasClass('touch') && !window.requestAnimFrame) {
            window.requestAnimFrame = (function(){
                return  window.requestAnimationFrame       ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame    ||
                    window.oRequestAnimationFrame      ||
                    window.msRequestAnimationFrame     ||
                    function(/* function */ callback, /* DOMElement */ element){
                        window.setTimeout(callback, 1000 / 60);
                    };
            })();
        }
    }

    function eltdInitBlogCarousel(){

        var blogCarouselCards = function(){
            var blogCarouselCards = $('.eltd-blog-carousel-holder.eltd-carousel-cards');
            if(blogCarouselCards.length){
                blogCarouselCards.each(function(){
                    var thisBlogCarousel = $(this).children();

                    thisBlogCarousel.owlCarousel({
                        items: 1,
                        autoPlay: true,
                        loop: true,
                        autoplayHoverPause: true,
                        nav: false,
                        dots: true,
                        autoHeight: true,
                        smartSpeed: 800,
                        navText: [
                            '<span class="eltd-prev-icon"><i class="arrow_left"></i></span>',
                            '<span class="eltd-next-icon"><i class="arrow_right"></i></span>'
                        ],
                        onInitialized: function() {
                            thisBlogCarousel.css('visibility','visible');
                        }
                    });

                });

            }
        }


        var blogCarouselVarImgSize = function(){
            var blogCarouselVarSize = $('.eltd-blog-carousel-holder.eltd-carousel-var-image-size');
            if(blogCarouselVarSize.length){
                blogCarouselVarSize.each(function(){
                    var thisBlogCarousel = $(this).find('.eltd-blog-carousel-wrapper');

                    thisBlogCarousel.waitForImages(function(){
                        thisBlogCarousel.css('visibility','visible');
                    });

                    thisBlogCarousel.slick({
                        dots: true,
                        infinite: true,
                        speed: 800,
                        slidesToShow: 1,
                        variableWidth: true,
                        centerMode: true,
                        arrows: true,
                        prevArrow: '<i class="arrow_left left"></i>',
                        nextArrow: '<i class="arrow_right right"></i>',
                    });
                })
            }
        }

        return {

            init : function() {

                blogCarouselCards();
                blogCarouselVarImgSize();

            }

        };



    }
    function eltdInitBlogSlider(){

        var blogSlider = $('.eltd-blog-slider-holder');
        if(blogSlider.length){
            blogSlider.each(function(){

                var thisBlogSlider = $(this).find('.eltd-blog-slider');
                thisBlogSlider.waitForImages(function(){
                    thisBlogSlider.owlCarousel({
                        items: 1,
                        autoPlay: true,
                        loop: true,
                        autoplayHoverPause: true,
                        nav: true,
                        dots: false,
                        autoHeight: true,
                        smartSpeed: 800,
                        navText: [
                            '<span class="eltd-prev-icon"><span class="arrow_left"></span></span>',
                            '<span class="eltd-next-icon"><span class="arrow_right"></span></span>'
                        ],
                        onInitialized: function() {
                            thisBlogSlider.css('visibility','visible');
                            thisBlogSlider.removeClass('eltd-translating').addClass('eltd-translated');
                        },
                        onTranslate: function() {
                            thisBlogSlider.removeClass('eltd-translated').addClass('eltd-translating');
                        },
                        onTranslated: function() {
                            thisBlogSlider.removeClass('eltd-translating').addClass('eltd-translated');
                        }
                    });
                });

            });

        }

    }
    function eltdInitProductSlider(){

        var productSlider = $('.eltd-product-slider-holder');
        if(productSlider.length){
            productSlider.each(function(){
                var thisSlider = $(this);
                var thisProductSlider = $(this).find('.eltd-product-slider');
                setProductSliderHeight(thisSlider);

                thisProductSlider.owlCarousel({
                    items: 1,
                    autoPlay: true,
                    autoplayHoverPause: true,
                    loop: true,
                    autoplay: true,
                    nav: true,
                    dots: false,
                    autoHeight: true,
                    smartSpeed: 800,
                    navText: [
                        '<span class="eltd-prev-icon"><span class="arrow_left"></span></span>',
                        '<span class="eltd-next-icon"><span class="arrow_right"></span></span>'
                    ],
                    onInitialized: function() {
                        thisProductSlider.css('visibility','visible');
                        thisProductSlider.removeClass('eltd-translating').addClass('eltd-translated');
                    },
                    onTranslate: function() {
                        thisProductSlider.removeClass('eltd-translated').addClass('eltd-translating');
                    },
                    onTranslated: function() {
                        thisProductSlider.removeClass('eltd-translating').addClass('eltd-translated');
                    }
                });

            });

        }

    }

    /**
     * Calculate heights for slider holder and slide item, depending on window size, but only if slider is set to be full height
     * @param slider, current slider
     */
    function setProductSliderHeight(slider) {
        var mobileHeaderHeight = eltd.windowInnerWidth < 1025 ? eltdGlobalVars.vars.eltdMobileHeaderHeight + $('.eltd-top-bar').height() : 0;

        var topPaspartu = parseInt($('body.eltd-paspartu-enabled .eltd-wrapper').css('padding-top'));

        if(typeof topPaspartu === 'undefined' || topPaspartu === null || isNaN(topPaspartu)){
            topPaspartu = 0;
        }
        var bottomPaspartu = parseInt($('body.eltd-paspartu-enabled .eltd-wrapper').css('padding-bottom'));
        if(typeof bottomPaspartu === 'undefined' || bottomPaspartu === null || isNaN(bottomPaspartu)){
            bottomPaspartu = 0;
        }
        var paspartuSize = topPaspartu + bottomPaspartu;

        var controlDotsHeight = slider.find('.owl-controls .owl-nav').outerHeight();
        if(typeof controlDotsHeight === 'undefined' || controlDotsHeight === null || isNaN(controlDotsHeight)){
            controlDotsHeight = 0;
        }

        var headerStandardHeight = $('body.eltd-header-standard .eltd-page-header').outerHeight();
        if(typeof headerStandardHeight === 'undefined' || headerStandardHeight === null || isNaN(headerStandardHeight)){
            headerStandardHeight = 0;
        }
        headerStandardHeight = eltd.windowInnerWidth > 1024 ? headerStandardHeight : 0;

        var bottomTextHeight = slider.find('.eltd-bottom-text').outerHeight();
        if(typeof bottomTextHeight === 'undefined' || bottomTextHeight === null || isNaN(bottomTextHeight)){
            bottomTextHeight = 0;
        }
        var adminBarHeight = $('body .wpadminbar').outerHeight();
        if(typeof adminBarHeight === 'undefined' || adminBarHeight === null || isNaN(adminBarHeight)){
            adminBarHeight = 0;
        }

        var gap = mobileHeaderHeight + controlDotsHeight + headerStandardHeight + paspartuSize + bottomTextHeight + adminBarHeight;
        var sliderHeight = eltd.windowHeight - gap;

        if(eltd.windowWidth > 768){
            slider.css({'height': (sliderHeight) + 'px'});
            slider.find('.eltd-product-slider').css({'height': (sliderHeight) + 'px'});
            slider.find('.eltd-product-slider-item-holder').css({'height': (sliderHeight) + 'px'});
        }

        if(eltdPerPageVars.vars.eltdStickyScrollAmount === 0) {
            eltd.modules.header.stickyAppearAmount = eltd.windowHeight; //set sticky header appear amount if slider there is no amount entered on page itself
        }
    };

    function eltdInfoBox() {
        var infoBoxes = $('.eltd-info-box-holder:not(.eltd-simple)');

        var getBottomHeight = function(bottomHolder) {
            if(bottomHolder.length) {
                var bottomHolderHeight =  bottomHolder.find('.eltd-ib-text-holder').height() +  bottomHolder.find('.eltd-ib-button-holder').height();
                return bottomHolderHeight;
            }

            return false;
        }

        var infoBoxesHeight = function() {
            if(infoBoxes.length) {
                var maxHeight = 0;
                var heightestBox;

                infoBoxes.each(function() {
                    var infoBox = $(this),
                        bottomHolder = infoBox.find('.eltd-ib-bottom-holder'),
                        bottomHolderHeight = getBottomHeight(bottomHolder),
                        topHolder = infoBox.find('.eltd-ib-top-holder');

                    var currentHeight = bottomHolderHeight + topHolder.outerHeight();

                    maxHeight = Math.max(maxHeight, currentHeight);

                    if(maxHeight <= currentHeight) {
                        heightestBox = $(this);
                        maxHeight = currentHeight;
                    }

                    //hovers
                    if (infoBox.hasClass('eltd-interactive')) {
                        bottomHolder.css('height',0);
                        bottomHolder.css('opacity',0);

                        infoBox.mouseenter(function(){
                            bottomHolder.css('height',bottomHolderHeight);
                            bottomHolder.css('opacity',1);
                        });

                        infoBox.mouseleave(function(){
                            bottomHolder.css('height',0);
                            bottomHolder.css('opacity',0);
                        });
                    }

                });

                infoBoxes.height(maxHeight);
            }
        }

        if(infoBoxes.length) {
            infoBoxesHeight();

            $(eltd.window).resize(function() {
                infoBoxesHeight();
            });

            infoBoxes.each(function() {
                var thisInfoBox = $(this);
            });
        }
    }

    function eltdProductListFilter(){

        var productList = $('.eltd-product-list-holder.eltd-product-list-with-filter');

        if(productList.length){
            productList.each(function(){
                eltdInitProductListMixItUp($(this));
            });
        }
    }

    function eltdInitProductListMixItUp(container){

        var filterItem = container.find('.eltd-product-list-filter li');

        var filterClass = filterItem.data('class');
        filterClass = '.'+filterClass;

        var holderInner = container.find('.eltd-product-list-items ');
        holderInner.mixItUp({
            callbacks: {
                onMixLoad: function(){
                    holderInner.find('li.product').css('visibility','visible');
                },
                onMixStart: function(){
                    holderInner.find('li.product').css('visibility','visible');
                },
                onMixBusy: function(){
                    holderInner.find('li.product').css('visibility','visible');
                },
                onMixEnd: function(){
                    eltd.modules.common.eltdInitParallax();
                }
            },
            selectors: {
                filter: filterClass
            }

        });
        filterItem.first().addClass('active');
    }

    function eltdInitVideoButton() {

        var videoButtons = $('.eltd-video-button-play');
        if ( videoButtons.length ) {
            videoButtons.each(function () {
                var videoButton = $(this);
                var changeButtonColor = function(event) {
                    event.data.button.css('color', event.data.color);
                    event.data.button.css('border-color', event.data.color);
                };

                var originalColor = videoButton.css('color');
                var hoverColor = videoButton.data('hover-color');

                videoButton.on('mouseenter', { button: videoButton, color: hoverColor }, changeButtonColor);
                videoButton.on('mouseleave', { button: videoButton, color: originalColor }, changeButtonColor);
            })
        }

    }


    /*
     * Interactive Elements Holder animation calcs
     */
    function eltdInitInteractiveElementsHolder() {
        var interactiveEHs = $('.eltd-interactive-elements-holder');
        if (interactiveEHs.length) {
            interactiveEHs.each(function(){
                var interactiveEH = $(this),
                    animationDirection;

                if (interactiveEH.hasClass('eltd-animation-to-left')) {
                    animationDirection = 'left';
                }
                if (interactiveEH.hasClass('eltd-animation-to-right')) {
                    animationDirection = 'right';
                }

                //get responsive class
                var responsiveClass = interactiveEH.attr("class").match(/mode[\w-]*\b/).toString();
                var breakpointValue = parseInt(responsiveClass.substr(5)); //remove mode- leave number from class

                //interactivity above certain window width
                if (eltd.windowWidth >= breakpointValue) {
                    if (animationDirection == 'left') {
                        var interactiveEHI = interactiveEH.find('.eltd-interactive-elements-holder-right-item');
                        interactiveEHI.wrapAll('<div class="eltd-interactive-elements-holder-item-wrap"><div class="eltd-interactive-elements-holder-item-wrap-inner"></div></div>')
                        var content =   interactiveEHI.find('.eltd-interactive-elements-holder-item-content-inner');
                    } else if (animationDirection == 'right') {
                        var interactiveEHI = interactiveEH.find('.eltd-interactive-elements-holder-left-item');
                        interactiveEHI.wrapAll('<div class="eltd-interactive-elements-holder-item-wrap"><div class="eltd-interactive-elements-holder-item-wrap-inner"></div></div>')
                        var content =   interactiveEHI.find('.eltd-interactive-elements-holder-item-content-inner');
                    }
                    var contentWidth = content.width();
                    content.css('width',contentWidth);
                    interactiveEH.animate({opacity:1});
                }  else {
                    interactiveEH.css('opacity','1');
                }

            });
        }
    }

    /*
     * Type out functionality for Section Title shortcode
     */
    function eltdTypeOutSectionTitle() {

        var typeOuts = $('.eltd-section-title .eltd-typed');

        if (typeOuts.length) {
            typeOuts.each(function(){

                //vars
                var typeOut = $(this),
                    typeOutHolder = typeOut.parent('.eltd-typed-wrap'),
                    str,
                    loop = typeOutHolder.attr('data-loop'),
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

                //loop
                if (loop == 'yes') {
                    loop = true;
                } else {
                    loop = false;
                }

                //typeout
                typeOutHolder.appear(function(){
                    typeOutHolder.addClass('eltd-typing');
                    setTimeout(function(){
                        typeOut.typed({
                            strings: str,
                            typeSpeed: 60,
                            backDelay: 700,
                            loop: loop,
                            contentType: 'text',
                            loopCount: true,
                            cursorChar: "",
                        });
                    },800); // wait for CSS blink animation to end
                });

            });
        }
    }


    function eltdDragAndDropElements(){

        function dragAndDrop(){
            var container = $('.eltd-drag-and-drop-holder');
            if(container.length){
                container.each(function(){

                    var thisContainer = $(this);
                    var draggableElements = thisContainer.find('.eltd-draggable-element');
                    thisContainer.find('.eltd-draggable-element:nth-child(2)').addClass('eltd-active-draggable-item');

                    var droppableElement = thisContainer.children('.eltd-droppable-element');

                    if(draggableElements.length){
                        draggableElements.each(function(){
                            var thisDragElement = $(this);
                            thisDragElement.draggable({
                                start: eltdHandleStartDragEvent,
                                revert:true,
                                content: thisContainer,
                                cursor: 'move',
                                clone: true
                            });
                        });
                    }

                    droppableElement.droppable({
                        drop: eltdHandleDropEvent
                    });

                });
            }
        }

        function eltdHandleStartDragEvent(event, ui){

            var draggable = ui.helper;
            var dragItems = draggable.siblings();
            var nextDragItem = draggable.next().first();

            dragItems.removeClass('eltd-active-draggable-item');
            if(nextDragItem.length){
                nextDragItem.addClass('eltd-active-draggable-item');
            }
            else{
                dragItems.first().addClass('eltd-active-draggable-item');
            }
        }

        function eltdHandleDropEvent(event, ui){

            var draggable = ui.draggable;
            var dragItems = draggable.siblings();
            var nextDragItem = draggable.next().first();
            var draggableItemHtml = draggable.html();

            var droppable = draggable.parent().parent().siblings('.eltd-droppable-element');

            dragItems.removeClass('eltd-active-draggable-item');
            draggable.removeClass('eltd-active-draggable-item');
            if(nextDragItem.length){
                nextDragItem.addClass('eltd-active-draggable-item');
            }
            else{
                dragItems.first().addClass('eltd-active-draggable-item');
            }

            setTimeout(function(){
                droppable.empty();
                droppable.html(draggableItemHtml);
            }, 200);

        }
        return {

            init : function() {
                dragAndDrop();
            }

        };
    }


    /**
     * Loads images that are set to be 'lazy'
     */
    function eltdLazyImages() {
        $.fn.preloader = function (action, callback) {
            if (!!action && action == 'destroy') {
                this.find('.eltd-preloader').remove();
            } else {
                var block = $('<div class="eltd-preloader"></div>');
                $('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="75" width="75" viewbox="0 0 75 75"><circle stroke-linecap="round" cx="37.5" cy="37.5" r="33.5" stroke-width="8"/></svg>').appendTo(block);
                block.appendTo(this);
                if(typeof callback == 'function')
                    callback();
            }
            return this;
        };

        $('img[data-image][data-lazy="true"]:not(.lazyLoading)').each(function(i, object) {
            object = $(object);

            if(object.attr('data-ratio')) {
                object.height(object.width()*object.data('ratio'));

            }

            var rect = object[0].getBoundingClientRect(),
                vh = (eltd.windowHeight || document.documentElement.clientHeight),
                vw = (eltd.windowWidth || document.documentElement.clientWidth),
                oh = object.outerHeight(),
                ow = object.outerWidth();


            if(
                ( rect.top !=0 || rect.right !=0 || rect.bottom !=0 || rect.left !=0 ) &&
                ( rect.top >= 0 || rect.top + oh >= 0 ) &&
                ( rect.bottom >=0 && rect.bottom - oh - vh <= 0 ) &&
                ( rect.left >= 0 || rect.left + ow >= 0 ) &&
                ( rect.right >=0 && rect.right - ow - vw <= 0 )
            ) {

                var p = object.parent();
                if(!!p) {
                    p.preloader('init');
                }
                object.addClass('lazyLoading');

                var imageObj = new Image();

                $(imageObj).on('load', function() {

                    p.preloader('destroy');
                    object
                        .removeAttr('data-image')
                        .removeData('image')
                        .removeAttr('data-lazy')
                        .removeData('lazy')
                        .removeClass('lazyLoading');

                    object.attr('src', $(this).attr('src'));
                    object.height('auto');

                }).attr('src', object.data('image'));
            }
        });
    }

    /**
     * Cards Gallery shortcode
     */
    function eltdCardsGallery() {
        var cardGalleries = $('.eltd-cards-gallery-holder');

        if (cardGalleries.length) {
            cardGalleries.each(function(){
                var gallery = $(this);
                var galleryHeight = gallery.height();
                gallery.children('.eltd-cards-gallery').css('height' , galleryHeight );
                $(window).resize(function(){
                    galleryHeight = gallery.height();
                    gallery.children('.eltd-cards-gallery').css('height' , galleryHeight );
                });


                var cards =  gallery.find('.card');
                var fake_card =  gallery.find('.fake_card');
                fake_card.css('display', 'none');

                cards.each(function() {
                    var card = $(this);

                    card.click(function () {
                        if (!cards.last().is(card)) {
                            card.fadeOut(0,function(){
                                card.addClass('eltd-transform-y');
                                card.insertAfter(cards.last()).fadeIn(200, 'easeInOutQuint',
                                    function(){
                                        card.removeClass('eltd-transform-y');
                                    });
                                cards = gallery.find('.card');
                            });
                            return false;
                        }
                    });
                });
            });
        }
    }

    /*
     * Process Slider init
     */

    function eltdContentSlider() {
        var processSlider = $('.eltd-content-slider');

        if (processSlider.length) {
            processSlider.each(function(){
                //vars
                var thisProcessSlider = $(this),
                    processSliderItems = thisProcessSlider.find('.eltd-content-slider-content-area'),
                    processSliderItem = processSliderItems.children('.eltd-content-slider-item'),
                    processSliderHandler = thisProcessSlider.parent().parent().find('.eltd-content-handle'),
	                leftOffset = (Math.max($(window).width()*0.08 , 0)),//0.08 is 8% on full hd
	                processSliderContentWidth = 0,
                    processSliderContentHeight = 0;


                //appears
                if(processSliderItem.length){
                    processSliderItem.each(function(i){
                        var thisItem = $(this);
                        thisItem.animate({opacity:1},400, 'easeOutSine');
                        processSliderHandler.parent().animate({opacity:1},400, 'easeOutSine');
                        thisItem.find('.eltd-content-slide-item-number').append(i+1);

                        processSliderContentWidth = processSliderContentWidth + thisItem.outerWidth();
                        if(thisItem.outerHeight() > processSliderContentHeight){
                            processSliderContentHeight = thisItem.outerHeight();
                        }
                    });
                }

                //calcs
                thisProcessSlider.css({width:processSliderContentWidth + leftOffset + 'px'});
                thisProcessSlider.css({height:processSliderContentHeight + 'px'});
                thisProcessSlider.delay(200).animate({opacity:1},200);

	            //calcs
	            thisProcessSlider.css({'-webkit-transform':'translateX('+leftOffset+'px)'});
	            thisProcessSlider.css({'transform':'translateX('+leftOffset+'px)'});
	            thisProcessSlider.delay(200).animate({opacity:1},200);

                //recalcs
                $(window).resize(function(){
                    leftOffset = (Math.max($(window).width()*0.08 , 0)), //150 is choosen vaule in px on full hd
                    processSliderContentWidth = 0;
                    processSliderContentHeight = 0;

                    processSliderItem.each(function(){
                        var thisItem = $(this);
                        processSliderContentWidth = processSliderContentWidth + thisItem.outerWidth();
                        if(thisItem.outerHeight() > processSliderContentHeight){
                            processSliderContentHeight = thisItem.outerHeight();
                        }
                    });

                    thisProcessSlider.css({width:processSliderContentWidth + leftOffset + 'px'});
                    thisProcessSlider.css({height:processSliderContentHeight + 'px'});
	                thisProcessSlider.css({'-webkit-transform':'translateX('+leftOffset+'px)'});
	                thisProcessSlider.css({'transform':'translateX('+leftOffset+'px)'});
                    processSliderItem.each(function(i){
                        $(this).delay(200*i).animate({opacity:1},400, 'easeOutSine');
                        processSliderHandler.parent().animate({opacity:1},400, 'easeOutSine');
                    });

                });
            });
        }
    }

    /*
     * Scroll logic for process Slider
     */

	function eltdContentScroll() {

		var scroller;
		var gridCalcs;

		function calculategridCalcs () {
			gridCalcs = (Math.max($('.eltd-content-slider').width() - eltd.gridWidth, 0) / 2);
			return gridCalcs;
		}

		function Scroller (opts) {
			var handle = opts.handle;
			var track = opts.track;
			var scroller = opts.scroller;
			var content = opts.content;
			var contentHolder = opts.contentHolder;
			var dragEndedCallback = opts.dragEndedCallback || function () {};
			var dragStartedCallback = opts.dragStartedCallback || function () {};

			var contentMaxScroll = (content.width() + gridCalcs*0.3) - scroller.width(); //0.3 - coeff that results in the appropriate scroll amount
			var maxTravel = track.width() - handle.width();
			var window_mouseMove = null;
			var dragInProgress = false;


			handle.click(function (e) {e.preventDefault(); e.stopPropagation();});

			function mouseFollower (cb) {
				return function (e) {
					cb(e.clientX || e.originalEvent.targetTouches[0].clientX || 0,
						e.clientY || e.originalEvent.targetTouches[0].clientY || 0);
				};
			}

			function scrollContentToRatio (ratio, animated, callback) {
				var newScroll = ratio * contentMaxScroll;
				if (!animated) {
					scroller.scrollLeft(newScroll);
					return;
				} else {
					scroller.animate({scrollLeft: newScroll}, 400, 'swing', callback);
				}
			}

			function moveHandleToRatio (ratio, animated, callback) {
				var props = {marginLeft: ratio * maxTravel};
				if (!animated) {
					handle.css(props);
					return;
				} else {
					handle.animate(props, 400, 'swing', callback);
				}
			}

			function scrollToRatio (ratio, opts) {
				opts = $.extend({
					animate: false,
					scrollbarCallback: function () {},
					contentCallback: function () {}
				}, opts);
				ratio = Math.max(Math.min(ratio, 1.0), 0.0);
				moveHandleToRatio(ratio, opts.animate, opts.scrollbarCallback);
				scrollContentToRatio(ratio, opts.animate, opts.contentCallback);
			}

			function scrollByDelta (delta, opts) {
				return scrollToRatio((scroller.scrollLeft() - delta) / contentMaxScroll, opts);
			}

			function getScrollbarRatio () {
				return handle.offset().left / maxTravel;
			}

			function getContentRatio () {
				return scroller.scrollLeft() / contentMaxScroll;
			}

			var endDrag;
			function beginDrag (e) {
				endDrag();
				e.preventDefault();
				e.stopImmediatePropagation();
				e.stopPropagation();
				dragInProgress = true;

				var pageX = e.pageX || e.originalEvent.targetTouches[0].clientX;

				var xOnHandle = pageX - handle.offset().left + track.offset().left;
				function scrollHandleCallback (x, y) {
					var position = x - xOnHandle;

					if (position < 0) {
						position = 0;
					} else if (position > maxTravel) {
						position = maxTravel;
					}

					var scrollRatio = position / maxTravel;
					scrollToRatio(scrollRatio);
				}
				window_mouseMove = mouseFollower(scrollHandleCallback);
				contentHolder.bind('mousemove', window_mouseMove);
				dragStartedCallback();
				handle.addClass('start');
				return false;
			}

			endDrag = function (e) {
				dragInProgress = false;
				contentHolder.unbind('mousemove', window_mouseMove);
				dragEndedCallback();
				handle.removeClass('start');
				return false;
			};

			handle.get(0).onselectstart = function () {return false;};
			handle.mousedown(beginDrag);
			handle.bind('mousedown', beginDrag);
			contentHolder.bind('mouseup', endDrag);
			//
			contentHolder.bind('mouseleave', endDrag);

			return {
				scrollToRatio: scrollToRatio,
				scrollByDelta: scrollByDelta,
				getContentRatio: getContentRatio,
				getScrollbarRatio: getScrollbarRatio,
				moveToSelector: function (selector, opts) {
					if (!selector) return false;
					var dest = $(selector, content);
					var destOffset = (dest.offset().left + scroller.scrollLeft()) - (gridCalcs + 10);
					var destRatio =  destOffset / contentMaxScroll;
					scrollToRatio(destRatio, opts);
				},
				swipeToSide: function (amount, opts) {
					var position = parseInt(handle.css('marginLeft')) + amount;

					if (position < 0) {
						position = 0;
					} else if (position > maxTravel) {
						position = maxTravel;
					}

					var scrollRatio = position / maxTravel;
					scrollToRatio(scrollRatio, opts);
				},
				dragInProgress: function () {
					return dragInProgress;
				},
				destroy: function () {
					handle.unbind('mousedown', beginDrag);
				}
			};
		}

		/*
		 * Process Slider Scroll init
		 */
		function ContentSliderScroll () {
			$('.eltd-content-slider').each(function (idx, el) {
				calculategridCalcs();
				var trackWidth= $('.eltd-content-outer').width();
				$('.eltd-content-track').css({width:(Math.max($(window).width()*0.84, eltd.gridWidth*0.84))}); //0.84 is 100- 2x0.08
				//recalcs
				$(window).resize(function(){
					$('.eltd-content-track').css({width:(Math.max($(window).width()*0.84, eltd.gridWidth*0.84))}); //0.84 is 100- 2x0.08
				});
				scroller = Scroller({
					track: $('.eltd-content-track'),
					handle: $('.eltd-content-handle'),
					scroller: $('.eltd-content-outer'),
					content: $('.eltd-content-slider'),
					contentHolder: $('.eltd-content-slider-holder')
				});


				$('.eltd-content-slider').swipe( {
					swipeLeft: function(){
						scroller.swipeToSide(300, {animate: true});
					},
					swipeRight: function(){
						scroller.swipeToSide(-300, {animate: true});
					},
					threshold:20
				});
			});

		}

		ContentSliderScroll();

	}

    /*
     **	Vertical Split Slider
     */

    function eltdInitVerticalSplitSlider() {

        if (eltd.body.hasClass('eltd-vertical-split-screen-initialized')) {
            eltd.body.removeClass('eltd-vertical-split-screen-initialized');
            $.fn.multiscroll.destroy();
        }

        var defaultHeaderStyle = '';
        if (eltd.body.hasClass('eltd-light-header')) {
            defaultHeaderStyle = 'light';
        } else if (eltd.body.hasClass('eltd-dark-header')) {
            defaultHeaderStyle = 'dark';
        }

        if ($('.eltd-vertical-split-slider').length) {

            var slider = $('.eltd-vertical-split-slider');

            slider.height(eltd.windowHeight).animate({opacity: 1}, 300);
            slider.multiscroll({
                scrollingSpeed: 700,
                easing: 'easeInOutQuart',
                navigation: true,
                useAnchorsOnLoad: false,
                sectionSelector: '.eltd-vss-ms-section',
                leftSelector: '.eltd-vss-ms-left',
                rightSelector: '.eltd-vss-ms-right',
                afterRender: function () {
                    eltdCheckVerticalSplitSectionsForHeaderStyle($('.eltd-vss-ms-right .eltd-vss-ms-section:last-child').data('header-style'), defaultHeaderStyle);
                    eltd.body.addClass('eltd-vertical-split-screen-initialized');
                    if ($('div.wpcf7 > form').length) {
                        _wpcf7.supportHtml5 = $.wpcf7SupportHtml5();
                        $('div.wpcf7 > form').wpcf7InitForm();
                    } // this function need to be initialized after initVerticalSplitSlide

                    //prepare html for smaller screens - start //
                    var verticalSplitSliderResponsive = $("<div class='eltd-vertical-split-slider-responsive' />");
                    slider.after(verticalSplitSliderResponsive);
                    var leftSide = $('.eltd-vertical-split-slider .eltd-vss-ms-left > div');
                    var rightSide = $('.eltd-vertical-split-slider .eltd-vss-ms-right > div');

                    for (var i = 0; i < leftSide.length; i++) {
                        verticalSplitSliderResponsive.append($(leftSide[i]).clone(true));
                        verticalSplitSliderResponsive.append($(rightSide[leftSide.length - 1 - i]).clone(true));
                    }

                    //prepare google maps clones
                    if ($('.eltd-vertical-split-slider-responsive .eltd-google-map').length) {
                        $('.eltd-vertical-split-slider-responsive .eltd-google-map').each(function () {
                            var map = $(this);
                            map.empty();
                            var num = Math.floor((Math.random() * 100000) + 1);
                            map.attr('id', 'eltd-map-' + num);
                            map.data('unique-id', num);
                        });
                    }

                    eltdButton().init();
                    eltdInitTestimonials();
                    eltdInitPortfolioListMasonry();
                    eltdInitPortfolioListPinterest();
                    eltdInitPortfolio();
                    eltdShowGoogleMap();
                    eltdInitProgressBars();
                },
                onLeave: function (index, nextIndex, direction) {
                    eltdCheckVerticalSplitSectionsForHeaderStyle($($('.eltd-vss-ms-right .eltd-vss-ms-section')[$(".eltd-vss-ms-right .eltd-vss-ms-section").length - nextIndex]).data('header-style'), defaultHeaderStyle);
                }
            });


            if (eltd.windowWidth <= 1024) {
                $.fn.multiscroll.destroy();
            } else {
                $.fn.multiscroll.build();
            }

            $(window).resize(function () {
                if (eltd.windowWidth <= 1024) {
                    $.fn.multiscroll.destroy();
                } else {
                    $.fn.multiscroll.build();
                }

            });
        }
    }

    /*
     **	Check slides on load and slide change for header style changing
     */
    function eltdCheckVerticalSplitSectionsForHeaderStyle(section_header_style, default_header_style) {

        if (section_header_style !== undefined && section_header_style !== '') {
            eltd.body.removeClass('eltd-light-header eltd-dark-header').addClass('eltd-' + section_header_style + '-header eltd-vss-' + section_header_style + '-header');
        } else if (default_header_style != '') {
            eltd.body.removeClass('eltd-light-header eltd-dark-header').addClass('eltd-' + default_header_style + '-header eltd-vss-' + section_header_style + '-header');
        } else {
            eltd.body.removeClass('eltd-light-header eltd-dark-header');
        }
    }


    /*
    * Trigger marks appear effect if present in shortcodes
    */
    function eltdMarks() {
        var marks = $('.eltd-mark');

        if (!$('html').hasClass('touch')) {
            if (marks.length) {
                marks.each(function(){
                    var mark = $(this),
                        markHolder = mark.parent(),
                        markHolderHeight = markHolder.outerHeight(),
                        markHolderWidth = markHolder.outerWidth();

                    markHolder.css('height',0);
                    markHolder.css('width',0);

                    mark.appear(function(){
                        markHolder.animate({height:markHolderHeight, width:markHolderWidth}, 450, 'easeInOutQuint', function(){
                            mark.addClass('eltd-appeared');

                            setTimeout(function(){
                                mark.addClass('eltd-floating');
                            }, 600); //wait for initial transition to finish
                        });
                    });
                });
            }
        }
    }

})(jQuery);