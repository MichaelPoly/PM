$(document).ready(function() {
  $('#feedbacktWindow').hide();
  $('#feedback').on('click', function() {
    $('#feedbacktWindow').show();
  });

  $('#submitt').on('click', function() {




    $('#feedbacktWindow').hide();
  });

  $(window).on('mousemove', function () {
    $('#banner1').effect('bounce', {}, 1000);
    $('#banner1').effect('shake', {}, 1000);
  });
  $('#banner').on('mouseover', function () {
    $('#banner').effect('pulsate', {}, 1000);
  });
});
