(function(){
  "use-strict"

  $(document).ready(function(){
    $('#clock').countdown('2021/07/10', function(event) {
      $(this).html(event.strftime('<span class="count_timer"><span class="single_timer">%w <br><span>Weeks</span> </span><span class="single_timer">%m <br><span>Months</span></span> <span class="single_timer">%D <br><span>Days</span></span> <span class="single_timer">%H <br><span>Hours</span></span> <span class="single_timer">%M <br><span>Minutes</span></span> <span class="single_timer">%S <br><span>Seconds</span></span></span'));
    });
  });



}(jQuery));