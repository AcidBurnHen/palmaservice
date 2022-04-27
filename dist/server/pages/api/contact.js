"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/contact.js

(__webpack_require__(142).config)();
const PASS = process.env.password;
/* harmony default export */ function contact(req, res) {
    const transporter = external_nodemailer_default().createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "palmaservicemailer@gmail.com",
            pass: PASS
        },
        secure: true
    });
    const body = req.body;
    const mail = {
        from: body.email,
        sender: body.email,
        to: "info@palmaservice.net",
        subject: body.subject + " sent by " + body.name,
        replyTo: body.email,
        inReplyTo: body.name,
        text: body.message
    };
    transporter.sendMail(mail, (err, info)=>{
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
    res.status(200);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(574));
module.exports = __webpack_exports__;

})();