//// [tests/cases/compiler/contextualTyping39.ts] ////

//// [contextualTyping39.ts]
var foo = <{ (): number; }> function() { return "err"; };

//// [contextualTyping39.js]
var foo = function () { return "err"; };
