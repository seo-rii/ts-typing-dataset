//// [tests/cases/conformance/es6/computedProperties/computedPropertyNamesContextualType8_ES6.ts] ////

//// [computedPropertyNamesContextualType8_ES6.ts]
interface I {
    [s: string]: boolean;
    [s: number]: boolean;
}

var o: I = {
    [""+"foo"]: "",
    [""+"bar"]: 0
}

//// [computedPropertyNamesContextualType8_ES6.js]
var o = {
    ["" + "foo"]: "",
    ["" + "bar"]: 0
};
