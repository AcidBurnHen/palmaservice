import nodemailer from "nodemailer";
require("dotenv").config();

const PASS = process.env.password;

export default function (req, res) {
  const transporter = nodemailer.createTransport({
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

  transporter.sendMail(mail, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  res.status(200);
}
