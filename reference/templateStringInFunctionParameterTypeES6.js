//// [tests/cases/conformance/es6/templates/templateStringInFunctionParameterTypeES6.ts] ////

//// [templateStringInFunctionParameterTypeES6.ts]
function f(`hello`);
function f(x: string);
function f(x: string) {
    return x;
}

//// [templateStringInFunctionParameterTypeES6.js]
function f(x) {
    return x;
}
