import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/assets/logo.png";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const Success = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] flex flex-col items-center justify-center p-4 relative overflow-hidden"
    >

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white backdrop-blur-lg border border-white/20 rounded-[2.5rem] p-12 max-w-2xl w-full mx-auto shadow-primary/10 shadow-2xl transition-shadow duration-300"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full p-4 shadow-lg"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center space-y-8"
        >
          <div className="flex flex-col items-center justify-center gap-4 mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
              className="p-5 bg-gradient-to-br from-primary to-primary/90 rounded-full shadow-lg"
            >
              <CheckCircle className="w-16 h-16 text-white stroke-[1.5]" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent tracking-tight">
              Reservation Confirmed!
            </h1>
          </div>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto font-[350]">
            Thank you for choosing to dine with us. We've sent a confirmation
            email with your reservation details and will contact you shortly to
            finalize any special requests.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/"
              className="shadow__btn group inline-flex items-center gap-3 px-10 py-5"
            >
              <span className="group-hover:-translate-x-1 transition-transform">
                Return Home
              </span>
              <ArrowRight className="h-5 w-5 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Need to make changes? Call us at +1 (555) 123-4567</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Success;
