"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import "../CSS/Nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="nav">
      <div id="name">Bushra</div>

      {/* menu icon  mobile */}
      <div id="menu" onClick={toggleMenu}>
        <IoMenu size={30} />
      </div>

      {/* nav link */}
      <ul className={isMenuOpen ? "nav-visible" : ""}>
        <li className="menuLink">
          <a href="#hero">HOME</a>
        </li>
        <li className="menuLink">
          <a href="#about">ABOUT</a>
        </li>

        <li className="menuLink">
          <a href="#contact">CONTACTS</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
