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

  if (scrolling > 50) {
    $(".header_main").addClass("header_bg")
  } else(
    $(".header_main").removeClass("header_bg")
  )
})

// banner js

$('.banner_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  fade: true,
  prevArrow: '<i class="fa-solid fa-angle-left bicon2"></i>',
  nextArrow: '<i class="fa-solid fa-angle-right bicon"></i>'

});

// featured product js

var mixer = mixitup('.featured_body');


// latest product js

$('.latest_main').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  prevArrow: '<i class="fa-solid fa-angle-left licon1 "></i>',
  nextArrow: '<i class="fa-solid fa-angle-right licon2 "></i>'

});



// testimonial js


$('.testimonial_body').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  prevArrow: '<i class="fa-solid fa-angle-left ticon1 "></i>',
  nextArrow: '<i class="fa-solid fa-angle-right ticon2 "></i>'

});




// counetr js

// Set the date we're counting down to
var countDownDate = new Date("Aug 13, 2023 1:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("counter1").innerHTML = days;
  document.getElementById("counter2").innerHTML = hours;
  document.getElementById("counter3").innerHTML = minutes;
  document.getElementById("counter4").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter1").innerHTML = "EXPIRED";
    document.getElementById("counter2").innerHTML = "EXPIRED";
    document.getElementById("counter3").innerHTML = "EXPIRED";
    document.getElementById("counter4").innerHTML = "EXPIRED";
  }
}, 1000);





lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})