//// [tests/cases/compiler/sideEffectImports1.ts] ////

//// [sideEffectImports1.ts]
import "does-not-exist";
import "./does-not-exist-either";
import "./does-not-exist-either.js";


//// [sideEffectImports1.js]
import "does-not-exist";
import "./does-not-exist-either";
import "./does-not-exist-either.js";
