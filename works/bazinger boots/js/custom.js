$(function(){

  "use strick"


  $(".back2top i").on('click',function(){
     $("html,body").animate({
      scrollTop:0
     },1200)
  })
  
  $(window).on('scroll',function(){
    let scrolling = $(this).scrollTop()
    if( scrolling > 20){
      $(".back2top i").fadeIn(500)
    }else{
      $(".back2top i").fadeOut(500)
    }
  
    if( scrolling >50){
      $(".nav_bg").addClass("nav_ex")
    }else{
      $(".nav_bg").removeClass("nav_ex")
    }
  })
  
  
  $('.counter').counterUp({
    delay: 10,
    time: 1500,
  });
  
  new WOW().init();












})

