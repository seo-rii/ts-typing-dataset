//// [tests/cases/conformance/parser/ecmascript5/IndexSignatures/parserIndexSignature5.ts] ////

//// [parserIndexSignature5.ts]
interface I {
  [a] // Used to be indexer, now it is a computed property
}

//// [parserIndexSignature5.js]
