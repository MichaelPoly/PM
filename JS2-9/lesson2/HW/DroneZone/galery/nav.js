function addElem(parentId, element, elementId, style) {

  var element1 = document.createElement(element);
  var atId = document.createAttribute('id');
  atId.value = elementId;
  element1.setAttributeNode(atId);
  var atStyle = document.createAttribute('style');
  atStyle.value = style;
  element1.setAttributeNode(atStyle);
  document.querySelector(parentId).appendChild(element1);
}


function showSubMenu(buttonId) {
  var element = document.querySelector('li#' + buttonId);
  var element1 = element.parentNode;
  var subMenu = element.children;
  if (element1.id[0] == 'b'){
    for (var i = 1; i < subMenu.length; i++) {
      var buttonStyle = 'width: 100%;' +
                        'height: 100%;' +
                        'background-color: lightgreen;' +
                        'display: -ms-flexbox;' +
                        'display: -webkit-flex;' +
                        'display: flex;' +
                        '-webkit-align-items: center;' +
                        '-ms-flex-align: center;' +
                        'align-items: center;' +
                        '-webkit-justify-content: center;' +
                        '-ms-flex-pack: center;' +
                        'justify-content: center;' +
                        'margin: 0;' +
                        'padding: 0;' +
                        'list-style: none;' +
                        'transform: translateY(20px);';
      subMenu[i].style = buttonStyle;
    }
  }
}
function hideSubMenu(buttonId) {
  var element = document.querySelector('li#' + buttonId);
  var element1 = element.parentNode;
  var subMenu = element.children;
  if (element1.id[0] == 'b'){
    for (var i = 1; i < subMenu.length; i++) {
      var buttonStyle = 'display: none;';
      subMenu[i].style = buttonStyle;
    }
  }
}

function mouse1(buttonId) {
  var element1 = document.querySelector('li#' + buttonId);
  var Style = 'width: 100%;' +
              'height: 100%;' +
              'background-color: blue;' +
              'display: -ms-flexbox;' +
              'display: -webkit-flex;' +
              'display: flex;' +
              '-webkit-align-items: center;' +
              '-ms-flex-align: center;' +
              'align-items: center;' +
              '-webkit-justify-content: center;' +
              '-ms-flex-pack: center;' +
              'justify-content: center;' +
              'margin: 0;' +
              'padding: 0;' +
              'list-style: none;' +
              'display:inline-block;';
    element1.style = Style;
    showSubMenu(buttonId);
}
function mouse2(buttonId) {
  var element1 = document.querySelector('li#' + buttonId);
  var Style = 'width: 100%;' +
              'height: 100%;' +
              'background-color: lightgreen;' +
              'display: -ms-flexbox;' +
              'display: -webkit-flex;' +
              'display: flex;' +
              '-webkit-align-items: center;' +
              '-ms-flex-align: center;' +
              'align-items: center;' +
              '-webkit-justify-content: center;' +
              '-ms-flex-pack: center;' +
              'justify-content: center;' +
              'margin: 0;' +
              'padding: 0;' +
              'list-style: none;' +
              'display:inline-block;';
    element1.style = Style;
    hideSubMenu(buttonId);
}


function addButton(parentId, buttonId, text) {
  var buttonStyle = 'width: 20%; ' +
                    'height: 100%;' +
                    'margin: 0;' +
                    'padding: 0;' +
                    'list-style: none;' +
                    'position: relative;';
  var pStyle = 'font-size: 100%;' +
               'text-align: center;' +
               'width: 100%;' +
               'height: 100%;' +
               'margin: 0;' +
               'padding: 0;' +
               'display: block;';
  addElem(parentId, 'ul', buttonId, buttonStyle);
  var pButtonId = 'p' + buttonId;
  var liButtonId = 'li' + buttonId;
  var liStyle = 'width: 100%;' +
                'height: 100%;' +
                'background-color: lightgreen;' +
                'display: -ms-flexbox;' +
                'display: -webkit-flex;' +
                'display: flex;' +
                '-webkit-align-items: center;' +
                '-ms-flex-align: center;' +
                'align-items: center;' +
                '-webkit-justify-content: center;' +
                '-ms-flex-pack: center;' +
                'justify-content: center;' +
                'margin: 0;' +
                'padding: 0;' +
                'list-style: none;' +
                'display:inline-block;';
  addElem('ul#' + buttonId, 'li', liButtonId, liStyle);
  addElem('li#' + liButtonId, 'p', pButtonId, pStyle);
  var p = document.querySelector('li#' + liButtonId).querySelector('p');
  p.innerText = text;
  var element1 = document.querySelector('li#' + liButtonId);
  var atMouseOver = document.createAttribute('onmouseover');
  var mouse = 'mouse1("' + liButtonId + '");';
  atMouseOver.value = mouse;
  element1.setAttributeNode(atMouseOver);
  var atMouseOut = document.createAttribute('onclick');
  var mouseOut = 'mouse2("' + liButtonId + '");';
  atMouseOut.value = mouseOut;
  element1.setAttributeNode(atMouseOut);

//  document.document.querySelector('li#' + liButtonId).addEventListener('click', 'tmp.html');
}

