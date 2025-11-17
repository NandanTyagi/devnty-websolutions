"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProjectsData = [
  {
    id: 1,
    name: "Borealissummit.com",
    description:
      "Borealis Psychedelic Science Summit 2025 is organized by the Swedish Network for Psychedelic Science (NPV Sweden). ",
    link: "https://borealissummit.com",
    image: "/logos/borealis-logo.png",
  },
  {
    id: 2,
    name: "Ungtledarskap.se",
    description:
      "The King's Foundation Young Leadership works to uplift, develop, and educate young leaders so they can reach their full potential.",
    link: "https://www.ungtledarskap.se",
    image: "/logos/ksul-logo-centered.svg",
  },
  {
    id: 3,
    name: "Streaker.ai",
    description: "Track the things you want to track. Simple and easy!",
    link: "https://www.streaker.ai",
    image: "/logos/streaker-logo.svg",
  },
  {
    id: 4,
    name: "Embla",
    description:
      "AI-powered meditation platform that offers personalized meditation guidance tailored to your unique needs and preferences..",
    link: "https://www.embla.ai",
    image: "/logos/favicon-sprout.svg",
  },
  {
    id: 5,
    name: "Sweden AI Roadmap",
    description:
      "En AI-modell som svarar på frågor om AI-kommissionens Färdplan för Sverige",
    link: "https://sweden-ai-roadmap.on.devnty.com",
    image: "/logos/icon-18x180.png",
  },
  {
    id: 6,
    name: "Aurastudios.io",
    description:
      "We design and build web applications with integrated AI tools for education and creative flows.",
    link: "https://www.aurastudios.io",
    image: "/logos/aurastudios-logo.svg",
  },
  {
    id: 7,
    name: "Auralearning.se",
    description: "Your pedagogical AI platform.",
    link: "https://www.auralearning.se",
    image: "/logos/aura-learning-logo.svg",
  },
  {
    id: 8,
    name: "Mnsmzn.org",
    description:
      "A nonprofit organization dedicated to promote the development and welfare of women, children and elderly in India",
    link: "https://www.mnsmzn.org",
    image: "/logos/mns-logo.svg",
  },
  {
    id: 9,
    name: "Askthevedas",
    description: "Discover the ancient wisdom of the Vedic scriptures.",
    link: "http://askthevedas.on.devnty.com",
    image: "/logos/vedas-logo-min.svg",
  },
  {
    id: 10,
    name: "Askthequran.ai",
    description: "Discover the ancient wisdom of the Quran.",
    link: "https://www.askthequran.ai",
    image: "/logos/quran-logo.svg",
  },
  // {
  //   id: 10,
  //   name: "Asktheqbible.ai",
  //   description: "Discover the ancient wisdom of the Bible.",
  //   link: "https://www.askthebible.ai",
  //   image: "/logos/bible-logo.svg",
  // },
  {
    id: 9,
    name: "Blockpearl.world",
    description:
      "Blockpearl is a decentralized application (dApp) connecting entrepreneurs with social impact investors.",
    link: "https://blockpearl-web.vercel.app/",
    image: "/logos/block-pearl-logo.svg",
  },
];

// const HoverSpring = () => {
//   return (
//     <div className="mb-[100px]">
//       <div className="grid w-full grid-cols-1 gap-x-10 sm:grid-cols-2 md:grid-cols-3">
//         {ProjectsData.map((project) => {
//           return (
//             <a
//               target="_blank"
//               rel="noopener noreferrer"
//               href={project.link}
//               className="flex"
//               key={project.id}
//             >
//               <motion.div
//                 whileHover={{
//                   y: -8,
//                 }}
//                 transition={{
//                   type: "spring",
//                   bounce: 0.7,
//                 }}
//                 key={project.id}
//                 className="mt-5 min-w-[100%] rounded-lg border border-gray-700 bg-gray-800 p-4 text-left shadow-md hover:shadow-lg"
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                   transition: { type: "spring" },
//                 }}
//               >
//                 <Image
//                   src={project.image}
//                   width={30}
//                   height={30}
//                   className="mb-3 rounded-lg border-gray-400 dark:border"
//                   blurDataURL="/spinner.gif"
//                   placeholder="blur"
//                   alt={project.name}
//                   priority
//                 />
//                 <div className="mb-1 text-sm font-medium text-gray-100">
//                   {project.name}
//                 </div>
//                 <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-500">
//                   {project.description}
//                 </div>
//               </motion.div>
//             </a>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

const HoverSpring = () => {
  return (
    <div className="mb-[100px]">
      <div className="grid w-full grid-cols-1 gap-x-10 sm:grid-cols-2 md:grid-cols-3">
        {ProjectsData.map((project) => {
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.link}
              className="flex"
              key={project.id}
            >
              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  type: "spring",
                  bounce: 0.7,
                }}
                key={project.id}
                className="mt-5 min-w-[100%] rounded-lg border border-gray-700 bg-gray-800 p-4 text-left shadow-md hover:shadow-lg"
                title={`Click to view ${project.name}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { type: "tween", duration: 0.8 },
                }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Image
                  src={project.image}
                  width={30}
                  height={30}
                  className="mb-3 rounded-lg border-gray-400 dark:border"
                  blurDataURL="/spinner.gif"
                  placeholder="blur"
                  alt={project.name}
                  priority
                />
                <div className="mb-1 text-sm font-medium text-gray-100">
                  {project.name}
                </div>
                <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-500">
                  {project.description}
                </div>
              </motion.div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HoverSpring;
