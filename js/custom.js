$(document).ready(function(){

    //   always visible div JS
    var navOffsetY = $('.main__fluid-elem').offset().top;
    var navOffsetX = $('.main__fluid-elem').offset().left;

    $(window).scroll(function () {
        var scrollPosTop = $(window).scrollTop();
        $('.main__fluid-elem').css('left', navOffsetX);
        if(scrollPosTop >= navOffsetY-40){
            $('.main__fluid-elem').addClass('fixed');
        }else{
            $('.main__fluid-elem').removeClass('fixed');
        }
    })

    //aside menu functionality
    $('.header__b-left-js').on('tap', function(){
        $('.aside-left').toggleClass('aside-left-active');
    });
    $('.header__b-right-js').on('tap', function(){
        $('.aside-right').toggleClass('aside-right-active');
    });


});