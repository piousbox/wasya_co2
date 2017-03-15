
$(document).ready(function() {

  $("a.about").click(function() {
    $.scrollTo( ".about-wasya-co", 1000 ); // , {easing:'elasout'} );
  });

  $("a.services").click(function() {
    $.scrollTo( ".services-list", 1000 );
  });

  $("a.contact").click(function() {
    $.scrollTo( "#contact_us", 1000 );
  });

  var sunAndMoon = function() {
    // sun & moon
    var x = $(window).scrollTop();
    if (x>0 && x<700) {
      $("#sun").css({"left": x * 1.5 - 150, "top":200-x});
      $("#moon").css({"right": x *1.5 -75, "top": x+250});
    }
  };
  $(window).scroll(sunAndMoon);
  sunAndMoon();

  $("#contact_us_response").popup({
    background: true
  });

  $("#contact_us button[type='Submit']").click(function (e) {
    var thisName  = $("#contact_us input[name='name']").val();
    var thisPhone = $("#contact_us input[name='phone']").val();
    var thisEmail = $("#contact_us input[name='email']").val();
    var thisVerification = $("#contact_us input[name='verification']").val();
    var thisDescr = $("#contact_us textarea").val();

    e.preventDefault();   
    $.ajax({
      type: 'POST',
      processData: true,
      url: "//" + document.domain + "/contact_us.php",
      data: { name: thisName, phone: thisPhone, email: thisEmail, verification: thisVerification, descr: thisDescr },
      headers: {
        'ContentType': 'application/json'
      },
      success: function (data) {
        $("#contact_us_response .response").html(data);
        $("#contact_us_response").popup('show');
      }
    });
  });
});
