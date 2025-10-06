import React from "react";
import { FaFacebook, FaTwitter as FaXTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";


const Footer = () => {
    return (
        <div className="urbanist bg-[#161520] text-white pt-20 pb-6 px-4 md:px-12 rounded-t-3xl">
            {/* Header text */}
            <h2 className="text-2xl md:text-7xl font-semibold text-center mb-20">
                Hey... We're waiting for you!
            </h2>

            {/* Contact, Icons, and Links */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-center gap-4 md:gap-0">
                {/* Left: Emails */}
                <div className="flex text-[#F3F4F699] flex-col md:items-start">
                    <div className='flex justify-center items-center gap-6'>
                        <p>marketing@onmeridian.com</p>
                        <p>info@securityastra.com</p>
                    </div>

                    <p className="flex text-[#F3F4F699] flex-col mt-3">
                        Meridian Solutions Pvt. Ltd – All rights reserved ©2025
                    </p>
                </div>

                {/* Center: Social Icons */}
                <div className="flex items-center ml-[-6rem] gap-4">
                    <a href="https://www.youtube.com/channel/UCUu7tZJBEom0EHpXXWg45Vg"><FaYoutube  className="w-5 h-5 md:w-6 md:h-6" /></a>
                    <a href="https://www.linkedin.com/company/on-meridian/"><IoLogoLinkedin  className="w-5 h-5 md:w-6 md:h-6" /></a>
                    <a href="https://www.instagram.com/onmeridian/"><FaInstagram className="w-5 h-5 md:w-6 md:h-6" /></a>
                </div>

                {/* Right: Links */}
                <div className="flex text-[#F3F4F699] gap-4 md:items-end">
                    <a href="#" className="hover:underline">Terms & Conditions</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
            </div>

            {/* Bottom line */}

        </div>

    )
}

export default Footer;