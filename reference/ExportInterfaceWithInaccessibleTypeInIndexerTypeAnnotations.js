//// [tests/cases/conformance/internalModules/exportDeclarations/ExportInterfaceWithInaccessibleTypeInIndexerTypeAnnotations.ts] ////

//// [ExportInterfaceWithInaccessibleTypeInIndexerTypeAnnotations.ts]
module A {

    interface Point {
        x: number;
        y: number;
    }

    export interface points {

        [idx: number]: Point;
        [idx: string]: Point;
    }
}



//// [ExportInterfaceWithInaccessibleTypeInIndexerTypeAnnotations.js]
