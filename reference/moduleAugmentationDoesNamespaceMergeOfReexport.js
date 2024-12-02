//// [tests/cases/compiler/moduleAugmentationDoesNamespaceMergeOfReexport.ts] ////

//// [file.ts]
export namespace Root {
    export interface Foo {
        x: number;
    }
}
//// [reexport.ts]
export * from "./file";
//// [augment.ts]
import * as ns from "./reexport";

declare module "./reexport" {
    export namespace Root {
        export interface Foo {
            self: Foo;
        }
    }
}

declare const f: ns.Root.Foo;

f.x;
f.self;
f.self.x;
f.self.self;

//// [file.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//// [reexport.js]
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./file"), exports);
//// [augment.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
f.x;
f.self;
f.self.x;
f.self.self;
