"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/footer */ \"./components/footer.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var _components_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/code */ \"./components/code.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var _id_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./[id].module.css */ \"./pages/posts/[id].module.css\");\n/* harmony import */ var _id_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_id_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/*\r\n * @Author: wangkun\r\n * @Date: 2022-08-31 09:21:32\r\n * @LastEditTime: 2022-09-01 16:36:41\r\n * @LastEditors: wangkun\r\n * @Description: \r\n */ \n\n\n\n\n\n // 扩展链接、表格\n\nvar __N_SSG = true;\nfunction Post(param) {\n    var postData = param.postData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: postData.title\n                }, void 0, false, {\n                    fileName: \"D:\\\\workspace\\\\study\\\\pavo\\\\pages\\\\posts\\\\[id].js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\workspace\\\\study\\\\pavo\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"h-screen flex flex-col \" + (_id_module_css__WEBPACK_IMPORTED_MODULE_5___default().d_page),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"flex-grow\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-extrabold tracking-tighter text-center pt-10\",\n                                children: postData.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\workspace\\\\study\\\\pavo\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                                className: \"py-8 prose prose-h1:mt-8 px-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    className: \"markdown-body\",\n                                    remarkPlugins: [\n                                        remark_gfm__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                    ],\n                                    children: postData.content,\n                                    renderers: {\n                                        code: _components_code__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\workspace\\\\study\\\\pavo\\\\pages\\\\posts\\\\[id].js\",\n                                    lineNumber: 29,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\workspace\\\\study\\\\pavo\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\workspace\\\\study\\\\pavo\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\study\\\\pavo\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\workspace\\\\study\\\\pavo\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BLE9BQU9BLE1BQU0sTUFBTTtBQUNuQixPQUFPQyxNQUFNLE1BQU07QUFDbkIsT0FBT0MsSUFBSSxNQUFNLFdBQVc7QUFDNUIsT0FBT0MsYUFBYTtBQUNwQixPQUFPQyxJQUFJLE1BQU07QUFDakIsSUFBdUM7QUFFRDs7QUFFUjtBQUFVO0FBRWhDOztBQUNTO21CQUNEO2VBQVFJOzs7Ozt3QkFBdUI7Ozs7O29CQUM1Qjs7Z0JBQ0VHLFNBQVMsRUFBRzs7O3dCQUNSQTs7Z0dBQ0w7Z0NBQUlBLFNBQVMsRUFBQzs7Ozs7O29DQUVUOzBDQUNMLFFBQUNHO2dDQUFRSCxTQUFTLEVBQUM7MENBQ2Ysc0JBQUNSLGFBQWE7b0NBQ1ZRLFNBQVMsRUFBQztvQ0FDVkk7O3FDQUF1QjtvQ0FDdkJDLFFBQVEsRUFBR1IsUUFBUSxDQUFDUyxPQUFPO29DQUMzQkMsU0FBUyxFQUFFO3dDQUNQQyxJQUFJLEVBQUVmLElBQUk7cUNBQ2I7Ozs7O3dDQUNIOzs7OztvQ0FDSTs7Ozs7OzRCQUNKOzs7Ozs0QkFDQTs7Ozs7O29CQUNKOztvQkFDWCxDQUNOO0NBQ0o7QUExQnVCRyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tpZF0uanM/Nzk2NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAQXV0aG9yOiB3YW5na3VuXHJcbiAqIEBEYXRlOiAyMDIyLTA4LTMxIDA5OjIxOjMyXHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMDktMDEgMTY6MzY6NDFcclxuICogQExhc3RFZGl0b3JzOiB3YW5na3VuXHJcbiAqIEBEZXNjcmlwdGlvbjogXHJcbiAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSZWFjdE1hcmtkb3duICBmcm9tICdyZWFjdC1tYXJrZG93bidcclxuaW1wb3J0IENvZGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb2RlJ1xyXG5pbXBvcnQgZ2ZtIGZyb20gJ3JlbWFyay1nZm0nIC8vIOaJqeWxlemTvuaOpeOAgeihqOagvFxyXG5pbXBvcnQgeyBnZXRQb3N0RGF0YSwgZ2V0QWxsUG9zdElkcyB9IGZyb20gJy4uLy4uL3V0aWxzL3Bvc3RzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vW2lkXS5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCAoeyBwb3N0RGF0YSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntwb3N0RGF0YS50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17ICdoLXNjcmVlbiBmbGV4IGZsZXgtY29sICcgKyBzdHlsZXMuZF9wYWdlIH0+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZsZXgtZ3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHRlciB0ZXh0LWNlbnRlciBwdC0xMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0RGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT0ncHktOCBwcm9zZSBwcm9zZS1oMTptdC04IHB4LTgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFya2Rvd24tYm9keVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1hcmtQbHVnaW5zPXsgWyBnZm0gXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj17IHBvc3REYXRhLmNvbnRlbnQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXJzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogQ29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8g6I635Y+W5omA5pyJ5paH56ugaWTvvIzljbPmiYDmnInot6/nlLFcclxuICAgIGNvbnN0IHBhdGhzID0gZ2V0QWxsUG9zdElkcygpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuXHQvLyDojrflj5bmlofnq6DlhoXlrrkgXHJcbiAgICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IGdldFBvc3REYXRhKHBhcmFtcy5pZClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcG9zdERhdGFcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkxheW91dCIsIkZvb3RlciIsIkhlYWQiLCJSZWFjdE1hcmtkb3duIiwiQ29kZSIsImdmbSIsInN0eWxlcyIsIlBvc3QiLCJwb3N0RGF0YSIsInRpdGxlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRfcGFnZSIsImgxIiwiYXJ0aWNsZSIsInJlbWFya1BsdWdpbnMiLCJjaGlsZHJlbiIsImNvbnRlbnQiLCJyZW5kZXJlcnMiLCJjb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n"));

/***/ })

});