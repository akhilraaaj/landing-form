import Image from 'next/image'
import React from 'react'
import heroScholar from '../assets/heroScholar.svg'
import tick from '../assets/tick.svg'
import heroBadge from '../assets/heroBadge.png'

const Hero = () => {
  return (
    <div className='px-24 py-8  text-white bg-cover bg-center background'>  
      <div className='flex justify-between items-center'>
        <div className="badge text-sm text-green-700 bg-green-100 p-4 gap-2 font-bold hidden sm:flex">        
          <Image src={heroScholar} alt='' />
          <span>₹17L Scholarship Assured*</span>
        </div>
        <div className='bg-white p-4 rounded-md'>
          <Image src={heroBadge} alt='' />
        </div>
      </div>
      <div className='flex flex-col py-2 md:py-4 font-extrabold md:mt-1 mt-24 text-center md:text-left'>
        <h1 className='flex justify-center text-4xl md:text-6xl mt-2 md:w-auto md:inline-block whitespace-nowrap items-center'>Masters in</h1>
        <h1 className='flex justify-center text-4xl md:text-6xl mt-2 md:w-auto md:inline-block whitespace-nowrap items-center'>Computer Science</h1>
        <div className="flex justify-center md:hidden">        
          <div className="badge text-sm text-green-700 bg-green-100 p-4 gap-2 font-bold flex items-center mt-4">
            <Image src={heroScholar} alt='' />
            <span className='whitespace-nowrap'>₹17L Scholarship Assured*</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col mt-4 text-lg font-bold text-center md:text-left justify-center md:justify-normal '>
          <div className='flex gap-2'>
              <Image src={tick} alt='tick' />
              <span>No IELTS or GRE* required</span>
          </div>
          <div className='flex gap-2 mt-2'>
              <Image src={tick} alt='tick' />
              <span>3 years work visa</span>
          </div>
          <div className='flex gap-2 mt-2'>
              <Image src={tick} alt='tick' />
              <span>High admit chance with Leap</span>
          </div>
      </div>
      <div className='flex justify-center items-center md:justify-normal'>
      <button className="btn btn-active btn-primary mt-12 mb-24 font-bold md:font-medium text-md md:text-lg btn-wide md:w-auto px-4 py-2 text-white">Check your Admit Eligibility</button>
      </div>
    </div>
  )
}

export default Hero;
