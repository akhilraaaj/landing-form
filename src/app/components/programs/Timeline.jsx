/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import timelineImg from '../../assets/timelineImg.png';
import Image from 'next/image';

const Timeline = () => {
  return (
    <div className='flex md:px-48 px-12 py-2 justify-between'>
      <div className='text-lg flex flex-col'>
      <div className='flex md:hidden mb-4'>
        <Image src={timelineImg} alt='' />
      </div>
      <h1 className='mb-6 text-2xl font-bold md:px-0 px-2'>Program Timeline</h1>
        <div className="space-y-6 border-l-2 border-dashed">
            <div className="relative w-full mb-6">
                <svg width="10" height="10" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
                    <circle cx="10" cy="10" r="8" fill="#332EBF"/>
                    <circle cx="10" cy="10" r="2" fill="white"/>
                </svg>
                <div className="ml-6">
                    <div className='flex md:text-2xl text-xl'><h4 class="font-bold mb-4">1st Semester</h4><span className='ml-1 font-medium'>(In India)</span></div>
                    <ul className='list-outside list-disc ml-6 max-w-screen text-gray-500 md:text-lg text-base'>
                      <li className='mb-2'>Start 1st semester in India</li>                
                      <li className='mb-2'>Study while working part-time in India</li>                
                      <li className='mb-2'>Get Visa support and mentorship from Leap</li>                
                      <li className='mb-2'>Move to USA after 1st semester</li>                
                    </ul>
                </div>
            </div>
        </div>
        <div className="relative w-full">
            <svg width="10" height="10" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
                <circle cx="10" cy="10" r="8" fill="#332EBF"/>
                <circle cx="10" cy="10" r="2" fill="white"/>
            </svg>
            <div className="ml-6">
                <div className='flex md:text-2xl text-xl mb-4'><h4 class="font-bold">2nd, 3rd & 4th Semester<span className='ml-1 font-medium'>(In USA)</span></h4></div>
                <ul className='list-outside list-disc ml-6 max-w-screen text-gray-500 md:text-lg text-base'>
                  <li className='mb-2'>Move to the USA for 2nd, 3rd and 4th semester</li>                
                  <li className='mb-2'>Get access to on-campus jobs, fellowships and more</li>                
                  <li className='mb-2'>Graduate and get a 3-year post study work visa</li>                
                  <li className='mb-2'>Get placement support and land a full-time job!</li>                
                </ul>
            </div>
        </div>
    </div>
      <div className='hidden md:block'>
        <Image src={timelineImg} alt='' />
      </div>
    </div>
  );
};

export default Timeline;
