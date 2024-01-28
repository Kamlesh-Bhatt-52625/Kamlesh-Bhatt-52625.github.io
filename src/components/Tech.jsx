import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          {/* <div>
            <motion.div >
                {technologies?.map((technology) => (

                ))}
            </motion.div>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "skill");
