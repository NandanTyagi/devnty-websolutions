import ContactForm from "@/components/ContactForm";
export const metadata = { title: "Contact", description: "Tell DEVNTY what you would like to build or improve. Start a conversation about a website, web application or practical AI feature.", alternates: { canonical: "/contact" } };
export default function Contact() {
  return (
    <main id="main-content" className="container page-content contact-layout" tabIndex={-1}>
      <header className="contact-intro"><p className="eyebrow">Start a conversation</p><h1>What are you<br />working on?</h1><p className="lead">A new website, an application or a better way of doing something. Tell us a little about it.</p><div className="contact-direct"><p>Prefer email?</p><a className="text-link" href="mailto:info@devnty.com">info@devnty.com<span aria-hidden="true">↗</span></a></div><p className="contact-guidance">An idea is enough to start. Include only the details needed to discuss your project.</p></header>
      <div className="form-panel"><ContactForm /></div>
    </main>
  );
}
