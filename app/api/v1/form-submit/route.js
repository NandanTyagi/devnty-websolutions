import { NextResponse } from "next/server";
import { postContactForm } from "@/utils/postForm";

export async function POST(req) {
  let formData;
  try {
    formData = await req.json();
  } catch {
    return NextResponse.json("Invalid JSON", { status: 400 });
  }
  const fields = ["firstName", "lastName", "email", "message"];
  if (!formData || fields.some((key) => typeof formData[key] !== "string" || !formData[key].trim()) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    return NextResponse.json("Please provide your name, email and message", { status: 400 });
  }
  if (!process.env.EMAIL_FROM || !process.env.APP_PASSWORD) {
    return NextResponse.json("Contact service unavailable", { status: 503 });
  }
  try {
    const sent = await postContactForm({ ...formData, type: "Contact" });
    return NextResponse.json(sent ? "mail sent" : "mail error", { status: sent ? 200 : 502 });
  } catch {
    return NextResponse.json("mail error", { status: 502 });
  }
}
