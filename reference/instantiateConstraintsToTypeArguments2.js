//// [tests/cases/compiler/instantiateConstraintsToTypeArguments2.ts] ////

//// [instantiateConstraintsToTypeArguments2.ts]
interface A<T extends A<T, S>, S extends A<T, S>> { }
interface B<T extends B<T, S>, S extends B<T, S>> extends A<B<T, S>, B<T, S>> { }

//// [instantiateConstraintsToTypeArguments2.js]
