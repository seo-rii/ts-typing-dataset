//// [tests/cases/conformance/parser/ecmascript5/Protected/Protected3.ts] ////

//// [Protected3.ts]
class C {
  protected constructor() { }
}

//// [Protected3.js]
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
