//// [tests/cases/conformance/expressions/binaryOperators/instanceofOperator/instanceofOperatorWithAny.ts] ////

//// [instanceofOperatorWithAny.ts]
var a: any;

var r: boolean = a instanceof a;

//// [instanceofOperatorWithAny.js]
var a;
var r = a instanceof a;
