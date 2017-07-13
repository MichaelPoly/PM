$(document).ready(function() {
  $('#feedbacktWindow').hide();
  $('#feedback').on('click', function() {
    $('#feedbacktWindow').show();
  });


  $("#firstName").tooltip({items: 'input[placeholder]', content: "Имя должно содержать только буквы"});
  $("#LastName").tooltip({items: 'input[placeholder]', content: "Фамилия может содержать только буквы и -"});
  $("#PhoneNumber").tooltip({items: 'input[placeholder]', content: "Введите телефон в формате +7 000-000-00-00"});
  $("#Email").tooltip({items: 'input[placeholder]', content: "Email должен содержать @"});


  $('#submitt').on('click', function() {
    var regExp = /[a-zA-Zа-яёА-ЯЁ]/i;
    var firstName = document.querySelector('#firstName');
    var $firstName = regExp.test(firstName.value);
    var regExp1 = /[a-zA-Zа-яёА-ЯЁ-]/i;
    var lastName = document.querySelector('#LastName');
    var $lastName = regExp1.test(lastName.value);
    var regExp2 = /\+[7]\s[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}/i;
    var phone = document.querySelector('#PhoneNumber');
    var $phoneNum = regExp2.test(phone.value);
    var regExp3 = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
    var mail = document.querySelector('#Email');
    var $eMail = regExp3.test(mail.value);
    var textBox = document.querySelector('#textBox');

    if ($firstName == false) {
      firstName.style = 'border-color: red;';
      firstName.placeholder = 'Имя должно содержать только буквы';
      $('#firstName').effect('bounce', {}, 1000);
      }
    if ($lastName == false) {
      lastName.style = 'border-color: red;';
      lastName.placeholder = 'Фамилия может содержать только буквы и -';
      $('#LastName').effect('bounce', {}, 1000);
      }
    if ($phoneNum == false) {
      phone.style = 'border-color: red;';
      phone.placeholder = '+7 000-000-00-00';
      $('#PhoneNumber').effect('bounce', {}, 1000);
      }
    if ($eMail == false) {
      mail.style = 'border-color: red;';
      mail.placeholder = 'Некорректный Email';
      $('#Email').effect('bounce', {}, 1000);
      }
    if (textBox.value == '') {
      textBox.style = 'border-color: red;';
      textBox.placeholder = 'Введите текст сообщения';
      $('#textBox').effect('bounce', {}, 1000);
      var $textBox1 = false;
      }

      if ($firstName == true && $lastName == true && $phoneNum == true && $eMail == true && $textBox1 != false) {
        $('#feedbacktWindow').fadeOut();
        $('.dialog').dialog();
      }

  });

  $(window).on('mousemove', function () {
    $('#banner1').effect('bounce', {}, 1000);
    $('#banner1').effect('shake', {}, 1000);
  });
  $('#banner').on('mouseover', function () {
    $('#banner').effect('pulsate', {}, 1000);
  });
});
