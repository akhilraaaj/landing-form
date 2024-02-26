"use client";
import React, { useState, useEffect } from 'react';
import { Country, State, City } from "country-state-city";

const AddressDetails = ({ formValues, handleInputChange, formErrors, handleCountryChange, handleStateChange }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    const countryList = Country.getAllCountries().map((country) => ({
      id: country.isoCode,
      name: country.name
    }));
    setCountries(countryList);
  }, []);

  useEffect(() => {
    if (formValues.country) {
      const country = countries.find((country) => country.name === formValues.country);
      if(country) {
        setSelectedCountry(formValues.country);
        setStates(
        State.getStatesOfCountry(country.id).map((state) => ({
          id: state.isoCode,
          name: state.name,
          cc: country.id
        }))
      );
      }
    }
  }, [formValues.country, countries]);

  useEffect(() => {
    if (formValues.state && states.length > 0) {
      setSelectedState(formValues.state);
      const state = states.find((state) => state.name === formValues.state);
      if (state) {
        setCities(
          City.getCitiesOfState(state.cc, state.id).map((city) => ({
            id: city.id,
            name: city.name
          }))
        );
      } else {
        setCities([]);
      }
    }
  }, [formValues.state, states]);

  const handleCityChange = (event) => {
    const cityName = event.target.value;
    handleInputChange(event);
  };

  return (
    <>
      <h1 className='font-bold text-xl'>Enter your Current Mailing Address</h1>
      <div className='flex flex-wrap'>

        <div className='flex flex-col w-full md:w-1/2'>
          <label className="block mt-5 font-medium mb-1">Address Line 1 <span className='text-red-500'>*</span></label>
          <input 
            type='text' 
            name='address1' 
            placeholder="Enter Your Address (Apt., suit, house no.)" 
            value={formValues.address1} 
            onChange={handleInputChange}
            className={`border border-gray-300 rounded-md p-2 ${formErrors.address1 ? 'border-red-500' : ''} w-full`}
          />
          {formErrors.address1 && <p className="text-red-500 text-sm mt-1">{formErrors.address1}</p>}
        </div>

        <div className='flex flex-col w-full md:w-1/2'>
          <div className='md:ml-6 ml-0'>
            <label className="block mt-5 font-medium mb-1">Address Line 2 <span className='text-gray-500'>(optional)</span></label>
            <input 
              type='text' 
              name='address2' 
              placeholder="Enter Your address line" 
              value={formValues.address2} 
              onChange={handleInputChange}
              className={`border border-gray-300 rounded-md p-2 ${formErrors.address2 ? 'border-red-500' : ''} w-full`}
            />
            {formErrors.address2 && <p className="text-red-500 text-sm mt-1">{formErrors.address2}</p>}
          </div>
        </div>
          
        {/* Country */}
        <div className='flex flex-col w-full md:w-1/3'>
          <label className="block mt-5 font-medium mb-1">Country</label>
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className={`border border-gray-300 rounded-md p-2 ${formErrors.country ? 'border-red-500' : ''} w-full`}
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          {formErrors.country && <p className="text-red-500 text-sm mt-1">{formErrors.country}</p>}
        </div>

        {/* State */}
        <div className='flex flex-col w-full md:w-1/3'>
          <div className='md:ml-6 ml-0'>
            <label className="block mt-5 font-medium mb-1">State</label>
            <select
              value={selectedState}
              onChange={handleStateChange}
              className={`border border-gray-300 rounded-md p-2 ${formErrors.state ? 'border-red-500' : ''} w-full`}
            >
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state.id} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
            {formErrors.state && <p className="text-red-500 text-sm mt-1">{formErrors.state}</p>}
          </div>
        </div>

        {/* City */}
        {cities.length>0 }
        <div className='flex flex-col w-full md:w-1/3'>
          <div className='md:ml-6 ml-0'>
            <label className="block mt-5 font-medium mb-1">City</label>
            <select
              value={formValues.city}
              onChange={handleCityChange}
              name="city"
              className={`border border-gray-300 rounded-md p-2 ${formErrors.city ? 'border-red-500' : ''} w-full`}
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
            {formErrors.city && <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>}
          </div>
        </div>

        <div className='flex flex-col w-full md:w-1/3'>
          <label className="block mt-5 font-medium mb-1">Pin Code</label>
          <input 
            type='number'  
            placeholder="Enter Pin Code" 
            name='pin' 
            value={formValues.pin} 
            onChange={handleInputChange}
            className={`border border-gray-300 rounded-md p-2 ${formErrors.pin ? 'border-red-500' : ''} w-full`}
          />
          {formErrors.pin && <p className="text-red-500 text-sm mt-1">{formErrors.pin}</p>}
        </div>

      </div>
    </>
  );
}

export default AddressDetails;
