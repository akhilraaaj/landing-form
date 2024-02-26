import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Placed from './components/Placed'
import Testimonial from './components/Testimonial'
import Alumni from './components/Alumni'
import Questions from './components/Questions'
import Footer from './components/Footer'
import Form from './components/Form'

const page = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Form />
      <Placed />
      <Testimonial />
      <Alumni />
      <Questions />
      <Footer />
    </>
  )
}

export default page