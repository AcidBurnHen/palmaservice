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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst PASS = process.env.password;\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        auth: {\n            user: \"palmaservicemailer@gmail.com\",\n            pass: PASS\n        },\n        secure: true\n    });\n    const body = req.body;\n    const mail = {\n        from: body.email,\n        sender: body.email,\n        to: \"info@palmaservice.net\",\n        subject: body.subject + \" sent by \" + body.name,\n        replyTo: body.email,\n        inReplyTo: body.name,\n        text: body.message\n    };\n    transporter.sendMail(mail, (err, info)=>{\n        if (err) {\n            console.log(err);\n        } else {\n            console.log(info);\n        }\n    });\n    res.status(200);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFDcENDLG9EQUF3QixFQUFFLENBQUM7QUFFM0IsTUFBTUUsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUTtBQUVqQyw2QkFBZSxvQ0FBVUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDakMsTUFBTUMsV0FBVyxHQUFHVCxpRUFBMEIsQ0FBQztRQUM3Q1csSUFBSSxFQUFFLEdBQUc7UUFDVEMsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QkMsSUFBSSxFQUFFO1lBQ0pDLElBQUksRUFBRSw4QkFBOEI7WUFDcENDLElBQUksRUFBRVosSUFBSTtTQUNYO1FBQ0RhLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUVGLE1BQU1DLElBQUksR0FBR1YsR0FBRyxDQUFDVSxJQUFJO0lBRXJCLE1BQU1DLElBQUksR0FBRztRQUNYQyxJQUFJLEVBQUVGLElBQUksQ0FBQ0csS0FBSztRQUNoQkMsTUFBTSxFQUFFSixJQUFJLENBQUNHLEtBQUs7UUFDbEJFLEVBQUUsRUFBRSx1QkFBdUI7UUFDM0JDLE9BQU8sRUFBRU4sSUFBSSxDQUFDTSxPQUFPLEdBQUcsV0FBVyxHQUFHTixJQUFJLENBQUNPLElBQUk7UUFDL0NDLE9BQU8sRUFBRVIsSUFBSSxDQUFDRyxLQUFLO1FBQ25CTSxTQUFTLEVBQUVULElBQUksQ0FBQ08sSUFBSTtRQUNwQkcsSUFBSSxFQUFFVixJQUFJLENBQUNXLE9BQU87S0FDbkI7SUFFRG5CLFdBQVcsQ0FBQ29CLFFBQVEsQ0FBQ1gsSUFBSSxFQUFFLENBQUNZLEdBQUcsRUFBRUMsSUFBSSxHQUFLO1FBQ3hDLElBQUlELEdBQUcsRUFBRTtZQUNQRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDLENBQUM7U0FDbEIsTUFBTTtZQUNMRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7U0FDbkI7S0FDRixDQUFDLENBQUM7SUFFSHZCLEdBQUcsQ0FBQzBCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL3BhbG1hLXNlcnZpY2VzLy4vcGFnZXMvYXBpL2NvbnRhY3QuanM/MzQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xyXG5yZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpO1xyXG5cclxuY29uc3QgUEFTUyA9IHByb2Nlc3MuZW52LnBhc3N3b3JkO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICBwb3J0OiA0NjUsXHJcbiAgICBob3N0OiBcInNtdHAuZ21haWwuY29tXCIsXHJcbiAgICBhdXRoOiB7XHJcbiAgICAgIHVzZXI6IFwicGFsbWFzZXJ2aWNlbWFpbGVyQGdtYWlsLmNvbVwiLFxyXG4gICAgICBwYXNzOiBQQVNTXHJcbiAgICB9LFxyXG4gICAgc2VjdXJlOiB0cnVlXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGJvZHkgPSByZXEuYm9keTtcclxuXHJcbiAgY29uc3QgbWFpbCA9IHtcclxuICAgIGZyb206IGJvZHkuZW1haWwsXHJcbiAgICBzZW5kZXI6IGJvZHkuZW1haWwsXHJcbiAgICB0bzogXCJpbmZvQHBhbG1hc2VydmljZS5uZXRcIixcclxuICAgIHN1YmplY3Q6IGJvZHkuc3ViamVjdCArIFwiIHNlbnQgYnkgXCIgKyBib2R5Lm5hbWUsXHJcbiAgICByZXBseVRvOiBib2R5LmVtYWlsLFxyXG4gICAgaW5SZXBseVRvOiBib2R5Lm5hbWUsXHJcbiAgICB0ZXh0OiBib2R5Lm1lc3NhZ2VcclxuICB9O1xyXG5cclxuICB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsLCAoZXJyLCBpbmZvKSA9PiB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwicmVxdWlyZSIsImNvbmZpZyIsIlBBU1MiLCJwcm9jZXNzIiwiZW52IiwicGFzc3dvcmQiLCJyZXEiLCJyZXMiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInBvcnQiLCJob3N0IiwiYXV0aCIsInVzZXIiLCJwYXNzIiwic2VjdXJlIiwiYm9keSIsIm1haWwiLCJmcm9tIiwiZW1haWwiLCJzZW5kZXIiLCJ0byIsInN1YmplY3QiLCJuYW1lIiwicmVwbHlUbyIsImluUmVwbHlUbyIsInRleHQiLCJtZXNzYWdlIiwic2VuZE1haWwiLCJlcnIiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

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