"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/categories/[category]", {
  /***/ "./pages/categories/[category].tsx":
    /*!*****************************************!*\
  !*** ./pages/categories/[category].tsx ***!
  \*****************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   "default": function() { return /* binding */ CategoryPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.tsx");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction CategoryPage(param) {\n    let { category, posts } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    if (router.isFallback) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n            children: "Loading..."\n        }, void 0, false, {\n            fileName: "/Users/coding-2/Documents/projects/vital-signs/pages/categories/[category].tsx",\n            lineNumber: 11,\n            columnNumber: 12\n        }, this);\n    }\n    if (!category) {\n        (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n            router.push("/404"); // Redirect to 404 page if category not found\n        }, []);\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {\n                    children: "".concat(category.node.name, " | Vital Signs Magazine")\n                }, void 0, false, {\n                    fileName: "/Users/coding-2/Documents/projects/vital-signs/pages/categories/[category].tsx",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: "/Users/coding-2/Documents/projects/vital-signs/pages/categories/[category].tsx",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {\n                children: category.node.name\n            }, void 0, false, {\n                fileName: "/Users/coding-2/Documents/projects/vital-signs/pages/categories/[category].tsx",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "/Users/coding-2/Documents/projects/vital-signs/pages/categories/[category].tsx",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(CategoryPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = CategoryPage;\nvar _c;\n$RefreshReg$(_c, "CategoryPage");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yaWVzL1tjYXRlZ29yeV0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDWDtBQUVnQjtBQUVYOztBQUVuQixTQUFTSSxhQUFhLEtBQW1CO1FBQW5CLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFLEdBQW5COztJQUNuQyxNQUFNQyxTQUFTUCxzREFBU0E7SUFDeEIsSUFBSU8sT0FBT0MsVUFBVSxFQUFFO1FBQ3JCLHFCQUFPLDhEQUFDQztzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxJQUFJLENBQUNKLFVBQVU7UUFDYkYsZ0RBQVNBLENBQUM7WUFDUkksT0FBT0csSUFBSSxDQUFDLFNBQVMsNkNBQTZDO1FBQ3BFLEdBQUcsRUFBRTtRQUNMLE9BQU87SUFDVDtJQUVBLHFCQUNFLDhEQUFDUiwwREFBTUE7OzBCQUNMLDhEQUFDRCxrREFBSUE7MEJBQ0gsNEVBQUNVOzhCQUFPLEdBQXNCLE9BQW5CTixTQUFTTyxJQUFJLENBQUNDLElBQUksRUFBQzs7Ozs7Ozs7Ozs7MEJBRWhDLDhEQUFDQzswQkFBSVQsU0FBU08sSUFBSSxDQUFDQyxJQUFJOzs7Ozs7Ozs7Ozs7QUFJN0I7R0F0QndCVDs7UUFDUEosa0RBQVNBOzs7S0FERkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcmllcy9bY2F0ZWdvcnldLnRzeD83MzIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzLCBnZXRQb3N0c1dpdGhDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlQYWdlKHsgY2F0ZWdvcnksIHBvc3RzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICBpZiAoIWNhdGVnb3J5KSB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKFwiLzQwNFwiKTsgLy8gUmVkaXJlY3QgdG8gNDA0IHBhZ2UgaWYgY2F0ZWdvcnkgbm90IGZvdW5kXG4gICAgfSwgW10pO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57YCR7Y2F0ZWdvcnkubm9kZS5uYW1lfSB8IFZpdGFsIFNpZ25zIE1hZ2F6aW5lYH08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxPntjYXRlZ29yeS5ub2RlLm5hbWV9PC9oMT5cbiAgICAgIHsvKiBBZGQgcG9zdHMgdW5kZXIgdGhlIGNhdGVnb3J5ICovfVxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0UG9zdHNXaXRoQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgICBwb3N0czogcG9zdHMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxMCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBnZXRDYXRlZ29yaWVzKCk7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGNhdGVnb3JpZXMubWFwKCh7IGNhdGVnb3J5IH0pID0+ICh7XG4gICAgICBwYXJhbXM6IHsgY2F0ZWdvcnlOYW1lOiBjYXRlZ29yeSB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiSGVhZCIsIkxheW91dCIsInVzZUVmZmVjdCIsIkNhdGVnb3J5UGFnZSIsImNhdGVnb3J5IiwicG9zdHMiLCJyb3V0ZXIiLCJpc0ZhbGxiYWNrIiwiZGl2IiwicHVzaCIsInRpdGxlIiwibm9kZSIsIm5hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/categories/[category].tsx\n'
        )
      );

      /***/
    },
});
