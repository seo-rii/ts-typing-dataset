//// [tests/cases/compiler/infinitelyExpandingBaseTypes1.ts] ////

//// [infinitelyExpandingBaseTypes1.ts]
interface A<T>
{
    x : A<A<T>>
}
 
interface B<T>
{
    x : B<T>
}
 
interface C<T> extends A<T>, B<T> { }

 


//// [infinitelyExpandingBaseTypes1.js]
