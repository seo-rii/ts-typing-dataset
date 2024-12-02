//// [tests/cases/compiler/exportedVariable1.ts] ////

//// [exportedVariable1.ts]
export var foo = {name: "Bill"};
var upper = foo.name.toUpperCase();


//// [exportedVariable1.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.foo = void 0;
    exports.foo = { name: "Bill" };
    var upper = exports.foo.name.toUpperCase();
});
