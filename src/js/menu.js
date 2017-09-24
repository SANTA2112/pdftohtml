$(document).ready(function() {
  //Для липкого меню
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 90) {
      $(".headermenu").addClass("fix");
    } else {
      $(".headermenu").removeClass("fix");
    }
  });
  //конец липкого меню
});
