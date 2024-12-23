//// [tests/cases/compiler/constructorOverloads1.ts] ////

//// [constructorOverloads1.ts]
class Foo {
    constructor(s: string);
    constructor(n: number);
    constructor(x: any) {

    }
    constructor(x: any) {

    }
    bar1() {  /*WScript.Echo("bar1");*/ }
    bar2() {  /*WScript.Echo("bar1");*/ }
}

var f1 = new Foo("hey");
var f2 = new Foo(0);
var f3 = new Foo(f1);
var f4 = new Foo([f1,f2,f3]);

f1.bar1();
f1.bar2();


//// [constructorOverloads1.js]
var Foo = /** @class */ (function () {
    function Foo(x) {
    }
    Foo.prototype.bar1 = function () { };
    Foo.prototype.bar2 = function () { };
    return Foo;
}());
var f1 = new Foo("hey");
var f2 = new Foo(0);
var f3 = new Foo(f1);
var f4 = new Foo([f1, f2, f3]);
f1.bar1();
f1.bar2();
