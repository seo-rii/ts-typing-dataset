//// [tests/cases/conformance/parser/ecmascript5/Fuzz/parser0_004152.ts] ////

//// [parser0_004152.ts]
export class Game {
    private position = new DisplayPosition([), 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0], NoMove, 0);
    private prevConfig: SeedCoords[][];
}

//// [parser0_004152.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Game = /** @class */ (function () {
    function Game() {
        this.position = new DisplayPosition([]);
    }
    ;
    return Game;
}());
exports.Game = Game;
