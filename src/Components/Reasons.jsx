import React from "react";

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

export default function WhyWorkWithMe() {
  return (
    <section className="w-full pb-3.5">
      {/* Header with background */}
      <div className="bg-[#1a252f] pb- py-12 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Why Work With Me as Your Virtual Assistant?
        </h2>
      </div>

      {/* Reasons */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-md shadow-md text-center hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-3">{reason.title}</h3>
            <p className="text-gray-600 text-sm">{reason.text}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className=" py-16 text-center">
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="VA Illustration"
            className="w-32"
          />
        </div>
        <h3 className="text-2xl font-semibold mb-4">
          Let’s Start Working Together
        </h3>
        <button className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-md shadow">
          Schedule a Discovery Call
        </button>
      </div>
    </section>
  );
}
