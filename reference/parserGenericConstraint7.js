//// [tests/cases/conformance/parser/ecmascript5/Generics/parserGenericConstraint7.ts] ////

//// [parserGenericConstraint7.ts]
class C<T extends List<List<T>>> {
}

//// [parserGenericConstraint7.js]
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
