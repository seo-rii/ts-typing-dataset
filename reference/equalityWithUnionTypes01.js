//// [tests/cases/conformance/types/typeRelationships/comparable/equalityWithUnionTypes01.ts] ////

//// [equalityWithUnionTypes01.ts]
interface I1 {
    p1: number
}

interface I2 extends I1 {
    p2: number;
}

var x = { p1: 10, p2: 20 };
var y: number | I2 = x;
var z: I1 = x;

if (y === z || z === y) {
}
else if (y !== z || z !== y) {
}
else if (y == z || z == y) {
}
else if (y != z || z != y) {
}

//// [equalityWithUnionTypes01.js]
var x = { p1: 10, p2: 20 };
var y = x;
var z = x;
if (y === z || z === y) {
}
else if (y !== z || z !== y) {
}
else if (y == z || z == y) {
}
else if (y != z || z != y) {
}
