import Hero from './Hero';
import Space from './Space';
import Background from './assets/background.svg';
import Slider from './slider.jsx';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sliderRef = useRef();

  function spaceshipEnter() {
    const portal = [
      document.getElementById('portal'),
      document.getElementById('passage'),
      document.getElementById('backdrop'),
    ];
    ScrollTrigger.create({
      trigger: sliderRef.current,
      start: 'top center',
      end: 'center center',
      toggleActions: 'play pause reverse pause',
      onEnter: () => {
        gsap.to(sliderRef.current, {
          opacity: 1,
          duration: 1,
          ease: 'expoScale(0.5,7,none)',
        });
        gsap.to(portal, {
          opacity: 0,
          duration: 0.2,
          ease: 'expoScale(0.5,7,none)',
        });
      },
      onLeaveBack: () => {
        gsap.to(sliderRef.current, {
          opacity: 0,
          duration: 1,
          ease: 'expoScale(0.5,7,none)',
        });
        gsap.to(portal, {
          opacity: 1,
          duration: 0.2,
          ease: 'expoScale(0.5,7,none)',
        });
      },
      // markers: true, // Remove this in production
    });
  }

  useEffect(() => {
    spaceshipEnter();
  }, []);

  return (
    <div className='flex flex-col overflow-y-hidden h-full'>
      <Hero />
      <Space />
      <div className='h-[100px]'>
        <img src={Background} alt='' className='w-full h-full absolute object-cover z-[-1]' />
      </div>
      <div ref={sliderRef} className='opacity-0'>
        <Slider />
      </div>
    </div>
  );
}

export default App;
