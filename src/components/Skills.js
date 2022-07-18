import React from "react";
import skill from "../skillsData";

const Skills = () => {
  return (
    <>
      <section className="container interests  p-5 mt-5" id="skills">
        <h1 className="display-1">Skills</h1>
        <div className="row">
          {skill.map(({ id, name, logo }) => {
            return (
              <>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                  <div className="icon-box">
                    {logo}
                    <h3>{name}</h3>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
