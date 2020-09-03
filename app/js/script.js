$(document).ready(function(){
  //Spoiler
  $('.header-title').click(function(event){
    $(this).toggleClass('active').next().slideToggle(300);
  });
  //Slider
  $('.slider-for').slick({
    asNavFor: '.slider-nav',
    arrows: false,
    autoplay: true, //тянет и нижные слайдеры
    draggable: false,
    swipe: false,
    fade: true,
  });
  $('.slider-nav').slick({
    asNavFor: '.slider-for',
    arrows: false,
    draggable: false,
    swipe: false,
    variableWidth: true,
    // fade: true,  //делает поломку
    responsive: [
      {
        breakpoint: 576,
        settings: {
          variableWidth: false,
        }
      }
    ]
  });
});