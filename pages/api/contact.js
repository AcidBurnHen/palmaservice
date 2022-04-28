import nodemailer from "nodemailer";
require("dotenv").config();

const PASS = process.env.password;

export default async function emailHandler(req, res) {
  let transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "palmaservicemailer@gmail.com",
      pass: PASS
    },
    secure: true
  });

  const body = req.body;

  console.log(body);

  const mail = {
    from: body.email,
    sender: body.email,
    to: "info@palmaservice.net",
    subject: body.subject + " sent by " + body.name,
    replyTo: body.email,
    inReplyTo: body.name,
    text: body.message
  };

  await transporter.sendMail(mail, (err, data) => {
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
