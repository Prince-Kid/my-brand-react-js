import React from "react";
import "./adminNav.css";
import { useState } from "react";
import menu from "./asset/menu.png";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
const AdminNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <h1>
        Prince <span style={{ color: "darkcyan" }}>.</span>
      </h1>
      <div className="desktopMenu">
        <NavLink
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </NavLink>
        <NavLink
          to="/admin"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Manage Blogs
        </NavLink>
        <NavLink
          to="message"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Messages
        </NavLink>
      </div>

      <img
        src={menu}
        alt="menu"
        className="mbMenu imag"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <NavLink
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </NavLink>
        <NavLink
          to="/admin"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Manage Blogs
        </NavLink>
        <NavLink
          to="message"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Messages
        </NavLink>
      </div>
    </nav>
  );
};

export default AdminNav;
