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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar ErrorMessage = function(param) {\n    var msg = param.msg, show = param.show, textarea = param.textarea;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hideAlert = ref[0], setHideAlert = ref[1];\n    var closeAlert = function(e) {\n        e.preventDefault();\n        setHideAlert(true);\n    };\n    if (textarea === undefined) {\n        return \"\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"error-message \".concat(show, \" \").concat(textAreaClass),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"error-message__container \".concat(hideAlert ? \"error-message__hide\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"error-message__msg\",\n                    children: msg\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ccaci\\\\Desktop\\\\Coding\\\\NextJS\\\\palma-service\\\\components\\\\ErrorMessage.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: closeAlert,\n                    className: \"error-message__btn\",\n                    children: \"x\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ccaci\\\\Desktop\\\\Coding\\\\NextJS\\\\palma-service\\\\components\\\\ErrorMessage.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ccaci\\\\Desktop\\\\Coding\\\\NextJS\\\\palma-service\\\\components\\\\ErrorMessage.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ccaci\\\\Desktop\\\\Coding\\\\NextJS\\\\palma-service\\\\components\\\\ErrorMessage.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(ErrorMessage, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = ErrorMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorMessage);\nvar _c;\n$RefreshReg$(_c, \"ErrorMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFpQzs7QUFFakMsSUFBTUMsWUFBWSxHQUFHLGdCQUE2QjtRQUExQkMsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ3pDLElBQWtDSixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBSG5ELFNBR2tCLEdBQWtCQSxHQUFlLEdBQWpDLEVBSGxCLFlBR2dDLEdBQUlBLEdBQWUsR0FBbkI7SUFFOUIsSUFBTU8sVUFBVSxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN4QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUNuQkgsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BCO0lBRUQsSUFBSUYsUUFBUSxLQUFLTSxTQUFTLEVBQUU7UUFDMUIsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRSxnQkFBZSxDQUFVQyxNQUFhLENBQXJCVixJQUFJLEVBQUMsR0FBQyxDQUFnQixRQUFkVSxhQUFhLENBQUU7a0JBQ3RELDRFQUFDRixLQUFHO1lBQ0ZDLFNBQVMsRUFBRSwyQkFBMEIsQ0FFcEMsT0FEQ1AsU0FBUyxHQUFHLHFCQUFxQixHQUFHLEVBQUUsQ0FDdEM7OzhCQUNGLDhEQUFDUyxHQUFDO29CQUFDRixTQUFTLEVBQUMsb0JBQW9COzhCQUFFVixHQUFHOzs7Ozt5QkFBSzs4QkFDM0MsOERBQUNhLFFBQU07b0JBQUNDLE9BQU8sRUFBRVQsVUFBVTtvQkFBRUssU0FBUyxFQUFDLG9CQUFvQjs4QkFBQyxHQUU1RDs7Ozs7eUJBQVM7Ozs7OztpQkFDTDs7Ozs7YUFDRixDQUNOO0NBQ0g7R0F6QktYLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQTJCbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS5qcz82MjVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gKHsgbXNnLCBzaG93LCB0ZXh0YXJlYSB9KSA9PiB7XHJcbiAgY29uc3QgW2hpZGVBbGVydCwgc2V0SGlkZUFsZXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgY2xvc2VBbGVydCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRIaWRlQWxlcnQodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHRleHRhcmVhID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGVycm9yLW1lc3NhZ2UgJHtzaG93fSAke3RleHRBcmVhQ2xhc3N9YH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2BlcnJvci1tZXNzYWdlX19jb250YWluZXIgJHtcclxuICAgICAgICAgIGhpZGVBbGVydCA/ICdlcnJvci1tZXNzYWdlX19oaWRlJyA6ICcnXHJcbiAgICAgICAgfWB9PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZXJyb3ItbWVzc2FnZV9fbXNnJz57bXNnfTwvcD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nsb3NlQWxlcnR9IGNsYXNzTmFtZT0nZXJyb3ItbWVzc2FnZV9fYnRuJz5cclxuICAgICAgICAgIHhcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JNZXNzYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJFcnJvck1lc3NhZ2UiLCJtc2ciLCJzaG93IiwidGV4dGFyZWEiLCJoaWRlQWxlcnQiLCJzZXRIaWRlQWxlcnQiLCJjbG9zZUFsZXJ0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidW5kZWZpbmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwidGV4dEFyZWFDbGFzcyIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ErrorMessage.js\n");

/***/ })

});