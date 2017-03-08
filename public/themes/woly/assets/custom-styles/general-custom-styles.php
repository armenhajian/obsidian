<?php
if(!function_exists('woly_elated_design_styles')) {
    /**
     * Generates general custom styles
     */
    function woly_elated_design_styles() {

        $preload_background_styles = array();

        if(woly_elated_options()->getOptionValue('preload_pattern_image') !== ""){
            $preload_background_styles['background-image'] = 'url('.woly_elated_options()->getOptionValue('preload_pattern_image').') !important';
        }else{
            $preload_background_styles['background-image'] = 'url('.esc_url(ELATED_ASSETS_ROOT."/img/preload_pattern.png").') !important';
        }

        echo woly_elated_dynamic_css('.eltd-preload-background', $preload_background_styles);

		if (woly_elated_options()->getOptionValue('google_fonts')){
			$font_family = woly_elated_options()->getOptionValue('google_fonts');
			if(woly_elated_is_font_option_valid($font_family)) {
				echo woly_elated_dynamic_css('body', array('font-family' => woly_elated_get_font_option_val($font_family)));
			}
		}

        if(woly_elated_options()->getOptionValue('first_color') !== "") {
            $color_selector = array(
            '.eltd-blog-holder.eltd-blog-single .eltd-author-description .eltd-author-description-text-holder .eltd-author-name:hover',
                '.eltd-blog-holder.eltd-blog-single article .eltd-blog-tags-info-holder .eltd-single-tags-holder a:hover',
                '.eltd-blog-holder.eltd-blog-type-standard article.eltd-split-post .eltd-post-info-bottom a:hover',
                '.eltd-blog-holder.eltd-blog-type-standard article:not(.format-quote):not(.format-link) .eltd-post-text .eltd-bottom-section .eltd-right-section a:hover',
                '.eltd-blog-holder.eltd-blog-single article .eltd-blog-tags-info-holder .eltd-post-info a:hover',
                '.eltd-blog-holder article .eltd-post-info.eltd-bottom-section .eltd-left-section a:hover',
                '.eltd-blog-holder article .eltd-post-info.eltd-bottom-section .eltd-right-section a:hover',
                '.eltd-blog-holder.eltd-blog-type-masonry .eltd-post-info.eltd-bottom-section a:hover',
                '.eltd-blog-holder.eltd-blog-type-masonry-gallery article .eltd-post-info a:hover',
                '.eltd-blog-holder.eltd-blog-type-masonry-gallery article.format-link .eltd-quote-author a:hover',
                '.eltd-blog-holder.eltd-blog-type-masonry-gallery article.format-quote .eltd-quote-author a:hover',
                '.eltd-filter-blog-holder li.eltd-active',
                '.eltd-single-links-pages .eltd-single-links-pages-inner > span',
                '.eltd-single-links-pages a',
                '.eltd-blog-holder.eltd-blog-type-masonry-gallery article.format-link .eltd-icon-post-mark span',
                '.eltd-blog-holder.eltd-blog-type-masonry-gallery article.format-quote .eltd-icon-post-mark span',
                '.eltd-filter-blog-holder li.eltd-active',
                '.eltd-single-links-pages .eltd-single-links-pages-inner > span',
                '.eltd-single-links-pages a',
                '.eltd-blog-holder.eltd-blog-single .eltd-author-description .eltd-author-social-holder a:hover',
                '.eltd-blog-holder.eltd-blog-single .eltd-single-tags-holder .eltd-tags a:hover',
                '.eltd-blog-holder.eltd-blog-single .eltd-blog-single-navigation .eltd-blog-navigation-info:hover',
                '.eltd-portfolio-list-holder article .eltd-item-icons-holder a',
                '.eltd-portfolio-list-holder-outer.eltd-ptf-standard-no-space article .eltd-item-icons-holder a',
                '.eltd-blog-list-holder.eltd-blog-simple .eltd-blog-list-item .eltd-post-info.eltd-bottom-section .eltd-left-section a:hover',
                '.eltd-blog-list-holder.eltd-blog-simple .eltd-blog-list-item .eltd-post-info.eltd-bottom-section .eltd-right-section a:hover',
                '.eltd-portfolio-list-holder article .eltd-ptf-like-holder .eltd-ptf-like-item.eltd-ptf-like-text a:hover',
                '.eltd-portfolio-single-holder .eltd-ptf-like-holder .eltd-ptf-like-item.eltd-ptf-like-text a:hover',
                '.eltd-blog-list-holder.eltd-blog-author-top .eltd-blog-list-item .eltd-item-info-section a:hover',
                '.eltd-blog-list-holder.eltd-blog-minimal .eltd-blog-list-item .eltd-item-text-holder .eltd-item-info-section a:hover',
                '.eltd-blog-list-holder.eltd-masonry .eltd-blog-list .eltd-blog-list-masonry-item .eltd-item-info-section a:hover',
                '.eltd-blog-list-holder.eltd-blog-border-bottom .eltd-blog-list-item .eltd-item-info-section a:hover',
                '.eltd-blog-carousel-holder.eltd-carousel-cards .eltd-blog-carousel-item .eltd-item-info-section a:hover',
                '.eltd-portfolio-list-holder article .eltd-ptf-category-holder a:hover',
                '.eltd-portfolio-list-holder-outer.eltd-ptf-standard-no-space article .eltd-ptf-category-holder a:hover',
                '.eltd-portfolio-list-holder article .eltd-ptf-like-holder .eltd-ptf-like-item.eltd-ptf-like-icon a.eltd-like:hover',
                '.eltd-portfolio-list-holder article .eltd-ptf-like-holder .eltd-ptf-like-item.eltd-ptf-like-icon a.eltd-like.liked',
                'h1 a:hover',
                'h2 a:hover',
                'h3 a:hover',
                'h4 a:hover',
                'h5 a:hover',
                'h6 a:hover',
                'a',
                'p a',
                '.eltd-portfolio-list-holder article .eltd-item-icons-holder a',
                '.eltd-portfolio-list-holder-outer.eltd-ptf-standard-no-space article .eltd-item-icons-holder a',
                '.eltd-blog-list-holder.eltd-blog-simple .eltd-blog-list-item .eltd-post-info.eltd-bottom-section .eltd-left-section a:hover',
                '.eltd-blog-list-holder.eltd-blog-simple .eltd-blog-list-item .eltd-post-info.eltd-bottom-section .eltd-right-section a:hover',
                '.eltd-portfolio-list-holder article .eltd-ptf-like-holder .eltd-ptf-like-item.eltd-ptf-like-text a:hover',
                '.eltd-portfolio-single-holder .eltd-ptf-like-holder .eltd-ptf-like-item.eltd-ptf-like-text a:hover',
                '.eltd-blog-list-holder.eltd-blog-author-top .eltd-blog-list-item .eltd-item-info-section a:hover',
                '.eltd-blog-list-holder.eltd-blog-minimal .eltd-blog-list-item .eltd-item-text-holder .eltd-item-info-section a:hover',
                '.eltd-blog-list-holder.eltd-masonry .eltd-blog-list .eltd-blog-list-masonry-item .eltd-item-info-section a:hover',
                '.eltd-blog-list-holder.eltd-blog-border-bottom .eltd-blog-list-item .eltd-item-info-section a:hover',
                '.eltd-blog-carousel-holder.eltd-carousel-cards .eltd-blog-carousel-item .eltd-item-info-section a:hover',
                '.eltd-portfolio-list-holder article .eltd-ptf-category-holder a:hover',
                '.eltd-portfolio-list-holder-outer.eltd-ptf-standard-no-space article .eltd-ptf-category-holder a:hover',
                '.eltd-portfolio-list-holder article .eltd-ptf-like-holder .eltd-ptf-like-item.eltd-ptf-like-icon a.eltd-like:hover',
                '.eltd-portfolio-list-holder article .eltd-ptf-like-holder .eltd-ptf-like-item.eltd-ptf-like-icon a.eltd-like.liked',
                '.wpcf7-form.cf7_custom_style_2 input.wpcf7-form-control.wpcf7-submit',
                '.eltd-comment-holder .eltd-comment .eltd-comment-info .eltd-right a:hover',
                '.eltd-pagination ul li > a',
                '.eltd-pagination ul li > span',
                '.eltd-404-page .eltd-page-not-found .eltd-btn.eltd-btn-solid',
                '.eltd-404-page.eltd-404-dark h2',
                '.eltd-404-page.eltd-404-dark h4',
                '.eltd-404-page.eltd-404-dark .eltd-btn.eltd-btn-solid:hover',
                '#eltd-back-to-top > span',
                '.eltd-main-menu ul li:hover a',
                '.eltd-main-menu ul li.eltd-active-item a',
                'body:not(.eltd-menu-item-first-level-bg-color) .eltd-main-menu > ul > li:hover > a',
                '.eltd-main-menu > ul > li.eltd-active-item > a',
                '.eltd-drop-down .wide .second .inner > ul > li > a:hover',
                '.eltd-header-vertical .eltd-vertical-dropdown-float .second .inner ul li a:hover',
                '.eltd-header-vertical .eltd-vertical-dropdown-toggle .second .inner ul li a:hover',
                '.eltd-header-vertical .eltd-vertical-menu ul li a:hover',
                '.eltd-mobile-header .eltd-mobile-nav a:hover',
                '.eltd-mobile-header .eltd-mobile-nav h4:hover',
                '.eltd-mobile-header .eltd-mobile-menu-opener a:hover',
                '.eltd-side-menu-button-opener:hover',
                '.small-slider .eltd-owl-slider .owl-nav .eltd-next-icon span',
                '.small-slider .eltd-owl-slider .owl-nav .eltd-prev-icon span',
                '.big-slider .eltd-owl-slider .owl-nav .eltd-next-icon span',
                '.big-slider .eltd-owl-slider .owl-nav .eltd-prev-icon span',
                '.eltd-portfolio-single-holder .eltd-ptf-like-holder .eltd-ptf-like-item.eltd-ptf-like-icon a.eltd-like:hover',
                '.eltd-portfolio-single-holder .eltd-ptf-like-holder .eltd-ptf-like-item.eltd-ptf-like-icon a.eltd-like.liked',
                '.eltd-team .eltd-team-name',
                '.eltd-team.main-info-below-image .eltd-team-info .eltd-team-social.normal .eltd-team-social-icon-holder .eltd-team-icon-holder-inner .eltd-icon-shortcode a:hover',
                '.eltd-team.main-info-below-image .eltd-team-info .eltd-team-icon-holder-inner > span.square:last-child span',
                '.eltd-counter-dark .eltd-counter-title',
                '.eltd-icon-shortcode.square:hover .eltd-icon-element',
                '.eltd-countdown.eltd-skin-dark',
                '.eltd-message .eltd-message-inner a.eltd-close i:hover',
                '.eltd-ordered-list ol > li:before',
                '.eltd-icon-list-item .eltd-icon-list-icon-holder-inner i',
                '.eltd-icon-list-item .eltd-icon-list-icon-holder-inner .font_elegant',
                '.eltd-pie-chart-with-icon-holder .eltd-percentage-with-icon i',
                '.eltd-pie-chart-with-icon-holder .eltd-percentage-with-icon span',
                '.eltd-tabs .eltd-tabs-nav li a',
                '.eltd-accordion-holder .eltd-title-holder.ui-state-active',
                '.eltd-accordion-holder .eltd-title-holder.ui-state-hover',
                '.eltd-blog-slider-holder .eltd-blog-slider-item .eltd-blog-slider-top-section .eltd-btn',
                '.eltd-dropcaps',
                '.eltd-ptf-overlay .eltd-portfolio-list-holder article .eltd-item-text-overlay .eltd-item-title',
                '.eltd-ptf-overlay .eltd-portfolio-list-holder article .eltd-item-text-overlay .eltd-ptf-category-holder',
                '.eltd-ptf-overlay.eltd-ptf-overlay-light .eltd-portfolio-list-holder article .eltd-item-text-overlay .eltd-item-title',
                '.eltd-ptf-overlay.eltd-ptf-overlay-light .eltd-portfolio-list-holder article .eltd-item-text-overlay .eltd-ptf-category-holder',
                '.eltd-ptf-overlay.eltd-ptf-overlay-light .eltd-portfolio-list-holder article .eltd-item-title',
                '.eltd-ptf-overlay.eltd-ptf-overlay-light .eltd-portfolio-list-holder article .eltd-ptf-category-holder',
                '.eltd-ptf-overlay.eltd-ptf-overlay-light .eltd-portfolio-list-holder article .eltd-item-excerpt',
                '.eltd-portfolio-filter-holder .eltd-portfolio-filter-holder-inner ul li span',
                '.eltd-iwt .eltd-icon-shortcode.circle a',
                '.eltd-social-share-holder.eltd-list li a:hover',
                '.eltd-social-share-holder.eltd-list li:hover',
                '.eltd-social-share-holder.eltd-dropdown .eltd-social-share-dropdown-opener:hover',
                '.eltd-social-share-holder.eltd-dropdown .eltd-social-share-dropdown ul li a:hover',
                '.eltd-product .eltd-product-price',
                '.eltd-product-list-holder.eltd-product-list-with-filter .eltd-product-list-filter li span',
                '.eltd-product-list-holder.eltd-product-list-with-filter .eltd-product-list-filter li.active span',
                '.eltd-product-slider-holder .owl-controls .owl-nav .owl-prev',
                '.eltd-product-slider-holder .owl-controls .owl-nav .owl-next',
                '.eltd-product-slider-holder .eltd-bottom-text p',
                '.carousel .carousel-control .eltd-prev-nav:hover',
                '.carousel .carousel-control .eltd-next-nav:hover',
                '.eltd-dark-header .carousel .carousel-control .eltd-prev-nav:hover',
                '.eltd-dark-header .carousel .carousel-control .eltd-next-nav:hover',
                '.eltd-light-header .carousel .carousel-control .eltd-prev-nav:hover',
                '.eltd-light-header .carousel .carousel-control .eltd-next-nav:hover',
                '.eltd-footer-inner #lang_sel a:hover',
                '.eltd-side-menu #lang_sel a:hover',
                '.eltd-top-bar #lang_sel .lang_sel_sel:hover',
                '.eltd-top-bar #lang_sel ul ul a:hover',
                '.eltd-top-bar #lang_sel_list ul li a:hover',
                '.eltd-main-menu .menu-item-language .submenu-languages a:hover',
                '.eltd-sticky-header .eltd-position-right .widget_icl_lang_sel_widget #lang_sel .lang_sel_sel:hover',
                '.eltd-menu-area .eltd-position-right .widget_icl_lang_sel_widget #lang_sel .lang_sel_sel:hover',
                '.eltd-sticky-header .eltd-position-right .widget_icl_lang_sel_widget #lang_sel_list ul li a:hover',
                '.eltd-menu-area .eltd-position-right .widget_icl_lang_sel_widget #lang_sel_list ul li a:hover',
                '.eltd-preloader svg circle'
            );

            $background_color_selector = array(
                '.eltd-single-links-pages .eltd-single-links-pages-inner > span:hover',
                '.eltd-single-links-pages a:hover',
                '.eltd-blog-holder.eltd-blog-type-three-columns article.format-quote .eltd-post-mark',
                '.eltd-blog-holder.eltd-blog-type-three-columns article.format-link .eltd-post-mark',
                '.eltd-single-links-pages .eltd-single-links-pages-inner > span:hover',
                '.eltd-single-links-pages a:hover',
                '.eltd-portfolio-list-holder article .eltd-item-icons-holder',
                '.eltd-portfolio-list-holder-outer.eltd-ptf-standard-no-space article .eltd-item-icons-holder',
                '.eltd-st-loader .eltd-square .eltd-line',
                '.eltd-st-loader .eltd-dropcaps.eltd-circle .eltd-line',
                '.eltd-st-loader .pulse',
                '.eltd-st-loader .double_pulse .double-bounce1',
                '.eltd-st-loader .double_pulse .double-bounce2',
                '.eltd-st-loader .cube',
                '.eltd-st-loader .rotating_cubes .cube1',
                '.eltd-st-loader .rotating_cubes .cube2',
                '.eltd-st-loader .stripes > div',
                '.eltd-st-loader .wave > div',
                '.eltd-st-loader .two_rotating_circles .dot1',
                '.eltd-st-loader .two_rotating_circles .dot2',
                '.eltd-st-loader .five_rotating_circles .container1 > div',
                '.eltd-st-loader .five_rotating_circles .container2 > div',
                '.eltd-st-loader .five_rotating_circles .container3 > div',
                '.eltd-st-loader .atom .ball-1:before'.
                '.eltd-st-loader .atom .ball-2:before',
                '.eltd-st-loader .atom .ball-3:before',
                '.eltd-st-loader .atom .ball-4:before',
                '.eltd-st-loader .clock .ball:before',
                '.eltd-st-loader .mitosis .ball',
                '.eltd-st-loader .lines .line1',
                '.eltd-st-loader .lines .line2',
                '.eltd-st-loader .lines .line3',
                '.eltd-st-loader .lines .line4',
                '.eltd-st-loader .fussion .ball',
                '.eltd-st-loader .fussion .ball-1',
                '.eltd-st-loader .fussion .ball-2',
                '.eltd-st-loader .fussion .ball-3',
                '.eltd-st-loader .fussion .ball-4',
                '.eltd-st-loader .wave_circles .ball',
                '.eltd-st-loader .pulse_circles .ball',
                '.eltd-portfolio-list-holder article .eltd-item-icons-holder',
                '.eltd-portfolio-list-holder-outer.eltd-ptf-standard-no-space article .eltd-item-icons-holder',
                '.post-password-form input[type="submit"]',
                'input.wpcf7-form-control.wpcf7-submit',
                '.eltd-pagination ul li > a:hover',
                '.eltd-pagination ul li > span:hover',
                '.eltd-pagination ul li.active > a',
                '.eltd-pagination ul li.active > span',
                '.eltd-owl-slider .owl-dots .owl-dot span',
                '.slick-slider.slick-initialized .slick-dots li',
                '.eltd-404-page.eltd-404-dark .eltd-btn.eltd-btn-solid',
                '.eltd-header-vertical .eltd-vertical-dropdown-toggle .second:after',
                '.eltd-header-vertical .eltd-vertical-menu > ul > li > a:before',
                '.eltd-header-vertical .eltd-vertical-menu > ul > li > a:after',
                '.eltd-header-type2 .eltd-page-header .eltd-menu-area',
                '.eltd-fullscreen-menu-opener .eltd-line',
                '.eltd-progress-bar .eltd-progress-content-outer .eltd-progress-content',
                '.eltd-progress-bar .eltd-progress-number-wrapper.eltd-floating-outside .eltd-progress-number',
                '.eltd-progress-bar.light .eltd-progress-content-outer',
                '.eltd-testimonials.eltd-with-icon .eltd-testimonials-icon > i',
                '.eltd-testimonials.eltd-with-icon .eltd-testimonials-icon > span',
                '.eltd-price-table.eltd-featured .eltd-table-title',
                '.eltd-pricing-tables.eltd-bigger-featured .eltd-price-table.eltd-featured .eltd-table-title',
                '.eltd-pie-chart-doughnut-holder .eltd-pie-legend ul li .eltd-pie-color-holder',
                '.eltd-pie-chart-pie-holder .eltd-pie-legend ul li .eltd-pie-color-holder',
                '.eltd-tabs.eltd-horizontal-tab.eltd-color-tabs li:hover a',
                '.eltd-tabs.eltd-horizontal-tab.eltd-color-tabs li.ui-state-active a',
                '.eltd-tabs.eltd-horizontal-tab.eltd-color-tabs li.active a',
                '.eltd-tabs.eltd-vertical-tab.eltd-color-tabs li:hover a',
                '.eltd-tabs.eltd-vertical-tab.eltd-color-tabs li.ui-state-active a',
                '.eltd-tabs.eltd-transparent-tabs.eltd-horizontal-tab li a:after',
                '.eltd-tabs.eltd-transparent-tabs.eltd-vertical-tab .eltd-tabs-nav li a:after',
                '.eltd-accordion-holder .eltd-title-holder.ui-state-active .eltd-accordion-mark',
                '.eltd-accordion-holder .eltd-title-holder.ui-state-hover .eltd-accordion-mark',
                '.eltd-accordion-holder.eltd-boxed .eltd-title-holder.ui-state-active',
                '.eltd-accordion-holder.eltd-boxed .eltd-title-holder.ui-state-hover',
                '.eltd-accordion-holder.eltd-boxed.light .eltd-title-holder.ui-state-active',
                '.eltd-accordion-holder.eltd-boxed.light .eltd-title-holder.ui-state-hover',
                '.eltd-accordion-holder.eltd-boxed.dark .eltd-title-holder.ui-state-active',
                '.eltd-accordion-holder.eltd-boxed.dark .eltd-title-holder.ui-state-hover',
                '.eltd-blog-list-holder.eltd-blog-border-bottom .eltd-blog-list-item:after',
                '.eltd-blog-carousel-holder .eltd-blog-carousel-wrapper.owl-carousel .owl-dots .owl-dot span',
                '.eltd-carousel[data-image-animation="underline"]:not([data-show_in_two_rows="yes"]) .eltd-underline .eltd-carousel-line',
                '.eltd-image-gallery .owl-controls .owl-dots .owl-dot span',
                '.eltd-dropcaps.eltd-square, .eltd-dropcaps.eltd-circle',
                '.eltd-ptf-slide-up .eltd-portfolio-list-holder article .eltd-item-text-overlay',
                '.eltd-ptf-overlay.eltd-ptf-overlay-dark .eltd-portfolio-list-holder article .eltd-item-text-overlay',
                '.eltd-portfolio-filter-holder .eltd-portfolio-filter-holder-inner ul li span:after',
                '.eltd-portfolio-slider-holder .eltd-portfolio-list-holder.owl-carousel .owl-dots .owl-dot span',
                '.carousel .carousel-indicators:not(.thumbnails) li',
                '.eltd-dark-header .carousel .carousel-indicators:not(.thumbnails) li',
                '.eltd-typed-wrap',
                '.widget .eltd-widget-title'
            );

            $background_color_important_selector = array(
                '.eltd-404-page .eltd-page-not-found .eltd-btn.eltd-btn-solid:hover',
                '.mejs-container',
                '.mejs-embed body',
                '.mejs-container .mejs-controls',
                '.eltd-product-slider-holder .eltd-product-slider-item-holder .eltd-product-slider-caption .add_to_cart_button'
            );

            $border_color_selector = array(
                '.eltd-single-links-pages .eltd-single-links-pages-inner > span:hover',
                '.eltd-single-links-pages a:hover',
                '.eltd-single-links-pages .eltd-single-links-pages-inner > span:hover',
                '.eltd-single-links-pages a:hover',
                '.eltd-portfolio-list-holder article .eltd-item-icons-holder a',
                '.eltd-portfolio-list-holder-outer.eltd-ptf-standard-no-space article .eltd-item-icons-holder a',
                '.eltd-st-loader .pulse_circles .ball',
                '.eltd-portfolio-list-holder article .eltd-item-icons-holder a',
                '.eltd-portfolio-list-holder-outer.eltd-ptf-standard-no-space article .eltd-item-icons-holder a',
                '.wpcf7-form-control.wpcf7-text:focus, .wpcf7-form-control.wpcf7-number:focus',
                '.wpcf7-form-control.wpcf7-date:focus, .wpcf7-form-control.wpcf7-textarea:focus',
                '.wpcf7-form-control.wpcf7-select:focus',
                '.wpcf7-form-control.wpcf7-quiz:focus',
                '.post-password-form input[type="password"]:focus',
                '.comment-respond input[type="text"]:focus',
                '.comment-respond input[type="email"]:focus',
                '.comment-respond textarea:focus, .widget input:focus',
                '.widget select:focus',
                '.post-password-form input[type="submit"]',
                'input.wpcf7-form-control.wpcf7-submit',
                '.eltd-pagination ul li > a:hover',
                '.eltd-pagination ul li > span:hover',
                '.eltd-pagination ul li.active > a',
                '.eltd-pagination ul li.active > span',
                '.eltd-404-page.eltd-404-dark .eltd-btn.eltd-btn-solid',
                '#eltd-back-to-top > span:before',
                '.eltd-progress-bar .eltd-progress-number-wrapper.eltd-floating .eltd-down-arrow',
                '.eltd-price-table.eltd-featured .eltd-table-title',
                '.eltd-tabs.eltd-vertical-tab.eltd-color-tabs li:hover a',
                '.eltd-tabs.eltd-vertical-tab.eltd-color-tabs li.ui-state-active a',
                '.eltd-accordion-holder .eltd-title-holder.ui-state-active .eltd-accordion-mark',
                '.eltd-accordion-holder .eltd-title-holder.ui-state-hover .eltd-accordion-mark',
                '.eltd-accordion-holder.eltd-boxed .eltd-title-holder.ui-state-active',
                '.eltd-accordion-holder.eltd-boxed .eltd-title-holder.ui-state-hover',
                '.eltd-accordion-holder.eltd-boxed.light .eltd-title-holder.ui-state-active',
                '.eltd-accordion-holder.eltd-boxed.light .eltd-title-holder.ui-state-hover',
                '.eltd-accordion-holder.eltd-boxed.dark .eltd-title-holder.ui-state-active',
                '.eltd-accordion-holder.eltd-boxed.dark .eltd-title-holder.ui-state-hover',
                '.eltd-product-list-holder.eltd-product-list-with-filter .eltd-product-list-filter li span',
                '.eltd-product-list-holder.eltd-product-list-with-filter .eltd-product-list-filter li.active span',

            );

            $border_color_important_selector = array(
                '.eltd-404-page .eltd-page-not-found .eltd-btn.eltd-btn-solid:hover',
                '.eltd-product-slider-holder .eltd-product-slider-item-holder .eltd-product-slider-caption .add_to_cart_button',
                '.eltd-header-standard .eltd-menu-area .eltd-vertical-align-containers .eltd-position-right-inner .widget.widget_search form input[type="text"]:focus'
            );

            $woocommerce_color_selector = array(
                '.woocommerce-account input[type="submit"]',
                '.woocommerce .product .added_to_cart',
                '.eltd-woocommerce-page .product .added_to_cart',
                '.eltd-single-product-summary #reviews .comment-form input.submit',
                '.eltd-single-product-summary #reviews .comment-form textarea.submit',
                '.eltd-woocommerce-page .checkout_coupon .button',
                '.widget_shopping_cart .buttons a',
                '.widget_price_filter button',
                '.woocommerce-account input[type="submit"]:hover',
                '.woocommerce .product .added_to_cart:hover',
                '.eltd-woocommerce-page .product .added_to_cart:hover',
                '.eltd-single-product-summary #reviews .comment-form input.submit:hover',
                '.eltd-single-product-summary #reviews .comment-form textarea.submit:hover',
                '.eltd-woocommerce-page .checkout_coupon .button:hover',
                '.widget_shopping_cart .buttons a:hover',
                '.widget_price_filter button:hover',
                '.woocommerce-account input[type="submit"]:hover',
                '.woocommerce-pagination .page-numbers li > a',
                '.woocommerce-pagination .page-numbers li > span',
                '.eltd-single-product-summary .eltd-single-product-actions .yith-wcwl-add-to-wishlist a:hover',
                '.eltd-single-product-summary .product_meta .eltd-woocommerce-meta-table a:hover',
                '.eltd-single-product-summary #reviews .comment-form-rating .stars.selected a:after',
                '.eltd-shopping-cart-widget .eltd-shopping-cart a .eltd-shopping-cart-number',
                '.select2-container-multi .select2-choices .select2-search-choice',
                '.widget_shopping_cart .buttons a:hover',
                '.widget_price_filter button:hover'

            );
            $woocommerce_color_important_selector = array(
                '.eltd-dark-header .eltd-shopping-cart-widget .eltd-shopping-cart .eltd-shopping-cart-number'


            );
            $woocommerce_background_color_selector = array(
                '.woocommerce-account .woocommerce-MyAccount-navigation li.is-active a',
                '.woocommerce-account input[type="submit"]',
                '.woocommerce-pagination .page-numbers li > a:hover',
                '.woocommerce-pagination .page-numbers li > span:hover',
                '.woocommerce-pagination .page-numbers li > a.current',
                '.woocommerce-pagination .page-numbers li > span.current',
                '.eltd-single-product-summary .cart .reset_variations:hover',
                '.widget_price_filter button'
            );

            $woocommerce_border_color_selector = array(
                '.eltd-woocommerce-page input[type="text"]:focus',
                '.eltd-woocommerce-page input[type="email"]:focus',
                '.eltd-woocommerce-page input[type="tel"]:focus',
                '.eltd-woocommerce-page input[type="password"]:focus',
                '.eltd-woocommerce-page textarea:focus',
                '.woocommerce-pagination .page-numbers li > a:hover',
                '.woocommerce-pagination .page-numbers li > span:hover',
                '.woocommerce-pagination .page-numbers li > a.current',
                '.woocommerce-pagination .page-numbers li > span.current'
            );

            echo woly_elated_dynamic_css($color_selector, array('color' => woly_elated_options()->getOptionValue('first_color')));
            echo woly_elated_dynamic_css('::selection', array('background' => woly_elated_options()->getOptionValue('first_color')));
            echo woly_elated_dynamic_css('::-moz-selection', array('background' => woly_elated_options()->getOptionValue('first_color')));
            echo woly_elated_dynamic_css($background_color_selector, array('background-color' => woly_elated_options()->getOptionValue('first_color')));
            echo woly_elated_dynamic_css($background_color_important_selector, array('background-color' => woly_elated_options()->getOptionValue('first_color').'!important'));
            echo woly_elated_dynamic_css($border_color_selector, array('border-color' => woly_elated_options()->getOptionValue('first_color')));
            echo woly_elated_dynamic_css($border_color_important_selector, array('border-color' => woly_elated_options()->getOptionValue('first_color').'!important'));
            echo woly_elated_dynamic_css($woocommerce_color_selector, array('color' => woly_elated_options()->getOptionValue('first_color')));
            echo woly_elated_dynamic_css($woocommerce_color_important_selector, array('color' => woly_elated_options()->getOptionValue('first_color').'!important'));
            echo woly_elated_dynamic_css($woocommerce_background_color_selector, array('background-color' => woly_elated_options()->getOptionValue('first_color')));
            echo woly_elated_dynamic_css($woocommerce_border_color_selector, array('border-color' => woly_elated_options()->getOptionValue('first_color')));
        }

        if(woly_elated_options()->getOptionValue('second_color') !== "") {
            $second_color_selector = array(
                '.eltd-blog-holder article .eltd-post-info.eltd-bottom-section .eltd-post-info-comments-holder > span',
                '.eltd-blog-holder article .eltd-post-info.eltd-top-section .eltd-post-info-date',
                '.eltd-blog-holder.eltd-blog-type-standard article.eltd-split-post .eltd-post-header .eltd-post-header-left .eltd-top-section .eltd-post-info-date',
                '.eltd-blog-holder.eltd-blog-type-masonry .eltd-post-info.eltd-top-section .eltd-post-info-date',
                '.eltd-blog-holder article .eltd-post-info.eltd-top-section .eltd-post-info-category',
                '.eltd-blog-holder.eltd-blog-type-standard article.eltd-split-post .eltd-post-header .eltd-post-header-left .eltd-top-section .eltd-post-info-category',
                '.eltd-blog-holder.eltd-blog-type-masonry .eltd-post-info.eltd-top-section .eltd-post-info-category',
                '.eltd-blog-holder article .eltd-post-info.eltd-top-section .eltd-post-info-category a',
                '.eltd-blog-holder.eltd-blog-type-standard article.eltd-split-post .eltd-post-header .eltd-post-header-left .eltd-top-section .eltd-post-info-category a',
                '.eltd-blog-holder.eltd-blog-type-masonry .eltd-post-info.eltd-top-section .eltd-post-info-category a',
                '.eltd-blog-holder article .eltd-post-title a:hover',
                '.eltd-blog-holder article.format-quote .eltd-post-info.eltd-top-section',
                '.eltd-blog-holder article.format-link .eltd-post-info.eltd-top-section',
                '.eltd-blog-holder article.format-quote .eltd-post-info.eltd-top-section a:hover',
                '.eltd-blog-holder article.format-link .eltd-post-info.eltd-top-section a:hover',
                '.eltd-blog-holder.eltd-blog-type-standard article.eltd-split-post .eltd-post-header .eltd-post-header-left',
                '.eltd-blog-holder.eltd-blog-type-three-columns article.format-quote .eltd-post-info.eltd-top-section',
                '.eltd-blog-holder.eltd-blog-type-three-columns article.format-link .eltd-post-info.eltd-top-section',
                '.eltd-blog-holder.eltd-blog-type-three-columns article.format-quote .eltd-post-info.eltd-top-section a:hover',
                '.eltd-blog-holder.eltd-blog-type-three-columns article.format-link .eltd-post-info.eltd-top-section a:hover',
                '.eltd-blog-holder.eltd-blog-type-chequered article.format-quote .eltd-post-content .eltd-post-text .eltd-post-mark .eltd-link-quote-mark',
                '.eltd-blog-holder.eltd-blog-type-chequered article.format-link .eltd-post-content .eltd-post-text .eltd-post-mark .eltd-link-quote-mark',
                '.eltd-blog-holder.eltd-blog-type-chequered article.format-quote .eltd-post-content .eltd-post-text .eltd-post-mark .eltd-link-mark',
                '.eltd-blog-holder.eltd-blog-type-chequered article.format-link .eltd-post-content .eltd-post-text .eltd-post-mark .eltd-link-mark',
                '.eltd-blog-holder.eltd-blog-type-chequered article.format-quote .eltd-post-content .eltd-post-text .eltd-quote-author',
                '.eltd-blog-holder.eltd-blog-type-chequered article.format-link .eltd-post-content .eltd-post-text .eltd-quote-author',
                '.eltd-blog-list-holder.eltd-blog-simple .eltd-blog-list-item .eltd-post-info.eltd-bottom-section .eltd-post-info-comments-holder > span',
                '.eltd-blog-list-holder.eltd-blog-standard .eltd-blog-list-item .eltd-item-text-holder .eltd-item-info-section.eltd-small-info-section .eltd-post-info-date',
                '.eltd-blog-list-holder.eltd-blog-simple .eltd-blog-list-item .eltd-post-info.eltd-top-section .eltd-post-info-date',
                '.eltd-blog-list-holder.eltd-blog-border-bottom .eltd-blog-list-item .eltd-item-info-section.eltd-large-info-section .eltd-post-info-date',
                '.eltd-blog-list-holder.eltd-blog-standard .eltd-blog-list-item .eltd-item-text-holder .eltd-item-info-section.eltd-small-info-section .eltd-post-info-category',
                '.eltd-blog-list-holder.eltd-blog-simple .eltd-blog-list-item .eltd-post-info.eltd-top-section .eltd-post-info-category',
                '.eltd-blog-list-holder.eltd-blog-border-bottom .eltd-blog-list-item .eltd-item-info-section.eltd-large-info-section .eltd-post-info-category',
                '.eltd-blog-list-holder.eltd-blog-standard .eltd-blog-list-item .eltd-item-text-holder .eltd-item-info-section.eltd-small-info-section .eltd-post-info-category a',
                '.eltd-blog-list-holder.eltd-blog-simple .eltd-blog-list-item .eltd-post-info.eltd-top-section .eltd-post-info-category a',
                '.eltd-blog-list-holder.eltd-blog-border-bottom .eltd-blog-list-item .eltd-item-info-section.eltd-large-info-section .eltd-post-info-category a',
                '.eltd-blog-list-holder > ul .eltd-blog-list-item .eltd-item-info-section',
                '.eltd-blog-list-holder > ul .eltd-blog-list-item .eltd-item-info-section a:hover',
                '.eltd-blog-list-holder.eltd-blog-standard .eltd-blog-list-item .eltd-item-text-holder .eltd-item-info-section a:hover',
                '.eltd-blog-list-holder.eltd-blog-simple .eltd-blog-list-item .eltd-post-info.eltd-bottom-section .eltd-post-info-comments-holder > span',
                '.eltd-blog-list-holder.eltd-blog-standard .eltd-blog-list-item .eltd-item-text-holder .eltd-item-info-section.eltd-small-info-section .eltd-post-info-date',
                '.eltd-blog-list-holder.eltd-blog-simple .eltd-blog-list-item .eltd-post-info.eltd-top-section .eltd-post-info-date',
                '.eltd-blog-list-holder.eltd-blog-border-bottom .eltd-blog-list-item .eltd-item-info-section.eltd-large-info-section .eltd-post-info-date',
                '.eltd-blog-list-holder.eltd-blog-standard .eltd-blog-list-item .eltd-item-text-holder .eltd-item-info-section.eltd-small-info-section .eltd-post-info-category',
                '.eltd-blog-list-holder.eltd-blog-simple .eltd-blog-list-item .eltd-post-info.eltd-top-section .eltd-post-info-category',
                '.eltd-blog-list-holder.eltd-blog-border-bottom .eltd-blog-list-item .eltd-item-info-section.eltd-large-info-section .eltd-post-info-category',
                '.eltd-blog-list-holder.eltd-blog-standard .eltd-blog-list-item .eltd-item-text-holder .eltd-item-info-section.eltd-small-info-section .eltd-post-info-category a',
                '.eltd-blog-list-holder.eltd-blog-simple .eltd-blog-list-item .eltd-post-info.eltd-top-section .eltd-post-info-category a',
                '.eltd-blog-list-holder.eltd-blog-border-bottom .eltd-blog-list-item .eltd-item-info-section.eltd-large-info-section .eltd-post-info-category a',
                '.eltd-blog-list-holder > ul .eltd-blog-list-item .eltd-item-info-section',
                '.eltd-blog-list-holder.eltd-blog-standard .eltd-blog-list-item .eltd-item-text-holder .eltd-item-info-section',
                '.eltd-blog-list-holder > ul .eltd-blog-list-item .eltd-item-info-section a:hover',
                '.eltd-blog-list-holder.eltd-blog-standard .eltd-blog-list-item .eltd-item-text-holder .eltd-item-info-section a:hover',
                '.eltd-header-type2 .eltd-page-header .eltd-menu-area .eltd-main-menu > ul > li > a:hover',
                'nav.eltd-fullscreen-menu ul li a:hover',
                'nav.eltd-fullscreen-menu ul li ul li a:hover',
                '.eltd-counter-holder .eltd-counter',
                '.eltd-price-table .eltd-price-table-inner .eltd-table-price .eltd-value',
                '.eltd-tabs .eltd-tabs-nav li a .eltd-icon-frame',
                '.eltd-blog-list-holder.eltd-blog-author-top .eltd-blog-list-item .eltd-author-icon',
                '.eltd-blog-list-holder.eltd-blog-minimal .eltd-blog-list-item:hover .eltd-item-title',
                '.eltd-blog-carousel-holder.eltd-carousel-cards .eltd-blog-carousel-item .eltd-blog-icon',
                '.eltd-blog-carousel-holder.eltd-carousel-cards .eltd-blog-carousel-item .eltd-item-info-section.eltd-large-info-section',
                '.eltd-blog-slider-holder .eltd-blog-slider-item .eltd-blog-slider-top-section .eltd-btn:hover',
                '.eltd-btn.eltd-btn-outline',
                '.eltd-btn.eltd-btn-transparent:hover',
                '.eltd-iwt .eltd-iwt-icon-holder .eltd-icon-shortcode a:hover',
                '.eltd-processes-holder .eltd-process-arrow-right',
                '.eltd-product-slider-holder .eltd-product-slider-item-holder .eltd-product-slider-caption h2 a:hover',
                '.carousel .carousel-control .eltd-prev-nav:hover',
                '.carousel .carousel-control .eltd-next-nav:hover',
                '.eltd-dark-header .carousel .carousel-control .eltd-prev-nav:hover',
                '.eltd-dark-header .carousel .carousel-control .eltd-next-nav:hover',
                '.eltd-light-header .carousel .carousel-control .eltd-prev-nav:hover',
                '.eltd-light-header .carousel .carousel-control .eltd-next-nav:hover',
                '.widget ul li a:hover',
                'footer .widget.widget_eltd_twitter_widget li .eltd_tweet_text a',
                '.eltd-promotion-list-holder .eltd-promotion-item-holder .eltd-promotion-item-text-holder .eltd-period-icon',
                '.eltd-promotion-list-holder .eltd-promotion-item-holder .eltd-promotion-item-text-holder .eltd-destination-icon'
            );

            $second_color_important_selector = array(
                '.eltd-btn.eltd-btn-solid:not(.eltd-btn-custom-hover-color):hover'
            );

            $second_background_color_selector = array(
                '.eltd-owl-slider .owl-dots .owl-dot.active span',
                '.eltd-testimonials .owl-controls .owl-dots .owl-dot.active span',
                '.eltd-blog-carousel-holder .eltd-blog-carousel-wrapper.owl-carousel .owl-dots .owl-dot.active span',
                '.eltd-blog-slider-holder .eltd-blog-slider.owl-carousel .owl-dots .owl-dot.active span',
                '.eltd-carousel-holder .eltd-carousel.owl-carousel .owl-dots .owl-dot.active span',
                '.eltd-image-gallery .owl-controls .owl-dots .owl-dot.active span',
                '.eltd-portfolio-slider-holder .eltd-portfolio-list-holder.owl-carousel .owl-dots .owl-dot.active span',
                '.eltd-owl-slider .owl-dots .owl-dot.active span',
                '.eltd-testimonials .owl-controls .owl-dots .owl-dot.active span',
                '.eltd-blog-carousel-holder .eltd-blog-carousel-wrapper.owl-carousel .owl-dots .owl-dot.active span',
                '.eltd-blog-slider-holder .eltd-blog-slider.owl-carousel .owl-dots .owl-dot.active span',
                '.eltd-carousel-holder .eltd-carousel.owl-carousel .owl-dots .owl-dot.active span',
                '.eltd-image-gallery .owl-controls .owl-dots .owl-dot.active span',
                '.eltd-portfolio-slider-holder .eltd-portfolio-list-holder.owl-carousel .owl-dots .owl-dot.active span',
                '.wpcf7-form.cf7_custom_style_2 input.wpcf7-form-control.wpcf7-submit:hover',
                '.post-password-form input[type="submit"]:hover',
                'input.wpcf7-form-control.wpcf7-submit:hover',
                '.slick-slider.slick-initialized .slick-dots .slick-active',
                '.rev_slider .tp-bullets.custom .tp-bullet.selected',
                '.rev_slider .tp-bullets.custom .tp-bullet:hover',
                '.eltd-light-header .rev_slider .tp-bullets.custom .tp-bullet.selected',
                '.eltd-light-header .rev_slider .tp-bullets.custom .tp-bullet:hover',
                '.eltd-dark-header .rev_slider .tp-bullets.custom .tp-bullet.selected',
                '.eltd-dark-header .rev_slider .tp-bullets.custom .tp-bullet:hover',
                '.eltd-fullscreen-menu-opener.opened:hover .eltd-line:before',
                '.eltd-fullscreen-menu-opener.opened:hover .eltd-line:after',
                '.eltd-icon-shortcode.circle',
                '.eltd-icon-shortcode.square',
                '.eltd-testimonials.eltd-cards .eltd-testimonial-card .eltd-testimonials-text span',
                '.eltd-blog-list-holder.eltd-blog-minimal .eltd-blog-list-item .eltd-item-image:after',
                '.eltd-btn.eltd-btn-solid',
                '.carousel .carousel-indicators:not(.thumbnails) li.active',
                '.carousel .carousel-indicators:not(.thumbnails) li.active',
                '.eltd-dark-header .carousel .carousel-indicators:not(.thumbnails) li.active',
                '.eltd-light-header .carousel .carousel-indicators:not(.thumbnails) li.active',
                '.tagcloud a:hover'

            );

            $second_background_color_important_selector = array(
                '.mejs-controls .mejs-time-rail .mejs-time-current',
                '.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current',
                '.eltd-btn.eltd-btn-outline:not(.eltd-btn-custom-hover-bg):hover',
                '.eltd-product-slider-holder .eltd-product-slider-item-holder .eltd-product-slider-caption .add_to_cart_button:hover'
            );

            $second_border_color_selector = array(
                '.post-password-form input[type="submit"]:hover',
                'input.wpcf7-form-control.wpcf7-submit:hover',
                '.eltd-btn.eltd-btn-solid',
                '.eltd-btn.eltd-btn-outline',
                '.tagcloud a:hover'

            );
            $second_border_color_important_selector = array(
                '.eltd-btn.eltd-btn-solid:not(.eltd-btn-custom-border-hover):hover',
                '.eltd-btn.eltd-btn-outline:not(.eltd-btn-custom-border-hover):hover',
                '.eltd-product-slider-holder .eltd-product-slider-item-holder .eltd-product-slider-caption .add_to_cart_button:hover'
            );

            $woocommerce_second_color_selector = array(
                    '.eltd-woocommerce-page .star-rating span:before',
                '.woocommerce .star-rating span:before',
                '.woocommerce .myaccount_user a',
                '.woocommerce .address a',
                '.woocommerce-tabs.eltd-horizontal-tab ul .eltd-woo-tab-icon:before'
            );

            $woocommerce_second_background_color_selector = array(
                '.widget_price_filter .price_slider .ui-slider-range'
            );

            echo woly_elated_dynamic_css($second_color_selector, array('color' => woly_elated_options()->getOptionValue('second_color')));
            echo woly_elated_dynamic_css($second_color_important_selector, array('color' => woly_elated_options()->getOptionValue('second_color').'!important'));
            echo woly_elated_dynamic_css($second_background_color_selector, array('background-color' => woly_elated_options()->getOptionValue('second_color')));
            echo woly_elated_dynamic_css($second_background_color_important_selector, array('background-color' => woly_elated_options()->getOptionValue('second_color').'!important'));
            echo woly_elated_dynamic_css($second_border_color_selector, array('border-color' => woly_elated_options()->getOptionValue('second_color')));
            echo woly_elated_dynamic_css($second_border_color_important_selector, array('border-color' => woly_elated_options()->getOptionValue('second_color').'!important'));
            echo woly_elated_dynamic_css($woocommerce_second_color_selector, array('color' => woly_elated_options()->getOptionValue('second_color')));
            echo woly_elated_dynamic_css($woocommerce_second_background_color_selector, array('background-color' => woly_elated_options()->getOptionValue('second_color')));

        }

		if (woly_elated_options()->getOptionValue('page_background_color')) {
			$background_color_selector = array(
				'.eltd-wrapper-inner',
				'.eltd-content'
			);
			echo woly_elated_dynamic_css($background_color_selector, array('background-color' => woly_elated_options()->getOptionValue('page_background_color')));
		}

		if (woly_elated_options()->getOptionValue('selection_color')) {
			echo woly_elated_dynamic_css('::selection', array('background' => woly_elated_options()->getOptionValue('selection_color')));
			echo woly_elated_dynamic_css('::-moz-selection', array('background' => woly_elated_options()->getOptionValue('selection_color')));
		}

		$boxed_background_style = array();
		if (woly_elated_options()->getOptionValue('page_background_color_in_box')) {
			$boxed_background_style['background-color'] = woly_elated_options()->getOptionValue('page_background_color_in_box');
		}

		if (woly_elated_options()->getOptionValue('boxed_background_image')) {
			$boxed_background_style['background-image'] = 'url('.esc_url(woly_elated_options()->getOptionValue('boxed_background_image')).')';
			$boxed_background_style['background-position'] = 'center 0px';
			$boxed_background_style['background-repeat'] = 'no-repeat';
		}

		if (woly_elated_options()->getOptionValue('boxed_pattern_background_image')) {
			$boxed_background_style['background-image'] = 'url('.esc_url(woly_elated_options()->getOptionValue('boxed_pattern_background_image')).')';
			$boxed_background_style['background-position'] = '0px 0px';
			$boxed_background_style['background-repeat'] = 'repeat';
		}

		if (woly_elated_options()->getOptionValue('boxed_background_image_attachment')) {
			$boxed_background_style['background-attachment'] = (woly_elated_options()->getOptionValue('boxed_background_image_attachment'));
		}

		echo woly_elated_dynamic_css('.eltd-boxed .eltd-wrapper', $boxed_background_style);
    }

    add_action('woly_elated_style_dynamic', 'woly_elated_design_styles');
}

