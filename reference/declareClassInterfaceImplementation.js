//// [tests/cases/compiler/declareClassInterfaceImplementation.ts] ////

//// [declareClassInterfaceImplementation.ts]
interface IBuffer {
    [index: number]: number;
}

declare class Buffer implements IBuffer {

}


//// [declareClassInterfaceImplementation.js]
