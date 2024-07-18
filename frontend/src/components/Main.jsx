import React from 'react'
import mainImg from '../../public/assets/main.jpeg'
import { FlipWords } from "./ui/flip-words";
import { Link } from 'react-scroll';

const Main = () => {
    const words = ["unforgettable", "delightful", "magical", "memorable"];

  return (
    <div className='w-[90%] h-full flex items-center justify-evenly mx-auto'>
        <div className='max-w-[50%] flex flex-col gap-5'>
            <div className="">
                <div className="text-7xl mx-auto font-semibold uppercase text-black ">
                    Create<br />
                    <FlipWords className='p-0 font-bold' words={words} /> <br />
                    dining moments
                </div>
            </div>
            <p className='lg:'>
                Indulge in a culinary journey with our hand-crafted dishes, made from the finest ingredients and served in an ambiance of elegance. Whether it's a romantic dinner, a family gathering, or a special celebration, we promise a memorable dining experience.
            </p>
            <div className='relative top-10'>
                <Link to="reservation" smooth={true} duration={500}>
                    <button class="shadow__btn">
                        Reserve Your Spot
                    </button>
                </Link>
            </div>
        </div>
        <div className='w-[40%]'>
            <img src={mainImg} alt="Main image" />
        </div>
    </div>
  )
}

export default Main