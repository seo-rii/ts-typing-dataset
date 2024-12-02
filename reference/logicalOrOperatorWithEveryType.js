//// [tests/cases/conformance/expressions/binaryOperators/logicalOrOperator/logicalOrOperatorWithEveryType.ts] ////

//// [logicalOrOperatorWithEveryType.ts]
// The || operator permits the operands to be of any type.
// If the || expression is not contextually typed, the right operand is contextually typed
// by the type of the left operand and the result is of the best common type of the two
// operand types.

enum E { a, b, c }

var a1: any;
var a2: boolean;
var a3: number
var a4: string;
var a5: void;
var a6: E;
var a7: {a: string};
var a8: string[];

var ra1 = a1 || a1;         // any       || any is any
var ra2 = a2 || a1;         // boolean   || any is any
var ra3 = a3 || a1;         // number    || any is any
var ra4 = a4 || a1;         // string    || any is any
var ra5 = a5 || a1;         // void      || any is any
var ra6 = a6 || a1;         // enum      || any is any
var ra7 = a7 || a1;         // object    || any is any
var ra8 = a8 || a1;         // array     || any is any
var ra9 = null || a1;       // null      || any is any
var ra10 = undefined || a1; // undefined || any is any

var rb1 = a1 || a2;         // any       || boolean is any
var rb2 = a2 || a2;         // boolean   || boolean is boolean
var rb3 = a3 || a2;         // number    || boolean is number | boolean
var rb4 = a4 || a2;         // string    || boolean is string | boolean
var rb5 = a5 || a2;         // void      || boolean is void | boolean
var rb6 = a6 || a2;         // enum      || boolean is E | boolean
var rb7 = a7 || a2;         // object    || boolean is object | boolean
var rb8 = a8 || a2;         // array     || boolean is array | boolean
var rb9 = null || a2;       // null      || boolean is boolean
var rb10= undefined || a2;  // undefined || boolean is boolean

var rc1 = a1 || a3;         // any       || number is any
var rc2 = a2 || a3;         // boolean   || number is boolean | number
var rc3 = a3 || a3;         // number    || number is number
var rc4 = a4 || a3;         // string    || number is string | number
var rc5 = a5 || a3;         // void      || number is void | number
var rc6 = a6 || a3;         // enum      || number is number
var rc7 = a7 || a3;         // object    || number is object | number
var rc8 = a8 || a3;         // array     || number is array | number
var rc9 = null || a3;       // null      || number is number
var rc10 = undefined || a3; // undefined || number is number

var rd1 = a1 || a4;         // any       || string is any
var rd2 = a2 || a4;         // boolean   || string is boolean | string
var rd3 = a3 || a4;         // number    || string is number | string
var rd4 = a4 || a4;         // string    || string is string
var rd5 = a5 || a4;         // void      || string is void | string
var rd6 = a6 || a4;         // enum      || string is enum | string
var rd7 = a7 || a4;         // object    || string is object | string
var rd8 = a8 || a4;         // array     || string is array | string
var rd9 = null || a4;       // null      || string is string
var rd10 = undefined || a4; // undefined || string is string

var re1 = a1 || a5;         // any       || void is any
var re2 = a2 || a5;         // boolean   || void is boolean | void
var re3 = a3 || a5;         // number    || void is number | void
var re4 = a4 || a5;         // string    || void is string | void
var re5 = a5 || a5;         // void      || void is void
var re6 = a6 || a5;         // enum      || void is enum | void
var re7 = a7 || a5;         // object    || void is object | void
var re8 = a8 || a5;         // array     || void is array | void
var re9 = null || a5;       // null      || void is void
var re10 = undefined || a5; // undefined || void is void

var rg1 = a1 || a6;         // any       || enum is any
var rg2 = a2 || a6;         // boolean   || enum is boolean | enum
var rg3 = a3 || a6;         // number    || enum is number
var rg4 = a4 || a6;         // string    || enum is string | enum
var rg5 = a5 || a6;         // void      || enum is void | enum
var rg6 = a6 || a6;         // enum      || enum is E
var rg7 = a7 || a6;         // object    || enum is object | enum
var rg8 = a8 || a6;         // array     || enum is array | enum
var rg9 = null || a6;       // null      || enum is E
var rg10 = undefined || a6; // undefined || enum is E

