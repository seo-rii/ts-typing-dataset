//// [tests/cases/conformance/expressions/typeGuards/typeGuardRedundancy.ts] ////

//// [typeGuardRedundancy.ts]
var x: string|number;

var r1 = typeof x === "string" && typeof x === "string" ? x.substr : x.toFixed;

var r2 = !(typeof x === "string" && typeof x === "string") ? x.toFixed : x.substr;

var r3 = typeof x === "string" || typeof x === "string" ? x.substr : x.toFixed;

var r4 = !(typeof x === "string" || typeof x === "string") ? x.toFixed : x.substr;

//// [typeGuardRedundancy.js]
var x;
var r1 = typeof x === "string" && typeof x === "string" ? x.substr : x.toFixed;
var r2 = !(typeof x === "string" && typeof x === "string") ? x.toFixed : x.substr;
var r3 = typeof x === "string" || typeof x === "string" ? x.substr : x.toFixed;
var r4 = !(typeof x === "string" || typeof x === "string") ? x.toFixed : x.substr;
