//// [tests/cases/conformance/types/literal/booleanLiteralTypes2.ts] ////

//// [booleanLiteralTypes2.ts]
type A1 = true | false;
type A2 = false | true;

function f1() {
    var a: A1;
    var a: A2;
    var a: true | false;
    var a: false | true;
}

function f2(a: true | false, b: boolean) {
    a = b;
    b = a;
}

function f3(a: true | false, b: true | false) {
    var x = a || b;
    var x = a && b;
    var x = !a;
}

function f4(t: true, f: false) {
    var x1 = t && f;
    var x2 = f && t;
    var x3 = t || f;
    var x4 = f || t;
    var x5 = !t;
    var x6 = !f;
}

declare function g(x: true): string;
declare function g(x: false): boolean;
declare function g(x: boolean): number;

function f5(b: boolean) {
    var z1 = g(true);
    var z2 = g(false);
    var z3 = g(b);
}

function assertNever(x: never): never {
    throw new Error("Unexpected value");
}

function f10(x: true | false) {
    switch (x) {
        case true: return "true";
        case false: return "false";
    }
}

function f11(x: true | false) {
    switch (x) {
        case true: return "true";
        case false: return "false";
    }
    return assertNever(x);
}

function f12(x: true | false) {
    if (x) {
        x;
    }
    else {
        x;
    }
}

function f13(x: true | false) {
    if (x === true) {
        x;
    }
    else {
        x;
    }
}

type Item =
    { kind: true, a: string } |
    { kind: false, b: string };

function f20(x: Item) {
    switch (x.kind) {
        case true: return x.a;
        case false: return x.b;
    }
}

function f21(x: Item) {
    switch (x.kind) {
        case true: return x.a;
        case false: return x.b;
    }
    return assertNever(x);
}

//// [booleanLiteralTypes2.js]
function f1() {
    var a;
    var a;
    var a;
    var a;
}
function f2(a, b) {
    a = b;
    b = a;
}
function f3(a, b) {
    var x = a || b;
    var x = a && b;
    var x = !a;
}
function f4(t, f) {
    var x1 = t && f;
    var x2 = f && t;
    var x3 = t || f;
    var x4 = f || t;
    var x5 = !t;
    var x6 = !f;
}
function f5(b) {
    var z1 = g(true);
    var z2 = g(false);
    var z3 = g(b);
}
function assertNever(x) {
    throw new Error("Unexpected value");
}
function f10(x) {
    switch (x) {
        case true: return "true";
        case false: return "false";
    }
}
function f11(x) {
    switch (x) {
        case true: return "true";
        case false: return "false";
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
    if (x === true) {
        x;
    }
    else {
        x;
    }
}
function f20(x) {
    switch (x.kind) {
        case true: return x.a;
        case false: return x.b;
    }
}
function f21(x) {
    switch (x.kind) {
        case true: return x.a;
        case false: return x.b;
    }
    return assertNever(x);
}
