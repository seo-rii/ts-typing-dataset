//// [tests/cases/compiler/assignmentCompatability6.ts] ////

//// [assignmentCompatability6.ts]
module __test1__ {
    export interface interfaceWithPublicAndOptional<T,U> { one: T; two?: U; };  var obj4: interfaceWithPublicAndOptional<number,string> = { one: 1 };;
    export var __val__obj4 = obj4;
}
module __test2__ {
    export          interface interfaceWithOptional<T> { one?: T; };               var obj3: interfaceWithOptional<number> = { };;
    export var __val__obj3 = obj3;
}
__test2__.__val__obj3 = __test1__.__val__obj4

//// [assignmentCompatability6.js]
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
    var obj3 = {};
    ;
    __test2__.__val__obj3 = obj3;
})(__test2__ || (__test2__ = {}));
__test2__.__val__obj3 = __test1__.__val__obj4;
