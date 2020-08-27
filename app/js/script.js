$(document).ready(function(){
  $('.header-title').click(function(event){
    $(this).toggleClass('active').next().slideToggle(300);
  });
});