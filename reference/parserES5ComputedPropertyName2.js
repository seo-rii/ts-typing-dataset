//// [tests/cases/conformance/parser/ecmascript5/ComputedPropertyNames/parserES5ComputedPropertyName2.ts] ////

//// [parserES5ComputedPropertyName2.ts]
var v = { [e]: 1 };

//// [parserES5ComputedPropertyName2.js]
var _a;
var v = (_a = {}, _a[e] = 1, _a);
