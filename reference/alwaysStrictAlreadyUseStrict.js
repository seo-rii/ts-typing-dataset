//// [tests/cases/compiler/alwaysStrictAlreadyUseStrict.ts] ////

//// [alwaysStrictAlreadyUseStrict.ts]
"use strict"
function f() {
    var a = [];
}

//// [alwaysStrictAlreadyUseStrict.js]
"use strict";
function f() {
    var a = [];
}
