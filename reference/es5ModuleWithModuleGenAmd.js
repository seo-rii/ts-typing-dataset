//// [tests/cases/compiler/es5ModuleWithModuleGenAmd.ts] ////

//// [es5ModuleWithModuleGenAmd.ts]
export class A
{
    constructor ()
    {
    }

    public B()
    {
        return 42;
    }
}

//// [es5ModuleWithModuleGenAmd.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.A = void 0;
    var A = /** @class */ (function () {
        function A() {
        }
        A.prototype.B = function () {
            return 42;
        };
        return A;
    }());
    exports.A = A;
});
