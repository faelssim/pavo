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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_without_properties.mjs */ \"./node_modules/@swc/helpers/src/_object_without_properties.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/footer */ \"./components/footer.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var _id_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./[id].module.css */ \"./pages/posts/[id].module.css\");\n/* harmony import */ var _id_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_id_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/*\r\n * @Author: wangkun\r\n * @Date: 2022-08-31 09:21:32\r\n * @LastEditTime: 2022-09-01 16:56:26\r\n * @LastEditors: wangkun\r\n * @Description: \r\n */ \n\n\n\n\n\n\n\n\n\n // 扩展链接、表格\n\nvar CODE_THEME = [\n    \"tomorrow\",\n    \"synthwave84\",\n    \"solarizedlight\",\n    \"pojoaque\",\n    \"coldarkCold\",\n    \"dark\"\n];\nvar __N_SSG = true;\nfunction Post(props) {\n    var postData = props.postData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: postData.title\n                }, void 0, false, {\n                    fileName: \"D:\\\\workspace\\\\study\\\\pavo\\\\pages\\\\posts\\\\[id].js\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\workspace\\\\study\\\\pavo\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"h-screen flex flex-col \" + (_id_module_css__WEBPACK_IMPORTED_MODULE_4___default().d_page),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"flex-grow\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-extrabold tracking-tighter text-center pt-10\",\n                                children: postData.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\workspace\\\\study\\\\pavo\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                                className: \"py-8 prose prose-h1:mt-8 px-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    className: \"markdown-body\",\n                                    remarkPlugins: [\n                                        remark_gfm__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n                                    ],\n                                    children: postData.content,\n                                    components: {\n                                        code: function code(_param) {\n                                            var node = _param.node, inline = _param.inline, className = _param.className, children = _param.children, _$props = (0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_param, [\n                                                \"node\",\n                                                \"inline\",\n                                                \"className\",\n                                                \"children\"\n                                            ]);\n                                            var match = \"javascript\";\n                                            return !inline && match ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_8__.PrismLight, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\n                                                children: String(children).replace(/\\n$/, \"\"),\n                                                style: CODE_THEME[Math.ceil(Math.random() * CODE_THEME.length)],\n                                                language: match,\n                                                PreTag: \"div\"\n                                            }, _$props), void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\n                                                className: className\n                                            }, _$props), {\n                                                children: children\n                                            }), void 0, false, void 0, void 0);\n                                        }\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\workspace\\\\study\\\\pavo\\\\pages\\\\posts\\\\[id].js\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\workspace\\\\study\\\\pavo\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\workspace\\\\study\\\\pavo\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\study\\\\pavo\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\workspace\\\\study\\\\pavo\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQU9BLE9BQU9BLE1BQU0sTUFBTTtBQUNuQixPQUFPQyxNQUFNO0FBQ2IsSUFBNEI7QUFDZTtBQUNnQztBQUNBO0FBQ3BDO0FBRUQ7QUFFbkI7QUFDTDtBQUNHO0FBQ0c7QUFDTjtBQUNHO0lBQ2IsTUFBTTtDQUNUOztBQUVELGVBQWU7SUFDWCxJQUFNO0lBQ047OzttQkFHWTtlQUFRZ0I7Ozs7O3dCQUF1Qjs7Ozs7b0JBQzVCOztnQkFDRUcsU0FBUyxFQUFHOzs7d0JBQ1JBOztnR0FDTDtnQ0FBSUEsU0FBUyxFQUFDOzs7Ozs7b0NBRVQ7MENBQ0wsUUFBQ0c7Z0NBQVFILFNBQVMsRUFBQzswQ0FDZixzQkFBQ2pCLGFBQWE7b0NBQ1ZpQixTQUFTLEVBQUM7b0NBQ1ZJOztxQ0FBdUI7b0NBQ3ZCQyxRQUFRLEVBQUdSLFFBQVEsQ0FBQ1MsT0FBTztvQ0FDM0JDLFVBQVUsRUFBRTt3Q0FDUkMsSUFBSSxFQUFKQSxTQUFBQSxJQUFJLENBQUM7Z0RBQUNDLElBQUk7OztnREFBVVQsV0FBUztnREFBRUs7OzRDQUMzQixJQUFNTSxLQUFLLEdBQUcsWUFBWTs0Q0FDMUIsT0FBTyxDQUFDRDtnREFFQUwsUUFBUTtnREFDUlMsS0FBSyxFQUFHcEI7Z0RBQ1J5QixRQUFRLEVBQUdSOzsrQ0FFTmYsT0FBSztnREFHUkksU0FBUyxFQUFHQSxTQUFTOytDQUFRSixPQUFLOzBEQUNsQ1MsUUFBUTs7eUNBR3JCO3FDQUNKOzs7Ozt3Q0FDSDs7Ozs7b0NBQ0k7Ozs7Ozs0QkFDSjs7Ozs7NEJBQ0E7Ozs7OztvQkFDSjs7b0JBQ1gsQ0FDTjtDQUNKO0FBMUN1QlYsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9baWRdLmpzPzc5NjYiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogd2FuZ2t1blxyXG4gKiBARGF0ZTogMjAyMi0wOC0zMSAwOToyMTozMlxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTA5LTAxIDE2OjU2OjI2XHJcbiAqIEBMYXN0RWRpdG9yczogd2FuZ2t1blxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKi9cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biAgZnJvbSAncmVhY3QtbWFya2Rvd24nXHJcbmltcG9ydCB7IFByaXNtTGlnaHQgYXMgU3ludGF4SGlnaGxpZ2h0ZXIgIH0gZnJvbSAncmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyJ1xyXG5pbXBvcnQgeyB0b21vcnJvdywgc3ludGh3YXZlODQsIHNvbGFyaXplZGxpZ2h0LCBwb2pvYXF1ZSwgY29sZGFya0NvbGQsIGRhcmsgfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtJ1xyXG5pbXBvcnQgZ2ZtIGZyb20gJ3JlbWFyay1nZm0nIC8vIOaJqeWxlemTvuaOpeOAgeihqOagvFxyXG5pbXBvcnQgeyBnZXRQb3N0RGF0YSwgZ2V0QWxsUG9zdElkcyB9IGZyb20gJy4uLy4uL3V0aWxzL3Bvc3RzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vW2lkXS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgQ09ERV9USEVNRSA9IFtcclxuICAgICd0b21vcnJvdycsXHJcbiAgICAnc3ludGh3YXZlODQnLFxyXG4gICAgJ3NvbGFyaXplZGxpZ2h0JyxcclxuICAgICdwb2pvYXF1ZScsXHJcbiAgICAnY29sZGFya0NvbGQnLFxyXG4gICAgJ2RhcmsnXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QgKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IHBvc3REYXRhIH0gPSBwcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57cG9zdERhdGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9eyAnaC1zY3JlZW4gZmxleCBmbGV4LWNvbCAnICsgc3R5bGVzLmRfcGFnZSB9PlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdmbGV4LWdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0ZXIgdGV4dC1jZW50ZXIgcHQtMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdERhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J3B5LTggcHJvc2UgcHJvc2UtaDE6bXQtOCBweC04Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcmtkb3duLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtYXJrUGx1Z2lucz17IFsgZ2ZtIF0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49eyBwb3N0RGF0YS5jb250ZW50IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlKHtub2RlLCBpbmxpbmUsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzfSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9ICdqYXZhc2NyaXB0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWlubGluZSAmJiBtYXRjaCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTeW50YXhIaWdobGlnaHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPXsgU3RyaW5nKGNoaWxkcmVuKS5yZXBsYWNlKC9cXG4kLywgJycpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IENPREVfVEhFTUVbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiBDT0RFX1RIRU1FLmxlbmd0aCldIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZT17IG1hdGNoIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmVUYWc9XCJkaXZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4ucHJvcHMgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9IHsgLi4ucHJvcHMgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY29kZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIOiOt+WPluaJgOacieaWh+eroGlk77yM5Y2z5omA5pyJ6Lev55SxXHJcbiAgICBjb25zdCBwYXRocyA9IGdldEFsbFBvc3RJZHMoKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcblx0Ly8g6I635Y+W5paH56ug5YaF5a65IFxyXG4gICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0RGF0YShwYXJhbXMuaWQpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBvc3REYXRhXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJGb290ZXIiLCJIZWFkIiwiUmVhY3RNYXJrZG93biIsIlByaXNtTGlnaHQiLCJTeW50YXhIaWdobGlnaHRlciIsInRvbW9ycm93Iiwic3ludGh3YXZlODQiLCJzb2xhcml6ZWRsaWdodCIsInBvam9hcXVlIiwiY29sZGFya0NvbGQiLCJkYXJrIiwiZ2ZtIiwic3R5bGVzIiwiQ09ERV9USEVNRSIsIlBvc3QiLCJwcm9wcyIsInBvc3REYXRhIiwidGl0bGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZF9wYWdlIiwiaDEiLCJhcnRpY2xlIiwicmVtYXJrUGx1Z2lucyIsImNoaWxkcmVuIiwiY29udGVudCIsImNvbXBvbmVudHMiLCJjb2RlIiwibm9kZSIsImlubGluZSIsIm1hdGNoIiwiU3RyaW5nIiwicmVwbGFjZSIsInN0eWxlIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJsZW5ndGgiLCJsYW5ndWFnZSIsIlByZVRhZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n"));

/***/ })

});