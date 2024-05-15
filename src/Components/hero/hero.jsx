import React from "react";
import profile from "./Asset/eHIq8czY_400x400.jpg";

import "./hero.css";
const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="herocontent">
          <span className="hello">Hello,</span>
          <span className="hellotext">
            I'm <span className="helloname">Prince Mucyo</span>
            <br />
            Web Developer
          </span>
          <p className="herodesc">
            Iam a skilled Web Developer With Experience <br />
            in creating Visual appealing and user friendly websites
          </p>
          <div className="but">
            <button className="btni">
              <a href="#contactpage">Hire Me &#128187;</a>
            </button>
            <a href="https://drive.google.com/file/d/1rePoRrTT9Eq0YOnu_JZaevN-FE7I0WTG/view?usp=drive_link">
              <button className="btni">
                My Resume <i className="fa-regular fa-file"></i>
              </button>
            </a>
          </div>
        </div>
        <img src={profile} alt="My Profile" className="bg" />
      </section>
    </>
  );
};

export default Hero;
