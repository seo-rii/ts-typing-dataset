//// [tests/cases/compiler/interfaceDeclaration5.ts] ////

//// [interfaceDeclaration5.ts]
export interface I1 { item:string; }
export class C1 { }


//// [interfaceDeclaration5.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.C1 = void 0;
    var C1 = /** @class */ (function () {
        function C1() {
        }
        return C1;
    }());
    exports.C1 = C1;
});
