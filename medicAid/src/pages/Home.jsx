import React from 'react'
import Hero from '../components/Home/Hero/Hero'
import Biography from '../components/Home/Biography/Biography'
import Departments from '../components/Home/Departments/Departments'
import MessageForm from '../components/Home/MessageForm/MessageForm'
import { assets } from '../assets/assets'
import Navigation from '../components/Navigation/Navigation'

const Home = () => {
  return (
    <>
      {/* <Navigation />
      <Hero
        title={
          "Welcome to MedicAid | Your Trusted Healthcare Provider"
        }
        imageUrl={assets.illustration}
      /> */}
      <Departments/>
      {/* <MessageForm /> */}
    </>
  )
}

export default Home