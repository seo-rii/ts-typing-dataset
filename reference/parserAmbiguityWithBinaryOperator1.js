//// [tests/cases/conformance/parser/ecmascript5/Generics/parserAmbiguityWithBinaryOperator1.ts] ////

//// [parserAmbiguityWithBinaryOperator1.ts]
function f1() {
    var a, b, c;
    if (a < b || b > (c + 1)) { }
}

//// [parserAmbiguityWithBinaryOperator1.js]
function f1() {
    var a, b, c;
    if (a < b || b > (c + 1)) { }
}
