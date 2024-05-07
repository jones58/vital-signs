"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news",{

/***/ "./pages/news.tsx":
/*!************************!*\
  !*** ./pages/news.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_more_stories_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/more-stories-preview */ \"./components/more-stories-preview.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSG = true;\nfunction News(param) {\n    let { allPosts: { edges }, Categories } = param;\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const Posts = edges;\n    const filteredPosts = selectedCategory ? Posts.filter((param)=>{\n        let { node } = param;\n        return node.categories.nodes.some((category)=>category.name === selectedCategory);\n    }) : Posts;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-bold font-sans text-xl flex flex-col pb-10 space-y-4 sm:space-y-0 sm:flex-row justify-between flex-wrap\",\n                    children: Categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-xl \".concat(selectedCategory === category.node.name ? \"text-customRed-800\" : \"\"),\n                            onClick: ()=>setSelectedCategory(category.node.name),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hover:text-customRed-950 active:text-customRed-500\",\n                                children: category.node.name\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this)\n                        }, category.node.name, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:grid sm:grid-cols-4 sm:gap-x-5 sm:gap-y-5\",\n                    children: filteredPosts.map((param)=>{\n                        let { node } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories_preview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: node.title,\n                            coverImage: node.featuredImage,\n                            slug: node.slug,\n                            excerpt: node.excerpt,\n                            category: node.categories.nodes.map((category)=>category.name)\n                        }, node.slug, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(News, \"RgHDLEuJ1Ja2GayX64Y/niiK+6s=\");\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ1M7QUFFbUI7O0FBRzlDLFNBQVNHLEtBQUssS0FBbUM7UUFBbkMsRUFBRUMsVUFBVSxFQUFFQyxLQUFLLEVBQUUsRUFBRUMsVUFBVSxFQUFFLEdBQW5DOztJQUMzQixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU1TLFFBQVFKO0lBQ2QsTUFBTUssZ0JBQWdCSCxtQkFDbEJFLE1BQU1FLE1BQU0sQ0FBQztZQUFDLEVBQUVDLElBQUksRUFBRTtlQUNwQkEsS0FBS0MsVUFBVSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FDeEIsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxLQUFLVjtTQUdwQ0U7SUFFSixxQkFDRSw4REFBQ1M7a0JBQ0MsNEVBQUNqQiwwREFBTUE7OzhCQUNMLDhEQUFDaUI7b0JBQUlDLFdBQVU7OEJBQ1piLFdBQVdjLEdBQUcsQ0FBQyxDQUFDSix5QkFDZiw4REFBQ0s7NEJBRUNGLFdBQVcsV0FJVixPQUhDWixxQkFBcUJTLFNBQVNKLElBQUksQ0FBQ0ssSUFBSSxHQUNuQyx1QkFDQTs0QkFFTkssU0FBUyxJQUFNZCxvQkFBb0JRLFNBQVNKLElBQUksQ0FBQ0ssSUFBSTtzQ0FFckQsNEVBQUNDO2dDQUFJQyxXQUFVOzBDQUNaSCxTQUFTSixJQUFJLENBQUNLLElBQUk7Ozs7OzsyQkFUaEJELFNBQVNKLElBQUksQ0FBQ0ssSUFBSTs7Ozs7Ozs7Ozs4QkFjN0IsOERBQUNDO29CQUFJQyxXQUFVOzhCQUNaVCxjQUFjVSxHQUFHLENBQUM7NEJBQUMsRUFBRVIsSUFBSSxFQUFFOzZDQUMxQiw4REFBQ1Ysd0VBQVdBOzRCQUVWcUIsT0FBT1gsS0FBS1csS0FBSzs0QkFDakJDLFlBQVlaLEtBQUthLGFBQWE7NEJBQzlCQyxNQUFNZCxLQUFLYyxJQUFJOzRCQUNmQyxTQUFTZixLQUFLZSxPQUFPOzRCQUNyQlgsVUFBVUosS0FBS0MsVUFBVSxDQUFDQyxLQUFLLENBQUNNLEdBQUcsQ0FDakMsQ0FBQ0osV0FBYUEsU0FBU0MsSUFBSTsyQkFOeEJMLEtBQUtjLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjNUI7R0FoRHdCdkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy50c3g/MDI5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzRm9ySG9tZSwgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5pbXBvcnQgUG9zdFByZXZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9yZS1zdG9yaWVzLXByZXZpZXdcIjtcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cyh7IGFsbFBvc3RzOiB7IGVkZ2VzIH0sIENhdGVnb3JpZXMgfSkge1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgUG9zdHMgPSBlZGdlcztcbiAgY29uc3QgZmlsdGVyZWRQb3N0cyA9IHNlbGVjdGVkQ2F0ZWdvcnlcbiAgICA/IFBvc3RzLmZpbHRlcigoeyBub2RlIH0pID0+XG4gICAgICAgIG5vZGUuY2F0ZWdvcmllcy5ub2Rlcy5zb21lKFxuICAgICAgICAgIChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkubmFtZSA9PT0gc2VsZWN0ZWRDYXRlZ29yeVxuICAgICAgICApXG4gICAgICApXG4gICAgOiBQb3N0cztcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBmb250LXNhbnMgdGV4dC14bCBmbGV4IGZsZXgtY29sIHBiLTEwIHNwYWNlLXktNCBzbTpzcGFjZS15LTAgc206ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGZsZXgtd3JhcFwiPlxuICAgICAgICAgIHtDYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeS5ub2RlLm5hbWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQteGwgJHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5ID09PSBjYXRlZ29yeS5ub2RlLm5hbWVcbiAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWN1c3RvbVJlZC04MDBcIlxuICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZENhdGVnb3J5KGNhdGVnb3J5Lm5vZGUubmFtZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1jdXN0b21SZWQtOTUwIGFjdGl2ZTp0ZXh0LWN1c3RvbVJlZC01MDBcIj5cbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubm9kZS5uYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpncmlkIHNtOmdyaWQtY29scy00IHNtOmdhcC14LTUgc206Z2FwLXktNVwiPlxuICAgICAgICAgIHtmaWx0ZXJlZFBvc3RzLm1hcCgoeyBub2RlIH0pID0+IChcbiAgICAgICAgICAgIDxQb3N0UHJldmlld1xuICAgICAgICAgICAgICBrZXk9e25vZGUuc2x1Z31cbiAgICAgICAgICAgICAgdGl0bGU9e25vZGUudGl0bGV9XG4gICAgICAgICAgICAgIGNvdmVySW1hZ2U9e25vZGUuZmVhdHVyZWRJbWFnZX1cbiAgICAgICAgICAgICAgc2x1Zz17bm9kZS5zbHVnfVxuICAgICAgICAgICAgICBleGNlcnB0PXtub2RlLmV4Y2VycHR9XG4gICAgICAgICAgICAgIGNhdGVnb3J5PXtub2RlLmNhdGVnb3JpZXMubm9kZXMubWFwKFxuICAgICAgICAgICAgICAgIChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkubmFtZVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7fSkgPT4ge1xuICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzRm9ySG9tZSh7IHByZXZpZXc6IGZhbHNlIH0pO1xuICBjb25zdCBDYXRlZ29yaWVzID0gYXdhaXQgZ2V0Q2F0ZWdvcmllcygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFsbFBvc3RzLCBDYXRlZ29yaWVzIH0sXG4gICAgcmV2YWxpZGF0ZTogMTAsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGF5b3V0IiwiUG9zdFByZXZpZXciLCJOZXdzIiwiYWxsUG9zdHMiLCJlZGdlcyIsIkNhdGVnb3JpZXMiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsIlBvc3RzIiwiZmlsdGVyZWRQb3N0cyIsImZpbHRlciIsIm5vZGUiLCJjYXRlZ29yaWVzIiwibm9kZXMiLCJzb21lIiwiY2F0ZWdvcnkiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiYnV0dG9uIiwib25DbGljayIsInRpdGxlIiwiY292ZXJJbWFnZSIsImZlYXR1cmVkSW1hZ2UiLCJzbHVnIiwiZXhjZXJwdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/news.tsx\n"));

/***/ })

});