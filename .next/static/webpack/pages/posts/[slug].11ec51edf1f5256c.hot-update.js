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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostBody; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post_body_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-body.module.css */ \"./components/post-body.module.css\");\n/* harmony import */ var _post_body_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_post_body_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction PostBody(param) {\n    let { content } = param;\n    // Function that transforms the content\n    const transformContent = (htmlContent)=>{\n        // Create a new DOMParser instance\n        const parser = new DOMParser();\n        // Parse the content string into a DOM object\n        const doc = parser.parseFromString(htmlContent, \"text/html\");\n        // Find all anchor elements in the content\n        const links = doc.querySelectorAll('a[href$=\".pdf\"]');\n        // Replace each PDF link with an iframe\n        links.forEach((link)=>{\n            const iframe = doc.createElement(\"iframe\");\n            iframe.setAttribute(\"src\", link);\n            iframe.style.width = \"100%\";\n            iframe.style.height = \"500px\"; // You can set a fixed height or make it responsive\n            link.parentNode.replaceChild(iframe, link);\n        });\n        // Serialize the DOM object back to a string\n        return doc.body.innerHTML;\n    };\n    // Transform the content to include iframes for PDF links\n    const transformedContent = transformContent(content);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-2xl mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_post_body_module_css__WEBPACK_IMPORTED_MODULE_1___default().content),\n            dangerouslySetInnerHTML: {\n                __html: transformedContent\n            }\n        }, void 0, false, {\n            fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-body.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/vital-signs/components/post-body.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_c = PostBody;\nvar _c;\n$RefreshReg$(_c, \"PostBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QtYm9keS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRzdCLFNBQVNDLFNBQVMsS0FBVztRQUFYLEVBQUVDLE9BQU8sRUFBRSxHQUFYO0lBQy9CLHVDQUF1QztJQUN2QyxNQUFNQyxtQkFBbUIsQ0FBQ0M7UUFDeEIsa0NBQWtDO1FBQ2xDLE1BQU1DLFNBQVMsSUFBSUM7UUFDbkIsNkNBQTZDO1FBQzdDLE1BQU1DLE1BQU1GLE9BQU9HLGVBQWUsQ0FBQ0osYUFBYTtRQUVoRCwwQ0FBMEM7UUFDMUMsTUFBTUssUUFBUUYsSUFBSUcsZ0JBQWdCLENBQUM7UUFFbkMsdUNBQXVDO1FBQ3ZDRCxNQUFNRSxPQUFPLENBQUMsQ0FBQ0M7WUFDYixNQUFNQyxTQUFTTixJQUFJTyxhQUFhLENBQUM7WUFDakNELE9BQU9FLFlBQVksQ0FBQyxPQUFPSDtZQUMzQkMsT0FBT0csS0FBSyxDQUFDQyxLQUFLLEdBQUc7WUFDckJKLE9BQU9HLEtBQUssQ0FBQ0UsTUFBTSxHQUFHLFNBQVMsbURBQW1EO1lBQ2xGTixLQUFLTyxVQUFVLENBQUNDLFlBQVksQ0FBQ1AsUUFBUUQ7UUFDdkM7UUFFQSw0Q0FBNEM7UUFDNUMsT0FBT0wsSUFBSWMsSUFBSSxDQUFDQyxTQUFTO0lBQzNCO0lBRUEseURBQXlEO0lBQ3pELE1BQU1DLHFCQUFxQnBCLGlCQUFpQkQ7SUFFNUMscUJBQ0UsOERBQUNzQjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUNDQyxXQUFXekIsc0VBQWM7WUFDekIwQix5QkFBeUI7Z0JBQUVDLFFBQVFKO1lBQW1COzs7Ozs7Ozs7OztBQUk5RDtLQW5Dd0J0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Bvc3QtYm9keS50c3g/ZmMyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3Bvc3QtYm9keS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiaHRtbHBhcnNlcjJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdEJvZHkoeyBjb250ZW50IH0pIHtcbiAgLy8gRnVuY3Rpb24gdGhhdCB0cmFuc2Zvcm1zIHRoZSBjb250ZW50XG4gIGNvbnN0IHRyYW5zZm9ybUNvbnRlbnQgPSAoaHRtbENvbnRlbnQpID0+IHtcbiAgICAvLyBDcmVhdGUgYSBuZXcgRE9NUGFyc2VyIGluc3RhbmNlXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIC8vIFBhcnNlIHRoZSBjb250ZW50IHN0cmluZyBpbnRvIGEgRE9NIG9iamVjdFxuICAgIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbENvbnRlbnQsIFwidGV4dC9odG1sXCIpO1xuXG4gICAgLy8gRmluZCBhbGwgYW5jaG9yIGVsZW1lbnRzIGluIHRoZSBjb250ZW50XG4gICAgY29uc3QgbGlua3MgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmJD1cIi5wZGZcIl0nKTtcblxuICAgIC8vIFJlcGxhY2UgZWFjaCBQREYgbGluayB3aXRoIGFuIGlmcmFtZVxuICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgIGNvbnN0IGlmcmFtZSA9IGRvYy5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcInNyY1wiLCBsaW5rKTtcbiAgICAgIGlmcmFtZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgaWZyYW1lLnN0eWxlLmhlaWdodCA9IFwiNTAwcHhcIjsgLy8gWW91IGNhbiBzZXQgYSBmaXhlZCBoZWlnaHQgb3IgbWFrZSBpdCByZXNwb25zaXZlXG4gICAgICBsaW5rLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGlmcmFtZSwgbGluayk7XG4gICAgfSk7XG5cbiAgICAvLyBTZXJpYWxpemUgdGhlIERPTSBvYmplY3QgYmFjayB0byBhIHN0cmluZ1xuICAgIHJldHVybiBkb2MuYm9keS5pbm5lckhUTUw7XG4gIH07XG5cbiAgLy8gVHJhbnNmb3JtIHRoZSBjb250ZW50IHRvIGluY2x1ZGUgaWZyYW1lcyBmb3IgUERGIGxpbmtzXG4gIGNvbnN0IHRyYW5zZm9ybWVkQ29udGVudCA9IHRyYW5zZm9ybUNvbnRlbnQoY29udGVudCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBteC1hdXRvXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdHJhbnNmb3JtZWRDb250ZW50IH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlBvc3RCb2R5IiwiY29udGVudCIsInRyYW5zZm9ybUNvbnRlbnQiLCJodG1sQ29udGVudCIsInBhcnNlciIsIkRPTVBhcnNlciIsImRvYyIsInBhcnNlRnJvbVN0cmluZyIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiaWZyYW1lIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiYm9keSIsImlubmVySFRNTCIsInRyYW5zZm9ybWVkQ29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/post-body.tsx\n"));

/***/ })

});