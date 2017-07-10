$(document).ready(function() {
  var basket3 = new Basket2();
  console.log(basket3.basketItems);
    $('#itemWindow').hide();
function basketRefresh() {
  var quantity = $('#quantity');
  quantity.empty();
  quantity.append('<p>' + basket3.amount + '</p>');
  var cost = $('#cost');
  cost.empty();
  cost.append('<p>' + basket3.cost + '</p>');
}

  var $basket1 = [];
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
             var $name = data[i].name;
             $('#' + $item).append('<p>' + $name + '</p>');
             var $image = data[i].imgHref;
             $('#' + $item).append('<img src="' + $image + '">');
             var $price = data[i].price;
             $('#' + $item).append('<p id="price' + $item +'">Цена: ' + $price + '</p>');
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
           $('.itemsBlocks').on('click', function() {
             $('#itemWindow').show();
             console.log(this.id);
           });
       }
  });


});
