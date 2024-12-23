//// [tests/cases/conformance/decorators/class/method/decoratorOnClassMethod13.ts] ////

//// [decoratorOnClassMethod13.ts]
declare function dec<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T>;

class C {
    @dec ["1"]() { }
    @dec ["b"]() { }
}

//// [decoratorOnClassMethod13.js]
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class C {
    ["1"]() { }
    ["b"]() { }
}
__decorate([
    dec
], C.prototype, "1", null);
__decorate([
    dec
], C.prototype, "b", null);
