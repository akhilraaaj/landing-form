"use client";
import React from 'react'
import Image from 'next/image'
import feesCard from '../../assets/feesCard.png'
import heroScholar from '../../assets/heroScholar.svg'

const Fees = () => {
  return (
    <div className='flex md:px-24 px-4 py-2 justify-between'>
        <div className='md:w-1/2 w-full text-lg px-8 flex items-center'>
          <div className='text-lg '>
            <p className='text-blue-900 font-medium'>With Leap Advantage, you save almost <span className='font-bold'>₹17 lakhs</span> on tuition fees.</p>
            <Image src={feesCard} alt='' className='w-full h-full mt-4 mb-3 md:hidden block' />
            <p className='text-center text-gray-700 italic text-base block md:hidden'>Tuition fee is subject to change</p>
            <div className="flex badge mt-2 text-sm text-green-700 bg-green-100 p-4 gap-2 font-bold md:hidden shadow-md">        
              <Image src={heroScholar} alt='' />
              <span>Financing</span>
             </div>
            <p className='mt-6 text-blue-900 font-medium'>Leap has partnered with multiple loan providers to help you get loans</p>
            <p className='text-blue-900 font-medium'>for both Indian (1st sem) and US parts (2nd, 3rd, 4th sem) of your education.</p>
            <ul className='list-outside list-disc mt-4 ml-5 max-w-screen font-medium'>
              <style jsx>{`
                ul li::marker {
                color: #68D391;
              }`}
              </style>
              <li className='mb-2'>Collateral-free loans available</li>                
              <li className='mb-2'>100% online process</li>
              <li className='mb-2'>Flexible repayment</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <Image src={feesCard} alt='' className='w-3/4 h-72 hidden md:block' />
          <p className='text-center text-gray-700 italic text-base mt-1 hidden md:block'>Tuition fee is subject to change</p>
        </div>
    </div>
  )
}

export default Fees