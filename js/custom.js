function moveLeft(){
    //document.getElementsByClassName('aside-left').addClass('aside-left-active');

    var element = document.getElementById("aside-left");
    element.classList.add("aside-left-active");
}

function moveRight(){
    var element2 = document.getElementById("aside-right");
    element2.classList.add("aside-right-active");
}

$(document).ready(function(){
    //document.getElementsByClassName('header__b-left-js').

    //   always visible div JS
    var navOffsetY = $('.main__fluid-elem').offset().top;
    var navOffsetX = $('.main__fluid-elem').offset().left;

    $(window).scroll(function () {
        var scrollPosTop = $(window).scrollTop();
        if(scrollPosTop >= navOffsetY-40){
            $('.main__fluid-elem').addClass('fixed');
            $('.main__fluid-elem').css('left', navOffsetX);
        }else{
            $('.main__fluid-elem').removeClass('fixed');
        }
    })

   /*$('.header__b-left-js').on('click', function(){
        $('.aside-left').toggleClass('aside-left-active');
    });
    $('.header__b-right-js').on('click', function(){
        $('.aside-right').toggleClass('aside-right-active');
    });*/


});