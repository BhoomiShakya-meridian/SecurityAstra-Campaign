import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assets/pagelogo.svg'; // adjust path as needed

const Navigation = ({ setToggle }) => {
  return (
    <>
      {/* Top bar for mobile (hamburger + logo) */}
      <div className="lg:hidden flex justify-between items-center w-full px-5 py-3 absolute top-0 left-0 z-50 bg-transparent">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <button className="text-black text-[24px]" onClick={() => setToggle(true)}>
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Main nav - desktop layout */}
      <nav className="urbanist hidden lg:flex absolute top-6 left-0 w-[50%] justify-center z-50">
        <div className="bg-[#1A1A2E]/80 backdrop-blur-md px-20 py-3 rounded-full flex items-center gap-10 text-white text-sm font-medium shadow-md">
          <ul className="flex gap-10">
            <a href="/"><li className="cursor-pointer">Home</li></a>
            <a href="#offers"><li className="cursor-pointer">Features</li></a>
            <a href="#working"><li className="cursor-pointer">How It Works</li></a>
          </ul>
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <ul className="flex gap-10">
            <a href="#"><li className="cursor-pointer">Testimonials</li></a>
            <a href="#faq"><li className="cursor-pointer">FAQs</li></a>
            <a href="#hero"><li className="cursor-pointer">Contact</li></a>
          </ul>
        </div>
      </nav>

      {/* Mobile Nav - toggled by hamburger */}
      {/* You can conditionally render this below based on `toggle` state */}
      {/* Sample layout */}
      {/* 
      {toggle && (
        <div className="lg:hidden fixed inset-0 bg-black/80 z-[9999] p-6 text-white">
          <ul className="flex flex-col gap-6 mt-20 text-lg">
            <a href="/"><li>Home</li></a>
            <a href="#offers"><li>Features</li></a>
            <a href="#working"><li>How It Works</li></a>
            <a href="#"><li>Testimonials</li></a>
            <a href="#faq"><li>FAQs</li></a>
            <a href="#hero"><li>Contact</li></a>
          </ul>
        </div>
      )}
      */}
    </>
  );
};

export default Navigation;
