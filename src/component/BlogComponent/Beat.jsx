import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import rightimg from '../../assets/beat1.jpg';
import { useInView } from 'react-intersection-observer';

function Beat() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust as needed
  });

  return (
    <div
      ref={ref}
      className={`bg-black py-16 px-4 md:px-12 lg:px-18 ${inView ? 'animate__animated animate__fadeIn' : ''
        }`}
    >
      <div className="bg-[white] rounded-2xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-start text-black px-8 py-10 lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Miss A Beat</h2>
          <p className="text-[#333333] mb-6 max-w-md">
            If all this sounds exciting and you want to know more, let’s connect today!
          </p>

          {/* Email Input Section */}
          <div className="flex w-full max-w-md bg-[#b3b3b3] rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 bg-transparent text-white placeholder-black focus:outline-none"
            />
            <button className="px-4 bg-[black] text-white">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 h-64 lg:h-auto">
          <img
            src={rightimg}
            alt="Planet"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Beat;
