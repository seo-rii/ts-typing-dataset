//// [tests/cases/compiler/parameterPropertyReferencingOtherParameter.ts] ////

//// [parameterPropertyReferencingOtherParameter.ts]
class Foo {
    constructor(public x: number, public y: number = x) { }
}


//// [parameterPropertyReferencingOtherParameter.js]
var Foo = /** @class */ (function () {
    function Foo(x, y) {
        if (y === void 0) { y = x; }
        this.x = x;
        this.y = y;
    }
    return Foo;
}());
