import React, { useEffect } from "react";
import resume from "../resume/Kamlesh_Bhatt_resume.pdf";
import AOS from "aos";

export default function About() {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1N1Y9cFJHspzSlaiiiysJ_rJ1Y5MLpjoa/view?usp=sharing",
      "_blank"
    );
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="about section sections" id="about">
      <h1 data-aos="fade-up" className="heading">
        <span className="sauce">About Me</span>
      </h1>
      <div>
        <div data-aos="fade-up" className=" first">
          <p id="user-detail-intro">
            Welcome to my coding realm, where I transform coffee into lines of
            code!{" "}
            <p style={{ display: "inline-block" }} className="sauce">
              I'm Kamlesh Bhatt
            </p>
            , a proficient full stack web developer. My expertise spans across
            HTML5, CSS3, JavaScript, ReactJs, NodeJs, Express, and I'm
            well-versed in working with database technologies like MongoDB. My
            true passion lies in crafting websites that not only boast
            impressive aesthetics but also elicit exclamations of delight from
            users. I strive for excellence and pay meticulous attention to
            detail, enabling me to conquer even the most intricate coding
            challenges. When I'm not engrossed in coding, I love immersing
            myself in the latest tech trends and exploring new possibilities in
            the digital world.
            <br />
          </p>
          <br />
        </div>
        <a
          rel="noreferrer"
          href={resume}
          download={"Kamlesh_Bhatt_resume.pdf"}
          target="_blank"
          id="resume-button-2"
          className="contact-button resume-button second-btn">
          Resume
        </a>
      </div>
    </section>
  );
}
