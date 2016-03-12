var pingpong_form = function(yourNumber) {
  for ( var i = 1; i <= yourNumber; i += 1) {
   if ((i % 3 === 0) && (i % 5 === 0))  {
      $("#result").append("<p>pingpong</p>");
    } else if (i % 5 === 0)  {
      $("#result").append("<p>pong</p>");
    } else if (i % 3 === 0)  {
      $("#result").append("<p>ping</p>");
    } else {
      $("#result").append("<p>" + i + "</p>");
    }
  }
  };

  $(document).ready(function() {
    $("form#pingpong_form").submit(function(event) {
        var yourNumber = parseInt($("input#userinput").val());
        var result = pingpong_form(yourNumber);

        $(".userinput").text(yourNumber);

        event.preventDefault();



  });

});

