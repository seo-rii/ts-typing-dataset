//// [tests/cases/compiler/amdDependencyCommentName3.ts] ////

//// [amdDependencyCommentName3.ts]
///<amd-dependency path='bar' name='b'/>
///<amd-dependency path='foo'/>
///<amd-dependency path='goo' name='c'/>

import m1 = require("m2")
m1.f();

//// [amdDependencyCommentName3.js]
///<amd-dependency path='bar' name='b'/>
///<amd-dependency path='foo'/>
///<amd-dependency path='goo' name='c'/>
define(["require", "exports", "bar", "goo", "m2", "foo"], function (require, exports, b, c, m1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    m1.f();
});
