//// [tests/cases/conformance/classes/classDeclarations/classAbstractKeyword/classAbstractConstructor.ts] ////

//// [classAbstractConstructor.ts]
abstract class A {
    abstract constructor() {}
}

//// [classAbstractConstructor.js]
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
