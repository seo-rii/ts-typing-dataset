//// [tests/cases/conformance/types/literal/numericLiteralTypes2.ts] ////

//// [numericLiteralTypes2.ts]
type A1 = 1;
type A2 = 1.0;
type A3 = 1e0;
type A4 = 10e-1;
type A5 = 1 | 1.0 | 1e0 | 10e-1;

function f1() {
    var a: A1 = 1;
    var a: A2 = 1;
    var a: A3 = 1;
    var a: A4 = 1;
    var a: A5 = 1;
}

type B1 = -1 | 0 | 1;
type B2 = 1 | 0 | -1;
type B3 = 0 | -1 | 1;

function f2() {
    var b: B1 = -1;
    var b: B2 = 0;
    var b: B3 = 1;
}

function f3(a: 1, b: 0 | 1 | 2) {
    var x = a + b;
    var x = a - b;
    var x = a * b;
    var x = a / b;
    var x = a % b;
    var x = a | b;
    var x = a & b;
    var x = a ^ b;
    var x = -b;
    var x = ~b;
    var y = a == b;
    var y = a != b;
    var y = a === b;
    var y = a !== b;
    var y = a > b;
    var y = a < b;
    var y = a >= b;
    var y = a <= b;
    var y = !b;
}

function f4(a: 1, b: 0 | 1 | 2) {
    a++;
    b++;
}

declare function g(x: 0): string;
declare function g(x: 1): boolean;
declare function g(x: number): number;

function f5(a: 1, b: 0 | 1 | 2) {
    var z1 = g(0);
    var z2 = g(1);
    var z3 = g(2);
    var z4 = g(a);
    var z5 = g(b);
}

function assertNever(x: never): never {
    throw new Error("Unexpected value");
}

type Tag = 0 | 1 | 2;

function f10(x: Tag) {
    switch (x) {
        case 0: return "a";
        case 1: return "b";
        case 2: return "c";
    }
}

function f11(x: Tag) {
    switch (x) {
        case 0: return "a";
        case 1: return "b";
        case 2: return "c";
    }
    return assertNever(x);
}

function f12(x: Tag) {
    if (x) {
        x;
    }
    else {
        x;
    }
}

function f13(x: Tag) {
    if (x === 0 || x === 2) {
        x;
    }
    else {
        x;
    }
}

function f14(x: 0 | 1 | 2, y: string) {
    var a = x && y;
    var b = x || y;
}

function f15(x: 0 | false, y: 1 | "one") {
    var a = x && y;
    var b = y && x;
    var c = x || y;
    var d = y || x;
    var e = !x;
    var f = !y;
}

type Item =
    { kind: 0, a: string } |
    { kind: 1, b: string } |
    { kind: 2, c: string };

function f20(x: Item) {
    switch (x.kind) {
        case 0: return x.a;
        case 1: return x.b;
        case 2: return x.c;
    }
}

function f21(x: Item) {
    switch (x.kind) {
        case 0: return x.a;
        case 1: return x.b;
        case 2: return x.c;
    }
    return assertNever(x);
}

//// [numericLiteralTypes2.js]
function f1() {
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
}
function f2() {
    var b = -1;
    var b = 0;
    var b = 1;
}
function f3(a, b) {
    var x = a + b;
    var x = a - b;
    var x = a * b;
    var x = a / b;
    var x = a % b;
    var x = a | b;
    var x = a & b;
    var x = a ^ b;
    var x = -b;
    var x = ~b;
    var y = a == b;
    var y = a != b;
    var y = a === b;
    var y = a !== b;
    var y = a > b;
    var y = a < b;
    var y = a >= b;
    var y = a <= b;
    var y = !b;
}
function f4(a, b) {
    a++;
    b++;
}
function f5(a, b) {
    var z1 = g(0);
    var z2 = g(1);
    var z3 = g(2);
    var z4 = g(a);
    var z5 = g(b);
}
function assertNever(x) {
    throw new Error("Unexpected value");
}
function f10(x) {
    switch (x) {
        case 0: return "a";
        case 1: return "b";
        case 2: return "c";
    }
}
function f11(x) {
    switch (x) {
        case 0: return "a";
        case 1: return "b";
        case 2: return "c";
    }
    return assertNever(x);
}
function f12(x) {
    if (x) {
        x;
    }
    else {
        x;
    }
}
function f13(x) {
    if (x === 0 || x === 2) {
        x;
    }
    else {
        x;
    }
}
function f14(x, y) {
    var a = x && y;
    var b = x || y;
}
function f15(x, y) {
    var a = x && y;
    var b = y && x;
    var c = x || y;
    var d = y || x;
    var e = !x;
    var f = !y;
}
function f20(x) {
    switch (x.kind) {
        case 0: return x.a;
        case 1: return x.b;
        case 2: return x.c;
    }
}
function f21(x) {
    switch (x.kind) {
        case 0: return x.a;
        case 1: return x.b;
        case 2: return x.c;
    }
    return assertNever(x);
}