var rh1 = a1 || a7;         // any       || object is any
var rh2 = a2 || a7;         // boolean   || object is boolean | object
var rh3 = a3 || a7;         // number    || object is number | object
var rh4 = a4 || a7;         // string    || object is string | object
var rh5 = a5 || a7;         // void      || object is void | object
var rh6 = a6 || a7;         // enum      || object is enum | object
var rh7 = a7 || a7;         // object    || object is object
var rh8 = a8 || a7;         // array     || object is array | object
var rh9 = null || a7;       // null      || object is object
var rh10 = undefined || a7; // undefined || object is object

var ri1 = a1 || a8;         // any       || array is any
var ri2 = a2 || a8;         // boolean   || array is boolean | array
var ri3 = a3 || a8;         // number    || array is number | array
var ri4 = a4 || a8;         // string    || array is string | array
var ri5 = a5 || a8;         // void      || array is void | array
var ri6 = a6 || a8;         // enum      || array is enum | array
var ri7 = a7 || a8;         // object    || array is object | array
var ri8 = a8 || a8;         // array     || array is array
var ri9 = null || a8;       // null      || array is array
var ri10 = undefined || a8; // undefined || array is array

var rj1 = a1 || null;         // any       || null is any
var rj2 = a2 || null;         // boolean   || null is boolean
var rj3 = a3 || null;         // number    || null is number
var rj4 = a4 || null;         // string    || null is string
var rj5 = a5 || null;         // void      || null is void
var rj6 = a6 || null;         // enum      || null is E
var rj7 = a7 || null;         // object    || null is object
var rj8 = a8 || null;         // array     || null is array
var rj9 = null || null;       // null      || null is any
var rj10 = undefined || null; // undefined || null is any

var rf1 = a1 || undefined;         // any       || undefined is any
var rf2 = a2 || undefined;         // boolean   || undefined is boolean
var rf3 = a3 || undefined;         // number    || undefined is number
var rf4 = a4 || undefined;         // string    || undefined is string
var rf5 = a5 || undefined;         // void      || undefined is void
var rf6 = a6 || undefined;         // enum      || undefined is E
var rf7 = a7 || undefined;         // object    || undefined is object
var rf8 = a8 || undefined;         // array     || undefined is array
var rf9 = null || undefined;       // null      || undefined is any
var rf10 = undefined || undefined; // undefined || undefined is any

