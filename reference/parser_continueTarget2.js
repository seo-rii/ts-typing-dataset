//// [tests/cases/conformance/parser/ecmascript5/Statements/ContinueStatements/parser_continueTarget2.ts] ////

//// [parser_continueTarget2.ts]
target:
while (true) {
  continue target;
}

//// [parser_continueTarget2.js]
target: while (true) {
    continue target;
}
