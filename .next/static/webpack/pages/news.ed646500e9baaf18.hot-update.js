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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_more_stories_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/more-stories-preview */ \"./components/more-stories-preview.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSG = true;\nfunction News(param) {\n    let { allPosts: { edges }, Categories } = param;\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const Posts = edges;\n    const filteredPosts = selectedCategory ? Posts.filter((param)=>{\n        let { node } = param;\n        return node.categories.nodes.some((category)=>category.name === selectedCategory);\n    }) : Posts;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { category } = router.query;\n        if (category) {\n            setSelectedCategory(category);\n        }\n    }, [\n        router.query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-bold font-sans text-xl flex flex-col pb-10 space-y-4 sm:space-y-0 sm:flex-row justify-between flex-wrap\",\n                    children: Categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-xl \".concat(selectedCategory === category.node.name ? \"text-customRed-800\" : \"\"),\n                            onClick: ()=>setSelectedCategory(category.node.name),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hover:text-customRed-950 active:text-customRed-500\",\n                                children: category.node.name\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this)\n                        }, category.node.name, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:grid sm:grid-cols-4 sm:gap-x-5 sm:gap-y-5\",\n                    children: filteredPosts.map((param)=>{\n                        let { node } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories_preview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: node.title,\n                            coverImage: node.featuredImage,\n                            slug: node.slug,\n                            excerpt: node.excerpt,\n                            category: node.categories.nodes.map((category)=>category.name)\n                        }, node.slug, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/news.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(News, \"V4hUwV91xsiF4aCzoHEGLQ30o6I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDUztBQUVtQjtBQUVyQjtBQUNOOztBQUVuQixTQUFTSyxLQUFLLEtBQW1DO1FBQW5DLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFLEVBQUVDLFVBQVUsRUFBRSxHQUFuQzs7SUFDM0IsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHViwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNVyxRQUFRSjtJQUNkLE1BQU1LLGdCQUFnQkgsbUJBQ2xCRSxNQUFNRSxNQUFNLENBQUM7WUFBQyxFQUFFQyxJQUFJLEVBQUU7ZUFDcEJBLEtBQUtDLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQ3hCLENBQUNDLFdBQWFBLFNBQVNDLElBQUksS0FBS1Y7U0FHcENFO0lBRUosTUFBTVMsU0FBU2pCLHNEQUFTQTtJQUV4QkMsZ0RBQVNBLENBQUM7UUFDUixNQUFNLEVBQUVjLFFBQVEsRUFBRSxHQUFHRSxPQUFPQyxLQUFLO1FBQ2pDLElBQUlILFVBQVU7WUFDWlIsb0JBQW9CUTtRQUN0QjtJQUNGLEdBQUc7UUFBQ0UsT0FBT0MsS0FBSztLQUFDO0lBRWpCLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ3JCLDBEQUFNQTs7OEJBQ0wsOERBQUNxQjtvQkFBSUMsV0FBVTs4QkFDWmYsV0FBV2dCLEdBQUcsQ0FBQyxDQUFDTix5QkFDZiw4REFBQ087NEJBRUNGLFdBQVcsV0FJVixPQUhDZCxxQkFBcUJTLFNBQVNKLElBQUksQ0FBQ0ssSUFBSSxHQUNuQyx1QkFDQTs0QkFFTk8sU0FBUyxJQUFNaEIsb0JBQW9CUSxTQUFTSixJQUFJLENBQUNLLElBQUk7c0NBRXJELDRFQUFDRztnQ0FBSUMsV0FBVTswQ0FDWkwsU0FBU0osSUFBSSxDQUFDSyxJQUFJOzs7Ozs7MkJBVGhCRCxTQUFTSixJQUFJLENBQUNLLElBQUk7Ozs7Ozs7Ozs7OEJBYzdCLDhEQUFDRztvQkFBSUMsV0FBVTs4QkFDWlgsY0FBY1ksR0FBRyxDQUFDOzRCQUFDLEVBQUVWLElBQUksRUFBRTs2Q0FDMUIsOERBQUNaLHdFQUFXQTs0QkFFVnlCLE9BQU9iLEtBQUthLEtBQUs7NEJBQ2pCQyxZQUFZZCxLQUFLZSxhQUFhOzRCQUM5QkMsTUFBTWhCLEtBQUtnQixJQUFJOzRCQUNmQyxTQUFTakIsS0FBS2lCLE9BQU87NEJBQ3JCYixVQUFVSixLQUFLQyxVQUFVLENBQUNDLEtBQUssQ0FBQ1EsR0FBRyxDQUNqQyxDQUFDTixXQUFhQSxTQUFTQyxJQUFJOzJCQU54QkwsS0FBS2dCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjNUI7R0F6RHdCekI7O1FBV1BGLGtEQUFTQTs7O0tBWEZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld3MudHN4PzAyOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyBnZXRBbGxQb3N0c0ZvckhvbWUsIGdldENhdGVnb3JpZXMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IFBvc3RQcmV2aWV3IGZyb20gXCIuLi9jb21wb25lbnRzL21vcmUtc3Rvcmllcy1wcmV2aWV3XCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzKHsgYWxsUG9zdHM6IHsgZWRnZXMgfSwgQ2F0ZWdvcmllcyB9KSB7XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBQb3N0cyA9IGVkZ2VzO1xuICBjb25zdCBmaWx0ZXJlZFBvc3RzID0gc2VsZWN0ZWRDYXRlZ29yeVxuICAgID8gUG9zdHMuZmlsdGVyKCh7IG5vZGUgfSkgPT5cbiAgICAgICAgbm9kZS5jYXRlZ29yaWVzLm5vZGVzLnNvbWUoXG4gICAgICAgICAgKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5uYW1lID09PSBzZWxlY3RlZENhdGVnb3J5XG4gICAgICAgIClcbiAgICAgIClcbiAgICA6IFBvc3RzO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBjYXRlZ29yeSB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgIGlmIChjYXRlZ29yeSkge1xuICAgICAgc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgfVxuICB9LCBbcm91dGVyLnF1ZXJ5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgZm9udC1zYW5zIHRleHQteGwgZmxleCBmbGV4LWNvbCBwYi0xMCBzcGFjZS15LTQgc206c3BhY2UteS0wIHNtOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBmbGV4LXdyYXBcIj5cbiAgICAgICAgICB7Q2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGtleT17Y2F0ZWdvcnkubm9kZS5uYW1lfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXhsICR7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeSA9PT0gY2F0ZWdvcnkubm9kZS5uYW1lXG4gICAgICAgICAgICAgICAgICA/IFwidGV4dC1jdXN0b21SZWQtODAwXCJcbiAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXRlZ29yeS5ub2RlLm5hbWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtY3VzdG9tUmVkLTk1MCBhY3RpdmU6dGV4dC1jdXN0b21SZWQtNTAwXCI+XG4gICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5vZGUubmFtZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Z3JpZCBzbTpncmlkLWNvbHMtNCBzbTpnYXAteC01IHNtOmdhcC15LTVcIj5cbiAgICAgICAgICB7ZmlsdGVyZWRQb3N0cy5tYXAoKHsgbm9kZSB9KSA9PiAoXG4gICAgICAgICAgICA8UG9zdFByZXZpZXdcbiAgICAgICAgICAgICAga2V5PXtub2RlLnNsdWd9XG4gICAgICAgICAgICAgIHRpdGxlPXtub2RlLnRpdGxlfVxuICAgICAgICAgICAgICBjb3ZlckltYWdlPXtub2RlLmZlYXR1cmVkSW1hZ2V9XG4gICAgICAgICAgICAgIHNsdWc9e25vZGUuc2x1Z31cbiAgICAgICAgICAgICAgZXhjZXJwdD17bm9kZS5leGNlcnB0fVxuICAgICAgICAgICAgICBjYXRlZ29yeT17bm9kZS5jYXRlZ29yaWVzLm5vZGVzLm1hcChcbiAgICAgICAgICAgICAgICAoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm5hbWVcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoe30pID0+IHtcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0c0ZvckhvbWUoeyBwcmV2aWV3OiBmYWxzZSB9KTtcbiAgY29uc3QgQ2F0ZWdvcmllcyA9IGF3YWl0IGdldENhdGVnb3JpZXMoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBhbGxQb3N0cywgQ2F0ZWdvcmllcyB9LFxuICAgIHJldmFsaWRhdGU6IDEwLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxheW91dCIsIlBvc3RQcmV2aWV3IiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiTmV3cyIsImFsbFBvc3RzIiwiZWRnZXMiLCJDYXRlZ29yaWVzIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJQb3N0cyIsImZpbHRlcmVkUG9zdHMiLCJmaWx0ZXIiLCJub2RlIiwiY2F0ZWdvcmllcyIsIm5vZGVzIiwic29tZSIsImNhdGVnb3J5IiwibmFtZSIsInJvdXRlciIsInF1ZXJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiYnV0dG9uIiwib25DbGljayIsInRpdGxlIiwiY292ZXJJbWFnZSIsImZlYXR1cmVkSW1hZ2UiLCJzbHVnIiwiZXhjZXJwdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/news.tsx\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

});