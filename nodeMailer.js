var nodemailer = require('nodemailer');
//var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'renatoguara2020@gmail.com',
    pass: 'dtkisoqxwwhnxpgtvvv'
  }
});

var mailOptions = {
  from: 'renatoguara2020@outlook.com',
  to: 'renatoguara2020@gmail.com',
  subject: 'Sending Email using Node.js dia 10/05/2022',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});