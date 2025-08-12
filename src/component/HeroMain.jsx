import React, { useState } from 'react';
import logo from '../assets/pagelogo.svg';
import mainbg from '../assets/mainbg.jpg';
import Contact from './Contact';
import { GiHamburgerMenu } from 'react-icons/gi'; // for hamburger icon
import { IoClose } from 'react-icons/io5'; // for close icon

function HeroMain() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative text-white overflow-hidden">
      {/* Navbar */}
      <nav className="urbanist absolute top-6 lg:left-[15%] transform -translate-x-1 lg:mx-auto w-full lg:w-[70%] z-50 px-4 py-4 md:px-0 md:py-0">
        <div className="bg-[#1A1A2E]/80 backdrop-blur-md rounded-full shadow-md flex items-center justify-between px-6 py-3 md:justify-center md:gap-10">
          
          {/* Logo (always visible) */}
          <img src={logo} alt="Logo" className="w-10 h-10 md:hidden" />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <ul className="flex gap-10">
              <a href="/"> <li className="cursor-pointer">Home</li></a>
              <a href="#offers"><li className="cursor-pointer">Features</li></a>
              <a href="#working"> <li className="cursor-pointer">How It Works</li></a>
            </ul>
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <ul className="flex gap-10">
              <a href="#testimonial"> <li className="cursor-pointer">Testimonials</li></a>
              <a href="#faq"> <li className="cursor-pointer">FAQs</li></a>
              <a href="#hero"> <li className="cursor-pointer">Contact</li></a>
            </ul>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3  bg-[#1A1A2E]/90 backdrop-blur-md rounded-xl py-4 px-6 text-sm font-medium shadow-lg absolute w-full left-0 top-[64px]">
            <ul className="flex flex-col gap-4 text-white">
              <a href="/" onClick={() => setIsOpen(false)}><li>Home</li></a>
              <a href="#offers" onClick={() => setIsOpen(false)}><li>Features</li></a>
              <a href="#working" onClick={() => setIsOpen(false)}><li>How It Works</li></a>
              <a href="#testimonial" onClick={() => setIsOpen(false)}><li>Testimonials</li></a>
              <a href="#faq" onClick={() => setIsOpen(false)}><li>FAQs</li></a>
              <a href="#hero" onClick={() => setIsOpen(false)}><li>Contact</li></a>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div
        className="min-h-[130vh] bg-cover bg-no-repeat bg-center flex w-full max-h-screen lg:pt-[120px] pb-16 lg:px-0 flex-col items-center justify-center text-center px-6 md:px-0"
        style={{ backgroundImage: `url(${mainbg})` }}
      >
        <div className="mt-[-20rem] md:mt-32 flex flex-col items-center gap-6">
          <h1 className="gelasio text-3xl md:text-5xl font-bold max-w-4xl lg:mt-[-5rem] leading-tight">
            Protect Your Digital World with <br />
            AI-Powered Security
          </h1>

          <a
            href="#hero"
            className="bg-blue-600 hover:bg-blue-700 lg:mt-[16rem] transition px-6 py-3 rounded-full font-semibold text-white text-sm md:text-base shadow-lg z-10"
          >
            Complete the form to get started
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative mt-[-20rem]  lg:-mt-24 z-10 px-6 md:px-0 flex justify-center">
        <div className="w-full max-w-5xl">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default HeroMain;
