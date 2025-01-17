"use client";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

const ContactPage = () => {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <main className="min-h-screen overflow-scroll  p-4">
      <motion.div
      className="flex flex-col items-center justify-center mt-[80px] "
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.div
          className="card border-gray-700 bg-gray-800 sm:mt-0"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <motion.h1
            className="mb-6 text-2xl font-bold text-gray-100"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            Contact us
          </motion.h1>
          <motion.h2
            className="mb-6 text-xl text-gray-200"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            Let’s Innovate Together
          </motion.h2>
          <motion.p
            className="mb-6 text-gray-400"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            DEVNTY Websolutions is dedicated to delivering AI-powered
            applications that address the specific challenges and opportunities
            within your industry.
          </motion.p>
          <motion.p
            className="mb-6 text-gray-400"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            Ready to bring your vision to life? Contact us today to start
            building.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.div
          className="card border-gray-700 bg-gray-800"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default ContactPage;
