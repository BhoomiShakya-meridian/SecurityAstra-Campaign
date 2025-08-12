import React from 'react';
import ScrollToTop from '../component/ScrollToTop';
import HeroMain from '../component/HeroMain'
import DynamicsOffering from '../component/DynamicsOffering';
import  DynamicsCircle from '../component/DynamicsCircle';
import GetInTouch from '../component/GetInTouch';
import Footercopy from '../component/Footercopy';
import FAQcopy from '../component/FAQcopy';
import Testimonial from '../component/Testimonial';

function Home() {
  return (
    <div className='h-full w-full bg-black'>
        
        <HeroMain/>
        <DynamicsOffering/>
        <DynamicsCircle/>
        <Testimonial/>
        <GetInTouch/>
        <FAQcopy/>
        <Footercopy/>
        <ScrollToTop/>
    </div>
  )
}

export default Home