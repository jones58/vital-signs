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

/***/ "./components/post-preview.tsx":
/*!*************************************!*\
  !*** ./components/post-preview.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostPreview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cover_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cover-image */ \"./components/cover-image.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction PostPreview(param) {\n    let { title, coverImage, excerpt, slug, category } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: coverImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cover_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    title: title,\n                    coverImage: coverImage,\n                    slug: slug\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-preview.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-preview.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-right\",\n                children: category\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-preview.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-2xl mb-4 text-orange-700 hover:text-orange-950\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/posts/\".concat(slug),\n                    dangerouslySetInnerHTML: {\n                        __html: title\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-preview.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-preview.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 font-serif\",\n                dangerouslySetInnerHTML: {\n                    __html: excerpt\n                }\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-preview.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-preview.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = PostPreview;\nvar _c;\n$RefreshReg$(_c, \"PostPreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QtcHJldmlldy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUNWO0FBRWQsU0FBU0UsWUFBWSxLQU1uQztRQU5tQyxFQUNsQ0MsS0FBSyxFQUNMQyxVQUFVLEVBQ1ZDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxRQUFRLEVBQ1QsR0FObUM7SUFPbEMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWkwsNEJBQ0MsOERBQUNKLG9EQUFVQTtvQkFDVEcsT0FBT0E7b0JBQ1BDLFlBQVlBO29CQUNaRSxNQUFNQTs7Ozs7Ozs7Ozs7MEJBSVosOERBQUNJO2dCQUFHRCxXQUFVOzBCQUFjRjs7Ozs7OzBCQUM1Qiw4REFBQ0k7Z0JBQUdGLFdBQVU7MEJBQ1osNEVBQUNSLGtEQUFJQTtvQkFDSFcsTUFBTSxVQUFlLE9BQUxOO29CQUNoQk8seUJBQXlCO3dCQUFFQyxRQUFRWDtvQkFBTTs7Ozs7Ozs7Ozs7MEJBRzdDLDhEQUFDSztnQkFDQ0MsV0FBVTtnQkFDVkkseUJBQXlCO29CQUFFQyxRQUFRVDtnQkFBUTs7Ozs7Ozs7Ozs7O0FBSW5EO0tBL0J3QkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LXByZXZpZXcudHN4Pzc3ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvdmVySW1hZ2UgZnJvbSBcIi4vY292ZXItaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFByZXZpZXcoe1xuICB0aXRsZSxcbiAgY292ZXJJbWFnZSxcbiAgZXhjZXJwdCxcbiAgc2x1ZyxcbiAgY2F0ZWdvcnksXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbTpwLTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICB7Y292ZXJJbWFnZSAmJiAoXG4gICAgICAgICAgPENvdmVySW1hZ2VcbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgIGNvdmVySW1hZ2U9e2NvdmVySW1hZ2V9XG4gICAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+e2NhdGVnb3J5fTwvaDE+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItNCB0ZXh0LW9yYW5nZS03MDAgaG92ZXI6dGV4dC1vcmFuZ2UtOTUwXCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj17YC9wb3N0cy8ke3NsdWd9YH1cbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRpdGxlIH19XG4gICAgICAgID48L0xpbms+XG4gICAgICA8L2gzPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJtYi00IGZvbnQtc2VyaWZcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGV4Y2VycHQgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ292ZXJJbWFnZSIsIkxpbmsiLCJQb3N0UHJldmlldyIsInRpdGxlIiwiY292ZXJJbWFnZSIsImV4Y2VycHQiLCJzbHVnIiwiY2F0ZWdvcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgzIiwiaHJlZiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/post-preview.tsx\n"));

/***/ })

});