//// [tests/cases/compiler/declarationEmitArrayTypesFromGenericArrayUsage.ts] ////

//// [declarationEmitArrayTypesFromGenericArrayUsage.ts]
interface A extends Array<string> { }


//// [declarationEmitArrayTypesFromGenericArrayUsage.js]


//// [declarationEmitArrayTypesFromGenericArrayUsage.d.ts]
interface A extends Array<string> {
}
