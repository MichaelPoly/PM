describe('Возведение в степень', function () {
    it('Проверка 2^3 == 8', function () {
        assert.equal(pow(2, 3), 8);
    });

    it('Проверка 3^3 == 27', function () {
        assert.equal(pow(3, 3), 27);
    });

    it('Проверка 2^5 == 32', function () {
        assert.equal(pow(2, 5), 32);
    });
});

describe('Проверка на нестандартные ситуации', function () {
    it('Проверка на отрицательные значения', function () {

        assert.equal(pow(-2, 7), null);
        assert.equal(pow(-2, -7), null);
        assert.equal(pow(2, -7), null);
    });

    it('Проверка на дробные значения', function () {
        assert(pow(2, 7.4) === null);
        assert(pow(2.2, 7) === null);
        assert(pow(2.1, 7.9) === null);
    });
});