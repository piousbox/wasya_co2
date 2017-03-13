
$(document).ready(function() {

  $("a.about").click(function() {
    $.scrollTo( ".about-wasya-co", 1000 ); // , {easing:'elasout'} );
  });

  $("a.services").click(function() {
    $.scrollTo( ".services-list", 1000 );
  });

  $(window).scroll(function() {
    var x = $(window).scrollTop();
    if (x>0 && x<300) {
      $("#sun").css({"left": x * 1.5 - 150, "top":200-x});
    }
  });

});
