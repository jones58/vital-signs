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

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const variants = {\n        open: {\n            opacity: 1,\n            y: 0\n        },\n        closed: {\n            opacity: 0,\n            y: -10\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-orange-50 sm:px-10 pb-5 mb-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sm:grid sm:grid-cols-2 sm:mx-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-between px-10 sm:px-0 sm:justify-start sm:space-y-10 bg-orange-50\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setMenuOpen(!menuOpen),\n                            className: \"sm:hidden text-4xl text-orange-700\",\n                            children: menuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"icon-[mdi--arrow-up] text-orange-700\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"icon-[mdi--hamburger-menu] text-orange-700\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: \"max-h-[220px] \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"min-w-[250px] min-h-[250px] sm:min-w-[20vw] sm:min-h-[20vh] relative\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/images/banner-draft.png\",\n                                    alt: \"logo\",\n                                    fill: true,\n                                    className: \"object-contain object-center\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row sm:flex-col sm:justify-end\",\n                    children: menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"absolute sm:fixed space-x-10 space-y-8 sm:space-y-0 sm:items-center justify-end w-full flex flex-col sm:flex-row z-50 bg-orange-50\",\n                        initial: {\n                            opacity: 0,\n                            y: -20\n                        },\n                        animate: {\n                            opacity: 1,\n                            y: 0\n                        },\n                        exit: {\n                            opacity: 0,\n                            y: -20\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col sm:flex-row sm:items-center space-y-5 sm:space-y-0 sm:space-x-8 text-3xl font-sans pl-10 sm:pl-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/about\",\n                                        className: \"text-orange-700 hover:text-orange-950 active:text-orange-500\",\n                                        children: \"ABOUT\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/news\",\n                                        className: \"text-orange-700 hover:text-orange-950 active:text-orange-500\",\n                                        children: \"NEWS\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/issues\",\n                                        className: \"text-orange-700 hover:text-orange-950 active:text-orange-500\",\n                                        children: \"ISSUES\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row sm:items-center justify-start sm:justify-between space-x-10 sm:space-x-10 pb-10 sm:pb-0 text-3xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--facebook] text-orange-700 hover:text-orange-950 active:text-orange-500 p-5 sm:p-0\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-[mdi--twitter] text-orange-700 hover:text-orange-950 active:text-orange-500 p-5 sm:p-0\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://vitalsignscontenteditor.co.uk/rss\",\n                                        target: \"_blank\",\n                                        className: \"flex-col flex justify-end items-end\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"icon-[mdi--rss] text-orange-700 hover:text-orange-950 active:text-orange-500 p-5 sm:p-0\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"mailto:vitalsignsmag@proton.me\",\n                                        target: \"_blank\",\n                                        className: \"flex-col flex justify-end items-end\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"icon-[mdi--email] text-orange-700 hover:text-orange-950 active:text-orange-500 p-5 sm:p-0\",\n                                            children: \" \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/header.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"K77eQVFAaxZgbvGoNWFAiCE7OTY=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0o7QUFDRTtBQUNRO0FBRXhCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFFekMsTUFBTU8sV0FBVztRQUNmQyxNQUFNO1lBQUVDLFNBQVM7WUFBR0MsR0FBRztRQUFFO1FBQ3pCQyxRQUFRO1lBQUVGLFNBQVM7WUFBR0MsR0FBRyxDQUFDO1FBQUc7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ0U7UUFBT0MsV0FBVTtrQkFDaEIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUNDQyxTQUFTLElBQU1WLFlBQVksQ0FBQ0Q7NEJBQzVCUSxXQUFVO3NDQUVUUix5QkFDQyw4REFBQ1k7Z0NBQUtKLFdBQVU7Ozs7O3FEQUVoQiw4REFBQ0k7Z0NBQUtKLFdBQVU7Ozs7Ozs7Ozs7O3NDQUdwQiw4REFBQ1osa0RBQUlBOzRCQUFDaUIsTUFBSzs0QkFBSUwsV0FBVTtzQ0FDdkIsNEVBQUNDO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDWCxtREFBS0E7b0NBQ0ppQixLQUFJO29DQUNKQyxLQUFJO29DQUNKQyxJQUFJO29DQUNKUixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtsQiw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ1pSLDBCQUNDLDhEQUFDRixpREFBTUEsQ0FBQ1csR0FBRzt3QkFDVEQsV0FBWTt3QkFDWlMsU0FBUzs0QkFBRWIsU0FBUzs0QkFBR0MsR0FBRyxDQUFDO3dCQUFHO3dCQUM5QmEsU0FBUzs0QkFBRWQsU0FBUzs0QkFBR0MsR0FBRzt3QkFBRTt3QkFDNUJjLE1BQU07NEJBQUVmLFNBQVM7NEJBQUdDLEdBQUcsQ0FBQzt3QkFBRzs7MENBRTNCLDhEQUFDSTtnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNaLGtEQUFJQTt3Q0FDSGlCLE1BQUs7d0NBQ0xMLFdBQVU7a0RBQ1g7Ozs7OztrREFHRCw4REFBQ1osa0RBQUlBO3dDQUNIaUIsTUFBSzt3Q0FDTEwsV0FBVTtrREFDWDs7Ozs7O2tEQUdELDhEQUFDWixrREFBSUE7d0NBQ0hpQixNQUFLO3dDQUNMTCxXQUFVO2tEQUNYOzs7Ozs7Ozs7Ozs7MENBSUgsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ0k7d0NBQUtKLFdBQVU7Ozs7OztrREFDaEIsOERBQUNJO3dDQUFLSixXQUFVOzs7Ozs7a0RBQ2hCLDhEQUFDWTt3Q0FDQ1AsTUFBSzt3Q0FDTFEsUUFBTzt3Q0FDUGIsV0FBVTtrREFFViw0RUFBQ0k7NENBQUtKLFdBQVU7Ozs7Ozs7Ozs7O2tEQUVsQiw4REFBQ1k7d0NBQ0NQLE1BQUs7d0NBQ0xRLFFBQU87d0NBQ1BiLFdBQVU7a0RBRVYsNEVBQUNJOzRDQUFLSixXQUFVO3NEQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVckI7R0F2RndCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci50c3g/ODcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgIG9wZW46IHsgb3BhY2l0eTogMSwgeTogMCB9LFxuICAgIGNsb3NlZDogeyBvcGFjaXR5OiAwLCB5OiAtMTAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctb3JhbmdlLTUwIHNtOnB4LTEwIHBiLTUgbWItMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Z3JpZCBzbTpncmlkLWNvbHMtMiBzbTpteC0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC0xMCBzbTpweC0wIHNtOmp1c3RpZnktc3RhcnQgc206c3BhY2UteS0xMCBiZy1vcmFuZ2UtNTBcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic206aGlkZGVuIHRleHQtNHhsIHRleHQtb3JhbmdlLTcwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge21lbnVPcGVuID8gKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLVttZGktLWFycm93LXVwXSB0ZXh0LW9yYW5nZS03MDBcIj48L3NwYW4+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLVttZGktLWhhbWJ1cmdlci1tZW51XSB0ZXh0LW9yYW5nZS03MDBcIj48L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibWF4LWgtWzIyMHB4XSBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctWzI1MHB4XSBtaW4taC1bMjUwcHhdIHNtOm1pbi13LVsyMHZ3XSBzbTptaW4taC1bMjB2aF0gcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9iYW5uZXItZHJhZnQucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW4gb2JqZWN0LWNlbnRlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc206ZmxleC1jb2wgc206anVzdGlmeS1lbmRcIj5cbiAgICAgICAgICB7bWVudU9wZW4gJiYgKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgc206Zml4ZWQgc3BhY2UteC0xMCBzcGFjZS15LTggc206c3BhY2UteS0wIHNtOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCB3LWZ1bGwgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyB6LTUwIGJnLW9yYW5nZS01MGB9XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTIwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHk6IC0yMCB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgc206aXRlbXMtY2VudGVyIHNwYWNlLXktNSBzbTpzcGFjZS15LTAgc206c3BhY2UteC04IHRleHQtM3hsIGZvbnQtc2FucyBwbC0xMCBzbTpwbC0wXCI+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYWJvdXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNzAwIGhvdmVyOnRleHQtb3JhbmdlLTk1MCBhY3RpdmU6dGV4dC1vcmFuZ2UtNTAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBQk9VVFxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9uZXdzXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTcwMCBob3Zlcjp0ZXh0LW9yYW5nZS05NTAgYWN0aXZlOnRleHQtb3JhbmdlLTUwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTkVXU1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9pc3N1ZXNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNzAwIGhvdmVyOnRleHQtb3JhbmdlLTk1MCBhY3RpdmU6dGV4dC1vcmFuZ2UtNTAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBJU1NVRVNcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc206aXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgc206anVzdGlmeS1iZXR3ZWVuIHNwYWNlLXgtMTAgc206c3BhY2UteC0xMCBwYi0xMCBzbTpwYi0wIHRleHQtM3hsXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS1mYWNlYm9va10gdGV4dC1vcmFuZ2UtNzAwIGhvdmVyOnRleHQtb3JhbmdlLTk1MCBhY3RpdmU6dGV4dC1vcmFuZ2UtNTAwIHAtNSBzbTpwLTBcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS10d2l0dGVyXSB0ZXh0LW9yYW5nZS03MDAgaG92ZXI6dGV4dC1vcmFuZ2UtOTUwIGFjdGl2ZTp0ZXh0LW9yYW5nZS01MDAgcC01IHNtOnAtMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdml0YWxzaWduc2NvbnRlbnRlZGl0b3IuY28udWsvcnNzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWNvbCBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWVuZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS1yc3NdIHRleHQtb3JhbmdlLTcwMCBob3Zlcjp0ZXh0LW9yYW5nZS05NTAgYWN0aXZlOnRleHQtb3JhbmdlLTUwMCBwLTUgc206cC0wXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIm1haWx0bzp2aXRhbHNpZ25zbWFnQHByb3Rvbi5tZVwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1jb2wgZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1lbmRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0tZW1haWxdIHRleHQtb3JhbmdlLTcwMCBob3Zlcjp0ZXh0LW9yYW5nZS05NTAgYWN0aXZlOnRleHQtb3JhbmdlLTUwMCBwLTUgc206cC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwiSW1hZ2UiLCJtb3Rpb24iLCJIZWFkZXIiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwidmFyaWFudHMiLCJvcGVuIiwib3BhY2l0eSIsInkiLCJjbG9zZWQiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiIsImhyZWYiLCJzcmMiLCJhbHQiLCJmaWxsIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJleGl0IiwiYSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});