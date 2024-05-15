import React from "react";
import profile from "../hero/Asset/eHIq8czY_400x400.jpg";
import "./about.css";
const About = () => {
  return (
    <>
      <section id="About-me">
        <div className="about-text">
          <h1>
            About <span style={{ color: "darkcyan" }}>Me</span>
          </h1>
        </div>
        <div className="about-container">
          <img src={profile} alt="My Profile" className="profile" />
          <div className="abouts">
            <p className="about-desc">
              Hello! I'm Prince Mucyo, a passionate software developer from
              Rwanda. <br></br>
              With a knack for problem-solving, I specialize in web and backend
              development, <br></br>
              crafting efficient and user-friendly solutions.<br></br>
              My vision is to create impactful software that addresses
              real-world needs. <br></br>I actively contribute to open source
              projects and love connecting with fellow developers.<br></br>
              Let's innovate and code together! 🚀{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
