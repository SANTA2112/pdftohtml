$(function() {
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
  $("body").append('<div class="top"><i class="fa fa-angle-double-up">');

      $("body").on("click", ".top", function() {
        $("html, body").animate({scrollTop: 0}, "slow");

      });
});
