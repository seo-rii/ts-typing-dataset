//// [tests/cases/conformance/es6/arrowFunction/emitArrowFunctionAsIsES6.ts] ////

//// [emitArrowFunctionAsIsES6.ts]
var arrow1 =  a => { };
var arrow2 = (a) => { };

var arrow3 = (a, b) => { };

//// [emitArrowFunctionAsIsES6.js]
var arrow1 = a => { };
var arrow2 = (a) => { };
var arrow3 = (a, b) => { };
