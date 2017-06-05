
var numNum = {
  hundreds: 0,
  decade: 0,
  one: 0
};

function writeObject() {
  var numNum1 = document.getElementById('num5').value;
  if (+numNum1 > 999 || +numNum1 < 0) {
    hundreds.innerHTML = 'Вы ввели число не от 0 до 999';
    decade.innerHTML = ' ';
    one.innerHTML = ' ';
  } else {
    numNum.hundreds = numNum1[numNum1.length-3];
    numNum.decade = numNum1[numNum1.length - 2];
    numNum.one = numNum1[numNum1.length - 1];
    hundreds.innerHTML = 'Сотни ' + numNum.hundreds;
    decade.innerHTML = 'Десятки ' + numNum.decade;
    one.innerHTML = 'Единицы ' + numNum.one;
  }
}

var state = {
  key: false,
  door1: false,
  lift: false,
  staircase: false,
  parking: false,
  car: false,
  exit: false,
  parkingExit: false,
  firstFloor: false,
  move100km: false,
  home: false,
  returnHotel: false
};
var move = [];
function qwest() {
    state = {
    key: false,
    door1: false,
    lift: false,
    staircase: false,
    parking: false,
    car: false,
    exit: false,
    parkingExit: false,
    firstFloor: false,
    move100km: false,
    home: false,
    returnHotel: false
  };
}
  var moveNumber = 0;
  function move3() {
    function checkResult() {
      var result = document.getElementById('move1').value;
      return result;
    }

    var move1 = checkResult();
      if (state.key == false && state.door1 == false) {
        if (move1 == 1) {
          state.key = true;
          state.door1 = true;
          move[moveNumber] = state;
          goal.innerHTML = 'Вы взяли ключи и вышли в коредор.';
          message.innerHTML = 'Справа от вас лифт, слева выход на лестницу';
          choice.innerHTML = '1. Зайти в лифт   2. Выйти на лестницу';
          moveNumber++;
          } else {
            state.door1 = true;
            goal.innerHTML = 'Вы вышли в коредор.';
            message.innerHTML = 'Справа от вас лифт, слева выход на лестницу';
            choice.innerHTML = '1. Зайти в лифт   2. Выйти на лестницу';
            move[moveNumber] = state;
            moveNumber++;
        }
    } else if (state.door1 == true && state.lift == false && state.staircase == false) {
      if (move1 == 1) {
        state.lift = true;
        move[moveNumber] = state;
        goal.innerHTML = 'Вы зашли в лифт.';
        message.innerHTML = 'Вам необходимо выбрать этаж';
        choice.innerHTML = '1. Первый этаж   2. Подземная парковка';
        moveNumber++;
        } else {
          state.staircase = true;
          state.firstFloor = true;
          goal.innerHTML = 'Вы вышли на лестницу и спустились на первый этаж.';
          message.innerHTML = 'Справа от вас лифт, слева выход на улицу';
          choice.innerHTML = '1. Зайти в лифт   2. Выйти на улицу';
          move[moveNumber] = state;
          moveNumber++;
      }
    } else if (state.lift == true && state.firstFloor == false && state.parking == false) {
      if (move1 == 1) {
        state.firstFloor = true;
        move[moveNumber] = state;
        goal.innerHTML = 'Вы приехали на первый этаж и вышли из лифта.';
        message.innerHTML = 'Вы можете выйти из гостинницы или вернуться в лифт';
        choice.innerHTML = '1. Выйти из гостинницы   2. Зайти обратно в лифт';
        moveNumber++;
        } else {
          state.parking = true;

          goal.innerHTML = 'Вы приехали на подземную парковку и вышли из лифта.';
          message.innerHTML = 'На парковке вы видите свой автомобиль';
          choice.innerHTML = '1. Сесть в автомобиль   2. Зайти обратно в лифт';
          move[moveNumber] = state;
          moveNumber++;
      }
    } else if (state.parking == true && state.key == true && state.lift == true && state.parkingExit == false) {
        if (move1 == 1) {
          state.car = true;
          state.parkingExit = true;
          move[moveNumber] = state;
          goal.innerHTML = 'Вы Сели в свой автомобиль и выехали на улицу.';
          message.innerHTML = 'Вы можете спокойно отправиться домой. Ваш дом находится в 100 километрах';
          choice.innerHTML = '1. Отправиться домой   2. Вы не хотите домой';
          moveNumber++;
        } else {
            state.lift = true;
            goal.innerHTML = 'Вы зашли обратно в лифт.';
            message.innerHTML = 'Вы можете подняться на первый этаж или отправиться обратно в номер';
            choice.innerHTML = '1. Подняться на первый этаж   2. Отправиться обратно в номер';
            move[moveNumber] = state;
            moveNumber++;
        }
    } else if (state.parking == true && state.key == false) {
        state.door1 = false;
        state.lift = false;
        state.staircase = false;
        state.parking = false;
        state.firstFloor = false;
        goal.innerHTML = 'К сожалению у Вас нет ключей от машины и Вам пришлось вернуться в номер.';
        message.innerHTML = 'Перед Вами лежат ключи от машины.';
        choice.innerHTML = '1. Взять ключи и выйти из номера   2. Выйти из номера';
        move[moveNumber] = state;
        moveNumber++;
      } else if (state.firstFloor == true && state.staircase == true && state.lift == false && state.exit == false) {
          if (move1 == 1) {
          state.lift = true;
          move[moveNumber] = state;
          goal.innerHTML = 'Вы зашли в лифт.';
          message.innerHTML = 'Вам необходимо выбрать этаж';
          choice.innerHTML = '1. Вернуться в номер   2. Подземная парковка';
          moveNumber++;
        } else {
          state.exit = true;
          goal.innerHTML = 'Вы вышли на улицу.';
          message.innerHTML = 'До дома Вам нужно преодолеть 100 километров';
          choice.innerHTML = '1. Зайти обратно в гостинницу   2. Пойти домой пешком';
          move[moveNumber] = state;
          moveNumber++;
        }
    } else if (state.firstFloor == true && state.lift == true && state.staircase == true) {
        if (move1 == 1) {
          state.door1 = false;
          state.lift = false;
          state.staircase = false;
          state.parking = false;
          state.firstFloor = false;
          goal.innerHTML = 'Вы вернулись в номер.';
          message.innerHTML = 'Перед Вами лежат ключи от машины.';
          choice.innerHTML = '1. Взять ключи и выйти из номера   2. Выйти из номера';
          move[moveNumber] = state;
          moveNumber++;
      } else {
          state.parking = true;
          goal.innerHTML = 'Вы приехали на подземную парковку и вышли из лифта.';
          message.innerHTML = 'На парковке вы видите свой автомобиль';
          choice.innerHTML = '1. Сесть в автомобиль   2. Зайти обратно в лифт';
          move[moveNumber] = state;
          moveNumber++;
        }
    } else if (state.exit == true && state.car == false) {
        if (move1 == 1) {
          state.exit = false;
          state.returnHotel = true;
          goal.innerHTML = 'Вы зашли обратно в гостинницу.';
          message.innerHTML = 'Вы можете вернуться обратнов номер или зайти в лифт.';
          choice.innerHTML = '1. Вернуться в номер   2. Зайти в лифт';
          move[moveNumber] = state;
          moveNumber++;
      } else {
          state.home = true;
          goal.innerHTML = 'Вы прошли 100 километров пешком за 30 часов и пришли домой.';
          message.innerHTML = 'Вы очень устали и проголодались.';
          choice.innerHTML = 'И тут до Вас дошло, что Вы забыли машину в гостиннице. Игра закончена.';
          move[moveNumber] = state;
          moveNumber++;
        }
    } else if (state.parkingExit == true && state.car == true) {
        if (move1 == 1) {
          state.home = true;
          goal.innerHTML = 'Вы проехали 100 километров на машине и благополучно вернулись домой.';
          message.innerHTML = 'Поздравляем Вас!!!';
          choice.innerHTML = 'Вы успешно прошли квест!';
          move[moveNumber] = state;
          moveNumber++;
      } else {
          state = {
          key: false,
          door1: false,
          lift: false,
          staircase: false,
          parking: false,
          car: false,
          exit: false,
          parkingExit: false,
          firstFloor: false,
          move100km: false,
          home: false,
          returnHotel: false
        };
        goal.innerHTML = 'Вы вернулись в номер.';
        message.innerHTML = 'Перед Вами лежат ключи от машины.';
        choice.innerHTML = '1. Взять ключи и выйти из номера   2. Выйти из номера';
        move[moveNumber] = state;
        moveNumber++;
        }
    }
}

function sumNatural() {
  var numNat = document.getElementById('num6').value;
  numNat = parseInt(numNat);
  function numNat1(y) {
    if ((y / 10 | 0) != 0) return y % 10 + numNat1((y /10 |0));
    else return y %10;
  }
  var num8 = numNat1(numNat);

res1.innerHTML = num8;
}
