//// [tests/cases/compiler/checkSuperCallBeforeThisAccessing7.ts] ////

//// [checkSuperCallBeforeThisAccessing7.ts]
class Base {
    constructor(func: ()=>Base) {
    }
}
class Super extends Base {
    constructor() {
        super((() => this)); // No error
    }
}

//// [checkSuperCallBeforeThisAccessing7.js]
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
    function Base(func) {
    }
    return Base;
}());
var Super = /** @class */ (function (_super) {
    __extends(Super, _super);
    function Super() {
        var _this = _super.call(this, (function () { return _this; })) || this; // No error
        return _this;
    }
    return Super;
}(Base));
