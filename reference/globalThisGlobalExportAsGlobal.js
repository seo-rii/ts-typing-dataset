//// [tests/cases/conformance/es2019/globalThisGlobalExportAsGlobal.ts] ////

//// [globalThisGlobalExportAsGlobal.ts]
// https://github.com/microsoft/TypeScript/issues/33754
declare global {
    export { globalThis as global }
}


//// [globalThisGlobalExportAsGlobal.js]
