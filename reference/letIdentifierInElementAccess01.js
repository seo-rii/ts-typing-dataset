//// [tests/cases/conformance/expressions/elementAccess/letIdentifierInElementAccess01.ts] ////

//// [letIdentifierInElementAccess01.ts]
var let: any = {};
(let[0] = 100);

//// [letIdentifierInElementAccess01.js]
var let = {};
(let[0] = 100);
