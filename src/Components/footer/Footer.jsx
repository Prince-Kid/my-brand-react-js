import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div class="container flexSB">
        <div class="box logo">
          <h1>Prince M</h1>

          <p>I'm Prince Mucyo, a passionate software developer from Rwanda.</p>
          <div class="socialMedia links">
            <a
              href="https://wa.link/v7lbdi"
              class="linkedIn"
              style={{ "--color": "#48C857" }}
            >
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mucyo-prince-29321421b/"
              class="linkedIn"
              style={{ "--color": "#0072b1" }}
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/mucyoprince12/"
              class="instagram"
              style={{ "--color": "#E1306c" }}
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://web.facebook.com/johnx.prince"
              class="facebook"
              style={{ "--color": "#4267B2" }}
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/mucyoprince12"
              class="twitter"
              style={{ "--color": "#01C2F7" }}
            >
              <i class="fa-brands fa-twitter"></i>
            </a>

            <a
              href="https://github.com/Prince-Kid"
              class="github"
              style={{ "--color": "white" }}
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div class="box links">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#About-me">About Us</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </div>
        <div class="box links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#project">portifolio</a>
            </li>
            <li>
              <a href="#contactpage">contact</a>
            </li>
            <li>
              <a href="login.html">Login</a>
            </li>
          </ul>
        </div>

        <div class="box last">
          <h3>Have a Questions ?</h3>
          <ul>
            <li>
              <i class="fa fa-map"></i>
              Rubavu,Rwanda
            </li>
            <li>
              <i class="fa fa-phone"></i>
              +250783154587
            </li>
            <li>
              <i class="fa fa-paper-plane"></i>
              mucyoprinc@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div class="legal">
        <p>
          Copyright@2024 All rights reserved | Made With{" "}
          <i class="fa fa-heart"></i> by Prince~Kid
        </p>
      </div>
    </footer>
  );
};

export default Footer;
