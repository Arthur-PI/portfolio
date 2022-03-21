import React from "react";
import "../styles/Header.css";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Logo />
        </div>
        <div className="menu">
          <ol className="menu-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ol>
          <div className="menu-resume button">
            <a href="/CV.pdf" target="_blank">Resume</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
