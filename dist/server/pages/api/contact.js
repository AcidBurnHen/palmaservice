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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ emailHandler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function emailHandler(req, res) {\n    let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n        port: 465,\n        host: process.env.HOST,\n        auth: {\n            user: process.env.USER,\n            pass: process.env.PASSWORD\n        },\n        secure: true,\n        debug: true,\n        logger: true\n    });\n    const body = req.body;\n    const mail = {\n        from: body.email,\n        sender: body.email,\n        to: \"info@palmaservice.net\",\n        subject: body.subject + \" sent by \" + body.name,\n        replyTo: body.email,\n        inReplyTo: body.name,\n        text: body.message\n    };\n    let bodyFieldsCheck;\n    if (body.email === \"\" || body.name === \"\" || body.subject === \"\" || body.message === \"\") {\n        res.status(406);\n        res.json({\n            status: 406\n        });\n        transporter.close();\n        bodyFieldsCheck = false;\n    } else {\n        bodyFieldsCheck = true;\n    }\n    if (bodyFieldsCheck) {\n        await transporter.sendMail(mail, (err, data)=>{\n            console.log(data.envelope);\n            if (err) {\n                res.json({\n                    status: 405\n                });\n            } else {\n                res.json({\n                    status: 200\n                });\n            }\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFFckIsZUFBZUMsWUFBWSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNuRCxJQUFJQyxXQUFXLEdBQUdKLGlFQUEwQixDQUFDO1FBQzNDTSxJQUFJLEVBQUUsR0FBRztRQUNUQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJO1FBQ3RCQyxJQUFJLEVBQUU7WUFDSkMsSUFBSSxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksSUFBSTtZQUN0QkMsSUFBSSxFQUFFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ00sUUFBUTtTQUMzQjtRQUNEQyxNQUFNLEVBQUUsSUFBSTtRQUNaQyxLQUFLLEVBQUUsSUFBSTtRQUNYQyxNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFFRixNQUFNQyxJQUFJLEdBQUdqQixHQUFHLENBQUNpQixJQUFJO0lBRXJCLE1BQU1DLElBQUksR0FBRztRQUNYQyxJQUFJLEVBQUVGLElBQUksQ0FBQ0csS0FBSztRQUNoQkMsTUFBTSxFQUFFSixJQUFJLENBQUNHLEtBQUs7UUFDbEJFLEVBQUUsRUFBRSx1QkFBdUI7UUFDM0JDLE9BQU8sRUFBRU4sSUFBSSxDQUFDTSxPQUFPLEdBQUcsV0FBVyxHQUFHTixJQUFJLENBQUNPLElBQUk7UUFDL0NDLE9BQU8sRUFBRVIsSUFBSSxDQUFDRyxLQUFLO1FBQ25CTSxTQUFTLEVBQUVULElBQUksQ0FBQ08sSUFBSTtRQUNwQkcsSUFBSSxFQUFFVixJQUFJLENBQUNXLE9BQU87S0FDbkI7SUFFRCxJQUFJQyxlQUFlO0lBRW5CLElBQ0VaLElBQUksQ0FBQ0csS0FBSyxLQUFLLEVBQUUsSUFDakJILElBQUksQ0FBQ08sSUFBSSxLQUFLLEVBQUUsSUFDaEJQLElBQUksQ0FBQ00sT0FBTyxLQUFLLEVBQUUsSUFDbkJOLElBQUksQ0FBQ1csT0FBTyxLQUFLLEVBQUUsRUFDbkI7UUFDQTNCLEdBQUcsQ0FBQzZCLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZjdCLEdBQUcsQ0FBQzhCLElBQUksQ0FBQztZQUFDRCxNQUFNLEVBQUUsR0FBRztTQUFDLENBQUM7UUFDdkI1QixXQUFXLENBQUM4QixLQUFLLEVBQUU7UUFDbkJILGVBQWUsR0FBRyxLQUFLLENBQUM7S0FDekIsTUFBTTtRQUNMQSxlQUFlLEdBQUcsSUFBSSxDQUFDO0tBQ3hCO0lBRUQsSUFBSUEsZUFBZSxFQUFFO1FBQ25CLE1BQU0zQixXQUFXLENBQUMrQixRQUFRLENBQUNmLElBQUksRUFBRSxDQUFDZ0IsR0FBRyxFQUFFQyxJQUFJLEdBQUs7WUFDOUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUNHLFFBQVEsQ0FBQyxDQUFDO1lBRTNCLElBQUlKLEdBQUcsRUFBRTtnQkFDUGpDLEdBQUcsQ0FBQzhCLElBQUksQ0FBQztvQkFDUEQsTUFBTSxFQUFFLEdBQUc7aUJBQ1osQ0FBQyxDQUFDO2FBQ0osTUFBTTtnQkFDTDdCLEdBQUcsQ0FBQzhCLElBQUksQ0FBQztvQkFDUEQsTUFBTSxFQUFFLEdBQUc7aUJBQ1osQ0FBQyxDQUFDO2FBQ0o7U0FDRixDQUFDLENBQUM7S0FDSjtDQUdGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFsbWEtc2VydmljZXMvLi9wYWdlcy9hcGkvY29udGFjdC5qcz8zNDkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZW1haWxIYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgbGV0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgcG9ydDogNDY1LFxyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuSE9TVCxcclxuICAgIGF1dGg6IHtcclxuICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuVVNFUixcclxuICAgICAgcGFzczogcHJvY2Vzcy5lbnYuUEFTU1dPUkQsXHJcbiAgICB9LFxyXG4gICAgc2VjdXJlOiB0cnVlLFxyXG4gICAgZGVidWc6IHRydWUsXHJcbiAgICBsb2dnZXI6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGJvZHkgPSByZXEuYm9keTtcclxuXHJcbiAgY29uc3QgbWFpbCA9IHtcclxuICAgIGZyb206IGJvZHkuZW1haWwsXHJcbiAgICBzZW5kZXI6IGJvZHkuZW1haWwsXHJcbiAgICB0bzogJ2luZm9AcGFsbWFzZXJ2aWNlLm5ldCcsXHJcbiAgICBzdWJqZWN0OiBib2R5LnN1YmplY3QgKyAnIHNlbnQgYnkgJyArIGJvZHkubmFtZSxcclxuICAgIHJlcGx5VG86IGJvZHkuZW1haWwsXHJcbiAgICBpblJlcGx5VG86IGJvZHkubmFtZSxcclxuICAgIHRleHQ6IGJvZHkubWVzc2FnZSxcclxuICB9O1xyXG5cclxuICBsZXQgYm9keUZpZWxkc0NoZWNrXHJcblxyXG4gIGlmIChcclxuICAgIGJvZHkuZW1haWwgPT09ICcnIHx8XHJcbiAgICBib2R5Lm5hbWUgPT09ICcnIHx8XHJcbiAgICBib2R5LnN1YmplY3QgPT09ICcnIHx8XHJcbiAgICBib2R5Lm1lc3NhZ2UgPT09ICcnXHJcbiAgKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNilcclxuICAgIHJlcy5qc29uKHtzdGF0dXM6IDQwNn0pXHJcbiAgICB0cmFuc3BvcnRlci5jbG9zZSgpXHJcbiAgICBib2R5RmllbGRzQ2hlY2sgPSBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgYm9keUZpZWxkc0NoZWNrID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChib2R5RmllbGRzQ2hlY2spIHtcclxuICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWwsIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5lbnZlbG9wZSk7XHJcbiAgXHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXMuanNvbih7XHJcbiAgICAgICAgICBzdGF0dXM6IDQwNSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuanNvbih7XHJcbiAgICAgICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuIFxyXG59XHJcbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwiZW1haWxIYW5kbGVyIiwicmVxIiwicmVzIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJwb3J0IiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJIT1NUIiwiYXV0aCIsInVzZXIiLCJVU0VSIiwicGFzcyIsIlBBU1NXT1JEIiwic2VjdXJlIiwiZGVidWciLCJsb2dnZXIiLCJib2R5IiwibWFpbCIsImZyb20iLCJlbWFpbCIsInNlbmRlciIsInRvIiwic3ViamVjdCIsIm5hbWUiLCJyZXBseVRvIiwiaW5SZXBseVRvIiwidGV4dCIsIm1lc3NhZ2UiLCJib2R5RmllbGRzQ2hlY2siLCJzdGF0dXMiLCJqc29uIiwiY2xvc2UiLCJzZW5kTWFpbCIsImVyciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZW52ZWxvcGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

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