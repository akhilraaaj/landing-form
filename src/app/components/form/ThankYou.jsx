/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ThumbsUpImg from '../../assets/thumbsup.svg'
import Image from 'next/image'

const ThankYou = () => {
  return (
    <div className='flex flex-col justify-center items-center md:px-24 px-12 py-24 mt-8 border border-green-200 rounded-xl shadow-lg bg-[#F8FFEE]'>
        <Image src={ThumbsUpImg} alt='' width={50} height={50} />
        <h1 className='font-bold text-xl text-green-800 mt-4'>That's all we need.</h1>
        <p className='font-medium text-center text-green-600 mt-2'>Thank you for your time. We will get back to you soon</p>
    </div>
  )
}

export default ThankYou