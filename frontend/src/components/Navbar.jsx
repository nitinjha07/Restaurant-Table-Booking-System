import React from 'react'
import logo from '../../public/assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-[90%] mx-auto' id='home'>
        <div className='w-20'>
            <img src={logo} alt="Restaurant Logo" />
        </div>
        <div>
          <nav>
            <ul className='flex gap-5 font-medium text-lg'>
              <li className='cursor-pointer hover:text-blue-600 duration-200'>
                <Link to='home' smooth={true} duration={500} >Home</Link>
              </li>
              <li className='cursor-pointer hover:text-blue-600 duration-200'>
                <Link to='about' smooth={true} duration={500} >About</Link>
              </li>
              <li className='cursor-pointer hover:text-blue-600 duration-200'>
                <Link to='popularDishes' smooth={true} duration={500} >Popular Dishes</Link>
              </li>
              {/* <li className='cursor-pointer'>
                <Link to='gallery' smooth={true} duration={500} >Gallery</Link>
              </li> */}
              <li className='cursor-pointer hover:text-blue-600 duration-200'>
                <Link to='reservation' smooth={true} duration={500} >Reservation</Link>
              </li>
              <li className='cursor-pointer hover:text-blue-600 duration-200'>
                <Link to='contact' smooth={true} duration={500} >Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default Navbar