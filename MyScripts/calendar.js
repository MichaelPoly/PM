//function calendar() {
var squareWidth = 30;
var squareHeight = 30;

var carrentDate = new Date();
var carrentYear = carrentDate.getFullYear();
var carrentMonth = carrentDate.getMonth();
var carrentDayNum = carrentDate.getDate();
var carrentDay = carrentDate.getDay();
var firstDayOfWeek = new Date(carrentYear, carrentMonth, 0).getDay();

function inputYear() {
  var inputYear = document.createElement('input');
  var atList = document.createAttribute('list');
  atList.value = 'year';
  inputYear.setAttributeNode(atList);
  var atId = document.createAttribute('id');
  atId.value = 'year1';
  inputYear.setAttributeNode(atId);
  var atStyle = document.createAttribute('style');
  atStyle.value = 'width: 50px; height: 20px';
  inputYear.setAttributeNode(atStyle);
  var defaultYear = document.createAttribute('selected');
  defaultYear.value = carrentYear;
  inputYear.setAttributeNode(defaultYear);
  var showCarrentYear = document.createAttribute('placeholder');
  showCarrentYear.value = carrentYear;
  inputYear.setAttributeNode(showCarrentYear);
  // var CarrentYearValue = document.createAttribute('value');
  // CarrentYearValue.value = carrentYear;
  // inputYear.setAttributeNode(CarrentYearValue);
  var action = document.createAttribute('oninput');
  action.value = 'setNewDate();';
  inputYear.setAttributeNode(action);
  document.querySelector('div#' + 'calendarMainInput').appendChild(inputYear);
  var dataList = document.createElement('datalist');
  var atDataListId = document.createAttribute('id');
  atDataListId.value = 'year';
  dataList.setAttributeNode(atDataListId);
  document.querySelector('input#' + 'year1').appendChild(dataList);
  for (var i = carrentYear + 2; i > 2000; i--) {
    var option = document.createElement('option');
    option.value = i;
    document.querySelector('dataList#' + 'year').appendChild(option);
  }


}
function inputMonth() {
  var inputMonth = document.createElement('input');
  var atList = document.createAttribute('list');
  atList.value = 'month';
  inputMonth.setAttributeNode(atList);
  var atId = document.createAttribute('id');
  atId.value = 'month1';
  inputMonth.setAttributeNode(atId);
  var atStyle = document.createAttribute('style');
  atStyle.value = 'width: 150px; height: 20px';
  inputMonth.setAttributeNode(atStyle);
  var defaultMonth = document.createAttribute('selected');
  defaultMonth.value = carrentMonth;
  inputMonth.setAttributeNode(defaultMonth);
  var showMonth = document.createAttribute('placeholder');
  if (carrentMonth == 0) carrentMonthChar = 'Январь';
    else if(carrentMonth == 1) carrentMonthChar = 'Февраль';
    else if(carrentMonth == 2) carrentMonthChar = 'Март';
    else if(carrentMonth == 3) carrentMonthChar = 'Апрель';
    else if(carrentMonth == 4) carrentMonthChar = 'Май';
    else if(carrentMonth == 5) carrentMonthChar = 'Инюнь';
    else if(carrentMonth == 6) carrentMonthChar = 'Инюль';
    else if(carrentMonth == 7) carrentMonthChar = 'Август';
    else if(carrentMonth == 8) carrentMonthChar = 'Сентябрь';
    else if(carrentMonth == 9) carrentMonthChar = 'Октябрь';
    else if(carrentMonth == 10) carrentMonthChar = 'Ноябрь';
    else if(carrentMonth == 11) carrentMonthChar = 'Декабрь';
  showMonth.value = carrentMonthChar;
  inputMonth.setAttributeNode(showMonth);
  var action = document.createAttribute('oninput');
  action.value = 'setNewDate();';
  inputMonth.setAttributeNode(action);
  document.querySelector('div#' + 'calendarMainInput').appendChild(inputMonth);
  var dataList = document.createElement('datalist');
  var atDataListId = document.createAttribute('id');
  atDataListId.value = 'month';
  dataList.setAttributeNode(atDataListId);
  document.querySelector('input#' + 'month1').appendChild(dataList);
    var option = document.createElement('option');
    option.value = 'Январь';
    document.querySelector('dataList#' + 'month').appendChild(option);
    var option = document.createElement('option');
    option.value = 'Февраль';
    document.querySelector('dataList#' + 'month').appendChild(option);
    var option = document.createElement('option');
    option.value = 'Март';
    document.querySelector('dataList#' + 'month').appendChild(option);
    var option = document.createElement('option');
    option.value = 'Апрель';
    document.querySelector('dataList#' + 'month').appendChild(option);
    var option = document.createElement('option');
    option.value = 'Май';
    document.querySelector('dataList#' + 'month').appendChild(option);
    var option = document.createElement('option');
    option.value = 'Июнь';
    document.querySelector('dataList#' + 'month').appendChild(option);
    var option = document.createElement('option');
    option.value = 'Июль';
    document.querySelector('dataList#' + 'month').appendChild(option);
    var option = document.createElement('option');
    option.value = 'Август';
    document.querySelector('dataList#' + 'month').appendChild(option);
    var option = document.createElement('option');
    option.value = 'Сентябрь';
    document.querySelector('dataList#' + 'month').appendChild(option);
    var option = document.createElement('option');
    option.value = 'Октябрь';
    document.querySelector('dataList#' + 'month').appendChild(option);
    var option = document.createElement('option');
    option.value = 'Ноябрь';
    document.querySelector('dataList#' + 'month').appendChild(option);
    var option = document.createElement('option');
    option.value = 'Декабрь';
    document.querySelector('dataList#' + 'month').appendChild(option);

}

