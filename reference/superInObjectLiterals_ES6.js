//// [tests/cases/compiler/superInObjectLiterals_ES6.ts] ////

//// [superInObjectLiterals_ES6.ts]
var obj = {
    __proto__: {
        method() {
        }
    },
    method() {
        super.method();
    },
    get prop() {
        super.method();
        return 10;
    },
    set prop(value) {
        super.method();
    },
    p1: function () {
        super.method();
    },
    p2: function f() {
        super.method();
    },
    p3: () => {
        super.method();
    }
};

class A {
    method() { }
}

class B extends A {
    f() {
        var obj = {
            __proto__: {
                method() {
                }
            },
            method() {
                super.method();
            },
            get prop() {
                super.method();
                return 10;
            },
            set prop(value) {
                super.method();
            },
            p1: function () {
                super.method();
            },
            p2: function f() {
                super.method();
            },
            p3: () => {
                super.method();
            }
        };
    }
}

//// [superInObjectLiterals_ES6.js]
var obj = {
    __proto__: {
        method() {
        }
    },
    method() {
        super.method();
    },
    get prop() {
        super.method();
        return 10;
    },
    set prop(value) {
        super.method();
    },
    p1: function () {
        super.method();
    },
    p2: function f() {
        super.method();
    },
    p3: () => {
        super.method();
    }
};
class A {
    method() { }
}
class B extends A {
    f() {
        var obj = {
            __proto__: {
                method() {
                }
            },
            method() {
                super.method();
            },
            get prop() {
                super.method();
                return 10;
            },
            set prop(value) {
                super.method();
            },
            p1: function () {
                super.method();
            },
            p2: function f() {
                super.method();
            },
            p3: () => {
                super.method();
            }
        };
    }
}
