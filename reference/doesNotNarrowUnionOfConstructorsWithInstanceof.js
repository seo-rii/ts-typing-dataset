//// [tests/cases/compiler/doesNotNarrowUnionOfConstructorsWithInstanceof.ts] ////

//// [doesNotNarrowUnionOfConstructorsWithInstanceof.ts]
class A {
    length: 1
    constructor() {
      this.length = 1
    }
}

class B {
    length: 2
    constructor() {
      this.length = 2
    }
}

function getTypedArray(flag: boolean) {
  return flag ? new A() : new B();
}
function getTypedArrayConstructor(flag: boolean) {
  return flag ? A : B;
}
const a = getTypedArray(true);              // A | B
const b = getTypedArrayConstructor(false);  // A constructor | B constructor

if (!(a instanceof b)) {
  console.log(a.length);  // Used to be property 'length' does not exist on type 'never'.
}


//// [doesNotNarrowUnionOfConstructorsWithInstanceof.js]
var A = /** @class */ (function () {
    function A() {
        this.length = 1;
    }
    return A;
}());
var B = /** @class */ (function () {
    function B() {
        this.length = 2;
    }
    return B;
}());
function getTypedArray(flag) {
    return flag ? new A() : new B();
}
function getTypedArrayConstructor(flag) {
    return flag ? A : B;
}
var a = getTypedArray(true); // A | B
var b = getTypedArrayConstructor(false); // A constructor | B constructor
if (!(a instanceof b)) {
    console.log(a.length); // Used to be property 'length' does not exist on type 'never'.
}
