//// [tests/cases/conformance/es6/computedProperties/computedPropertyNames28_ES6.ts] ////

//// [computedPropertyNames28_ES6.ts]
class Base {
}
class C extends Base {
    constructor() {
        super();
        var obj = {
            [(super(), "prop")]() { }
        };
    }
}

//// [computedPropertyNames28_ES6.js]
class Base {
}
class C extends Base {
    constructor() {
        super();
        var obj = {
            [(super(), "prop")]() { }
        };
    }
}
