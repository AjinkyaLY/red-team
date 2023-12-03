import './Hero.css';
function Hero() {
  return (
    <>
      <div className='main'>
        <nav>
          <div className='nav-left'>
            <img src='/images/logo.png' alt='' />
            <p>AXELONS</p>
          </div>
          <div className='nav-right'>
            <p>our story</p>
            <p>our team</p>
          </div>
        </nav>
        <div className='section-one'>
          {/* Video */}
<div className="overlay"></div>
          <video className='background-video' autoPlay loop muted>
            <source src='/images/hero-banner-video.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <img src='/images/planet.png' alt='' className='planet' />
          <div className='text-overlay'>
            <p>The cosmos</p>
          </div>
          <div className='text-overlay2'>
            <p>Blazing through</p>
          </div>
          <img src='/images/mountains.png' alt='' className='mountain hidden  md:block' />
          <img src="/images/mountains-hero-mb.png" className='mountain md:hidden' alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
