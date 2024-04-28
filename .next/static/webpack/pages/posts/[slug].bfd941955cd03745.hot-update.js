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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostCoverImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction PostCoverImage(param) {\n    let { title, postCoverImage, slug } = param;\n    const image = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        fill: true,\n        alt: title,\n        src: postCoverImage === null || postCoverImage === void 0 ? void 0 : postCoverImage.node.sourceUrl,\n        className: \"object-cover object-centre\"\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-cover-image.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-row flex justify-center sm:justify-end items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative min-w-[80vw] min-h-[30vh] sm:min-w-[40vw] sm:min-h-[25vh]\",\n            children: slug ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/posts/\".concat(slug),\n                \"aria-label\": title,\n                children: image\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-cover-image.tsx\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, this) : image\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-cover-image.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-cover-image.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_c = PostCoverImage;\nvar _c;\n$RefreshReg$(_c, \"PostCoverImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QtY292ZXItaW1hZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0Y7QUFZZCxTQUFTRSxlQUFlLEtBSS9CO1FBSitCLEVBQ3JDQyxLQUFLLEVBQ0xDLGNBQWMsRUFDZEMsSUFBSSxFQUNFLEdBSitCO0lBS3JDLE1BQU1DLHNCQUNKLDhEQUFDTixtREFBS0E7UUFDSk8sSUFBSTtRQUNKQyxLQUFLTDtRQUNMTSxHQUFHLEVBQUVMLDJCQUFBQSxxQ0FBQUEsZUFBZ0JNLElBQUksQ0FBQ0MsU0FBUztRQUNuQ0MsV0FBVTs7Ozs7O0lBR2QscUJBQ0UsOERBQUNDO1FBQUlELFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ1pQLHFCQUNDLDhEQUFDSixrREFBSUE7Z0JBQUNhLE1BQU0sVUFBZSxPQUFMVDtnQkFBUVUsY0FBWVo7MEJBQ3ZDRzs7Ozs7dUJBR0hBOzs7Ozs7Ozs7OztBQUtWO0tBMUJ3QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LWNvdmVyLWltYWdlLnRzeD8wMjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBwb3N0Q292ZXJJbWFnZToge1xuICAgIG5vZGU6IHtcbiAgICAgIHNvdXJjZVVybDogc3RyaW5nO1xuICAgIH07XG4gIH07XG4gIHNsdWc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RDb3ZlckltYWdlKHtcbiAgdGl0bGUsXG4gIHBvc3RDb3ZlckltYWdlLFxuICBzbHVnLFxufTogUHJvcHMpIHtcbiAgY29uc3QgaW1hZ2UgPSAoXG4gICAgPEltYWdlXG4gICAgICBmaWxsXG4gICAgICBhbHQ9e3RpdGxlfVxuICAgICAgc3JjPXtwb3N0Q292ZXJJbWFnZT8ubm9kZS5zb3VyY2VVcmx9XG4gICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRyZVwiXG4gICAgLz5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtcm93IGZsZXgganVzdGlmeS1jZW50ZXIgc206anVzdGlmeS1lbmQgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi13LVs4MHZ3XSBtaW4taC1bMzB2aF0gc206bWluLXctWzQwdnddIHNtOm1pbi1oLVsyNXZoXVwiPlxuICAgICAgICB7c2x1ZyA/IChcbiAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7c2x1Z31gfSBhcmlhLWxhYmVsPXt0aXRsZX0+XG4gICAgICAgICAgICB7aW1hZ2V9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGltYWdlXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJQb3N0Q292ZXJJbWFnZSIsInRpdGxlIiwicG9zdENvdmVySW1hZ2UiLCJzbHVnIiwiaW1hZ2UiLCJmaWxsIiwiYWx0Iiwic3JjIiwibm9kZSIsInNvdXJjZVVybCIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJhcmlhLWxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/post-cover-image.tsx\n"));

/***/ })

});