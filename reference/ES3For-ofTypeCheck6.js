//// [tests/cases/conformance/statements/for-ofStatements/ES3For-ofTypeCheck6.ts] ////

//// [ES3For-ofTypeCheck6.ts]
var union: string[] | number[];
for (var v of union) { }

//// [ES3For-ofTypeCheck6.js]
var union;
for (var _i = 0, union_1 = union; _i < union_1.length; _i++) {
    var v = union_1[_i];
}
