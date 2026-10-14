import Link from "next/link";
export const metadata = { title: "About", description: "A practical approach to websites, applications and AI. Learn how DEVNTY approaches a project, from understanding the need to launch and refinement.", alternates: { canonical: "/about" } };
export default function About() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="container page-content">
        <header className="page-intro"><p className="eyebrow">About DEVNTY</p><h1>Good work starts<br />with understanding.</h1><p className="lead">DEVNTY brings design and development together to build digital products around real needs.</p></header>
        <div className="about-statement"><h2>Start with the purpose.<br />Then choose the technology.</h2><div><p>Every project has its own context: who it is for, what it needs to do and what is realistic to build.</p><p>The work can include interface design, frontend and backend development, content management, integrations and deployment. AI is an option when it supports the purpose of the product.</p></div></div>
        <section className="approach-section" aria-labelledby="approach-heading"><div className="section-heading"><p className="eyebrow">The approach</p><h2 id="approach-heading">Clear steps.<br />Room to learn.</h2></div><ol className="steps"><li><span className="index">01</span><h3>Understand</h3><p>Identify the audience, the problem and what a useful first version should do.</p></li><li><span className="index">02</span><h3>Design & build</h3><p>Make the flow tangible, develop the product and review it as it takes shape.</p></li><li><span className="index">03</span><h3>Launch & refine</h3><p>Test the important journeys, prepare for launch and agree on what comes next.</p></li></ol></section>
        <section className="inline-cta"><div><h2>Let’s find a sensible starting point.</h2><p>Share your idea, your existing site or the problem you want to solve.</p></div><Link className="button button-primary" href="/contact">Get in touch<span aria-hidden="true">↗</span></Link></section>
      </section>
    </main>
  );
}
