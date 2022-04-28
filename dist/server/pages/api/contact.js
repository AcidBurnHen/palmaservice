"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ emailHandler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst PASS = process.env.password;\nasync function emailHandler(req, res) {\n    let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        auth: {\n            user: \"palmaservicemailer@gmail.com\",\n            pass: PASS\n        },\n        secure: true\n    });\n    const body = req.body;\n    console.log(body);\n    const mail = {\n        from: body.email,\n        sender: body.email,\n        to: \"info@palmaservice.net\",\n        subject: body.subject + \" sent by \" + body.name,\n        replyTo: body.email,\n        inReplyTo: body.name,\n        text: body.message\n    };\n    await transporter.sendMail(mail, (err, data)=>{\n        if (err) {\n            res.json({\n                status: 405\n            });\n        } else {\n            res.json({\n                status: 200\n            });\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFDcENDLG9EQUF3QixFQUFFLENBQUM7QUFFM0IsTUFBTUUsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUTtBQUVsQixlQUFlQyxZQUFZLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ25ELElBQUlDLFdBQVcsR0FBR1YsaUVBQTBCLENBQUM7UUFDM0NZLElBQUksRUFBRSxHQUFHO1FBQ1RDLElBQUksRUFBRSxnQkFBZ0I7UUFDdEJDLElBQUksRUFBRTtZQUNKQyxJQUFJLEVBQUUsOEJBQThCO1lBQ3BDQyxJQUFJLEVBQUViLElBQUk7U0FDWDtRQUNEYyxNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFFRixNQUFNQyxJQUFJLEdBQUdWLEdBQUcsQ0FBQ1UsSUFBSTtJQUVyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQyxDQUFDO0lBRWxCLE1BQU1HLElBQUksR0FBRztRQUNYQyxJQUFJLEVBQUVKLElBQUksQ0FBQ0ssS0FBSztRQUNoQkMsTUFBTSxFQUFFTixJQUFJLENBQUNLLEtBQUs7UUFDbEJFLEVBQUUsRUFBRSx1QkFBdUI7UUFDM0JDLE9BQU8sRUFBRVIsSUFBSSxDQUFDUSxPQUFPLEdBQUcsV0FBVyxHQUFHUixJQUFJLENBQUNTLElBQUk7UUFDL0NDLE9BQU8sRUFBRVYsSUFBSSxDQUFDSyxLQUFLO1FBQ25CTSxTQUFTLEVBQUVYLElBQUksQ0FBQ1MsSUFBSTtRQUNwQkcsSUFBSSxFQUFFWixJQUFJLENBQUNhLE9BQU87S0FDbkI7SUFFRCxNQUFNckIsV0FBVyxDQUFDc0IsUUFBUSxDQUFDWCxJQUFJLEVBQUUsQ0FBQ1ksR0FBRyxFQUFFQyxJQUFJLEdBQUs7UUFDOUMsSUFBSUQsR0FBRyxFQUFFO1lBQ1B4QixHQUFHLENBQUMwQixJQUFJLENBQUM7Z0JBQ1BDLE1BQU0sRUFBRSxHQUFHO2FBQ1osQ0FBQyxDQUFDO1NBQ0osTUFBTTtZQUNMM0IsR0FBRyxDQUFDMEIsSUFBSSxDQUFDO2dCQUNQQyxNQUFNLEVBQUUsR0FBRzthQUNaLENBQUMsQ0FBQztTQUNKO0tBQ0YsQ0FBQyxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWxtYS1zZXJ2aWNlcy8uL3BhZ2VzL2FwaS9jb250YWN0LmpzPzM0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcclxucmVxdWlyZShcImRvdGVudlwiKS5jb25maWcoKTtcclxuXHJcbmNvbnN0IFBBU1MgPSBwcm9jZXNzLmVudi5wYXNzd29yZDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGVtYWlsSGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGxldCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuICAgIHBvcnQ6IDQ2NSxcclxuICAgIGhvc3Q6IFwic210cC5nbWFpbC5jb21cIixcclxuICAgIGF1dGg6IHtcclxuICAgICAgdXNlcjogXCJwYWxtYXNlcnZpY2VtYWlsZXJAZ21haWwuY29tXCIsXHJcbiAgICAgIHBhc3M6IFBBU1NcclxuICAgIH0sXHJcbiAgICBzZWN1cmU6IHRydWVcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYm9keSA9IHJlcS5ib2R5O1xyXG5cclxuICBjb25zb2xlLmxvZyhib2R5KTtcclxuXHJcbiAgY29uc3QgbWFpbCA9IHtcclxuICAgIGZyb206IGJvZHkuZW1haWwsXHJcbiAgICBzZW5kZXI6IGJvZHkuZW1haWwsXHJcbiAgICB0bzogXCJpbmZvQHBhbG1hc2VydmljZS5uZXRcIixcclxuICAgIHN1YmplY3Q6IGJvZHkuc3ViamVjdCArIFwiIHNlbnQgYnkgXCIgKyBib2R5Lm5hbWUsXHJcbiAgICByZXBseVRvOiBib2R5LmVtYWlsLFxyXG4gICAgaW5SZXBseVRvOiBib2R5Lm5hbWUsXHJcbiAgICB0ZXh0OiBib2R5Lm1lc3NhZ2VcclxuICB9O1xyXG5cclxuICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsLCAoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICBzdGF0dXM6IDQwNVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICBzdGF0dXM6IDIwMFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsibm9kZW1haWxlciIsInJlcXVpcmUiLCJjb25maWciLCJQQVNTIiwicHJvY2VzcyIsImVudiIsInBhc3N3b3JkIiwiZW1haWxIYW5kbGVyIiwicmVxIiwicmVzIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJwb3J0IiwiaG9zdCIsImF1dGgiLCJ1c2VyIiwicGFzcyIsInNlY3VyZSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwibWFpbCIsImZyb20iLCJlbWFpbCIsInNlbmRlciIsInRvIiwic3ViamVjdCIsIm5hbWUiLCJyZXBseVRvIiwiaW5SZXBseVRvIiwidGV4dCIsIm1lc3NhZ2UiLCJzZW5kTWFpbCIsImVyciIsImRhdGEiLCJqc29uIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();