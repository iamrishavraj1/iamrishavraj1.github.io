import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillCodepenCircle,
  AiOutlineTwitter,
  AiOutlineInstagram,
  FaDev,
} from "react-icons/all";

const SocialIcons = [
  {
    id: 1,
    logo: <AiOutlineMail className="tech-icon" size="50px" />,
    link: "mailto:iamrisharaj1@gmail.com",
  },
  {
    id: 2,
    logo: <AiFillGithub className="tech-icon" size="50px" />,
    link: "https://github.com/iamrishavraj1",
  },
  {
    id: 3,
    logo: <AiFillLinkedin className="tech-icon" size="50px" />,
    link: "https://www.linkedin.com/in/iamrishavraj1",
  },
  {
    id: 4,
    logo: <AiFillCodepenCircle className="tech-icon" size="50px" />,
    link: "https://codepen.io/iamrishavraj1",
  },
  {
    id: 5,
    logo: <AiOutlineTwitter className="tech-icon" size="50px" />,
    link: "https://twitter.com/iamrishavraj1",
  },
  {
    id: 6,
    logo: <AiOutlineInstagram className="tech-icon" size="50px" />,
    link: "https://www.instagram.com/iamrishavraj",
  },
  {
    id: 7,
    logo: <FaDev className="tech-icon" size="50px" />,
    link: "https://dev.to/iamrishavraj1",
  },
];

export default SocialIcons;
