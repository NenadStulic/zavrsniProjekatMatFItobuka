(function ($) {
  "use strict";
  
  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(750).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });
})(jQuery);