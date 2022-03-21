import React from "react";

import "../styles/About.css";
import photo from "../assets/moi.jpg";

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About me</h2>
      <div className="about-content">
        <div className="about-left">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              ipsam placeat nostrum necessitatibus! Assumenda blanditiis fugit
              nulla natus itaque nam, repudiandae eius perspiciatis, fuga
              voluptate quae debitis excepturi exercitationem accusamus!
              Officiis iure vitae quia nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              perferendis in, quam unde nisi molestias maxime laborum quidem,
              repellat quas adipisci temporibus possimus, quis harum vitae
              repudiandae? Sequi, magnam molestias?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              eaque dolore veritatis magni molestiae.
            </p>
            <p>Here is a few technologies I've been working with recently:</p>
          </div>
          <ul>
            <li>C/C++</li>
            <li>Python</li>
            <li>Java</li>
            <li>Javascript</li>
            <li>HTML/CSS</li>
            <li>React.js</li>
            <li>SQL</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className="about-right">
          <img src={photo} alt="MA GROSSE TETE" />
        </div>
      </div>
    </section>
  );
};

export default About;
