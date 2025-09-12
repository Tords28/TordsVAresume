import React from "react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const reasons = [
  {
    title: "Eager to Learn & Adapt",
    text: "As a new Virtual Assistant, I’m committed to learning quickly and adapting to your tools, workflows, and preferences.",
  },
  {
    title: "Reliable & Organized",
    text: "You can count on me to stay organized, meet deadlines, and communicate clearly to ensure tasks are completed efficiently.",
  },
  {
    title: "Dedicated Support",
    text: "My goal is to save you time by handling online tasks so you can focus on growing your business.",
  },
];

// Variants for animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.25,
      type: "spring",
      stiffness: 80,
    },
  }),
};

export default function WhyWorkWithMe() {
  return (
    <section className="w-full pb-3.5">
      {/* Header (static, no animation) */}
      <div className="bg-[#1a252f] py-12 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Why Work With Me as Your Virtual Assistant?
        </h2>
      </div>

      {/* Reasons */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-md shadow-md text-center hover:shadow-xl transition"
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <h3 className="font-semibold text-lg mb-3">{reason.title}</h3>
            <p className="text-gray-600 text-sm">{reason.text}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="py-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex justify-center mb-6"
          animate={{ y: [0, -10, 0] }} // floating effect
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="VA Illustration"
            className="w-32"
          />
        </motion.div>
        <h3 className="text-2xl font-semibold mb-4">
          Let’s Start Working Together
        </h3>
        <motion.a
          href="https://calendly.com/jordsbermudo123/30min"
          className="bg-red-400 hover:bg-red-500 cursor-pointer text-white px-6 py-3 rounded-md shadow inline-block"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a Meeting!
        </motion.a>
      </motion.div>
    </section>
  );
}
