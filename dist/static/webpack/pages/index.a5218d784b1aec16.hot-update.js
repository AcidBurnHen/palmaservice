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

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar ErrorMessage = function(param) {\n    var msg = param.msg, show = param.show, textarea = param.textarea;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hideAlert = ref[0], setHideAlert = ref[1];\n    var closeAlert = function(e) {\n        e.preventDefault();\n        setHideAlert(true);\n    };\n    var textAreaClass = function() {\n        if (textarea === undefined) {\n            return \"\";\n        }\n        return textarea;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"error-message \".concat(show, \" \").concat(textAreaClass),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"error-message__container \".concat(hideAlert ? \"error-message__hide\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"error-message__msg\",\n                    children: msg\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ccaci\\\\Desktop\\\\Coding\\\\NextJS\\\\palma-service\\\\components\\\\ErrorMessage.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: closeAlert,\n                    className: \"error-message__btn\",\n                    children: \"x\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ccaci\\\\Desktop\\\\Coding\\\\NextJS\\\\palma-service\\\\components\\\\ErrorMessage.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ccaci\\\\Desktop\\\\Coding\\\\NextJS\\\\palma-service\\\\components\\\\ErrorMessage.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ccaci\\\\Desktop\\\\Coding\\\\NextJS\\\\palma-service\\\\components\\\\ErrorMessage.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(ErrorMessage, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = ErrorMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorMessage);\nvar _c;\n$RefreshReg$(_c, \"ErrorMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFpQzs7QUFFakMsSUFBTUMsWUFBWSxHQUFHLGdCQUE0QjtRQUF6QkMsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ3pDLElBQWtDSixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBSG5ELFNBR2tCLEdBQWtCQSxHQUFlLEdBQWpDLEVBSGxCLFlBR2dDLEdBQUlBLEdBQWUsR0FBbkI7SUFFOUIsSUFBTU8sVUFBVSxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN4QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUNuQkgsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BCO0lBRUQsSUFBTUksYUFBYSxHQUFHLFdBQU07UUFDMUIsSUFBSU4sUUFBUSxLQUFLTyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxFQUFFO1NBQ1Y7UUFFRCxPQUFPUCxRQUFRO0tBQ2hCO0lBRUQscUJBQ0UsOERBQUNRLEtBQUc7UUFBQ0MsU0FBUyxFQUFFLGdCQUFlLENBQVVILE1BQWEsQ0FBckJQLElBQUksRUFBQyxHQUFDLENBQWdCLFFBQWRPLGFBQWEsQ0FBRTtrQkFDdEQsNEVBQUNFLEtBQUc7WUFDRkMsU0FBUyxFQUFFLDJCQUEwQixDQUVwQyxPQURDUixTQUFTLEdBQUcscUJBQXFCLEdBQUcsRUFBRSxDQUN0Qzs7OEJBQ0YsOERBQUNTLEdBQUM7b0JBQUNELFNBQVMsRUFBQyxvQkFBb0I7OEJBQUVYLEdBQUc7Ozs7O3lCQUFLOzhCQUMzQyw4REFBQ2EsUUFBTTtvQkFBQ0MsT0FBTyxFQUFFVCxVQUFVO29CQUFFTSxTQUFTLEVBQUMsb0JBQW9COzhCQUFDLEdBRTVEOzs7Ozt5QkFBUzs7Ozs7O2lCQUNMOzs7OzthQUNGLENBQ047Q0FDSDtHQTdCS1osWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBK0JsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLmpzPzYyNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBFcnJvck1lc3NhZ2UgPSAoeyBtc2csIHNob3csIHRleHRhcmVhfSkgPT4ge1xyXG4gIGNvbnN0IFtoaWRlQWxlcnQsIHNldEhpZGVBbGVydF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNsb3NlQWxlcnQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SGlkZUFsZXJ0KHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRleHRBcmVhQ2xhc3MgPSAoKSA9PiB7XHJcbiAgICBpZiAodGV4dGFyZWEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0YXJlYVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZXJyb3ItbWVzc2FnZSAke3Nob3d9ICR7dGV4dEFyZWFDbGFzc31gfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YGVycm9yLW1lc3NhZ2VfX2NvbnRhaW5lciAke1xyXG4gICAgICAgICAgaGlkZUFsZXJ0ID8gJ2Vycm9yLW1lc3NhZ2VfX2hpZGUnIDogJydcclxuICAgICAgICB9YH0+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSdlcnJvci1tZXNzYWdlX19tc2cnPnttc2d9PC9wPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y2xvc2VBbGVydH0gY2xhc3NOYW1lPSdlcnJvci1tZXNzYWdlX19idG4nPlxyXG4gICAgICAgICAgeFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvck1lc3NhZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkVycm9yTWVzc2FnZSIsIm1zZyIsInNob3ciLCJ0ZXh0YXJlYSIsImhpZGVBbGVydCIsInNldEhpZGVBbGVydCIsImNsb3NlQWxlcnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0QXJlYUNsYXNzIiwidW5kZWZpbmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ErrorMessage.js\n");

/***/ })

});