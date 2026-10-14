import { validateContact } from "./contact-validation.mjs";

export function createContactHandler({ verifyBot, sendMail, env }) {
return async function POST(req) {
  const allowed = new Set(["https://www.devnty.com", "https://devnty.com"]);
  for (const host of [env.VERCEL_URL, env.VERCEL_BRANCH_URL]) {
    if (host) allowed.add("https://" + host);
  }
  if (!env.VERCEL) allowed.add(new URL(req.url).origin);
  if (!allowed.has(req.headers.get("origin"))) {
    return Response.json({ error: "Please use the contact form on this website." }, { status: 403 });
  }
  if (!req.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Invalid request format." }, { status: 415 });
  }
  if (Number(req.headers.get("content-length")) > 16384) {
    return Response.json({ error: "Message too large." }, { status: 413 });
  }
  let raw;
  try {
    const body = await req.text();
    if (Buffer.byteLength(body) > 16384) return Response.json({ error: "Message too large." }, { status: 413 });
    raw = JSON.parse(body);
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }
  if (raw?.website) return Response.json({ error: "Unable to verify this request." }, { status: 403 });
  const data = validateContact(raw);
  if (!data) return Response.json({ error: "Please check your name, email and message." }, { status: 400 });

  try {
    const result = await verifyBot();
    // Even verified crawlers have no reason to send a contact email.
    if (result.isBot || result.isVerifiedBot || !result.isHuman) {
      return Response.json({ error: "We couldn’t verify your browser. Please reload the page or email info@devnty.com." }, { status: 403 });
    }
  } catch {
    // Fail closed: never send mail when bot verification is unavailable.
    return Response.json({ error: "Browser verification is temporarily unavailable. Please try again or email info@devnty.com." }, { status: 503 });
  }
  // Preview-only verification of the real browser flow without sending email.
  if (env.VERCEL_ENV === "preview" && env.CONTACT_FORM_TEST_MODE === "1") {
    return Response.json({ success: true, testMode: true });
  }
  if (!env.EMAIL_FROM || !env.APP_PASSWORD) {
    return Response.json({ error: "Contact service unavailable. Please email info@devnty.com." }, { status: 503 });
  }
  try {
    await sendMail(data);
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "We couldn’t send your message. Please try again or email info@devnty.com." }, { status: 502 });
  }
}

}