if (!function_exists('woly_elated_h1_styles')) {

    function woly_elated_h1_styles() {

        $h1_styles = array();

        if(woly_elated_options()->getOptionValue('h1_color') !== '') {
            $h1_styles['color'] = woly_elated_options()->getOptionValue('h1_color');
        }
        if(woly_elated_options()->getOptionValue('h1_google_fonts') !== '-1') {
            $h1_styles['font-family'] = woly_elated_get_formatted_font_family(woly_elated_options()->getOptionValue('h1_google_fonts'));
        }
        if(woly_elated_options()->getOptionValue('h1_fontsize') !== '') {
            $h1_styles['font-size'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h1_fontsize')).'px';
        }
        if(woly_elated_options()->getOptionValue('h1_lineheight') !== '') {
            $h1_styles['line-height'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h1_lineheight')).'px';
        }
        if(woly_elated_options()->getOptionValue('h1_texttransform') !== '') {
            $h1_styles['text-transform'] = woly_elated_options()->getOptionValue('h1_texttransform');
        }
        if(woly_elated_options()->getOptionValue('h1_fontstyle') !== '') {
            $h1_styles['font-style'] = woly_elated_options()->getOptionValue('h1_fontstyle');
        }
        if(woly_elated_options()->getOptionValue('h1_fontweight') !== '') {
            $h1_styles['font-weight'] = woly_elated_options()->getOptionValue('h1_fontweight');
        }
        if(woly_elated_options()->getOptionValue('h1_letterspacing') !== '') {
            $h1_styles['letter-spacing'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h1_letterspacing')).'px';
        }

        $h1_selector = array(
            'h1'
        );

        if (!empty($h1_styles)) {
            echo woly_elated_dynamic_css($h1_selector, $h1_styles);
        }
    }

    add_action('woly_elated_style_dynamic', 'woly_elated_h1_styles');
}

if (!function_exists('woly_elated_h2_styles')) {

    function woly_elated_h2_styles() {

        $h2_styles = array();

        if(woly_elated_options()->getOptionValue('h2_color') !== '') {
            $h2_styles['color'] = woly_elated_options()->getOptionValue('h2_color');
        }
        if(woly_elated_options()->getOptionValue('h2_google_fonts') !== '-1') {
            $h2_styles['font-family'] = woly_elated_get_formatted_font_family(woly_elated_options()->getOptionValue('h2_google_fonts'));
        }
        if(woly_elated_options()->getOptionValue('h2_fontsize') !== '') {
            $h2_styles['font-size'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h2_fontsize')).'px';
        }
        if(woly_elated_options()->getOptionValue('h2_lineheight') !== '') {
            $h2_styles['line-height'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h2_lineheight')).'px';
        }
        if(woly_elated_options()->getOptionValue('h2_texttransform') !== '') {
            $h2_styles['text-transform'] = woly_elated_options()->getOptionValue('h2_texttransform');
        }
        if(woly_elated_options()->getOptionValue('h2_fontstyle') !== '') {
            $h2_styles['font-style'] = woly_elated_options()->getOptionValue('h2_fontstyle');
        }
        if(woly_elated_options()->getOptionValue('h2_fontweight') !== '') {
            $h2_styles['font-weight'] = woly_elated_options()->getOptionValue('h2_fontweight');
        }
        if(woly_elated_options()->getOptionValue('h2_letterspacing') !== '') {
            $h2_styles['letter-spacing'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h2_letterspacing')).'px';
        }

        $h2_selector = array(
            'h2'
        );

        if (!empty($h2_styles)) {
            echo woly_elated_dynamic_css($h2_selector, $h2_styles);
        }
    }

    add_action('woly_elated_style_dynamic', 'woly_elated_h2_styles');
}

if (!function_exists('woly_elated_h3_styles')) {

    function woly_elated_h3_styles() {

        $h3_styles = array();

        if(woly_elated_options()->getOptionValue('h3_color') !== '') {
            $h3_styles['color'] = woly_elated_options()->getOptionValue('h3_color');
        }
        if(woly_elated_options()->getOptionValue('h3_google_fonts') !== '-1') {
            $h3_styles['font-family'] = woly_elated_get_formatted_font_family(woly_elated_options()->getOptionValue('h3_google_fonts'));
        }
        if(woly_elated_options()->getOptionValue('h3_fontsize') !== '') {
            $h3_styles['font-size'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h3_fontsize')).'px';
        }
        if(woly_elated_options()->getOptionValue('h3_lineheight') !== '') {
            $h3_styles['line-height'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h3_lineheight')).'px';
        }
        if(woly_elated_options()->getOptionValue('h3_texttransform') !== '') {
            $h3_styles['text-transform'] = woly_elated_options()->getOptionValue('h3_texttransform');
        }
        if(woly_elated_options()->getOptionValue('h3_fontstyle') !== '') {
            $h3_styles['font-style'] = woly_elated_options()->getOptionValue('h3_fontstyle');
        }
        if(woly_elated_options()->getOptionValue('h3_fontweight') !== '') {
            $h3_styles['font-weight'] = woly_elated_options()->getOptionValue('h3_fontweight');
        }
        if(woly_elated_options()->getOptionValue('h3_letterspacing') !== '') {
            $h3_styles['letter-spacing'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h3_letterspacing')).'px';
        }

        $h3_selector = array(
            'h3'
        );

        if (!empty($h3_styles)) {
            echo woly_elated_dynamic_css($h3_selector, $h3_styles);
        }
    }

    add_action('woly_elated_style_dynamic', 'woly_elated_h3_styles');
}

if (!function_exists('woly_elated_h4_styles')) {

    function woly_elated_h4_styles() {

        $h4_styles = array();

        if(woly_elated_options()->getOptionValue('h4_color') !== '') {
            $h4_styles['color'] = woly_elated_options()->getOptionValue('h4_color');
        }
        if(woly_elated_options()->getOptionValue('h4_google_fonts') !== '-1') {
            $h4_styles['font-family'] = woly_elated_get_formatted_font_family(woly_elated_options()->getOptionValue('h4_google_fonts'));
        }
        if(woly_elated_options()->getOptionValue('h4_fontsize') !== '') {
            $h4_styles['font-size'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h4_fontsize')).'px';
        }
        if(woly_elated_options()->getOptionValue('h4_lineheight') !== '') {
            $h4_styles['line-height'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h4_lineheight')).'px';
        }
        if(woly_elated_options()->getOptionValue('h4_texttransform') !== '') {
            $h4_styles['text-transform'] = woly_elated_options()->getOptionValue('h4_texttransform');
        }
        if(woly_elated_options()->getOptionValue('h4_fontstyle') !== '') {
            $h4_styles['font-style'] = woly_elated_options()->getOptionValue('h4_fontstyle');
        }
        if(woly_elated_options()->getOptionValue('h4_fontweight') !== '') {
            $h4_styles['font-weight'] = woly_elated_options()->getOptionValue('h4_fontweight');
        }
        if(woly_elated_options()->getOptionValue('h4_letterspacing') !== '') {
            $h4_styles['letter-spacing'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h4_letterspacing')).'px';
        }

        $h4_selector = array(
            'h4'
        );

        if (!empty($h4_styles)) {
            echo woly_elated_dynamic_css($h4_selector, $h4_styles);
        }
    }

    add_action('woly_elated_style_dynamic', 'woly_elated_h4_styles');
}

if (!function_exists('woly_elated_h5_styles')) {

    function woly_elated_h5_styles() {

        $h5_styles = array();

        if(woly_elated_options()->getOptionValue('h5_color') !== '') {
            $h5_styles['color'] = woly_elated_options()->getOptionValue('h5_color');
        }
        if(woly_elated_options()->getOptionValue('h5_google_fonts') !== '-1') {
            $h5_styles['font-family'] = woly_elated_get_formatted_font_family(woly_elated_options()->getOptionValue('h5_google_fonts'));
        }
        if(woly_elated_options()->getOptionValue('h5_fontsize') !== '') {
            $h5_styles['font-size'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h5_fontsize')).'px';
        }
        if(woly_elated_options()->getOptionValue('h5_lineheight') !== '') {
            $h5_styles['line-height'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h5_lineheight')).'px';
        }
        if(woly_elated_options()->getOptionValue('h5_texttransform') !== '') {
            $h5_styles['text-transform'] = woly_elated_options()->getOptionValue('h5_texttransform');
        }
        if(woly_elated_options()->getOptionValue('h5_fontstyle') !== '') {
            $h5_styles['font-style'] = woly_elated_options()->getOptionValue('h5_fontstyle');
        }
        if(woly_elated_options()->getOptionValue('h5_fontweight') !== '') {
            $h5_styles['font-weight'] = woly_elated_options()->getOptionValue('h5_fontweight');
        }
        if(woly_elated_options()->getOptionValue('h5_letterspacing') !== '') {
            $h5_styles['letter-spacing'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h5_letterspacing')).'px';
        }

        $h5_selector = array(
            'h5'
        );

        if (!empty($h5_styles)) {
            echo woly_elated_dynamic_css($h5_selector, $h5_styles);
        }
    }

    add_action('woly_elated_style_dynamic', 'woly_elated_h5_styles');
}

if (!function_exists('woly_elated_h6_styles')) {

    function woly_elated_h6_styles() {

        $h6_styles = array();

        if(woly_elated_options()->getOptionValue('h6_color') !== '') {
            $h6_styles['color'] = woly_elated_options()->getOptionValue('h6_color');
        }
        if(woly_elated_options()->getOptionValue('h6_google_fonts') !== '-1') {
            $h6_styles['font-family'] = woly_elated_get_formatted_font_family(woly_elated_options()->getOptionValue('h6_google_fonts'));
        }
        if(woly_elated_options()->getOptionValue('h6_fontsize') !== '') {
            $h6_styles['font-size'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h6_fontsize')).'px';
        }
        if(woly_elated_options()->getOptionValue('h6_lineheight') !== '') {
            $h6_styles['line-height'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h6_lineheight')).'px';
        }
        if(woly_elated_options()->getOptionValue('h6_texttransform') !== '') {
            $h6_styles['text-transform'] = woly_elated_options()->getOptionValue('h6_texttransform');
        }
        if(woly_elated_options()->getOptionValue('h6_fontstyle') !== '') {
            $h6_styles['font-style'] = woly_elated_options()->getOptionValue('h6_fontstyle');
        }
        if(woly_elated_options()->getOptionValue('h6_fontweight') !== '') {
            $h6_styles['font-weight'] = woly_elated_options()->getOptionValue('h6_fontweight');
        }
        if(woly_elated_options()->getOptionValue('h6_letterspacing') !== '') {
            $h6_styles['letter-spacing'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('h6_letterspacing')).'px';
        }

        $h6_selector = array(
            'h6'
        );

        if (!empty($h6_styles)) {
            echo woly_elated_dynamic_css($h6_selector, $h6_styles);
        }
    }

    add_action('woly_elated_style_dynamic', 'woly_elated_h6_styles');
}

if (!function_exists('woly_elated_text_styles')) {

    function woly_elated_text_styles() {

        $text_styles = array();

        if(woly_elated_options()->getOptionValue('text_color') !== '') {
            $text_styles['color'] = woly_elated_options()->getOptionValue('text_color');
        }
        if(woly_elated_options()->getOptionValue('text_google_fonts') !== '-1') {
            $text_styles['font-family'] = woly_elated_get_formatted_font_family(woly_elated_options()->getOptionValue('text_google_fonts'));
        }
        if(woly_elated_options()->getOptionValue('text_fontsize') !== '') {
            $text_styles['font-size'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('text_fontsize')).'px';
        }
        if(woly_elated_options()->getOptionValue('text_lineheight') !== '') {
            $text_styles['line-height'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('text_lineheight')).'px';
        }
        if(woly_elated_options()->getOptionValue('text_texttransform') !== '') {
            $text_styles['text-transform'] = woly_elated_options()->getOptionValue('text_texttransform');
        }
        if(woly_elated_options()->getOptionValue('text_fontstyle') !== '') {
            $text_styles['font-style'] = woly_elated_options()->getOptionValue('text_fontstyle');
        }
        if(woly_elated_options()->getOptionValue('text_fontweight') !== '') {
            $text_styles['font-weight'] = woly_elated_options()->getOptionValue('text_fontweight');
        }
        if(woly_elated_options()->getOptionValue('text_letterspacing') !== '') {
            $text_styles['letter-spacing'] = woly_elated_filter_px(woly_elated_options()->getOptionValue('text_letterspacing')).'px';
        }

        $text_selector = array(
            'p'
        );

        if (!empty($text_styles)) {
            echo woly_elated_dynamic_css($text_selector, $text_styles);
        }
    }

    add_action('woly_elated_style_dynamic', 'woly_elated_text_styles');
}

if (!function_exists('woly_elated_link_styles')) {

    function woly_elated_link_styles() {

        $link_styles = array();

        if(woly_elated_options()->getOptionValue('link_color') !== '') {
            $link_styles['color'] = woly_elated_options()->getOptionValue('link_color');
        }
        if(woly_elated_options()->getOptionValue('link_fontstyle') !== '') {
            $link_styles['font-style'] = woly_elated_options()->getOptionValue('link_fontstyle');
        }
        if(woly_elated_options()->getOptionValue('link_fontweight') !== '') {
            $link_styles['font-weight'] = woly_elated_options()->getOptionValue('link_fontweight');
        }
        if(woly_elated_options()->getOptionValue('link_fontdecoration') !== '') {
            $link_styles['text-decoration'] = woly_elated_options()->getOptionValue('link_fontdecoration');
        }

        $link_selector = array(
            'a',
            'p a'
        );

        if (!empty($link_styles)) {
            echo woly_elated_dynamic_css($link_selector, $link_styles);
        }
    }

    add_action('woly_elated_style_dynamic', 'woly_elated_link_styles');
}

if (!function_exists('woly_elated_link_hover_styles')) {

    function woly_elated_link_hover_styles() {

        $link_hover_styles = array();

        if(woly_elated_options()->getOptionValue('link_hovercolor') !== '') {
            $link_hover_styles['color'] = woly_elated_options()->getOptionValue('link_hovercolor');
        }
        if(woly_elated_options()->getOptionValue('link_hover_fontdecoration') !== '') {
            $link_hover_styles['text-decoration'] = woly_elated_options()->getOptionValue('link_hover_fontdecoration');
        }

        $link_hover_selector = array(
            'a:hover',
            'p a:hover'
        );

        if (!empty($link_hover_styles)) {
            echo woly_elated_dynamic_css($link_hover_selector, $link_hover_styles);
        }

        $link_heading_hover_styles = array();

        if(woly_elated_options()->getOptionValue('link_hovercolor') !== '') {
            $link_heading_hover_styles['color'] = woly_elated_options()->getOptionValue('link_hovercolor');
        }

        $link_heading_hover_selector = array(
            'h1 a:hover',
            'h2 a:hover',
            'h3 a:hover',
            'h4 a:hover',
            'h5 a:hover',
            'h6 a:hover'
        );

        if (!empty($link_heading_hover_styles)) {
            echo woly_elated_dynamic_css($link_heading_hover_selector, $link_heading_hover_styles);
        }
    }

    add_action('woly_elated_style_dynamic', 'woly_elated_link_hover_styles');
}

if (!function_exists('woly_elated_smooth_page_transition_styles')) {

    function woly_elated_smooth_page_transition_styles() {
        
        $loader_style = array();

        if(woly_elated_options()->getOptionValue('smooth_pt_bgnd_color') !== '') {
            $loader_style['background-color'] = woly_elated_options()->getOptionValue('smooth_pt_bgnd_color');
        }

        $loader_selector = array('.eltd-smooth-transition-loader');

        if (!empty($loader_style)) {
            echo woly_elated_dynamic_css($loader_selector, $loader_style);
        }

        $spinner_style = array();

        if(woly_elated_options()->getOptionValue('smooth_pt_spinner_color') !== '') {
            $spinner_style['background-color'] = woly_elated_options()->getOptionValue('smooth_pt_spinner_color');
        }

        $spinner_selectors = array(
            '.eltd-st-loader .eltd-square .eltd-line',
            '.eltd-st-loader .pulse', 
            '.eltd-st-loader .double_pulse .double-bounce1', 
            '.eltd-st-loader .double_pulse .double-bounce2', 
            '.eltd-st-loader .cube', 
            '.eltd-st-loader .rotating_cubes .cube1', 
            '.eltd-st-loader .rotating_cubes .cube2', 
            '.eltd-st-loader .stripes > div', 
            '.eltd-st-loader .wave > div', 
            '.eltd-st-loader .two_rotating_circles .dot1', 
            '.eltd-st-loader .two_rotating_circles .dot2', 
            '.eltd-st-loader .five_rotating_circles .container1 > div', 
            '.eltd-st-loader .five_rotating_circles .container2 > div', 
            '.eltd-st-loader .five_rotating_circles .container3 > div', 
            '.eltd-st-loader .atom .ball-1:before', 
            '.eltd-st-loader .atom .ball-2:before', 
            '.eltd-st-loader .atom .ball-3:before', 
            '.eltd-st-loader .atom .ball-4:before', 
            '.eltd-st-loader .clock .ball:before', 
            '.eltd-st-loader .mitosis .ball', 
            '.eltd-st-loader .lines .line1', 
            '.eltd-st-loader .lines .line2', 
            '.eltd-st-loader .lines .line3', 
            '.eltd-st-loader .lines .line4', 
            '.eltd-st-loader .fussion .ball', 
            '.eltd-st-loader .fussion .ball-1', 
            '.eltd-st-loader .fussion .ball-2', 
            '.eltd-st-loader .fussion .ball-3', 
            '.eltd-st-loader .fussion .ball-4', 
            '.eltd-st-loader .wave_circles .ball', 
            '.eltd-st-loader .pulse_circles .ball' 
        );

        if (!empty($spinner_style)) {
            echo woly_elated_dynamic_css($spinner_selectors, $spinner_style);
        }

        $process_spinner_style = array();

        if(woly_elated_options()->getOptionValue('smooth_pt_spinner_color') !== '') {
            $process_spinner_style['border-color'] = woly_elated_options()->getOptionValue('smooth_pt_spinner_color');
        }

        $process_spinner_selectors = array(
            '.eltd-st-loader .eltd-progress-circle-holder .eltd-circle-part-left',
            '.eltd-st-loader .eltd-progress-circle-holder .eltd-circle-part-right' 
        );

        if (!empty($process_spinner_style)) {
            echo woly_elated_dynamic_css($process_spinner_selectors, $process_spinner_style);
        }
    }

    add_action('woly_elated_style_dynamic', 'woly_elated_smooth_page_transition_styles');
}