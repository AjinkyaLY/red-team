import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Slider = () => {
  const images = [
    '/images/jersey/ameya.png',
    '/images/jersey/grantha.png',
    '/images/jersey/sharanya.png',
    '/images/jersey/ajinkya.png',
    '/images/jersey/anagha.png',
    '/images/jersey/deva.png',
    '/images/jersey/tripathi.png',
    '/images/jersey/farru.png',
    '/images/jersey/ghoshita.png',
    '/images/jersey/bhawar.png',
    '/images/jersey/himanshu.png',
    '/images/jersey/hardi.png',
    '/images/jersey/kartik.png',
    '/images/jersey/mayu.png',
    '/images/jersey/nikhil.png',
    '/images/jersey/op.png',
    '/images/jersey/sathe.png',
    '/images/jersey/shetty.png',
    '/images/jersey/rasika.png',
    '/images/jersey/rupali.png',
    '/images/jersey/kothari.png',
    '/images/jersey/siddhant.png',
    '/images/jersey/uv.png',
    '/images/jersey/urvish.png',

    // Add more image URLs as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    let slideWidth = 0;
    const padding = 80;
    const mobpadding = 700;

    if (screenWidth >= 1024) {
      slideWidth = (screenWidth - padding * 2) / 3.5;
    } else {
      slideWidth = (sliderRef.current.clientWidth - mobpadding * 2) / images.length;
      console.log(sliderRef.current.clientWidth - mobpadding * 2);
    }

    gsap.to(sliderRef.current, {
      x: -slideWidth * currentIndex,
      duration: 0.5,
      ease: 'power2.inOut',
    });
  }, [currentIndex, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <div className='bg-black py-[108px] relative '>
        <div className='overlay absolute w-full h-full z-[1] top-0'></div>
        <video
          className='w-full h-full obj  z-0 absolute object-cover top-0'
          autoPlay
          muted
          loop
          playsInline
        >
          <source src='/images/footer-bg-video.mp4' type='video/mp4' />
        </video>
        <h1 className='text-white relative z-10 text-2xl lg:text-[40px] text-center mb-10 lg:mb-16'>
          {' '}
          Meet the Axelions
        </h1>
        <div className='slider-container relative z-10  w-full mx-auto overflow-hidden  '>
          <div
            className='slides flex gap-4 lg:gap-6 pl-4 lg:pl-20 mb-8 lg:mb-0'
            ref={sliderRef}
            style={{ width: `${images.length}00%`, transition: 'transform 0.5s ease' }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className='slide max-w-[300px] lg:max-w-[348px] lg:h-[464px] rounded-[22px]'
                style={{
                  width: `${100 / images.length}%`,
                  border: `0.943px solid rgba(255, 255, 255, 0.11)`,
                  background: `rgba(255, 255, 255, 0.06)`,
                }}
              />
            ))}
          </div>

          <div className='w-full flex justify-center gap-6 lg:justify-between lg:absolute h-full top-0'>
            <button
              className='text-white pl-[73px]'
              //   style={{
              //       background: `linear-gradient(-270deg, #1D1C1F 14.29%, rgba(29, 28, 31, 0.00) 88.1%)`,
              //     }}
              onClick={prevSlide}
            >
              <svg
                width='50'
                height='50'
                viewBox='0 0 50 50'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='0.5'
                  y='49.5'
                  width='49'
                  height='49'
                  rx='24.5'
                  transform='rotate(-90 0.5 49.5)'
                  stroke='white'
                />
                <path
                  d='M17.6464 25.6464C17.4512 25.8417 17.4512 26.1583 17.6464 26.3536L20.8284 29.5355C21.0237 29.7308 21.3403 29.7308 21.5355 29.5355C21.7308 29.3403 21.7308 29.0237 21.5355 28.8284L18.7071 26L21.5355 23.1716C21.7308 22.9763 21.7308 22.6597 21.5355 22.4645C21.3403 22.2692 21.0237 22.2692 20.8284 22.4645L17.6464 25.6464ZM18 26.5H34V25.5H18V26.5Z'
                  fill='white'
                />
              </svg>
            </button>
            <button
              className='text-white pr-[73px] cursor-pointer'
              // style={{
              //   background: `linear-gradient(270deg, #1D1C1F 14.29%, rgba(29, 28, 31, 0.00) 88.1%)`,
              // }}
              onClick={nextSlide}
            >
              <svg
                width='50'
                height='50'
                viewBox='0 0 50 50'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='0.5'
                  y='49.5'
                  width='49'
                  height='49'
                  rx='24.5'
                  transform='rotate(-90 0.5 49.5)'
                  stroke='white'
                />
                <path
                  d='M34.3536 26.3536C34.5488 26.1583 34.5488 25.8417 34.3536 25.6464L31.1716 22.4645C30.9763 22.2692 30.6597 22.2692 30.4645 22.4645C30.2692 22.6597 30.2692 22.9763 30.4645 23.1716L33.2929 26L30.4645 28.8284C30.2692 29.0237 30.2692 29.3403 30.4645 29.5355C30.6597 29.7308 30.9763 29.7308 31.1716 29.5355L34.3536 26.3536ZM18 26.5H34V25.5H18V26.5Z'
                  fill='white'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className='video-container relative h-screen '>
        <div className='overlay absolute w-full h-full z-[1]'></div>
        <video
          className='w-full h-full obj  z-0 absolute object-cover'
          autoPlay
          muted
          loop
          playsInline
        >
          <source src='/images/footer-bg-video.mp4' type='video/mp4' />
        </video>
        <div className='z-10 text-[32px] text-white text-center top-[180px] bottom-[242px] md:top-[200px] left-0 right-0 md:bottom-[464px] font-black absolute flex items-center flex-col justify-center'>
          <img src='/images/logo.svg' className='w-[105px] mb-10' alt='' />
          <h1 className='mb-6 lg:text-5xl'>Axelons</h1>
          <h1 className='text-2xl text-primary-red font-black'>Blazing through the Cosmos</h1>
        </div>
        <img
          src='/images/mountains-mb.png'
          className='absolute bottom-0 w-full h-[309px] z-10 object-cover object-bottom md:hidden'
          alt=''
        />
        <img
          src='/images/mountains.png'
          className='hidden absolute bottom-0 w-full h-[400px] z-10 object-cover object-center md:block'
          alt=''
        />
      </div>
    </div>
  );
};

export default Slider;
