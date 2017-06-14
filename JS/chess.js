
function chess() {
  function column(char) {
    var div1 = document.createElement('div');
    var att1 = document.createAttribute('id');
    att1.value = char;
    div1.setAttributeNode(att1);
    var style = document.createAttribute('style');
    style.value = 'width: 100px; height: 800px; display: flex; display: -webkit-flex; flex-direction: column; justify-content: center;';
    div1.setAttributeNode(style);
    document.querySelector('section.center2').appendChild(div1);
  }
  function row(char) {
    var div1 = document.createElement('div');
    var att1 = document.createAttribute('id');
    att1.value = char;
    div1.setAttributeNode(att1);
    var style = document.createAttribute('style');
    style.value = 'width: 100%; height: 102px; border: 1px solid blue; display: flex; display: -webkit-flex; flex-direction: row; justify-content: center;';
    div1.setAttributeNode(style);
    document.querySelector('section.center1').appendChild(div1);
  }
  row('A');
  row('B');
  row('C');
  row('D');
  row('E');
  row('F');
  row('G');
  row('H');
  for (var i = 1; i < 9; i++) {
    var div = document.createElement('div');
    var att = document.createAttribute('id');
    att.value = columnName + i;
    div.setAttributeNode(att);
    var style = document.createAttribute('style');
      if (i/2 - Math.round(i/2) != 0) {
        style.value = 'width: 100px; height: 100px; background-color: #8c5e07; border: 1px solid black; display: flex; display: -webkit-flex; justify-content: center; align-items: center;';
      } else {
        style.value = 'width: 100px; height: 100px; background-color: wite; border: 1px solid black; display: flex; display: -webkit-flex; justify-content: center; align-items: center;';
      }
    div.setAttributeNode(style);
    var divColumnName = 'div#' + columnName;
    document.querySelector('section.center2').querySelector(divColumnName).appendChild(div);

  }
}
function drawDiv2(columnName) {
  for (var i = 8; i > 0; i--) {
    var div = document.createElement('div');
    var att = document.createAttribute('id');
    att.value = columnName + i;
    div.setAttributeNode(att);
    var style = document.createAttribute('style');
      if (i/2 - Math.round(i/2) == 0) {
        style.value = 'width: 100px; height: 100px; background-color: #8c5e07; border: 1px solid black; display: flex; display: -webkit-flex; justify-content: center; align-items: center;';
      } else {
        style.value = 'width: 100px; height: 100px; background-color: wite; border: 1px solid black; display: flex; display: -webkit-flex; justify-content: center; align-items: center;';
      }
    div.setAttributeNode(style);
    var divColumnName = 'div#' + columnName;
    document.querySelector('section.center2').querySelector(divColumnName).appendChild(div);

  }
}
drawRawName('NumsLeft');
drawDiv1('A');
drawDiv2('B');
drawDiv1('C');
drawDiv2('D');
drawDiv1('E');
drawDiv2('F');
drawDiv1('G');
drawDiv2('H');

function setFigure(figureName, position) {
  var img = document.createElement('img');
  var src = document.createAttribute('src');
  src.value = figureName;
  img.setAttributeNode(src);
  var pos = 'div#' + position;
  document.querySelector(pos).appendChild(img);
  var style3 = document.createAttribute('style');
  style3.value = 'height: 90%;';
  img.setAttributeNode(style3);
}

function removeFigure(position) {
  var pos = 'div#' + position;
  var img = document.querySelector(pos).getElementsByTagName('img');
//  document.querySelector(pos).removeChild('img');
}


//white
setFigure('WPawn.png', 'A2');
setFigure('WPawn.png', 'B2');
setFigure('WPawn.png', 'C2');
setFigure('WPawn.png', 'D2');
setFigure('WPawn.png', 'E2');
setFigure('WPawn.png', 'F2');
setFigure('WPawn.png', 'G2');
setFigure('WPawn.png', 'H2');
setFigure('WRook.png', 'A1');
setFigure('WRook.png', 'H1');
setFigure('WHorse.png', 'B1');
setFigure('WHorse.png', 'G1');
setFigure('WElephant.png', 'C1');
setFigure('WElephant.png', 'F1');
setFigure('WQueen.png', 'D1');
setFigure('WKing.png', 'E1');

removeFigure('A2');
//black
setFigure('BPawn.png', 'A7');
setFigure('BPawn.png', 'B7');
setFigure('BPawn.png', 'C7');
setFigure('BPawn.png', 'D7');
setFigure('BPawn.png', 'E7');
setFigure('BPawn.png', 'F7');
setFigure('BPawn.png', 'G7');
setFigure('BPawn.png', 'H7');
setFigure('BRook.png', 'A8');
setFigure('BRook.png', 'H8');
setFigure('BHorse.png', 'B8');
setFigure('BHorse.png', 'G8');
setFigure('BElephant.png', 'C8');
setFigure('BElephant.png', 'F8');
setFigure('BQueen.png', 'D8');
setFigure('BKing.png', 'E8');
}
