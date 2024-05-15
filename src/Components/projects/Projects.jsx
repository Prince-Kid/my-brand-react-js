import React from "react";
import project1 from "./Assets/9859ac7228ee8ed96842f618816710b9.jpg";
// import project2 from "./Assets/Education.PNG";
// import project3 from "./Assets/inyange.PNG";
// import project4 from "./Assets/school.PNG";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <section class="portifolio" id="project">
        <div class="main-text">
          <h1 class="title">
            My <span style={{ color: "darkcyan" }}>Projects</span>
          </h1>
        </div>
        <div class="portifolio-content">
          <div class="row">
            <img src={project1} alt="First Projects" />
            <div class="layer">
              <h5>School</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                ipsa, sapiente reiciendis sit necessitatibus vel, cum repellat
                libero minus molestias aperiam dolorum minima quaerat dolor at
                optio sunt numquam fugiat.
              </p>
              <button class="demo">Demo</button>
            </div>
          </div>
          <div class="row">
            <img src={project1} alt="" />
            <div class="layer">
              <h5>School</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                ipsa, sapiente reiciendis sit necessitatibus vel, cum repellat
                libero minus molestias aperiam dolorum minima quaerat dolor at
                optio sunt numquam fugiat.
              </p>
              <button class="demo">Demo</button>
            </div>
          </div>
          <div class="row">
            <img src={project1} alt="" />
            <div class="layer">
              <h5>School</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                ipsa, sapiente reiciendis sit necessitatibus vel, cum repellat
                libero minus molestias aperiam dolorum minima quaerat dolor at
                optio sunt numquam fugiat.
              </p>
              <button class="demo">Demo</button>
            </div>
          </div>
          <div class="row">
            <img src={project1} alt="" />
            <div class="layer">
              <h5>School</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                ipsa, sapiente reiciendis sit necessitatibus vel, cum repellat
                libero minus molestias aperiam dolorum minima quaerat dolor at
                optio sunt numquam fugiat.
              </p>
              <button class="demo">Demo</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
