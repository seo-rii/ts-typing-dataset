//// [tests/cases/conformance/types/typeRelationships/subtypesAndSuperTypes/subtypesOfUnion.ts] ////

//// [subtypesOfUnion.ts]
enum E { e1, e2 }
interface I8 { [x: string]: number[]; }
class A { foo: number; }
class A2<T> { foo: T; }
function f() { }
module f { export var bar = 1; }
class c { baz: string }
module c { export var bar = 1; }

// A type T is a subtype of a union type U if T is a subtype of any type in U.
interface I1<T> {
    [x: string]: string | number;
    foo: any; // ok
    foo2: string; // ok
    foo3: number; // ok
    foo4: boolean; // error 
    foo5: E; // ok - subtype of number 
    foo6: Date; // error
    foo7: RegExp; // error
    foo8: { bar: number }; // error
    foo9: I8; // error
    foo10: A; // error
    foo11: A2<number>; // error
    foo12: (x) => number; //error
    foo13: <T>(x: T) => T; // error
    foo14: typeof f; // error
    foo15: typeof c; // error
    foo16: T; // error
    foo17: Object; // error
    foo18: {}; // error
}
interface I2<T> {
    [x: string]: E | number;
    foo: any; // ok
    foo2: string; // error
    foo3: number; // ok
    foo4: boolean; // error 
    foo5: E; // ok
    foo6: Date; // error
    foo7: RegExp; // error
    foo8: { bar: number }; // error
    foo9: I8; // error
    foo10: A; // error
    foo11: A2<number>; // error
    foo12: (x) => number; //error
    foo13: <T>(x: T) => T; // error
    foo14: typeof f; // error
    foo15: typeof c; // error
    foo16: T; // error
    foo17: Object; // error
    foo18: {}; // error
}

//// [subtypesOfUnion.js]
var E;
(function (E) {
    E[E["e1"] = 0] = "e1";
    E[E["e2"] = 1] = "e2";
})(E || (E = {}));
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
var A2 = /** @class */ (function () {
    function A2() {
    }
    return A2;
}());
function f() { }
(function (f) {
    f.bar = 1;
})(f || (f = {}));
var c = /** @class */ (function () {
    function c() {
    }
    return c;
}());
(function (c) {
    c.bar = 1;
})(c || (c = {}));
