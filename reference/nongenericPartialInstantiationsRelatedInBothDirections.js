//// [tests/cases/compiler/nongenericPartialInstantiationsRelatedInBothDirections.ts] ////

//// [nongenericPartialInstantiationsRelatedInBothDirections.ts]
interface Foo {
    a: number;
    b: number;
    bar: string;
}
interface ObjectContaining<T> {
  new (sample: Partial<T>): Partial<T>
}
declare let cafoo: ObjectContaining<{ a: number, foo: number }>;
declare let cfoo: ObjectContaining<Foo>;
cfoo = cafoo;
cafoo = cfoo;


//// [nongenericPartialInstantiationsRelatedInBothDirections.js]
cfoo = cafoo;
cafoo = cfoo;
