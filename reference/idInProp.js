//// [tests/cases/compiler/idInProp.ts] ////

//// [idInProp.ts]
function f() {

var t: { (f: any) : any; };

}


//// [idInProp.js]
function f() {
    var t;
}
