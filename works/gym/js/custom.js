$(function () {
  "use strick"


  // back2top scroll js
  $(".back2top i").on('click', function () {
    $("html,body").animate({
      scrollTop: 0
    }, 1200)
  })
  $(window).on('scroll', function () {
    let scrolling = $(this).scrollTop()

    // back2top js
    if (scrolling > 20) {
      $(".back2top i").fadeIn(500)
    } else {
      $(".back2top i").fadeOut(500)
    }


    //  navbar scroll js
    if (scrolling > 50) {
      $(".nav_bg").addClass("nav_ex")
    } else {
      $(".nav_bg").removeClass("nav_ex")
    }
  })

  //  banner part slide js
  $('.banner_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
  });

  // about part js
  new VenoBox({
    selector: '.my-video-links',
  });

  // gallery part js
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    positionFromTop: 150,
    disableScrolling: true,

  })


  // testimonial part js
  $('.testi_slide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
       
      }
    }
  ]
  });
  
  
  
  // membership & ratio part js
  $('.counter').counterUp({
    delay: 10,
    time: 1500
  });
  
  
  // classes part js
  $('#colorful-elliptic').colorfulTab();
  
  
  
  
  // product img slider js
  
  $('.product_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    centerPadding: '0',
    prevArrow: '<i class="fa-solid fa-angle-left p_icon"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right n_icon"></i>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
    ]
  });
  

  // whole site wow js
  new WOW().init();

})

