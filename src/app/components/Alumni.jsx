/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import paul from '../assets/paul.png';
import larry from '../assets/larry.png';
import felipe from '../assets/felipe.png';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className='md:px-24 px-2 py-8'>
        <div className="container p-4 mx-auto text-center">
          <h2 className="md:text-4xl text-3xl font-bold mb-4">Notable Alumni</h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-8 px-4 md:py-1 py-4 md:gap-12 w-full">
            <div className="max-w-xs rounded-xl shadow-xl dark:bg-gray-900 dark:text-gray-100">
              <Image src={paul} alt="Paul" className="w-full h-72 rounded-xl object-fit" />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2 text-center">
                  <h2 className="md:text-2xl text-xl font-semibold">Paul Buchheit</h2>
                  <h3 className='text-base font-medium'>Inventor of Gmail</h3><br />
                  <p className="dark:text-gray-100 text-sm">Google employee #23, inventor of Gmail and now an angel investor.
                  Credited with suggesting Google's now-famous motto, “Don't be evil.”</p>
                </div>
              </div>
            </div>
            <div className="max-w-xs rounded-xl shadow-xl dark:bg-gray-900 dark:text-gray-100">
              <Image src={larry} alt="Larry" className="w-full h-72 rounded-xl" />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2 text-center">
                  <h2 className="md:text-2xl text-xl font-semibold">Larry Hornbeck</h2>
                  <h3 className='text-base font-medium'>Physics</h3><br />
                  <p className="dark:text-gray-100 text-sm">Academy Award-National Academy of Engineering member and recipient of an Academy Award of Merit for innovationswinning inventor.</p>
                </div>
              </div>
            </div>
            <div className="max-w-xs rounded-xl shadow-xl dark:bg-gray-900 dark:text-gray-100">
              <Image src={felipe} alt="Felipe" className="w-full h-72 rounded-xl" />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2 text-center">
                  <h2 className="md:text-2xl text-xl font-semibold whitespace-nowrap">Felipe Gomez del Campo</h2>
                  <h3 className='text-base font-medium space-y-2'>Aerospace Engineering</h3><br />
                  <p className="dark:text-gray-100 text-sm">CEO of FGC Plasma Solutions who was named to Forbes 30 Under 30 and honored by President Barack Obama as a global entrepreneur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className='items-center justify-center btn btn-primary btn-wide text-lg md:block hidden'>Check Admit Eligibility</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
