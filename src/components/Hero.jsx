import React from "react";

import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h1>Hi, my name is</h1>
      </div>
      <div>
        <h2>Arthur Pigeon.</h2>
      </div>
      <div>
        <h3>I code little things for everything.</h3>
      </div>
      <div>
        <p>
          I'm a computer science student specialized in cybersecurity. I also
          enjoy doing all sorts of programming and currently living in France
        </p>
      </div>
      <div className="github button">
        <a href="https://github.com/Arthur-PI" target="_blank">
          Check out my Github!
        </a>
      </div>
    </section>
  );
};

export default Hero;
