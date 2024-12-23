//// [tests/cases/conformance/parser/ecmascript5/MemberAccessorDeclarations/parserMemberAccessorDeclaration10.ts] ////

//// [parserMemberAccessorDeclaration10.ts]
class C {
    export get Foo() { }
}

//// [parserMemberAccessorDeclaration10.js]
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
