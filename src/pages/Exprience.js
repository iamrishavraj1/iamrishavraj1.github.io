import React, { useEffect } from "react";
import exprience from "../exprienceData";

const Exprience = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <section className="container interests pt-5 pb-5 ">
        <h1 className="display-1 mt-5 " id="work">
          Experience
        </h1>
        <div className="row d-flex">
          <div className="col-md-12 ">
            <div className="mt-3">
              {exprience.map(
                ({ id, post, company, date, details, tools, links }) => {
                  return (
                    <>
                      <div className="py-4 company-box p-3 m-3">
                        <div className="desc">
                          <h6 className="display-6">{post}</h6>
                          <p className="expriencePara">
                            <a href={links} target="_blank" rel="noreferrer">
                              {company}
                            </a>
                          </p>
                        </div>
                        <div>
                          <p>{date}</p>
                        </div>
                        <div>
                          <p className="lead ">
                            {details} <br /> {tools}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exprience;
