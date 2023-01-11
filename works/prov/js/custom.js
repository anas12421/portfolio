$(function(){
  "use strick"

  $(".back2top i").click(function(){
    $("html,body").animate({
      scrollTop:0
    },1200)
  })

  $(window).scroll(function(){
    let scrolling = $(this).scrollTop()

    if(scrolling > 20){
      $(".back2top i").fadeIn(500)
    }else{
      $(".back2top i").fadeOut(500)
    }

    if(scrolling > 50){
      $(".navbar").addClass("nav_bg")
    }else{
      $(".navbar").removeClass("nav_bg")
    }
  })



  $('.item_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: '<i class="fa-solid fa-angle-left ione "></i>',
    nextArrow: '<i class="fa-solid fa-angle-right itwo"></i>',
    
  });




  // $(window).preloader({

  //   // preloader selector
  //   selector: '#preloader',
  
  //   // Preloader container holder
  //   type: 'document',
  
  //   // 'fade' or 'remove'
  //   removeType: 'fade',
  
  //   // fade duration
  //   fadeDuration: 750,
  
  //   // auto disimss after x milliseconds
  //   delay: 1000
    
  // });

  $(window).on('load', function(){
      $("#preloader").delay(2000).fadeOut(500)
  })





  $(function(){
    $(".typed").typed({
      strings: ["Decorations", "Designes", "Creators"],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 30,
      // time before typing starts
      startDelay: 2000,
      // backspacing speed
      backSpeed: 20,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: true,
      // false = infinite
      loopCount: 9999,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function() {},
      // starting callback function before each string
      preStringTyped: function() {},
      //callback for every typed string
      onStringTyped: function() {},
      // callback for reset
      resetCallback: function() {}
    });
  });












  
})