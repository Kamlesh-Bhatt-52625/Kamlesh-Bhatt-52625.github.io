import React, { useEffect } from "react";
import { DiMongodb, DiHtml5 } from "react-icons/di";
import {
  SiExpress,
  SiCss3,
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiPostman,
  SiVite,
} from "react-icons/si";
import { FaNodeJs, FaGitSquare, FaJava } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { TbBrandVscode, TbBrandCpp } from "react-icons/tb";
import AOS from "aos";

export const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="sections" id="skills">
      <h1 data-aos="fade-up" className="heading">
        <span className="sauce">Skills</span>
      </h1>
      <div></div>
      <p data-aos="fade-up">
        Here are a few Technologies I’ve been working with recently:
      </p>
      <ul data-aos="fade-up" className="skills-list">
        <li className="skills-card">
          <div className="skills-card-name">
            {" "}
            <SiJavascript
              className="skills-card-img"
              color="var(--light-red)"
            />{" "}
            JavaScript
          </div>
        </li>
        <li className="skills-card">
          <div className="skills-card-name">
            {" "}
            <SiReact
              className="skills-card-img"
              color="var(--light-red)"
            />{" "}
            ReactJs
          </div>
        </li>
        <li className="skills-card">
          <div className="skills-card-name">
            <SiRedux className="skills-card-img" color="var(--light-red)" />{" "}
            Redux
          </div>
        </li>
        <li className="skills-card">
          <div className="skills-card-name">
            {" "}
            <SiExpress
              className="skills-card-img"
              color="var(--light-red)"
            />{" "}
            ExpressJs
          </div>
        </li>
        <li className="skills-card">
          <div className="skills-card-name">
            {" "}
            <FaNodeJs
              className="skills-card-img"
              color="var(--light-red)"
            />{" "}
            Node.js
          </div>
        </li>
        <li className="skills-card">
          <div className="skills-card-name">
            {" "}
            <DiMongodb
              className="skills-card-img"
              color="var(--light-red)"
            />{" "}
            MongoDb
          </div>
        </li>
        <li className="skills-card">
          <div className="skills-card-name">
            <DiHtml5 className="skills-card-img" color="var(--light-red)" />{" "}
            HTML
          </div>
        </li>
        <li className="skills-card">
          <div className="skills-card-name">
            <SiCss3 className="skills-card-img" color="var(--light-red)" /> CSS
          </div>
        </li>
        <li className="skills-card">
          <div className="skills-card-name">
            <FaJava
              className="skills-card-img"
              fontSize={"27px"}
              color="var(--light-red)"
            />{" "}
            Java
          </div>
        </li>
        <li className="skills-card">
          <div className="skills-card-name">
            <BiCodeAlt
              className="skills-card-img"
              fontSize={"27px"}
              color="var(--light-red)"
            />{" "}
            DSA
          </div>
        </li>
        <li className="skills-card">
          <div className="skills-card-name">
            <TbBrandCpp className="skills-card-img" color="var(--light-red)" />{" "}
            C++
          </div>
        </li>
      </ul>
      <p data-aos="fade-up" style={{ marginTop: "3rem" }}>
        Here are a few Tools I’ve been working with recently:
      </p>
      <ul data-aos="fade-up" className="skills-list">
        <li className="skills-card">
          <div className="skills-card-name">
            {" "}
            <FaGitSquare
              className="skills-card-img"
              color="var(--light-red)"
            />{" "}
            Git
          </div>
        </li>
        <li className="skills-card">
          <div className="skills-card-name">
            <TbBrandVscode
              className="skills-card-img"
              fontSize={"25px"}
              color="var(--light-red)"
            />{" "}
            VScode
          </div>
        </li>
        <li className="skills-card">
          <div className="skills-card-name">
            <SiPostman className="skills-card-img" color="var(--light-red)" />{" "}
            Postman
          </div>
        </li>
      </ul>
    </section>
  );
};
