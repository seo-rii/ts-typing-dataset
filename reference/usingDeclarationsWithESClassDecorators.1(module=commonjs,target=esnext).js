//// [tests/cases/conformance/statements/VariableStatements/usingDeclarations/usingDeclarationsWithESClassDecorators.1.ts] ////

//// [usingDeclarationsWithESClassDecorators.1.ts]
export {};

declare var dec: any;

using before = null;

@dec
class C {
}


//// [usingDeclarationsWithESClassDecorators.1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
using before = null;
@dec
class C {
}
