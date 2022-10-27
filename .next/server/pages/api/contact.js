"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ emailHandler)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/contact.js

async function emailHandler(req, res) {
    let transporter = external_nodemailer_default().createTransport({
        port: 465,
        host: process.env.HOST,
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD
        },
        secure: true,
        debug: true,
        logger: true
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
    let bodyFieldsCheck;
    if (body.email === "" || body.name === "" || body.subject === "" || body.message === "") {
        res.status(406);
        res.json({
            status: 406
        });
        transporter.close();
        bodyFieldsCheck = false;
    } else {
        bodyFieldsCheck = true;
    }
    if (bodyFieldsCheck) {
        await transporter.sendMail(mail, (err, data)=>{
            console.log(data.envelope);
            if (err) {
                res.json({
                    status: 405
                });
            } else {
                res.json({
                    status: 200
                });
            }
        });
    }
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