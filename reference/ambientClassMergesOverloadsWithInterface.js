//// [tests/cases/compiler/ambientClassMergesOverloadsWithInterface.ts] ////

//// [ambientClassMergesOverloadsWithInterface.ts]
declare class C {
    baz(): any;
    foo(n: number): any;
}
interface C {
    foo(n: number): any;
    bar(): any;
}


//// [ambientClassMergesOverloadsWithInterface.js]
