//// [tests/cases/conformance/es6/decorators/class/property/decoratorOnClassProperty1.es6.ts] ////

//// [decoratorOnClassProperty1.es6.ts]
declare function dec(target: any, propertyKey: string): void;

export default class {
    @dec prop;
}

//// [decoratorOnClassProperty1.es6.js]
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
export default class default_1 {
}
__decorate([
    dec
], default_1.prototype, "prop", void 0);
