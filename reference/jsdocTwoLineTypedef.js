//// [tests/cases/conformance/jsdoc/jsdocTwoLineTypedef.ts] ////

//// [jsdocTwoLineTypedef.ts]
// Regression from #18301
/**
 * @typedef LoadCallback
 * @type {function}
 */
type LoadCallback = void;


//// [jsdocTwoLineTypedef.js]
