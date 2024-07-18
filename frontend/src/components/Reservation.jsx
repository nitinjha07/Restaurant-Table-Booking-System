import React, { useState } from 'react';
import axios from 'axios';
import reservationbk from '../../public/assets/reservationbk.png'

const Reservation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    date: '',
    time: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:5000/reservation/send', formData);
      console.log(response.data);
    }
    catch(error){

      console.log(error)
    }
  };

  return (
    <div className="mx-auto bg-cover bg-no-repeat bg-center w-full h-full " id='reservation'>
      <h2 className="text-center text-4xl font-bold uppercase mt-10">BOOK A TABLE</h2>
      <div className='flex justify-evenly items-center flex-wrap'>
        <form onSubmit={handleSubmit} className='p-8 border-2 border-black w-[30%]'>
          <div className='flex justify-between '>
            <div className="mb-4 w-[45%]">
              <label className="block ">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete= "off"
              />
            </div>
            <div className="mb-4  w-[45%]">
              <label className="block ">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-black"
                autoComplete= "off"
              />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label className="block ">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-black"
                autoComplete= "off"
              />
            </div>
            <div className="mb-4">
              <label className="block ">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-black"
                autoComplete= "off"
              />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label className="block ">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-black"
                autoComplete= "off"
              />
            </div>
            <div className="mb-4">
              <label className="block">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-black"
                autoComplete= "off"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 uppercase"
          >
            Request a table
          </button>
          <p className='text-sm mt-2'>*Please submit your reservation details and we will contact you to confirm your booking</p>
        </form>

        <img src={reservationbk} alt="Reservation background" className=' w-[40%]' />
      </div>

    </div>
  );
};

export default Reservation;
