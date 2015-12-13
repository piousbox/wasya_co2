
$(document).ready(function() {

  $("a.about").click(function() {
    console.log('clicked');
    $.scrollTo( ".about-wasya-co", 1000 ); // , {easing:'elasout'} );
  });

  $("a.services").click(function() {
    console.log('clicked');
    $.scrollTo( ".services-list", 1000 );
  });

});
