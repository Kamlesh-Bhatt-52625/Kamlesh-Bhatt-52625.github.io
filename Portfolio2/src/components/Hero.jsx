import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5
    `}>
        <div className='flex flex-col justify-center itens-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient ml-2' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-[#915eff]'>Kamlesh Bhatt</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            🚀 Welcome! I&apos;m a results-driven Full Stack Web Developer,
            <br className='sm:block hidden' />
            specializing in crafting seamless, user-centric experiences. Let's
            build something extraordinary together!
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
