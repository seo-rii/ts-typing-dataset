//// [tests/cases/conformance/parser/ecmascript5/ConstructorDeclarations/parserConstructorDeclaration10.ts] ////

//// [parserConstructorDeclaration10.ts]
class C {
  constructor(): number { }
}

//// [parserConstructorDeclaration10.js]
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
