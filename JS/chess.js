
function chess() {
  function raw(char) {
    var div1 = document.createElement('div');
    var att1 = document.createAttribute('id');
    att1.value = char;
    div1.setAttributeNode(att1);
    var style = document.createAttribute('style');
    style.value = 'width: 100%; height: 102px; display: flex; display: -webkit-flex; flex-direction: row; justify-content: center; margin-left: 3%;';
    div1.setAttributeNode(style);
    document.querySelector('section.center1').appendChild(div1);
  }
  raw('A');
  raw('B');
  raw('C');
  raw('D');
  raw('E');
  raw('F');
  raw('G');
  raw('H');

function drawDiv1(rawName) {
  for (var i = 1; i < 9; i++) {
    var div = document.createElement('div');
    var att = document.createAttribute('id');
    att.value = rawName + i;
    div.setAttributeNode(att);
    var style = document.createAttribute('style');
      if (i/2 - Math.round(i/2) != 0) {
        style.value = 'width: 100px; height: 100px; background-color: #8c5e07; border: 1px solid black;';
      } else {
        style.value = 'width: 100px; height: 100px; background-color: wite; border: 1px solid black;';
      }
    div.setAttributeNode(style);
    var divRawName = 'div#' + rawName;
    document.querySelector('section.center1').querySelector(divRawName).appendChild(div);

  }
}
function drawDiv2(rawName) {
  for (var i = 1; i < 9; i++) {
    var div = document.createElement('div');
    var att = document.createAttribute('id');
    att.value = rawName + i;
    div.setAttributeNode(att);
    var style = document.createAttribute('style');
      if (i/2 - Math.round(i/2) == 0) {
        style.value = 'width: 100px; height: 100px; background-color: #8c5e07; border: 1px solid black;';
      } else {
        style.value = 'width: 100px; height: 100px; background-color: wite; border: 1px solid black;';
      }
    div.setAttributeNode(style);
    var divRawName = 'div#' + rawName;
    document.querySelector('section.center1').querySelector(divRawName).appendChild(div);

  }
}
drawDiv1('A');
drawDiv2('B');
drawDiv1('C');
drawDiv2('D');
drawDiv1('E');
drawDiv2('F');
drawDiv1('G');
drawDiv2('H');



}
