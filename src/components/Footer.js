import React from "react";
import SocialIcon from "./SocialIcon";
const Footer = () => {
  return (
    <>
      <hr />
      <section className="container interests text-center" id="contact">
        <div className="text-left">
          <div className="pt-5">
            <h1 className="mb-5">Let's Connect with me</h1>
            <h4 className="mb-5 h4">
              My inbox is always open. Whether you have a question or just want
              to say
              <br />
              hello, I'll try my best to get back to you! Feel free to contact
              me about any <br /> relevant internship/job updates.{" "}
            </h4>
            <SocialIcon />
          </div>
        </div>
        <div className="mt-5 mb-5 text-center">
          <h1>Make with 🧡 by Rishav Raj</h1>
        </div>
      </section>
    </>
  );
};

export default Footer;
