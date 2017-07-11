$(document).ready(function() {
  var basket3 = new Basket2();
    $('#itemWindow').hide();
    $('#moderatorWindow').hide();
function basketRefresh() {
  var quantity = $('#quantity');
  quantity.empty();
  quantity.append('<p>' + basket3.amount + '</p>');
  var cost = $('#cost');
  cost.empty();
  cost.append('<p>' + basket3.cost + '</p>');
}

  var $basket1 = [];
  var $messages = [];
  $.ajax({
      type: 'GET', //GET или POST
      url: './message.json',
      //async: true,
      dataType: 'json',
      success: function (data) {
       $messages = data;

      }
  });
   $.ajax({
       type: 'GET', //GET или POST
       url: './items.json',
       //async: true,
       dataType: 'json',
       success: function (data) {
        $basket1 = data;
           for (var i = 0; i < data.length; i++) {
             var $item = data[i].itemCode;
             $item = 'Item' + $item;
             $('#centerBlock').append('<div id=' + $item + ' class="itemsBlocks"></div>');
             $oneItem = 'sub' + $item;
             $('#' + $item ).append('<div id=' + $oneItem + ' class="subItemsBlocks"></div>');
             var $name = data[i].name;
             $('#' + $oneItem).append('<p>' + $name + '</p>');
             var $image = data[i].imgHref;
             $('#' + $oneItem).append('<img src="' + $image + '">');
             var $price = data[i].price;
             $('#' + $oneItem).append('<p id="price' + $item +'">Цена: ' + $price + '</p>');
             $('#' + $item).append('<button type="button" id="btn' + $item + '" class="itemBtn">Купить</button>');
           }
           $('.itemBtn').on('click', function() {
             var $btnId = this.id;
             ++basket3.amount;
             var $priceId = $btnId.slice(7);
             var $price1 = $basket1[parseInt($priceId)-1].price;
             basket3.cost = parseInt(basket3.cost) + parseInt($price1);
             console.log(basket3.amount);
             console.log(basket3.cost);
             basketRefresh();
           });
           $('.subItemsBlocks').on('click', function() {
             $('#itemWindow').show();
             var $subItemId = this.id;
             var $subBlockId = 'subItem' + $itemNum;
             var $itemNum = parseInt($subItemId.slice(7)) - 1;
             var $imgH = $basket1[$itemNum].imgHref;
             var $itemName = $basket1[$itemNum].name;
             var $itemDesc = $basket1[$itemNum].describtion;
             var $itemPrice = $basket1[$itemNum].price;

             $('#itemWindow').append('<div id=' + $subBlockId + ' class="subItem"></div>');
             $('#' + $subBlockId).append('<h3>' + $itemName + '</h3>');
             $('#' + $subBlockId).append('<div id="infoBlock"></div>');
             $('#infoBlock').append('<img src="' + $imgH + '">');
             $('#infoBlock').append('<p>Краткое описание:</p>');
             $('#infoBlock').append('<p id="describtion">' + $itemDesc + '</p>');
             $('#infoBlock').append('<p>Цена: ' + $itemPrice + '</p>');
             $('#' + $subBlockId).append('<div id="btnBlock"></div>');
             $('#btnBlock').append('<button type="button" id="butn' + $subItemId + '" class="itemBtn1">Добавить в корзину</button>');
             $('#btnBlock').append('<button type="button" id="butnClose">Вернуться к покупкам</button>');
             $('#butnClose').on('click', function() {
               $('#itemWindow').fadeOut();
               $('.subItem').remove();
             });
             $('.itemBtn1').on('click', function() {
               var $btnId1 = this.id;
               ++basket3.amount;
               var $priceId1 = $btnId1.slice(11);
               var $price2 = $basket1[parseInt($priceId1)-1].price;
               basket3.cost = parseInt(basket3.cost) + parseInt($price2);
               basketRefresh();
             });
             $('#' + $subBlockId).append('<div id="messageBlock"></div>');
             $('#messageBlock').append('<div id="messageForm"></div>');
             $('#messageForm').append('<input type="text" id="UserName" placeholder="Введите Ваше имя"></input>');
             $('#messageForm').append('<textarea rows="5" cols="45" id="userMessage"></textarea>');
             $('#messageForm').append('<button type="button" id="butnSubmitt">Отправить отзыв</button>');
             $('#butnSubmitt').on('click', function() {
               var $itemNum2 = $subItemId.slice(7);
               var userName1 = document.querySelector('#UserName').value;
               var userMessage1 = document.querySelector('#userMessage').value;
               var sendMessage = {itemCode: $itemNum2, userName: userName1, moderate: "false", message: userMessage1};
               $messages.push(sendMessage);
               $('#itemWindow').fadeOut();
               $('.subItem').remove();
             });
             for (var i = 0; i < $messages.length; i++) {
               var $itemNum1 = $subItemId.slice(7);
               if ($messages[i].itemCode == $itemNum1 && $messages[i].moderate == "true") {
                 $('#messageBlock').append('<p>' + $messages[i].userName + ':   ' + $messages[i].message + '</p>');
               }

             }

           });
       }
  });
  $('#moderator').on('click', function() {
    $('#moderatorWindow').show();
    $('#moderatorWindow').append('<div id="messageContent"></div>');
    $('#messageContent').append('<button type="button" id="endModeration">Сохранить и выйти из окна модерации</button>');
    for (var i = 0; i < $messages.length; i++) {
      $('#messageContent').append('<div id="messageRaw' + i + '" class="messageRaw"></div>');
      var $messageRawId = '#messageRaw' + i;
      $($messageRawId).append('<p>Код товара:' + $messages[i].itemCode + ' Автор: ' + $messages[i].userName + ' Отзыв: ' + $messages[i].message + '</p>');
        if ($messages[i].moderate == "true") {
          $($messageRawId).append('<input type="checkbox" checked id="mess' + i + '">');
        } else {
          $($messageRawId).append('<input type="checkbox" id="mess' + i + '">');
        }
    }
    $('#messageContent').append('<div id="messageRawName" class="messageRaw"></div>');
    $('#messageRawName').append('<p>Список отзывов</p>');
    $('#messageRawName').append('<p>Одобрено модератором</p>');

    $('#endModeration').on('click', function() {
      var $num = [];
      for (var i = 0; i < $messages.length; i++) {
        var check1 = String(document.querySelector('#mess' + i).checked);
        if (check1 != $messages[i].moderate) {
          $num.push(i);
          $messages[i].moderate = check1;
        }
      }
      for (var i = 0; i < $num.length; i++) {
        if ($messages[$num[i]].moderate == 'false') {
          $messages[$num[i]].remove();
        }
      }
      $('#moderatorWindow').hide();
      $('#messageContent').remove();
    });
  });

});
