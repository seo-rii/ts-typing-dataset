//// [tests/cases/compiler/assignmentCompatability38.ts] ////

//// [assignmentCompatability38.ts]
module __test1__ {
    export interface interfaceWithPublicAndOptional<T,U> { one: T; two?: U; };  var obj4: interfaceWithPublicAndOptional<number,string> = { one: 1 };;
    export var __val__obj4 = obj4;
}
module __test2__ {
    export var aa:{ new <Tstring>(param: Tstring); };;
    export var __val__aa = aa;
}
__test2__.__val__aa = __test1__.__val__obj4

//// [assignmentCompatability38.js]
var __test1__;
(function (__test1__) {
    ;
    var obj4 = { one: 1 };
    ;
    __test1__.__val__obj4 = obj4;
})(__test1__ || (__test1__ = {}));
var __test2__;
(function (__test2__) {
    ;
    __test2__.__val__aa = __test2__.aa;
})(__test2__ || (__test2__ = {}));
__test2__.__val__aa = __test1__.__val__obj4;
