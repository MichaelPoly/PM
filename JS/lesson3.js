//Пункт1

var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 - уваеличение на единицу происходит до завершения операции
d = b++; alert(d); // 1 - увеличение на единицу происходит после завершения операции
c = (2+ ++a); alert(c); // 5 - а = 2 и увеличивается на единицу до завершения операции
d = (2+ b++); alert(d); // 4 - b = 2, но увеличивается на единицу только после завершения операции
alert(a); // 3 - было две операции увеличения на единицу
alert(b); // 3 - было две операции увеличения на единицу

//Пункт 2
var a = 2;
var x = 1 + (a *= 2);
// x=5
//Пункт 3

var a = prompt('Введите число a', '');
var b = prompt('Введите число b', '');
if (a >= 0 && b >= 0) alert(a-b);
  else if (a < 0 && b < 0) {
      alert(a*b);
  }
  else {
    alert(a + b);
  }
  //Пункт 4

  var num1=16;
while (num1 < 0 || num1 >= 16) {
  num1 = prompt('Введите число от 0 до 15', '');
}
switch (num1) {
  case '15':
    alert(num1);
    break;
  case '14':
    alert(num1 + ' ' + ++num1);
    break;
  case '13':
    alert(num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case '12':
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case '11':
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case '10':
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1);
    break;
  case '9':
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case '8':
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case '7':
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case '6':
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1);
    break;
  case '5':
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1);
    break;
  case '4':
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case '3':
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case '2':
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1);
    break;
  case '1':
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
     + ' ' + ++num1);
    break;
}
  case '0':
    alert(num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
    + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1 + ' ' + ++num1
     + ' ' + ++num1 + ' ' + ++num1);
    break;
}

//Пункт 5
