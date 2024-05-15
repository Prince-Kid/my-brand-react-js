import React from "react";
import "./skills.css";
const Skills = () => {
  return (
    <>
      <section id="skills">
        <h1 class="title">
          My <span style={{ color: "darkcyan" }}>Skills</span>
        </h1>
        <div class="skills-container">
          <div class="skill-box">
            <p class="skills-desc">
              <h2>UI/UX Design</h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              iste ab commodi inventore possimus similique aliquam tenetur
              quidem asperiores? Blanditiis nam cumque quam laboriosam quae ex
              accusamus illum enim facere.
            </p>
            <button class="skill-btn">Read More</button>
          </div>

          <div class="skill-box">
            <div class="skill-img"></div>
            <p class="skills-desc">
              <h2>Web Dev</h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              iste ab commodi inventore possimus similique aliquam tenetur
              quidem asperiores? Blanditiis nam cumque quam laboriosam quae ex
              accusamus illum enim facere.
            </p>
            <button class="skill-btn">Read More</button>
          </div>

          <div class="skill-box">
            <div class="skill-img"></div>
            <p class="skills-desc">
              <h2>Digital Marketing</h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              iste ab commodi inventore possimus similique aliquam tenetur
              quidem asperiores? Blanditiis nam cumque quam laboriosam quae ex
              accusamus illum enim facere.
            </p>
            <button class="skill-btn">Read More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
