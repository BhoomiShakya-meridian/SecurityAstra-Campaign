import React from 'react';
import CTAbanner from '../assets/CTAbanner.jpg';

function GetInTouch() {
  return (
    <div className="py-10 mt-[3rem]  px-4 lg:mt-20 lg:mb-10">
      <div
        className="relative w-full max-w-6xl mx-auto rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${CTAbanner})` }}
      >
        {/* Optional blur overlay for lighting/frosted effect */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0 rounded-2xl"></div>

        <div className="relative z-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            Your First Line of Defense Against Online Threats Starts Here
          </h2>
          <p className="text-sm md:text-base mb-6 max-w-3xl mx-auto text-white/80">
Protect your personal data, block real-time threats, and browse with confidence — all with one lightweight, AI-powered app.          </p>

          <a href="#hero">
            <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 text-sm font-medium rounded-full shadow-lg transition-all duration-300">
              Start your Free Trial
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
