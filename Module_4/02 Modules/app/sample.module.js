"use strict";
var NumberGetter = (function () {
    function NumberGetter() {
    }
    NumberGetter.prototype.GetNumber = function () {
        return 123;
    };
    return NumberGetter;
}());
exports.NumberGetter = NumberGetter;
var StringGetter = (function () {
    function StringGetter() {
    }
    StringGetter.prototype.GetString = function () {
        return "ABC";
    };
    return StringGetter;
}());
exports.StringGetter = StringGetter;
//# sourceMappingURL=sample.module.js.map