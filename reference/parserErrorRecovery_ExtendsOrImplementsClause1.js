//// [tests/cases/conformance/parser/ecmascript5/ErrorRecovery/ExtendsOrImplementsClauses/parserErrorRecovery_ExtendsOrImplementsClause1.ts] ////

//// [parserErrorRecovery_ExtendsOrImplementsClause1.ts]
class C extends {
}

//// [parserErrorRecovery_ExtendsOrImplementsClause1.js]
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
