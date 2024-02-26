import React from 'react';

const Confirmation = ({ formValues }) => {
  return (
    <div className='px-4 py-2'>
      <h1 className='font-bold text-xl mb-4'>Personal Details</h1>
      <div className='md:flex justify-between'>
        <div className='flex md:flex-col'>
            <h1 className='font-medium'>First Name</h1> 
            <h2 className='md:ml-0 ml-2 font-bold'>{formValues.firstName}</h2>
        </div>
        <div className='flex md:flex-col'>
            <h1 className='font-medium'>Last Name</h1>
            <h2 className='md:ml-0 ml-2 font-bold'>{formValues.lastName}</h2>
        </div>

      <div className='flex md:flex-col'>
      <h1 className='font-medium'>Email Address</h1>
      <h2 className='md:ml-0 ml-2 font-bold'>{formValues.emailAddress}</h2>
      </div>

      <div className='flex md:flex-col'>
      <h1 className='font-medium'>Date of Birth</h1>
      <h2 className='md:ml-0 ml-2 font-bold'>{formValues.dob}</h2>
      </div>
      </div>

      <h1 className='font-bold text-xl mb-4 mt-4'>Mailing Address</h1>
      <div className='md:flex justify-between'>
      <div className='flex md:flex-col'>
        <h1 className='font-medium'>Address Line 1</h1>
        <h2 className='md:ml-0 ml-2 font-bold'>{formValues.address1}</h2>
      </div>

      <div className='flex md:flex-col'>
        <h1 className='font-medium'>Address Line 2</h1>
        <h2 className='md:ml-0 ml-2 font-bold'>{formValues.address2}</h2>
      </div>
      </div>

      <div className='md:flex justify-between mt-4 mb-4'>
      <div className='flex md:flex-col'>
        <h1 className='font-medium'>Country</h1>
        <h2 className='md:ml-0 ml-2 font-bold'>{formValues.country}</h2>
      </div>

      <div className='flex md:flex-col'>
        <h1 className='font-medium'>State</h1>
        <h2 className='md:ml-0 ml-2 font-bold'>{formValues.state}</h2>
      </div>

      <div className='flex md:flex-col'>
      <h1 className='font-medium'>City</h1>
      <h2 className='md:ml-0 ml-2 font-bold'>{formValues.city}</h2>
      </div>

      <div className='flex md:flex-col'>
      <h1 className='font-medium'>Pin Code</h1>
      <h2 className='md:ml-0 ml-2 font-bold'>{formValues.pin}</h2>
      </div>
      </div>
    </div>
  );
};

export default Confirmation;
