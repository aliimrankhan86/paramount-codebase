"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/safe-push-apply";
exports.ids = ["vendor-chunks/safe-push-apply"];
exports.modules = {

/***/ "(ssr)/./node_modules/safe-push-apply/index.js":
/*!***********************************************!*\
  !*** ./node_modules/safe-push-apply/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"(ssr)/./node_modules/es-errors/type.js\");\n\nvar isArray = __webpack_require__(/*! isarray */ \"(ssr)/./node_modules/isarray/index.js\");\n\n/** @type {import('.')} */\nmodule.exports = function safePushApply(target, source) {\n\tif (!isArray(target)) {\n\t\tthrow new $TypeError('target must be an array');\n\t}\n\tfor (var i = 0; i < source.length; i++) {\n\t\ttarget[target.length] = source[i]; // eslint-disable-line no-param-reassign\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2FmZS1wdXNoLWFwcGx5L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGlCQUFpQixtQkFBTyxDQUFDLDhEQUFnQjs7QUFFekMsY0FBYyxtQkFBTyxDQUFDLHNEQUFTOztBQUUvQixXQUFXLGFBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQW1CO0FBQ3BDLHFDQUFxQztBQUNyQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm92YS8uL25vZGVfbW9kdWxlcy9zYWZlLXB1c2gtYXBwbHkvaW5kZXguanM/ODYwOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciAkVHlwZUVycm9yID0gcmVxdWlyZSgnZXMtZXJyb3JzL3R5cGUnKTtcblxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5Jyk7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuJyl9ICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNhZmVQdXNoQXBwbHkodGFyZ2V0LCBzb3VyY2UpIHtcblx0aWYgKCFpc0FycmF5KHRhcmdldCkpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gYXJyYXknKTtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xuXHRcdHRhcmdldFt0YXJnZXQubGVuZ3RoXSA9IHNvdXJjZVtpXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXHR9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/safe-push-apply/index.js\n");

/***/ })

};
;