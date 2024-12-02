//// [tests/cases/conformance/parser/ecmascript5/MemberAccessorDeclarations/parserMemberAccessorDeclaration13.ts] ////

//// [parserMemberAccessorDeclaration13.ts]
class C {
   set Foo() { }
}

//// [parserMemberAccessorDeclaration13.js]
var C = /** @class */ (function () {
    function C() {
    }
    Object.defineProperty(C.prototype, "Foo", {
        set: function () { },
        enumerable: false,
        configurable: true
    });
    return C;
}());
