import React from 'react';
// import RightArrow from '../assets/Rightarrow.svg';
import search from '../assets/search.svg';

function DynamicsCircle() {
  return (
    <section 
    id="working"
    className="inter px-6 lg:pl-20  text-white py-12 lg:mt-10 lg:mb-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* ──────────────── Left: Video ──────────────── */}
        <div className="w-full lg:w-1/2 aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/2inSNxz-Glk?si=yRyaN0OVpwrtUXuI"
            title="Meridian EduLearn Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* ──────────────── Right: Content ──────────────── */}
        <div className="w-full lg:w-1/2">
          <p className="inline-block text-xs uppercase text-blue-500 bg-[#2A59FF0D] py-1 px-3 rounded-full font-semibold tracking-widest mb-2">
            Why SecurityAstra?
          </p>

          <h2 className="urbanist text-2xl lg:text-3xl font-medium text-white leading-tight">
            Why Thousands Trust SecurityAstra <br />Over Other Apps
        
          </h2>

          <p className="text-[#D1D1D1] text-sm mt-4 mb-6 max-w-xl">
            Protect your data and systems against cyber threats using enterprise-level
            security, cutting-edge technology, and round-the-clock real-time monitoring.
          </p>

          <ul className="text-sm space-y-2 text-[#D1D1D1]">
            <li className='flex gap-3 items-center'><img src={search} /> No ads, no clutter — just pure protection</li>
            <li className='flex gap-3 items-center'><img src={search} /> Faster and lighter than traditional antivirus</li>
            <li className='flex gap-3 items-center'><img src={search} />Backed by cybersecurity experts</li>
            <li className='flex gap-3 items-center'><img src={search} />Continuous updates with evolving threats</li>
          </ul>

        </div>
      </div>
    </section>
  );
}

export default DynamicsCircle;
