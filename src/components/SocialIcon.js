import React from "react";
import SocialIcons from "../socialMediaIcons";

const SocialIcon = () => {
  return (
    <>
      {SocialIcons.map(({ logo, link }) => {
        return (
          <>
            <ul className="social-links list-unstyled mt-4 text-center ">
              <li>
                <a  className="icon-class" href={link} target="_blank" rel="noreferrer">
                  {logo}
                </a>
              </li>
            </ul>
          </>
        );
      })}
    </>
  );
};

export default SocialIcon;