function drawNumOfDay() {
  if (firstDayOfWeek == 0) {
    for (var i = 1; i < 43; i++) {
      var dayOfWeek1 = 'div#dayNum' + i;

      var Year = carrentDate.getFullYear();
      var Month = carrentDate.getMonth();
      var Day = new Date(Year, Month, i).getDate();

      var p = document.querySelector(dayOfWeek1).querySelector('p');
      p.innerText = Day;
    }
  } else if (firstDayOfWeek == 1) {
    for (var i = 1; i < 43; i++) {
      var dayOfWeek1 = 'div#dayNum' + i;

      var Year = carrentDate.getFullYear();
      var Month = carrentDate.getMonth();
      var Day = new Date(Year, Month, i - 1).getDate();

      var p = document.querySelector(dayOfWeek1).querySelector('p');
      p.innerText = Day;
    }
  } else if (firstDayOfWeek == 2) {
    for (var i = 1; i < 43; i++) {
      var dayOfWeek1 = 'div#dayNum' + i;

      var Year = carrentDate.getFullYear();
      var Month = carrentDate.getMonth();
      var Day = new Date(Year, Month, i - 2).getDate();

      var p = document.querySelector(dayOfWeek1).querySelector('p');
      p.innerText = Day;
    }
  } else if (firstDayOfWeek == 3) {
    for (var i = 1; i < 43; i++) {
      var dayOfWeek1 = 'div#dayNum' + i;

      var Year = carrentDate.getFullYear();
      var Month = carrentDate.getMonth();
      var Day = new Date(Year, Month, i - 3).getDate();

      var p = document.querySelector(dayOfWeek1).querySelector('p');
      p.innerText = Day;
    }
  } else if (firstDayOfWeek == 4) {
    for (var i = 1; i < 43; i++) {
      var dayOfWeek1 = 'div#dayNum' + i;

      var Year = carrentDate.getFullYear();
      var Month = carrentDate.getMonth();
      var Day = new Date(Year, Month, i - 4).getDate();

      var p = document.querySelector(dayOfWeek1).querySelector('p');
      p.innerText = Day;
    }
  } else if (firstDayOfWeek == 5) {
    for (var i = 1; i < 43; i++) {
      var dayOfWeek1 = 'div#dayNum' + i;

      var Year = carrentDate.getFullYear();
      var Month = carrentDate.getMonth();
      var Day = new Date(Year, Month, i - 5).getDate();

      var p = document.querySelector(dayOfWeek1).querySelector('p');
      p.innerText = Day;
    }
  } else if (firstDayOfWeek == 6) {
    for (var i = 1; i < 43; i++) {
      var dayOfWeek1 = 'div#dayNum' + i;

      var Year = carrentDate.getFullYear();
      var Month = carrentDate.getMonth();
      var Day = new Date(Year, Month, i - 6).getDate();

      var p = document.querySelector(dayOfWeek1).querySelector('p');
      p.innerText = Day;
    }
  }
}

