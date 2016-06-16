//= require_tree .
$(document).ready(function() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

  //Set the height of the element
  $('.header').css('height', h);
  $('.header .brand-title').css('padding-top', h/2.4);


  $('#close-about').click(function() {
    $('.about, .about-img').removeClass('show');
    $('.about, .about-img').addClass('hide');
  });

  $('#open-about').click(function() {
    $('.about, .about-img').addClass('show');
    $('.about, .about-img').removeClass('hide');
  });

  var sticky_navigation_offset_top = $('.norway .navigation').offset().top;
  var sticky_navigation = function(){
    var scroll_top = $(window).scrollTop(); 
    if (scroll_top > sticky_navigation_offset_top) { 
      $('.norway .navigation').addClass('fixed');
    } else {
      $('.norway .navigation').removeClass('fixed');
    }   
  };
  
  // run our function on load
  sticky_navigation();
  
  // and run it again every time you scroll
  $(window).scroll(function() {
    sticky_navigation();
  });

  // lazy load images 
  $(function() {
    $(".lazy").lazyload();
  });


});













