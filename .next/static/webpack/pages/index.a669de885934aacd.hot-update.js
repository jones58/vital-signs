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

/***/ "./components/more-stories.tsx":
/*!*************************************!*\
  !*** ./components/more-stories.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MoreStories; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-preview */ \"./components/post-preview.tsx\");\n\n\nfunction MoreStories(param) {\n    let { posts } = param;\n    const limitedPosts = posts.slice(0, 4);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-1 sm:grid-cols-2 sm:gap-x-5 gap-y-5\",\n            children: limitedPosts.map((param)=>{\n                let { node } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_post_preview__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    title: node.title,\n                    coverImage: node.featuredImage,\n                    slug: node.slug,\n                    excerpt: node.excerpt,\n                    category: heroPost.categories.nodes.map((category)=>category.name)\n                }, node.slug, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/more-stories.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 11\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/more-stories.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/more-stories.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = MoreStories;\nvar _c;\n$RefreshReg$(_c, \"MoreStories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vcmUtc3Rvcmllcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFFMUIsU0FBU0MsWUFBWSxLQUFTO1FBQVQsRUFBRUMsS0FBSyxFQUFFLEdBQVQ7SUFDbEMsTUFBTUMsZUFBZUQsTUFBTUUsS0FBSyxDQUFDLEdBQUc7SUFFcEMscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNaSixhQUFhSyxHQUFHLENBQUM7b0JBQUMsRUFBRUMsSUFBSSxFQUFFO3FDQUN6Qiw4REFBQ1QscURBQVdBO29CQUVWVSxPQUFPRCxLQUFLQyxLQUFLO29CQUNqQkMsWUFBWUYsS0FBS0csYUFBYTtvQkFDOUJDLE1BQU1KLEtBQUtJLElBQUk7b0JBQ2ZDLFNBQVNMLEtBQUtLLE9BQU87b0JBQ3JCQyxVQUFVQyxTQUFTQyxVQUFVLENBQUNDLEtBQUssQ0FBQ1YsR0FBRyxDQUNyQyxDQUFDTyxXQUFhQSxTQUFTSSxJQUFJO21CQU54QlYsS0FBS0ksSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQWExQjtLQXJCd0JaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW9yZS1zdG9yaWVzLnRzeD8zOGY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3N0UHJldmlldyBmcm9tIFwiLi9wb3N0LXByZXZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9yZVN0b3JpZXMoeyBwb3N0cyB9KSB7XG4gIGNvbnN0IGxpbWl0ZWRQb3N0cyA9IHBvc3RzLnNsaWNlKDAsIDQpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgc206Z2FwLXgtNSBnYXAteS01XCI+XG4gICAgICAgIHtsaW1pdGVkUG9zdHMubWFwKCh7IG5vZGUgfSkgPT4gKFxuICAgICAgICAgIDxQb3N0UHJldmlld1xuICAgICAgICAgICAga2V5PXtub2RlLnNsdWd9XG4gICAgICAgICAgICB0aXRsZT17bm9kZS50aXRsZX1cbiAgICAgICAgICAgIGNvdmVySW1hZ2U9e25vZGUuZmVhdHVyZWRJbWFnZX1cbiAgICAgICAgICAgIHNsdWc9e25vZGUuc2x1Z31cbiAgICAgICAgICAgIGV4Y2VycHQ9e25vZGUuZXhjZXJwdH1cbiAgICAgICAgICAgIGNhdGVnb3J5PXtoZXJvUG9zdC5jYXRlZ29yaWVzLm5vZGVzLm1hcChcbiAgICAgICAgICAgICAgKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5uYW1lXG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlBvc3RQcmV2aWV3IiwiTW9yZVN0b3JpZXMiLCJwb3N0cyIsImxpbWl0ZWRQb3N0cyIsInNsaWNlIiwic2VjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm5vZGUiLCJ0aXRsZSIsImNvdmVySW1hZ2UiLCJmZWF0dXJlZEltYWdlIiwic2x1ZyIsImV4Y2VycHQiLCJjYXRlZ29yeSIsImhlcm9Qb3N0IiwiY2F0ZWdvcmllcyIsIm5vZGVzIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/more-stories.tsx\n"));

/***/ })

});