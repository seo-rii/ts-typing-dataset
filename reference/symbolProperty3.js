//// [tests/cases/conformance/es6/Symbols/symbolProperty3.ts] ////

//// [symbolProperty3.ts]
var s = Symbol;
var x = {
    [s]: 0,
    [s]() { },
    get [s]() {
        return 0;
    }
}

//// [symbolProperty3.js]
var s = Symbol;
var x = {
    [s]: 0,
    [s]() { },
    get [s]() {
        return 0;
    }
};
