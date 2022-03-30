const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "608d57e9218d26", // generated ethereal user
    pass: "4a9e30bd993235", // generated ethereal password
  },
});
