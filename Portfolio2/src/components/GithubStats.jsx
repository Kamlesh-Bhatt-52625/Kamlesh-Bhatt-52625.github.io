import { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import Aos from "aos";

import { styles } from "../styles";

import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const GithubStats = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Contributions and Stats</p>
        <h2 className={styles.sectionHeadText}>Github Stats.</h2>
      </motion.div>

      <section data-aos='fade-up' className='mt-3'>
        <div data-aos='fade-up' className='flex justify-center items-center'>
          <GitHubCalendar
            fontSize={16}
            blockSize={15}
            year={2024}
            username='kamlesh-bhatt-52625'
          />
        </div>
        <div
          data-aos='fade-up'
          className='flex justify-center items-center mt-[3rem]'>
          <img
            id='github-top-langs'
            align='center'
            src='https://github-readme-stats.vercel.app/api/top-langs/?username=kamlesh-bhatt-52625&theme=neon&border_radius=2.7'
            alt='kamlesh-bhatt-52625'
          />
        </div>
        <div
          data-aos='fade-up'
          className='flex flex-wrap justify-center gap-1 mt-[3rem]'
          id='github-stat'>
          <img
            id='github-stats-card'
            align='center'
            src='https://github-readme-stats.vercel.app/api?username=kamlesh-bhatt-52625&theme=neon&border_radius=2.7&show_icons=true'
            alt='kamlesh-bhatt-52625'
          />
          <img
            id='github-streak-stats'
            align='center'
            src='https://github-readme-streak-stats.herokuapp.com/?user=kamlesh-bhatt-52625&theme=neon&border_radius=2.7&date_format=M%20j%5B%2C%20Y%5D'
            alt='kamlesh-bhatt-52625'
          />
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(GithubStats, "");
