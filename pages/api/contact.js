import nodemailer from 'nodemailer';

export default async function emailHandler(req, res) {
  let transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.HOST,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
    secure: true,
    debug: true,
    logger: true
  });

  const body = req.body;

  console.log(body);

  const mail = {
    from: body.email,
    sender: body.email,
    to: 'info@palmaservice.net',
    subject: body.subject + ' sent by ' + body.name,
    replyTo: body.email,
    inReplyTo: body.name,
    text: body.message,
  };

  await transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 405,
      });
    } else {
      res.json({
        status: 200,
      });
    }
  });
}
