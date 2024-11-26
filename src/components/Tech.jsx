import React from "react";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles"; // Ensure styles are imported if used

const textVariant = () => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
});

const Tech = () => {
  return (
    <div className="flex flex-col items-center">
        <motion.div variants={textVariant()} initial="initial" animate="animate">
        <p className={`${styles.sectionSubText} text-center`}>
        What I Have Learned So Far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        Skills and Technologies.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default SectionWrapper(Tech, "");
