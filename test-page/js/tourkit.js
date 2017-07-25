$(document).ready(function () {

var $tourKit = [];

$('#mainBlock5').hide();

$.ajax({
      type: 'GET',
      url: './kits.json',
      dataType: 'json',
      success: function (data) {
       $tourKit = data;
       console.log($tourKit);
       for (var i = 0; i < data.length; i++) {
         $('#kitShow').append('<div id="kit' + i + '" class="kitBtn"></div>');
         $('#kit' + i).append('<p>' + data[i].kitName + '</p>');
         $('#interests').append('<div id="mainBlock' + i + '" class="mainBlock"></div>');
         $('#mainBlock' + i).append('<div id="kitHead' + i + '" class="kitHead"></div>');
         $('#kitHead' + i).append('<div id="kitHead' + i + 'Input" class="Input"></div>');
         $('#kitHead' + i + 'Input').append('<label for="kitName' + i + '">Название подборки</label>');
         $('#kitHead' + i + 'Input').append('<div id="kitName' + i + '" class="kitNameBox"></div>');
         $('#kitName' + i).append('<input type="text" id="kitName' + i + 'Input" name="kitName" value="' + data[i].kitName + '">');
         $('#kitHead' + i).append('<div class="spanDiv"></div>');
         $('#kitHead' + i).append('<div id="kitCity' + i + 'Input" class="Input"></div>');
         $('#kitCity' + i + 'Input').append('<label for="cityName' + i + 'Input">Ваш город</label>');
         $('#kitCity' + i + 'Input').append('<div id="cityName' + i + '" class="cityBlock"></div>');
         $('#cityName' + i).append('<input type="text" id="cityName' + i + 'Input" name="cityName1" value="' + data[i].city + '">');
         $('#cityName' + i).append('<p>&#10006;</p>');

// Вставить selection
         $('#kitHead' + i).append('<div id="showResults' + i + '" class="showResults"></div>');
         $('#showResults' + i).append('<p>СМОТРЕТЬ РЕЗЕЛЬТАТЫ <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></p>');

         $('#mainBlock' + i).append('<div id="country' + i + '" class="country"></div>');
         $('#country' + i).append('<h5>Вы можете задать несколько стран или регионов для одной подборки</h5>');
         $('#country' + i).append('<div id="regionSelect' + i + '" class="region"></div>');
         $('#regionSelect' + i).append('<h4 id="regionName' + i + '">' + data[i].region + '</h4>');

         $('#mainBlock' + i).hide();
       }
       var j = parseInt(data.length)-1;
       $('#mainBlock' + j).show();

      }
    });
});
