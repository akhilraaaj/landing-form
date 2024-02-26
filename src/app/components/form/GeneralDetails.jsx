/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const GeneralDetails = ({ formValues, handleInputChange, formErrors }) => (
  <div className=''>
    <h1 className='font-bold text-xl'>Let's enter your Personal Details</h1>
    <div className='flex flex-wrap'>
      <div className='flex flex-col w-full md:w-1/3'>
        <label className="block mt-4 font-medium mb-1">First Name</label>
        <input 
          type='text' 
          name='firstName' 
          placeholder="Enter Your First Name" 
          value={formValues.firstName} 
          onChange={handleInputChange}
          className={`border border-gray-300 rounded-md p-2 ${formErrors.firstName ? 'border-red-500' : ''} w-full`}
        />
        {formErrors.firstName && <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>}
      </div>

      <div className='flex flex-col w-full md:w-1/3'>
        <div className='md:ml-6 ml-0'>
        <label className="block mt-4 font-medium mb-1">Last Name</label>
        <input 
          type='text'  
          placeholder="Enter Your Last Name" 
          name='lastName' 
          value={formValues.lastName} 
          onChange={handleInputChange}
          className={`border border-gray-300 rounded-md p-2 ${formErrors.lastName ? 'border-red-500' : ''} w-full`}
        />
        {formErrors.lastName && <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>}
        </div>
      </div>

      <div className='flex flex-col w-full md:w-1/3'>
      <div className='md:ml-6 ml-0'>
        <label className="block mt-4 font-medium mb-1">Email</label>
        <input 
          type='text' 
          placeholder="Enter Your email id" 
          name="emailAddress" 
          value={formValues.emailAddress} 
          onChange={handleInputChange} 
          className={`border border-gray-300 rounded-md p-2 ${formErrors.emailAddress ? 'border-red-500' : ''} w-full`}
        />
        {formErrors.emailAddress && <p className="text-red-500 text-sm mt-1">{formErrors.emailAddress}</p>}
        </div>
      </div>

      <div className='flex flex-col w-full md:w-1/3'>
        <label className="block mt-4 font-medium mb-1">Date of Birth</label>
        <input 
          type='date' 
          placeholder="Enter Your Date of Birth" 
          name="dob" 
          value={formValues.dob} 
          onChange={handleInputChange} 
          className={`border border-gray-300 rounded-md p-2 ${formErrors.dob ? 'border-red-500' : ''} w-full`}
        />
        {formErrors.dob && <p className="text-red-500 text-sm mt-1">{formErrors.dob}</p>}
      </div>
    </div>
  </div>
);

export default GeneralDetails;
