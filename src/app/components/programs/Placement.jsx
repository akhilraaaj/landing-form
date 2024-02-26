import React from 'react'
import placement from '../../assets/placement.png'
import Image from 'next/image'

const Placement = () => {
  return (
    <div className='flex flex-col md:px-24 px-12  py-2 justify-center items-center md:text-xl text-base'>
        <h1>MS in Computer Science opens up many career opportunities in various</h1>
        <h1>fields such as <span className='font-bold'>software development, data science, artificial</span></h1>
        <h1><span className='font-bold'>intelligence, cyber security, cloud computing </span>, etc.</h1>
        <Image src={placement} alt='' className='mt-8' />
    </div>
  )
}

export default Placement