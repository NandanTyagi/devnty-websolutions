"use client";
import { motion } from "framer-motion";

const AboutPage = () => {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <main className="page flex min-h-screen flex-col items-center justify-evenly p-4">
      <motion.div
      // initial={{opacity:0}}
      // whileInView={{opacity:1}}
      // animate="show"
      // viewport={{ once: false }}
      // variants={{
      //   hidden: {},
      //   show: {
      //     transition: {
      //       staggerChildren: 0.15,
      //     },
      //   },
      // }}
      >
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
            // variants={FADE_UP_ANIMATION_VARIANTS}
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
            <motion.h2 className="mb-6 text-xl text-gray-100">Our Mission</motion.h2>
            <p className="mb-6 text-gray-400">
              At DEVNTY Websolutions, our mission is to transform ideas into
              impactful digital experiences. We strive to leverage the latest in
              AI and web technologies to create applications that not only meet
              our clients&apos; needs but also exceed their expectations.
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
              Founded by a team of passionate developers and innovators, DEVNTY
              Websolutions is dedicated to delivering high-quality, customized
              web solutions. Our expertise spans a variety of industries,
              enabling us to craft tailored applications that drive success and
              growth for our clients.
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
              We design and build web applications with integrated AI tools to
              enhance productivity, education, and user engagement. Our
              solutions range from educational platforms and productivity
              trackers to unique applications that explore ancient wisdom
              through modern technology.
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
              <ul className="mb-6 md:flex md:gap-6 text-gray-400">
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
                  <strong className="text-gray-200 ">Innovative Solutions</strong>We combine creativity
                  and technology to develop cutting-edge web applications.
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
                  <strong className="text-gray-200 ">Customization</strong>Each project is tailored to
                  meet the specific needs of our clients.
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
                  <strong className="text-gray-200 ">Expertise</strong>Our team of skilled developers and
                  AI specialists brings extensive experience to every project.
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
                  <strong className="text-gray-200 ">Commitment</strong>We are dedicated to delivering
                  exceptional results and ensuring client satisfaction.
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
              We envision a world where technology seamlessly integrates with
              everyday life, empowering individuals and businesses to achieve
              their fullest potential. At DEVNTY Websolutions, we are committed
              to driving this vision forward through innovation, quality, and
              excellence.
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
              Interested in working with us? <a href="/contact">Contact us</a>{" "}
              to discuss your project and discover how DEVNTY Websolutions can
              help bring your ideas to life.
            </p>
          </motion.section>
        </div>
      </motion.div>
    </main>
  );
};

export default AboutPage;
