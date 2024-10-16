import nodemailer from "nodemailer";

const email = process.env.EMAIL_FROM;
const pass = process.env.APP_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};