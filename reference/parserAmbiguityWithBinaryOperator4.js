//// [tests/cases/conformance/parser/ecmascript5/Generics/parserAmbiguityWithBinaryOperator4.ts] ////

//// [parserAmbiguityWithBinaryOperator4.ts]
function g() {
    var a, b, c;
    if (a<b, b>(c + 1)) { }
}

//// [parserAmbiguityWithBinaryOperator4.js]
function g() {
    var a, b, c;
    if (a(c + 1)) { }
}
