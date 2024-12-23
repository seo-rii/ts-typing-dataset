//// [tests/cases/compiler/mergeWithImportedNamespace.ts] ////

//// [f1.ts]
export namespace N { export var x = 1; }

//// [f2.ts]
import {N} from "./f1";
export namespace N {
    export interface I {x: any}
}

//// [f1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.N = void 0;
var N;
(function (N) {
    N.x = 1;
})(N || (exports.N = N = {}));
//// [f2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
