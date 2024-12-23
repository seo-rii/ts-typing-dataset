//// [tests/cases/compiler/parseShortform.ts] ////

//// [parseShortform.ts]
interface I {
    w: {
        z: I;
        (): boolean;
        [s: string]: { x: any; y: any; };
        [n: number]: { x: any; y: any; };
    };
    x: boolean;
    y: (s: string) => boolean;
    z: I; 
}

//// [parseShortform.js]
