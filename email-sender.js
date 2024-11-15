import nodemailer from "nodemailer";

// create a file named email-sender
// npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)


import nodemailer from "nodemailer";

// Create the transporter with your email service and authentication details
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "james2554@gmail.com", //  email address
    password: "James2458", //  email password
  },
});

// Set up email options
const mailOptions = {
  from: "james2554@gmail.com",
  to: "oscar@gmail.com, tobi@gmail.com",
  subject: "Sending Email On how to finish a divorce in 10 seconds",
  text: "It is very easy to make all this possible",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});


