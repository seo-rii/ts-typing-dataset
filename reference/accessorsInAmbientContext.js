//// [tests/cases/compiler/accessorsInAmbientContext.ts] ////

//// [accessorsInAmbientContext.ts]
declare module M {
    class C {
        get X() { return 1; }
        set X(v) { }

        static get Y() { return 1; }
        static set Y(v) { }
    }
}

declare class C {
    get X() { return 1; }
    set X(v) { }

    static get Y() { return 1; }
    static set Y(v) { }
}

//// [accessorsInAmbientContext.js]
