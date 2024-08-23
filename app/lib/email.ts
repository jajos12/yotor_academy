import nodemailer from "nodemailer";

export async function sendVerificationEmail(
  email: string,
  verificationToken: string
) {
  // Create a transporter for sending emails
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    auth: {
      user: "yonatangetachew91@gmail.com",
      pass: "YoNi1997@2005",
    },
  });

  // Define the email options
  const mailOptions = {
    from: "yonatangetachew91@gmail.com",
    to: email,
    subject: "Verify your email address",
    text: `Please click the following link to verify your email address: http://your-app.com/verify?token=${verificationToken}`,
  };

  // Send the email
  await transporter.sendMail(mailOptions);
}
