//// [tests/cases/conformance/es6/templates/taggedTemplateStringsPlainCharactersThatArePartsOfEscapes01_ES6.ts] ////

//// [taggedTemplateStringsPlainCharactersThatArePartsOfEscapes01_ES6.ts]
function f(...x: any[]) {

}

f `0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 2028 2029 0085 t v f b r n`

//// [taggedTemplateStringsPlainCharactersThatArePartsOfEscapes01_ES6.js]
function f(...x) {
}
f `0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 2028 2029 0085 t v f b r n`;
