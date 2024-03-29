$(function(){
    $('.top-banner .close-box label').click(function(){
        $(this).toggleClass('active');
    });

    $('.top-banner .btn-banner-close').click(function(){
        $('.top-banner').hide();
    });




    $('.banner-area:nth-of-type(1)').addClass('on');

    $('.banner-area h2').click(function(e){
        e.preventDefault();

        $(this).parent('.banner-area').addClass('on').siblings('.banner-area').removeClass('on');
        
        if ($(this).parent().hasClass('keynews-area')) {
            swiper2.autoplay.stop();
            
            if ($(this).parent().find('.pause').css('display') == 'block') {
                swiper1.autoplay.start();
            } else {
                swiper1.autoplay.stop();
            }

        } else {
            swiper1.autoplay.stop();

            if ($(this).parent().find('.pause').css('display') == 'block') {
                swiper2.autoplay.start();
            } else {
                swiper2.autoplay.stop();
            }
        }
    });

    var swiper1 = new Swiper(".newsbanner-list", {
        loop: true,
        pagination: {
          el: ".newsbanner-list .swiper-pagination",
          type: "fraction",
        },
        navigation: {
            nextEl: ".newsbanner-list .swiper-button-next",
            prevEl: ".newsbanner-list .swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
    var swiper2 = new Swiper(".partibanner-list", {
        loop: true,
        pagination: {
          el: ".partibanner-list .swiper-pagination",
          type: "fraction",
        },
        navigation: {
            nextEl: ".partibanner-list .swiper-button-next",
            prevEl: "partibanner-list .swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    swiper2.autoplay.stop();

    $('.keynews-area .banner-list a.btn').click(function(e){
        e.preventDefault();
        $('.keynews-area a.btn').toggleClass('on');
        if ($('.keynews-area a.btn.play').css('display') == 'none') {
            swiper1.autoplay.start();
        } else {
            swiper1.autoplay.stop();
            
        }
    });
 
    $('.parti-area .banner-list a.btn').click(function(e){
        e.preventDefault();
        $('.parti-area a.btn').toggleClass('on');
        if ($('.parti-area a.btn.play').css('display') == 'none') {
            swiper2.autoplay.start();
        } else {
            swiper2.autoplay.stop();
            
        }
    });

    $('.keynews-area').hover(function(){
        if(!$(this).find('.play').hasClass('active')){ 
            swiper1.autoplay.stop();
        }},
    function(){
        if(!$(this).find('.play').hasClass('active')){
            swiper1.autoplay.start();
        }}
    );
    $('.parti-area').hover(function(){
        if(!$(this).find('.play').hasClass('active')){ 
            swiper2.autoplay.stop();
        }},
    function(){
        if(!$(this).find('.play').hasClass('active')){
            swiper2.autoplay.start();
        }}
    );

    


    var swiper3 = new Swiper(".slidebanner-list", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 43,
        pagination: {
          el: ".slidebanner-list .swiper-pagination",
          type: "fraction",
        },
        navigation: {
            nextEl: ".slidebanner-list .swiper-button-next",
            prevEl: ".slidebanner-list .swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    $('.sc-slidebanner .btn-wrap a.btn').click(function(e){
        e.preventDefault();
        $('.sc-slidebanner a.btn').toggleClass('on');
        if ($('.sc-slidebanner a.btn.play').css('display') == 'none') {
            swiper3.autoplay.start();
        } else {
            swiper3.autoplay.stop();
            
        }
    });

    $('.sc-jurisdiction .btn-area-title').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('on') == false) {
            $('.sc-jurisdiction .btn-area-title').removeClass('on');
            $(this).addClass('on');
            $('.sc-jurisdiction .workplace-list').slideUp();
            $(this).siblings('.workplace-list').slideDown();       
        } else {
            $(this).removeClass('on');
            $(this).siblings('.workplace-list').slideUp();
        }
    });
    $('.sc-jurisdiction .area-item li:first-child a').keydown(function(e){
        var keyCode = e.keyCode || e.which;

        if (keyCode == 9 && e.shiftKey) {
            $('.sc-jurisdiction .workplace-list').stop().slideUp();
            $('.sc-jurisdiction .btn-area-title').removeClass('on');
        } else {
            
        }
    });
    $('.sc-jurisdiction .area-item li:last-child a').keydown(function(e){
       
        var keyCode = e.keyCode || e.which;

        if (keyCode == 9 && !e.shiftKey) {
            $('.sc-jurisdiction .workplace-list').stop().slideUp();
            $('.sc-jurisdiction .btn-area-title').removeClass('on');
        } else {
            
        }
    });

    $('.btn-top a').click(function(e){
        e.preventDefault();

        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    });

    $(window).scroll(function(){
        curr = $(this).scrollTop();


        if (curr >= 300) {
            $('.btn-top a').fadeIn();
        } else {
            $('.btn-top a').fadeOut();
        }
    });
});