//// [tests/cases/compiler/typePredicatesInUnion_noMatch.ts] ////

//// [typePredicatesInUnion_noMatch.ts]
interface A {
    pred(x: {}, y: {}): x is boolean;
}
interface B {
    pred(x: {}, y: {}): y is string;
}

type Or = A | B;

function f(o: Or, x: {}, y: {}) {
    if (o.pred(x, y)) {
        x;
        y;
    }
}


//// [typePredicatesInUnion_noMatch.js]
function f(o, x, y) {
    if (o.pred(x, y)) {
        x;
        y;
    }
}
