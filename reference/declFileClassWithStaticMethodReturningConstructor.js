//// [tests/cases/compiler/declFileClassWithStaticMethodReturningConstructor.ts] ////

//// [declFileClassWithStaticMethodReturningConstructor.ts]
export class Enhancement {
    public static getType() {
        return this;
    }
}

//// [declFileClassWithStaticMethodReturningConstructor.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enhancement = void 0;
var Enhancement = /** @class */ (function () {
    function Enhancement() {
    }
    Enhancement.getType = function () {
        return this;
    };
    return Enhancement;
}());
exports.Enhancement = Enhancement;


//// [declFileClassWithStaticMethodReturningConstructor.d.ts]
export declare class Enhancement {
    static getType(): typeof Enhancement;
}
