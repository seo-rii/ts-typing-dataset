//// [tests/cases/compiler/continueNotInIterationStatement3.ts] ////

//// [continueNotInIterationStatement3.ts]
switch (0) {
  default:
    continue;
}

//// [continueNotInIterationStatement3.js]
switch (0) {
    default:
        continue;
}
