import Image from 'next/image'
import React from 'react'
import overviewImg from '../../assets/overviewImg.png'
import overviewSmImg from '../../assets/overview-sm-img.png'

const Overview = () => {
  return (
    <div className='flex flex-col items-center md:px-24 px-6 py-2 justify-between sm:flex-row'>
      <div className='w-full sm:w-1/2 text-lg px-8 flex items-center'>
        <div>
          <p className=''>
            The Case Western Reserve University is located in Cleveland, Ohio, US. The Masters in Computer Science from Case Western Reserve University provides students with experiential and applied learning that ensures a higher level of understanding of the field. It is a 30-credit STEM-designated program.
          </p>
          <p className='mt-8 md:block hidden'>
            The degree is delivered in collaboration with Case Western Reserve University’s College of Engineering and includes 6 months in India and 1.5 years on campus in Ohio, US. The curriculum offers a challenging study experience for individuals with technical credentials.
          </p>
        </div>
      </div>
      <div className='bg-white px-8 rounded-md sm:ml-4 mt-4 sm:mt-0'>
        <Image src={overviewImg} alt='' className='md:block hidden' />
        <Image src={overviewSmImg} alt='' className='md:hidden block' />
      </div>
    </div>
  );
};

export default Overview;
