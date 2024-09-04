import React from 'react'
import Hero from '../components/Home/Hero'
import Biography from '../components/Home/Biography'
import Departments from '../components/Home/Departments'
import MessageForm from '../components/Home/MessageForm'
import { assets } from '../assets/assets'

const Home = () => {
  return (
    <>
         <Hero
        title={
          "Welcome to MedicAid | Your Trusted Healthcare Provider"
        }
        imageUrl={assets.HeroIcon}
      />
      <Biography imageUrl={assets.About} />
      <Departments />
      <MessageForm />
    </>
  )
}

export default Home