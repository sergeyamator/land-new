(function() {
  'use strict';

 if ($('.circle').length) {
   $('.circle').knob();
 }

  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });
  
})();