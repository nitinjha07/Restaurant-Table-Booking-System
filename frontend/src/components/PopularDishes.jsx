import React from "react";
import data from "../data.json";
import { motion } from "framer-motion";

const PopularDishes = () => {
  return (
    <div className="w-full bg-secondary py-20" id="popularDishes">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-title text-white"
      >
        Hot Picks
      </motion.h2>

      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {data.hotPicks.sections.map((section, sectionIdx) => (
          <motion.div
            key={sectionIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: sectionIdx * 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-serif text-center text-white">
              {section.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.items.map((item, itemIdx) => (
                <motion.div
                  key={itemIdx}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card overflow-hidden"
                >
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h4 className="text-xl font-serif text-white text-center py-4">
                    {item.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
