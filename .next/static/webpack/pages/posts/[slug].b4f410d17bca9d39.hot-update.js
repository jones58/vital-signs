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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_post_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/post-body */ \"./components/post-body.tsx\");\n/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/more-stories */ \"./components/more-stories.tsx\");\n/* harmony import */ var _components_post_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/post-header */ \"./components/post-header.tsx\");\n/* harmony import */ var _components_section_separator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/section-separator */ \"./components/section-separator.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_post_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/post-title */ \"./components/post-title.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(param) {\n    let { post, posts } = param;\n    var _post_featuredImage;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const morePosts = posts === null || posts === void 0 ? void 0 : posts.edges;\n    if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.slug)) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_2___default()), {\n            statusCode: 404\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n            lineNumber: 21,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        children: router.isFallback ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_title__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            children: \"Loading…\"\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                    children: \"\".concat(post.title, \" | Vital Signs Magazine\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    property: \"og:image\",\n                                    content: (_post_featuredImage = post.featuredImage) === null || _post_featuredImage === void 0 ? void 0 : _post_featuredImage.node.sourceUrl\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            title: post.title,\n                            coverImage: post.featuredImage\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_body__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            content: post.content\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Share this:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://twitter.com/intent/tweet?text=\".concat(post.title, \"&url=https://www.vitalsignsmag.org/posts/\").concat(post.slug),\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            className: \"text-customRed-800 hover:text-customRed-950 active:text-customRed-500\",\n                            children: \"Twitter\"\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.facebook.com/sharer/sharer.php?u=https://www.vitalsignsmag.org/posts/\".concat(post.slug),\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            className: \"text-customRed-800 hover:text-customRed-950 active:text-customRed-500\",\n                            children: \"Facebook\"\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.linkedin.com/shareArticle?mini=true&url=https://www.vitalsignsmag.org/posts/\".concat(post.slug),\n                            children: \"LinkedIn\"\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_separator__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:grid sm:grid-cols-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"pb-6 sm:py-0 text-2xl\",\n                            children: \"Read Next: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this),\n                        morePosts.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            posts: morePosts\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 74,\n                            columnNumber: 38\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_separator__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNMO0FBQ047QUFFcUI7QUFDTTtBQUNGO0FBQ1k7QUFDckI7QUFDTzs7QUFNckMsU0FBU1MsS0FBSyxLQUFlO1FBQWYsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBZjtRQW1CSkQ7O0lBbEJ2QixNQUFNRSxTQUFTWixzREFBU0E7SUFDeEIsTUFBTWEsWUFBWUYsa0JBQUFBLDRCQUFBQSxNQUFPRyxLQUFLO0lBRTlCLElBQUksQ0FBQ0YsT0FBT0csVUFBVSxJQUFJLEVBQUNMLGlCQUFBQSwyQkFBQUEsS0FBTU0sSUFBSSxHQUFFO1FBQ3JDLHFCQUFPLDhEQUFDZixtREFBU0E7WUFBQ2dCLFlBQVk7Ozs7OztJQUNoQztJQUVBLHFCQUNFLDhEQUFDViwwREFBTUE7a0JBQ0pLLE9BQU9HLFVBQVUsaUJBQ2hCLDhEQUFDUCw4REFBU0E7c0JBQUM7Ozs7O2lDQUVYOzs4QkFDRSw4REFBQ1U7O3NDQUNDLDhEQUFDaEIsa0RBQUlBOzs4Q0FDSCw4REFBQ2lCOzhDQUFPLEdBQWMsT0FBWFQsS0FBS1MsS0FBSyxFQUFDOzs7Ozs7OENBQ3RCLDhEQUFDQztvQ0FDQ0MsVUFBUztvQ0FDVEMsT0FBTyxHQUFFWixzQkFBQUEsS0FBS2EsYUFBYSxjQUFsQmIsMENBQUFBLG9CQUFvQmMsSUFBSSxDQUFDQyxTQUFTOzs7Ozs7Ozs7Ozs7c0NBRy9DLDhEQUFDcEIsK0RBQVVBOzRCQUNUYyxPQUFPVCxLQUFLUyxLQUFLOzRCQUNqQk8sWUFBWWhCLEtBQUthLGFBQWE7Ozs7OztzQ0FFaEMsOERBQUNwQiw2REFBUUE7NEJBQUNtQixTQUFTWixLQUFLWSxPQUFPOzs7Ozs7Ozs7Ozs7OEJBRWpDLDhEQUFDSzs7d0JBQUk7c0NBRUgsOERBQUNDOzs7OztzQ0FDRCw4REFBQ0M7NEJBQ0NDLE1BQU0seUNBQStGcEIsT0FBdERBLEtBQUtTLEtBQUssRUFBQyw2Q0FBcUQsT0FBVlQsS0FBS00sSUFBSTs0QkFDOUdlLFFBQU87NEJBQ1BDLEtBQUk7NEJBQ0pDLFdBQVU7c0NBQ1g7Ozs7OztzQ0FHRCw4REFBQ0w7Ozs7O3NDQUNELDhEQUFDQzs0QkFDQ0MsTUFBTSxvRkFBOEYsT0FBVnBCLEtBQUtNLElBQUk7NEJBQ25HZSxRQUFPOzRCQUNQQyxLQUFJOzRCQUNKQyxXQUFVO3NDQUNYOzs7Ozs7c0NBR0QsOERBQUNMOzs7OztzQ0FDRCw4REFBQ0M7NEJBQ0NDLE1BQU0sMkZBQXFHLE9BQVZwQixLQUFLTSxJQUFJO3NDQUMzRzs7Ozs7Ozs7Ozs7OzhCQUlILDhEQUFDVixxRUFBZ0JBOzs7Ozs4QkFDakIsOERBQUNxQjtvQkFBSU0sV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUF3Qjs7Ozs7O3dCQUNyQ3BCLFVBQVVzQixNQUFNLEdBQUcsbUJBQUssOERBQUMvQixnRUFBV0E7NEJBQUNPLE9BQU9FOzs7Ozs7Ozs7Ozs7OEJBRS9DLDhEQUFDUCxxRUFBZ0JBOzs7Ozs7Ozs7Ozs7QUFLM0I7R0FqRXdCRzs7UUFDUFQsa0RBQVNBOzs7S0FERlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLnRzeD8xYmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEVycm9yUGFnZSBmcm9tIFwibmV4dC9lcnJvclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBQb3N0Qm9keSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0LWJvZHlcIjtcbmltcG9ydCBNb3JlU3RvcmllcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb3JlLXN0b3JpZXNcIjtcbmltcG9ydCBQb3N0SGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3QtaGVhZGVyXCI7XG5pbXBvcnQgU2VjdGlvblNlcGFyYXRvciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9uLXNlcGFyYXRvclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBQb3N0VGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdC10aXRsZVwiO1xuaW1wb3J0IHtcbiAgZ2V0QWxsUG9zdHNXaXRoU2x1ZyxcbiAgZ2V0UG9zdEFuZE1vcmVQb3N0cyxcbn0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3QsIHBvc3RzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IG1vcmVQb3N0cyA9IHBvc3RzPy5lZGdlcztcblxuICBpZiAoIXJvdXRlci5pc0ZhbGxiYWNrICYmICFwb3N0Py5zbHVnKSB7XG4gICAgcmV0dXJuIDxFcnJvclBhZ2Ugc3RhdHVzQ29kZT17NDA0fSAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHtyb3V0ZXIuaXNGYWxsYmFjayA/IChcbiAgICAgICAgPFBvc3RUaXRsZT5Mb2FkaW5n4oCmPC9Qb3N0VGl0bGU+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgIDx0aXRsZT57YCR7cG9zdC50aXRsZX0gfCBWaXRhbCBTaWducyBNYWdhemluZWB9PC90aXRsZT5cbiAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtwb3N0LmZlYXR1cmVkSW1hZ2U/Lm5vZGUuc291cmNlVXJsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPFBvc3RIZWFkZXJcbiAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgIGNvdmVySW1hZ2U9e3Bvc3QuZmVhdHVyZWRJbWFnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UG9zdEJvZHkgY29udGVudD17cG9zdC5jb250ZW50fSAvPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgU2hhcmUgdGhpczpcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JHtwb3N0LnRpdGxlfSZ1cmw9aHR0cHM6Ly93d3cudml0YWxzaWduc21hZy5vcmcvcG9zdHMvJHtwb3N0LnNsdWd9YH1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY3VzdG9tUmVkLTgwMCBob3Zlcjp0ZXh0LWN1c3RvbVJlZC05NTAgYWN0aXZlOnRleHQtY3VzdG9tUmVkLTUwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFR3aXR0ZXJcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PWh0dHBzOi8vd3d3LnZpdGFsc2lnbnNtYWcub3JnL3Bvc3RzLyR7cG9zdC5zbHVnfWB9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbVJlZC04MDAgaG92ZXI6dGV4dC1jdXN0b21SZWQtOTUwIGFjdGl2ZTp0ZXh0LWN1c3RvbVJlZC01MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBGYWNlYm9va1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUmdXJsPWh0dHBzOi8vd3d3LnZpdGFsc2lnbnNtYWcub3JnL3Bvc3RzLyR7cG9zdC5zbHVnfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExpbmtlZEluXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFNlY3Rpb25TZXBhcmF0b3IgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmdyaWQgc206Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYi02IHNtOnB5LTAgdGV4dC0yeGxcIj5SZWFkIE5leHQ6IDwvaDE+XG4gICAgICAgICAgICB7bW9yZVBvc3RzLmxlbmd0aCA+IDAgJiYgPE1vcmVTdG9yaWVzIHBvc3RzPXttb3JlUG9zdHN9IC8+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTZWN0aW9uU2VwYXJhdG9yIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQb3N0QW5kTW9yZVBvc3RzKHBhcmFtcz8uc2x1Zyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdDogZGF0YS5wb3N0LFxuICAgICAgcG9zdHM6IGRhdGEucG9zdHMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxMCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHNXaXRoU2x1ZygpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6XG4gICAgICBhbGxQb3N0cy5lZGdlcy5tYXAoKHsgbm9kZSB9KSA9PiBgL3Bvc3RzLyR7bm9kZS5zbHVnfWApIHx8IFtdLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9O1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgcGFyYW1zOiB7IGlkOiBzdHJpbmcgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiRXJyb3JQYWdlIiwiSGVhZCIsIlBvc3RCb2R5IiwiTW9yZVN0b3JpZXMiLCJQb3N0SGVhZGVyIiwiU2VjdGlvblNlcGFyYXRvciIsIkxheW91dCIsIlBvc3RUaXRsZSIsIlBvc3QiLCJwb3N0IiwicG9zdHMiLCJyb3V0ZXIiLCJtb3JlUG9zdHMiLCJlZGdlcyIsImlzRmFsbGJhY2siLCJzbHVnIiwic3RhdHVzQ29kZSIsImFydGljbGUiLCJ0aXRsZSIsIm1ldGEiLCJwcm9wZXJ0eSIsImNvbnRlbnQiLCJmZWF0dXJlZEltYWdlIiwibm9kZSIsInNvdXJjZVVybCIsImNvdmVySW1hZ2UiLCJkaXYiLCJiciIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiY2xhc3NOYW1lIiwiaDEiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[slug].tsx\n"));

/***/ })

});