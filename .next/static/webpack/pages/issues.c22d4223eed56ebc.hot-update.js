"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/issues",{

/***/ "./pages/issues.tsx":
/*!**************************!*\
  !*** ./pages/issues.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_more_stories_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/more-stories-preview */ \"./components/more-stories-preview.tsx\");\n\n\n\nvar __N_SSG = true;\nfunction News(param) {\n    let { allPosts: { edges } } = param;\n    const Posts = edges;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:grid sm:grid-cols-4 sm:gap-x-5 sm:gap-y-5\",\n                children: Posts.map((param)=>{\n                    let { node } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories_preview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: node.title,\n                        coverImage: node.featuredImage,\n                        slug: node.slug,\n                        excerpt: node.excerpt,\n                        category: node.categories.nodes.map((category)=>category.name)\n                    }, node.slug, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/issues.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/issues.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/issues.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/issues.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pc3N1ZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEM7QUFFbUI7O0FBRzlDLFNBQVNFLEtBQUssS0FBdUI7UUFBdkIsRUFBRUMsVUFBVSxFQUFFQyxLQUFLLEVBQUUsRUFBRSxHQUF2QjtJQUMzQixNQUFNQyxRQUFRRDtJQUVkLHFCQUNFLDhEQUFDRTtrQkFDQyw0RUFBQ04sMERBQU1BO3NCQUNMLDRFQUFDTTtnQkFBSUMsV0FBVTswQkFDWkYsTUFBTUcsR0FBRyxDQUFDO3dCQUFDLEVBQUVDLElBQUksRUFBRTt5Q0FDbEIsOERBQUNSLHdFQUFXQTt3QkFFVlMsT0FBT0QsS0FBS0MsS0FBSzt3QkFDakJDLFlBQVlGLEtBQUtHLGFBQWE7d0JBQzlCQyxNQUFNSixLQUFLSSxJQUFJO3dCQUNmQyxTQUFTTCxLQUFLSyxPQUFPO3dCQUNyQkMsVUFBVU4sS0FBS08sVUFBVSxDQUFDQyxLQUFLLENBQUNULEdBQUcsQ0FDakMsQ0FBQ08sV0FBYUEsU0FBU0csSUFBSTt1QkFOeEJULEtBQUtJLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWM1QjtLQXZCd0JYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2lzc3Vlcy50c3g/MTdjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUERGcyB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5pbXBvcnQgUG9zdFByZXZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9yZS1zdG9yaWVzLXByZXZpZXdcIjtcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cyh7IGFsbFBvc3RzOiB7IGVkZ2VzIH0gfSkge1xuICBjb25zdCBQb3N0cyA9IGVkZ2VzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Z3JpZCBzbTpncmlkLWNvbHMtNCBzbTpnYXAteC01IHNtOmdhcC15LTVcIj5cbiAgICAgICAgICB7UG9zdHMubWFwKCh7IG5vZGUgfSkgPT4gKFxuICAgICAgICAgICAgPFBvc3RQcmV2aWV3XG4gICAgICAgICAgICAgIGtleT17bm9kZS5zbHVnfVxuICAgICAgICAgICAgICB0aXRsZT17bm9kZS50aXRsZX1cbiAgICAgICAgICAgICAgY292ZXJJbWFnZT17bm9kZS5mZWF0dXJlZEltYWdlfVxuICAgICAgICAgICAgICBzbHVnPXtub2RlLnNsdWd9XG4gICAgICAgICAgICAgIGV4Y2VycHQ9e25vZGUuZXhjZXJwdH1cbiAgICAgICAgICAgICAgY2F0ZWdvcnk9e25vZGUuY2F0ZWdvcmllcy5ub2Rlcy5tYXAoXG4gICAgICAgICAgICAgICAgKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5uYW1lXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHt9KSA9PiB7XG4gIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUERGcygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFsbFBvc3RzIH0sXG4gICAgcmV2YWxpZGF0ZTogMTAsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIkxheW91dCIsIlBvc3RQcmV2aWV3IiwiTmV3cyIsImFsbFBvc3RzIiwiZWRnZXMiLCJQb3N0cyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm5vZGUiLCJ0aXRsZSIsImNvdmVySW1hZ2UiLCJmZWF0dXJlZEltYWdlIiwic2x1ZyIsImV4Y2VycHQiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJub2RlcyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/issues.tsx\n"));

/***/ })

});