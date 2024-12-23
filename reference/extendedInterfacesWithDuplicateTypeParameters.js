//// [tests/cases/compiler/extendedInterfacesWithDuplicateTypeParameters.ts] ////

//// [extendedInterfacesWithDuplicateTypeParameters.ts]
interface InterfaceWithMultipleTypars<A, A> { // should error
	bar(): void;
}

interface InterfaceWithSomeTypars<B> { // should not error
	bar(): void;
}

interface InterfaceWithSomeTypars<C, C> { // should error
	bar2(): void;
}

//// [extendedInterfacesWithDuplicateTypeParameters.js]
