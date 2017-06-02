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
  document.write(attempts1);
}
