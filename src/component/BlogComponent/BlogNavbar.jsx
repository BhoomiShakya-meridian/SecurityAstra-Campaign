import React, { useEffect, useState } from "react";
// import CircularText from "../../Animation/CircularText";
import logo from '../../assets/logo_securityAstra1new.svg';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu toggle
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function BlogNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = () => setIsOpen(!isOpen);
  const [menuAnimation, setMenuAnimation] = useState(""); // 'fadeIn' or 'fadeOut'
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 200); // Small delay before starting animation
  }, []);


  const toggleMenu = () => {
    if (isOpen) {
      setMenuAnimation("animate__fadeOutRight");
      setTimeout(() => setIsOpen(false), 500); // Wait for fadeOut to finish
    } else {
      setMenuAnimation("animate__fadeInRight");
      setIsOpen(true);
    }
  };


  const navItems = [ ];

  return (
    <div className=" bg-black hero flex flex-col md:flex-row items-center justify-between ">
      <div className="relative mx-4 mt-[1.8rem] ">
        <a href="https://securityastra.com/"><img src={logo} className="h-16 w-16  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:h-20 md:w-20  md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 lg:h-26 lg:w-26 absolute  lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10" alt="Logo" /></a>
        <CircularText
          text="   Security  Astra.com"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div>

      {/* <div className="hidden lg:flex justify-center list-none absolute left-1/2 -translate-x-1/2 top-4 items-center gap-8 text-white lg:mt-[3rem]">
  <li
    className={`step_item ${visible ? "visible" : ""} transition-transform duration-300 hover:scale-110`}
    style={{ transitionDelay: `${navItems.length * 0.2}s` }}
  >
    <a onClick={() => { navigate('/') }} className="text-sm cursor-pointer">
      Home
    </a>
  </li>
</div> */}

        {/* <ul className="flex gap-6">
          {navItems.map((text, index) => {
            const sectionId = text.toLowerCase().replace(/\s+/g, "");
            return (
              <li
                key={index}
                className={`step_item ${visible ? "visible" : ""} transition-transform duration-300 hover:scale-110`}
                style={{ transitionDelay: `${index * 0.4}s` }}
              >
                <a href={`#${sectionId}`} className="text-sm cursor-pointer">
                  {text}
                </a>
              </li>
            );
          })}


        </ul> */}
      {/* </div> */}

      {/* PLAN BUTTON (Always visible on larger screens) */}
      <button
        className={`hidden lg:block step_item ${visible ? "visible" : ""} transition-transform duration-300 hover:scale-110 absolute right-10 mt-[-4.8rem] px-8 py-2 text-black bg-white rounded-lg cursor-pointer`}
        onClick={() => navigate('/')}
      >
        Home
      </button>

      {/* MOBILE MENU TOGGLE */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-3xl md:text-[2rem] absolute top-4 right-4 z-50"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>


      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div
          className={` overflow-hidden lg:hidden  fixed top-0 right-0 h-screen w-1/2 bg-gray-900 text-white shadow-lg z-40 px-6 py-3 flex flex-col justify-start items-start gap-4 animate__animated ${menuAnimation}`}>
          <ul className="flex flex-col mt-3 gap-6 w-full">
            <button
             onClick={() => {
              setIsOpen(false);
              navigate('/');
            }}>
Home
            </button>
            
            {/* <li className="w-full hidden">
              <button
                className="bg-white text-black w-full py-1 rounded-md"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/Plan&Pricing');
                }}
              >
                Plan & Pricing
              </button>
            </li> */}
          </ul>
        </div>
      )}

    </div>
  );
}

export default BlogNavbar;
