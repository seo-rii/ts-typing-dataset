//// [tests/cases/compiler/doubleUnderStringLiteralAssignability.ts] ////

//// [doubleUnderStringLiteralAssignability.ts]
var shouldBeOk: '__dunder' = '__dunder';
var bad: '__dunder' = 'no_dunder';
var okok: '___thunder' = '___thunder';
var alsoOk: '_sunder' = '_sunder';


//// [doubleUnderStringLiteralAssignability.js]
var shouldBeOk = '__dunder';
var bad = 'no_dunder';
var okok = '___thunder';
var alsoOk = '_sunder';
