//// [tests/cases/conformance/es6/spread/iteratorSpreadInCall12.ts] ////

//// [iteratorSpreadInCall12.ts]
class Foo<T> {
    constructor(...s: T[]) { }
}

class SymbolIterator {
    next() {
        return {
            value: Symbol(),
            done: false
        };
    }

    [Symbol.iterator]() {
        return this;
    }
}

class _StringIterator {
    next() {
        return {
            value: "",
            done: false
        };
    }

    [Symbol.iterator]() {
        return this;
    }
}

new Foo(...[...new SymbolIterator, ...[...new _StringIterator]]);

//// [iteratorSpreadInCall12.js]
class Foo {
    constructor(...s) { }
}
class SymbolIterator {
    next() {
        return {
            value: Symbol(),
            done: false
        };
    }
    [Symbol.iterator]() {
        return this;
    }
}
class _StringIterator {
    next() {
        return {
            value: "",
            done: false
        };
    }
    [Symbol.iterator]() {
        return this;
    }
}
new Foo(...[...new SymbolIterator, ...[...new _StringIterator]]);
