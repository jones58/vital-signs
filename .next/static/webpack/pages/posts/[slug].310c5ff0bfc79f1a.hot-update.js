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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_post_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/post-body */ \"./components/post-body.tsx\");\n/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/more-stories */ \"./components/more-stories.tsx\");\n/* harmony import */ var _components_post_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/post-header */ \"./components/post-header.tsx\");\n/* harmony import */ var _components_section_separator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/section-separator */ \"./components/section-separator.tsx\");\n/* harmony import */ var _components_post_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/post-layout */ \"./components/post-layout.tsx\");\n/* harmony import */ var _components_post_title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/post-title */ \"./components/post-title.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(param) {\n    let { post, posts } = param;\n    var _post_featuredImage, _post_featuredImage1, _post_featuredImage2;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const morePosts = posts === null || posts === void 0 ? void 0 : posts.edges;\n    if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.slug)) {\n        (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n            window.location.href = \"/404\";\n        }, []);\n        return null;\n    }\n    const strippedExcerpt = post.excerpt.replace(/<[^>]+>/g, \" \").replace(/&#[^\\s;]+;/g, \"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: router.isFallback ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_title__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            children: \"Loading…\"\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                    children: \"\".concat(post.title, \" | Vital Signs\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    property: \"og:image\",\n                                    content: (_post_featuredImage = post.featuredImage) === null || _post_featuredImage === void 0 ? void 0 : _post_featuredImage.node.sourceUrl\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    property: \"og:title\",\n                                    content: \"\".concat(post.title, \" | Vital Signs\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    property: \"og:description\",\n                                    content: strippedExcerpt || \"A health workers’ magazine for a new society\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    name: \"twitter:card\",\n                                    content: (_post_featuredImage1 = post.featuredImage) === null || _post_featuredImage1 === void 0 ? void 0 : _post_featuredImage1.node.sourceUrl\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    name: \"twitter:image\",\n                                    content: (_post_featuredImage2 = post.featuredImage) === null || _post_featuredImage2 === void 0 ? void 0 : _post_featuredImage2.node.sourceUrl\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    name: \"twitter:title\",\n                                    content: \"\".concat(post.title, \" | Vital Signs\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    name: \"twitter:description\",\n                                    content: strippedExcerpt || \"A health workers’ magazine for a new society\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: post.title,\n                            coverImage: post.featuredImage,\n                            category: post.categories.edges\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_body__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            content: post.content\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-start sm:grid sm:grid-cols-4 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold font-sans\",\n                            children: \"Share this article:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between sm:justify-start space-x-14 sm:space-x-5 text-4xl mx-auto sm:mx-0 pt-10 pb-5 sm:pt-0 sm:pb-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://twitter.com/intent/tweet?text=\".concat(post.title, \"&url=https://www.vitalsignsmag.org/posts/\").concat(post.slug),\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--twitter] text-customRed-800 hover:text-customRed-950 active:text-customRed-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://wa.me/?text=\".concat(encodeURIComponent(\"\".concat(post.title, \": https://www.vitalsignsmag.org/posts/\").concat(post.slug))),\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--whatsapp] text-customRed-800 hover:text-customRed-950 active:text-customRed-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://www.facebook.com/sharer/sharer.php?u=https://www.vitalsignsmag.org/posts/\".concat(post.slug),\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--facebook]  text-customRed-800 hover:text-customRed-950 active:text-customRed-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"mailto:?subject=\".concat(encodeURIComponent(post.title), \"&body=Check out this article: \").concat(encodeURIComponent(\"https://www.vitalsignsmag.org/posts/\" + post.slug)),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--email] text-customRed-800 hover:text-customRed-950 active:text-customRed-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_separator__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 122,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:grid sm:grid-cols-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"pb-6 sm:py-0 text-2xl\",\n                            children: \"Read Next: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, this),\n                        morePosts.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            posts: morePosts\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                            lineNumber: 125,\n                            columnNumber: 38\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 123,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_separator__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n                    lineNumber: 127,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/pages/posts/[slug].tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNYO0FBRXFCO0FBQ007QUFDRjtBQUNZO0FBQ2hCO0FBQ0U7QUFLbEI7O0FBRW5CLFNBQVNTLEtBQUssS0FBZTtRQUFmLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQWY7UUEwQkpELHFCQWVBQSxzQkFJQUE7O0lBNUN2QixNQUFNRSxTQUFTWixzREFBU0E7SUFDeEIsTUFBTWEsWUFBWUYsa0JBQUFBLDRCQUFBQSxNQUFPRyxLQUFLO0lBRTlCLElBQUksQ0FBQ0YsT0FBT0csVUFBVSxJQUFJLEVBQUNMLGlCQUFBQSwyQkFBQUEsS0FBTU0sSUFBSSxHQUFFO1FBQ3JDUixnREFBU0EsQ0FBQztZQUNSUyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztRQUN6QixHQUFHLEVBQUU7UUFDTCxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxrQkFBa0JWLEtBQUtXLE9BQU8sQ0FDakNDLE9BQU8sQ0FBQyxZQUFZLEtBQ3BCQSxPQUFPLENBQUMsZUFBZTtJQUUxQixxQkFDRSw4REFBQ2hCLCtEQUFNQTtrQkFDSk0sT0FBT0csVUFBVSxpQkFDaEIsOERBQUNSLDhEQUFTQTtzQkFBQzs7Ozs7aUNBRVg7OzhCQUNFLDhEQUFDZ0I7O3NDQUNDLDhEQUFDdEIsa0RBQUlBOzs4Q0FDSCw4REFBQ3VCOzhDQUFPLEdBQWMsT0FBWGQsS0FBS2MsS0FBSyxFQUFDOzs7Ozs7OENBQ3RCLDhEQUFDQztvQ0FDQ0MsVUFBUztvQ0FDVEMsT0FBTyxHQUFFakIsc0JBQUFBLEtBQUtrQixhQUFhLGNBQWxCbEIsMENBQUFBLG9CQUFvQm1CLElBQUksQ0FBQ0MsU0FBUzs7Ozs7OzhDQUU3Qyw4REFBQ0w7b0NBQ0NDLFVBQVM7b0NBQ1RDLFNBQVMsR0FBYyxPQUFYakIsS0FBS2MsS0FBSyxFQUFDOzs7Ozs7OENBRXpCLDhEQUFDQztvQ0FDQ0MsVUFBUztvQ0FDVEMsU0FDRVAsbUJBQ0E7Ozs7Ozs4Q0FHSiw4REFBQ0s7b0NBQ0NNLE1BQUs7b0NBQ0xKLE9BQU8sR0FBRWpCLHVCQUFBQSxLQUFLa0IsYUFBYSxjQUFsQmxCLDJDQUFBQSxxQkFBb0JtQixJQUFJLENBQUNDLFNBQVM7Ozs7Ozs4Q0FFN0MsOERBQUNMO29DQUNDTSxNQUFLO29DQUNMSixPQUFPLEdBQUVqQix1QkFBQUEsS0FBS2tCLGFBQWEsY0FBbEJsQiwyQ0FBQUEscUJBQW9CbUIsSUFBSSxDQUFDQyxTQUFTOzs7Ozs7OENBRTdDLDhEQUFDTDtvQ0FDQ00sTUFBSztvQ0FDTEosU0FBUyxHQUFjLE9BQVhqQixLQUFLYyxLQUFLLEVBQUM7Ozs7Ozs4Q0FFekIsOERBQUNDO29DQUNDTSxNQUFLO29DQUNMSixTQUNFUCxtQkFDQTs7Ozs7Ozs7Ozs7O3NDQUlOLDhEQUFDaEIsK0RBQVVBOzRCQUNUb0IsT0FBT2QsS0FBS2MsS0FBSzs0QkFDakJRLFlBQVl0QixLQUFLa0IsYUFBYTs0QkFDOUJLLFVBQVV2QixLQUFLd0IsVUFBVSxDQUFDcEIsS0FBSzs7Ozs7O3NDQUVqQyw4REFBQ1osNkRBQVFBOzRCQUFDeUIsU0FBU2pCLEtBQUtpQixPQUFPOzs7Ozs7Ozs7Ozs7OEJBRWpDLDhEQUFDUTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUErQjs7Ozs7O3NDQUc3Qyw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRTtvQ0FDQ25CLE1BQU0seUNBQStGVCxPQUF0REEsS0FBS2MsS0FBSyxFQUFDLDZDQUFxRCxPQUFWZCxLQUFLTSxJQUFJO29DQUM5R3VCLFFBQU87b0NBQ1BDLEtBQUk7OENBRUosNEVBQUNDO3dDQUFLTCxXQUFVOzs7Ozs7Ozs7Ozs4Q0FFbEIsOERBQUNFO29DQUNDbkIsTUFBTSx1QkFFSixPQUYyQnVCLG1CQUMzQixHQUFzRGhDLE9BQW5EQSxLQUFLYyxLQUFLLEVBQUMsMENBQWtELE9BQVZkLEtBQUtNLElBQUk7b0NBRWpFdUIsUUFBTztvQ0FDUEMsS0FBSTs4Q0FFSiw0RUFBQ0M7d0NBQUtMLFdBQVU7Ozs7Ozs7Ozs7OzhDQUdsQiw4REFBQ0U7b0NBQ0NuQixNQUFNLG9GQUE4RixPQUFWVCxLQUFLTSxJQUFJO29DQUNuR3VCLFFBQU87b0NBQ1BDLEtBQUk7OENBRUosNEVBQUNDO3dDQUFLTCxXQUFVOzs7Ozs7Ozs7Ozs4Q0FFbEIsOERBQUNFO29DQUNDbkIsTUFBTSxtQkFFNEJ1QixPQUZUQSxtQkFDdkJoQyxLQUFLYyxLQUFLLEdBQ1Ysa0NBRUEsT0FGZ0NrQixtQkFDaEMseUNBQXlDaEMsS0FBS00sSUFBSTs4Q0FHcEQsNEVBQUN5Qjt3Q0FBS0wsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSXRCLDhEQUFDL0IscUVBQWdCQTs7Ozs7OEJBQ2pCLDhEQUFDOEI7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBR0QsV0FBVTtzQ0FBd0I7Ozs7Ozt3QkFDckN2QixVQUFVOEIsTUFBTSxHQUFHLG1CQUFLLDhEQUFDeEMsZ0VBQVdBOzRCQUFDUSxPQUFPRTs7Ozs7Ozs7Ozs7OzhCQUUvQyw4REFBQ1IscUVBQWdCQTs7Ozs7Ozs7Ozs7O0FBSzNCO0dBcEh3Qkk7O1FBQ1BULGtEQUFTQTs7O0tBREZTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tzbHVnXS50c3g/MWJlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUG9zdEJvZHkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdC1ib2R5XCI7XG5pbXBvcnQgTW9yZVN0b3JpZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9yZS1zdG9yaWVzXCI7XG5pbXBvcnQgUG9zdEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0LWhlYWRlclwiO1xuaW1wb3J0IFNlY3Rpb25TZXBhcmF0b3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbi1zZXBhcmF0b3JcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdC1sYXlvdXRcIjtcbmltcG9ydCBQb3N0VGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdC10aXRsZVwiO1xuaW1wb3J0IHtcbiAgZ2V0QWxsUG9zdHNXaXRoU2x1ZyxcbiAgZ2V0UG9zdEFuZE1vcmVQb3N0cyxcbn0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCwgcG9zdHMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgbW9yZVBvc3RzID0gcG9zdHM/LmVkZ2VzO1xuXG4gIGlmICghcm91dGVyLmlzRmFsbGJhY2sgJiYgIXBvc3Q/LnNsdWcpIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi80MDRcIjtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBzdHJpcHBlZEV4Y2VycHQgPSBwb3N0LmV4Y2VycHRcbiAgICAucmVwbGFjZSgvPFtePl0rPi9nLCBcIiBcIilcbiAgICAucmVwbGFjZSgvJiNbXlxccztdKzsvZywgXCJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAge3JvdXRlci5pc0ZhbGxiYWNrID8gKFxuICAgICAgICA8UG9zdFRpdGxlPkxvYWRpbmfigKY8L1Bvc3RUaXRsZT5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgPHRpdGxlPntgJHtwb3N0LnRpdGxlfSB8IFZpdGFsIFNpZ25zYH08L3RpdGxlPlxuICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Bvc3QuZmVhdHVyZWRJbWFnZT8ubm9kZS5zb3VyY2VVcmx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzp0aXRsZVwiXG4gICAgICAgICAgICAgICAgY29udGVudD17YCR7cG9zdC50aXRsZX0gfCBWaXRhbCBTaWduc2B9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICBzdHJpcHBlZEV4Y2VycHQgfHxcbiAgICAgICAgICAgICAgICAgIFwiQSBoZWFsdGggd29ya2Vyc+KAmSBtYWdhemluZSBmb3IgYSBuZXcgc29jaWV0eVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Bvc3QuZmVhdHVyZWRJbWFnZT8ubm9kZS5zb3VyY2VVcmx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Bvc3QuZmVhdHVyZWRJbWFnZT8ubm9kZS5zb3VyY2VVcmx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2Ake3Bvc3QudGl0bGV9IHwgVml0YWwgU2lnbnNgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgIHN0cmlwcGVkRXhjZXJwdCB8fFxuICAgICAgICAgICAgICAgICAgXCJBIGhlYWx0aCB3b3JrZXJz4oCZIG1hZ2F6aW5lIGZvciBhIG5ldyBzb2NpZXR5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8UG9zdEhlYWRlclxuICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgY292ZXJJbWFnZT17cG9zdC5mZWF0dXJlZEltYWdlfVxuICAgICAgICAgICAgICBjYXRlZ29yeT17cG9zdC5jYXRlZ29yaWVzLmVkZ2VzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQb3N0Qm9keSBjb250ZW50PXtwb3N0LmNvbnRlbnR9IC8+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHNtOmdyaWQgc206Z3JpZC1jb2xzLTQgXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIGZvbnQtc2Fuc1wiPlxuICAgICAgICAgICAgICBTaGFyZSB0aGlzIGFydGljbGU6XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBzbTpqdXN0aWZ5LXN0YXJ0IHNwYWNlLXgtMTQgc206c3BhY2UteC01IHRleHQtNHhsIG14LWF1dG8gc206bXgtMCBwdC0xMCBwYi01IHNtOnB0LTAgc206cGItMFwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PSR7cG9zdC50aXRsZX0mdXJsPWh0dHBzOi8vd3d3LnZpdGFsc2lnbnNtYWcub3JnL3Bvc3RzLyR7cG9zdC5zbHVnfWB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0tdHdpdHRlcl0gdGV4dC1jdXN0b21SZWQtODAwIGhvdmVyOnRleHQtY3VzdG9tUmVkLTk1MCBhY3RpdmU6dGV4dC1jdXN0b21SZWQtNTAwXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd2EubWUvP3RleHQ9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBgJHtwb3N0LnRpdGxlfTogaHR0cHM6Ly93d3cudml0YWxzaWduc21hZy5vcmcvcG9zdHMvJHtwb3N0LnNsdWd9YFxuICAgICAgICAgICAgICAgICl9YH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS13aGF0c2FwcF0gdGV4dC1jdXN0b21SZWQtODAwIGhvdmVyOnRleHQtY3VzdG9tUmVkLTk1MCBhY3RpdmU6dGV4dC1jdXN0b21SZWQtNTAwXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9aHR0cHM6Ly93d3cudml0YWxzaWduc21hZy5vcmcvcG9zdHMvJHtwb3N0LnNsdWd9YH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS1mYWNlYm9va10gIHRleHQtY3VzdG9tUmVkLTgwMCBob3Zlcjp0ZXh0LWN1c3RvbVJlZC05NTAgYWN0aXZlOnRleHQtY3VzdG9tUmVkLTUwMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2BtYWlsdG86P3N1YmplY3Q9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBwb3N0LnRpdGxlXG4gICAgICAgICAgICAgICAgKX0mYm9keT1DaGVjayBvdXQgdGhpcyBhcnRpY2xlOiAke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cudml0YWxzaWduc21hZy5vcmcvcG9zdHMvXCIgKyBwb3N0LnNsdWdcbiAgICAgICAgICAgICAgICApfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLVttZGktLWVtYWlsXSB0ZXh0LWN1c3RvbVJlZC04MDAgaG92ZXI6dGV4dC1jdXN0b21SZWQtOTUwIGFjdGl2ZTp0ZXh0LWN1c3RvbVJlZC01MDBcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTZWN0aW9uU2VwYXJhdG9yIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpncmlkIHNtOmdyaWQtY29scy00XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGItNiBzbTpweS0wIHRleHQtMnhsXCI+UmVhZCBOZXh0OiA8L2gxPlxuICAgICAgICAgICAge21vcmVQb3N0cy5sZW5ndGggPiAwICYmIDxNb3JlU3RvcmllcyBwb3N0cz17bW9yZVBvc3RzfSAvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U2VjdGlvblNlcGFyYXRvciAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UG9zdEFuZE1vcmVQb3N0cyhwYXJhbXM/LnNsdWcpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IGRhdGEucG9zdCxcbiAgICAgIHBvc3RzOiBkYXRhLnBvc3RzLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMTAsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzV2l0aFNsdWcoKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOlxuICAgICAgYWxsUG9zdHMuZWRnZXMubWFwKCh7IG5vZGUgfSkgPT4gYC9wb3N0cy8ke25vZGUuc2x1Z31gKSB8fCBbXSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfTtcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhcmFtczogeyBpZDogc3RyaW5nIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkhlYWQiLCJQb3N0Qm9keSIsIk1vcmVTdG9yaWVzIiwiUG9zdEhlYWRlciIsIlNlY3Rpb25TZXBhcmF0b3IiLCJMYXlvdXQiLCJQb3N0VGl0bGUiLCJ1c2VFZmZlY3QiLCJQb3N0IiwicG9zdCIsInBvc3RzIiwicm91dGVyIiwibW9yZVBvc3RzIiwiZWRnZXMiLCJpc0ZhbGxiYWNrIiwic2x1ZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0cmlwcGVkRXhjZXJwdCIsImV4Y2VycHQiLCJyZXBsYWNlIiwiYXJ0aWNsZSIsInRpdGxlIiwibWV0YSIsInByb3BlcnR5IiwiY29udGVudCIsImZlYXR1cmVkSW1hZ2UiLCJub2RlIiwic291cmNlVXJsIiwibmFtZSIsImNvdmVySW1hZ2UiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImEiLCJ0YXJnZXQiLCJyZWwiLCJzcGFuIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[slug].tsx\n"));

/***/ })

});