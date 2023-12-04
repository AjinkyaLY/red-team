import Hero from './Hero';
import Space from './Space';
import Background from './assets/background.svg';
import Slider from './slider.jsx';

function App() {
  return (
    <div className='flex flex-col overflow-y-hidden h-full'>
      <Hero />
      <Space />
      <div className='h-[50px]'>
        <img src={Background} alt='' className='w-full h-full absolute object-cover z-[-1]' />
      </div>
      <div id='sliderRef' className='opacity-0 z-[999]'>
        <Slider />
      </div>
    </div>
  );
}

export default App;
