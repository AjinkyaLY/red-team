import Spaceship from './assets/spaceship.svg';
import Background from './assets/background.svg';
import Backdrop from './assets/backdrop.svg';
import Passage from './assets/passage.svg';
import PassageText from './assets/passageText.svg';
import Portal from './assets/portal.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Space() {
  const spaceshipDivRef = useRef();
  const spaceshipRef = useRef();

  //   function spaceShipFun() {
  //     gsap.set(spaceshipRef, { opacity: 0, scale: 0.2 });

  //     gsap.fromTo(
  //       spaceshipRef,
  //       {
  //         y: -1000,
  //         x: 1500,
  //         opacity: 1,
  //         scale: 0.5,
  //         display: 'flex',
  //       },
  //       {
  //         opacity: 1,
  //         display: 'flex',
  //         duration: 2,
  //         y: 0,
  //         x: 0,
  //         scale: 1.5,
  //         ease: 'expoScale(0.5,7,none)',
  //       },
  //     );
  //   }

  function something() {
    gsap.fromTo(
      spaceshipRef.current,
      {
        y: -1000,
        x: 1500,
        opacity: 0,
        scale: 0.2,
        display: 'flex',
      },
      {
        opacity: 1,
        display: 'flex',
        duration: 2,
        y: 0,
        x: 0,
        scale: 1.2,
        ease: 'expoScale(0.5,7,none)',
      },
    );
  }

  useEffect(() => {
    ScrollTrigger.create({
      trigger: spaceshipDivRef.current,
      start: 'top center',
      end: 'center center',
      toggleActions: 'restart pause reverse pause',
      markers: true,
      onToggle: something(),
    });
  }, []);

  return (
    <div className='bg-black w-full h-full min-h-screen flex items-center'>
      <img src={Background} alt='' className='w-full h-full absolute object-cover z-0' />
      <div className='relative flex justify-end items-center flex-col my-auto h-full min-h-screen max-h-screen w-full'>
        <div ref={spaceshipDivRef} className='w-full h-full'>
          <img
            ref={spaceshipRef}
            id='spaceship'
            src={Spaceship}
            alt=''
            className='w-full h-full z-10'
          />
        </div>

        {/* <div>
          <img id='backdrop' src={Backdrop} alt='' className='w-full h-full object-cover z-20' />
        </div>

        <div>
          <img id='passage' src={Passage} alt='' className='w-full h-full object-cover z-10' />
        </div>

        <div>
          <img id='passageText' src={PassageText} alt='' className='w-[75%] h-[75%] z-40' />
        </div>

        <div>
          <img id='portal' src={Portal} alt='' className='w-[75%] h-[75%] z-40 top-[120px]' />
        </div> */}
      </div>
    </div>
  );
}

export default Space;
