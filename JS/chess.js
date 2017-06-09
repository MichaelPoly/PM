
function chess() {
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
    att.value = 'A' + i;
    div.setAttributeNode(att);
    var style = document.createAttribute('style');
      if (i/2 - Math.round(i/2) != 0) {
        style.value = 'width: 100px; height: 100px; background-color: black; border: 1px solid blue;';
      } else {
        style.value = 'width: 100px; height: 100px; background-color: wite; border: 1px solid blue;';
      }
    div.setAttributeNode(style);
    document.querySelector('section.center1').querySelector('div').appendChild(div);

  }



}
