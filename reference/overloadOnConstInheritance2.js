//// [tests/cases/compiler/overloadOnConstInheritance2.ts] ////

//// [overloadOnConstInheritance2.ts]
interface Base {
    addEventListener(x: string): any;
    addEventListener(x: 'foo'): string;
}
interface Deriver extends Base {
    addEventListener(x: 'bar'): string; // shouldn't need to redeclare the string overload
}


//// [overloadOnConstInheritance2.js]
