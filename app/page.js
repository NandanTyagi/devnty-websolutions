import Link from "next/link";
import Image from "next/image";
import { projects } from "@/components/ProjectCards";

export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="container hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="small-dot" />Independent web development</p>
          <h1>Useful digital<br />products.<br /><span className="accent">Built around you.</span></h1>
          <p className="lead">Websites, web apps and practical AI features — designed for the people who use them.</p>
          <div className="button-row"><Link className="button button-primary" href="/contact">Let’s talk about your project<span aria-hidden="true">↗</span></Link><Link className="text-link" href="/solutions">Explore the work<span aria-hidden="true">→</span></Link></div>
        </div>
        <aside className="work-preview" aria-label="Selected projects">
          <div className="preview-label"><span>Ideas in the world</span><span aria-hidden="true">↗</span></div>
          {projects.slice(0, 2).map((project) => (
            <a className="preview-project" href={project.href} key={project.href} target="_blank" rel="noopener noreferrer" aria-label={project.name + " (opens in a new tab)"}>
              <Image src={project.image} alt="" width={64} height={64} />
              <div><span className="preview-category">{project.category}</span><h2>{project.name}</h2><p>{project.description}</p></div><span className="preview-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
          <Link className="preview-all" href="/solutions">See all seven projects<span aria-hidden="true">→</span></Link>
        </aside>
      </section>
      <section className="section services-section">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">What DEVNTY can help with</p><h2>The right tools.<br />A clear purpose.</h2></div>
          <div className="service-grid">
            <article><span className="index">01 / WEB</span><h3>Websites & applications</h3><p>From a clear company website to a custom platform, with attention to content, usability and the details behind the scenes.</p></article>
            <article><span className="index">02 / AI</span><h3>AI where it helps</h3><p>Features that support a specific task — finding information, creating content or guiding a personalised experience.</p></article>
            <article><span className="index">03 / CONNECTIONS</span><h3>Content & integrations</h3><p>Manage your content and connect the services your product needs, with a setup that fits how you work.</p></article>
          </div>
        </div>
      </section>
      <section className="container closing-section"><div><p className="eyebrow">A place to start</p><h2>A new idea.<br />Or a better next version.</h2><p>You don’t need a finished brief. Start with what you want to make easier.</p></div><Link className="button button-primary" href="/contact">Start a conversation<span aria-hidden="true">↗</span></Link></section>
    </main>
  );
}
