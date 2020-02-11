$(document).ready(function (){
    //Fixed Scroll Down Bug issues
    /*
    window.onscroll = function() {myFunction()};
    var header = document.getElementById("header-nav");
    var sticky = header.offsetTop;
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    */

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
    //Portfolio
    $('button.button[val]').click(function () {
        if ($(this).attr('val') != 'all' && $(this).attr('bool') == 'off') {
            $('button.button[bool]').attr('bool', 'off');
            $(this).attr('bool', 'on');
            $('button.button[val]').removeClass('focused');
            $(this).addClass('focused');
            //Suda mozhno dobavit(tipa novie image i zapushit)
            var nameOfValue=$(this).attr('val');
            $('button.button[val='+nameOfValue+']').show(300);
        } else if ($(this).attr('val') == 'all' && $(this).attr('bool') == 'off') {
            $('button[bool]').attr('bool', 'off');
            $(this).attr('bool', 'on');
            $('button[bool]').removeClass('focused');
            $(this).addClass('focused');
            $('button.button[val]').show(300);
        }
    });

    //DEMO
    var slideIndex = 1;
    showSlides(slideIndex);

// Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

// Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
});