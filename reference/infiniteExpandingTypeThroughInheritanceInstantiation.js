//// [tests/cases/compiler/infiniteExpandingTypeThroughInheritanceInstantiation.ts] ////

//// [infiniteExpandingTypeThroughInheritanceInstantiation.ts]
interface A<T>
{
   x: A<B<T>>
}

interface B<T> extends A<T> // error
{
   x: B<A<T>>
}


//// [infiniteExpandingTypeThroughInheritanceInstantiation.js]
