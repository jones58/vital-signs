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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_post_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/post-body */ \"./components/post-body.tsx\");\n/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/more-stories */ \"./components/more-stories.tsx\");\n/* harmony import */ var _components_post_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/post-header */ \"./components/post-header.tsx\");\n/* harmony import */ var _components_section_separator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/section-separator */ \"./components/section-separator.tsx\");\n/* harmony import */ var _components_post_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/post-layout */ \"./components/post-layout.tsx\");\n/* harmony import */ var _components_post_title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/post-title */ \"./components/post-title.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(param) {\n    let { post, posts } = param;\n    var _post_featuredImage, _post_featuredImage1;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const morePosts = posts === null || posts === void 0 ? void 0 : posts.edges;\n    if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.slug)) {\n        (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n            window.location.href = \"/404\";\n        }, []);\n        return null;\n    }\n    const strippedExcerpt = (post === null || post === void 0 ? void 0 : post.excerpt) ? post.excerpt.replace(/<[^>]+>/g, \" \").replace(/&#[^\\s;]+;/g, \"\") : \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: router.isFallback ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_title__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            children: \"Loading…\"\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                    children: \"\".concat(post.title, \" | Vital Signs\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    property: \"og:image\",\n                                    content: (_post_featuredImage = post.featuredImage) === null || _post_featuredImage === void 0 ? void 0 : _post_featuredImage.node.sourceUrl\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    property: \"og:title\",\n                                    content: \"\".concat(post.title, \" | Vital Signs\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    property: \"og:description\",\n                                    content: strippedExcerpt || \"A health workers’ magazine for a new society\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    name: \"twitter:card\",\n                                    content: \"summary_large_image\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    name: \"twitter:image\",\n                                    content: (_post_featuredImage1 = post.featuredImage) === null || _post_featuredImage1 === void 0 ? void 0 : _post_featuredImage1.node.sourceUrl\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    name: \"twitter:title\",\n                                    content: \"\".concat(post.title, \" | Vital Signs\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    name: \"twitter:description\",\n                                    content: strippedExcerpt || \"A health workers’ magazine for a new society\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: post.title,\n                            coverImage: post.featuredImage,\n                            category: post.categories.edges\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_body__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            content: post.content\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"embed\", {\n                            src: post.pdf.pdf.node.url,\n                            width: \"500\",\n                            height: \"375\",\n                            type: \"application/pdf\"\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-start lg:grid lg:grid-cols-4 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold font-sans\",\n                            children: \"Share this article:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between lg:justify-start space-x-14 lg:space-x-5 text-4xl mx-auto lg:mx-0 pt-10 pb-5 lg:pt-0 lg:pb-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://twitter.com/intent/tweet?text=\".concat(post.title, \"&url=https://www.vitalsignsmag.org/posts/\").concat(post.slug),\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--twitter] text-customRed-800 hover:text-customRed-950 active:text-customRed-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://wa.me/?text=\".concat(encodeURIComponent(\"\".concat(post.title, \": https://www.vitalsignsmag.org/posts/\").concat(post.slug))),\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--whatsapp] text-customRed-800 hover:text-customRed-950 active:text-customRed-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://www.facebook.com/sharer/sharer.php?u=https://www.vitalsignsmag.org/posts/\".concat(post.slug),\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--facebook]  text-customRed-800 hover:text-customRed-950 active:text-customRed-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"mailto:?subject=\".concat(encodeURIComponent(post.title), \"&body=Check out this article: \").concat(encodeURIComponent(\"https://www.vitalsignsmag.org/posts/\" + post.slug)),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--email] text-customRed-800 hover:text-customRed-950 active:text-customRed-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 88,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_separator__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 128,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:grid lg:grid-cols-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"pb-6 lg:py-0 text-2xl\",\n                            children: \"Read Next: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 130,\n                            columnNumber: 13\n                        }, this),\n                        morePosts.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            posts: morePosts\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 131,\n                            columnNumber: 38\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 129,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_separator__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 133,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFuREEsS0FBS2MsS0FBSyxFQUFDLDBDQUFrRCxPQUFWZCxLQUFLTSxJQUFJO29DQUVqRThCLFFBQU87b0NBQ1BDLEtBQUk7OENBRUosNEVBQUNDO3dDQUFLTCxXQUFVOzs7Ozs7Ozs7Ozs4Q0FHbEIsOERBQUNFO29DQUNDMUIsTUFBTSxvRkFBOEYsT0FBVlQsS0FBS00sSUFBSTtvQ0FDbkc4QixRQUFPO29DQUNQQyxLQUFJOzhDQUVKLDRFQUFDQzt3Q0FBS0wsV0FBVTs7Ozs7Ozs7Ozs7OENBRWxCLDhEQUFDRTtvQ0FDQzFCLE1BQU0sbUJBRTRCOEIsT0FGVEEsbUJBQ3ZCdkMsS0FBS2MsS0FBSyxHQUNWLGtDQUVBLE9BRmdDeUIsbUJBQ2hDLHlDQUF5Q3ZDLEtBQUtNLElBQUk7OENBR3BELDRFQUFDZ0M7d0NBQUtMLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUl0Qiw4REFBQ3RDLHFFQUFnQkE7Ozs7OzhCQUNqQiw4REFBQ3FDO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQXdCOzs7Ozs7d0JBQ3JDOUIsVUFBVXFDLE1BQU0sR0FBRyxtQkFBSyw4REFBQy9DLGdFQUFXQTs0QkFBQ1EsT0FBT0U7Ozs7Ozs7Ozs7Ozs4QkFFL0MsOERBQUNSLHFFQUFnQkE7Ozs7Ozs7Ozs7OztBQUszQjtHQTFId0JJOztRQUNQVCxrREFBU0E7OztLQURGUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9bc2x1Z10udHN4PzFiZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFBvc3RCb2R5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3QtYm9keVwiO1xuaW1wb3J0IE1vcmVTdG9yaWVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vcmUtc3Rvcmllc1wiO1xuaW1wb3J0IFBvc3RIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdC1oZWFkZXJcIjtcbmltcG9ydCBTZWN0aW9uU2VwYXJhdG9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb24tc2VwYXJhdG9yXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3QtbGF5b3V0XCI7XG5pbXBvcnQgUG9zdFRpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3QtdGl0bGVcIjtcbmltcG9ydCB7XG4gIGdldEFsbFBvc3RzV2l0aFNsdWcsXG4gIGdldFBvc3RBbmRNb3JlUG9zdHMsXG59IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3QsIHBvc3RzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IG1vcmVQb3N0cyA9IHBvc3RzPy5lZGdlcztcblxuICBpZiAoIXJvdXRlci5pc0ZhbGxiYWNrICYmICFwb3N0Py5zbHVnKSB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvNDA0XCI7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgc3RyaXBwZWRFeGNlcnB0ID0gcG9zdD8uZXhjZXJwdFxuICAgID8gcG9zdC5leGNlcnB0LnJlcGxhY2UoLzxbXj5dKz4vZywgXCIgXCIpLnJlcGxhY2UoLyYjW15cXHM7XSs7L2csIFwiXCIpXG4gICAgOiBcIlwiO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHtyb3V0ZXIuaXNGYWxsYmFjayA/IChcbiAgICAgICAgPFBvc3RUaXRsZT5Mb2FkaW5n4oCmPC9Qb3N0VGl0bGU+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgIDx0aXRsZT57YCR7cG9zdC50aXRsZX0gfCBWaXRhbCBTaWduc2B9PC90aXRsZT5cbiAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtwb3N0LmZlYXR1cmVkSW1hZ2U/Lm5vZGUuc291cmNlVXJsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2Ake3Bvc3QudGl0bGV9IHwgVml0YWwgU2lnbnNgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgc3RyaXBwZWRFeGNlcnB0IHx8XG4gICAgICAgICAgICAgICAgICBcIkEgaGVhbHRoIHdvcmtlcnPigJkgbWFnYXppbmUgZm9yIGEgbmV3IHNvY2lldHlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICBuYW1lPVwidHdpdHRlcjpjYXJkXCJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Bvc3QuZmVhdHVyZWRJbWFnZT8ubm9kZS5zb3VyY2VVcmx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2Ake3Bvc3QudGl0bGV9IHwgVml0YWwgU2lnbnNgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgIHN0cmlwcGVkRXhjZXJwdCB8fFxuICAgICAgICAgICAgICAgICAgXCJBIGhlYWx0aCB3b3JrZXJz4oCZIG1hZ2F6aW5lIGZvciBhIG5ldyBzb2NpZXR5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8UG9zdEhlYWRlclxuICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgY292ZXJJbWFnZT17cG9zdC5mZWF0dXJlZEltYWdlfVxuICAgICAgICAgICAgICBjYXRlZ29yeT17cG9zdC5jYXRlZ29yaWVzLmVkZ2VzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQb3N0Qm9keSBjb250ZW50PXtwb3N0LmNvbnRlbnR9IC8+XG4gICAgICAgICAgICA8ZW1iZWRcbiAgICAgICAgICAgICAgc3JjPXtwb3N0LnBkZi5wZGYubm9kZS51cmx9XG4gICAgICAgICAgICAgIHdpZHRoPVwiNTAwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzc1XCJcbiAgICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL3BkZlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBsZzpncmlkIGxnOmdyaWQtY29scy00IFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBmb250LXNhbnNcIj5cbiAgICAgICAgICAgICAgU2hhcmUgdGhpcyBhcnRpY2xlOlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbGc6anVzdGlmeS1zdGFydCBzcGFjZS14LTE0IGxnOnNwYWNlLXgtNSB0ZXh0LTR4bCBteC1hdXRvIGxnOm14LTAgcHQtMTAgcGItNSBsZzpwdC0wIGxnOnBiLTBcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0ke3Bvc3QudGl0bGV9JnVybD1odHRwczovL3d3dy52aXRhbHNpZ25zbWFnLm9yZy9wb3N0cy8ke3Bvc3Quc2x1Z31gfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLVttZGktLXR3aXR0ZXJdIHRleHQtY3VzdG9tUmVkLTgwMCBob3Zlcjp0ZXh0LWN1c3RvbVJlZC05NTAgYWN0aXZlOnRleHQtY3VzdG9tUmVkLTUwMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3dhLm1lLz90ZXh0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgYCR7cG9zdC50aXRsZX06IGh0dHBzOi8vd3d3LnZpdGFsc2lnbnNtYWcub3JnL3Bvc3RzLyR7cG9zdC5zbHVnfWBcbiAgICAgICAgICAgICAgICApfWB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0td2hhdHNhcHBdIHRleHQtY3VzdG9tUmVkLTgwMCBob3Zlcjp0ZXh0LWN1c3RvbVJlZC05NTAgYWN0aXZlOnRleHQtY3VzdG9tUmVkLTUwMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PWh0dHBzOi8vd3d3LnZpdGFsc2lnbnNtYWcub3JnL3Bvc3RzLyR7cG9zdC5zbHVnfWB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0tZmFjZWJvb2tdICB0ZXh0LWN1c3RvbVJlZC04MDAgaG92ZXI6dGV4dC1jdXN0b21SZWQtOTUwIGFjdGl2ZTp0ZXh0LWN1c3RvbVJlZC01MDBcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgbWFpbHRvOj9zdWJqZWN0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgcG9zdC50aXRsZVxuICAgICAgICAgICAgICAgICl9JmJvZHk9Q2hlY2sgb3V0IHRoaXMgYXJ0aWNsZTogJHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3LnZpdGFsc2lnbnNtYWcub3JnL3Bvc3RzL1wiICsgcG9zdC5zbHVnXG4gICAgICAgICAgICAgICAgKX1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS1lbWFpbF0gdGV4dC1jdXN0b21SZWQtODAwIGhvdmVyOnRleHQtY3VzdG9tUmVkLTk1MCBhY3RpdmU6dGV4dC1jdXN0b21SZWQtNTAwXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U2VjdGlvblNlcGFyYXRvciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Z3JpZCBsZzpncmlkLWNvbHMtNFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBiLTYgbGc6cHktMCB0ZXh0LTJ4bFwiPlJlYWQgTmV4dDogPC9oMT5cbiAgICAgICAgICAgIHttb3JlUG9zdHMubGVuZ3RoID4gMCAmJiA8TW9yZVN0b3JpZXMgcG9zdHM9e21vcmVQb3N0c30gLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFNlY3Rpb25TZXBhcmF0b3IgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFBvc3RBbmRNb3JlUG9zdHMocGFyYW1zPy5zbHVnKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0OiBkYXRhLnBvc3QsXG4gICAgICBwb3N0czogZGF0YS5wb3N0cyxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEwLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0c1dpdGhTbHVnKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczpcbiAgICAgIGFsbFBvc3RzLmVkZ2VzLm1hcCgoeyBub2RlIH0pID0+IGAvcG9zdHMvJHtub2RlLnNsdWd9YCkgfHwgW10sXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH07XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBwYXJhbXM6IHsgaWQ6IHN0cmluZyB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJIZWFkIiwiUG9zdEJvZHkiLCJNb3JlU3RvcmllcyIsIlBvc3RIZWFkZXIiLCJTZWN0aW9uU2VwYXJhdG9yIiwiTGF5b3V0IiwiUG9zdFRpdGxlIiwidXNlRWZmZWN0IiwiUG9zdCIsInBvc3QiLCJwb3N0cyIsInJvdXRlciIsIm1vcmVQb3N0cyIsImVkZ2VzIiwiaXNGYWxsYmFjayIsInNsdWciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzdHJpcHBlZEV4Y2VycHQiLCJleGNlcnB0IiwicmVwbGFjZSIsImFydGljbGUiLCJ0aXRsZSIsIm1ldGEiLCJwcm9wZXJ0eSIsImNvbnRlbnQiLCJmZWF0dXJlZEltYWdlIiwibm9kZSIsInNvdXJjZVVybCIsIm5hbWUiLCJjb3ZlckltYWdlIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiZW1iZWQiLCJzcmMiLCJwZGYiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsInR5cGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImEiLCJ0YXJnZXQiLCJyZWwiLCJzcGFuIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[slug].tsx\n"));

/***/ })

});