"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/document.contains";
exports.ids = ["vendor-chunks/document.contains"];
exports.modules = {

/***/ "(ssr)/./node_modules/document.contains/implementation.js":
/*!**********************************************************!*\
  !*** ./node_modules/document.contains/implementation.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function contains(other) {\n\tif (arguments.length < 1) {\n\t\tthrow new TypeError('1 argument is required');\n\t}\n\tif (typeof other !== 'object') {\n\t\tthrow new TypeError('Argument 1 (”other“) to Node.contains must be an instance of Node');\n\t}\n\n\tvar node = other;\n\tdo {\n\t\tif (this === node) {\n\t\t\treturn true;\n\t\t}\n\t\tif (node) {\n\t\t\tnode = node.parentNode;\n\t\t}\n\t} while (node);\n\n\treturn false;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvaW1wbGVtZW50YXRpb24uanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vdmEvLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvaW1wbGVtZW50YXRpb24uanM/MzViYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29udGFpbnMob3RoZXIpIHtcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCBpcyByZXF1aXJlZCcpO1xuXHR9XG5cdGlmICh0eXBlb2Ygb3RoZXIgIT09ICdvYmplY3QnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgMSAo4oCdb3RoZXLigJwpIHRvIE5vZGUuY29udGFpbnMgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBOb2RlJyk7XG5cdH1cblxuXHR2YXIgbm9kZSA9IG90aGVyO1xuXHRkbyB7XG5cdFx0aWYgKHRoaXMgPT09IG5vZGUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAobm9kZSkge1xuXHRcdFx0bm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0XHR9XG5cdH0gd2hpbGUgKG5vZGUpO1xuXG5cdHJldHVybiBmYWxzZTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/document.contains/implementation.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/document.contains/index.js":
/*!*************************************************!*\
  !*** ./node_modules/document.contains/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"(ssr)/./node_modules/define-properties/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"(ssr)/./node_modules/document.contains/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"(ssr)/./node_modules/document.contains/polyfill.js\");\nvar polyfill = getPolyfill();\nvar shim = __webpack_require__(/*! ./shim */ \"(ssr)/./node_modules/document.contains/shim.js\");\n\nvar boundContains = function contains(node, other) {\n\treturn polyfill.apply(node, [other]);\n};\n\ndefine(boundContains, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = boundContains;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFeEMscUJBQXFCLG1CQUFPLENBQUMsa0ZBQWtCO0FBQy9DLGtCQUFrQixtQkFBTyxDQUFDLHNFQUFZO0FBQ3RDO0FBQ0EsV0FBVyxtQkFBTyxDQUFDLDhEQUFROztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm92YS8uL25vZGVfbW9kdWxlcy9kb2N1bWVudC5jb250YWlucy9pbmRleC5qcz9iZWVlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG52YXIgc2hpbSA9IHJlcXVpcmUoJy4vc2hpbScpO1xuXG52YXIgYm91bmRDb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zKG5vZGUsIG90aGVyKSB7XG5cdHJldHVybiBwb2x5ZmlsbC5hcHBseShub2RlLCBbb3RoZXJdKTtcbn07XG5cbmRlZmluZShib3VuZENvbnRhaW5zLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBib3VuZENvbnRhaW5zO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/document.contains/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/document.contains/polyfill.js":
/*!****************************************************!*\
  !*** ./node_modules/document.contains/polyfill.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"(ssr)/./node_modules/document.contains/implementation.js\");\n\nmodule.exports = function getPolyfill() {\n\tif (typeof document !== 'undefined') {\n\t\tif (document.contains) {\n\t\t\treturn document.contains;\n\t\t}\n\t\tif (document.body && document.body.contains) {\n\t\t\ttry {\n\t\t\t\tif (typeof document.body.contains.call(document, '') === 'boolean') {\n\t\t\t\t\treturn document.body.contains;\n\t\t\t\t}\n\t\t\t} catch (e) { /**/ }\n\t\t}\n\t}\n\treturn implementation;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvcG9seWZpbGwuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIscUJBQXFCLG1CQUFPLENBQUMsa0ZBQWtCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssWUFBWTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vdmEvLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvcG9seWZpbGwuanM/MDVmOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRpZiAoZG9jdW1lbnQuY29udGFpbnMpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5jb250YWlucztcblx0XHR9XG5cdFx0aWYgKGRvY3VtZW50LmJvZHkgJiYgZG9jdW1lbnQuYm9keS5jb250YWlucykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zLmNhbGwoZG9jdW1lbnQsICcnKSA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmJvZHkuY29udGFpbnM7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHsgLyoqLyB9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBpbXBsZW1lbnRhdGlvbjtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/document.contains/polyfill.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/document.contains/shim.js":
/*!************************************************!*\
  !*** ./node_modules/document.contains/shim.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"(ssr)/./node_modules/define-properties/index.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"(ssr)/./node_modules/document.contains/polyfill.js\");\n\nmodule.exports = function shimContains() {\n\tvar polyfill = getPolyfill();\n\tif (typeof document !== 'undefined') {\n\t\tdefine(\n\t\t\tdocument,\n\t\t\t{ contains: polyfill },\n\t\t\t{ contains: function () { return document.contains !== polyfill; } }\n\t\t);\n\t\tif (typeof Element !== 'undefined') {\n\t\t\tdefine(\n\t\t\t\tElement.prototype,\n\t\t\t\t{ contains: polyfill },\n\t\t\t\t{ contains: function () { return Element.prototype.contains !== polyfill; } }\n\t\t\t);\n\t\t}\n\t}\n\treturn polyfill;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvc2hpbS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsMEVBQW1CO0FBQ3hDLGtCQUFrQixtQkFBTyxDQUFDLHNFQUFZOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxvQkFBb0I7QUFDekIsS0FBSyx3QkFBd0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9CQUFvQjtBQUMxQixNQUFNLHdCQUF3QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm92YS8uL25vZGVfbW9kdWxlcy9kb2N1bWVudC5jb250YWlucy9zaGltLmpzPzM4ZGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGltQ29udGFpbnMoKSB7XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0ZGVmaW5lKFxuXHRcdFx0ZG9jdW1lbnQsXG5cdFx0XHR7IGNvbnRhaW5zOiBwb2x5ZmlsbCB9LFxuXHRcdFx0eyBjb250YWluczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQuY29udGFpbnMgIT09IHBvbHlmaWxsOyB9IH1cblx0XHQpO1xuXHRcdGlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGRlZmluZShcblx0XHRcdFx0RWxlbWVudC5wcm90b3R5cGUsXG5cdFx0XHRcdHsgY29udGFpbnM6IHBvbHlmaWxsIH0sXG5cdFx0XHRcdHsgY29udGFpbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEVsZW1lbnQucHJvdG90eXBlLmNvbnRhaW5zICE9PSBwb2x5ZmlsbDsgfSB9XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/document.contains/shim.js\n");

/***/ })

};
;