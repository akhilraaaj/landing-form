import React from 'react';

const Testimonial = () => {
  return (
    <div className='md:px-24 px-4 py-8'>
    <div className="container p-4 mx-auto text-center">
        <h2 className="md:text-4xl text-3xl font-bold mb-4">What our students are saying</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-8 px-4 md:py-1 py-4 md:gap-4 w-full">
          <div className="card bg-[#F8F8FF] shadow-xl">
            <div className="card-body">
              <p className='font-medium'>I valued working with professors on interesting projects for my final project requirement. Being given the opportunity to build them from scratch and have them serve useful purposes made the work fulfilling while also emulating real-world software development.</p>
              <hr />
              <h2 className="card-title font-bold">Mohammed D</h2>
              <div className="card-actions justify-end">
              <p className='text-gray-600 font-medium'>Case Western Reserve University</p>
              </div>
            </div>
          </div>
          <div className="card bg-[#F8F8FF] shadow-xl">
            <div className="card-body">
              <p className='font-medium'>The Career Management Center of CSU is a great resource. Fort Collins is a beautiful city, and CSU has an amazing campus.</p>
              <hr />
              <h2 className="card-title font-bold">Winston K</h2>
              <div className="card-actions justify-end">
              <p className='text-gray-600 font-medium'>Case Western Reserve University</p>
              </div>
            </div>
          </div>
          <div className="card bg-[#F8F8FF] shadow-xl">
            <div className="card-body">
              <p className='font-medium'>Going to CWRU gives you exposure to so many opportunities. The career centre mentored me through the interview process, and I already have a job at EY after graduation.</p>
              <hr />
              <h2 className="card-title font-bold">Daniel O</h2>
              <div className="card-actions justify-end">
              <p className='text-gray-600 font-medium'>Case Western Reserve University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
