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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_post_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/post-body */ \"./components/post-body.tsx\");\n/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/more-stories */ \"./components/more-stories.tsx\");\n/* harmony import */ var _components_post_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/post-header */ \"./components/post-header.tsx\");\n/* harmony import */ var _components_section_separator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/section-separator */ \"./components/section-separator.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_post_title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/post-title */ \"./components/post-title.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(param) {\n    let { post, posts } = param;\n    var _post_featuredImage;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const morePosts = posts === null || posts === void 0 ? void 0 : posts.edges;\n    if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.slug)) {\n        (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n            window.location.href = \"https://vitalsignscontenteditor.co.uk/404\";\n        }, []);\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: router.isFallback ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_title__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            children: \"Loading…\"\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                    children: \"\".concat(post.title, \" | Vital Signs Magazine\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    property: \"og:image\",\n                                    content: (_post_featuredImage = post.featuredImage) === null || _post_featuredImage === void 0 ? void 0 : _post_featuredImage.node.sourceUrl\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: post.title,\n                            coverImage: post.featuredImage\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_body__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            content: post.content\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-start sm:grid sm:grid-cols-4 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold font-sans\",\n                            children: \"Share this article:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between sm:justify-start space-x-14 sm:space-x-5 text-4xl mx-auto sm:mx-0 pt-5 sm:pt-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://twitter.com/intent/tweet?text=\".concat(post.title, \"&url=https://www.vitalsignsmag.org/posts/\").concat(post.slug),\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--twitter] text-customRed-800 hover:text-customRed-950 active:text-customRed-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://wa.me/?text=\".concat(encodeURIComponent(\"\".concat(post.title, \": https://www.vitalsignsmag.org/posts/\").concat(post.slug))),\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--whatsapp] text-customRed-800 hover:text-customRed-950 active:text-customRed-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://www.facebook.com/sharer/sharer.php?u=https://www.vitalsignsmag.org/posts/\".concat(post.slug),\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--facebook]  text-customRed-800 hover:text-customRed-950 active:text-customRed-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"mailto:?subject=\".concat(encodeURIComponent(post.title), \"&body=Check out this article: \").concat(encodeURIComponent(\"https://www.vitalsignsmag.org/posts/\" + post.slug)),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--email] text-customRed-800 hover:text-customRed-950 active:text-customRed-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_separator__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 89,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:grid sm:grid-cols-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"pb-6 sm:py-0 text-2xl\",\n                            children: \"Read Next: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this),\n                        morePosts.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            posts: morePosts\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 92,\n                            columnNumber: 38\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_separator__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUVYO0FBRXFCO0FBQ007QUFDRjtBQUNZO0FBQ3JCO0FBQ087QUFLbEI7O0FBRW5CLFNBQVNTLEtBQUssS0FBZTtRQUFmLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQWY7UUF1QkpEOztJQXRCdkIsTUFBTUUsU0FBU1osc0RBQVNBO0lBQ3hCLE1BQU1hLFlBQVlGLGtCQUFBQSw0QkFBQUEsTUFBT0csS0FBSztJQUU5QixJQUFJLENBQUNGLE9BQU9HLFVBQVUsSUFBSSxFQUFDTCxpQkFBQUEsMkJBQUFBLEtBQU1NLElBQUksR0FBRTtRQUNyQ1IsZ0RBQVNBLENBQUM7WUFDUlMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQ2xCO1FBQ0osR0FBRyxFQUFFO1FBQ0wsT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUNiLDBEQUFNQTtrQkFDSk0sT0FBT0csVUFBVSxpQkFDaEIsOERBQUNSLDhEQUFTQTtzQkFBQzs7Ozs7aUNBRVg7OzhCQUNFLDhEQUFDYTs7c0NBQ0MsOERBQUNuQixrREFBSUE7OzhDQUNILDhEQUFDb0I7OENBQU8sR0FBYyxPQUFYWCxLQUFLVyxLQUFLLEVBQUM7Ozs7Ozs4Q0FDdEIsOERBQUNDO29DQUNDQyxVQUFTO29DQUNUQyxPQUFPLEdBQUVkLHNCQUFBQSxLQUFLZSxhQUFhLGNBQWxCZiwwQ0FBQUEsb0JBQW9CZ0IsSUFBSSxDQUFDQyxTQUFTOzs7Ozs7Ozs7Ozs7c0NBRy9DLDhEQUFDdkIsK0RBQVVBOzRCQUNUaUIsT0FBT1gsS0FBS1csS0FBSzs0QkFDakJPLFlBQVlsQixLQUFLZSxhQUFhOzs7Ozs7c0NBRWhDLDhEQUFDdkIsNkRBQVFBOzRCQUFDc0IsU0FBU2QsS0FBS2MsT0FBTzs7Ozs7Ozs7Ozs7OzhCQUVqQyw4REFBQ0s7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBR0QsV0FBVTtzQ0FBK0I7Ozs7OztzQ0FHN0MsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQ0NiLE1BQU0seUNBQStGVCxPQUF0REEsS0FBS1csS0FBSyxFQUFDLDZDQUFxRCxPQUFWWCxLQUFLTSxJQUFJO29DQUM5R2lCLFFBQU87b0NBQ1BDLEtBQUk7OENBRUosNEVBQUNDO3dDQUFLTCxXQUFVOzs7Ozs7Ozs7Ozs4Q0FFbEIsOERBQUNFO29DQUNDYixNQUFNLHVCQUVKLE9BRjJCaUIsbUJBQzNCLEdBQXNEMUIsT0FBbkRBLEtBQUtXLEtBQUssRUFBQywwQ0FBa0QsT0FBVlgsS0FBS00sSUFBSTtvQ0FFakVpQixRQUFPO29DQUNQQyxLQUFJOzhDQUVKLDRFQUFDQzt3Q0FBS0wsV0FBVTs7Ozs7Ozs7Ozs7OENBR2xCLDhEQUFDRTtvQ0FDQ2IsTUFBTSxvRkFBOEYsT0FBVlQsS0FBS00sSUFBSTtvQ0FDbkdpQixRQUFPO29DQUNQQyxLQUFJOzhDQUVKLDRFQUFDQzt3Q0FBS0wsV0FBVTs7Ozs7Ozs7Ozs7OENBRWxCLDhEQUFDRTtvQ0FDQ2IsTUFBTSxtQkFFNEJpQixPQUZUQSxtQkFDdkIxQixLQUFLVyxLQUFLLEdBQ1Ysa0NBRUEsT0FGZ0NlLG1CQUNoQyx5Q0FBeUMxQixLQUFLTSxJQUFJOzhDQUdwRCw0RUFBQ21CO3dDQUFLTCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJdEIsOERBQUN6QixxRUFBZ0JBOzs7Ozs4QkFDakIsOERBQUN3QjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUF3Qjs7Ozs7O3dCQUNyQ2pCLFVBQVV3QixNQUFNLEdBQUcsbUJBQUssOERBQUNsQyxnRUFBV0E7NEJBQUNRLE9BQU9FOzs7Ozs7Ozs7Ozs7OEJBRS9DLDhEQUFDUixxRUFBZ0JBOzs7Ozs7Ozs7Ozs7QUFLM0I7R0FsRndCSTs7UUFDUFQsa0RBQVNBOzs7S0FERlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLnRzeD8xYmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEVycm9yUGFnZSBmcm9tIFwibmV4dC9lcnJvclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBQb3N0Qm9keSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0LWJvZHlcIjtcbmltcG9ydCBNb3JlU3RvcmllcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb3JlLXN0b3JpZXNcIjtcbmltcG9ydCBQb3N0SGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3QtaGVhZGVyXCI7XG5pbXBvcnQgU2VjdGlvblNlcGFyYXRvciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9uLXNlcGFyYXRvclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBQb3N0VGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdC10aXRsZVwiO1xuaW1wb3J0IHtcbiAgZ2V0QWxsUG9zdHNXaXRoU2x1ZyxcbiAgZ2V0UG9zdEFuZE1vcmVQb3N0cyxcbn0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCwgcG9zdHMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgbW9yZVBvc3RzID0gcG9zdHM/LmVkZ2VzO1xuXG4gIGlmICghcm91dGVyLmlzRmFsbGJhY2sgJiYgIXBvc3Q/LnNsdWcpIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPVxuICAgICAgICBcImh0dHBzOi8vdml0YWxzaWduc2NvbnRlbnRlZGl0b3IuY28udWsvNDA0XCI7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAge3JvdXRlci5pc0ZhbGxiYWNrID8gKFxuICAgICAgICA8UG9zdFRpdGxlPkxvYWRpbmfigKY8L1Bvc3RUaXRsZT5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgPHRpdGxlPntgJHtwb3N0LnRpdGxlfSB8IFZpdGFsIFNpZ25zIE1hZ2F6aW5lYH08L3RpdGxlPlxuICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Bvc3QuZmVhdHVyZWRJbWFnZT8ubm9kZS5zb3VyY2VVcmx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8UG9zdEhlYWRlclxuICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgY292ZXJJbWFnZT17cG9zdC5mZWF0dXJlZEltYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQb3N0Qm9keSBjb250ZW50PXtwb3N0LmNvbnRlbnR9IC8+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHNtOmdyaWQgc206Z3JpZC1jb2xzLTQgXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIGZvbnQtc2Fuc1wiPlxuICAgICAgICAgICAgICBTaGFyZSB0aGlzIGFydGljbGU6XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBzbTpqdXN0aWZ5LXN0YXJ0IHNwYWNlLXgtMTQgc206c3BhY2UteC01IHRleHQtNHhsIG14LWF1dG8gc206bXgtMCBwdC01IHNtOnB0LTBcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0ke3Bvc3QudGl0bGV9JnVybD1odHRwczovL3d3dy52aXRhbHNpZ25zbWFnLm9yZy9wb3N0cy8ke3Bvc3Quc2x1Z31gfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLVttZGktLXR3aXR0ZXJdIHRleHQtY3VzdG9tUmVkLTgwMCBob3Zlcjp0ZXh0LWN1c3RvbVJlZC05NTAgYWN0aXZlOnRleHQtY3VzdG9tUmVkLTUwMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3dhLm1lLz90ZXh0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgYCR7cG9zdC50aXRsZX06IGh0dHBzOi8vd3d3LnZpdGFsc2lnbnNtYWcub3JnL3Bvc3RzLyR7cG9zdC5zbHVnfWBcbiAgICAgICAgICAgICAgICApfWB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0td2hhdHNhcHBdIHRleHQtY3VzdG9tUmVkLTgwMCBob3Zlcjp0ZXh0LWN1c3RvbVJlZC05NTAgYWN0aXZlOnRleHQtY3VzdG9tUmVkLTUwMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PWh0dHBzOi8vd3d3LnZpdGFsc2lnbnNtYWcub3JnL3Bvc3RzLyR7cG9zdC5zbHVnfWB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0tZmFjZWJvb2tdICB0ZXh0LWN1c3RvbVJlZC04MDAgaG92ZXI6dGV4dC1jdXN0b21SZWQtOTUwIGFjdGl2ZTp0ZXh0LWN1c3RvbVJlZC01MDBcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgbWFpbHRvOj9zdWJqZWN0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgcG9zdC50aXRsZVxuICAgICAgICAgICAgICAgICl9JmJvZHk9Q2hlY2sgb3V0IHRoaXMgYXJ0aWNsZTogJHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3LnZpdGFsc2lnbnNtYWcub3JnL3Bvc3RzL1wiICsgcG9zdC5zbHVnXG4gICAgICAgICAgICAgICAgKX1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS1lbWFpbF0gdGV4dC1jdXN0b21SZWQtODAwIGhvdmVyOnRleHQtY3VzdG9tUmVkLTk1MCBhY3RpdmU6dGV4dC1jdXN0b21SZWQtNTAwXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U2VjdGlvblNlcGFyYXRvciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Z3JpZCBzbTpncmlkLWNvbHMtNFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBiLTYgc206cHktMCB0ZXh0LTJ4bFwiPlJlYWQgTmV4dDogPC9oMT5cbiAgICAgICAgICAgIHttb3JlUG9zdHMubGVuZ3RoID4gMCAmJiA8TW9yZVN0b3JpZXMgcG9zdHM9e21vcmVQb3N0c30gLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFNlY3Rpb25TZXBhcmF0b3IgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFBvc3RBbmRNb3JlUG9zdHMocGFyYW1zPy5zbHVnKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0OiBkYXRhLnBvc3QsXG4gICAgICBwb3N0czogZGF0YS5wb3N0cyxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEwLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0c1dpdGhTbHVnKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczpcbiAgICAgIGFsbFBvc3RzLmVkZ2VzLm1hcCgoeyBub2RlIH0pID0+IGAvcG9zdHMvJHtub2RlLnNsdWd9YCkgfHwgW10sXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH07XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBwYXJhbXM6IHsgaWQ6IHN0cmluZyB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJIZWFkIiwiUG9zdEJvZHkiLCJNb3JlU3RvcmllcyIsIlBvc3RIZWFkZXIiLCJTZWN0aW9uU2VwYXJhdG9yIiwiTGF5b3V0IiwiUG9zdFRpdGxlIiwidXNlRWZmZWN0IiwiUG9zdCIsInBvc3QiLCJwb3N0cyIsInJvdXRlciIsIm1vcmVQb3N0cyIsImVkZ2VzIiwiaXNGYWxsYmFjayIsInNsdWciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJhcnRpY2xlIiwidGl0bGUiLCJtZXRhIiwicHJvcGVydHkiLCJjb250ZW50IiwiZmVhdHVyZWRJbWFnZSIsIm5vZGUiLCJzb3VyY2VVcmwiLCJjb3ZlckltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJhIiwidGFyZ2V0IiwicmVsIiwic3BhbiIsImVuY29kZVVSSUNvbXBvbmVudCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[slug].tsx\n"));

/***/ })

});