$(document).ready(function() {
 // side btn
 $('.side-btn').click(function(){
  $('.side-nav-links').slideToggle(1000);
  $('.side-btn').toggleClass('change')
 })
 // nav btn
 $('.nav-btn').click(function(){
  $('.side-nav').toggleClass('margin');
  $('.nav-btn').toggleClass('change');
  $('main').toggleClass('max-width');
 })
// owl carousel
 $('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  smartSpeed: 1000,
  autoplay: true,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
})
})