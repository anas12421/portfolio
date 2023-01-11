$(function () {

  "use strick"

  $(".back2top i").on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 1200)
  })

  $(window).on('scroll', function () {
    let scrolling = $(this).scrollTop()
    if (scrolling > 20) {
      $(".back2top i").fadeIn(500)
    } else {
      $(".back2top i").fadeOut(500)
    }

    if (scrolling > 50) {
      $(".main_nav").addClass("nav_ex")
    } else {
      $(".main_nav").removeClass("nav_ex")
    }
  })

  // banner part slide
  $('.banner_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: '<i class="fa-solid fa-arrow-left p_arrow"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right n_arrow"></i>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]

  });


  // portfolio light box

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    positionFromTop: 150,
    // disableScrolling:true
  })




  // service part extra slick

  // $('.service_slider').slick({
  //   vertical: true,
  //   height: 900,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 1500,
  //   centerMode: true,
  //   centerPadding: '0',
  //   prevArrow: '<i class="fa-solid fa-angle-up serp_arrow"></i>',
  //   nextArrow: '<i class="fa-solid fa-angle-down sern_arrow"></i>',
  //   responsive: [{
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }

  //   ]
  // });




  // service part main slick

  $('.service_slide_main').slick({
    vertical: true,
    height: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    centerPadding: '0',
    prevArrow: '<i class="fa-solid fa-angle-up smp_arrow"></i>',
    nextArrow: '<i class="fa-solid fa-angle-down smn_arrow"></i>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });





  // testimonial part slick

  $('.testi_text_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.test_img_slider',
    arrows: false,
    
  });
  $('.test_img_slider').slick({
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testi_text_slide',
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: '<i class="fa-solid fa-angle-up tp_arrow"></i>',
    nextArrow: '<i class="fa-solid fa-angle-down tn_arrow"></i>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
  });




//  pricing plan counter

$('.counter').counterUp({
  delay: 10,
  time: 1000
});



// team part light box

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })


$('.market_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:false,
  centerMode: true,
  centerPadding: "0",
  autoplay: true,
    autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});




$('.team_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});



// $('.main_nav a').smoothScroll({
//   speed: "auto",
//   // autoCoefficient: 4,
// })


// full body wow js
new WOW().init();





})