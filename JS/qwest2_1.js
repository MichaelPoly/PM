

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
  returnHotel: false,
  movement: 'Ходы'
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
    returnHotel: false,
  };
}
  var moveNumber = 0;
  function move3() {
    function checkResult() {
      var result = document.getElementById('move1').value;
      return result;
    }

    var move1 = checkResult();

    if (state.key == false &&
        state.door1 == false &&
        state.lift == false &&
        state.staircase == false &&
        state.parking == false &&
        state.car == false &&
        state.exit == false &&
        state.parkingExit == false &&
        state.firstFloor == false &&
        state.move100km == false &&
        state.home == false &&
        state.returnHotel == false) {
          goal.innerHTML = 'Вы находитесь в номере гостиницы';
          message.innerHTML = 'ПередВами на столе лежат ключи от машины';
          choice.innerHTML = '1. Взять ключи и выйти из номера   2. Выйти из номера';
          if (move1 == 1) {
            state.key = true;
            state.door1 = true;
            state.movement = 'Вы взяли ключи и вышли в коридор.';
            goal.innerHTML = 'Вы взяли ключи и вышли в коридор.';
            message.innerHTML = 'Справа от вас лифт, слева выход на лестницу';
            choice.innerHTML = '1. Зайти в лифт   2. Выйти на лестницу';
            move.push({movement: 'Вы взяли ключи и вышли в коридор.'});
            moveNumber++;
            } else {
              state.door1 = true;
              state.movement = 'Вы вышли в коридор.';
              goal.innerHTML = 'Вы вышли в коридор.';
              message.innerHTML = 'Справа от вас лифт, слева выход на лестницу';
              choice.innerHTML = '1. Зайти в лифт   2. Выйти на лестницу';
              move.push({movement: 'Вы вышли в коридор.'});
              moveNumber++;
          }
    } else if (state.key == true &&
            state.door1 == true &&
            state.lift == false &&
            state.staircase == false &&
            state.parking == false &&
            state.car == false &&
            state.exit == false &&
            state.parkingExit == false &&
            state.firstFloor == false &&
            state.move100km == false &&
            state.home == false &&
            state.returnHotel == false) {
              goal.innerHTML = 'Вы вышли в коридор.';
              message.innerHTML = 'Справа от вас лифт, слева выход на лестницу';
              choice.innerHTML = '1. Зайти в лифт   2. Выйти на лестницу';
              if (move1 == 1) {
                state.lift = true;
                state.movement = 'Вы зашли в лифт.';
                goal.innerHTML = 'Вы зашли в лифт.';
                message.innerHTML = 'Вам необходимо выбрать этаж';
                choice.innerHTML = '1. Первый этаж   2. Подземная парковка';
                move.push({movement: 'Вы зашли в лифт.'});
                moveNumber++;
                } else {
                  state.staircase = true;
                  state.firstFloor = true;
                  state.door1 = false;
                  state.movement = 'Вы вышли на лестницу и спустились на первый этаж.';
                  goal.innerHTML = 'Вы вышли на лестницу и спустились на первый этаж.';
                  message.innerHTML = 'Справа от вас лифт, слева выход на улицу';
                  choice.innerHTML = '1. Зайти в лифт   2. Выйти на улицу';
                  move.push({movement: 'Вы вышли на лестницу и спустились на первый этаж.'});
                  moveNumber++;
              }
    } else if (state.key == false &&
            state.door1 == true &&
            state.lift == false &&
            state.staircase == false &&
            state.parking == false &&
            state.car == false &&
            state.exit == false &&
            state.parkingExit == false &&
            state.firstFloor == false &&
            state.move100km == false &&
            state.home == false &&
            state.returnHotel == false) {
              goal.innerHTML = 'Вы вышли в коридор.';
              message.innerHTML = 'Справа от вас лифт, слева выход на лестницу';
              choice.innerHTML = '1. Зайти в лифт   2. Выйти на лестницу';
              if (move1 == 1) {
                state.lift = true;
                state.movement = 'Вы зашли в лифт.';
                goal.innerHTML = 'Вы зашли в лифт.';
                message.innerHTML = 'Вам необходимо выбрать этаж';
                choice.innerHTML = '1. Первый этаж   2. Подземная парковка';
                move.push({movement: 'Вы зашли в лифт.'});
                moveNumber++;
                } else {
                  state.staircase = true;
                  state.firstFloor = true;
                  state.door1 = false;
                  state.movement = 'Вы вышли на лестницу и спустились на первый этаж.';
                  goal.innerHTML = 'Вы вышли на лестницу и спустились на первый этаж.';
                  message.innerHTML = 'Справа от вас лифт, слева выход на улицу';
                  choice.innerHTML = '1. Зайти в лифт   2. Выйти на улицу';
                  move.push({movement: 'Вы вышли на лестницу и спустились на первый этаж.'});
                  moveNumber++;
              }
    } else if (state.key == true &&
          state.door1 == true &&
          state.lift == true &&
          state.staircase == false &&
          state.parking == false &&
          state.car == false &&
          state.exit == false &&
          state.parkingExit == false &&
          state.firstFloor == false &&
          state.move100km == false &&
          state.home == false &&
          state.returnHotel == false) {
            goal.innerHTML = 'Вы зашли в лифт.';
            message.innerHTML = 'Вам необходимо выбрать этаж';
            choice.innerHTML = '1. Первый этаж   2. Подземная парковка';
            if (move1 == 1) {
              state.lift = false;
              state.firstFloor = true;
              state.movement = 'Вы приехали на первый этаж и вышли из лифта.';
              goal.innerHTML = 'Вы приехали на первый этаж и вышли из лифта.';
              message.innerHTML = 'Вы можете выйти из гостинницы или вернуться в лифт';
              choice.innerHTML = '1. Выйти из гостинницы   2. Зайти обратно в лифт';
              move.push({movement: 'Вы приехали на первый этаж и вышли из лифта.'});
              moveNumber++;
              } else {
                state.lift = false;
                state.parking = true;
                state.door1 = false;
                state.movement = 'Вы приехали на подземную парковку и вышли из лифта.';
                goal.innerHTML = 'Вы приехали на подземную парковку и вышли из лифта.';
                message.innerHTML = 'На парковке вы видите свой автомобиль';
                choice.innerHTML = '1. Сесть в автомобиль   2. Зайти обратно в лифт';
                move.push({movement: 'Вы приехали на подземную парковку и вышли из лифта.'});
                moveNumber++;
            }

    } else if (state.key == false &&
          state.door1 == true &&
          state.lift == true &&
          state.staircase == false &&
          state.parking == false &&
          state.car == false &&
          state.exit == false &&
          state.parkingExit == false &&
          state.firstFloor == false &&
          state.move100km == false &&
          state.home == false &&
          state.returnHotel == false) {
            goal.innerHTML = 'Вы зашли в лифт.';
            message.innerHTML = 'Вам необходимо выбрать этаж';
            choice.innerHTML = '1. Первый этаж   2. Подземная парковка';
            if (move1 == 1) {
              state.lift = false;
              state.firstFloor = true;
              state.movement = 'Вы приехали на первый этаж и вышли из лифта.';
              goal.innerHTML = 'Вы приехали на первый этаж и вышли из лифта.';
              message.innerHTML = 'Вы можете выйти из гостинницы или вернуться в лифт';
              choice.innerHTML = '1. Выйти из гостинницы   2. Зайти обратно в лифт';
              move.push({movement: 'Вы приехали на первый этаж и вышли из лифта.'});
              moveNumber++;
              } else {
                    state.lift = false;
                    state.parking = true;
                    state.door1 = false;
                    state.movement = 'Вы приехали на подземную парковку и вышли из лифта.';
                    goal.innerHTML = 'Вы приехали на подземную парковку и вышли из лифта.';
                    message.innerHTML = 'На парковке вы видите свой автомобиль';
                    choice.innerHTML = '1. Сесть в автомобиль   2. Зайти обратно в лифт';
                    move.push({movement: 'Вы приехали на подземную парковку и вышли из лифта.'});
                    moveNumber++;
                }

    } else if (state.key == false &&
          state.door1 == false &&
          state.lift == false &&
          state.staircase == true &&
          state.parking == false &&
          state.car == false &&
          state.exit == false &&
          state.parkingExit == false &&
          state.firstFloor == true &&
          state.move100km == false &&
          state.home == false &&
          state.returnHotel == false) {
            goal.innerHTML = 'Вы вышли на лестницу и спустились на первый этаж.';
            message.innerHTML = 'Справа от вас лифт, слева выход на улицу';
            choice.innerHTML = '1. Зайти в лифт   2. Выйти на улицу';
            if (move1 == 1) {
              state.lift = true;
              state.firstFloor = true;
              state.staircase = false;
              state.movement = 'Вы зашли в лифт.';
              goal.innerHTML = 'Вы зашли в лифт.';
              message.innerHTML = 'Вы можете вернуться в номер или спуститься на подземную парковку';
              choice.innerHTML = '1. Вернуться в номер   2. Спуститься на подземную парковку';
              move.push({movement: 'Вы зашли в лифт.'});
              moveNumber++;
              } else {
                    state.lift = false;
                    state.parking = true;
                    state.door1 = false;
                    state.movement = 'Вы вышли на улицу.';
                    goal.innerHTML = 'Вы вышли на улицу.';
                    message.innerHTML = 'До дома Вам нужно преодолеть 100 километров';
                    choice.innerHTML = '1. Зайти обратно в гостинницу   2. Пойти домой пешком';
                    move.push({movement: 'Вы вышли на улицу.'});
                    moveNumber++;
                }

    } else if (state.key == true &&
          state.door1 == false &&
          state.lift == false &&
          state.staircase == true &&
          state.parking == false &&
          state.car == false &&
          state.exit == false &&
          state.parkingExit == false &&
          state.firstFloor == true &&
          state.move100km == false &&
          state.home == false &&
          state.returnHotel == false) {
            goal.innerHTML = 'Вы вышли на лестницу и спустились на первый этаж.';
            message.innerHTML = 'Справа от вас лифт, слева выход на улицу';
            choice.innerHTML = '1. Зайти в лифт   2. Выйти на улицу';
            if (move1 == 1) {
              state.lift = true;
              state.firstFloor = true;
              state.staircase = false;
              state.movement = 'Вы зашли в лифт.';
              goal.innerHTML = 'Вы зашли в лифт.';
              message.innerHTML = 'Вы можете вернуться в номер или спуститься на подземную парковку';
              choice.innerHTML = '1. Вернуться в номер   2. Спуститься на подземную парковку';
              move.push({movement: 'Вы зашли в лифт.'});
              moveNumber++;
              } else {
                    state.lift = false;
                    state.parking = true;
                    state.door1 = false;
                    state.movement = 'Вы вышли на улицу.';
                    goal.innerHTML = 'Вы вышли на улицу.';
                    message.innerHTML = 'До дома Вам нужно преодолеть 100 километров';
                    choice.innerHTML = '1. Зайти обратно в гостинницу   2. Пойти домой пешком';
                    move.push({movement: 'Вы вышли на улицу.'});
                    moveNumber++;
                }

    } else if (state.key == true &&
          state.door1 == false &&
          state.lift == true &&
          state.staircase == false &&
          state.parking == false &&
          state.car == false &&
          state.exit == false &&
          state.parkingExit == false &&
          state.firstFloor == true &&
          state.move100km == false &&
          state.home == false &&
          state.returnHotel == false) {
            goal.innerHTML = 'Вы зашли в лифт.';
            message.innerHTML = 'Вы можете вернуться в номер или спуститься на подземную парковку';
            choice.innerHTML = '1. Вернуться в номер   2. Спуститься на подземную парковку';
            if (move1 == 1) {
              state.lift = false;
              state.firstFloor = false;
              state.staircase = false;
              state.key = false;
              state.movement = 'Вы вернулись в номер';
              goal.innerHTML = 'Вы находитесь в номере гостиницы';
              message.innerHTML = 'Перед Вами на столе лежат ключи от машины';
              choice.innerHTML = '1. Взять ключи и выйти из номера   2. Выйти из номера';
              move.push({movement: 'Вы вернулись в номер'});
              moveNumber++;
              } else {
                    state.lift = false;
                    state.parking = true;
                    state.firstFloor = false;
                    state.movement = 'Вы приехали на подземную парковку и вышли из лифта.';
                    goal.innerHTML = 'Вы приехали на подземную парковку и вышли из лифта.';
                    message.innerHTML = 'На парковке вы видите свой автомобиль';
                    choice.innerHTML = '1. Сесть в автомобиль   2. Зайти обратно в лифт';
                    move.push({movement: 'Вы приехали на подземную парковку и вышли из лифта.'});
                    moveNumber++;
                }

    } else if (state.key == false &&
          state.door1 == false &&
          state.lift == true &&
          state.staircase == false &&
          state.parking == false &&
          state.car == false &&
          state.exit == false &&
          state.parkingExit == false &&
          state.firstFloor == true &&
          state.move100km == false &&
          state.home == false &&
          state.returnHotel == false) {
            goal.innerHTML = 'Вы зашли в лифт.';
            message.innerHTML = 'Вы можете вернуться в номер или спуститься на подземную парковку';
            choice.innerHTML = '1. Вернуться в номер   2. Спуститься на подземную парковку';
            if (move1 == 1) {
              state.lift = false;
              state.firstFloor = false;
              state.staircase = false;
              state.key = false;
              state.movement = 'Вы вернулись в номер';
              goal.innerHTML = 'Вы находитесь в номере гостиницы';
              message.innerHTML = 'Перед Вами на столе лежат ключи от машины';
              choice.innerHTML = '1. Взять ключи и выйти из номера   2. Выйти из номера';
              move.push({movement: 'Вы вернулись в номер'});
              moveNumber++;
              } else {
                    state.lift = false;
                    state.parking = true;
                    state.firstFloor = false;
                    state.movement = 'Вы приехали на подземную парковку и вышли из лифта.';
                    goal.innerHTML = 'Вы приехали на подземную парковку и вышли из лифта.';
                    message.innerHTML = 'На парковке вы видите свой автомобиль';
                    choice.innerHTML = '1. Сесть в автомобиль   2. Зайти обратно в лифт';
                    move.push({movement: 'Вы приехали на подземную парковку и вышли из лифта.'});
                    moveNumber++;
                }

    }

    for (var i = 0; i < move.length; i++) {
      var z = 'movement' + i;
      document.getElementById(z).innerHTML = move[i].movement;
    }
}
