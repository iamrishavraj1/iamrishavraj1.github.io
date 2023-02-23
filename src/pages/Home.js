import React, { useEffect } from "react";
import about from "../aboutData";
import SocialIcon from "../components/SocialIcon";


const Home = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      {about.map(({ id, Name, info, img }) => {
        return (
          <>
            <section className="container mt-3 " id="home-section" key={id}>
              <div className="row section">
                <div className="col-lg-8 text-left">
                  <h1 className="display-1">{Name}</h1>
                  <p className="lead">{info}</p>
                  <SocialIcon />
                </div>
                <div className="col-sm-4">
                  <picture>
                    <img
                      src={img}
                      alt={Name}
                      width="100%"
                      className="img-fluid my-auto pb-5  rounded-circle"
                    />
                  </picture>
                </div>
              </div>
 
            </section>
     
          </>
        );
      })}
    </>
  );
};

export default Home;
