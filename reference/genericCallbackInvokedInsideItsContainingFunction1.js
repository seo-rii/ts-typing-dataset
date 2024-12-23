//// [tests/cases/compiler/genericCallbackInvokedInsideItsContainingFunction1.ts] ////

//// [genericCallbackInvokedInsideItsContainingFunction1.ts]
function foo<T, U>(x:T, y:U, f: (v: T) => U) {
    var r1 = f<number>(1);
    var r2 = f(1);
    var r3 = f<any>(null);
    var r4 = f(null);

    var r11 = f(x);
    var r21 = f<number>(x);
    var r31 = f<any>(null);
    var r41 = f(null);

    var r12 = f(y);
    var r22 = f<number>(y);
    var r32 = f<any>(null);
    var r42 = f(null);
}

//// [genericCallbackInvokedInsideItsContainingFunction1.js]
function foo(x, y, f) {
    var r1 = f(1);
    var r2 = f(1);
    var r3 = f(null);
    var r4 = f(null);
    var r11 = f(x);
    var r21 = f(x);
    var r31 = f(null);
    var r41 = f(null);
    var r12 = f(y);
    var r22 = f(y);
    var r32 = f(null);
    var r42 = f(null);
}
