//// [tests/cases/compiler/classMemberWithMissingIdentifier.ts] ////

//// [classMemberWithMissingIdentifier.ts]
class C { 
    public {};
}

//// [classMemberWithMissingIdentifier.js]
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
{ }
;
