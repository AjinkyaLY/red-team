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
  const spaceshipRef = useRef();
  const spaceshipTrigger = useRef();
  const backdropRef = useRef();
  const passageRef = useRef();
  const passageTextRef = useRef();
  const portalRef = useRef();

  function spaceshipEnter() {
    ScrollTrigger.create({
      trigger: spaceshipTrigger.current,
      start: 'top center',
      end: 'center center',
      toggleActions: 'play pause reverse pause',
      onEnter: () => {
        gsap.to(spaceshipTrigger.current, {
          position: 'fixed',
          top: 0,
        });
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
            duration: 1,
            y: 0,
            x: 0,
            scale: 1.2,
            ease: 'expoScale(0.5,7,none)',
          },
        );
      },
      onLeaveBack: () => {
        gsap.to(spaceshipRef.current, {
          opacity: 0,
          display: 'none',
          duration: 1,
          y: -1000,
          x: 1500,
          scale: 0.2,
          ease: 'expoScale(0.5,7,none)',
        });
        gsap.to(spaceshipTrigger.current, {
          position: 'relative',
          top: 0,
        });
      },
      // markers: true, // Remove this in production
    });
  }

  function spaceshipZoom() {
    ScrollTrigger.create({
      trigger: spaceshipTrigger.current,
      start: 'center center',
      end: 'end center',
      toggleActions: 'play pause reverse pause',
      onEnter: () => {
        gsap.to(spaceshipRef.current, {
          duration: 1,
          scale: 2,
          ease: 'expoScale(0.5,7,none)',
        });

        gsap.to(backdropRef.current, {
          opacity: 1,
          duration: 1,
          ease: 'expoScale(0.5,7,none)',
          display: 'flex',
        });
        gsap.to(spaceshipRef.current, {
          opacity: 1,
          display: 'flex',
          duration: 1,
          ease: 'expoScale(0.5,7,none)',
        });
        gsap.to(passageRef.current, {
          opacity: 0,
          scale: 0,
          display: 'none',
          duration: 0.2,
          ease: 'expoScale(0.5,7,none)',
        });
        gsap.to(portalRef.current, {
          opacity: 0,
          rotateZ: 0,
          duration: 2,
          scale: 0,
          ease: 'expoScale(0.5,7,none)',
          display: 'none',
        });
      },
      onLeaveBack: () => {
        gsap.to(spaceshipRef.current, {
          duration: 1,
          scale: 1.2,
          ease: 'expoScale(0.5,7,none)',
          delay: 1,
        });
        gsap.to(backdropRef.current, {
          opacity: 0,
          duration: 1,
          ease: 'expoScale(0.5,7,none)',
          display: 'hidden',
          delay: 1,
        });
        gsap.to(spaceshipRef.current, {
          opacity: 1,
          display: 'flex',
          duration: 1,
          ease: 'expoScale(0.5,7,none)',
        });
        gsap.to(passageRef.current, {
          opacity: 0,
          scale: 0,
          display: 'none',
          duration: 0.2,
          ease: 'expoScale(0.5,7,none)',
        });
        gsap.to(portalRef.current, {
          opacity: 0,
          rotateZ: 0,
          duration: 2,
          scale: 0,
          ease: 'expoScale(0.5,7,none)',
          display: 'none',
        });
      },
      // markers: true, // Remove this in production
    });
  }

  function spaceshipPassage() {
    ScrollTrigger.create({
      trigger: spaceshipTrigger.current,
      start: 'center 52%',
      end: 'end 52%',
      toggleActions: 'play pause reverse pause',
      onEnter: () => {
        gsap.to(spaceshipRef.current, {
          opacity: 0,
          display: 'none',
          duration: 1,
          ease: 'expoScale(0.5,7,none)',
          delay: 1,
        });

        gsap.to(passageRef.current, {
          opacity: 1,
          scale: 1,
          display: 'flex',
          duration: 1,
          ease: 'expoScale(0.5,7,none)',
          delay: 1,
        });
        gsap.fromTo(
          passageTextRef.current,
          {
            y: 500,
            opacity: 0,
          },
          {
            y: -150,
            opacity: 1,
            duration: 1,
            ease: 'expoScale(0.5,7,none)',
            display: 'flex',
            delay: 2,
          },
        );
        gsap.to(portalRef.current, {
          opacity: 0,
          rotateZ: 0,
          duration: 2,
          scale: 0,
          ease: 'expoScale(0.5,7,none)',
          display: 'none',
        });
      },
      onLeaveBack: () => {
        gsap.to(spaceshipRef.current, {
          opacity: 1,
          display: 'flex',
          duration: 1,
          ease: 'expoScale(0.5,7,none)',
        });
        gsap.to(passageRef.current, {
          opacity: 0,
          scale: 0,
          display: 'none',
          duration: 0.2,
          ease: 'expoScale(0.5,7,none)',
        });
        gsap.fromTo(
          passageTextRef.current,
          {
            y: -150,
            opacity: 1,
            display: 'flex',
          },
          {
            y: 0,
            opacity: 0,
            duration: 0.5,
            ease: 'expoScale(0.5,7,none)',
            display: 'none',
          },
        );
        gsap.to(portalRef.current, {
          opacity: 0,
          rotateZ: 0,
          duration: 2,
          scale: 0,
          ease: 'expoScale(0.5,7,none)',
          display: 'none',
        });
      },
      //  markers: true, // Remove this in production
    });
  }

  function toJersey() {
    ScrollTrigger.create({
      trigger: spaceshipTrigger.current,
      start: 'center 10%',
      end: 'end 10%',
      toggleActions: 'play pause reverse pause',
      onEnter: () => {
        gsap.fromTo(
          passageTextRef.current,
          {
            y: -150,
            opacity: 1,
          },
          {
            y: -800,
            opacity: 0,
            duration: 1.5,
            ease: 'expoScale(0.5,7,none)',
            display: 'none',
          },
        );
        gsap.to(portalRef.current, {
          opacity: 1,
          rotateZ: 100,
          duration: 2,
          scale: 5,
          ease: 'expoScale(0.5,7,none)',
          display: 'flex',
        });
      },
      onLeaveBack: () => {
        gsap.fromTo(
          passageTextRef.current,
          {
            y: -800,
            opacity: 0,
          },
          {
            y: -150,
            opacity: 1,
            duration: 1,
            ease: 'expoScale(0.5,7,none)',
            display: 'flex',
          },
        );
        gsap.to(portalRef.current, {
          opacity: 0,
          rotateZ: 0,
          duration: 2,
          scale: 0,
          ease: 'expoScale(0.5,7,none)',
          display: 'none',
        });
      },
      markers: true, // Remove this in production
    });
  }

  useEffect(() => {
    spaceshipEnter();
    spaceshipZoom();
    spaceshipPassage();
    toJersey();
  }, []);

  return (
    <div className='bg-black w-full h-full min-h-screen flex items-center'>
      <img src={Background} alt='' className='w-full h-full absolute object-cover z-0' />
      <div
        ref={spaceshipTrigger}
        className='relative flex justify-end items-center flex-col my-auto h-full min-h-screen max-h-screen w-full'
      >
        <img
          id='spaceship'
          ref={spaceshipRef}
          src={Spaceship}
          alt=''
          className='relative z-10 opacity-0 scale-[0.2] x-[1500]'
        />
        <img
          id='backdrop'
          ref={backdropRef}
          src={Backdrop}
          alt=''
          className='w-full h-full absolute object-cover hidden z-20'
        />
        <img
          id='passage'
          ref={passageRef}
          src={Passage}
          alt=''
          className='w-full h-full absolute object-cover hidden z-10'
        />
        <img
          id='passageText'
          ref={passageTextRef}
          src={PassageText}
          alt=''
          className='w-[75%] h-[75%] absolute hidden z-40'
        />
        <img
          id='portal'
          ref={portalRef}
          src={Portal}
          alt=''
          className='w-[75%] h-[75%] hidden absolute z-40 top-[120px] scale-0'
        />
      </div>
    </div>
  );
}

export default Space;
