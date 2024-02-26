/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
// import { Stepper, Step, StepLabel } from "@material-ui/core";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { StepLabel } from "@mui/material";

// import { makeStyles } from "@material-ui/core";
import GeneralDetails from "./GeneralDetails";
import AddressDetails from "./AddressDetails";
import Confirmation from "./Confirmation";
import { Country, State, City } from "country-state-city";
import ThankYou from "./ThankYou";

function getSteps() {
  return [
    "General Details",
    "Address Details",
    "Confirm",
  ];
}

// const useStyles = makeStyles({
//     customLabelStyle: {
//       fontSize: "16px",
//       fontWeight: "bold",
//       color: "#756AB6"
//     }
//   });

function getStepContent(step, formValues, handleInputChange, formErrors, handleCountryChange, handleStateChange) {
  switch (step) {
    case 0:
      return (
        <GeneralDetails
          formValues={formValues}
          handleInputChange={handleInputChange}
          formErrors={formErrors}
        />
      );
    case 1:
      return (
        <AddressDetails
          formValues={formValues}
          handleInputChange={handleInputChange}
          formErrors={formErrors}
          handleCountryChange={handleCountryChange}
          handleStateChange={handleStateChange}
        />
      );
    case 2:
      return <Confirmation formValues={formValues} />;
    default:
      return "Unknown step";
  }
}

const MainForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const initialValues = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    dob: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    pin: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCountryChange = (event) => {
    const countryName = event.target.value;
    setSelectedCountry(countryName);
    const country = countries.find((count) => count.name === countryName);
    setSelectedState("");
    setCities([]);
    setStates(
      State.getStatesOfCountry(country.id).map((state) => ({
        id: state.isoCode,
        name: state.name,
        cc: country.id
      }))
    );

    setFormValues({
      ...formValues,
      country: countryName 
    });
  };

  const handleStateChange = (event) => {
    const stateName = event.target.value;
    setSelectedState(stateName);
    const state = states.find((st) => st.name === stateName);
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
  
    setFormValues({
      ...formValues,
      state: state ? stateName : '' 
    });
  };
  

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
  setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues, activeStep);
    console.log("Form Errors:", errors); 
    setFormErrors(errors);
    setIsSubmit(true);
    if (Object.keys(errors).length === 0) {
      handleNext();
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values, step) => {
    const errors = {};
    const regex = /^[A-Za-z]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 30);
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 10);
  
    if (step === 0) {
      if (!values.firstName.trim()) {
        errors.firstName = "First Name is required!";
      }
      else if (!regex.test(values.firstName.trim())) {
        errors.firstName = "Incorrect Entry!";
      }
      if (!values.lastName.trim()) {
        errors.lastName = "Last Name is required!";
      }
      else if (!regex.test(values.lastName.trim())) {
        errors.lastName = "Incorrect Entry!";
      }
      if (!values.dob.trim()) {
        errors.dob = "Date of birth is required!";
      } else {
        const dobDate = new Date(values.dob);
        if (isNaN(dobDate.getTime())) {
          errors.dob = "Invalid date format!";
        } else if (dobDate < minDate || dobDate > maxDate) {
          errors.dob = "Date of birth should be between 10 and 30 years ago!";
        }
      }
      if (!values.emailAddress.trim()) {
        errors.emailAddress = "Email is required!";
      } else if (!regexEmail.test(values.emailAddress.trim())) {
        errors.emailAddress = "This is not a valid email format!";
      }
    } 
    
    else if (step === 1) {
      if (!values.address1.trim()) {
        errors.address1 = "Address Line 1 is required!";
      }
      if (!values.country.trim()) {
        errors.country = "Country is required!";
      }
      if (!values.state.trim()) {
        errors.state = "State is required!";
      }
      if (!values.city.trim()) {
        errors.city = "City is required!";
      }
      if (!values.pin.trim()) {
        errors.pin = "Pin Code is required!";
      }
      else if (values.pin.trim().length < 6) {
        errors.pin = "Pin Code should be at least 5 characters long!";
      }
    }
  
    return errors;
  };

  
  // const classes = useStyles();

  return (
    <div className="flex flex-col justify-center">
      <div className="text-2xl font-bold">
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>
      {activeStep === steps.length ? (
        <ThankYou />
      ) : (
        <form onSubmit={handleSubmit} className="py-6">
          {getStepContent(activeStep, formValues, handleInputChange, formErrors, handleCountryChange, handleStateChange)}
          <hr className="w-full mt-8 border" />
          <div className="flex justify-between mt-8">
          <button disabled={activeStep === 0 || activeStep === steps.length -1} onClick={handleBack} 
            className="btn btn-outline border border-blue-900 text-blue-900 px-6 py-3 hover:bg-blue-900 font-extrabold" 
            style={{ visibility: activeStep === 0 || activeStep === steps.length -1 ? 'hidden' : 'visible' }}
           >
            Back
           </button>
           <div className="flex-grow"></div>
            <div>
              <button type="submit" className="btn bg-blue-900 text-white hover:bg-green-400 hover:text-black font-bold">
               {activeStep === steps.length - 1 ? "Finish" : "Save & Continue"}
              </button>
            </div>
           </div>
        </form>
      )}
    </div>
  );
};

export default MainForm;
