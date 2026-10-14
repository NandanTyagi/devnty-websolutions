import Image from "next/image";

export const projects = [
  { name: "Aqtive", category: "Activities & community", description: "Find activities near you. A shared space for participants and local organisers.", href: "https://aqtive.se", image: "/logos/aqtive-icon.svg", domain: "aqtive.se" },
  { name: "Embla", category: "Meditation & wellbeing", description: "Personalised meditation guidance, with AI helping shape each session around you.", href: "https://www.embla.ai", image: "/logos/embla-icon.png", domain: "embla.ai" },
  { name: "Ungt Ledarskap", category: "Leadership & education", description: "A website for the King's Foundation Young Leadership and its work supporting young leaders.", href: "https://www.ungtledarskap.se", image: "/logos/ksul-logo-centered.svg", domain: "ungtledarskap.se" },
  { name: "Streaker", category: "Habits & reflection", description: "A discipline ledger that makes continuity visible. Record daily actions and see your consistency over time.", href: "https://www.streaker.ai", image: "/logos/streaker-icon.png", domain: "streaker.ai" },
  { name: "MNSMZN", category: "Community & social impact", description: "A nonprofit supporting the welfare of women, children and older people in India.", href: "https://www.mnsmzn.org", image: "/logos/mns-logo.svg", domain: "mnsmzn.org" },
  { name: "Aura Learning", category: "Education & AI", description: "AI tools for teaching and learning, designed around educational needs.", href: "https://www.auralearning.se", image: "/logos/aura-learning-logo.svg", domain: "auralearning.se" },
  { name: "Aura Studios", category: "Creative tools & AI", description: "Web applications that bring AI into education and creative workflows.", href: "https://www.aurastudios.io", image: "/logos/aurastudios-logo.svg", domain: "aurastudios.io" },
];

export default function ProjectCards() {
  return (
    <ul className="project-grid">
      {projects.map((project, index) => (
        <li key={project.href}>
          <a className="project-card" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={project.name + " — visit website (opens in a new tab)"}>
            <div className="project-top"><Image src={project.image} alt="" width={52} height={52} className="project-icon" /><span className="project-number" aria-hidden="true">0{index + 1}</span></div>
            <p className="project-category">{project.category}</p>
            <h2>{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-link"><span>{project.domain}</span><span aria-hidden="true">↗</span></div>
          </a>
        </li>
      ))}
    </ul>
  );
}
