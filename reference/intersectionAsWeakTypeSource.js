//// [tests/cases/conformance/types/intersection/intersectionAsWeakTypeSource.ts] ////

//// [intersectionAsWeakTypeSource.ts]
interface X { x: string }
interface Y { y: number }
interface Z { z?: boolean }

type XY = X & Y;
const xy: XY = {x: 'x', y: 10};

const z1: Z = xy; // error, {xy} doesn't overlap with {z}


interface ViewStyle {
    view: number
    styleMedia: string
}
type Brand<T> = number & { __brand: T }
declare function create<T extends { [s: string]: ViewStyle }>(styles: T): { [P in keyof T]: Brand<T[P]> };
const wrapped = create({ first: { view: 0, styleMedia: "???" } });
const vs: ViewStyle = wrapped.first // error, first is a branded number


//// [intersectionAsWeakTypeSource.js]
var xy = { x: 'x', y: 10 };
var z1 = xy; // error, {xy} doesn't overlap with {z}
var wrapped = create({ first: { view: 0, styleMedia: "???" } });
var vs = wrapped.first; // error, first is a branded number
