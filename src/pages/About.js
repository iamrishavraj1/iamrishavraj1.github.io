import React, { useEffect } from "react";
import about from "../aboutData";
import Skills from "../components/Skills";

const About = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      {about.map(({ describe, detail,resume}) => {
        return (
          <>
            <section className="container section my-5">
              <div className="row">
                <div className="col-sm-12">
                  <h2 className="display-2">{describe}</h2>
                  <p className="lead"> {detail} </p>
                  <button className="btn btn-block btn-lg">
                    <a href={resume} className="resume-btn" target="_blank" rel="noreferrer">
                      Resume
                    </a>
                  </button>
                </div>
              </div>
            </section>
          </>
        );
      })}

      <Skills />
    </>
  );
};

export default About;
