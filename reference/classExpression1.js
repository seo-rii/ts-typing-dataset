//// [tests/cases/conformance/classes/classExpressions/classExpression1.ts] ////

//// [classExpression1.ts]
var v = class C {};

//// [classExpression1.js]
var v = /** @class */ (function () {
    function C() {
    }
    return C;
}());
