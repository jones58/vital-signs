"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/more-stories-on-home.tsx":
/*!*********************************************!*\
  !*** ./components/more-stories-on-home.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MoreStories; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-preview */ \"./components/post-preview.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MoreStories(param) {\n    let { posts } = param;\n    const limitedPosts = posts.slice(0, 4);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:grid sm:grid-cols-2 sm:gap-x-5\",\n                children: limitedPosts.map((param)=>{\n                    let { node } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_post_preview__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        title: node.title,\n                        coverImage: node.featuredImage,\n                        slug: node.slug,\n                        excerpt: node.excerpt,\n                        category: node.categories.nodes.map((category)=>category.name)\n                    }, node.slug, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/more-stories-on-home.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/more-stories-on-home.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/news\",\n                className: \"text-lg font-bold font-sans text-primary-500\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-orange-700 mb-10 sm:mb-5 p-5 w-full text-neutral-50 hover:bg-orange-950 active:bg-orange-500 \",\n                        children: [\n                            \" \",\n                            \"Read more\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/more-stories-on-home.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/more-stories-on-home.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/more-stories-on-home.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = MoreStories;\nvar _c;\n$RefreshReg$(_c, \"MoreStories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vcmUtc3Rvcmllcy1vbi1ob21lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ1o7QUFDZCxTQUFTRSxZQUFZLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDtJQUNsQyxNQUFNQyxlQUFlRCxNQUFNRSxLQUFLLENBQUMsR0FBRztJQUVwQyxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDWkosYUFBYUssR0FBRyxDQUFDO3dCQUFDLEVBQUVDLElBQUksRUFBRTt5Q0FDekIsOERBQUNWLHFEQUFXQTt3QkFFVlcsT0FBT0QsS0FBS0MsS0FBSzt3QkFDakJDLFlBQVlGLEtBQUtHLGFBQWE7d0JBQzlCQyxNQUFNSixLQUFLSSxJQUFJO3dCQUNmQyxTQUFTTCxLQUFLSyxPQUFPO3dCQUNyQkMsVUFBVU4sS0FBS08sVUFBVSxDQUFDQyxLQUFLLENBQUNULEdBQUcsQ0FDakMsQ0FBQ08sV0FBYUEsU0FBU0csSUFBSTt1QkFOeEJULEtBQUtJLElBQUk7Ozs7Ozs7Ozs7OzBCQVdwQiw4REFBQ2Isa0RBQUlBO2dCQUNIbUIsTUFBSztnQkFDTFosV0FBVTs7b0JBRVQ7a0NBQ0QsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFDWjs0QkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1mO0tBL0J3Qk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb3JlLXN0b3JpZXMtb24taG9tZS50c3g/ODBjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9zdFByZXZpZXcgZnJvbSBcIi4vcG9zdC1wcmV2aWV3XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3JlU3Rvcmllcyh7IHBvc3RzIH0pIHtcbiAgY29uc3QgbGltaXRlZFBvc3RzID0gcG9zdHMuc2xpY2UoMCwgNCk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Z3JpZCBzbTpncmlkLWNvbHMtMiBzbTpnYXAteC01XCI+XG4gICAgICAgIHtsaW1pdGVkUG9zdHMubWFwKCh7IG5vZGUgfSkgPT4gKFxuICAgICAgICAgIDxQb3N0UHJldmlld1xuICAgICAgICAgICAga2V5PXtub2RlLnNsdWd9XG4gICAgICAgICAgICB0aXRsZT17bm9kZS50aXRsZX1cbiAgICAgICAgICAgIGNvdmVySW1hZ2U9e25vZGUuZmVhdHVyZWRJbWFnZX1cbiAgICAgICAgICAgIHNsdWc9e25vZGUuc2x1Z31cbiAgICAgICAgICAgIGV4Y2VycHQ9e25vZGUuZXhjZXJwdH1cbiAgICAgICAgICAgIGNhdGVnb3J5PXtub2RlLmNhdGVnb3JpZXMubm9kZXMubWFwKFxuICAgICAgICAgICAgICAoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm5hbWVcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxMaW5rXG4gICAgICAgIGhyZWY9XCIvbmV3c1wiXG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIGZvbnQtc2FucyB0ZXh0LXByaW1hcnktNTAwXCJcbiAgICAgID5cbiAgICAgICAge1wiIFwifVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW9yYW5nZS03MDAgbWItMTAgc206bWItNSBwLTUgdy1mdWxsIHRleHQtbmV1dHJhbC01MCBob3ZlcjpiZy1vcmFuZ2UtOTUwIGFjdGl2ZTpiZy1vcmFuZ2UtNTAwIFwiPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBSZWFkIG1vcmVcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlBvc3RQcmV2aWV3IiwiTGluayIsIk1vcmVTdG9yaWVzIiwicG9zdHMiLCJsaW1pdGVkUG9zdHMiLCJzbGljZSIsInNlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJub2RlIiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZmVhdHVyZWRJbWFnZSIsInNsdWciLCJleGNlcnB0IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwibm9kZXMiLCJuYW1lIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/more-stories-on-home.tsx\n"));

/***/ })

});