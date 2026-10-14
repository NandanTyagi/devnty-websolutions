import Image from "next/image";
import { projects } from "./ProjectCards";

const cases = [
  {
    name: "Aqtive",
    title: "A shared place for local activities.",
    need: "Help people discover activities that fit their location and interests, while giving organisers a place to publish them.",
    work: "Development of the activity platform, including discovery filters, calendar views and tools for managing activity content.",
    delivery: "A live service where visitors can browse activities by area, age, category and organiser, then open an activity for more detail.",
  },
  {
    name: "Embla",
    title: "From a conversation to a personal meditation.",
    need: "Connect what someone wants support with to a meditation they can create, listen to and return to.",
    work: "Platform architecture and AI development, connecting the conversation, meditation generation and listening experience.",
    delivery: "A guided flow to choose a teacher, length and sound, share what is on your mind, and create a meditation saved for later listening.",
  },
  {
    name: "Ungt Ledarskap",
    title: "Give young leadership a clear platform.",
    need: "Help visitors understand the foundation’s work, discover young role models and find ways to support its mission.",
    work: "Website development for the King’s Foundation Young Leadership, bringing its programmes, scholarship recipients and news together online.",
    delivery: "A public website with information about Kompassrosen, profiles of scholarship recipients, news and routes to support or contact the foundation.",
  },
  {
    name: "Streaker",
    title: "Make showing up visible.",
    need: "Give daily effort a clear record, so continuity can be seen over time.",
    work: "Development of a web application for recording daily actions and reviewing personal history.",
    delivery: "A discipline ledger with account access and a history of recorded activity, built around a simple question: did you show up?",
  },
];

export default function ProjectCases() {
  return (
    <section id="project-cases" className="project-cases" aria-labelledby="cases-heading">
      <header className="section-heading"><p className="eyebrow">A closer look</p><h2 id="cases-heading">The need. The work. The product.</h2><p className="case-intro">Four examples of how an idea becomes something people can use.</p></header>
      {cases.map((item) => {
        const project = projects.find(({ name }) => name === item.name);
        return (
          <article className="project-case" key={item.name} aria-labelledby={`case-${item.name.toLowerCase().replaceAll(" ", "-")}`}>
            <div className="case-heading"><div className="case-brand"><Image src={project.image} alt="" width={44} height={44} className="project-icon" /><span>{item.name}</span></div><h3 id={`case-${item.name.toLowerCase().replaceAll(" ", "-")}`}>{item.title}</h3><a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${item.name} (opens in a new tab)`}>Explore {item.name}<span aria-hidden="true">↗</span></a></div>
            <dl className="case-details"><div><dt>The need</dt><dd>{item.need}</dd></div><div><dt>DEVNTY’s contribution</dt><dd>{item.work}</dd></div><div><dt>What was built</dt><dd>{item.delivery}</dd></div></dl>
          </article>
        );
      })}
    </section>
  );
}
