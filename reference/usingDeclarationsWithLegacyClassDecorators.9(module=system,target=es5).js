//// [tests/cases/conformance/statements/VariableStatements/usingDeclarations/usingDeclarationsWithLegacyClassDecorators.9.ts] ////

//// [usingDeclarationsWithLegacyClassDecorators.9.ts]
export {};

declare var dec: any;

@dec
export default class C {
}

using after = null;


//// [usingDeclarationsWithLegacyClassDecorators.9.js]
System.register([], function (exports_1, context_1) {
    "use strict";
    var C, after, env_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            C = /** @class */ (function () {
                function C() {
                }
                C = __decorate([
                    dec
                ], C);
                return C;
            }());
            exports_1("default", C);
            env_1 = { stack: [], error: void 0, hasError: false };
            try {
                after = __addDisposableResource(env_1, null, false);
            }
            catch (e_1) {
                env_1.error = e_1;
                env_1.hasError = true;
            }
            finally {
                __disposeResources(env_1);
            }
        }
    };
});
