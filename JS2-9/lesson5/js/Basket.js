function Basket() {
    Container.call(this, 'basket');

    this.countGoods = 0;
    this.amount = 0;

    this.basketItems = [];
}

Basket.prototype = Object.create(Container.prototype);
Basket.prototype.constructor = Basket;

//Восстановление товаров из cookies
Basket.prototype.restoreCookies = function () {
    if($.cookie('items').length > 0){
        this.basketItems = JSON.parse($.cookie('items'));
    }
    this.countGoods = parseInt($.cookie('count'));
    this.amount = parseInt($.cookie('amount'));
};
//Обновление товаров в Cookies
Basket.prototype.updateCookies = function () {
    $.removeCookie('items');
    $.removeCookie('count');
    $.removeCookie('amount');

    $.cookie('items', JSON.stringify(this.basketItems));
    $.cookie('count', this.countGoods);
    $.cookie('amount', this.amount);
};

//Отрисовка корзины
Basket.prototype.render = function (root) {
    var basketDiv = $('<div />',
        {
            id: this.id,
            text: 'Корзина'
        });

    var basketItemsDiv = $('<div />', {
        id: this.id + '_items'
    });

    basketItemsDiv.appendTo(basketDiv);
    basketDiv.appendTo(root);

    this.collectBasketItems();
};

//Загрузка уже существующих товаров
Basket.prototype.collectBasketItems = function () {


    if ($.cookie('items')) {
        this.restoreCookies();
        this.refresh();
        return;
    }


    //var self = this;
    $.get({
        url: './basket.json',
        success: function (data) {


            this.countGoods = data.basket.length;
            this.amount = data.amount;

            for (var index in data.basket) {
                this.basketItems.push(data.basket[index]);
            }
            this.refresh();
        },
        dataType: 'json',
        context: this
    });
};

//Добавление товара в корзину
Basket.prototype.add = function (idProduct, quantity, price) {
    //TODO: Передаем на сервер

    var basketItem = {
        "id_product": idProduct,
        "price": price
    };

    for (var i = 1; i <= quantity; i++) {
        this.countGoods++;
    }

    this.amount += parseInt(price) * parseInt(quantity);
    this.basketItems.push(basketItem);
    this.refresh();
};

//Перерисовка корзины
Basket.prototype.refresh = function () {
    if(!$('#basket_data').length) {
        var appendId = '#' + this.id + '_items';
        var basketData = $('<div />', {
            id: 'basket_data'
        });
        basketData.appendTo(appendId);

    }

    var basketDataDiv = $('#basket_data');
    basketDataDiv.empty();
    basketDataDiv.append('<p>Всего товаров: ' + this.countGoods + '</p>');
    basketDataDiv.append('<p>Сумма: ' + this.amount + '</p>');
    this.updateCookies();
};