import { checkBotId } from "botid/server";
import { postContactForm } from "@/utils/postForm";
import { createContactHandler } from "@/utils/contact-handler.mjs";

export const runtime = "nodejs";
export const POST = createContactHandler({
  verifyBot: () => checkBotId({ advancedOptions: { checkLevel: "basic" } }),
  sendMail: postContactForm,
  env: process.env,
});
