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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/more-stories */ \"./components/more-stories.tsx\");\n/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hero-post */ \"./components/hero-post.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n\n\n\n\nvar __N_SSG = true;\nfunction Index(param) {\n    let { allPosts: { edges }, preview } = param;\n    var _edges_;\n    const heroPost = (_edges_ = edges[0]) === null || _edges_ === void 0 ? void 0 : _edges_.node;\n    const morePosts = edges.slice(1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-2 gap-2\",\n            children: [\n                heroPost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: heroPost.title,\n                    heroImage: heroPost.featuredImage,\n                    slug: heroPost.slug,\n                    excerpt: heroPost.excerpt,\n                    category: heroPost.categories.node\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, this),\n                morePosts.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    posts: morePosts\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 34\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/index.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDcUQ7QUFDTjtBQUNMOztBQUczQixTQUFTRyxNQUFNLEtBQWdDO1FBQWhDLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFLEVBQUVDLE9BQU8sRUFBRSxHQUFoQztRQUNYRDtJQUFqQixNQUFNRSxZQUFXRixVQUFBQSxLQUFLLENBQUMsRUFBRSxjQUFSQSw4QkFBQUEsUUFBVUcsSUFBSTtJQUMvQixNQUFNQyxZQUFZSixNQUFNSyxLQUFLLENBQUM7SUFFOUIscUJBQ0UsOERBQUNSLDBEQUFNQTtrQkFDTCw0RUFBQ1M7WUFBSUMsV0FBVTs7Z0JBQ1pMLDBCQUNDLDhEQUFDTiw2REFBUUE7b0JBQ1BZLE9BQU9OLFNBQVNNLEtBQUs7b0JBQ3JCQyxXQUFXUCxTQUFTUSxhQUFhO29CQUNqQ0MsTUFBTVQsU0FBU1MsSUFBSTtvQkFDbkJDLFNBQVNWLFNBQVNVLE9BQU87b0JBQ3pCQyxVQUFVWCxTQUFTWSxVQUFVLENBQUNYLElBQUk7Ozs7OztnQkFHckNDLFVBQVVXLE1BQU0sR0FBRyxtQkFBSyw4REFBQ3BCLGdFQUFXQTtvQkFBQ3FCLE9BQU9aOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlyRDtLQXBCd0JOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBNb3JlU3RvcmllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9tb3JlLXN0b3JpZXNcIjtcbmltcG9ydCBIZXJvUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9oZXJvLXBvc3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyBnZXRBbGxQb3N0c0ZvckhvbWUgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7IGFsbFBvc3RzOiB7IGVkZ2VzIH0sIHByZXZpZXcgfSkge1xuICBjb25zdCBoZXJvUG9zdCA9IGVkZ2VzWzBdPy5ub2RlO1xuICBjb25zdCBtb3JlUG9zdHMgPSBlZGdlcy5zbGljZSgxKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTJcIj5cbiAgICAgICAge2hlcm9Qb3N0ICYmIChcbiAgICAgICAgICA8SGVyb1Bvc3RcbiAgICAgICAgICAgIHRpdGxlPXtoZXJvUG9zdC50aXRsZX1cbiAgICAgICAgICAgIGhlcm9JbWFnZT17aGVyb1Bvc3QuZmVhdHVyZWRJbWFnZX1cbiAgICAgICAgICAgIHNsdWc9e2hlcm9Qb3N0LnNsdWd9XG4gICAgICAgICAgICBleGNlcnB0PXtoZXJvUG9zdC5leGNlcnB0fVxuICAgICAgICAgICAgY2F0ZWdvcnk9e2hlcm9Qb3N0LmNhdGVnb3JpZXMubm9kZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7bW9yZVBvc3RzLmxlbmd0aCA+IDAgJiYgPE1vcmVTdG9yaWVzIHBvc3RzPXttb3JlUG9zdHN9IC8+fVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoe1xuICBwcmV2aWV3ID0gZmFsc2UsXG59KSA9PiB7XG4gIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHNGb3JIb21lKHByZXZpZXcpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMsIHByZXZpZXcgfSxcbiAgICByZXZhbGlkYXRlOiAxMCxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiTW9yZVN0b3JpZXMiLCJIZXJvUG9zdCIsIkxheW91dCIsIkluZGV4IiwiYWxsUG9zdHMiLCJlZGdlcyIsInByZXZpZXciLCJoZXJvUG9zdCIsIm5vZGUiLCJtb3JlUG9zdHMiLCJzbGljZSIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiaGVyb0ltYWdlIiwiZmVhdHVyZWRJbWFnZSIsInNsdWciLCJleGNlcnB0IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwibGVuZ3RoIiwicG9zdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});