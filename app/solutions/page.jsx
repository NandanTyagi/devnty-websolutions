"use client";
import { motion } from "framer-motion";

import HoverSpring from "@/components/ui/HoverSpring";

const EnterPage = () => {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <main className="page flex min-h-screen flex-col items-center justify-evenly p-4">
      <motion.div
        className=""
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0, transition: { type: "spring" } }}
        animate="show"
        viewport={{ once: false }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h1
          className="mb-6 text-2xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring" } }}
        >
          Welcome to DEVNTY Websolutions
        </motion.h1>
        <motion.h2
          className="mb-6 text-xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring" } }}
        >
          At DEVNTY Websolutions, we specialize in creating innovative and
          tailored web applications that leverage cutting-edge AI technologies.
        </motion.h2>
        <motion.p
          className="mb-6 text-gray-500"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring" } }}
        >
          Our diverse portfolio showcases a range of solutions designed to meet
          various needs, from educational tools and productivity trackers to
          platforms that explore ancient wisdom through modern interfaces.
          Explore our solutions below and discover how DEVNTY Websolutions can
          empower your digital transformation.
        </motion.p>
      </motion.div>
      <HoverSpring />
      {/* <RippleLoader /> */}
    </main>
  );
};

export default EnterPage;
