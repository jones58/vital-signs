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

/***/ "./pages/posts/[slug].tsx":
/*!********************************!*\
  !*** ./pages/posts/[slug].tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_post_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/post-body */ \"./components/post-body.tsx\");\n/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/more-stories */ \"./components/more-stories.tsx\");\n/* harmony import */ var _components_post_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/post-header */ \"./components/post-header.tsx\");\n/* harmony import */ var _components_section_separator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/section-separator */ \"./components/section-separator.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_post_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/post-title */ \"./components/post-title.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(param) {\n    let { post, posts, preview } = param;\n    var _post_featuredImage;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const morePosts = posts === null || posts === void 0 ? void 0 : posts.edges;\n    if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.slug)) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_2___default()), {\n            statusCode: 404\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n            lineNumber: 21,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        children: router.isFallback ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_title__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            children: \"Loading…\"\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                    children: \"\".concat(post.title, \" | Vital Signs Magazine\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    property: \"og:image\",\n                                    content: (_post_featuredImage = post.featuredImage) === null || _post_featuredImage === void 0 ? void 0 : _post_featuredImage.node.sourceUrl\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            title: post.title,\n                            coverImage: post.featuredImage,\n                            date: post.date,\n                            author: post.author,\n                            categories: post.categories\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_body__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            content: post.content\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_separator__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, this),\n                morePosts.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    posts: morePosts\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 48,\n                    columnNumber: 36\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNMO0FBQ047QUFFcUI7QUFDTTtBQUNGO0FBQ1k7QUFDckI7QUFDTzs7QUFNckMsU0FBU1MsS0FBSyxLQUF3QjtRQUF4QixFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFLEdBQXhCO1FBbUJKRjs7SUFsQnZCLE1BQU1HLFNBQVNiLHNEQUFTQTtJQUN4QixNQUFNYyxZQUFZSCxrQkFBQUEsNEJBQUFBLE1BQU9JLEtBQUs7SUFFOUIsSUFBSSxDQUFDRixPQUFPRyxVQUFVLElBQUksRUFBQ04saUJBQUFBLDJCQUFBQSxLQUFNTyxJQUFJLEdBQUU7UUFDckMscUJBQU8sOERBQUNoQixtREFBU0E7WUFBQ2lCLFlBQVk7Ozs7OztJQUNoQztJQUVBLHFCQUNFLDhEQUFDWCwwREFBTUE7a0JBQ0pNLE9BQU9HLFVBQVUsaUJBQ2hCLDhEQUFDUiw4REFBU0E7c0JBQUM7Ozs7O2lDQUVYOzs4QkFDRSw4REFBQ1c7O3NDQUNDLDhEQUFDakIsa0RBQUlBOzs4Q0FDSCw4REFBQ2tCOzhDQUFPLEdBQWMsT0FBWFYsS0FBS1UsS0FBSyxFQUFDOzs7Ozs7OENBQ3RCLDhEQUFDQztvQ0FDQ0MsVUFBUztvQ0FDVEMsT0FBTyxHQUFFYixzQkFBQUEsS0FBS2MsYUFBYSxjQUFsQmQsMENBQUFBLG9CQUFvQmUsSUFBSSxDQUFDQyxTQUFTOzs7Ozs7Ozs7Ozs7c0NBRy9DLDhEQUFDckIsK0RBQVVBOzRCQUNUZSxPQUFPVixLQUFLVSxLQUFLOzRCQUNqQk8sWUFBWWpCLEtBQUtjLGFBQWE7NEJBQzlCSSxNQUFNbEIsS0FBS2tCLElBQUk7NEJBQ2ZDLFFBQVFuQixLQUFLbUIsTUFBTTs0QkFDbkJDLFlBQVlwQixLQUFLb0IsVUFBVTs7Ozs7O3NDQUU3Qiw4REFBQzNCLDZEQUFRQTs0QkFBQ29CLFNBQVNiLEtBQUthLE9BQU87Ozs7Ozs7Ozs7Ozs4QkFFakMsOERBQUNqQixxRUFBZ0JBOzs7OztnQkFDaEJRLFVBQVVpQixNQUFNLEdBQUcsbUJBQUssOERBQUMzQixnRUFBV0E7b0JBQUNPLE9BQU9HOzs7Ozs7Ozs7Ozs7O0FBS3ZEO0dBckN3Qkw7O1FBQ1BULGtEQUFTQTs7O0tBREZTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tzbHVnXS50c3g/MWJlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSBcIm5leHQvZXJyb3JcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUG9zdEJvZHkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdC1ib2R5XCI7XG5pbXBvcnQgTW9yZVN0b3JpZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9yZS1zdG9yaWVzXCI7XG5pbXBvcnQgUG9zdEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0LWhlYWRlclwiO1xuaW1wb3J0IFNlY3Rpb25TZXBhcmF0b3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbi1zZXBhcmF0b3JcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgUG9zdFRpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3QtdGl0bGVcIjtcbmltcG9ydCB7XG4gIGdldEFsbFBvc3RzV2l0aFNsdWcsXG4gIGdldFBvc3RBbmRNb3JlUG9zdHMsXG59IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0LCBwb3N0cywgcHJldmlldyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBtb3JlUG9zdHMgPSBwb3N0cz8uZWRnZXM7XG5cbiAgaWYgKCFyb3V0ZXIuaXNGYWxsYmFjayAmJiAhcG9zdD8uc2x1Zykge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7cm91dGVyLmlzRmFsbGJhY2sgPyAoXG4gICAgICAgIDxQb3N0VGl0bGU+TG9hZGluZ+KApjwvUG9zdFRpdGxlPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICA8dGl0bGU+e2Ake3Bvc3QudGl0bGV9IHwgVml0YWwgU2lnbnMgTWFnYXppbmVgfTwvdGl0bGU+XG4gICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgICAgICAgY29udGVudD17cG9zdC5mZWF0dXJlZEltYWdlPy5ub2RlLnNvdXJjZVVybH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxQb3N0SGVhZGVyXG4gICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICBjb3ZlckltYWdlPXtwb3N0LmZlYXR1cmVkSW1hZ2V9XG4gICAgICAgICAgICAgIGRhdGU9e3Bvc3QuZGF0ZX1cbiAgICAgICAgICAgICAgYXV0aG9yPXtwb3N0LmF1dGhvcn1cbiAgICAgICAgICAgICAgY2F0ZWdvcmllcz17cG9zdC5jYXRlZ29yaWVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQb3N0Qm9keSBjb250ZW50PXtwb3N0LmNvbnRlbnR9IC8+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDxTZWN0aW9uU2VwYXJhdG9yIC8+XG4gICAgICAgICAge21vcmVQb3N0cy5sZW5ndGggPiAwICYmIDxNb3JlU3RvcmllcyBwb3N0cz17bW9yZVBvc3RzfSAvPn1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHtcbiAgcGFyYW1zLFxuICBwcmV2aWV3ID0gZmFsc2UsXG4gIHByZXZpZXdEYXRhLFxufSkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UG9zdEFuZE1vcmVQb3N0cyhcbiAgICBwYXJhbXM/LnNsdWcsXG4gICAgcHJldmlldyxcbiAgICBwcmV2aWV3RGF0YVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByZXZpZXcsXG4gICAgICBwb3N0OiBkYXRhLnBvc3QsXG4gICAgICBwb3N0czogZGF0YS5wb3N0cyxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEwLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0c1dpdGhTbHVnKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczpcbiAgICAgIGFsbFBvc3RzLmVkZ2VzLm1hcCgoeyBub2RlIH0pID0+IGAvcG9zdHMvJHtub2RlLnNsdWd9YCkgfHwgW10sXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkVycm9yUGFnZSIsIkhlYWQiLCJQb3N0Qm9keSIsIk1vcmVTdG9yaWVzIiwiUG9zdEhlYWRlciIsIlNlY3Rpb25TZXBhcmF0b3IiLCJMYXlvdXQiLCJQb3N0VGl0bGUiLCJQb3N0IiwicG9zdCIsInBvc3RzIiwicHJldmlldyIsInJvdXRlciIsIm1vcmVQb3N0cyIsImVkZ2VzIiwiaXNGYWxsYmFjayIsInNsdWciLCJzdGF0dXNDb2RlIiwiYXJ0aWNsZSIsInRpdGxlIiwibWV0YSIsInByb3BlcnR5IiwiY29udGVudCIsImZlYXR1cmVkSW1hZ2UiLCJub2RlIiwic291cmNlVXJsIiwiY292ZXJJbWFnZSIsImRhdGUiLCJhdXRob3IiLCJjYXRlZ29yaWVzIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[slug].tsx\n"));

/***/ })

});