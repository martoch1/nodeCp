const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail.com',
  auth: {
    user: 'martinsochei@gmail.com',
    pass: '3WscDRTY',
  },
});

// Email data
const mailOptions = {
  from: 'martinsochei@gmail.com',
  to: 'vicvictory1911@gmail.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
