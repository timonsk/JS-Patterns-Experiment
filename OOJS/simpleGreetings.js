
'use strict';

var method = SimpleGreetings.prototype;

function SimpleGreetings() {
}

method.constructor = function (data) {
    this._val = data;
};

method.getGreetings = function () {
    return this._val;
};

module.exports = SimpleGreetings;