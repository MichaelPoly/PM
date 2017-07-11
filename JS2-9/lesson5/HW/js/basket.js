
      function Container(id) {
          this.id = id;
          this.className = '';
          this.htmlCode = '';
      }

      Container.prototype.render = function () {
          return this.htmlCode;
      };

      function Basket2() {
          Container.call(this, 'basket2');

          this.cost = 0;
          this.amount = 0;

          this.basketItems = [];
      }
      Basket2.prototype = Object.create(Container.prototype);
      Basket2.prototype.constructor = Basket2;


$(document).ready(function() {


});
