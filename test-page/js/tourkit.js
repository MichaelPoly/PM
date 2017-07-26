$(document).ready(function () {

var $tourKit = [];
var $cityes = [];
$('#mainBlock5').hide();
$.ajax({
      type: 'GET',
      url: './citys.json',
      dataType: 'json',
      success: function (data) {
        $cityes = data;
     }
});

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
         $('#kitHead' + i).append('<div id="kitCity' + i + 'Input" class="select"></div>');
         $('#kitCity' + i + 'Input').append('<label for="cityName' + i + 'select">Ваш город</label>');
         $('#kitCity' + i + 'Input').append('<div id="cityName' + i + '" class="cityBlock"></div>');
         $('#cityName' + i).append('<select id="cityName' + i + 'select" class="citySelect" name="cityName' + i + 'select"></select>');
         for (var k = 0; k < $cityes.length; k++) {
           $('#cityName' + i + 'select').append('<option value="' + $cityes[k].city + '">' + $cityes[k].city + '</option>');
         }
         $('#cityName' + i + 'select').selectmenu().selectmenu( "menuWidget" ).addClass( "overflow" );
        //  $('#cityName' + i + 'select').append('<option value="' + data[i].city + '" selected>' + data[i].city + '</option>');
        //  $('#cityName' + i).append('<input type="text" id="cityName' + i + 'Input" class="cityInput" name="cityName1" value="' + data[i].city + '">');
        //  $('#cityName' + i).append('<p>&#10006;</p>');

// Вставить selection
         $('#kitHead' + i).append('<div id="showResults' + i + '" class="showResults"></div>');
         $('#showResults' + i).append('<p>СМОТРЕТЬ РЕЗЕЛЬТАТЫ <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></p>');

         $('#mainBlock' + i).append('<div id="country' + i + '" class="country"></div>');
         $('#country' + i).append('<h5>Вы можете задать несколько стран или регионов для одной подборки</h5>');
         $('#country' + i).append('<div id="regionSelect' + i + '" class="region"></div>');
         $('#regionSelect' + i).append('<h4 id="region1Name' + i + '">' + data[i].region1 + '</h4>');
         $('#regionSelect' + i).append('<h4 id="region2Name' + i + '">' + data[i].region2 + '</h4>');
         $('#country' + i).append('<div id="selectedCountry' + i + '" class="countrySelected"></div>');


           if (data[i].country1 != "") {
             $('#selectedCountry' + i).append('<div id="firstCountry' + i + '" class="countrySelectedBtn"></div>');
             $('#firstCountry' + i).append('<img src="' + data[i].flag1Href + '" alt="" style="height: 40%;">');
             $('#firstCountry' + i).append('<p>' + data[i].country1 + '</p>');
             $('#firstCountry' + i).append('<p class="close">&#10006;</p>');
           }
           if (data[i].country2 != "") {
             $('#selectedCountry' + i).append('<div id="secondCountry' + i + '" class="countrySelectedBtn"></div>');
             $('#secondCountry' + i).append('<img src="' + data[i].flag2Href + '" alt="" style="height: 40%;">');
             $('#secondCountry' + i).append('<p>' + data[i].country2 + '</p>');
             $('#secondCountry' + i).append('<p class="close">&#10006;</p>');
           }
           if (data[i].country3 != "") {
             $('#selectedCountry' + i).append('<div id="thirdCountry' + i + '" class="countrySelectedBtn"></div>');
             $('#thirdCountry' + i).append('<img src="' + data[i].flag3Href + '" alt="" style="height: 40%;">');
             $('#thirdCountry' + i).append('<p>' + data[i].country3 + '</p>');
             $('#thirdCountry' + i).append('<p class="close">&#10006;</p>');
           }
           if (data[i].country4 != "") {
             $('#selectedCountry' + i).append('<div id="fourthCountry' + i + '" class="countrySelectedBtn"></div>');
             $('#fourthCountry' + i).append('<img src="' + data[i].flag4Href + '" alt="" style="height: 40%;">');
             $('#fourthCountry' + i).append('<p>' + data[i].country4 + '</p>');
             $('#fourthCountry' + i).append('<p class="close">&#10006;</p>');
           }

         $('#mainBlock' + i).append('<div id="chengeSelect' + i + '" class="chengeSelect"></div>');
         $('#chengeSelect' + i).append('<div id="addRegionBtn' + i + '" class="btnSelect"></div>');
         $('#addRegionBtn' + i).append('<p>ДОБАВИТЬ РЕГИОН</p>');
         $('#chengeSelect' + i).append('<div id="addCountryBtn' + i + '" class="btnSelect"></div>');
         $('#addCountryBtn' + i).append('<p>ДОБАВИТЬ СТРАНЫ</p>');

         $('#mainBlock' + i).append('<div id="tourDetails' + i + '" class="tourDetails"></div>');
         $('#tourDetails' + i).append('<div id="startEndDate' + i + '" class="startEndDate"></div>');
         $('#startEndDate' + i).append('<label for="SEDate' + i + 'Input">Дата вылета</label>');
         $('#startEndDate' + i).append('<div id="tourDetailsDate' + i + '" class="tourDetailsItems"></div>');
         $('#tourDetailsDate' + i).append('<input type="text" id="SEDate' + i + 'Input" name="SEDate" value="">');

         $('#tourDetails' + i).append('<div id="numOfDays' + i + '" class="numOfDays"></div>');
         $('#numOfDays' + i).append('<label for="days' + i + 'Input">На сколько</label>');
         $('#numOfDays' + i).append('<div id="tourDetailsDays' + i + '" class="tourDetailsItems"></div>');
         $('#tourDetailsDays' + i).append('<input type="text" id="days' + i + 'Input" name="days" value="' + data[i].qNights + '">');

         $('#tourDetails' + i).append('<div id="people' + i + '" class="people"></div>');
         $('#people' + i).append('<label for="peopleNum' + i + 'Input">Количество гостей</label>');
         $('#people' + i).append('<div id="tourDetailsPeople' + i + '" class="tourDetailsItems"></div>');
         $('#tourDetailsPeople' + i).append('<input type="text" id="peopleNum' + i + 'Input" name="peopleNum" value="' + data[i].qFullAge + ' взрослых, ' + data[i].qChild + ' детей">');

         $('#tourDetails' + i).append('<div id="costRange' + i + '" class="costRange"></div>');
         $('#costRange' + i).append('<label for="costRange' + i + 'Input">Стоимость тура</label>');
         $('#costRange' + i).append('<div id="tourDetailsCost' + i + '" class="tourDetailsItems"></div>');
         $('#tourDetailsCost' + i).append('<input type="text" id="costRange' + i + 'Input" name="costRange" value="' + data[i].costFrom + ' Р - ' + data[i].costTo + ' Р">');

         $('#mainBlock' + i).append('<div id="hotelDesc' + i + '" class="hotelDesc"></div>');
         $('#hotelDesc' + i).append('<div id="hotelStar' + i + '" class="hotelStar"></div>');
         $('#hotelStar' + i).append('<p id="hotelsStar' + i + '" class="hotels">Категория отелей от</p>');
         $('#hotelStar' + i).append('<div id="stars' + i + '" class="stars"></div>');

         var $starRate = data[i].starsFrom;
         for (var n = 0; n < 5; n++) {
           if (n < $starRate) {
             $('#stars' + i).append('<p id="Star'+ n + i + '" style=" color: #ffcc00;">&#9733;</p>');
           } else {
             $('#stars' + i).append('<p id="Star'+ n + i + '">&#9733;</p>');
           }
         }

         $('#hotelDesc' + i).append('<div id="hotelRate' + i + '" class="hotelRate"></div>');
         $('#hotelRate' + i).append('<p id="hotelsRate' + i + '" class="hotels">Рейтинг TopHotels</p>');
         $('#hotelRate' + i).append('<div id="rate' + i + '" class="rate"></div>');
         $('#rate' + i).append('<pre>Не ниже </pre><img src="img/crown.svg" alt="" style="height: 40%;"><pre> </pre>');
         $('#rate' + i).append('<p id="rateNum' + i + '" class="rateNum">' + data[i].rateFrom + '</p>');

         $('#hotelDesc' + i).append('<div id="meal' + i + '" class="meal"></div>');
         $('#meal' + i).append('<p id="hotelsMeal' + i + '" class="hotels">Тип питания</p>');
         $('#meal' + i).append('<div id="mealType' + i + '" class="mealType"></div>');
         $('#mealType' + i).append('<input type="text" id="meal' + i + 'Input" name="meal" value="' + data[i].meal + '">');

         $('#hotelDesc' + i).append('<div id="position' + i + '" class="position"></div>');
         $('#position' + i).append('<p id="hotelsPosition' + i + '" class="hotels">Расположение</p>');
         $('#position' + i).append('<div id="positionType' + i + '" class="positionType"></div>');
         $('#positionType' + i).append('<input type="text" id="position' + i + 'Input" name="position" value="' + data[i].positionType + '">');

         $('#hotelDesc' + i).append('<div id="delKit' + i + '" class="delKit"></div>');
         $('#delKit' + i).append('<p id="delKitBtn' + i + '" class="delKitBtn"><i class="fa fa-times-circle" aria-hidden="true"></i> УДАЛИТЬ ПОДБОРКУ</p>');

         $('#mainBlock' + i).hide();

         $('#kit' + i).on('click', function () {
           var $idNum = this.id[3];
           $('.kitBtnActive').removeClass("kitBtnActive").addClass("kitBtn");
           $('#' + this.id).removeClass("kitBtn");
           $('#' + this.id).addClass("kitBtnActive");
           for (var nn = 0; nn < data.length; nn++) {
             $('#mainBlock' + nn).hide();
             $('#mainBlock' + $idNum).show();
             $('.dialog').remove();
           }
         });

       }

       var j = parseInt(data.length)-1;
       $('#mainBlock' + j).show();
       $('#kit' + j).removeClass("kitBtn").addClass("kitBtnActive");

       $('.btnSelect').on('click', function () {
         for (var k = 0; k < data.length; k++) {
           if (this.id == 'addRegionBtn' + k) {
             var $parentBlock = $('#' + this.id);
             $('#mainBlock' + k).append('<div id="dialogBox' + k + '" class="dialog"></div>');
             console.log($parentBlock);
             console.log(k);

           } else if (this.id == 'addCountryBtn' + k) {
             var $parentBlock = $('#' + this.id);
             console.log($parentBlock);
             console.log(k);

           }
         }

       });
      }
    });


});
