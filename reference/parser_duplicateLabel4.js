//// [tests/cases/conformance/parser/ecmascript5/Statements/LabeledStatements/parser_duplicateLabel4.ts] ////

//// [parser_duplicateLabel4.ts]
target:
while (true) {
}

target: 
while (true) {
}

//// [parser_duplicateLabel4.js]
target: while (true) {
}
target: while (true) {
}
