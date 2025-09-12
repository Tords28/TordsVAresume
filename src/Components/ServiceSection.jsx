import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaProjectDiagram, FaEnvelopeOpenText, FaFacebookF } from "react-icons/fa";
import { MdOutlineAdminPanelSettings, MdContentPaste } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai";
import { RiUserStarFill } from "react-icons/ri";
import { FiDatabase } from "react-icons/fi";
const MotionDiv = motion.div;

const services = [
  { icon: <MdOutlineAdminPanelSettings className="text-3xl text-blue-600 mx-auto" />, title: "Administrative Support", desc: "If you have daily tasks or admin work that keep you busy, I can lend an extra hand. I’m easy to train and detail-oriented." },
  { icon: <FaReact className="text-3xl text-purple-600 mx-auto" />, title: "Web Development", desc: "I build responsive websites using React, TailwindCSS, and WordPress to strengthen your online presence." },
  { icon: <FaProjectDiagram className="text-3xl text-green-600 mx-auto" />, title: "Project Management", desc: "Keep your projects running smoothly with proper tracking and organization." },
  { icon: <FaFacebookF className="text-3xl text-blue-600 mx-auto" />, title: "Social Media Management", desc: "I can manage Facebook, Instagram, and LinkedIn accounts to keep your audience engaged." },
  { icon: <FiDatabase className="text-3xl text-yellow-600 mx-auto" />, title: "Data & Research", desc: "Save time by letting me handle research and organizing data to support your business decisions." },
  { icon: <RiUserStarFill className="text-3xl text-indigo-600 mx-auto" />, title: "Personal Assistant", desc: "Whether preparing documents, marketing materials, or travel arrangements — I can help." },
  { icon: <FaEnvelopeOpenText className="text-3xl text-red-600 mx-auto" />, title: "Email Marketing", desc: "I can set up campaigns, newsletters, and automations to reach your customers effectively." },
  { icon: <MdContentPaste className="text-3xl text-orange-600 mx-auto" />, title: "Content Management", desc: "From websites to blogs, I’ll manage and update content to keep your audience informed." },
  { icon: <AiFillYoutube className="text-3xl text-red-500 mx-auto" />, title: "YouTube Management", desc: "Video uploads, descriptions, and livestream support to grow your YouTube presence." }
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 bg-white border-t-2 border-b-2 border-gray-300">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 15, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        What can I do for you?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-xl shadow-md p-6 text-center space-y-3 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="inline-block transition-transform duration-300 hover:scale-110">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
