//// [tests/cases/compiler/functionOverloads35.ts] ////

//// [functionOverloads35.ts]
function foo(bar:{a:number;}):number;
function foo(bar:{a:string;}):string;
function foo(bar:{a:any;}):any{ return bar }
var x = foo({a:1});


//// [functionOverloads35.js]
function foo(bar) { return bar; }
var x = foo({ a: 1 });