function addSubMenu(parentId, buttonId, text) {
  console.log('ParentId = ' + parentId);
  var buttonStyle = 'display:none;';
  var pStyle = 'font-size: 100%;' +
               'text-align: center;' +
               'width: 100%;' +
               'height: 100%;' +
               'margin: 0;' +
               'padding: 0;' +
               'display: block;';
  addElem(parentId, 'ul', buttonId, buttonStyle);
  var pButtonId = 'p' + buttonId;
  var liButtonId = 'li' + buttonId;
  var liStyle = 'width: 100%;' +
                'height: 100%;' +
                'background-color: lightgreen;' +
                'display: -ms-flexbox;' +
                'display: -webkit-flex;' +
                'display: flex;' +
                '-webkit-align-items: center;' +
                '-ms-flex-align: center;' +
                'align-items: center;' +
                '-webkit-justify-content: center;' +
                '-ms-flex-pack: center;' +
                'justify-content: center;' +
                'margin: 0;' +
                'padding: 0;' +
                'list-style: none;';
  addElem('ul#' + buttonId, 'li', liButtonId, liStyle);

  addElem('li#' + liButtonId, 'p', pButtonId, pStyle);

  var p = document.querySelector('li#' + liButtonId).querySelector('p');
  p.innerText = text;
  var element1 = document.querySelector('li#' + liButtonId);
  var atMouseOver = document.createAttribute('onmouseover');
  var mouse = 'mouse1("' + liButtonId + '");';
  atMouseOver.value = mouse;
  element1.setAttributeNode(atMouseOver);
  var atMouseOut = document.createAttribute('onmouseout');
  var mouseOut = 'mouse2("' + liButtonId + '");';
  atMouseOut.value = mouseOut;
  element1.setAttributeNode(atMouseOut);

  console.log(liButtonId);
}
var objData2 = [];
var xhr = new XMLHttpRequest();
xhr.open('GET', './menu.json', false);
xhr.send();

if(xhr.status != 200){
    console.log('Error', xhr.status, xhr.statusText);
} else {
    var response = xhr.responseText;
    var objData = JSON.parse(response);
}


for (var i = 0; i < objData.length; i++) {
  var itemTitle = objData[i].title;
  var buttonId = 'button' + i;
  addButton('nav#bar', buttonId, itemTitle);
//subMenu

var xhr2 = new XMLHttpRequest();
var folder = objData[i].folder;
xhr2.open('GET', './' + folder + 'submenu.json', false);
xhr2.send();

if(xhr2.status != 200){
    console.log('Error', xhr2.status, xhr2.statusText);
} else {
    var response1 = xhr2.responseText;
    var objData1 = JSON.parse(response1);
    objData2.push(objData1);
}

console.log(objData1);
console.log(i);
for (var j = 0; j < objData2[i].length; j++) {
  var itemTitle1 = objData2[i];
  var itemTitle2 = itemTitle1[j].title;
  var subbuttonId = 'sub'+ i + j;
  var subParent = 'li#libutton' + i;
  console.log(subParent, subbuttonId, itemTitle2);
  console.log('j=' + j);
  console.log('i=' + i);
  addSubMenu(subParent, subbuttonId, itemTitle2);

}


}

// addSubMenu('li#libutton0', 'sub1', 'Syma');
// addSubMenu('li#libutton0', 'sub2', 'Phantom');
