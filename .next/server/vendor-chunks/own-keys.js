"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/own-keys";
exports.ids = ["vendor-chunks/own-keys"];
exports.modules = {

/***/ "(ssr)/./node_modules/own-keys/index.js":
/*!****************************************!*\
  !*** ./node_modules/own-keys/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(ssr)/./node_modules/get-intrinsic/index.js\");\n\nvar safePushApply = __webpack_require__(/*! safe-push-apply */ \"(ssr)/./node_modules/safe-push-apply/index.js\");\n\nvar $ownKeys = GetIntrinsic('%Reflect.ownKeys%', true);\nvar $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%', true);\nvar $gOPS = GetIntrinsic('%Object.getOwnPropertySymbols%', true);\n\nvar keys = __webpack_require__(/*! object-keys */ \"(ssr)/./node_modules/object-keys/index.js\");\n\n/** @type {import('.')} */\nmodule.exports = $ownKeys || function ownKeys(source) {\n\t/** @type {(keyof typeof source)[]} */\n\tvar sourceKeys = ($gOPN || keys)(source);\n\tif ($gOPS) {\n\t\tsafePushApply(sourceKeys, $gOPS(source));\n\t}\n\treturn sourceKeys;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb3duLWtleXMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsbUJBQW1CLG1CQUFPLENBQUMsa0VBQWU7O0FBRTFDLG9CQUFvQixtQkFBTyxDQUFDLHNFQUFpQjs7QUFFN0M7QUFDQTtBQUNBOztBQUVBLFdBQVcsbUJBQU8sQ0FBQyw4REFBYTs7QUFFaEMsV0FBVyxhQUFhO0FBQ3hCO0FBQ0EsWUFBWSx5QkFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm92YS8uL25vZGVfbW9kdWxlcy9vd24ta2V5cy9pbmRleC5qcz82NjFiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcblxudmFyIHNhZmVQdXNoQXBwbHkgPSByZXF1aXJlKCdzYWZlLXB1c2gtYXBwbHknKTtcblxudmFyICRvd25LZXlzID0gR2V0SW50cmluc2ljKCclUmVmbGVjdC5vd25LZXlzJScsIHRydWUpO1xudmFyICRnT1BOID0gR2V0SW50cmluc2ljKCclT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMlJywgdHJ1ZSk7XG52YXIgJGdPUFMgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzJScsIHRydWUpO1xuXG52YXIga2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuJyl9ICovXG5tb2R1bGUuZXhwb3J0cyA9ICRvd25LZXlzIHx8IGZ1bmN0aW9uIG93bktleXMoc291cmNlKSB7XG5cdC8qKiBAdHlwZSB7KGtleW9mIHR5cGVvZiBzb3VyY2UpW119ICovXG5cdHZhciBzb3VyY2VLZXlzID0gKCRnT1BOIHx8IGtleXMpKHNvdXJjZSk7XG5cdGlmICgkZ09QUykge1xuXHRcdHNhZmVQdXNoQXBwbHkoc291cmNlS2V5cywgJGdPUFMoc291cmNlKSk7XG5cdH1cblx0cmV0dXJuIHNvdXJjZUtleXM7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/own-keys/index.js\n");

/***/ })

};
;