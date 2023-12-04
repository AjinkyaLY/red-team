import Hero from './Hero';
import Space from './Space';
import Background from './assets/background.svg';

function App() {
  return (
    <div className='flex flex-col overflow-y-hidden h-full'>
      <Hero />
      <Space />
      <div id='div2' className='h-[500px]'>
        <img src={Background} alt='' className='w-full h-full absolute object-cover z-[-1]' />
      </div>
    </div>
  );
}

export default App;
