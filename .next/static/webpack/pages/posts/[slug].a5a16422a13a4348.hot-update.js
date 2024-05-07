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

/***/ "./components/post-body.tsx":
/*!**********************************!*\
  !*** ./components/post-body.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostBody; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post_body_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-body.module.css */ \"./components/post-body.module.css\");\n/* harmony import */ var _post_body_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_post_body_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction PostBody(param) {\n    let { content } = param;\n    const embedPDFLink = (link)=>{\n        if (link.endsWith(\".pdf\")) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"embed\", {\n                src: link,\n                type: \"application/pdf\",\n                width: \"100%\",\n                height: \"600px\"\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-body.tsx\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this);\n        }\n        return {\n            link\n        };\n    };\n    const renderContent = ()=>{\n        const paragraphs = content.split(\"http\");\n        return paragraphs.map((paragraph, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: embedPDFLink(paragraph)\n            }, index, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-body.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-2xl mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_post_body_module_css__WEBPACK_IMPORTED_MODULE_1___default().content),\n            children: renderContent()\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-body.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-body.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c = PostBody;\nvar _c;\n$RefreshReg$(_c, \"PostBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QtYm9keS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRTdCLFNBQVNDLFNBQVMsS0FBVztRQUFYLEVBQUVDLE9BQU8sRUFBRSxHQUFYO0lBQy9CLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDcEIsSUFBSUEsS0FBS0MsUUFBUSxDQUFDLFNBQVM7WUFDekIscUJBQ0UsOERBQUNDO2dCQUNDQyxLQUFLSDtnQkFDTEksTUFBSztnQkFDTEMsT0FBTTtnQkFDTkMsUUFBTzs7Ozs7O1FBR2I7UUFDQSxPQUFPO1lBQUVOO1FBQUs7SUFDaEI7SUFFQSxNQUFNTyxnQkFBZ0I7UUFDcEIsTUFBTUMsYUFBYVYsUUFBUVcsS0FBSyxDQUFDO1FBQ2pDLE9BQU9ELFdBQVdFLEdBQUcsQ0FBQyxDQUFDQyxXQUFXQyxzQkFDaEMsOERBQUNDOzBCQUFlZCxhQUFhWTtlQUFyQkM7Ozs7O0lBRVo7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBV25CLHNFQUFpQjtzQkFBR1c7Ozs7Ozs7Ozs7O0FBRzFDO0tBM0J3QlYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LWJvZHkudHN4P2ZjMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wb3N0LWJvZHkubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0Qm9keSh7IGNvbnRlbnQgfSkge1xuICBjb25zdCBlbWJlZFBERkxpbmsgPSAobGluaykgPT4ge1xuICAgIGlmIChsaW5rLmVuZHNXaXRoKFwiLnBkZlwiKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGVtYmVkXG4gICAgICAgICAgc3JjPXtsaW5rfVxuICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9wZGZcIlxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgaGVpZ2h0PVwiNjAwcHhcIlxuICAgICAgICA+PC9lbWJlZD5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB7IGxpbmsgfTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFncmFwaHMgPSBjb250ZW50LnNwbGl0KFwiaHR0cFwiKTtcbiAgICByZXR1cm4gcGFyYWdyYXBocy5tYXAoKHBhcmFncmFwaCwgaW5kZXgpID0+IChcbiAgICAgIDxwIGtleT17aW5kZXh9PntlbWJlZFBERkxpbmsocGFyYWdyYXBoKX08L3A+XG4gICAgKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBteC1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiY29udGVudFwiXX0+e3JlbmRlckNvbnRlbnQoKX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJQb3N0Qm9keSIsImNvbnRlbnQiLCJlbWJlZFBERkxpbmsiLCJsaW5rIiwiZW5kc1dpdGgiLCJlbWJlZCIsInNyYyIsInR5cGUiLCJ3aWR0aCIsImhlaWdodCIsInJlbmRlckNvbnRlbnQiLCJwYXJhZ3JhcGhzIiwic3BsaXQiLCJtYXAiLCJwYXJhZ3JhcGgiLCJpbmRleCIsInAiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/post-body.tsx\n"));

/***/ })

});