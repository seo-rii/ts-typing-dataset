//// [tests/cases/conformance/es6/templates/taggedTemplateStringsWithManyCallAndMemberExpressionsES6.ts] ////

//// [taggedTemplateStringsWithManyCallAndMemberExpressionsES6.ts]
interface I {
    (strs: TemplateStringsArray, ...subs: number[]): I;
    member: {
        new (s: string): {
            new (n: number): {
                new (): boolean;
            }
        }
    };
}
var f: I;

var x = new new new f `abc${ 0 }def`.member("hello")(42) === true;



//// [taggedTemplateStringsWithManyCallAndMemberExpressionsES6.js]
var f;
var x = new new new f `abc${0}def`.member("hello")(42) === true;
