//// [tests/cases/compiler/parse1.ts] ////

//// [parse1.ts]
var bar = 42;
function foo() {
 bar.
}


//// [parse1.js]
var bar = 42;
function foo() {
    bar.
    ;
}
