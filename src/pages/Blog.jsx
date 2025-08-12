import React from 'react';
import Hero from '../component/BlogComponent/Hero';
import BlogNavbar from '../component/BlogComponent/BlogNavbar';
// import Particles from '../Animation/Particles';
// import Orb from '../Animation/Orb';

function Blog() {
  return (

    <div className="w-full bg-[black] min-h-screen text-white flex flex-col shadow-lg">
      <div className='absolute h-full w-full'>
                <Particles
                    particleColors={['#2b4539', '#61dca3', '#61b3dc']}
                    particleCount={300}
                    particleSpread={20}
                    speed={0.3}
                    particleBaseSize={200}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
      <BlogNavbar />
      <div className='relative'>
        <div className="absolute hidden flex md:hidden lg:block h-[500px] w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
        {/* Who we are section */}
        <div className="animate__animated animate__bounceInUp relative z-10 py-8 px-4">
          <h1 className="text-center font-semibold text-3xl mb-3">Who we are?</h1>
          <p className="w-full md:w-[80%] mx-auto text-center text-white leading-relaxed">
            <span className="font-semibold ">Security Astra</span> is a next-gen automated cybersecurity platform securing your entire <span className="font-semibold ">digital ecosystem</span>. We empower organizations with <span className="font-semibold ">proactive, in-depth security</span> — detecting and eliminating vulnerabilities across <span className="font-semibold ">networks, web apps, and endpoints</span>.
            <br /><br />
            Focused on <span className="font-semibold ">network defense, web protection, endpoint security</span>, and <span className="font-semibold ">compliance standards</span> like ISO 27001 & SOC 2 — we help keep your infrastructure <span className="font-semibold ">resilient against cyber threats</span>.
            <br /><br />
            We're more than a tool — we're your <span className="font-semibold ">trusted partner in digital protection</span>.
          </p>

        </div>
      </div>
      <Hero />
    </div>
  );
}

export default Blog;
