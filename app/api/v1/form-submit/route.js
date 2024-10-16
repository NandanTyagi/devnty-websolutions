import { NextResponse } from "next/server";
import { postContactForm } from "@/utils/postForm";

export async function POST(req, res) {
  console.log("Request in form-submit route", req);

  if (req.method === "POST") {
    const request = await req.json();
    const formData = await request;
    console.log("Form data", formData);
    if (!formData || !formData.email || !formData.message) {
      return NextResponse.json("Bad request from client");
    }

    try {
      if (await postContactForm(formData)) {
        return NextResponse.json("mail sent");
      } else {
        return NextResponse.json("mail error");
      }
    } catch (err) {
      console.log(err);
      return NextResponse.json("mail error");
    }
  }
  return NextResponse.json("Bad request");
}
