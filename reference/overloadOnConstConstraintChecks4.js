//// [tests/cases/compiler/overloadOnConstConstraintChecks4.ts] ////

//// [overloadOnConstConstraintChecks4.ts]
class Z { }
class A extends Z { private x = 1 }
class B extends A {}
class C extends A {
    public foo() { }
}
function foo(name: 'hi'): B;
function foo(name: 'bye'): C;
function foo(name: string): A;
function foo(name: any): Z {
    return null;
}


//// [overloadOnConstConstraintChecks4.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Z = /** @class */ (function () {
    function Z() {
    }
    return Z;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 1;
        return _this;
    }
    return A;
}(Z));
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B;
}(A));
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    C.prototype.foo = function () { };
    return C;
}(A));
function foo(name) {
    return null;
}
