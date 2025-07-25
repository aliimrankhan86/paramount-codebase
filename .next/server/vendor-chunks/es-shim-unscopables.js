"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/es-shim-unscopables";
exports.ids = ["vendor-chunks/es-shim-unscopables"];
exports.modules = {

/***/ "(ssr)/./node_modules/es-shim-unscopables/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es-shim-unscopables/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar hasOwn = __webpack_require__(/*! hasown */ \"(ssr)/./node_modules/hasown/index.js\");\n\nvar hasUnscopables = typeof Symbol === 'function' && typeof Symbol.unscopables === 'symbol';\n\nvar map = hasUnscopables && Array.prototype[Symbol.unscopables];\n\nvar $TypeError = TypeError;\n\n/** @type {import('.')} */\nmodule.exports = function shimUnscopables(method) {\n\tif (typeof method !== 'string' || !method) {\n\t\tthrow new $TypeError('method must be a non-empty string');\n\t}\n\tif (!hasOwn(Array.prototype, method)) {\n\t\tthrow new $TypeError('method must be on Array.prototype');\n\t}\n\tif (hasUnscopables && map) {\n\t\tmap[method] = true;\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXMtc2hpbS11bnNjb3BhYmxlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsb0RBQVE7O0FBRTdCOztBQUVBOztBQUVBOztBQUVBLFdBQVcsYUFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm92YS8uL25vZGVfbW9kdWxlcy9lcy1zaGltLXVuc2NvcGFibGVzL2luZGV4LmpzPzAwYmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzT3duID0gcmVxdWlyZSgnaGFzb3duJyk7XG5cbnZhciBoYXNVbnNjb3BhYmxlcyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC51bnNjb3BhYmxlcyA9PT0gJ3N5bWJvbCc7XG5cbnZhciBtYXAgPSBoYXNVbnNjb3BhYmxlcyAmJiBBcnJheS5wcm90b3R5cGVbU3ltYm9sLnVuc2NvcGFibGVzXTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuJyl9ICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1VbnNjb3BhYmxlcyhtZXRob2QpIHtcblx0aWYgKHR5cGVvZiBtZXRob2QgIT09ICdzdHJpbmcnIHx8ICFtZXRob2QpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignbWV0aG9kIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG5cdH1cblx0aWYgKCFoYXNPd24oQXJyYXkucHJvdG90eXBlLCBtZXRob2QpKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ21ldGhvZCBtdXN0IGJlIG9uIEFycmF5LnByb3RvdHlwZScpO1xuXHR9XG5cdGlmIChoYXNVbnNjb3BhYmxlcyAmJiBtYXApIHtcblx0XHRtYXBbbWV0aG9kXSA9IHRydWU7XG5cdH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/es-shim-unscopables/index.js\n");

/***/ })

};
;