"use client";
import { useRef, useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState("idle");
  const [message, setMessage] = useState("");
  const inFlight = useRef(false);
  async function submit(event) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (["firstName", "lastName", "email", "message"].some(key => !String(data[key]).trim())) {
      setState("error");
      setMessage("Please complete each field before sending.");
      return;
    }
    inFlight.current = true;
    setState("sending");
    setMessage("");
    try {
      const response = await fetch("/api/v1/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "Contact" }),
        signal: AbortSignal.timeout(30000),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        setState("error");
        setMessage(response.status === 429 ? "Too many attempts. Please wait a minute before trying again." : result.error || "We couldn’t send your message. Please try again or email info@devnty.com.");
        return;
      }
      setState("success");
      setMessage("Thanks — your message has been sent. We’ll reply by email.");
      form.reset();
    } catch {
      setState("error");
      setMessage("We couldn’t confirm your message was sent. Please try again, or email info@devnty.com.");
    } finally {
      inFlight.current = false;
    }
  }
  return (
    <form className="contact-form" onSubmit={submit} aria-busy={state === "sending"}>
      <div className="honeypot" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
      <p className="form-note">All fields are required.</p>
      <div className="form-row">
        <div className="field"><label htmlFor="first-name">First name</label><input id="first-name" name="firstName" autoComplete="given-name" required maxLength={100} /></div>
        <div className="field"><label htmlFor="last-name">Last name</label><input id="last-name" name="lastName" autoComplete="family-name" required maxLength={100} /></div>
      </div>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} /></div>
      <div className="field"><label htmlFor="message">Your message</label><textarea id="message" name="message" rows={5} required maxLength={5000} aria-describedby="message-hint" /><p id="message-hint" className="field-hint">What would you like to build or improve? A few sentences are enough.</p></div>
      <button className="button button-primary" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}<span aria-hidden="true">↗</span></button>
      <div className={"form-status " + state} role={state === "error" ? "alert" : "status"} aria-live={state === "error" ? "assertive" : "polite"}>{message}</div>
    </form>
  );
}
