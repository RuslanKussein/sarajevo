$(document).ready(function (){

    //Navbar scroll
    $('ul.menu a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1500);
        $('ul.menu a[href^="#"]').css({
            'color': '#fff'
        });
        $(this).css({
            'color': '#4c76ff'
        });
        return false;
    });
    //Navbar color
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('ul.menu a[href^="#"]').css({
                'color': '#fff'
            });
            $('ul.menu a[href="#Home"]').css({
                'color': '#4c76ff'
            });
        }
    });
    //drop down menu
    $('.menu-icon').click(function () {
        $('nav').slideToggle(500);
        $('ul.menu').css({
            'display': 'flex',
            'flex-direction': 'column',
        });
        $('ul.menu>li.menu__item').css({
           'margin':'4px 0',
        });
        if ($('.menu-icon').html() == '<i class="fas fa-caret-down"></i>') {
            $(this).html('<i class="fas fa-caret-up"></i>');
            $('body').addClass('stop-scrolling');
            $('body').bind('touchmove', function(e){e.preventDefault()})
        } else {
            $(this).html('<i class="fas fa-caret-down"></i>');
            $('body').removeClass('stop-scrolling');
            $('body').unbind('touchmove')
        }
    });

    //Works focused
    $('.works .button').click(function () {
        $('.works .button').removeClass('focused');
        $(this).addClass('focused');
    });
});