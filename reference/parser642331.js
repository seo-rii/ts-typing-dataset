//// [tests/cases/conformance/parser/ecmascript5/RegressionTests/parser642331.ts] ////

//// [parser642331.ts]
class test {
    constructor (static) { }
}


//// [parser642331.js]
var test = /** @class */ (function () {
    function test(static) {
    }
    return test;
}());
