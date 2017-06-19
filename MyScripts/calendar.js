//function calendar() {
var squareWidth = 50;
var squareHeight = 50;

var carrentDate = new Date();
var carrentYear = carrentDate.getFullYear();
var carrentMonth = carrentDate.getMonth();
var carrentDayNum = carrentDate.getDate();
var carrentDay = carrentDate.getDay();

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
  var action = document.createAttribute('oninput');
  action.value = 'setNewDate();';
  inputYear.setAttributeNode(action);
  document.querySelector('div#' + 'calendarMain').appendChild(inputYear);
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
  document.querySelector('div#' + 'calendarMain').appendChild(inputMonth);
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

function setNewDate() {
  var newYear = document.getElementById('year1').value;
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

//  var newDayNum = document.getElementById('dayNum1');
console.log(newYear);
console.log(newMonth1);
 carrentDate = new Date(newYear,newMonth1);

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
    style.value = 'width: ' + width + '%; min-height: ' + width + 'px; display: flex; display: -webkit-flex; justify-content: center; -webkit-justify-content: center; border: 1px solid #000000;';
    div1.setAttributeNode(style);
    document.querySelector('div#' + divId).appendChild(div1);
  }
  function column(char) {
    var div1 = document.createElement('div');
    var att1 = document.createAttribute('id');
    att1.value = char;
    div1.setAttributeNode(att1);
    var style = document.createAttribute('style');
    var columnHeight = squareHeight * 6;
    style.value = 'width: ' + squareWidth + 'px; height: ' + columnHeight + 'px; display: flex; display: -webkit-flex; flex-direction: column; justify-content: center; border: 1px solid #000000;';
    div1.setAttributeNode(style);
    document.querySelector('div#calendarMain').appendChild(div1);
  }
var sizeDay = 100 / 7;
box('calendarMain', 60, 'calendar');

inputYear();
inputMonth();

column('monday');

//}
