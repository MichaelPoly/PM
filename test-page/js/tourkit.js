$(document).ready(function () {

var $tourKit = [];

$('#interests').hide();

$.ajax({
      type: 'GET',
      url: './kits.json',
      dataType: 'json',
      success: function (data) {
       $tourKit = data;

      }
    });
});
