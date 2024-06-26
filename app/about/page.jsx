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
            <motion.h2 className="mb-6 text-xl text-gray-100">
              Our Mission
            </motion.h2>
            <p className="mb-6 text-gray-400">
              At DEVNTY Websolutions, the mission is to transform ideas into
              impactful digital experiences. Leveraging the latest in AI and web
              technologies, DEVNTY Websolutions aims to create applications that
              not only meet clients&apos; needs but also exceed their expectations.
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
            <h2 className="mb-6 text-xl text-gray-100">Who We Are</h2>
            <p className="mb-6 text-gray-400">
              Founded by a passionate developer and innovator, DEVNTY
              Websolutions is dedicated to delivering high-quality, customized
              web solutions. With expertise spanning a variety of industries,
              DEVNTY Websolutions crafts tailored applications that drive
              success and growth for clients.
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
            <h2 className="mb-6 text-xl text-gray-100">What We Do</h2>
            <p className="mb-6 text-gray-400">
              DEVNTY Websolutions designs and builds web applications with
              integrated AI tools to enhance productivity, education, and user
              engagement. The solutions range from educational platforms and
              productivity trackers to unique applications that explore ancient
              wisdom through modern technology.
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
            <h2 className="mb-6 text-xl text-gray-100">Why Choose Us</h2>
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
            <h2 className="mb-6 text-xl text-gray-100">Our Vision</h2>
            <p className="mb-6 text-gray-400">
              DEVNTY Websolutions envisions a world where technology seamlessly
              integrates with everyday life, empowering individuals and
              businesses to achieve their fullest potential. The commitment to
              driving this vision forward through innovation, quality, and
              excellence is unwavering.
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
            <h2 className="mb-6 text-xl text-gray-100">Get in Touch</h2>
            <p className="mb-6 text-gray-400">
              Interested in working with DEVNTY Websolutions?{" "}
              <a href="/contact">Contact</a> to discuss your project and
              discover how DEVNTY Websolutions can help bring your ideas to
              life.
            </p>
          </motion.section>
        </div>
      </motion.div>
    </main>
  );
};

export default AboutPage;
