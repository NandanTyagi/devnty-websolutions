"use server";
import { transporter } from "@/utils/nodemailer";

const generateEmailContent = (data) => {
  const stringData = data.message;
  const html = `${data.type} request from:<br><br>First name: ${data.firstName}<br>Last name: ${data.lastName}<br>Email: ${data.email}<br>Message: ${data.message}`;
  const htmlData = html;

  return {
    text: stringData,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content"><p>Hello!</p><p>You have a ${data.type.toLowerCase()} request to <a href="https://www.devnty.com" target="_blank">DEVNTY.com!</a></p><p>Check it out!</p><p>Details follow:</p><p>Regards,<br/><a href="https://www.devnty.com" target="_blank">Devnty Websolutions</a></p> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  };
};

export const postContactForm = async (formData) => {
  console.log("Form submitted", formData);
  try {
    await transporter.sendMail({
      from: "nandantyagi@gmail.com",
      to: "info@devnty.com",
      ...generateEmailContent(formData),
      subject: `DEVNTY ${formData.type} Form Submission`,
    });
    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending email", error);
    return false;
  }
};

export const postToChamondai = async (formData) => {
  console.log("Form submitted to Chamondai", formData);
  try {
    const response = await fetch("/api/v1/form-submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
const res = await response.json();
    if (response.ok) {
      console.log("Submitted to chamondai successfully", res);
      return true;
    } else {
      console.log("Error submitting to chamondai", res);
      return false;
    }
  } catch (error) {
    console.error("Error sumitting to chamondai", error);
    return false;
  }
};
