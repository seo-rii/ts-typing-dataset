//// [tests/cases/conformance/parser/ecmascript5/ErrorRecovery/AccessibilityAfterStatic/parserAccessibilityAfterStatic11.ts] ////

//// [parserAccessibilityAfterStatic11.ts]
class Outer
{
static public() {}
}


//// [parserAccessibilityAfterStatic11.js]
var Outer = /** @class */ (function () {
    function Outer() {
    }
    Outer.public = function () { };
    return Outer;
}());
