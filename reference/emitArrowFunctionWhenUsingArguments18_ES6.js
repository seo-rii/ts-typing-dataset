//// [tests/cases/conformance/es6/arrowFunction/emitArrowFunctionWhenUsingArguments18_ES6.ts] ////

//// [emitArrowFunctionWhenUsingArguments18_ES6.ts]
function f() {
    var { arguments: args } = { arguments };
    if (Math.random()) {
        return () => arguments;
    }
}

//// [emitArrowFunctionWhenUsingArguments18_ES6.js]
function f() {
    var { arguments: args } = { arguments };
    if (Math.random()) {
        return () => arguments;
    }
}
