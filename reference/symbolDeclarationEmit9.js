//// [tests/cases/conformance/es6/Symbols/symbolDeclarationEmit9.ts] ////

//// [symbolDeclarationEmit9.ts]
var obj = {
    [Symbol.isConcatSpreadable]() { }
}

//// [symbolDeclarationEmit9.js]
var obj = {
    [Symbol.isConcatSpreadable]() { }
};


//// [symbolDeclarationEmit9.d.ts]
declare var obj: {
    [Symbol.isConcatSpreadable](): void;
};
