import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 m-auto cursor-pointer">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28 relative m-auto bg-secondary rounded-ss-[100px]"
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
          {/* <motion.div
            variants={fadeIn("up", "spring", 0.75, 1)}
            className='text-center p-2 z-10 w-full
          '>
            <img
              src={technology.icon}
              alt={technology.name}
              className={
                technology.name === "Java"
                  ? "h-20 drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  : "w-20 drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              }
            />
            <p className='text-black text-sm align-baseline justify-normal items-baseline'>
              {technology.name}
            </p>
          </motion.div> */}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "skill");
