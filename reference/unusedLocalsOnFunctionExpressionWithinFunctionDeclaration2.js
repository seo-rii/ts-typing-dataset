//// [tests/cases/compiler/unusedLocalsOnFunctionExpressionWithinFunctionDeclaration2.ts] ////

//// [unusedLocalsOnFunctionExpressionWithinFunctionDeclaration2.ts]
function greeter(person: string, person2: string) {
    var unused = 20;
    var maker = function(child: string): void {
        var unused2 = 22;
    }
    var maker2 = function(child2: string): void {
        var unused3 = 23;
    }
    maker2(person2);
}

//// [unusedLocalsOnFunctionExpressionWithinFunctionDeclaration2.js]
function greeter(person, person2) {
    var unused = 20;
    var maker = function (child) {
        var unused2 = 22;
    };
    var maker2 = function (child2) {
        var unused3 = 23;
    };
    maker2(person2);
}
