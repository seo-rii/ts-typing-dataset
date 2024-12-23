//// [tests/cases/conformance/async/es2017/awaitBinaryExpression/awaitBinaryExpression1_es2017.ts] ////

//// [awaitBinaryExpression1_es2017.ts]
declare var a: boolean;
declare var p: Promise<boolean>;
declare function before(): void;
declare function after(): void;
async function func(): Promise<void> {
    before();
    var b = await p || a;
    after();
}

//// [awaitBinaryExpression1_es2017.js]
async function func() {
    before();
    var b = await p || a;
    after();
}
