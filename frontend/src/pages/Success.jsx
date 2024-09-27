import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/assets/logo.png";

const Success = () => {
  return (
    <div className="flex flex-col items-center h-screen relative">
      <div className="">
        <img src={logo} alt="Logo" className="w-2/3 mx-auto" />
      </div>
      <h1 className="text-5xl font-bold mb-4 text-green-600">Request Sent Successfully!</h1>
      <p className="text-lg mb-8 font-semibold">
        Thank you for your reservation request. We will contact you soon to
        confirm your booking.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default Success;
