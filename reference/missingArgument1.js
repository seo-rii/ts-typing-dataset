//// [tests/cases/compiler/missingArgument1.ts] ////

//// [missingArgument1.ts]
foo(a,,b);

//// [missingArgument1.js]
foo(a, b);
