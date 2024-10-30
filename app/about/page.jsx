"use client";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <main className="page flex min-h-screen flex-col items-center justify-evenly p-4">
      <motion.div>
        <div className="">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 1 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            className="mb-6 text-2xl font-bold"
          >
            About Us
          </motion.h1>
          <motion.section
            className="card border-gray-700 bg-gray-800"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 1 },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="mb-6 text-xl text-gray-100">Our offer</h2>
            <div className="scrolling-wrapper">
              <ul className="mb-6 text-gray-400 md:flex md:gap-6">
                <motion.li
                  className="mini"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", duration: 1 },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <strong className="text-gray-200">
                    Innovative Solutions
                  </strong>
                  Combining creativity and technology to develop cutting-edge
                  web applications.
                </motion.li>
                <motion.li
                  className="mini"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", duration: 1 },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <strong className="text-gray-200">Customization</strong>Each
                  project is tailored to meet the specific needs of clients.
                </motion.li>
                <motion.li
                  className="mini"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", duration: 1 },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <strong className="text-gray-200">Expertise</strong>Bringing
                  extensive experience and a high level of skill to every
                  project.
                </motion.li>
                <motion.li
                  className="mini"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", duration: 1 },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <strong className="text-gray-200">Commitment</strong>Dedicated
                  to delivering exceptional results and ensuring client
                  satisfaction.
                </motion.li>
              </ul>
            </div>
          </motion.section>
          <motion.section
            className="card border-gray-700 bg-gray-800"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 1 },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.h2 className="mb-6 text-xl text-gray-100">
              Domain-Specific AI Applications
            </motion.h2>
            <p className="mb-6 text-gray-400">
              Our core strength lies in crafting AI solutions tailored to the
              nuances of your needs. Whether it&apos;s personalized user
              journeys in wellness, or intelligent automation in e-commerce, our
              AI-driven applications are built to add meaningful,
              business-specific value. We integrate AI that not only adapts to
              but enhances your operations and user interactions.
            </p>
          </motion.section>
          <motion.section
            className="card border-gray-700 bg-gray-800"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 1 },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="mb-6 text-xl text-gray-100">
              Full-Stack Development
            </h2>
            <p className="mb-6 text-gray-400">
              From front-end design to back-end architecture, we build seamless,
              high-performance applications. Our end-to-end development
              expertise ensures intuitive, reliable, and scalable experiences
              that engage users and support your business goals.
            </p>
          </motion.section>
          <motion.section
            className="card border-gray-700 bg-gray-800"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 1 },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="mb-6 text-xl text-gray-100">
              Content Management Flexibility
            </h2>
            <p className="mb-6 text-gray-400">
              We utilize an adaptable, high-performance content management
              system (CMS) designed to integrate securely with complex
              infrastructures. Our CMS solution enables easy content updates,
              industry-specific data handling, and intuitive management tools,
              giving you full control over your content in a secure, compliant
              framework.
            </p>
          </motion.section>
          <motion.section
            className="card border-gray-700 bg-gray-800"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 1 },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="mb-6 text-xl text-gray-100">
              DevOps & Hosting Solutions
            </h2>
            <p className="mb-6 text-gray-400">
              Our technical infrastructure is designed to ensure reliable,
              secure, and scalable solutions. With continuous integration and
              delivery (CI/CD) workflows and robust cloud hosting, we provide
              dependable application performance. Each project’s infrastructure
              is tailored to meet specific business needs.
            </p>
          </motion.section>
          <motion.section
            className="card border-gray-700 bg-gray-800"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 1 },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="mb-6 text-xl text-gray-100">GDPR-Ready Solutions</h2>
            <p className="mb-6 text-gray-400">
              By securing data management and ensuring transparency, we help you
              maintain user trust and meet the highest standards of data
              protection.
            </p>
          </motion.section>
        </div>
      </motion.div>
    </main>
  );
};

export default AboutPage;
