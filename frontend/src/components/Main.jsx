  import React from "react";
  import mainImg from "/assets/main.jpeg";
  import { FlipWords } from "./ui/flip-words";
  import { Link } from "react-scroll";
  import { motion } from "framer-motion";

  const Main = () => {
    const words = ["unforgettable", "delightful", "magical", "memorable"];

    return (
      <div className="w-[90%] h-screen flex flex-col lg:flex-row items-center justify-between mx-auto pt-20 px-4 gap-8 lg:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left"
        >
          <div className="text-4xl lg:text-7xl font-serif">
            <span className="block mb-4">Create</span>
            <FlipWords className="font-bold text-primary" words={words} />
            <span className="block mt-4">dining moments</span>
          </div>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
            Indulge in a culinary journey with our hand-crafted dishes, made
            from the finest ingredients and served in an ambiance of elegance.
            Whether it's a romantic dinner, a family gathering, or a special
            celebration, we promise a memorable dining experience.
          </p>
          <div className="mt-4 lg:mt-8">
            <Link to="reservation" smooth={true} duration={500}>
              <button className="shadow__btn">Reserve Your Spot</button>
            </Link> 
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full hidden lg:block lg:w-[40%] mt-8 lg:mt-0"
        >
          <img
            src={mainImg}
            alt="Main restaurant image"
            className="rounded-2xl w-full h-auto shadow-xl"
          />
        </motion.div>
      </div>
    );
  };

  export default Main;
