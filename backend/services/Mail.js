const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: "8ec074003@smtp-brevo.com",
    pass: "G6Zk7wPVNORdjAqv",
  },
});

const sendmail = async (tomail, subject, message) => {
  try {
    const info = await transporter.sendMail({ // sendMail (capital M) sahi function hai
      from: '"Gaana" <vickysonkar0212@gmail.com>',
      to: tomail,
      subject: subject,
      text: message,
    });

    console.log("Message sent:", info.messageId); // ab info yahin accessible hai
  } catch (err) {
    console.error("Error sending mail:", err);
  }
};

module.exports = { sendmail };
