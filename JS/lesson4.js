function game1() {
  var num4 = [0, 0, 0, 0];
  while (num4[0]==num4[1] || num4[0]==num4[2] || num4[0]==num4[3] || num4[1]==num4[2] || num4[1]==num4[3]
   || num4[2]==num4[3]) {
     for (var i = 0; i < 4; i++) {
       num4[i] = Math.round(Math.random() * 9 );
     }
  }
function difficalty(diff) {
  switch (diff) {
    case 'Угадать за 10 попыток':
      var attempts = 10;
      break;
    case 'Угадать за 20 попыток':
      var attempts = 20;
      break;
    case 'Угадать за 30 попыток':
      var attempts = 30;
      break;
    case 'Угадать за 40 попыток':
      var attempts = 40;
      break;
  }
  return attempts;
}

  var diff1 = document.getElementById('action4').value;
  var attempts1 = difficalty(diff1);

  var k=0;
  while (k < +attempts1) {

    var guessNum = prompt('Введите 4-х значное число','');
    var guessNum1 = [];
    for (var i = 0; i < 3; i++) {
      guessNum1[i] = guessNum.slice(i, i+1);
    }
    guessNum1[3] = guessNum.slice(3);

    var bool = 0;
    var cow = 0;
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        if (guessNum1[i] == num4[j] && i == j) {
          bool++;
        }
        if (guessNum1[i] == num4[j] && i != j) {
          cow++;
        }
      }
    }
    k++;
  alert('Быков - ' + bool + ' Коров - ' + cow);

  if (bool == 4) {
    alert('Вы выиграли!!! Загаданное число - ' + num4[0] + num4[1] + num4[2] + num4[3] + '\n' +
    'Вы угадали число за ' + k + ' попыток.');
    break;
  }

  }
  if (bool != 4) {
    alert('Вы проиграли!!! Загаданное число - ' + num4[0] + num4[1] + num4[2] + num4[3] + '\n' +
    'Вы использовали все ' + k + ' попыток.');
  }

}

function sum() {
  var fNum2 = +document.getElementById('firstNum2').value;
  var sdNum2 = +document.getElementById('secondNum2').value;
  var contentp1 = document.getElementById('result7_1');
  var result7 = fNum2 + sdNum2;
  result7_1.innerHTML = 'Результат выражения ' + result7;
}
function sub() {
  var fNum2 = +document.getElementById('firstNum2').value;
  var sdNum2 = +document.getElementById('secondNum2').value;
  var contentp1 = document.getElementById('result7_1');
  var result7 = fNum2 - sdNum2;
  result7_1.innerHTML = 'Результат выражения ' + result7;
}
function mul() {
  var fNum2 = +document.getElementById('firstNum2').value;
  var sdNum2 = +document.getElementById('secondNum2').value;
  var contentp1 = document.getElementById('result7_1');
  var result7 = fNum2 * sdNum2;
  result7_1.innerHTML = 'Результат выражения ' + result7;
}
function divide() {
  var fNum2 = +document.getElementById('firstNum2').value;
  var sdNum2 = +document.getElementById('secondNum2').value;
  var contentp1 = document.getElementById('result7_1');
  var result7 = fNum2 / sdNum2;
  result7_1.innerHTML = 'Результат выражения ' + result7;
}

function chekN() {
  var numN = +document.getElementById('naturalNum').value;
  var numN1 = numN - Math.floor(numN);
  if (numN > 0 && numN1 == 0) {
    alert('Вы ввели натуральное число');
  } else {
    alert('Вы ввели не натуральное число');
  }
}

var str7 = '5 & 3; // результат 1';
var m = 5;
m = m.toString(2);
var m1 = 3;
m1 = m1.toString(2);
var m3 = 5 & 3;
m3 = m3.toString(2);

alert(str7 + '\n' + m + '\n' + m1 + '\n' +m3);
