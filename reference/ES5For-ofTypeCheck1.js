//// [tests/cases/conformance/statements/for-ofStatements/ES5For-ofTypeCheck1.ts] ////

//// [ES5For-ofTypeCheck1.ts]
for (var v of "") { }

//// [ES5For-ofTypeCheck1.js]
for (var _i = 0, _a = ""; _i < _a.length; _i++) {
    var v = _a[_i];
}
