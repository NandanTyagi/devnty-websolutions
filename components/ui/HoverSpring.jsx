'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ProjectsData = [
  {
    id: 1,
    name: 'Aurastudios.io',
    description: 'Ready-to-use UI elements designed for rapid development.',
    link: 'https://syntaxui.com',
    image: 'https://ansubkhan.com/images/projects/syntaxUI.svg',
  },
  {
    id: 2,
    name: 'Streaker.ai',
    description: 'A curated collection of portfolios for inspiration.',
    link: 'https://prettyfolio.com',
    image: 'https://ansubkhan.com/images/projects/prettyfolio.png',
  },
  {
    id: 2,
    name: 'Auralearning.se',
    description: 'A vibrant theme for Visual Studio Code.',
    link: 'https://enchant.ansubkhan.com',
    image: 'https://ansubkhan.com/images/projects/enchant.png',
  },
  {
    id: 3,
    name: 'Mnsmzn.org',
    description: 'My personal website, blogs and newsletter.',
    link: 'https://ansubkhan.com',
    image: 'https://ansubkhan.com/images/projects/portfolio.png',
  },
  {
    id: 4,
    name: 'Askthevedas.ai',
    description: 'Social media, but for sharing quotes.',
    link: 'https://quote-vault.vercel.app',
    image: 'https://ansubkhan.com/images/projects/quote-vault.png',
  },
  {
    id: 5,
    name: 'Askthequran.ai',
    description: 'Social media, but for sharing quotes.',
    link: 'https://quote-vault.vercel.app',
    image: 'https://ansubkhan.com/images/projects/quote-vault.png',
  },
  {
    id: 6,
    name: 'Asktheqbible.ai',
    description: 'Social media, but for sharing quotes.',
    link: 'https://quote-vault.vercel.app',
    image: 'https://ansubkhan.com/images/projects/quote-vault.png',
  },
  {
    id: 7,
    name: 'Blockpearl.world',
    description: 'Social media, but for sharing quotes.',
    link: 'https://quote-vault.vercel.app',
    image: 'https://ansubkhan.com/images/projects/quote-vault.png',
  },
]

const HoverSpring = () => {
  return (
    <div>
      <div className="grid w-full grid-cols-2 gap-x-10 md:grid-cols-3">
        {ProjectsData.map((project) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: 'spring',
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-5 text-left"
            >
              <a target="_blank" rel="noopener noreferrer" href={project.link}>
                <Image
                  src={project.image}
                  width={30}
                  height={30}
                  className="mb-3 rounded-lg border-gray-400 dark:border"
                  alt={project.name}
                />
                <div className="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {project.name}
                </div>
                <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-500">
                  {project.description}
                </div>
              </a>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default HoverSpring