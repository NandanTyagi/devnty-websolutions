import Link from "next/link";
import ProjectCards from "@/components/ProjectCards";
import ProjectCases from "@/components/ProjectCases";
export const metadata = {
  title: "Solutions",
  description: "Explore digital projects from DEVNTY, including Aqtive, Embla, Ungt Ledarskap, Streaker, MNSMZN, Aura Learning and Aura Studios.",
  alternates: { canonical: "/solutions" },
};
export default function Solutions() {
  return (
    <main id="main-content" className="container page-content" tabIndex={-1}>
      <header className="page-intro"><p className="eyebrow">Selected work / 07 projects</p><h1>Ideas, made useful.</h1><p className="lead">Different audiences. Different needs. A selection of websites and applications developed by DEVNTY.</p><a className="text-link cases-jump" href="#project-cases">Read four project stories<span aria-hidden="true">↓</span></a></header>
      <ProjectCards />
      <ProjectCases />
      <section className="inline-cta"><div><h2>Have something in mind?</h2><p>Let’s look at what your project needs.</p></div><Link className="button button-primary" href="/contact">Talk about your project<span aria-hidden="true">↗</span></Link></section>
    </main>
  );
}
