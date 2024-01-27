import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";

import { styles } from "../styles";

const Footer = () => {
  return (
    <footer>
      <div className='socials'>
        <ul className={`${styles.socialIcons} `}>
          <li className={`${styles.socialIcons_li}`}>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/Kamlesh-Bhatt-52625'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className={`${styles.socialIcons_li} `}>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/kamlesh-bhatt-5059a1273/'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
      <a
        href='mailto: kamleshbhatt3103@gmail.com'
        className={`${styles.contactEmail} hidden`}>
        kamleshbhatt3103@gmail.com
        <hr />
      </a>
    </footer>
  );
};

export default Footer;
