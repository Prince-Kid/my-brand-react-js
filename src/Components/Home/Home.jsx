import React from "react";
import Navbar from "../nav-bar/navbar";
import Hero from "../hero/hero";
import About from "../about/about";
import Skills from "../skills/skills";
import Project from "../projects/Projects";
import Blogs from "../blogs/Blogs";
import Contact from "../contact/Contact";
import Subscribe from "../subscribe/Subscribe";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Blogs />
      <Subscribe />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
