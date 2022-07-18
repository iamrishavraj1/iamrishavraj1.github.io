import {
  AiFillHtml5,
  DiCss3,
  FaJava,
  SiCplusplus,
  FaReact,
  SiJavascript,
  SiBootstrap,
  FaSass,
  SiJquery,
  FaLess,
  FaGitAlt,
  SiAutodesk,
} from "react-icons/all";

const skill = [
  {
    id: 1,
    name: "HTML",
    logo: <AiFillHtml5 className="tech-icon" size="50px" />,
  },
  {
    id: 2,
    name: "CSS",
    logo: <DiCss3 className="tech-icon" size="50px" />,
  },

  {
    id: 3,
    name: "JavaScript",
    logo: <SiJavascript className="tech-icon" size="50px" />,
  },
  {
    id: 4,
    name: "React",
    logo: <FaReact className="tech-icon" size="50px" />,
  },
  {
    id: 5,
    name: "Bootstrap",
    logo: <SiBootstrap className="tech-icon" size="50px" />,
  },
  {
    id: 6,
    name: "Sass",
    logo: <FaSass className="tech-icon" size="50px" />,
  },

  {
    id: 7,
    name: "less",
    logo: <FaLess className="tech-icon" size="50px" />,
  },
  {
    id: 8,
    name: "JQuery",
    logo: <SiJquery className="tech-icon" size="50px" />,
  },
  {
    id: 9,
    name: "git",
    logo: <FaGitAlt className="tech-icon" size="50px" />,
  },
  {
    id: 10,
    name: "Java",
    logo: <FaJava className="tech-icon" size="50px" />,
  },

  {
    id: 11,
    name: "Autocad",
    logo: <SiAutodesk className="tech-icon" size="50px" />,
  },
  {
    id: 12,
    name: "C++",
    logo: <SiCplusplus className="tech-icon" size="50px" />,
  },
];

export default skill;
