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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ emailHandler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function emailHandler(req, res) {\n    let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n        port: 465,\n        host: process.env.HOST,\n        auth: {\n            user: process.env.USER,\n            pass: process.env.PASSWORD\n        },\n        secure: true,\n        debug: true,\n        logger: true\n    });\n    const body = req.body;\n    console.log(body);\n    const mail = {\n        from: body.email,\n        sender: body.email,\n        to: \"info@palmaservice.net\",\n        subject: body.subject + \" sent by \" + body.name,\n        replyTo: body.email,\n        inReplyTo: body.name,\n        text: body.message\n    };\n    await transporter.sendMail(mail, (err, data)=>{\n        if (err) {\n            res.json({\n                status: 405\n            });\n        } else {\n            res.json({\n                status: 200\n            });\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFFckIsZUFBZUMsWUFBWSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNuRCxJQUFJQyxXQUFXLEdBQUdKLGlFQUEwQixDQUFDO1FBQzNDTSxJQUFJLEVBQUUsR0FBRztRQUNUQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJO1FBQ3RCQyxJQUFJLEVBQUU7WUFDSkMsSUFBSSxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksSUFBSTtZQUN0QkMsSUFBSSxFQUFFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ00sUUFBUTtTQUMzQjtRQUNEQyxNQUFNLEVBQUUsSUFBSTtRQUNaQyxLQUFLLEVBQUUsSUFBSTtRQUNYQyxNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFFRixNQUFNQyxJQUFJLEdBQUdqQixHQUFHLENBQUNpQixJQUFJO0lBRXJCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7SUFFbEIsTUFBTUcsSUFBSSxHQUFHO1FBQ1hDLElBQUksRUFBRUosSUFBSSxDQUFDSyxLQUFLO1FBQ2hCQyxNQUFNLEVBQUVOLElBQUksQ0FBQ0ssS0FBSztRQUNsQkUsRUFBRSxFQUFFLHVCQUF1QjtRQUMzQkMsT0FBTyxFQUFFUixJQUFJLENBQUNRLE9BQU8sR0FBRyxXQUFXLEdBQUdSLElBQUksQ0FBQ1MsSUFBSTtRQUMvQ0MsT0FBTyxFQUFFVixJQUFJLENBQUNLLEtBQUs7UUFDbkJNLFNBQVMsRUFBRVgsSUFBSSxDQUFDUyxJQUFJO1FBQ3BCRyxJQUFJLEVBQUVaLElBQUksQ0FBQ2EsT0FBTztLQUNuQjtJQUVELE1BQU01QixXQUFXLENBQUM2QixRQUFRLENBQUNYLElBQUksRUFBRSxDQUFDWSxHQUFHLEVBQUVDLElBQUksR0FBSztRQUM5QyxJQUFJRCxHQUFHLEVBQUU7WUFDUC9CLEdBQUcsQ0FBQ2lDLElBQUksQ0FBQztnQkFDUEMsTUFBTSxFQUFFLEdBQUc7YUFDWixDQUFDLENBQUM7U0FDSixNQUFNO1lBQ0xsQyxHQUFHLENBQUNpQyxJQUFJLENBQUM7Z0JBQ1BDLE1BQU0sRUFBRSxHQUFHO2FBQ1osQ0FBQyxDQUFDO1NBQ0o7S0FDRixDQUFDLENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3BhbG1hLXNlcnZpY2VzLy4vcGFnZXMvYXBpL2NvbnRhY3QuanM/MzQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGVtYWlsSGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGxldCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuICAgIHBvcnQ6IDQ2NSxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkhPU1QsXHJcbiAgICBhdXRoOiB7XHJcbiAgICAgIHVzZXI6IHByb2Nlc3MuZW52LlVTRVIsXHJcbiAgICAgIHBhc3M6IHByb2Nlc3MuZW52LlBBU1NXT1JELFxyXG4gICAgfSxcclxuICAgIHNlY3VyZTogdHJ1ZSxcclxuICAgIGRlYnVnOiB0cnVlLFxyXG4gICAgbG9nZ2VyOiB0cnVlXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGJvZHkgPSByZXEuYm9keTtcclxuXHJcbiAgY29uc29sZS5sb2coYm9keSk7XHJcblxyXG4gIGNvbnN0IG1haWwgPSB7XHJcbiAgICBmcm9tOiBib2R5LmVtYWlsLFxyXG4gICAgc2VuZGVyOiBib2R5LmVtYWlsLFxyXG4gICAgdG86ICdpbmZvQHBhbG1hc2VydmljZS5uZXQnLFxyXG4gICAgc3ViamVjdDogYm9keS5zdWJqZWN0ICsgJyBzZW50IGJ5ICcgKyBib2R5Lm5hbWUsXHJcbiAgICByZXBseVRvOiBib2R5LmVtYWlsLFxyXG4gICAgaW5SZXBseVRvOiBib2R5Lm5hbWUsXHJcbiAgICB0ZXh0OiBib2R5Lm1lc3NhZ2UsXHJcbiAgfTtcclxuXHJcbiAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbCwgKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgaWYgKGVycikge1xyXG4gICAgICByZXMuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiA0MDUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLmpzb24oe1xyXG4gICAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsibm9kZW1haWxlciIsImVtYWlsSGFuZGxlciIsInJlcSIsInJlcyIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwicG9ydCIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiSE9TVCIsImF1dGgiLCJ1c2VyIiwiVVNFUiIsInBhc3MiLCJQQVNTV09SRCIsInNlY3VyZSIsImRlYnVnIiwibG9nZ2VyIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJtYWlsIiwiZnJvbSIsImVtYWlsIiwic2VuZGVyIiwidG8iLCJzdWJqZWN0IiwibmFtZSIsInJlcGx5VG8iLCJpblJlcGx5VG8iLCJ0ZXh0IiwibWVzc2FnZSIsInNlbmRNYWlsIiwiZXJyIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

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