//// [tests/cases/conformance/types/rest/genericRestArity.ts] ////

//// [genericRestArity.ts]
// Repro from #25559

declare function call<TS extends unknown[]>(
    handler: (...args: TS) => void,
    ...args: TS): void;
  
call((x: number, y: number) => x + y);
call((x: number, y: number) => x + y, 1, 2, 3, 4, 5, 6, 7);


//// [genericRestArity.js]
// Repro from #25559
call(function (x, y) { return x + y; });
call(function (x, y) { return x + y; }, 1, 2, 3, 4, 5, 6, 7);
