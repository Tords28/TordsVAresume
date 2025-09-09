import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import ProfileCard from "./Components/ProfileCard.jsx";
import ServicesSection from "./Components/ServiceSection.jsx";
import Reasons from "./Components/Reasons.jsx";
import LoadingScreen from "./Components/LoadingScreen";

export default function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {/* Show loading screen until finished */}
      {!loadingDone && <LoadingScreen onFinish={() => setLoadingDone(true)} />}

      {/* Main Content */}
      {loadingDone && (
        <div className="min-h-screen bg-gradient-to-r from-blue-200 via-white to-blue-200">
          {/* Navbar */}
          <header className="flex justify-between items-center px-6 py-4 bg-[#1a252f] text-white">
            <div className="flex flex-col items-start">
              <h1 className="text-2xl font-semibold">MICHAEL JORDAN BERMUDO</h1>
              <div className="text-lg font-semibold mt-2">
                <p>VA | Web Developer</p>
              </div>
            </div>

            <nav className="flex items-center gap-4">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="https://www.facebook.com/emdyey.bermudo" className="hover:text-gray-200" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/jordsdr/" className="hover:text-gray-200" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="https://www.linkedin.com/in/michael-jordan-bermudo" className="hover:text-gray-200" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </nav>
          </header>

          {/* Hero Section */}
          <section className="text-center py-10 px-4">
            <h2 className="text-5xl font-bold text-red-700 mb-2">VTC</h2>
            <h3 className="text-2xl font-semibold mb-4">
              Virtual Assistant Services
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              “I help Busy Small and Medium Business Owners Work on their Online
              Tasks so they can Focus on what Matters Most”.
            </p>
          </section>

          {/* Profile & Services Box */}
          <section className="flex justify-center mt-8 px-4">
            <ProfileCard />
          </section>

          {/* Service Section */}
          <div className="mt-16">
            <ServicesSection />
          </div>

          {/* Testimonials Section */}
          <div>
            <Reasons />
          </div>
        </div>
      )}
    </>
  );
}
