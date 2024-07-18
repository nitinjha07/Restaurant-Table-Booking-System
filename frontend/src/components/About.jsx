import React from 'react'
import aboutSectionImg from '../../public/assets/aboutSectionImg.jpg'
import data from '../data.json'

const PUBLIC_URL = '../../public'

const About = () => {
  return (
    <div className='w-[100%] mx-auto flex flex-col gap-10 pt-5 pb-10' id='about'>
      <h2 className=" text-center text-4xl font-bold uppercase ">
        Who we are
      </h2>
      <div className='w-[90%] flex justify-between mx-auto'>
        <div className="container px-4 w-[50%] flex flex-col">
          <p className="text-lg mb-6">
            Welcome to this place, where culinary passion meets an unforgettable dining experience. Nestled in the heart of Delhi, our restaurant is dedicated to serving you the finest dishes crafted from the freshest ingredients. Our team of skilled chefs and friendly staff are here to make every meal special.
          </p>
          <p className="text-lg mb-8">
            Our mission is to provide an exceptional dining experience that combines exquisite flavors, top-notch service, and a warm atmosphere. Join us and embark on a culinary journey that delights all your senses.
          </p>
        </div>
        <div className='w-[40%] '>
          <img src={aboutSectionImg} alt="About Section Image" className='rounded-md' />
        </div>
      </div>
      <div className='w-[100%] mx-auto my-10'>
        <div className='flex flex-wrap justify-evenly'>
            {data.highlights.map((highlight) => (
              <div key={highlight.id} className='flex flex-col justify-center items-center w-[20%] h-[20rem] p-4 rounded-lg cursor-default card '>
                <img src={PUBLIC_URL + highlight.image} alt={highlight.title} className='w-20 mb-4' />
                <p className='font-semibold text-lg mb-2 text-center h-12'>{highlight.title}</p>
                <p className='text-center'>{highlight.description}</p>
              </div>
            ))}
          </div>
      </div>

    </div>
  )
}

export default About