import React from 'react';
import google from '../assets/google.svg';
import mastercard from '../assets/mastercard.svg';
import apple from '../assets/apple.svg';
import uber from '../assets/uber.svg';
import tesla from '../assets/tesla.svg';
import amazon from '../assets/amazon.svg';
import tick from '../assets/tick.svg';
import people from '../assets/people.svg';
import Image from 'next/image';

const Placed = () => {
  return (
    <div className='md:px-24 px-12 py-8'>
      <div className="container p-4 mx-auto text-center">
        <h2 className="md:text-4xl text-3xl font-bold md:mb-1 mb-6">Get Placed in</h2>
      </div>
      <div className="flex justify-center dark:text-gray-400 items-center">
        <div className="grid grid-cols-3 md:p-12 p-2 justify-center md:grid-cols-6 w-full md:gap-2 gap-4 items-center">
          <div className="flex justify-center">
            <Image src={google} alt='' />
          </div>
          <div className="flex justify-center">
            <Image src={mastercard} alt='' />
          </div>
          <div className="flex justify-center">
            <Image src={apple} alt='' />
          </div>
          <div className="flex justify-center">
            <Image src={uber} alt='' />
          </div>
          <div className="flex justify-center">
            <Image src={tesla} alt='' />
          </div>
          <div className="flex justify-center">
            <Image src={amazon} alt='' />
          </div>
        </div>
      </div>
      <div className='md:px-24 px-0 mt-8'>
        <div className="hero-place flex flex-col md:px-12 px-4 rounded-xl md:py-0 py-12 shadow-lg">
          <h1 className='text-4xl font-extrabold mb-2 mt-12 hidden md:block'>Why you should consider</h1>
          <h1 className='text-4xl font-extrabold text-[#4936C1] hidden md:block'>LeapAdvantage?</h1>
          <h1 className='text-xl text-center font-extrabold block md:hidden whitespace-nowrap'>Why Leap Advantage?</h1>
          <div className='flex items-center'>
            <div className='flex flex-col justify-between'>
              <div className='flex items-center gap-2 mt-4 font-medium text-lg'>
                <Image src={tick} alt='tick' />
                <span><span className='font-bold'>GRE and IELTS</span> waiver*</span>
              </div>
              <div className='flex items-center gap-2 mt-4 font-medium text-lg'>
                <Image src={tick} alt='tick' />
                <span>High <span className='font-bold'>admit</span> chance</span>
              </div>
              <div className='flex items-center gap-2 mt-4 font-medium text-lg'>
                <Image src={tick} alt='tick' />
                <span>Scholarship of up to <span className='font-bold'>₹17 lakhs</span></span>
              </div>
              <div className='flex items-center gap-2 mt-4 font-medium text-lg'>
                <Image src={tick} alt='tick' />
                <span>Education from a <span className='font-bold'>top-rank</span> university</span>
              </div>
            </div>
            <div className='ml-auto mt-auto md:block hidden'>
              <Image src={people} alt='' />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Placed;
