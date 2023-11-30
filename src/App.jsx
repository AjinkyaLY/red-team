// import gsap from 'gsap';

// function App() {
//   let isZoomed = false;

//   // Function to handle zoom animation on the planet image, portal image, and button hiding
//   function toggleScaleOnPlanetAndPortal() {
//     const planetImage = document.getElementById('planetImage');
//     const portalImage = document.getElementById('portalImage');
//     const exploreButton = document.getElementById('exploreButton');
//     const screenWidth = window.innerWidth;
//     const textElements = [
//       document.getElementById('triumph'),
//       document.getElementById('message'),
//       document.getElementById('message2'),
//     ];

//     gsap.set(textElements, { opacity: 0 });
//     // Toggle the zoom effect using GSAP
//     if (!isZoomed) {
//       if (screenWidth >= 1920) {
//         gsap.to(planetImage, {
//           duration: 3, // Animation duration in seconds
//           y: 220,
//           scale: 2.5, // Zoom factor for the planet image (e.g., 1.5 means 150% zoom)
//           ease: 'power2.out', // Easing function
//         });
//       } else if (screenWidth >= 1500) {
//         gsap.to(planetImage, {
//           duration: 3, // Animation duration in seconds
//           y: 220,
//           scale: 2.6, // Zoom factor for the planet image (e.g., 1.5 means 150% zoom)
//           ease: 'power2.out', // Easing function
//         });
//       } else if (screenWidth >= 1440) {
//         gsap.to(planetImage, {
//           duration: 3, // Animation duration in seconds
//           y: 220,
//           scale: 3.1, // Zoom factor for the planet image (e.g., 1.5 means 150% zoom)
//           ease: 'power2.out', // Easing function
//         });
//       } else if (screenWidth >= 768) {
//         gsap.to(planetImage, {
//           duration: 3, // Animation duration in seconds
//           y: 220,
//           scale: 3, // Zoom factor for the planet image (e.g., 1.5 means 150% zoom)
//           ease: 'power2.out', // Easing function
//         });
//       } else {
//         gsap.to(planetImage, {
//           duration: 1, // Animation duration in seconds
//           scale: 1.8, // Zoom factor for the planet image (e.g., 1.5 means 150% zoom)
//           ease: 'power2.out', // Easing function
//         });
//       }
//       gsap.to(portalImage, {
//         duration: 1, // Animation duration in seconds
//         scale: 3.5, // Scale factor for the portal image
//         opacity: 0, // Opacity 0 for the portal image (fully transparent)
//         ease: 'power2.out', // Easing function
//       });
//       gsap.to(exploreButton, {
//         duration: 0.5, // Animation duration in seconds
//         opacity: 0, // Opacity 0 for the button (hide the button)
//         ease: 'power2.out', // Easing function
//         onComplete: function () {
//           exploreButton.style.display = 'none'; // Hide the button after animation completes
//         },
//       });
//       if (screenWidth <= 768) {
//         gsap.fromTo(
//           textElements,
//           {
//             y: 100,
//             opacity: 0,
//           },
//           {
//             y: -20,
//             opacity: 1,
//             stagger: 0.05,
//             duration: 1.5,
//             ease: 'power4.out',
//             display: 'flex',
//             delay: 1,
//           },
//         );
//       } else {
//         gsap.fromTo(
//           textElements,
//           {
//             y: 100,
//             opacity: 0,
//           },
//           {
//             y: 40,
//             opacity: 1,
//             stagger: 0.05,
//             duration: 1.5,
//             ease: 'power4.out',
//             display: 'flex',
//             delay: 1,
//           },
//         );
//       }

//       isZoomed = true;
//     } else {
//       gsap.to(planetImage, {
//         duration: 1, // Animation duration in seconds
//         scale: 1, // Normal scale for the planet image
//         ease: 'power2.out', // Easing function
//       });
//       gsap.to(portalImage, {
//         duration: 1, // Animation duration in seconds
//         scale: 1, // Normal scale for the portal image
//         opacity: 1, // Restore opacity of the portal image to 1 (fully visible)
//         ease: 'power2.out', // Easing function
//         onStart: function () {
//           portalImage.style.display = 'none'; // Show the button before animation starts
//         },
//       });
//       gsap.to(exploreButton, {
//         duration: 0.5, // Animation duration in seconds
//         opacity: 1, // Restore opacity of the button to 1 (fully visible)
//         ease: 'power2.out', // Easing function
//         onStart: function () {
//           exploreButton.style.display = 'block'; // Show the button before animation starts
//         },
//       });
//       gsap.to(textElements, {
//         duration: 6, // Animation duration in seconds
//         delay: 1,
//         ease: 'power2.out', // Easing function
//         display: 'none',
//       });
//       isZoomed = false;
//     }
//   }

