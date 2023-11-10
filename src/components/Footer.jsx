import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// faTwitterSquare, faInstagram,
export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="socials">
          <ul id="social-icons">
            <li id="contact-github">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Kamlesh-Bhatt-52625">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li id="contact-linkedin">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/kamlesh-bhatt-5059a1273/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <a href="https://github.com/Kamlesh-Bhatt-52625">
            Designed and built by Kamlesh Bhatt{" "}
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
        <a href="mailto: kamleshbhatt3103@gmail.com" id="contact-email">
          kamleshbhatt3103@gmail.com
          <hr />
        </a>
      </div>
    </footer>
  );
}
