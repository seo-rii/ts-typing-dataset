//// [tests/cases/conformance/parser/ecmascript5/Statements/BreakStatements/parser_breakInIterationOrSwitchStatement2.ts] ////

//// [parser_breakInIterationOrSwitchStatement2.ts]
do {
  break;
}
while (true);

//// [parser_breakInIterationOrSwitchStatement2.js]
do {
    break;
} while (true);
