$(function(){

  "use strick"


  $(".back2top i").on('click', function(){
    $("html,body").animate({
      scrollTop:0
    },1200)
  })


  $(window).on('scroll', function(){
    let scrolling = $(this).scrollTop()

    // back2top js
    if(scrolling > 20){
      $(".back2top i").fadeIn(500)
    }else(
      $(".back2top i").fadeOut(500)
    )


    // navbar js
    if(scrolling > 50){
      $(".main_nav").addClass("nav_ex")
    }else{
      $(".main_nav").removeClass("nav_ex")
    }
  })


// tetstimonial js
$('.testi_slide').slick({
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 2,
  arrows:false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    
  ]
});













})