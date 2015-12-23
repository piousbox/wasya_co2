
$(document).ready(function() {

  $("a.about").click(function() {
    $.scrollTo( ".about-wasya-co", 1000 ); // , {easing:'elasout'} );
  });

  $("a.services").click(function() {
    $.scrollTo( ".services-list", 1000 );
  });

});
