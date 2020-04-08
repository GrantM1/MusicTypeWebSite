$(document).ready(function() {
 $('.side-btn').click(function(){
  $('.side-nav-links').slideToggle(1000);
  $('.side-btn').toggleClass('change')
 })
})