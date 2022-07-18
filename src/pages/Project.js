import React, { useEffect } from "react";
import project from "../projectData";

const Project = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <section className="container " id="projects">
        <h1 className="display-1 mt-5">Some Things I've Built</h1>
        <div className="row mt-5 mb-5 ">
          {project.map(({ id, image, links }) => {
            return (
              <>
                <div className="col-md-6 p-4" key={id}>
                  <div className="blog-entry">
                    <a href={links} target="_blank" rel="noreferrer">
                      <img
                        className="img-fluid  shadow-lg"
                        src={image}
                        alt="rishavraj"
                      />
                    </a>
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

export default Project;
