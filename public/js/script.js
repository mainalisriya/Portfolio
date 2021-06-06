$(document).ready(function(){
    $(window).scroll(function(){
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student.", "Learning."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    

    // togglemenu/navbar
    $('.menu-btn').click(function(){
     $('.navbar .menu').toggleClass("active");
     $('.menu-btn i').toggleClass("active");
    });

});
//preloader
var preloader =document.getElementById('loading');

function mypreloader(){
    preloader.style.display ='none';
}