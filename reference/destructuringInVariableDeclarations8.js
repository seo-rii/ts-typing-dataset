//// [tests/cases/compiler/destructuringInVariableDeclarations8.ts] ////

//// [destructuringInVariableDeclarations8.ts]
let { toString } = 1;
{
    let { toFixed } = 1;
}
export {};


//// [destructuringInVariableDeclarations8.js]
System.register([], function (exports_1, context_1) {
    "use strict";
    var toString;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            toString = 1..toString;
            {
                let { toFixed } = 1;
            }
        }
    };
});
