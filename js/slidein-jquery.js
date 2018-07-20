
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 700 /*600*/) {
      $(this).addClass("slide");
    }
  });
});

/* contact slide-in effect*/
$(window).scroll(function() {
  $(".slideanim-1").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 1000) {
      $(this).addClass("slide");
    }
  });
});

