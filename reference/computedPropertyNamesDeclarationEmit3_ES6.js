//// [tests/cases/conformance/es6/computedProperties/computedPropertyNamesDeclarationEmit3_ES6.ts] ////

//// [computedPropertyNamesDeclarationEmit3_ES6.ts]
interface I {
    ["" + ""](): void;
}

//// [computedPropertyNamesDeclarationEmit3_ES6.js]


//// [computedPropertyNamesDeclarationEmit3_ES6.d.ts]
interface I {
}
