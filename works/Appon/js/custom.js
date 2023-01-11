$(".back2top i").click(function () {
  $("html,body").animate({
    scrollTop: 0
  }, 1200)
})


$(window).scroll(function () {
  let scrolling = $(this).scrollTop()

  if (scrolling > 20) {
    $(".back2top i").fadeIn(500)
  } else {
    $(".back2top i").fadeOut(500)
  }

  if (scrolling > 80) {
    $("nav").addClass("nav_sc")
  } else {
    $("nav").removeClass("nav_sc")
  }
})




$(function () {

  $('.banner_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
  });


})

$(function(){

  
var mixer = mixitup('.feat_main', {
  animation: {
    effectsIn: 'fade translateY(-100%)',
    effectsOut: 'fade translateZ(-100px)',
  },
  
});



})



$(function () {
  
  $('.ss_main').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
  });
  
  
})



$(function () {
  new VenoBox({
    selector: '.my-video-links',
    autoplay: true,
  });
})




$(function () {
  
  
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
  });
})



$(function(){

  $('.feedtop_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.feedtop_nav'
  });
  $('.feedtop_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.feedtop_slider',
    arrows:false,
    dots: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

})




// slick_center