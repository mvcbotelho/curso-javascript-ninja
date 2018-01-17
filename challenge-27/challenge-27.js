(function (win, doc) {
    'use strict';
    /*
    Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
    métodos semelhantes aos que existem no array, mas que sirvam para os
    elementos do DOM selecionados.
    Crie os seguintes métodos:
    - forEach, map, filter, reduce, reduceRight, every e some.
    Crie também métodos que verificam o tipo do objeto passado por parâmetro.
    Esses métodos não precisam depender de criar um novo elmento do DOM, podem
    ser métodos estáticos.
    Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
    no objeto, como nos exemplos abaixo:
    DOM.isArray([1, 2, 3]); // true
    DOM.isFunction(function() {}); // true
    DOM.isNumber('numero'); // false
    Crie os seguintes métodos para verificação de tipo:
    - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    O método isNull deve retornar `true` se o valor for null ou undefined.
    */

    function DOM(elements) {
        this.element = doc.querySelectorAll(elements);
    }

    DOM.prototype.on = function on(event, callback) {
        Array.prototype.forEach.call(this.element, function (element) {
            element.addEventListener(event, callback, false);
        });
    };
    DOM.prototype.off = function off(event, callback) {
        Array.prototype.forEach.call(this.element, function (element) {
            element.removeEventListener(event, callback, false);
        });
    };
    DOM.prototype.get = function get() {
        return this.element;
    };
    DOM.prototype.forEach = function forEach() {
        return Array.prototype.forEach.apply(this.element, arguments);
    };
    DOM.prototype.map = function map() {
        return Array.prototype.map.apply(this.element, arguments);
    };
    DOM.prototype.filter = function filter() {
        return Array.prototype.filter.apply(this.element, arguments);
    };
    DOM.prototype.reduce = function reduce() {
        return Array.prototype.reduce.apply(this.element, arguments);
    };
    DOM.prototype.reduceRight = function reduceRight() {
        return Array.prototype.reduceRight.apply(this.element, arguments);
    };
    DOM.prototype.every = function every() {
        return Array.prototype.every.apply(this.element, arguments);
    };
    DOM.prototype.some = function some() {
        return Array.prototype.some.apply(this.element, arguments);
    };
    DOM.prototype.isArray = function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };
    DOM.prototype.isObject = function isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    };
    DOM.prototype.isFunction = function isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
    };
    DOM.prototype.isNumber = function isNumber(obj) {
        return Object.prototype.toString.call(obj) === '[object Number]';
    };
    DOM.prototype.isString = function isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
    };
    DOM.prototype.isBoolean = function isBoolean(obj) {
        return Object.prototype.toString.call(obj) === '[object Boolean]';
    };
    DOM.prototype.isNull = function isNull(obj) {
        return Object.prototype.toString.call(obj) === '[object Null]'
        || Object.prototype.toString.call(obj) === '[object Undefined]';
    };

    var $a = new DOM('[data-js="link"]');
    $a.on('click', function(e) {
        e.preventDefault();
        console.log('clicou');
    });
    $a.forEach(function (item, index) {
        console.log(item.firstChild.nodeValue);
    });
    var dataJSmap = $a.map(function (value) {
        return value.getAttribute('data-js');
    });
    var dataJSreduce = $a.reduce(function (acc, item, index) {
        return acc + ' ' + item.getAttribute('data-js') + index;
    }, 0);
    var dataJSreduceRight = $a.reduceRight(function (acc, item, index) {
        return acc + ' ' + item.getAttribute('data-js') + index;
    }, 0);

    console.log(DOM.prototype.isArray([1, 2, 3]));
    console.log(DOM.prototype.isFunction(function () { }));
    console.log(DOM.prototype.isNumber('numero'));
    console.log('Elementos selecionados:', $a.get());
    console.log('$a é filho de body?', $a.get()[0].parentNode === doc.body);
    console.log(dataJSmap);
    console.log(dataJSreduce);
    console.log(dataJSreduceRight);

})(window, document);
