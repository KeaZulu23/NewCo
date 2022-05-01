import React from 'react';

import heroVid from '../assets/video.mp4';
import Logo from '../assets/logo.PNG';

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center' style={{paddingLeft: "50px", paddingRight: "50px"}}>
        <img src={Logo} class="mr-3 h-6 sm:h-9" alt=" Logo" style={{height: "300px"}} />
        <h1>New_Co</h1>
        <h1 className='py-2' style={{ paddingTop: "50px"}}>
          IT <span className='blue'>Consultancy</span>
        </h1>
        <p className='text-xl py-4' style={{paddingLeft: "80px", paddingRight: "80px"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <button className='m-2'>Services</button>
          <button className='m-2'>Contact</button>
        </div>
      </div>
      {/* <div>
        <p className='text-center text-white text-2xl font-bold'>Total Volume Secured: $42,104,783,662.47</p>
      </div> */}
    </div>
  );
};

export default Hero;
