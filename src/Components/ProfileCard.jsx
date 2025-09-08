import React from "react";
import profilePic from "../assets/2x2Nobg.png";

export default function ProfileCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full text-center">
      {/* Profile */}
      <img
        src={profilePic}
        alt="Michael Jordan Bermudo"
        className="w-40 h-40 object-cover mx-auto rounded-md mb-4"
      />
      <p className="mt-4 text-gray-600">
        I know you feel tired and you lack spare time doing things by yourself.
        That’s the reason why I’m here to help you!
      </p>
      <p className="mt-2 text-gray-600 mb-6">
        My name is Crestania and I’m a Virtual Assistant. I’m eager to help you
        this year.
      </p>

      {/* About Free Services */}
      <h3 className="text-xl font-semibold mb-4">
        It’s About Giving Free Services To You
      </h3>
      <p className="text-gray-700 mb-4">
        And I want to do this in the form of saving my time for you within 7
        days, considering I only need to work 3 hours per day part-time.
      </p>
      <p className="text-gray-700 mb-4">
        I will do any tasks you want and show you what skills I got that might
        help your life easier and better before you hire me.
      </p>
      <p className="text-gray-700 mb-4">
        And yes, there is no agenda to get you to hire me and pay me within this
        free period. You don’t need to.
      </p>
      <p className="text-gray-700 mb-4">
        Every single time I talk to people, whether a coach, content creator, or
        influencer, it’s always worth it. And I can proudly tell I’m the kind of
        Virtual Assistant whose free services you won’t find anywhere else.
      </p>
      <p className="text-gray-700 mb-4">
        The only thing you have to do now is to click the link below to get your
        free 15-minute call with me.
      </p>

      <a
        href="#"
        className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition"
      >
        Schedule a Discovery Call
      </a>

      <p className="text-gray-700 mt-4">
        Time is limited. Hurry, before it’s too late!
      </p>
    </div>
  );
}
