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

/***/ "./pages/components/Contact.js":
/*!*************************************!*\
  !*** ./pages/components/Contact.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Medo_Desktop_Coding_Palma_Service_palma_services_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Medo_Desktop_Coding_Palma_Service_palma_services_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Medo_Desktop_Coding_Palma_Service_palma_services_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/si */ \"./node_modules/react-icons/si/index.esm.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Contact = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), subject = ref2[0], setSubject = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), message = ref3[0], setMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), submitted = ref4[0], setSubmitted = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"initial\"), loading = ref5[0], setLoaded = ref5[1];\n    var handleName = function(e) {\n        setName(e.target.value);\n    };\n    var handleEmail = function(e) {\n        setEmail(e.target.value);\n    };\n    var handleSubject = function(e) {\n        setSubject(e.target.value);\n    };\n    var handleMessage = function(e) {\n        setMessage(e.target.value);\n    };\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_Medo_Desktop_Coding_Palma_Service_palma_services_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var data;\n            return C_Users_Medo_Desktop_Coding_Palma_Service_palma_services_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        console.log(\"sending\");\n                        setLoaded(\"loading\");\n                        data = {\n                            name: name,\n                            email: email,\n                            subject: subject,\n                            message: message\n                        };\n                        _ctx.next = 6;\n                        return fetch(\"/api/contact\", {\n                            method: \"POST\",\n                            headers: {\n                                Accept: \"application/json, text/plain, */*\",\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify(data)\n                        }).then(function(res) {\n                            if (res.status === 200) {\n                                setSubmitted(true);\n                                setLoaded(\"loaded\");\n                            }\n                        }).catch(function(error) {\n                            console.log(error);\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        id: \"contact\",\n        className: \"contact-us\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"contact-us__title-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineMail, {\n                        className: \"contact-us__icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"contact-us__title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            children: \"Contact Us\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"contact-us__form-container wrapper\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    className: \"contact-us__form\",\n                    children: [\n                        loading == \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"contact-us__labels\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            htmlFor: \"name\",\n                                            children: \"Name\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            htmlFor: \"subject\",\n                                            children: \"Subject\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            htmlFor: \"message\",\n                                            children: \"Message\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"contact-us__inputs\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            onChange: handleName,\n                                            type: \"text\",\n                                            name: \"name\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            onChange: handleEmail,\n                                            type: \"email\",\n                                            name: \"email\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            onChange: handleSubject,\n                                            type: \"text\",\n                                            name: \"subject\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                                            className: \"contact-us__message\",\n                                            onChange: handleMessage,\n                                            type: \"text\",\n                                            name: \"message\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true) : \"\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"loading\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"alert \".concat(loading == \"loaded\" ? \"alert__show\" : \"alert__hide\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"alert__icon--container\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_5__.SiMinutemailer, {\n                                        className: \"alert__icon\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"alert__text\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: \"Email Sent!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: \"contact-us__submit\",\n                            onClick: handleSubmit,\n                            type: \"submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Medo\\\\Desktop\\\\Coding\\\\Palma Service\\\\palma-services\\\\pages\\\\components\\\\Contact.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, _this);\n};\n_s(Contact, \"E99xio5Ur55+JxJnBad9jKs+J0w=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O3lCQUN4RTs7Ozs7cUJBQ0g7Ozs7OzthQUNGLENBQ047Q0FDSDtHQWpHSzlDLE9BQU87QUFBUEEsS0FBQUEsT0FBTztBQW1HYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvQ29udGFjdC5qcz85OWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXh0IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZU1haWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgU2lNaW51dGVtYWlsZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcclxuaW1wb3J0IHsgQmlNYWlsU2VuZCB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdWJqZWN0LCBzZXRTdWJqZWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShcImluaXRpYWxcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5hbWUgPSBlID0+IHtcclxuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVtYWlsID0gZSA9PiB7XHJcbiAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3ViamVjdCA9IGUgPT4ge1xyXG4gICAgc2V0U3ViamVjdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IGUgPT4ge1xyXG4gICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInNlbmRpbmdcIik7XHJcbiAgICBzZXRMb2FkZWQoXCJsb2FkaW5nXCIpO1xyXG5cclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgc3ViamVjdCxcclxuICAgICAgbWVzc2FnZVxyXG4gICAgfTtcclxuXHJcbiAgICBhd2FpdCBmZXRjaChcIi9hcGkvY29udGFjdFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgc2V0U3VibWl0dGVkKHRydWUpO1xyXG4gICAgICAgICAgc2V0TG9hZGVkKFwibG9hZGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiY29udGFjdFwiIGNsYXNzTmFtZT1cImNvbnRhY3QtdXNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LXVzX190aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgICA8QWlPdXRsaW5lTWFpbCBjbGFzc05hbWU9XCJjb250YWN0LXVzX19pY29uXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtdXNfX3RpdGxlXCI+XHJcbiAgICAgICAgICA8aDI+Q29udGFjdCBVczwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtdXNfX2Zvcm0tY29udGFpbmVyIHdyYXBwZXJcIj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb250YWN0LXVzX19mb3JtXCI+XHJcbiAgICAgICAgICB7bG9hZGluZyA9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC11c19fbGFiZWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1YmplY3RcIj5TdWJqZWN0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC11c19faW5wdXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZU5hbWV9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVFbWFpbH0gdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlU3ViamVjdH0gdHlwZT1cInRleHRcIiBuYW1lPVwic3ViamVjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiY29udGFjdC11c19fbWVzc2FnZVwiIG9uQ2hhbmdlPXtoYW5kbGVNZXNzYWdlfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJtZXNzYWdlXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0ICR7bG9hZGluZyA9PSBcImxvYWRlZFwiID8gXCJhbGVydF9fc2hvd1wiIDogXCJhbGVydF9faGlkZVwifWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0X19pY29uLS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8U2lNaW51dGVtYWlsZXIgY2xhc3NOYW1lPVwiYWxlcnRfX2ljb25cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydF9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgIDxwPkVtYWlsIFNlbnQhPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNvbnRhY3QtdXNfX3N1Ym1pdFwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iXSwibmFtZXMiOlsibmV4dCIsInVzZVN0YXRlIiwiQWlPdXRsaW5lTWFpbCIsIlNpTWludXRlbWFpbGVyIiwiQmlNYWlsU2VuZCIsIkNvbnRhY3QiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJzdWJqZWN0Iiwic2V0U3ViamVjdCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwibG9hZGluZyIsInNldExvYWRlZCIsImhhbmRsZU5hbWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVFbWFpbCIsImhhbmRsZVN1YmplY3QiLCJoYW5kbGVNZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZGF0YSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwidGV4dGFyZWEiLCJwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Contact.js\n");

/***/ })

});