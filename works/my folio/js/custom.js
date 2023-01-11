$(".back2top i").click(function (){
  $("html,body").animate({
    scrollTop: 0
  }, 1200)
})

$(window).scroll(function () {
  let scrolling = $(this).scrollTop()
  if (scrolling > 20) {
    $(".back2top").fadeIn(500)
  } else {
    $(".back2top").fadeOut(500)
  }

  if (scrolling > 50) {
    $(".navbar").addClass("nav_bg")
  } else {
    $(".navbar").removeClass("nav_bg")
  }
})


$('.banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  fade: true,
  arrows: false,
  dots: true,
});