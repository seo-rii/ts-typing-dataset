//// [tests/cases/compiler/breakInIterationOrSwitchStatement2.ts] ////

//// [breakInIterationOrSwitchStatement2.ts]
do {
  break;
}
while (true);

//// [breakInIterationOrSwitchStatement2.js]
do {
    break;
} while (true);
