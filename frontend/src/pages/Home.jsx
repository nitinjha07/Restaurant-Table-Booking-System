import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import PopularDishes from '../components/PopularDishes'
import Reservation from '../components/Reservation'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='font-serif'>
      <div className='h-screen flex flex-col'>
        <Navbar />
        <Main />
      </div>
      <About />
      <PopularDishes/>
      <Reservation/>
      <Contact />
    </div>
  )
}

export default Home