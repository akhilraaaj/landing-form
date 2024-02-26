import React from 'react';
import overview from '../assets/overview.svg';
import program from '../assets/program.svg';
import placement from '../assets/placement.svg';
import fees from '../assets/fees.svg';
import Image from 'next/image';

const Programs = ({ activeComponent, onCardClick }) => {
  return (
    <div className='p-6 md:mt-2 mt-0'>
      <h1 className='text-center text-2xl font-bold md:mt-16 mt-32'>About Case Western University</h1>
      <h1 className='mt-4 text-center md:text-3xl text-2xl font-bold md:px-1 px-2'>Learn about the program, fees, jobs & more</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 md:px-24 px-8 py-8'>
        <div className={`card border border-gray-300 px-4 py-2 text-xl font-bold rounded-md cursor-pointer ${activeComponent === 'Overview' ? 'bg-[#241848] text-white' : ''}`} onClick={() => onCardClick('Overview')}>
          <div className='flex gap-2 items-center'>
            <Image src={overview} alt='' />
            <span className='px-2 py-3 md:text-xl text-base'>Overview</span>
           
            </div>
        </div>
        <div className={`card border border-gray-300 px-4 py-2 text-xl font-bold rounded-md cursor-pointer ${activeComponent === 'Timeline' ? 'bg-[#241848] text-white' : ''}`} onClick={() => onCardClick('Timeline')}>
          <div className='flex gap-2 items-center'>
            <Image src={program} alt='' />
            <span className='px-2 py-3 md:text-xl text-base'>Program & Eligibility</span>
          </div>
        </div>
        <div className={`card border border-gray-300 px-4 py-2 text-xl font-bold rounded-md cursor-pointer ${activeComponent === 'Placement' ? 'bg-[#241848] text-white' : ''}`} onClick={() => onCardClick('Placement')}>
          <div className='flex gap-2 items-center'>
            <Image src={placement} alt='' />
            <span className='px-2 py-3 md:text-xl text-base'>Placement & Career</span>
          </div>
        </div>
        <div className={`card border border-gray-300 px-4 py-2 text-xl font-bold rounded-md cursor-pointer ${activeComponent === 'Fees' ? 'bg-[#241848] text-white' : ''}`} onClick={() => onCardClick('Fees')}>
          <div className='flex gap-2 items-center'>
            <Image src={fees} alt='' />
            <span className='px-2 py-3 md:text-xl text-base'>Fees & Financing</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Programs;