function setNewDate() {
  var newYear = document.getElementById('year1').value;
  if (newYear == 0) newYear = carrentYear;

  var newMonth = document.getElementById('month1').value;
  var newMonth1 = carrentMonth;
  if (newMonth == 'Январь') newMonth1 = 0;
    else if(newMonth == 'Февраль') newMonth1 = 1;
    else if(newMonth == 'Март') newMonth1 = 2;
    else if(newMonth == 'Апрель') newMonth1 = 3;
    else if(newMonth == 'Май') newMonth1 = 4;
    else if(newMonth == 'Инюнь') newMonth1 = 5;
    else if(newMonth == 'Инюль') newMonth1 = 6;
    else if(newMonth == 'Август') newMonth1 = 7;
    else if(newMonth == 'Сентябрь') newMonth1 = 8;
    else if(newMonth == 'Октябрь') newMonth1 = 9;
    else if(newMonth == 'Ноябрь') newMonth1 = 10;
    else if(newMonth == 'Декабрь') newMonth1 = 11;
if (newMonth1 == 0) newMonth1 = carrentMonth;
//  var newDayNum = document.getElementById('dayNum1');

 carrentDate = new Date(newYear,newMonth1);
 var firstDay = new Date(newYear, newMonth1, 0);
 firstDayOfWeek = firstDay.getDay();

}

  function box(char, width, divId) {
    var mainWidth = document.getElementById(divId).offsetWidth;
    var blockWidth = width * mainWidth / 100;
    var height = blockWidth;
    var div1 = document.createElement('div');
    var att1 = document.createAttribute('id');
    att1.value = char;
    div1.setAttributeNode(att1);
    var style = document.createAttribute('style');
    style.value = 'width: ' + width + '%; min-height: ' + width + '%; display: flex; display: -webkit-flex; justify-content: center; -webkit-justify-content: center; align-items: center; -webkit-align-items: center; border: 1px solid #000000;';
    div1.setAttributeNode(style);
    document.querySelector('div#' + divId).appendChild(div1);
  }
  function column(char) {
    var div1 = document.createElement('div');
    var att1 = document.createAttribute('id');
    att1.value = char;
    div1.setAttributeNode(att1);
    var style = document.createAttribute('style');
    var columnHeight = squareHeight * 7.4;
    style.value = 'width: ' + squareWidth + 'px; height: ' + columnHeight + 'px; display: flex; display: -webkit-flex; flex-direction: column; justify-content: center; border: 1px solid #000000;';
    div1.setAttributeNode(style);
    document.querySelector('div#calendarMain').appendChild(div1);
  }


  function drawSquare(squareName, dayOfWeek, text) {
      var div = document.createElement('div');
      var att = document.createAttribute('id');
      att.value = squareName;
      div.setAttributeNode(att);

      var style = document.createAttribute('style');
      style.value = 'width: '+ squareWidth + 'px; height: '+ squareHeight + 'px; border: 1px solid black; display: flex; display: -webkit-flex; align-items: center; -webkit-align-items: center; justify-content: center; -webkit-justify-content: center;';
      div.setAttributeNode(style);

      var dayOfWeek1 = 'div#' + dayOfWeek;

      document.querySelector(dayOfWeek1).appendChild(div);

      var p = document.createElement('p');
      var style1 = document.createAttribute('style');
      style1.value = 'font-size: 100%; font-weight: bold; text-align: center; color: #8c5e07; padding: 0; margin: 0;';
      p.setAttributeNode(style1);
      var divSquareName = 'div#' + squareName;
      document.querySelector(divSquareName).appendChild(p);
      p.innerHTML = text;

    }



var sizeDay = 100 / 7;
box('calendarMainInput', 60, 'calendar')
box('calendarMain', 60, 'calendar');

inputYear();
inputMonth();

column('monday');
column('tuesday');
column('wednesday');
column('thursday');
column('friday');
column('saturday');
column('sunday');

drawSquare('dayName0', 'monday', 'Пн');
drawSquare('dayName1', 'tuesday', 'Вт');
drawSquare('dayName2', 'wednesday', 'Ср');
drawSquare('dayName3', 'thursday', 'Чт');
drawSquare('dayName4', 'friday', 'Пт');
drawSquare('dayName5', 'saturday', 'Сб');
drawSquare('dayName6', 'sunday', 'Вс');

for (var i = 1; i < 37; i = i + 7) {
var dayNum = 'dayNum' + i;
drawSquare(dayNum, 'monday', '');
}
for (var i = 2; i < 38; i = i + 7) {
var dayNum = 'dayNum' + i;
drawSquare(dayNum, 'tuesday', '');
}
for (var i = 3; i < 39; i = i + 7) {
var dayNum = 'dayNum' + i;
drawSquare(dayNum, 'wednesday', '');
}
for (var i = 4; i < 40; i = i + 7) {
var dayNum = 'dayNum' + i;
drawSquare(dayNum, 'thursday', '');
}
for (var i = 5; i < 41; i = i + 7) {
var dayNum = 'dayNum' + i;
drawSquare(dayNum, 'friday', '');
}
for (var i = 6; i < 42; i = i + 7) {
var dayNum = 'dayNum' + i;
drawSquare(dayNum, 'saturday', '');
}
for (var i = 7; i < 43; i = i + 7) {
var dayNum = 'dayNum' + i;
drawSquare(dayNum, 'sunday', '');
}

drawNumOfDay();
var inputYear1 = document.querySelector('input#year1');
inputYear1.oninput = function() {
  setNewDate();
  drawNumOfDay();
}
var inputMonth1 = document.querySelector('input#month1');
inputMonth1.oninput = function() {
  setNewDate();
  drawNumOfDay();
}

// document.querySelector('input#year1').addEventListener("submit", function (event) {
//     console.log(1);
// });

//}
