import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import profile from '../../assets/profile01.jpg';
import { FaLinkedin } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import CEO from '../../assets/CEO.jpg';
import VikasSir from '../../assets/VikasSir.jpg';
import SalmanSir from '../../assets/SalmanSir.jpg';
import MuskanMam from '../../assets/MuskanMam.jpg';
import jeeyanshu from '../../assets/jeeyanshu.jpg';
import Kshitij from '../../assets/Kshitij11.jpg';
import sujal from '../../assets/sujal1.jpg';
import Bhoomi from '../../assets/Bhoomi.jpg';

const team = [
  { name: 'Shankar Kambam', role: 'CEO & MD', img: CEO },
  { name: 'Vikas Giri', role: 'Senior Technology Architect', img: VikasSir },
  { name: 'Salman Sayyed ', role: 'Lead Solution Consultant', img: SalmanSir },
  { name: 'Muskaan Gola', role: 'Senior Product Designer', img: MuskanMam },
  { name: 'Jiyanshu Sharma', role: 'CYBERSECURITY ENGINEER', img: jeeyanshu },
  { name: 'Kshitij Tewatia', role: 'CYBERSECURITY ENGINEER', img: Kshitij },
  { name: 'Sujal Kulshretha', role: 'DATA SCIENTIST', img: sujal },
  { name: 'Bhoomi Shakya', role: 'DATA SCIENTIST', img: Bhoomi },

];

function OurTeam() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} id="meetourteam" className="bg-black text-white py-16 px-4 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className='text-center font-semibold text-3xl mb-3'>Meet Our Team</h1>
        <p className='w-[80%] mx-auto my-5 text-center'>
          At Security Astra, we’re driven by a passionate team of cybersecurity experts, technology architects, solution consultants, UI/UX designers, AI Developers — all working together to redefine digital security.
        </p>


        <div className='mx-[3rem]'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            className="!pb-10 custom-swiper"
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {team.map((person, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#1a1a1a] h-full rounded-xl my-6 p-4 flex flex-col justify-between text-center shadow hover:shadow-md transition min-h-[400px]">
                  <div className="w-full h-[270px] rounded-lg overflow-hidden mb-2">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="flex justify-between items-center w-full text-left min-h-[100px]">
                    <div className="flex flex-col text-left">
                      <h3 className="text-cyan-400 font-semibold leading-tight">{person.name}</h3>
                      <p className="text-gray-400 text-sm">{person.role}</p>
                    </div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* <FaLinkedin className="text-cyan-400 text-2xl" /> */}
                    </a>
                  </div>

                </div>
              </SwiperSlide>


            ))}
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
}

export default OurTeam;
