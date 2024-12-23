//// [tests/cases/compiler/inheritedMembersAndIndexSignaturesFromDifferentBases2.ts] ////

//// [inheritedMembersAndIndexSignaturesFromDifferentBases2.ts]
interface A<T> {
    [n: number]: T;
}

interface B {
    foo: number;
}

interface C extends B, A<string> { } // Should succeed

//// [inheritedMembersAndIndexSignaturesFromDifferentBases2.js]
