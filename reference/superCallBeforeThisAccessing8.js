//// [tests/cases/conformance/es6/classDeclaration/superCallBeforeThisAccessing8.ts] ////

//// [superCallBeforeThisAccessing8.ts]
class Base {
    constructor(c) { }
}
class D extends Base {
    private _t;
    constructor() {
        let x = {
            k: super(undefined), 
            j: this._t,  // no error
        }
    }
}


//// [superCallBeforeThisAccessing8.js]
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
var Base = /** @class */ (function () {
    function Base(c) {
    }
    return Base;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        var _this = this;
        var x = {
            k: _this = _super.call(this, undefined) || this,
            j: _this._t, // no error
        };
        return _this;
    }
    return D;
}(Base));
