"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const variants = {\n        open: {\n            opacity: 1,\n            y: 0\n        },\n        closed: {\n            opacity: 0,\n            y: -10\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-orange-50 sm:px-10 pb-5 mb-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sm:grid sm:grid-cols-2 sm:mx-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-between px-10 sm:px-0 sm:justify-start sm:space-y-10 bg-orange-50\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {\n                            onClick: ()=>setMenuOpen(!menuOpen),\n                            className: \"sm:hidden text-4xl text-orange-700\",\n                            initial: false,\n                            animate: menuOpen ? \"open\" : \"closed\",\n                            variants: variants,\n                            children: menuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"icon-[mdi--arrow-up] text-orange-700\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"icon-[mdi--hamburger-menu] text-orange-700\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: \"max-h-[220px] \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"min-w-[250px] min-h-[250px] sm:min-w-[20vw] sm:min-h-[20vh] relative\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/images/banner-draft.png\",\n                                    alt: \"logo\",\n                                    fill: true,\n                                    className: \"object-contain object-center\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row sm:flex-col sm:justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                        children: menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                            className: \"space-x-10 space-y-8 sm:space-y-0 sm:items-center justify-end w-full flex flex-col sm:flex-row\",\n                            initial: {\n                                opacity: 0,\n                                y: -10\n                            },\n                            animate: {\n                                opacity: 1,\n                                y: 0\n                            },\n                            exit: {\n                                opacity: 0,\n                                y: -10\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col sm:flex-row sm:items-center space-y-5 sm:space-y-0 sm:space-x-8 text-3xl font-sans pl-10 sm:pl-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/about\",\n                                            className: \"text-orange-700 hover:text-orange-950 active:text-orange-500\",\n                                            children: \"ABOUT\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/news\",\n                                            className: \"text-orange-700 hover:text-orange-950 active:text-orange-500\",\n                                            children: \"NEWS\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/issues\",\n                                            className: \"text-orange-700 hover:text-orange-950 active:text-orange-500\",\n                                            children: \"ISSUES\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row sm:items-center justify-start sm:justify-between space-x-10 sm:space-x-10 pb-10 sm:pb-0 text-3xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"icon-[mdi--facebook] text-orange-700 hover:text-orange-950 active:text-orange-500 p-5 sm:p-0\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"icon-[mdi--twitter] text-orange-700 hover:text-orange-950 active:text-orange-500 p-5 sm:p-0\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"https://vitalsignscontenteditor.co.uk/rss\",\n                                            target: \"_blank\",\n                                            className: \"flex-col flex justify-end items-end\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"icon-[mdi--rss] text-orange-700 hover:text-orange-950 active:text-orange-500 p-5 sm:p-0\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"mailto:vitalsignsmag@proton.me\",\n                                            target: \"_blank\",\n                                            className: \"flex-col flex justify-end items-end\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"icon-[mdi--email] text-orange-700 hover:text-orange-950 active:text-orange-500 p-5 sm:p-0\",\n                                                children: \" \"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"K77eQVFAaxZgbvGoNWFAiCE7OTY=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0o7QUFDRTtBQUN5QjtBQUV6QyxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1RLFdBQVc7UUFDZkMsTUFBTTtZQUFFQyxTQUFTO1lBQUdDLEdBQUc7UUFBRTtRQUN6QkMsUUFBUTtZQUFFRixTQUFTO1lBQUdDLEdBQUcsQ0FBQztRQUFHO0lBQy9CO0lBRUEscUJBQ0UsOERBQUNFO1FBQU9DLFdBQVU7a0JBQ2hCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDWCxpREFBTUEsQ0FBQ2EsTUFBTTs0QkFDWkMsU0FBUyxJQUFNVixZQUFZLENBQUNEOzRCQUM1QlEsV0FBVTs0QkFDVkksU0FBUzs0QkFDVEMsU0FBU2IsV0FBVyxTQUFTOzRCQUM3QkUsVUFBVUE7c0NBRVRGLHlCQUNDLDhEQUFDYztnQ0FBS04sV0FBVTs7Ozs7cURBRWhCLDhEQUFDTTtnQ0FBS04sV0FBVTs7Ozs7Ozs7Ozs7c0NBR3BCLDhEQUFDYixrREFBSUE7NEJBQUNvQixNQUFLOzRCQUFJUCxXQUFVO3NDQUN2Qiw0RUFBQ0M7Z0NBQUlELFdBQVU7MENBQ2IsNEVBQUNaLG1EQUFLQTtvQ0FDSm9CLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0pDLElBQUk7b0NBQ0pWLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS2xCLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ1YsMERBQWVBO2tDQUNiRSwwQkFDQyw4REFBQ0gsaURBQU1BLENBQUNZLEdBQUc7NEJBQ1RELFdBQVk7NEJBQ1pJLFNBQVM7Z0NBQUVSLFNBQVM7Z0NBQUdDLEdBQUcsQ0FBQzs0QkFBRzs0QkFDOUJRLFNBQVM7Z0NBQUVULFNBQVM7Z0NBQUdDLEdBQUc7NEJBQUU7NEJBQzVCYyxNQUFNO2dDQUFFZixTQUFTO2dDQUFHQyxHQUFHLENBQUM7NEJBQUc7OzhDQUUzQiw4REFBQ0k7b0NBQUlELFdBQVU7O3NEQUNiLDhEQUFDYixrREFBSUE7NENBQ0hvQixNQUFLOzRDQUNMUCxXQUFVO3NEQUNYOzs7Ozs7c0RBR0QsOERBQUNiLGtEQUFJQTs0Q0FDSG9CLE1BQUs7NENBQ0xQLFdBQVU7c0RBQ1g7Ozs7OztzREFHRCw4REFBQ2Isa0RBQUlBOzRDQUNIb0IsTUFBSzs0Q0FDTFAsV0FBVTtzREFDWDs7Ozs7Ozs7Ozs7OzhDQUlILDhEQUFDQztvQ0FBSUQsV0FBVTs7c0RBQ2IsOERBQUNNOzRDQUFLTixXQUFVOzs7Ozs7c0RBQ2hCLDhEQUFDTTs0Q0FBS04sV0FBVTs7Ozs7O3NEQUNoQiw4REFBQ1k7NENBQ0NMLE1BQUs7NENBQ0xNLFFBQU87NENBQ1BiLFdBQVU7c0RBRVYsNEVBQUNNO2dEQUFLTixXQUFVOzs7Ozs7Ozs7OztzREFFbEIsOERBQUNZOzRDQUNDTCxNQUFLOzRDQUNMTSxRQUFPOzRDQUNQYixXQUFVO3NEQUVWLDRFQUFDTTtnREFBS04sV0FBVTswREFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXdkI7R0E1RndCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci50c3g/ODcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgb3BlbjogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXG4gICAgY2xvc2VkOiB7IG9wYWNpdHk6IDAsIHk6IC0xMCB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNTAgc206cHgtMTAgcGItNSBtYi0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpncmlkIHNtOmdyaWQtY29scy0yIHNtOm14LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTEwIHNtOnB4LTAgc206anVzdGlmeS1zdGFydCBzbTpzcGFjZS15LTEwIGJnLW9yYW5nZS01MFwiPlxuICAgICAgICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic206aGlkZGVuIHRleHQtNHhsIHRleHQtb3JhbmdlLTcwMFwiXG4gICAgICAgICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgICAgICAgIGFuaW1hdGU9e21lbnVPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttZW51T3BlbiA/IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS1hcnJvdy11cF0gdGV4dC1vcmFuZ2UtNzAwXCI+PC9zcGFuPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS1oYW1idXJnZXItbWVudV0gdGV4dC1vcmFuZ2UtNzAwXCI+PC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L21vdGlvbi5idXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtYXgtaC1bMjIwcHhdIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy1bMjUwcHhdIG1pbi1oLVsyNTBweF0gc206bWluLXctWzIwdnddIHNtOm1pbi1oLVsyMHZoXSByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2Jhbm5lci1kcmFmdC5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpbiBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBzbTpmbGV4LWNvbCBzbTpqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICB7bWVudU9wZW4gJiYgKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNwYWNlLXgtMTAgc3BhY2UteS04IHNtOnNwYWNlLXktMCBzbTppdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgdy1mdWxsIGZsZXggZmxleC1jb2wgc206ZmxleC1yb3dgfVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTEwIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtMTAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXIgc3BhY2UteS01IHNtOnNwYWNlLXktMCBzbTpzcGFjZS14LTggdGV4dC0zeGwgZm9udC1zYW5zIHBsLTEwIHNtOnBsLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYWJvdXRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS03MDAgaG92ZXI6dGV4dC1vcmFuZ2UtOTUwIGFjdGl2ZTp0ZXh0LW9yYW5nZS01MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBQk9VVFxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9uZXdzXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNzAwIGhvdmVyOnRleHQtb3JhbmdlLTk1MCBhY3RpdmU6dGV4dC1vcmFuZ2UtNTAwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTkVXU1xuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9pc3N1ZXNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS03MDAgaG92ZXI6dGV4dC1vcmFuZ2UtOTUwIGFjdGl2ZTp0ZXh0LW9yYW5nZS01MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBJU1NVRVNcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc206aXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgc206anVzdGlmeS1iZXR3ZWVuIHNwYWNlLXgtMTAgc206c3BhY2UteC0xMCBwYi0xMCBzbTpwYi0wIHRleHQtM3hsXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLVttZGktLWZhY2Vib29rXSB0ZXh0LW9yYW5nZS03MDAgaG92ZXI6dGV4dC1vcmFuZ2UtOTUwIGFjdGl2ZTp0ZXh0LW9yYW5nZS01MDAgcC01IHNtOnAtMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0tdHdpdHRlcl0gdGV4dC1vcmFuZ2UtNzAwIGhvdmVyOnRleHQtb3JhbmdlLTk1MCBhY3RpdmU6dGV4dC1vcmFuZ2UtNTAwIHAtNSBzbTpwLTBcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92aXRhbHNpZ25zY29udGVudGVkaXRvci5jby51ay9yc3NcIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWNvbCBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWVuZFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0tcnNzXSB0ZXh0LW9yYW5nZS03MDAgaG92ZXI6dGV4dC1vcmFuZ2UtOTUwIGFjdGl2ZTp0ZXh0LW9yYW5nZS01MDAgcC01IHNtOnAtMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86dml0YWxzaWduc21hZ0Bwcm90b24ubWVcIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWNvbCBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWVuZFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0tZW1haWxdIHRleHQtb3JhbmdlLTcwMCBob3Zlcjp0ZXh0LW9yYW5nZS05NTAgYWN0aXZlOnRleHQtb3JhbmdlLTUwMCBwLTUgc206cC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwiSW1hZ2UiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJIZWFkZXIiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwidmFyaWFudHMiLCJvcGVuIiwib3BhY2l0eSIsInkiLCJjbG9zZWQiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJzcGFuIiwiaHJlZiIsInNyYyIsImFsdCIsImZpbGwiLCJleGl0IiwiYSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});