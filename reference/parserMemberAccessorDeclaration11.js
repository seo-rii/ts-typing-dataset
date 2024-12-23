//// [tests/cases/conformance/parser/ecmascript5/MemberAccessorDeclarations/parserMemberAccessorDeclaration11.ts] ////

//// [parserMemberAccessorDeclaration11.ts]
class C {
    declare get Foo() { }
}

//// [parserMemberAccessorDeclaration11.js]
var C = /** @class */ (function () {
    function C() {
    }
    Object.defineProperty(C.prototype, "Foo", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    return C;
}());
