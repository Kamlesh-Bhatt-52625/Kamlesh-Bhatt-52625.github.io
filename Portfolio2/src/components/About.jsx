import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          // options={{
          //   max: 45,
          //   scale: 1,
          //   speed: 450,
          // }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
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
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Welcome to my coding realm, where I transform coffee into lines of code!
        I&apos;m <span className='text-[#915eff]'>Kamlesh Bhatt</span>, a
        proficient full stack web developer. My expertise spans across HTML5,
        CSS3, JavaScript, ReactJs, NodeJs, Express, and I&apos;m well-versed in
        working with database technologies like MongoDB. My true passion lies in
        crafting websites that not only boast impressive aesthetics but also
        elicit exclamations of delight from users. I strive for excellence and
        pay meticulous attention to detail, enabling me to conquer even the most
        intricate coding challenges. When I&apos;m not engrossed in coding, I
        love immersing myself in the latest tech trends and exploring new
        possibilities in the digital world.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
