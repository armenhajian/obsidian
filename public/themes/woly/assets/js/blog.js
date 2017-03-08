(function($) {
    "use strict";

    var blog = {};
    eltd.modules.blog = blog;

    blog.eltdInitAudioPlayer = eltdInitAudioPlayer;
    blog.eltdInitBlogMasonry = eltdInitBlogMasonry;
    blog.eltdInitBlogChequered = eltdInitBlogChequered;
    blog.eltdInitBlogMasonryGallery = eltdInitBlogMasonryGallery;
    blog.eltdInitBlogLoadMore = eltdInitBlogLoadMore;
    blog.eltdInitBlogMasonryGalleryContentPosition = eltdInitBlogMasonryGalleryContentPosition;
    blog.eltdBlogGalleryMasonryImages = eltdBlogGalleryMasonryImages;

    blog.eltdOnDocumentReady = eltdOnDocumentReady;
    blog.eltdOnWindowLoad = eltdOnWindowLoad;
    blog.eltdOnWindowResize = eltdOnWindowResize;
    blog.eltdOnWindowScroll = eltdOnWindowScroll;

    $(document).ready(eltdOnDocumentReady);
    $(window).load(eltdOnWindowLoad);
    $(window).resize(eltdOnWindowResize);
    $(window).scroll(eltdOnWindowScroll);
    
    /* 
        All functions to be called on $(document).ready() should be in this function
    */
    function eltdOnDocumentReady() {
        eltdInitAudioPlayer();
        eltdInitBlogMasonry();
        eltdInitBlogMasonryGallery();
        eltdInitBlogLoadMore();
        eltdInitBlogMasonryGalleryContentPosition();

    }

    /* 
        All functions to be called on $(window).load() should be in this function
    */
    function eltdOnWindowLoad() {
        eltdBlogGalleryMasonryImages().init();
        eltdInitBlogMasonry();
        eltdInitBlogChequered();
        eltdInitBlogMasonryGallery();
        eltdInitBlogChequered();
    }

    /* 
        All functions to be called on $(window).resize() should be in this function
    */
    function eltdOnWindowResize() {
        eltdInitBlogChequered();

    }

    /* 
        All functions to be called on $(window).scroll() should be in this function
    */
    function eltdOnWindowScroll() {

    }



    function eltdInitAudioPlayer() {

        var players = $('audio.eltd-blog-audio');

        players.mediaelementplayer({
            audioWidth: '100%'
        });
    }


    function eltdInitBlogMasonry() {

        if($('.eltd-blog-holder.eltd-blog-type-masonry').length) {

            var container = $('.eltd-blog-holder.eltd-blog-type-masonry');

            container.waitForImages(function() {
                container.isotope({
                    itemSelector: 'article',
                    resizable: false,
                    masonry: {
                        columnWidth: '.eltd-blog-masonry-grid-sizer',
                        gutter: '.eltd-blog-masonry-grid-gutter'
                    }
                });
                container.addClass('eltd-appeared');
            });

            var filters = $('.eltd-filter-blog-holder');
            $('.eltd-filter').click(function() {
                var filter = $(this);
                var selector = filter.attr('data-filter');
                filters.find('.eltd-active').removeClass('eltd-active');
                filter.addClass('eltd-active');
                container.isotope({filter: selector});
                return false;
            });
        }
    }
    function eltdInitBlogChequered(){
        var container = $('.eltd-blog-holder.eltd-blog-type-chequered');
        var newSize;

        container.waitForImages(function() {
            container.isotope({
                itemSelector: 'article',
                resizable: false,
                masonry: {
                    columnWidth: '.eltd-blog-chequered-grid-sizer'
                }
            });
            container.addClass('eltd-appeared');
            newSize = $('.eltd-blog-chequered-grid-sizer').outerWidth();
            container.children('article').css({'height': (newSize) + 'px'});
        });
        $(window).resize(function() {
            newSize = $('.eltd-blog-chequered-grid-sizer').outerWidth();
            container.children('article').css({'height': (newSize) + 'px'});
        });
    }

    function eltdInitBlogLoadMore(){
        var blogHolder = $('.eltd-blog-holder.eltd-blog-load-more');
        
        if(blogHolder.length){
            blogHolder.each(function(){
                var thisBlogHolder = $(this);
                var nextPage;
                var maxNumPages;
                
                var loadMoreButton = thisBlogHolder.find('.eltd-load-more-ajax-pagination .eltd-btn');
                if(blogHolder.hasClass('eltd-blog-type-masonry') || blogHolder.hasClass('eltd-blog-type-masonry-gallery') ){
                    loadMoreButton = blogHolder.next().find('.eltd-btn');
                }
                maxNumPages =  thisBlogHolder.data('max-pages');                
                
                loadMoreButton.on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    var loadMoreDatta = getBlogLoadMoreData(thisBlogHolder);
                    nextPage = loadMoreDatta.nextPage;
                    
                    if(nextPage <= maxNumPages){
                        var ajaxData = setBlogLoadMoreAjaxData(loadMoreDatta);
                        $.ajax({
                            type: 'POST',
                            data: ajaxData,
                            url: ElatedAjaxUrl,
                            success: function (data) {
                                nextPage++;
                                thisBlogHolder.data('next-page', nextPage);
                                var response = $.parseJSON(data);
                                var responseHtml =  response.html;
                                thisBlogHolder.waitForImages(function(){

                                    if(thisBlogHolder.hasClass('eltd-blog-type-masonry')){

                                        thisBlogHolder.append(responseHtml).isotope('reloadItems').isotope({sortBy: 'original-order'});
                                        eltdInitBlogMasonry();

                                    }
                                    else if(thisBlogHolder.hasClass('eltd-blog-type-masonry-gallery')){

                                        thisBlogHolder.append(responseHtml).isotope('reloadItems').isotope({sortBy: 'original-order'});

                                        eltdInitBlogMasonryGallery();
                                        eltdInitBlogMasonryGalleryContentPosition();

                                    }
                                    else{
                                        thisBlogHolder.find('article:last').after(responseHtml); // Append the new content
                                    }

                                    setTimeout(function() {
                                        eltd.modules.blog.eltdInitAudioPlayer();
                                        eltd.modules.common.eltdOwlSlider();
                                        eltd.modules.common.eltdFluidVideo();
                                    },400);


                                });
                            }
                        });
                    }
                    
                    if(nextPage === maxNumPages){
                        loadMoreButton.hide();
                    }
                    
                });
            });
        }
    }
    function getBlogLoadMoreData(container){
        
        var returnValue = {};
        
        returnValue.nextPage = '';
        returnValue.number = '';
        returnValue.category = '';
        returnValue.blogType = '';
        returnValue.archiveCategory = '';
        returnValue.archiveAuthor = '';
        returnValue.archiveTag = '';
        returnValue.archiveDay = '';
        returnValue.archiveMonth = '';
        returnValue.archiveYear = '';
        
        if (typeof container.data('next-page') !== 'undefined' && container.data('next-page') !== false) {
            returnValue.nextPage = container.data('next-page');
        }
        if (typeof container.data('post-number') !== 'undefined' && container.data('post-number') !== false) {                    
            returnValue.number = container.data('post-number');
        }
        if (typeof container.data('category') !== 'undefined' && container.data('category') !== false) {                    
            returnValue.category = container.data('category');
        }
        if (typeof container.data('blog-type') !== 'undefined' && container.data('blog-type') !== false) {                    
            returnValue.blogType = container.data('blog-type');
        }
        if (typeof container.data('archive-category') !== 'undefined' && container.data('archive-category') !== false) {                    
            returnValue.archiveCategory = container.data('archive-category');
        }
        if (typeof container.data('archive-author') !== 'undefined' && container.data('archive-author') !== false) {                    
            returnValue.archiveAuthor = container.data('archive-author');
        }
        if (typeof container.data('archive-tag') !== 'undefined' && container.data('archive-tag') !== false) {                    
            returnValue.archiveTag = container.data('archive-tag');
        }
        if (typeof container.data('archive-day') !== 'undefined' && container.data('archive-day') !== false) {                    
            returnValue.archiveDay = container.data('archive-day');
        }
        if (typeof container.data('archive-month') !== 'undefined' && container.data('archive-month') !== false) {                    
            returnValue.archiveMonth = container.data('archive-month');
        }
        if (typeof container.data('archive-year') !== 'undefined' && container.data('archive-year') !== false) {                    
            returnValue.archiveYear = container.data('archive-year');
        }
        
        return returnValue;
        
    }
    
    function setBlogLoadMoreAjaxData(container){
        
        var returnValue = {
            action: 'woly_elated_blog_load_more',
            nextPage: container.nextPage,
            number: container.number,
            category: container.category,
            blogType: container.blogType,
            archiveCategory: container.archiveCategory,
            archiveAuthor: container.archiveAuthor,
            archiveTag: container.archiveTag,
            archiveDay: container.archiveDay,
            archiveMonth: container.archiveMonth,
            archiveYear: container.archiveYear
        };
        
        return returnValue;
    }

    function eltdInitBlogMasonryGallery(){

        var container = $('.eltd-blog-holder.eltd-blog-type-masonry-gallery');
        if(container.length){
            container.each(function(){
                var thisBlogList = $(this);


                eltdBlogResizeMasonryGallery(thisBlogList);

                eltdBlogInitMasonryGallery(thisBlogList);
                $(window).resize(function(){
                    eltdBlogResizeMasonryGallery(thisBlogList);
                    eltdBlogInitMasonryGallery(thisBlogList);
                });
            });
        }

    }


    function eltdBlogInitMasonryGallery(container){
        container.waitForImages(function() {
            container.isotope({
                itemSelector: 'article',
                masonry: {
                    columnWidth: '.eltd-blog-masonry-gallery-grid-sizer'
                }
            });
            container.addClass('eltd-appeared');
        });
    }

    function eltdBlogResizeMasonryGallery(container){
        var size = container.find('.eltd-blog-masonry-gallery-grid-sizer').width();

        var defaultMasonryItem = container.find('.eltd-default-masonry-item');
        var largeWidthMasonryItem = container.find('.eltd-large-width-masonry-item');
        var largeHeightMasonryItem = container.find('.eltd-large-height-masonry-item');
        var largeWidthHeightMasonryItem = container.find('.eltd-large-width-height-masonry-item');

        defaultMasonryItem.css('height', size);
        largeWidthMasonryItem.css('height', size);
        largeHeightMasonryItem.css('height', Math.round(2*size));

        if(eltd.windowWidth > 600){
            largeWidthHeightMasonryItem.css('height', Math.round(2*size));
        }else{
            largeWidthHeightMasonryItem.css('height', size);
        }
    }

    function eltdInitBlogMasonryGalleryContentPosition(){

        var container = $('.eltd-blog-holder.eltd-blog-type-masonry-gallery');
        var article = container.find('article:not(.format-link):not(.format-quote)');

        if(article.length){
            article.each(function(){
                var thisArticle = $(this);
                var contentHolder = thisArticle.find('.eltd-post-text');
                var excerptHeight = thisArticle.find('.eltd-post-excerpt').outerHeight();

                var contentTranslate = 'translateY('+parseInt(excerptHeight+15)+'px)'; //15px is post title bottom margin

                //initial values
                contentHolder.css({'-webkit-transform':contentTranslate});
                contentHolder.css({'transform':contentTranslate});
                setTimeout(function(){
                    contentHolder.css({'visibility':'visible'});
                },500);

                $(window).resize(function(){

                    var excerptHeight = thisArticle.find('.eltd-post-excerpt').outerHeight();
                    contentTranslate = 'translateY('+parseInt(excerptHeight+15)+'px)'; ////15px is post title bottom margin
                    contentHolder.css({'-webkit-transform':contentTranslate});
                    contentHolder.css({'transform':contentTranslate});

                });

            });
        }
    }

    function eltdBlogGalleryMasonryImages(){

        var holder = $('.eltd-blog-holder article.format-gallery');
        var blogGallery = holder.find('.eltd-blog-gallery-masonry-holder');
        var size = blogGallery.find('.eltd-blog-gallery-sizer').outerWidth();

        var resizeMasonryImages = function(){

            var defaultItem = blogGallery.find('.eltd-blog-gallery-item.default');
            var largeHeightItem = blogGallery.find('.eltd-blog-gallery-img-large-height');
            var largeHeightWidthItem = blogGallery.find('.eltd-blog-gallery-img-large-height-width');

            defaultItem.css('height', size);
            largeHeightItem.css('height', Math.round(2*size));

            if(eltd.windowWidth > 600){
                largeHeightWidthItem.css('height', Math.round(2*size));
            }else{
                largeHeightWidthItem.css('height', size);
            }


        };

        var initMasonryItems = function(){

            blogGallery.isotope({
                itemSelector: '.eltd-blog-gallery-item',
                masonry: {
                    columnWidth: '.eltd-blog-gallery-sizer',
                    gutter: '.eltd-blog-gallery-gutter'
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


})(jQuery);