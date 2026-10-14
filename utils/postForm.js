import "server-only";
import { transporter } from "@/utils/nodemailer";
import { escapeHtml } from "@/utils/contact-validation.mjs";

// Only the protected API route may call this. It is intentionally not a Server Action.
export async function postContactForm(data) {
  const name = data.firstName + " " + data.lastName;
  const result = await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: "info@devnty.com",
    replyTo: data.email,
    subject: "DEVNTY website enquiry",
    text: "From: " + name + "\nEmail: " + data.email + "\n\n" + data.message,
    html: "<h2>Website enquiry</h2><p><strong>From:</strong> " + escapeHtml(name) + "</p><p><strong>Email:</strong> " + escapeHtml(data.email) + "</p><p>" + escapeHtml(data.message).replace(/\r?\n/g, "<br>") + "</p>",
    disableFileAccess: true,
    disableUrlAccess: true,
  });
  if (!result.accepted?.length) throw new Error("Mail was not accepted");
}
