//// [tests/cases/compiler/anyMappedTypesError.ts] ////

//// [anyMappedTypesError.ts]
type Foo = {[P in "bar"]};

//// [anyMappedTypesError.js]
