import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServivedCard = ({ index, title, icon, items }) => {
  return (
    <Tilt className="xs:w-[380px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] 
        rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-8
             px-7 h-[400px] flex
             justify-start items-center flex-col"
        >
          <span>
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          </span>

          <h3
            className="text-white text-[20px]
                 font-bold "
          >
            {title}
          </h3>
          {console.log(items)}

          <ul className="list-disc list-inside  py-6 text-[20px]">
            {items.map((star ,index) => (

                <li key={index}>
                  {console.log(star.star1)}

                  {star.star1}
                </li>

            ))}
          </ul>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Experience = () => {
  return (
    <>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServivedCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