//   return (
//     <div>
//       <div className='bg-black w-full h-full min-h-screen flex items-center'>
//         <div className='overflow-hidden relative flex justify-center flex-col items-center my-auto h-full min-h-screen max-h-screen w-full'>
//           <div id='portalImage' className='w-full'>
//             <img src='/images/portal.png' className='w-full md:hidden' alt='' />
//             <img src='/images/portal-desktop.png' className='w-full hidden md:block' alt='' />
//           </div>
//           <div
//             id='message'
//             className='absolute hidden flex-col text-center text-white top-[23%] md:top-[3%] px-5 py-3 leading-6 text-2xl rounded-[50px] w-full xl:top-[4%]'
//           >
//             <h2 className='text-2xl text-primary md:text-5xl'>RED TEAM</h2>
//             <h1 className='text-[40px] z-0 mb-28 md:text-9xl md:mb-48'>COMING SOON...</h1>
//             <h1 className='p-4 block m-auto text-4xl z-100 text-transparent w-fit left-0 md:text-[122px] md:p-10'>
//               ARE YOU READY?
//             </h1>
//           </div>

//           <div
//             id='message2'
//             className='absolute hidden flex-col text-center text-white top-[22%] md:top-[3%] px-5 py-3 leading-6 text-2xl rounded-[50px] w-full xl:top-[4%] z-[100]'
//           >
//             <h2 className='text-2xl text-transparent md:text-5xl'>.</h2>
//             <h1 className='text-[40px] text-transparent z-0 mb-28 md:text-9xl md:mb-48'>.</h1>
//             <h1 className='p-4 block m-auto text-[32px] z-100 text-white  w-fit left-0 md:text-[122px] md:p-10'>
//               ARE YOU READY?
//             </h1>
//           </div>
//           <img
//             id='planetImage'
//             src='/images/planet.png'
//             className='absolute m-auto text-center left-0 right-0 top-0 bottom-0 w-2/5 md:w-[17%] md:bottom-[15%]'
//             alt=''
//           />
//           <div className='absolute bottom-[15%] xl:bottom-[8%]'>
//             <div id='triumph' className='hidden flex-col'>
//               <h3 className='text-xl md:text-4xl text-white mb-10'>STATUS: PLANNING TRIUMPH</h3>
//               <div className='flex justify-center items-center'>
//                 <svg
//                   className=''
//                   width='60'
//                   height='60'
//                   viewBox='0 0 60 60'
//                   fill='none'
//                   xmlns='http://www.w3.org/2000/svg'
//                 >
//                   <path
//                     fillRule='evenodd'
//                     clipRule='evenodd'
//                     d='M60 30.0029C60 46.5731 46.5687 60 30 60C13.4313 60 0 46.5674 0 30.0029C0 13.4383 13.4313 0 30 0C46.5687 0 60 13.4326 60 30.0029Z'
//                     fill='#F8DF00'
//                   />
//                   <path
//                     fillRule='evenodd'
//                     clipRule='evenodd'
//                     d='M49.5289 23.269H46.4659C46.4659 19.5416 43.4373 16.5126 39.7102 16.5126V13.4494C45.1262 13.4494 49.5289 17.8582 49.5289 23.269Z'
//                     fill='white'
//                   />
//                   <path
//                     fillRule='evenodd'
//                     clipRule='evenodd'
//                     d='M21.5272 38.597C20.0157 38.597 18.7905 37.3831 18.7676 35.8715V35.8601C18.7676 35.8486 18.7676 35.8429 18.7676 35.8371V27.1627V16.5414H13.2543V35.3161C13.2543 39.0092 15.5386 42.1698 18.7676 43.4753C19.781 43.8818 20.886 44.1109 22.0424 44.1109H24.281V38.597C24.2867 38.597 21.573 38.597 21.5272 38.597Z'
//                     fill='white'
//                   />
//                   <path
//                     fillRule='evenodd'
//                     clipRule='evenodd'
//                     d='M35.4906 22.0784V22.5651H35.4849V30.3635H35.4735C35.4735 31.8866 34.2368 33.1176 32.7139 33.1176C31.191 33.1176 29.9601 31.8866 29.9601 30.3635V22.5594V22.0784H24.4353V30.3635C24.4353 34.9384 28.1452 38.6487 32.7197 38.6487C33.6929 38.6487 34.6204 38.4712 35.4906 38.162V41.3684C35.4906 41.3741 35.4906 41.3856 35.4906 41.3913V41.4028C35.4735 42.9086 34.2483 44.1282 32.7368 44.1282C32.6968 44.1282 29.9773 44.1282 29.9773 44.1282V49.6421H32.2158C33.3723 49.6421 34.4773 49.4187 35.4906 49.0065C38.7197 47.7067 41.004 44.5461 41.004 40.8473V22.0727H35.4906V22.0784Z'
//                     fill='white'
//                   />
//                 </svg>
//                 <img src='/images/athlesia-logo-white.png' className='h-12' alt='' />
//               </div>
//             </div>
//             <button
//               id='exploreButton'
//               className='leading-6 px-5 py-3 text-2xl rounded-[50px] bg-white text-primary'
//               onClick={toggleScaleOnPlanetAndPortal}
//             >
//               Explore
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;









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

    gsap.fromTo(
      spaceShip,
      {
        y: -1000,
        x: 1500,
        opacity: 1,
        scale: 0.5,
        display: 'flex',
      },
      {
        opacity: 1,
        display: 'flex',
        duration: 2, // Animation duration in seconds
        y: 0,
        x: 0,
        scale: 1.5, // Zoom factor for the planet image (e.g., 1.5 means 150% zoom)
        ease: 'expoScale(0.5,7,none)', // Easing function
      },
    );
  }

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
      scale: 5,
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