//// [logicalOrOperatorWithEveryType.js]
// The || operator permits the operands to be of any type.
// If the || expression is not contextually typed, the right operand is contextually typed
// by the type of the left operand and the result is of the best common type of the two
// operand types.
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
    E[E["c"] = 2] = "c";
})(E || (E = {}));
var a1;
var a2;
var a3;
var a4;
var a5;
var a6;
var a7;
var a8;
var ra1 = a1 || a1; // any       || any is any
var ra2 = a2 || a1; // boolean   || any is any
var ra3 = a3 || a1; // number    || any is any
var ra4 = a4 || a1; // string    || any is any
var ra5 = a5 || a1; // void      || any is any
var ra6 = a6 || a1; // enum      || any is any
var ra7 = a7 || a1; // object    || any is any
var ra8 = a8 || a1; // array     || any is any
var ra9 = null || a1; // null      || any is any
var ra10 = undefined || a1; // undefined || any is any
var rb1 = a1 || a2; // any       || boolean is any
var rb2 = a2 || a2; // boolean   || boolean is boolean
var rb3 = a3 || a2; // number    || boolean is number | boolean
var rb4 = a4 || a2; // string    || boolean is string | boolean
var rb5 = a5 || a2; // void      || boolean is void | boolean
var rb6 = a6 || a2; // enum      || boolean is E | boolean
var rb7 = a7 || a2; // object    || boolean is object | boolean
var rb8 = a8 || a2; // array     || boolean is array | boolean
var rb9 = null || a2; // null      || boolean is boolean
var rb10 = undefined || a2; // undefined || boolean is boolean
var rc1 = a1 || a3; // any       || number is any
var rc2 = a2 || a3; // boolean   || number is boolean | number
var rc3 = a3 || a3; // number    || number is number
var rc4 = a4 || a3; // string    || number is string | number
var rc5 = a5 || a3; // void      || number is void | number
var rc6 = a6 || a3; // enum      || number is number
var rc7 = a7 || a3; // object    || number is object | number
var rc8 = a8 || a3; // array     || number is array | number
var rc9 = null || a3; // null      || number is number
var rc10 = undefined || a3; // undefined || number is number
var rd1 = a1 || a4; // any       || string is any
var rd2 = a2 || a4; // boolean   || string is boolean | string
var rd3 = a3 || a4; // number    || string is number | string
var rd4 = a4 || a4; // string    || string is string
var rd5 = a5 || a4; // void      || string is void | string
var rd6 = a6 || a4; // enum      || string is enum | string
var rd7 = a7 || a4; // object    || string is object | string
var rd8 = a8 || a4; // array     || string is array | string
var rd9 = null || a4; // null      || string is string
var rd10 = undefined || a4; // undefined || string is string
var re1 = a1 || a5; // any       || void is any
var re2 = a2 || a5; // boolean   || void is boolean | void
var re3 = a3 || a5; // number    || void is number | void
var re4 = a4 || a5; // string    || void is string | void
var re5 = a5 || a5; // void      || void is void
var re6 = a6 || a5; // enum      || void is enum | void
var re7 = a7 || a5; // object    || void is object | void
var re8 = a8 || a5; // array     || void is array | void
var re9 = null || a5; // null      || void is void
var re10 = undefined || a5; // undefined || void is void
var rg1 = a1 || a6; // any       || enum is any
var rg2 = a2 || a6; // boolean   || enum is boolean | enum
var rg3 = a3 || a6; // number    || enum is number
var rg4 = a4 || a6; // string    || enum is string | enum
var rg5 = a5 || a6; // void      || enum is void | enum
var rg6 = a6 || a6; // enum      || enum is E
var rg7 = a7 || a6; // object    || enum is object | enum
var rg8 = a8 || a6; // array     || enum is array | enum
var rg9 = null || a6; // null      || enum is E
var rg10 = undefined || a6; // undefined || enum is E
var rh1 = a1 || a7; // any       || object is any
var rh2 = a2 || a7; // boolean   || object is boolean | object
var rh3 = a3 || a7; // number    || object is number | object
var rh4 = a4 || a7; // string    || object is string | object
var rh5 = a5 || a7; // void      || object is void | object
var rh6 = a6 || a7; // enum      || object is enum | object
var rh7 = a7 || a7; // object    || object is object
var rh8 = a8 || a7; // array     || object is array | object
var rh9 = null || a7; // null      || object is object
var rh10 = undefined || a7; // undefined || object is object
var ri1 = a1 || a8; // any       || array is any
var ri2 = a2 || a8; // boolean   || array is boolean | array
var ri3 = a3 || a8; // number    || array is number | array
var ri4 = a4 || a8; // string    || array is string | array
var ri5 = a5 || a8; // void      || array is void | array
var ri6 = a6 || a8; // enum      || array is enum | array
var ri7 = a7 || a8; // object    || array is object | array
var ri8 = a8 || a8; // array     || array is array
var ri9 = null || a8; // null      || array is array
var ri10 = undefined || a8; // undefined || array is array
var rj1 = a1 || null; // any       || null is any
var rj2 = a2 || null; // boolean   || null is boolean
var rj3 = a3 || null; // number    || null is number
var rj4 = a4 || null; // string    || null is string
var rj5 = a5 || null; // void      || null is void
var rj6 = a6 || null; // enum      || null is E
var rj7 = a7 || null; // object    || null is object
var rj8 = a8 || null; // array     || null is array
var rj9 = null || null; // null      || null is any
var rj10 = undefined || null; // undefined || null is any
var rf1 = a1 || undefined; // any       || undefined is any
var rf2 = a2 || undefined; // boolean   || undefined is boolean
var rf3 = a3 || undefined; // number    || undefined is number
var rf4 = a4 || undefined; // string    || undefined is string
var rf5 = a5 || undefined; // void      || undefined is void
var rf6 = a6 || undefined; // enum      || undefined is E
var rf7 = a7 || undefined; // object    || undefined is object
var rf8 = a8 || undefined; // array     || undefined is array
var rf9 = null || undefined; // null      || undefined is any
var rf10 = undefined || undefined; // undefined || undefined is any
