"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/post-cover-image.tsx":
/*!*****************************************!*\
  !*** ./components/post-cover-image.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostCoverImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction PostCoverImage(param) {\n    let { title, postCoverImage, slug } = param;\n    const image = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        fill: true,\n        alt: title,\n        src: postCoverImage === null || postCoverImage === void 0 ? void 0 : postCoverImage.node.sourceUrl,\n        className: \"object-cover object-centre\"\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-cover-image.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:mx-0\",\n        children: slug ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/posts/\".concat(slug),\n            \"aria-label\": title,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative min-w-[50vw] min-h-[20vh] sm:w-[22vw] sm:h-[25vh]\",\n                children: image\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-cover-image.tsx\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-cover-image.tsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this) : image\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-cover-image.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_c = PostCoverImage;\nvar _c;\n$RefreshReg$(_c, \"PostCoverImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QtY292ZXItaW1hZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0Y7QUFZZCxTQUFTRSxlQUFlLEtBSS9CO1FBSitCLEVBQ3JDQyxLQUFLLEVBQ0xDLGNBQWMsRUFDZEMsSUFBSSxFQUNFLEdBSitCO0lBS3JDLE1BQU1DLHNCQUNKLDhEQUFDTixtREFBS0E7UUFDSk8sSUFBSTtRQUNKQyxLQUFLTDtRQUNMTSxHQUFHLEVBQUVMLDJCQUFBQSxxQ0FBQUEsZUFBZ0JNLElBQUksQ0FBQ0MsU0FBUztRQUNuQ0MsV0FBVTs7Ozs7O0lBR2QscUJBQ0UsOERBQUNDO1FBQUlELFdBQVU7a0JBQ1pQLHFCQUNDLDhEQUFDSixrREFBSUE7WUFBQ2EsTUFBTSxVQUFlLE9BQUxUO1lBQVFVLGNBQVlaO3NCQUN4Qyw0RUFBQ1U7Z0JBQUlELFdBQVU7MEJBQ1pOOzs7Ozs7Ozs7O21CQUlMQTs7Ozs7O0FBSVI7S0ExQndCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Bvc3QtY292ZXItaW1hZ2UudHN4PzAyMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHBvc3RDb3ZlckltYWdlOiB7XG4gICAgbm9kZToge1xuICAgICAgc291cmNlVXJsOiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbiAgc2x1Zz86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdENvdmVySW1hZ2Uoe1xuICB0aXRsZSxcbiAgcG9zdENvdmVySW1hZ2UsXG4gIHNsdWcsXG59OiBQcm9wcykge1xuICBjb25zdCBpbWFnZSA9IChcbiAgICA8SW1hZ2VcbiAgICAgIGZpbGxcbiAgICAgIGFsdD17dGl0bGV9XG4gICAgICBzcmM9e3Bvc3RDb3ZlckltYWdlPy5ub2RlLnNvdXJjZVVybH1cbiAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtY2VudHJlXCJcbiAgICAvPlxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic206bXgtMFwiPlxuICAgICAge3NsdWcgPyAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtzbHVnfWB9IGFyaWEtbGFiZWw9e3RpdGxlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi13LVs1MHZ3XSBtaW4taC1bMjB2aF0gc206dy1bMjJ2d10gc206aC1bMjV2aF1cIj5cbiAgICAgICAgICAgIHtpbWFnZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSA6IChcbiAgICAgICAgaW1hZ2VcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiUG9zdENvdmVySW1hZ2UiLCJ0aXRsZSIsInBvc3RDb3ZlckltYWdlIiwic2x1ZyIsImltYWdlIiwiZmlsbCIsImFsdCIsInNyYyIsIm5vZGUiLCJzb3VyY2VVcmwiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwiYXJpYS1sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/post-cover-image.tsx\n"));

/***/ }),

/***/ "./components/post-header.tsx":
/*!************************************!*\
  !*** ./components/post-header.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post_cover_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-cover-image */ \"./components/post-cover-image.tsx\");\n/* harmony import */ var _post_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-title */ \"./components/post-title.tsx\");\n\n\n\nfunction PostHeader(param) {\n    let { title, coverImage } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col sm:align-middle sm:items-center m-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_post_cover_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    title: title,\n                    coverImage: coverImage\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-header.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-header.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_post_title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-header.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-header.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = PostHeader;\nvar _c;\n$RefreshReg$(_c, \"PostHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QtaGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0Q7QUFDWDtBQUV0QixTQUFTRSxXQUFXLEtBQXFCO1FBQXJCLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFLEdBQXJCO0lBQ2pDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNOLHlEQUFjQTtvQkFBQ0csT0FBT0E7b0JBQU9DLFlBQVlBOzs7Ozs7Ozs7OzswQkFFNUMsOERBQUNILG1EQUFTQTswQkFBRUU7Ozs7Ozs7Ozs7OztBQUdsQjtLQVR3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LWhlYWRlci50c3g/NDE0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9zdENvdmVySW1hZ2UgZnJvbSBcIi4vcG9zdC1jb3Zlci1pbWFnZVwiO1xuaW1wb3J0IFBvc3RUaXRsZSBmcm9tIFwiLi9wb3N0LXRpdGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RIZWFkZXIoeyB0aXRsZSwgY292ZXJJbWFnZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTphbGlnbi1taWRkbGUgc206aXRlbXMtY2VudGVyIG0tMTBcIj5cbiAgICAgICAgPFBvc3RDb3ZlckltYWdlIHRpdGxlPXt0aXRsZX0gY292ZXJJbWFnZT17Y292ZXJJbWFnZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFBvc3RUaXRsZT57dGl0bGV9PC9Qb3N0VGl0bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUG9zdENvdmVySW1hZ2UiLCJQb3N0VGl0bGUiLCJQb3N0SGVhZGVyIiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/post-header.tsx\n"));

/***/ })

});