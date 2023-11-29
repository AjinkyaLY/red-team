import gsap from 'gsap';
import Spaceship from './assets/spaceship.svg';
import Background from './assets/background.svg';
import Backdrop from './assets/backdrop.svg';
import Passage from './assets/passage.svg';
import PassageText from './assets/passageText.svg';
import Portal from './assets/portal.svg';
import { useEffect } from 'react';

function App() {
  // Function to handle zoom animation on the planet image, portal image, and button hiding
  function spaceShip() {
    const spaceShip = document.getElementById('spaceship');
    const triger1 = document.getElementById('triger1');
    const screenWidth = window.innerWidth;

    gsap.set(spaceShip, { opacity: 0, scale: 0.2 });
    // Toggle the zoom effect using GSAP

    gsap.to(
      spaceShip,
      {
        scrollTrigger: {
          trigger: triger1,
          start: 'top center',
          markers: true,
          toggleActions: 'restart pause reverse pause',
        },
        y: -1000,
        x: 1500,
        opacity: 1,
        scale: 0.5,
        display: 'flex',
      },
      // {
      //   opacity: 1,
      //   display: 'flex',
      //   duration: 2, // Animation duration in seconds
      //   y: 0,
      //   x: 0,
      //   scale: 1.5, // Zoom factor for the planet image (e.g., 1.5 means 150% zoom)
      //   ease: 'expoScale(0.5,7,none)', // Easing function
      // },
    );
  }

  useEffect(() => {
    spaceShip();
  }, []);

  function getInsideSpaceship() {
    const spaceShip = document.getElementById('spaceship');
    const backdrop = document.getElementById('backdrop');
    const passage = document.getElementById('passage');
    const passageText = document.getElementById('passageText');

    const screenWidth = window.innerWidth;

    gsap.set(backdrop, { opacity: 0 });
    gsap.set(passage, { opacity: 0, scale: 1 });
    gsap.set(passageText, { opacity: 0 });
    // Toggle the zoom effect using GSAP

    gsap.to(spaceShip, {
      duration: 3, // Animation duration in seconds
      scale: 5, // Zoom factor for the planet image (e.g., 1.5 means 150% zoom)
      ease: 'power2.out', // Easing function
    });

    gsap.to(backdrop, {
      opacity: 1,
      duration: 2,
      ease: 'power2.out',
      display: 'flex',
      delay: 2,
      // backgroundColor: 'gray',
    });

    gsap.to(spaceShip, {
      opacity: 0,
      display: 'none',
      duration: 1,
      ease: 'power2.out',
      stagger: 0.5,
    });

    gsap.to(passage, {
      opacity: 1,
      scale: 1,
      display: 'flex',
      duration: 3,
      ease: 'power2.in',
      stagger: 1,
    });

    gsap.fromTo(
      passageText,
      {
        y: 500,
        opacity: 0,
      },
      {
        y: -150,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
        display: 'flex',
        delay: 3,
      },
    );
  }

  function portalAnimation() {
    const passageText = document.getElementById('passageText');
    const portal = document.getElementById('portal');

    const screenWidth = window.innerWidth;

    gsap.set(portal, { opacity: 0 });
    // Toggle the zoom effect using GSAP

    gsap.fromTo(
      passageText,
      {
        y: -150,
        opacity: 1,
      },
      {
        y: -800,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        display: 'flex',
      },
    );

    gsap.to(portal, {
      opacity: 1,
      duration: 2,
      ease: 'power2.out',
      display: 'flex',
    });
  }

  function portalToPlayers() {
    const portal = document.getElementById('portal');

    const screenWidth = window.innerWidth;
    // Toggle the zoom effect using GSAP

    gsap.to(portal, {
      rotateZ: 100,
      duration: 3,
      ease: 'expoScale(0.5,7,none)',
      display: 'flex',
    });

    gsap.to(portal, {
      scale: 20,
      duration: 3,
      ease: 'expoScale(0.5,7,none)',
      display: 'flex',
      delay: 2,
    });
  }

  return (
    <div className='bg-black w-full h-full min-h-screen flex items-center'>
      <img src={Background} alt='' className='w-full h-full absolute object-cover z-0' />
      <div className='overflow-hidden relative flex justify-end items-center flex-col my-auto h-full min-h-screen max-h-screen w-full'>
        <img id='spaceship' src={Spaceship} alt='' className='w-full h-full absolute hidden z-10' />
        <img
          id='backdrop'
          src={Backdrop}
          alt=''
          className='w-full h-full absolute object-cover hidden z-20'
        />
        <img
          id='passage'
          src={Passage}
          alt=''
          className='w-full h-full absolute object-cover hidden z-10'
        />
        <img
          id='passageText'
          src={PassageText}
          alt=''
          className='w-[75%] h-[75%] absolute hidden z-40'
        />
        <img
          id='portal'
          src={Portal}
          alt=''
          className='w-[75%] h-[75%] absolute hidden z-40 top-[120px]'
        />

        <div className='flex gap-2 z-[1000]'>
          <button
            id='exploreButton'
            className='leading-6 px-5 py-3 text-2xl rounded-[50px] bg-white text-primary'
            onClick={spaceShip}
          >
            Ship
          </button>

          <button
            id='exploreButton'
            className='leading-6 px-5 py-3 text-2xl rounded-[50px] bg-white text-primary'
            onClick={getInsideSpaceship}
          >
            Gate
          </button>

          <button
            id='exploreButton'
            className='leading-6 px-5 py-3 text-2xl rounded-[50px] bg-white text-primary'
            onClick={portalAnimation}
          >
            Portal
          </button>

          <button
            id='exploreButton'
            className='leading-6 px-5 py-3 text-2xl rounded-[50px] bg-white text-primary'
            onClick={portalToPlayers}
          >
            Portal to players
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
