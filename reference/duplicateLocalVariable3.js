//// [tests/cases/compiler/duplicateLocalVariable3.ts] ////

//// [duplicateLocalVariable3.ts]
var x = 1;
var x = 2; 

function f() {
    var y = 1;
    var y = 2;
}

function f2() {
    var z = 3;
    var z = "";
}

//// [duplicateLocalVariable3.js]
var x = 1;
var x = 2;
function f() {
    var y = 1;
    var y = 2;
}
function f2() {
    var z = 3;
    var z = "";
}
