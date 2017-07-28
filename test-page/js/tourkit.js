$(document).ready(function () {

var $tourKit = [];
var $cityes = [];
var $regions = [];
var $countries = [];
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
      url: './country.json',
      dataType: 'json',
      success: function (data) {
        $countries = data;
     }
});
$.ajax({
      type: 'GET',
      url: './regions.json',
      dataType: 'json',
      success: function (data) {
        $regions = data;
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

         $('#kitHead' + i).append('<div id="showResults' + i + '" class="showResults"></div>');
         $('#showResults' + i).append('<p>СМОТРЕТЬ РЕЗЕЛЬТАТЫ <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></p>');

         $('#mainBlock' + i).append('<div id="country' + i + '" class="country"></div>');
         $('#country' + i).append('<h5>Вы можете задать несколько стран или регионов для одной подборки</h5>');
         $('#country' + i).append('<div id="regionSelect' + i + '" class="region"></div>');
         if (data[i].region1 != ""){
           $('#regionSelect' + i).append('<p id="region1Name' + i + '">' + data[i].region1 + ' <b id="region1Name' + i + '" class="close">&#10006;</b></p>');
         }
         if (data[i].region2 != ""){
           $('#regionSelect' + i).append('<p id="region2Name' + i + '">' + data[i].region2 + ' <b id="region2Name' + i + '" class="close">&#10006;</b></p>');
         }
         if (data[i].region3 != ""){
            $('#regionSelect' + i).append('<p id="region3Name' + i + '">' + data[i].region3 + ' <b id="region3Name' + i + '" class="close">&#10006;</b></p>');
            console.log(data[i].region3);
         }
         $('#country' + i).append('<div id="selectedCountry' + i + '" class="countrySelected"></div>');


           if (data[i].country1 != "") {
             $('#selectedCountry' + i).append('<div id="firstCountry' + i + '" class="countrySelectedBtn"></div>');
             $('#firstCountry' + i).append('<img src="' + data[i].flag1Href + '" alt="" style="height: 40%;">');
             $('#firstCountry' + i).append('<p>' + data[i].country1 + '</p>');
             $('#firstCountry' + i).append('<p id="firstCountry' + i + '" class="close">&#10006;</p>');
           }
           if (data[i].country2 != "") {
             $('#selectedCountry' + i).append('<div id="secondCountry' + i + '" class="countrySelectedBtn"></div>');
             $('#secondCountry' + i).append('<img src="' + data[i].flag2Href + '" alt="" style="height: 40%;">');
             $('#secondCountry' + i).append('<p>' + data[i].country2 + '</p>');
             $('#secondCountry' + i).append('<p id="secondCountry' + i + '" class="close">&#10006;</p>');
           }
           if (data[i].country3 != "") {
             $('#selectedCountry' + i).append('<div id="thirdCountry' + i + '" class="countrySelectedBtn"></div>');
             $('#thirdCountry' + i).append('<img src="' + data[i].flag3Href + '" alt="" style="height: 40%;">');
             $('#thirdCountry' + i).append('<p>' + data[i].country3 + '</p>');
             $('#thirdCountry' + i).append('<p id="thirdCountry' + i + '" class="close">&#10006;</p>');
           }
           if (data[i].country4 != "") {
             $('#selectedCountry' + i).append('<div id="fourthCountry' + i + '" class="countrySelectedBtn"></div>');
             $('#fourthCountry' + i).append('<img src="' + data[i].flag4Href + '" alt="" style="height: 40%;">');
             $('#fourthCountry' + i).append('<p>' + data[i].country4 + '</p>');
             $('#fourthCountry' + i).append('<p id="fourthCountry' + i + '" class="close">&#10006;</p>');
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
         $('#tourDetailsDate' + i).append('<input type="text" id="SEDate' + i + 'Input" name="SEDate" value="" class="SEDate1">');

         $('#tourDetails' + i).append('<div id="numOfDays' + i + '" class="numOfDays"></div>');
         $('#numOfDays' + i).append('<label for="days' + i + 'Input">На сколько</label>');
         $('#numOfDays' + i).append('<div id="tourDetailsDays' + i + '" class="tourDetailsItems"></div>');
         $('#tourDetailsDays' + i).append('<input type="text" id="days' + i + 'Input" name="days" value="' + data[i].qNights + ' ночей" class="nDays">');

         $('#tourDetails' + i).append('<div id="people' + i + '" class="people"></div>');
         $('#people' + i).append('<label for="peopleNum' + i + 'Input">Количество гостей</label>');
         $('#people' + i).append('<div id="tourDetailsPeople' + i + '" class="tourDetailsItems"></div>');
         $('#tourDetailsPeople' + i).append('<input type="text" id="peopleNum' + i + 'Input" name="peopleNum" value="' + data[i].qFullAge + ' взрослых, ' + data[i].qChild + ' детей" class="peopleNum">');

         $('#tourDetails' + i).append('<div id="costRange' + i + '" class="costRange"></div>');
         $('#costRange' + i).append('<label for="costRange' + i + 'Input">Стоимость тура</label>');
         $('#costRange' + i).append('<div id="tourDetailsCost' + i + '" class="tourDetailsItems"></div>');
         $('#tourDetailsCost' + i).append('<input type="text" id="costRange' + i + 'Input" name="costRange" value="' + data[i].costFrom + ' Р - ' + data[i].costTo + ' Р" class="costRangeI">');

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
       var $nt = 0;
       $('.btnSelect').on('click', function () {
         for (var k = 0; k < data.length; k++) {
           if (this.id == 'addRegionBtn' + k) {
             $('#mainBlock' + k).append('<div id="dialogBox' + k + '" class="dialog"></div>');
             $('#dialogBox' + k).append('<h2>Выберете направление</h2>');
             for (var kk = 0; kk < $regions.length; kk++) {
               $('#dialogBox' + k).append('<div id="regionId' + kk + '" class="regionId"></div>');
               $('#regionId' + kk).append('<p>' + $regions[kk].region + '</p>');
             }
              $nt = k;
             $('.regionId').on('click', function () {
               var idNum = k - 1;
               var content = this.id;
               content = parseInt(content[8]);


               if ($tourKit[$nt].region1 == ""){
                 $('#regionSelect' + $nt).append('<p id="region1Name' + $nt + '">' + $regions[content].region + ' <b id="region1Name' + $nt + '" class="close">&#10006;</b></p>');
                 $('#region1Name' + $nt).on('click', function () {
                 $('#' + this.id).remove();
                 $tourKit[$nt].region1 = "";
                 });
                 $tourKit[$nt].region1 = $regions[content].region;
                 $('.dialog').remove();
               } else if ($tourKit[$nt].region2 == "") {
                 $('#regionSelect' + $nt).append('<p id="region2Name' + $nt + '">' + $regions[content].region + ' <b id="region2Name' + $nt + '" class="close">&#10006;</b></p>');
                 $('#region2Name' + $nt).on('click', function () {
                 $('#' + this.id).remove();
                 $tourKit[$nt].region2 = "";
                 });
                 $tourKit[$nt].region2 = $regions[content].region;
                 $('.dialog').remove();
               } else if ($tourKit[$nt].region3 == "") {
                 $('#regionSelect' + $nt).append('<p id="region3Name' + $nt + '">' + $regions[content].region + ' <b id="region3Name' + $nt + '" class="close">&#10006;</b></p>');
                 $('#region3Name' + $nt).on('click', function () {
                 $('#' + this.id).remove();
                 $tourKit[$nt].region3 = "";
                 });
                 $tourKit[$nt].region3 = $regions[content].region;
                 $('.dialog').remove();
               } else {
                 alert('Достигнуто максимальное количество регионов');
                 $('.dialog').remove();
               }

             });



           } else if (this.id == 'addCountryBtn' + k) {
             $('#mainBlock' + k).append('<div id="dialogBox' + k + '" class="dialog"></div>');
             $('#dialogBox' + k).append('<h2>Выберете Страну</h2>');
             console.log($tourKit);
             console.log(k);
    //----------------
            var $t = k;
            //  if ($tourKit[k].region1 != "") {
               for (var c = 0; c < $countries.length; c++) {
                 if ($tourKit[k].region1 == $countries[c].region) {
                   $('#dialogBox' + k).append('<div id="CountryS' + c + '" class="countrySelectedBtn1"></div>');
                   $('#CountryS' + c).append('<p>' + $countries[c].country + '</p>');
                 }
                 if ($tourKit[k].region2 == $countries[c].region) {
                   $('#dialogBox' + k).append('<div id="CountryS' + c + '" class="countrySelectedBtn1"></div>');
                   $('#CountryS' + c).append('<p>' + $countries[c].country + '</p>');
                 }
                 if ($tourKit[k].region3 == $countries[c].region) {
                   $('#dialogBox' + k).append('<div id="CountryS' + c + '" class="countrySelectedBtn1"></div>');
                   $('#CountryS' + c).append('<p>' + $countries[c].country + '</p>');
                 }
               }
            //  }
               $('.countrySelectedBtn1').on('click', function () {
                 var $countryId = this.id;
                 $countryId = $countryId.slice(8);

                 if ($tourKit[$t].country1 == "") {
                   $('#selectedCountry' + $t).append('<div id="firstCountry' + $t + '" class="countrySelectedBtn"></div>');
                  // //  $('#firstCountry' + i).append('<img src="' + data[i].flag1Href + '" alt="" style="height: 40%;">');
                   $('#firstCountry' + $t).append('<p>' + $countries[$countryId].country + '</p>');
                   $('#firstCountry' + $t).append('<p id="firstCountry' + $t + '" class="close">&#10006;</p>');
                   $tourKit[$t].country1 = $countries[$countryId].country;
                   $('#firstCountry' + $t).on('click', function () {
                   $('#' + this.id).remove();
                   $tourKit[$t].country1 = "";
                  });
                  $('.dialog').remove();
                } else if ($tourKit[$t].country2 == ""){
                   $('#selectedCountry' + $t).append('<div id="secondCountry' + $t + '" class="countrySelectedBtn"></div>');
                  // //  $('#firstCountry' + i).append('<img src="' + data[i].flag1Href + '" alt="" style="height: 40%;">');
                   $('#secondCountry' + $t).append('<p>' + $countries[$countryId].country + '</p>');
                   $('#secondCountry' + $t).append('<p id="secondCountry' + $t + '" class="close">&#10006;</p>');
                   $tourKit[$t].country2 = $countries[$countryId].country;
                   $('#secondCountry' + $t).on('click', function () {
                   $('#' + this.id).remove();
                   $tourKit[$t].country2 = "";
                   });
                  $('.dialog').remove();
                } else if ($tourKit[$t].country3 == ""){
                   $('#selectedCountry' + $t).append('<div id="thirdCountry' + $t + '" class="countrySelectedBtn"></div>');
                  // //  $('#firstCountry' + i).append('<img src="' + data[i].flag1Href + '" alt="" style="height: 40%;">');
                   $('#thirdCountry' + $t).append('<p>' + $countries[$countryId].country + '</p>');
                   $('#thirdCountry' + $t).append('<p id="thirdCountry' + $t + '" class="close">&#10006;</p>');
                   $tourKit[$t].country3 = $countries[$countryId].country;
                   $('#thirdCountry' + $t).on('click', function () {
                   $('#' + this.id).remove();
                   $tourKit[$t].country3 = "";
                   });
                  $('.dialog').remove();
                } else if ($tourKit[$t].country4 == ""){
                   $('#selectedCountry' + $t).append('<div id="fourthCountry' + $t + '" class="countrySelectedBtn"></div>');
                  // //  $('#firstCountry' + i).append('<img src="' + data[i].flag1Href + '" alt="" style="height: 40%;">');
                   $('#fourthCountry' + $t).append('<p>' + $countries[$countryId].country + '</p>');
                   $('#fourthCountry' + $t).append('<p id="fourthCountry' + $t + '" class="close">&#10006;</p>');
                   $tourKit[$t].country4 = $countries[$countryId].country;
                   $('#fourthCountry' + $t).on('click', function () {
                   $('#' + this.id).remove();
                   $tourKit[$t].country4 = "";
                   });
                  $('.dialog').remove();
                } else {
                  alert('Достигнуто максимальное количество стран');
                  $('.dialog').remove();
                }
               });
             }
    //----------------
           }
       });
       $('.close').on('click', function () {
         var $x = this.id;
         console.log(this.id);
         if ($x[6] == 1) {
           $tourKit[$x[11]].region1 = "";
         } else if ($x[6] == 2) {
           $tourKit[$x[11]].region2 = "";
         } else if ($x[6] == 3) {
           $tourKit[$x[11]].region3 = "";
         } else if ($x[1] == 'i') {
           $tourKit[$x[12]].country1 = "";
         } else if ($x[1] == 'e') {
           $tourKit[$x[13]].country2 = "";
         } else if ($x[1] == 'h') {
           $tourKit[$x[12]].country3 = "";
         } else if ($x[1] == '0') {
           $tourKit[$x[13]].country4 = "";
         }
         $('#' + this.id).remove();
       });
//---------------------
       $('.SEDate1').on('click', function () {
         var $dId1 = this.id;
         var $dId = $dId1[6];
         $('#mainBlock' + $dId).append('<div id="dialogBoxDate' + $dId + '" class="dialogDate"></div>');
         $('#dialogBoxDate' + $dId).append('<h2>Выберете дату вылета и дату прилета</h2>');
         $('#dialogBoxDate' + $dId).append('<div id="startDateBox' + $dId + '" class="dialogDateBox"></div>');
         $('#startDateBox' + $dId).append('<p>Выберите дату вылета</p>');
         $('#startDateBox' + $dId).append('<div id="startDate' + $dId + '" class="dialogDateInput"></div>');
         $('#startDate' + $dId).append('<input type="text" id="start">');
         $('#dialogBoxDate' + $dId).append('<div id="endDateBox' + $dId + '" class="dialogDateBox"></div>');
         $('#endDateBox' + $dId).append('<p>Выберите дату прилета</p>');
         $('#endDateBox' + $dId).append('<div id="endDate' + $dId + '" class="dialogDateInput"></div>');
         $('#endDate' + $dId).append('<input type="text" id="end">');
         $('#dialogBoxDate' + $dId).append('<div id="endBtn' + $dId + '" class="dialogDateBtn"></div>');
         $('#endBtn' + $dId).append('<p>Готово</p>');
        $('#start').datepicker({
          dateFormat: "dd.mm.yy",
          firstDay: 1
        });
        $('#end').datepicker({
          dateFormat: "dd.mm.yy",
          firstDay: 1
        });
        $('#endBtn' + $dId).on('click', function () {
          var $startD = document.querySelector('#start').value;
          var $endD = document.querySelector('#end').value;
          document.querySelector('#' + $dId1).value = $startD + ' - ' + $endD;
          $('.dialogDate').remove();
        });

       });
//---------------------
       $('.nDays').on('click', function () {
         var $daysId = this.id;
         var $idD = $daysId[4];
         $('#mainBlock' + $idD).append('<div id="dialogBoxDays' + $idD + '" class="dialogDate"></div>');
         $('#dialogBoxDays' + $idD).append('<h2>Выберете количество дней</h2>');
         $('#dialogBoxDays' + $idD).append('<div id="dialogDays' + $idD + '" class="dialogDayPeack"></div>');
         $('#dialogDays' + $idD).append('<label for="radio-1">1 - 6</label>');
         $('#dialogDays' + $idD).append('<input type="radio" name="radio-1" id="radio-1">');
         $('#dialogDays' + $idD).append('<label for="radio-2">7 - 14</label>');
         $('#dialogDays' + $idD).append('<input type="radio" name="radio-2" id="radio-2">');
         $('#dialogDays' + $idD).append('<label for="radio-3">15 - 20</label>');
         $('#dialogDays' + $idD).append('<input type="radio" name="radio-3" id="radio-3">');
         $( "input[type='radio']" ).checkboxradio();
         $( "input[type='radio']" ).on('click', function () {
           var $DaysN = this.id;
           $DaysN = $DaysN[6];
           if ($DaysN == 1) {
             document.querySelector('#' + $daysId).value = '1 - 6 ночей';
             $tourKit[$idD].qNights = "1 - 6";
           } else if ($DaysN == 2) {
             document.querySelector('#' + $daysId).value = '7 - 14 ночей';
             $tourKit[$idD].qNights = "7 - 14";
           } else if ($DaysN == 3) {
             document.querySelector('#' + $daysId).value = '15 - 20 ночей';
             $tourKit[$idD].qNights = "15 - 20";
           }
           $('.dialogDate').remove();
         });
       });
//---------------------
       $('.peopleNum').on('click', function () {
         var $PId = this.id;
         var $idP = $PId[9];
         $('#mainBlock' + $idP).append('<div id="dialogBoxPeople' + $idP + '" class="dialogPeople"></div>');
         $('#dialogBoxPeople' + $idP).append('<h2>Выберете количество человек</h2>');
         $('#dialogBoxPeople' + $idP).append('<div id="BoxPeopleFullAge' + $idP + '" class="dialogFullAge"></div>');
         $('#BoxPeopleFullAge' + $idP).append('<h6>Выберете количество взрослых</h6>');
         $('#BoxPeopleFullAge' + $idP).append('<div id="PeopleFullAge' + $idP + '" class="FullAgee"></div>');
         $('#PeopleFullAge' + $idP).append('<div id="pers1n' + $idP + '" class="person"></div>');
         $('#pers1n' + $idP).append('<p id="per1n' + $idP + '" class="personT"><i class="fa fa-male" aria-hidden="true"></i></p>');
         $('#PeopleFullAge' + $idP).append('<div id="pers2n' + $idP + '" class="person"></div>');
         $('#pers2n' + $idP).append('<p id="per2n' + $idP + '" class="personT"><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i></p>');
         $('#PeopleFullAge' + $idP).append('<div id="pers3n' + $idP + '" class="person"></div>');
         $('#pers3n' + $idP).append('<p id="per3n' + $idP + '" class="personT"><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i></p>');
         $('#PeopleFullAge' + $idP).append('<div id="pers4n' + $idP + '" class="person"></div>');
         $('#pers4n' + $idP).append('<p id="per4n' + $idP + '" class="personT"><i class="fa fa-male" aria-hidden="true"><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i></p>');
         $('#PeopleFullAge' + $idP).append('<div id="pers5n' + $idP + '" class="person"></div>');
         $('#pers5n' + $idP).append('<p id="per5n' + $idP + '" class="personT"><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i></p>');
//Дети
         $('#dialogBoxPeople' + $idP).append('<div id="BoxPeopleChild' + $idP + '" class="dialogFullAge"></div>');
         $('#BoxPeopleChild' + $idP).append('<h6>Выберете количество детей</h6>');
         $('#BoxPeopleChild' + $idP).append('<div id="PeopleChilde' + $idP + '" class="FullAgee"></div>');
         $('#PeopleChilde' + $idP).append('<div id="pers1h' + $idP + '" class="person"></div>');
         $('#pers1h' + $idP).append('<p id="per1h' + $idP + '" class="personT"><i class="fa fa-male" aria-hidden="true"></i></p>');
         $('#PeopleChilde' + $idP).append('<div id="pers2h' + $idP + '" class="person"></div>');
         $('#pers2h' + $idP).append('<p id="per2h' + $idP + '" class="personT"><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i></p>');
         $('#PeopleChilde' + $idP).append('<div id="pers3h' + $idP + '" class="person"></div>');
         $('#pers3h' + $idP).append('<p id="per3h' + $idP + '" class="personT"><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i></p>');
         $('#PeopleChilde' + $idP).append('<div id="pers4h' + $idP + '" class="person"></div>');
         $('#pers4h' + $idP).append('<p id="per4h' + $idP + '" class="personT"><i class="fa fa-male" aria-hidden="true"><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i></p>');
         $('#PeopleChilde' + $idP).append('<div id="pers5h' + $idP + '" class="person"></div>');
         $('#pers5h' + $idP).append('<p id="per5h' + $idP + '" class="personT"><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-male" aria-hidden="true"></i></p>');
         $('#dialogBoxPeople' + $idP).append('<div id="endBtn' + $idP + '" class="dialogDateBtn"></div>');
         $('#endBtn' + $idP).append('<p>Готово</p>');
         var $fullAges = 0;
         var $childrens = 0;
         $('.person').on('click', function () {
           var $PersId = this.id;
           var $check = $PersId[5];
           if ($PersId[5] == "h") {
             $childrens = $PersId[4];
             var $perName = '#per' + $PersId[4] + $PersId[5];
             for (var z = 0; z < 6; z++) {
               $('#per' + z + $PersId[5] + $idP).removeClass("personTActive").addClass("personT");
             }
             $('#per' + $PersId[4] + $PersId[5] + $idP).removeClass("personT").addClass("personTActive");
           }
           if ($PersId[5] == "n") {
             $fullAges = $PersId[4];
             var $perName = '#per' + $PersId[4] + $PersId[5];
             for (var z = 0; z < 6; z++) {
               $('#per' + z + $PersId[5] + $idP).removeClass("personTActive").addClass("personT");
             }
             $('#per' + $PersId[4] + $PersId[5] + $idP).removeClass("personT").addClass("personTActive");
           }
         });
         $('#endBtn' + $idP).on('click', function () {
           $tourKit[$idP].qFullAge = $fullAges;
           $tourKit[$idP].qChild = $childrens;
           document.querySelector('#peopleNum' + $idP + 'Input').value = $fullAges + ' Взрослых, ' + $childrens + ' детей';
           $('.dialogPeople').remove();
         });
       });
//---------------------
      $('.costRangeI').on('click', function () {
        var $idP = this.id;
        var $idC = $idP[9];
        $('#mainBlock' + $idC).append('<div id="dialogBoxCost' + $idC + '" class="dialogDate"></div>');
        $('#dialogBoxCost' + $idC).append('<h2>Выберете диапазон цен</h2>');
        $('#dialogBoxCost' + $idC).append('<div id="dialogCost' + $idC + '" class="dialogCost"></div>');
        $('#dialogCost' + $idC).slider({
                values: [0, 1000000],
                range: true,
                // create: function() {
                //     $('#rangeMin').val($('#rangeslider').slider("values", 0));
                //     $('#rangeMax').val($('#rangeslider').slider("values", 1));
                // }
            });
        console.log($idC);
      });


      }
//---------------------

    });


});
