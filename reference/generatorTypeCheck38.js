//// [tests/cases/conformance/es6/yieldExpressions/generatorTypeCheck38.ts] ////

//// [generatorTypeCheck38.ts]
var yield;
function* g() {
    yield 0;
    var v: typeof yield;
}

//// [generatorTypeCheck38.js]
var yield;
function* g() {
    yield 0;
    var v;
}
