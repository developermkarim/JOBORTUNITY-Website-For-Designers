$(function () {


     "use strict";
    
    //    venobox for video


    $('.venobox').venobox();



    //    audio plugin


    $('audio').audioPlayer({
        strVolume: '',
    });
    $(".close").on('click', function () {
        $('audio').audioPlayer({
            strPlay: '0',
        });
        $(".audioplayer").fadeOut();
        $(".audioplayer-playing").fadeIn();
    });



    //    video audio slider part

    $('.vd-sld-left').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        dots: true,
        arrows: false,
        autoplay: true,
        asNavFor: '.vd-sld-right',
        autoPlay: true,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]

    });


    $('.vd-sld-right').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        asNavFor: '.vd-sld-left',
        speed: 1000,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]

    });



    // $sNavGap=$('.side_search').offset().top;
        var $navScroll = $('.side_search')

    $(window).scroll(function () {
        $navScroll = $(this).scrollTop();
        if ($navScroll > 600) {
            $('.side_search').css({
                'position': 'fixed',
                'top': 0,
                'padding': '0 29px'
            });
        } else {
            $('.side_search').css({
                'position': 'inherit',
                'padding': '0 29px'
            });
        }

        if ($navScroll > 2400) {
            $('.side_search').css({
                'position': 'static',
                'margin-top': '1705px'
            });
        } else {
            $('.side_search').css({
                'margin-top': '0px'

            });
        }
    });


    $('.aa').on('click', function () {
        $('.bg').removeClass('bg');
        $(this).toggleClass('bg');
    });

    //    sticky menu

    var $dis = $('.full-menu').offset().top;

    var $menu = $('.full-menu')


    $(window).on('scroll', function () {

        var $scroll = $(this).scrollTop();

        if ($scroll >= 230) {
            $menu.addClass('sticky');
        } else {
            $menu.removeClass('sticky');
        }
    });

    //    sticky menu

    //    top scroll
    $(".top_scroll").on('click', function () {

        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });

    $(window).on('scroll',function () {

        var $scroll = $(this).scrollTop();

        if ($scroll >= 450) {
            $(".top_scroll").fadeIn();
        } else {
            $(".top_scroll").fadeOut();
        }
    });
    //    top scroll

    //    counter
    $('.counter').counterUp({
        delay: 10,
        time: 8000,
    });
    //    counter

    //    preloader
    $(window).on('load', function(){
        
        $('.preloader').delay(1000).fadeOut(2000);
        
    });

    //    preloader
    
//animation scroll js
    
var html_body = $('html, body');
$('.employ-profile-menu li a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 300
            }, 1500);
            return false;
        }
    }
});
    

});
