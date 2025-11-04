import nodemailer from "nodemailer";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./emailtemplates.js";

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e344ad2a272d8c",
    pass: "53fe399ca6d70a",
  },
});

export const sendVerificationEmail = async (email, verificationToken) => {
  // Implement email sending logic here using your preferred email service
  const recipient = email;
  try {
    const info = await transport.sendMail({
      from: '"ExamPilot Team" <team@exampilot.com>', // sender address
      to: email, // list of receivers
      subject: "Verification Email", // Subject line
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ), // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error("Error while sending mail", err);
  }
};

export const sendWelcomeEmail = async (email, fullName) => {
  const recipient = email;
  try {
    const info = await transport.sendMail({
      from: '"ExamPilot Team" <team @exampilot.com>', // sender address
      to: email, // list of receivers
      subject: "Welcome to ExamPilot!", // Subject line
      html: WELCOME_EMAIL_TEMPLATE.replace("{fullName}", fullName), // html body
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error("Error while sending mail", err);
  }
};

export const sendPasswordResetEmail = async (email, resetTokenUrl) => {
  const recipient = email;
  try {
    const info = await transport.sendMail({
      from: '"ExamPilot Team" <team@exampilot.com>', // sender address
      to: email, // list of receivers
      subject: "Password Reset", // Subject line
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace(
        "{resetURL}",
        resetTokenUrl
      ), // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error("Error while sending mail", err);
  }
};

export const sendResetPasswordSuccessEmail = async (email) => {
  const recipient = email;
  try {
    const info = await transport.sendMail({
      from: '"ExamPilot Team" <team@exampilot.com>', // sender address
      to: email, // list of receivers
      subject: "Password Reset Successful", // Subject line
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error("Error while sending mail", err);
  }
};
