import Spaceship from './assets/spaceship.svg';
import Background from './assets/background.svg';
import Backdrop from './assets/backdrop.svg';
import Passage from './assets/passage.svg';
import PassageText from './assets/passageText.svg';
import MobilePassageText from './assets/mobilePassageText.svg';
import Portal from './assets/portal.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Space() {
  const screenWidth = window.innerWidth;
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
        if (screenWidth >= 768) {
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
          gsap.to(passageRef.current, {
            opacity: 0,
            scale: 0,
            display: 'none',
            duration: 0.2,
            ease: 'expoScale(0.5,7,none)',
          });
          gsap.to(passageTextRef.current, {
            y: 500,
            opacity: 0,
            duration: 0.5,
            ease: 'expoScale(0.5,7,none)',
            display: 'none',
          });
        } else {
          gsap.to(spaceshipTrigger.current, {
            position: 'fixed',
            top: 0,
          });
          gsap.fromTo(
            spaceshipRef.current,
            {
              y: -50,
              x: 1500,
              opacity: 0,
              scale: 1.5,
              display: 'flex',
            },
            {
              opacity: 1,
              display: 'flex',
              duration: 1,
              x: 200,
              scale: 3,
              ease: 'expoScale(0.5,7,none)',
            },
          );
          gsap.to(passageRef.current, {
            opacity: 0,
            scale: 0,
            display: 'none',
            duration: 0.2,
            ease: 'expoScale(0.5,7,none)',
          });
          gsap.to(passageTextRef.current, {
            y: 500,
            opacity: 0,
            duration: 0.5,
            ease: 'expoScale(0.5,7,none)',
            display: 'none',
          });
        }
      },
      onLeaveBack: () => {
        if (screenWidth >= 768) {
          gsap.to(spaceshipRef.current, {
            opacity: 0,
            display: 'none',
            duration: 1,
            y: -1000,
            x: 1500,
            scale: 1.5,
            ease: 'expoScale(0.5,7,none)',
          });
          gsap.to(spaceshipTrigger.current, {
            position: 'relative',
            top: 0,
          });
          gsap.to(passageRef.current, {
            opacity: 0,
            scale: 0,
            display: 'none',
            duration: 0.2,
            ease: 'expoScale(0.5,7,none)',
          });
          gsap.to(passageTextRef.current, {
            y: 500,
            opacity: 0,
            duration: 0.5,
            ease: 'expoScale(0.5,7,none)',
            display: 'none',
          });
        } else {
          gsap.to(spaceshipRef.current, {
            opacity: 0,
            display: 'none',
            duration: 1,
            y: 0,
            x: 1500,
            scale: 0.2,
            ease: 'expoScale(0.5,7,none)',
          });
          gsap.to(spaceshipTrigger.current, {
            position: 'relative',
            top: 0,
          });
          gsap.to(passageRef.current, {
            opacity: 0,
            scale: 0,
            display: 'none',
            duration: 0.2,
            ease: 'expoScale(0.5,7,none)',
          });
          gsap.to(passageTextRef.current, {
            y: 500,
            opacity: 0,
            duration: 0.5,
            ease: 'expoScale(0.5,7,none)',
            display: 'none',
          });
        }
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
        if (screenWidth >= 768) {
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
          gsap.to(passageTextRef.current, {
            y: 500,
            opacity: 0,
            duration: 0.5,
            ease: 'expoScale(0.5,7,none)',
            display: 'none',
          });
        } else {
          gsap.to(spaceshipRef.current, {
            duration: 1,
            scale: 6,
            ease: 'expoScale(0.5,7,none)',
          });
          gsap.to(backdropRef.current, {
            opacity: 1,
            duration: 1,
            ease: 'expoScale(0.5,7,none)',
            display: 'flex',
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
          gsap.to(passageTextRef.current, {
            y: 500,
            opacity: 0,
            duration: 0.5,
            ease: 'expoScale(0.5,7,none)',
            display: 'none',
          });
        }
      },
      onLeaveBack: () => {
        if (screenWidth >= 768) {
          gsap.to(spaceshipRef.current, {
            duration: 1,
            scale: 1.2,
            ease: 'expoScale(0.5,7,none)',
            delay: 1,
            opacity: 1,
          });
          gsap.to(backdropRef.current, {
            opacity: 0,
            duration: 1,
            ease: 'expoScale(0.5,7,none)',
            display: 'hidden',
            delay: 1,
          });
          gsap.to(passageRef.current, {
            opacity: 0,
            scale: 0,
            display: 'none',
            duration: 0.2,
            ease: 'expoScale(0.5,7,none)',
          });
          gsap.to(passageTextRef.current, {
            y: 500,
            opacity: 0,
            duration: 0.5,
            ease: 'expoScale(0.5,7,none)',
            display: 'none',
          });
          gsap.to(portalRef.current, {
            opacity: 0,
            rotateZ: 0,
            duration: 2,
            scale: 0,
            ease: 'expoScale(0.5,7,none)',
            display: 'none',
          });
        } else {
          gsap.to(spaceshipRef.current, {
            duration: 1,
            scale: 3,
            ease: 'expoScale(0.5,7,none)',
            delay: 1,
            opacity: 1,
          });
          gsap.to(backdropRef.current, {
            opacity: 0,
            duration: 1,
            ease: 'expoScale(0.5,7,none)',
            display: 'hidden',
            delay: 1,
          });
          gsap.to(passageRef.current, {
            opacity: 0,
            scale: 0,
            display: 'none',
            duration: 0.2,
            ease: 'expoScale(0.5,7,none)',
          });
          gsap.to(passageTextRef.current, {
            y: 500,
            opacity: 0,
            duration: 0.5,
            ease: 'expoScale(0.5,7,none)',
            display: 'none',
          });
          gsap.to(portalRef.current, {
            opacity: 0,
            rotateZ: 0,
            duration: 2,
            scale: 0,
            ease: 'expoScale(0.5,7,none)',
            display: 'none',
          });
        }
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
        if (screenWidth >= 768) {
          gsap.fromTo(
            passageTextRef.current,
            {
              y: 500,
              opacity: 0,
            },
            {
              y: -100,
              opacity: 1,
              duration: 1,
              ease: 'expoScale(0.5,7,none)',
              display: 'flex',
              delay: 2,
            },
          );
        } else {
          gsap.fromTo(
            passageTextRef.current,
            {
              y: 500,
              opacity: 0,
            },
            {
              y: -30,
              opacity: 1,
              duration: 1,
              ease: 'expoScale(0.5,7,none)',
              display: 'flex',
              delay: 2,
            },
          );
        }

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
            y: 500,
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
    const sliderRef = document.getElementById('sliderRef');

    const itemsToRemove = [
      document.getElementById('portal'),
      document.getElementById('passage'),
      document.getElementById('backdrop'),
    ];

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
          duration: 1,
          scale: 5,
          ease: 'expoScale(0.5,7,none)',
          display: 'flex',
        });

        gsap.to(sliderRef, {
          opacity: 1,
          duration: 1,
          ease: 'expoScale(0.5,7,none)',
        });

        gsap.to(itemsToRemove, {
          opacity: 0,
          duration: 0.2,
          ease: 'expoScale(0.5,7,none)',
          delay: 1,
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
          duration: 1,
          scale: 0,
          ease: 'expoScale(0.5,7,none)',
          display: 'none',
        });
        gsap.to(sliderRef.current, {
          opacity: 0,
          duration: 1,
          ease: 'expoScale(0.5,7,none)',
        });
        gsap.to(itemsToRemove, {
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
    spaceshipZoom();
    spaceshipPassage();
    toJersey();
  }, []);

  return (
    <div className='bg-black w-full h-full min-h-screen flex items-center z-[100]'>
      <img src={Background} alt='' className='w-full h-full absolute object-cover z-0' />
      <div
        ref={spaceshipTrigger}
        className='relative flex md:justify-end justify-center items-center flex-col my-auto h-full min-h-screen max-h-screen w-full'
      >
        <img
          id='spaceship'
          ref={spaceshipRef}
          src={Spaceship}
          alt=''
          className='relative z-20 opacity-0 scale-[0.2] x-[1500]'
        />
        <img
          id='backdrop'
          ref={backdropRef}
          src={Backdrop}
          alt=''
          className='w-full h-full absolute object-cover hidden z-30'
        />
        <img
          id='passage'
          ref={passageRef}
          src={Passage}
          alt=''
          className='w-full h-full absolute object-cover hidden z-20'
        />

        {screenWidth >= 768 ? (
          <img
            id='passageText'
            ref={passageTextRef}
            src={PassageText}
            alt=''
            className='w-[75%] h-[75%] absolute hidden z-50'
          />
        ) : (
          <img
            id='passageText'
            ref={passageTextRef}
            src={MobilePassageText}
            alt=''
            className='w-[75%] h-[75%] absolute hidden z-50'
          />
        )}

        <img
          id='portal'
          ref={portalRef}
          src={Portal}
          alt=''
          className='w-[75%] h-[75%] hidden absolute z-50 top-[120px] scale-0'
        />
      </div>
    </div>
  );
}

export default Space;
