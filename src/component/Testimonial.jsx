import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import comma from "../assets/comma.png";
import test_circle from "../assets/test_circle.jpg";

const testimonials = [
    {
        text: "Security Astra is the best pen testing service with the most seamless interfaces and optimum accuracy.",
        name: "Edulearn.ai",
        role: "",
    },
    {
        text: "Security Astra is the perfect blend of automation and accuracy. It effortlessly integrates Linux security tools and generates professional reports in both HTML and PDF. No more messy manual formatting — this tool does it all!",
        name: "CloudAim",
        role: "",
    },
    {
        text: "Astra's automated vulnerability scans and compliance checks align well with enterprise security needs. The reporting engine is strong, and its ability to dynamically format results into structured outputs is impressive.",
        name: "GLA University",
        role: "",
    },
    {
        text: "Security made very simple!",
        name: "Chayan Kumawat",
        role: "Developer at Meridian",
    },
    {
        text: "I've used many security scanners before, but Astra stands out with its in-depth analysis and detailed reports. The ability to dynamically populate results into an HTML template is a fantastic feature. This tool makes VAPT reporting a breeze!",
        name: "Shikhar Technologies",
        role: "",
    },


];

function Testimonial() {
    return (
        <div
            id="testimonial"
            className="text-white py-16 px-6">
            <h2 className="text-3xl font-bold mb-2 text-center">What Our Clients Say?</h2>
            <p className="text-gray-400 max-w-2xl text-center mx-auto mb-12">
                Hear from businesses and professionals who trust Security Astra for their penetration testing and reporting needs.
            </p>
            {/* <div className="p-10  "> */}
            <Swiper
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet custom-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
                }}
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                grabCursor={true}
                loop={true}
                className="max-w-6xl my-8 rounded-2xl  " // added pb-12
                breakpoints={{
                    0: {       // 👈 for mobile (0px and up)
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {     // 👈 for tablets (≥768px)
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    1024: {    // 👈 for desktops (≥1024px)
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >

                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <div
                                className={`p-8 rounded-xl shadow-lg flex flex-col justify-between transition-all duration-300
        ${isActive ? "bg-[#2A59FF] text-white scale-105" : "bg-white text-black"}
      `}
                                style={{
                                    minHeight: "350px", // fixed height for all cards
                                    height: "100%",
                                }}
                            >
                                <img src={comma} alt="comma" className="w-6 h-6 mb-4 opacity-70" />
                                <p className="text-base leading-relaxed mb-8 italic flex-grow">{item.text}</p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={test_circle}
                                        alt={item.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <h4
                                            className={`font-semibold ${isActive ? "text-white" : "text-blue-600"
                                                }`}
                                        >
                                            {item.name}
                                        </h4>
                                        {item.role && <p className="text-xs">{item.role}</p>}
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>



                ))}
            </Swiper>
            {/* </div> */}

            <style>{`
        .custom-bullet {
          background-color: #666 !important;
          opacity: 0.7;
          width: 10px;
          height: 10px;
          margin: 0rem 4px !important;
        }
        .custom-bullet-active {
          background-color: #2A59FF !important;
          opacity: 1;
        }
          .swiper {
  padding: 30px; /* Creates space inside the border */
}

.swiper-slide {
  background: white; /* Optional, for clarity */
}

      `}</style>
        </div>
    );
}

export default Testimonial;
