
function task_3() {
  var fNum = +document.getElementById('firstNum').value;
  var sdNum = +document.getElementById('secondNum').value;
  if (fNum >= 0 && sdNum >= 0) alert(fNum-sdNum);
    else if (fNum < 0 && sdNum < 0) {
        alert(fNum*sdNum);
    }
    else {
      alert(fNum + sdNum);
    }
}

  //Пункт 4
function task_4() {
  var num1= +document.getElementById('num1_15').value;
  if (num1 < 0 || num1 >= 16)
  alert('Вы ввели не правильное число');

  else {
switch (num1) {
  case 15:
    alert(num1);
    break;
  case 14:
    alert(num1 + ' ' + ++num1);
    break;
  case 13:
    alert(num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case 12:
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case 11:
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case 10:
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1);
    break;
  case 9:
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case 8:
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case 7:
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case 6:
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1);
    break;
  case 5:
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1);
    break;
  case 4:
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case 3:
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case 2:
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case 1:
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
     + ' ' + ++num1);
    break;

  case 0:
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
     + ' ' + ++num1 + ' ' + ++num1);
    break;
  }
}
}
function sum(arg, arg1) {
  var sum = arg + arg1;
  return sum;
}
function sub(arg, arg1) {
  var sub = arg - arg1;
  return sub;
}
function mul(arg, arg1) {
  var mul = arg * arg1;
  return mul;
}
function divide(arg, arg1) {
  var divide = arg / arg1;
  return divide;
}
function oper(arg2,arg3,oper1) {
  switch (oper1) {
    case 'Сумма':
      var result6 = sum(arg2,arg3);
      break;
    case 'Разность':
      var result6 = sub(arg2,arg3);
      break;
    case 'Умножение':
      var result6 = mul(arg2,arg3);
      break;
    case 'Деление':
      var result6 = divide(arg2,arg3);
      break;
  }
  return result6;
}
function task_5() {
  var fNum1 = +document.getElementById('firstNum1').value;
  var sdNum1 = +document.getElementById('secondNum1').value;
  var contentp = document.getElementById('result5');
  var sub1 = sub(fNum1,sdNum1);
  var sum1 = sum(fNum1,sdNum1);
  var mul1 = mul(fNum1,sdNum1);
  var divide1 = divide(fNum1,sdNum1);
  result5.innerHTML = 'Сумма чисел равна ' + sum1 + '<br>' + 'Разность чисел равна ' + sub1
  + '<br>' + 'Произведение чисел равно' + mul1 + '<br>' + fNum1 + ' разделить на ' + sdNum1 + ' равно ' + divide1;
}
function task_6() {
  var fNum2 = +document.getElementById('firstNum2').value;
  var sdNum2 = +document.getElementById('secondNum2').value;
  var act = document.getElementById('action2').value;
  var contentp1 = document.getElementById('result6_2');
  var result6_1 = oper(fNum2,sdNum2,act);
  result6_2.innerHTML = 'Результат выражения ' + result6_1;
}

//Угадай число
function game() {
  var gameNum = Math.round(Math.random() * (9999 - 1000) + 1000);
  var n = 0;
    do {
      var guessNum = prompt('Для выхода из игры нажмите Esc. \nВведите четырехзначное число', '');
      if (guessNum == null) {
        alert('Вы вышли из игры');
        break;
      } else if (gameNum < guessNum) {
        alert('Ваше число больше загаданного');
        ++n;
      } else if (gameNum > guessNum) {
        alert('Ваше число меньше загаданного');
        ++n;
      } else if (gameNum == guessNum) {
        alert('Поздравлем Вас! Вы угадали число ' + guessNum, '\n Количество Ваших попыток ' + ++n);
      }
  } while (guessNum != gameNum);
}
