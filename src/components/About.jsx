import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-seconsary text-[17px] 
        max-w-3xl leading-[30px]"
      >
        Second-year Computer Science student with strong analytical and
        mathematical skills, proficient in various platforms and languages,
        possessing an innate ability to learn and master new technologies. A
        team player with excellent verbal and written communication skills and
        interpersonal conduct, driven by a passion for solving complex problems
        and learning new languages. Demonstrates curiosity, motivation, and
        ambition, eagerly seeking meaningful teamwork opportunities.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");