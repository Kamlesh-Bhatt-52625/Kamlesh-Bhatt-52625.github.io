import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

// Display picture
import dp from "../assets/dp.jpg";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        {title === "Display Picture" ? (
          <img
            src={icon}
            alt={title}
            className="w-full rounded-[20px] object-contain cursor-pointer"
          />
        ) : (
          <div
            // options={{
            //   max: 45,
            //   scale: 1,
            //   speed: 450,
            // }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        )}
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="max-w-8xl flex flex-wrap gap-14  ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Welcome to my coding realm! I&apos;m{" "}
          <span className="text-[#915eff]">Kamlesh Bhatt</span>, a proficient
          full stack web and app developer passionate about transforming coffee
          into code. My expertise includes HTML5, CSS3, JavaScript, ReactJs,
          NodeJs, Express, MongoDB, and React Native. I craft websites and
          mobile apps that not only look stunning but also provide an
          exceptional user experience. I thrive on attention to detail and
          tackling complex coding challenges. Outside of coding, I stay updated
          with the latest tech trends and explore new digital possibilities.
        </motion.p>
        {/* <img
          src={dp}
          alt='Display Picture'
          className='w-30 max-h-48 min-h-32 object-contain green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        /> */}
        <ServiceCard index={1} title={"Display Picture"} icon={dp} />
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
