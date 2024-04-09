import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  jobit,
  tripguide,
  threejs,
  Mine_Wine,
  Bhatt_Estate,
} from "../assets";

import java from "../assets/tech/java.png";
import cpp from "../assets/tech/cpp.png";
import bluemercury from "../assets/bluemercury.png";

import unacademy from "../assets/company/unacademy.png";
import masai from "../assets/company/masai.png";
import three from "../assets/tech/three.webp";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skill",
    title: "Skills",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    fileName: "Kamlesh_Bhatt_resume.pdf",
    originName: "Kamlesh_Bhatt_resume.pdf",
    fileUrl: "../assets/Kamlesh_Bhatt_resume.pdf",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Computer Applications Educator",
    company_name: "Unacademy",
    icon: unacademy,
    iconBg: "#383E56",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Designed and developed appropriate curriculum for teaching HTML and CSS to children, ensuring a structured and engaging learning experience.",
      "Tailored teaching approaches to address individual learning needs, ensuring each student's success in grasping fundamental Computer Applications principles.",
      "Maintained open communication with students, providing regular updates on their progress, achievements, and areas for improvement.",
    ],
  },
  {
    title: "Assessment Assistant",
    company_name: "Masai",
    icon: masai,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Current",
    points: [
      "Conducting comprehensive technical interviews in areas including Data Structures and Algorithms, Frontend technologies, and general technical rounds.",
      "Evaluating candidates' technical proficiency, problem-solving abilities, and coding skills to assess their suitability for specific roles within the company.",
      "Demonstrating strong communication skills in explaining technical concepts, problem statements, and coding challenges during interviews.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bluemercury Clone",
    description:
      "Bluemercury is an E-commerce company have domain around cosmetic's",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: bluemercury,
    source_code_link:
      "https://github.com/Kamlesh-Bhatt-52625/Bluemercury-Clone",
    live_hosted_link: "https://bluemercury-clone-masai.netlify.app/",
  },
  {
    name: "Mine Wine",
    description:
      "Mine Wine is a collection of different types of wines from around the world.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Mine_Wine,
    source_code_link: "https://github.com/nikitaGupta2106/Online-Wine-Shop",
    live_hosted_link: "https://mine-wine-polytechnic.netlify.app/",
  },
  {
    name: "Bhatt Estate",
    description:
      "Built MERN real estate demo for streamlined property listings and user interaction.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: Bhatt_Estate,
    source_code_link: "https://github.com/Kamlesh-Bhatt-52625/mern-estate",
    live_hosted_link: "https://bhatt-estate.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
