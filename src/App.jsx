import Hero from './Hero';
import Space from './Space';
import Background from './assets/background.svg';
import Slider from './slider.jsx';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className='flex flex-col overflow-y-hidden h-full'>
      <Hero />
      <Space />
      <div className='h-[50px]'>
        <img src={Background} alt='' className='w-full h-full absolute object-cover z-[-1]' />
      </div>
      <div id='sliderRef' className='opacity-0'>
        <Slider />
      </div>
    </div>
  );
}

export default App;
