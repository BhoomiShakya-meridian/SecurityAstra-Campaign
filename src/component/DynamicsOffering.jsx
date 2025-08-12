import React from 'react';
import img1 from '../assets/1.svg';
import img2 from '../assets/2.svg';
import img3 from '../assets/3.svg';
import img4 from '../assets/4.svg';

function DynamicsOffering() {
  return (
    <section id="offers" className=" py-20 px-6 lg:px-20 lg:mt-10 lg:mb-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Subtitle */}
    
         <p className="inline-block text-xs uppercase text-blue-500 bg-[#2A59FF0D] py-1 px-3 rounded-full font-semibold tracking-widest mb-2">
            Core Benefits
          </p>


        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-12">
          Security That Works Smarter, Not Harder
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: img1,
              title: 'AI-Powered Threat Detection',
              desc: 'Instantly blocks malware, phishing, and spyware using advanced AI.',
            },
            {
              icon: img2,
              title: 'Real-Time Alerts',
              desc: 'Get notified the moment suspicious activity is detected.',
            },
            {
              icon: img3,
              title: 'Privacy Protection',
              desc: 'Shield your personal data from hackers and trackers.',
            },
            {
              icon: img4,
              title: 'Simple, Lightweight, Powerful',
              desc: 'One-click setup. Runs silently in the background.',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-[#161520] rounded-xl p-6 text-left hover:shadow-md transition"
            >
              {/* Icon in circle */}
              <div className="">
                <img src={card.icon} alt="icon" className="w-11 h-11" />
              </div>
              {/* Title */}
              <h3 className="text-white text-lg font-semibold mb-2 mt-2">
                {card.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-[#D1D1D1] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DynamicsOffering;
