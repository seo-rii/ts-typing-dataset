//// [tests/cases/conformance/classes/classStaticBlock/classStaticBlock16.ts] ////

//// [classStaticBlock16.ts]
let getX: (c: C) => number;
class C {
  #x = 1
  constructor(x: number) {
    this.#x = x;
  }

  static {
    // getX has privileged access to #x
    getX = (obj: C) => obj.#x;
    getY = (obj: D) => obj.#y;
  }
}

let getY: (c: D) => number;
class D {
  #y = 1

  static {
    // getY has privileged access to y
    getX = (obj: C) => obj.#x;
    getY = (obj: D) => obj.#y;
  }
}

//// [classStaticBlock16.js]
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _C_x, _D_y;
let getX;
class C {
    constructor(x) {
        _C_x.set(this, 1);
        __classPrivateFieldSet(this, _C_x, x, "f");
    }
}
_C_x = new WeakMap();
(() => {
    // getX has privileged access to #x
    getX = (obj) => __classPrivateFieldGet(obj, _C_x, "f");
    getY = (obj) => obj.;
})();
let getY;
class D {
    constructor() {
        _D_y.set(this, 1);
    }
}
_D_y = new WeakMap();
(() => {
    // getY has privileged access to y
    getX = (obj) => obj.;
    getY = (obj) => __classPrivateFieldGet(obj, _D_y, "f");
})();
