//// [tests/cases/conformance/parser/ecmascript5/Statements/ContinueStatements/parser_continueTarget3.ts] ////

//// [parser_continueTarget3.ts]
target1:
target2:
while (true) {
  continue target1;
}

//// [parser_continueTarget3.js]
target1: target2: while (true) {
    continue target1;
}
