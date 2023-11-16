import gsap from 'gsap';

function App() {
  let isZoomed = false;

  // Function to handle zoom animation on the planet image, portal image, and button hiding
  function toggleScaleOnPlanetAndPortal() {
    const planetImage = document.getElementById('planetImage');
    const portalImage = document.getElementById('portalImage');
    const exploreButton = document.getElementById('exploreButton');
    const screenWidth = window.innerWidth;
    const textElements = [
      document.getElementById('triumph'),
      document.getElementById('message'),
      document.getElementById('message2'),
    ];

    gsap.set(textElements, { opacity: 0 });
    // Toggle the zoom effect using GSAP
    if (!isZoomed) {
      if (screenWidth >= 1920) {
        gsap.to(planetImage, {
          duration: 3, // Animation duration in seconds
          y: 220,
          scale: 2.5, // Zoom factor for the planet image (e.g., 1.5 means 150% zoom)
          ease: 'power2.out', // Easing function
        });
      } else if (screenWidth >= 1500) {
        gsap.to(planetImage, {
          duration: 3, // Animation duration in seconds
          y: 220,
          scale: 2.6, // Zoom factor for the planet image (e.g., 1.5 means 150% zoom)
          ease: 'power2.out', // Easing function
        });
      } else if (screenWidth >= 1440) {
        gsap.to(planetImage, {
          duration: 3, // Animation duration in seconds
          y: 220,
          scale: 3.1, // Zoom factor for the planet image (e.g., 1.5 means 150% zoom)
          ease: 'power2.out', // Easing function
        });
      } else if (screenWidth >= 768) {
        gsap.to(planetImage, {
          duration: 3, // Animation duration in seconds
          y: 220,
          scale: 3, // Zoom factor for the planet image (e.g., 1.5 means 150% zoom)
          ease: 'power2.out', // Easing function
        });
      } else {
        gsap.to(planetImage, {
          duration: 1, // Animation duration in seconds
          scale: 1.8, // Zoom factor for the planet image (e.g., 1.5 means 150% zoom)
          ease: 'power2.out', // Easing function
        });
      }
      gsap.to(portalImage, {
        duration: 1, // Animation duration in seconds
        scale: 3.5, // Scale factor for the portal image
        opacity: 0, // Opacity 0 for the portal image (fully transparent)
        ease: 'power2.out', // Easing function
      });
      gsap.to(exploreButton, {
        duration: 0.5, // Animation duration in seconds
        opacity: 0, // Opacity 0 for the button (hide the button)
        ease: 'power2.out', // Easing function
        onComplete: function () {
          exploreButton.style.display = 'none'; // Hide the button after animation completes
        },
      });
      if (screenWidth <= 768) {
        gsap.fromTo(
          textElements,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 1.5,
            ease: 'power4.out',
            display: 'flex',
            delay: 2,
          },
        );
      } else {
        gsap.fromTo(
          textElements,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 40,
            opacity: 1,
            stagger: 0.05,
            duration: 1.5,
            ease: 'power4.out',
            display: 'flex',
            delay: 2,
          },
        );
      }

      isZoomed = true;
    } else {
      gsap.to(planetImage, {
        duration: 1, // Animation duration in seconds
        scale: 1, // Normal scale for the planet image
        ease: 'power2.out', // Easing function
      });
      gsap.to(portalImage, {
        duration: 1, // Animation duration in seconds
        scale: 1, // Normal scale for the portal image
        opacity: 1, // Restore opacity of the portal image to 1 (fully visible)
        ease: 'power2.out', // Easing function
        onStart: function () {
          portalImage.style.display = 'none'; // Show the button before animation starts
        },
      });
      gsap.to(exploreButton, {
        duration: 0.5, // Animation duration in seconds
        opacity: 1, // Restore opacity of the button to 1 (fully visible)
        ease: 'power2.out', // Easing function
        onStart: function () {
          exploreButton.style.display = 'block'; // Show the button before animation starts
        },
      });
      gsap.to(textElements, {
        duration: 6, // Animation duration in seconds
        delay: 1,
        ease: 'power2.out', // Easing function
        display: 'none',
      });
      isZoomed = false;
    }
  }

  return (
    <div>
      <div className='bg-black w-full h-full min-h-screen flex items-center'>
        <div className='overflow-hidden relative flex justify-center flex-col items-center my-auto h-full min-h-screen max-h-screen w-full'>
          <div id='portalImage' className='w-full'>
            <img src='/images/portal.png' className='w-full md:hidden' alt='' />
            <img src='/images/portal-desktop.png' className='w-full hidden md:block' alt='' />
          </div>
          <div
            id='message'
            className='absolute hidden flex-col text-center text-white top-[23%] md:top-[3%] px-5 py-3 leading-6 text-2xl rounded-[50px] w-full xl:top-[4%]'
          >
            <h2 className='text-2xl text-primary md:text-5xl'>RED TEAM</h2>
            <h1 className='text-[40px] z-0 mb-28 md:text-9xl md:mb-48'>COMING SOON...</h1>
            <h1 className='p-4 block m-auto text-4xl z-100 text-transparent w-fit left-0 md:text-[122px] md:p-10'>
              ARE YOU READY?
            </h1>
          </div>

          <div
            id='message2'
            className='absolute hidden flex-col text-center text-white top-[22%] md:top-[3%] px-5 py-3 leading-6 text-2xl rounded-[50px] w-full xl:top-[4%] z-[100]'
          >
            <h2 className='text-2xl text-transparent md:text-5xl'>.</h2>
            <h1 className='text-[40px] text-transparent z-0 mb-28 md:text-9xl md:mb-48'>.</h1>
            <h1 className='p-4 block m-auto text-4xl z-100 text-white border w-fit left-0 md:text-[122px] md:p-10'>
              ARE YOU READY?
            </h1>
          </div>
          <img
            id='planetImage'
            src='/images/planet.png'
            className='absolute m-auto text-center left-0 right-0 top-0 bottom-0 w-2/5 md:w-[17%] md:bottom-[15%]'
            alt=''
          />
          <div className='absolute bottom-[15%] xl:bottom-[8%]'>
            <div id='triumph' className='hidden flex-col'>
              <h3 className='text-xl md:text-4xl text-white mb-10'>STATUS: PLANNING TRIUMPH</h3>
              <svg
                className='m-auto'
                width='60'
                height='60'
                viewBox='0 0 60 60'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M60 30.0029C60 46.5731 46.5687 60 30 60C13.4313 60 0 46.5674 0 30.0029C0 13.4383 13.4313 0 30 0C46.5687 0 60 13.4326 60 30.0029Z'
                  fill='#F8DF00'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M49.5289 23.269H46.4659C46.4659 19.5416 43.4373 16.5126 39.7102 16.5126V13.4494C45.1262 13.4494 49.5289 17.8582 49.5289 23.269Z'
                  fill='white'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M21.5272 38.597C20.0157 38.597 18.7905 37.3831 18.7676 35.8715V35.8601C18.7676 35.8486 18.7676 35.8429 18.7676 35.8371V27.1627V16.5414H13.2543V35.3161C13.2543 39.0092 15.5386 42.1698 18.7676 43.4753C19.781 43.8818 20.886 44.1109 22.0424 44.1109H24.281V38.597C24.2867 38.597 21.573 38.597 21.5272 38.597Z'
                  fill='white'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M35.4906 22.0784V22.5651H35.4849V30.3635H35.4735C35.4735 31.8866 34.2368 33.1176 32.7139 33.1176C31.191 33.1176 29.9601 31.8866 29.9601 30.3635V22.5594V22.0784H24.4353V30.3635C24.4353 34.9384 28.1452 38.6487 32.7197 38.6487C33.6929 38.6487 34.6204 38.4712 35.4906 38.162V41.3684C35.4906 41.3741 35.4906 41.3856 35.4906 41.3913V41.4028C35.4735 42.9086 34.2483 44.1282 32.7368 44.1282C32.6968 44.1282 29.9773 44.1282 29.9773 44.1282V49.6421H32.2158C33.3723 49.6421 34.4773 49.4187 35.4906 49.0065C38.7197 47.7067 41.004 44.5461 41.004 40.8473V22.0727H35.4906V22.0784Z'
                  fill='white'
                />
              </svg>
            </div>
            <button
              id='exploreButton'
              className='leading-6 px-5 py-3 text-2xl rounded-[50px] bg-white text-primary'
              onClick={toggleScaleOnPlanetAndPortal}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
