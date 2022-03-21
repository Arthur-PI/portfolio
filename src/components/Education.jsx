import React, { useState } from "react";
import EduCard from "./EduCard";

import "../styles/Education.css";

const Education = () => {
  const [selected, setSelected] = useState(1);
  return (
    <section id="education" className="edu-section">
      <h2 className="section-title">Education</h2>
      <div className="inner">
        <div className="edu-menu">
          <button
            onClick={() => setSelected(1)}
            className={selected == 1 ? "active" : ""}
          >
            Baccalaureat
          </button>
          <button
            onClick={() => setSelected(2)}
            className={selected == 2 ? "active" : ""}
          >
            DUT
          </button>
          <button
            onClick={() => setSelected(3)}
            className={selected == 3 ? "active" : ""}
          >
            Master
          </button>
        </div>
        <div className="edu-right">
          <EduCard index={selected} />
        </div>
      </div>
    </section>
  );
};

export default Education;
