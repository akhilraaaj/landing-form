/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import plus from '../assets/plus.svg';
import Image from 'next/image';

const Paragraph = () => {
  return (
    <p className="px-4 py-6 pt-0 ml-4 mt-1 md:text-base text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  );
}

const Questions = () => {
  return (
    <div className='md:px-24 px-12 py-8'>
      <div className="container p-4 mx-auto text-center">
        <h2 className="md:text-4xl text-3xl font-bold mb-4">Got Questions? Let's Connect!</h2>
      </div>
      <div className="flex justify-center items-center">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<div className="space-y-4">
			<details className="w-full border rounded-lg cursor-pointer">
         <summary className="flex justify-between px-4 py-6 focus:outline-none focus-visible:ri items-center">
          <span className='md:text-lg text-base font-bold text-blue-900'>What is Leap Advantage - CWRU Pathway program?</span>
         <Image src={plus} alt='' width={40} height={40} />
         </summary>
          <Paragraph />
			</details>
			<details className="w-full border rounded-lg cursor-pointer">
				<summary className="flex justify-between px-4 py-6 focus:outline-none focus-visible:ri">
          <span className='md:text-lg text-base font-bold text-blue-900'>What are the eligibility requirements for this program?</span>
          <Image src={plus} alt='' width={40} height={40} />
        </summary>
        <Paragraph />
			</details>
			<details className="w-full border rounded-lg cursor-pointer">
				<summary className="flex justify-between px-4 py-6 focus:outline-none focus-visible:ri">
          <span className='md:text-lg text-base font-bold text-blue-900'>What are the english proficiency and other requirements for this program?</span>
          <Image src={plus} alt='' width={40} height={40} />
          </summary>
          <Paragraph />
			</details>
			<details className="w-full border rounded-lg cursor-pointer">
				<summary className="flex justify-between px-4 py-6 focus:outline-none focus-visible:ri">
          <span className='md:text-lg text-base font-bold text-blue-900'>What is the deadline for the CWRU MS in Mechanical Engineering program?</span>
          <Image src={plus} alt='' width={40} height={40} />
        </summary>
        <Paragraph />
			</details>
			<details className="w-full border rounded-lg cursor-pointer">
				<summary className="flex justify-between px-4 py-6 focus:outline-none focus-visible:ri">
          <span className='md:text-lg text-base font-bold text-blue-900'>Are there any scholarships or assistantships available for the program?</span>
          <Image src={plus} alt='' width={40} height={40} />
        </summary>
				<Paragraph />
			</details>
			<details className="w-full border rounded-lg cursor-pointer">
				<summary className="flex justify-between px-4 py-6 focus:outline-none focus-visible:ri">
          <span className='md:text-lg text-base font-bold text-blue-900'>Does CWRU accept a 15-year education from India?</span>
          <Image src={plus} alt='' width={40} height={40} />
        </summary>
				<Paragraph />
			</details>
		</div>
	</div>
      </div>
    </div>
 
  )
}

export default Questions;