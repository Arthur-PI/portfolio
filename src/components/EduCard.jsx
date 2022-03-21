import React from "react";

const EduCard = ({ index }) => {
  const data = [
    {
      title: "Scientific Baccalauréat",
      establishement: "Lycée Diderot",
      start: "September 2016",
      end: "July 2019",
      texts: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      title: "DUT Informatique",
      establishement: "IUT Paris Descartes",
      start: "September 2019",
      end: "July 2021",
      texts: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      title: "Computer Science engineering",
      establishement: "Efrei Paris",
      start: "September 2021",
      end: "Present",
      texts: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
  ];
  return (
    <div className="edu-card">
      <h3>
        <span>{data[index - 1].title}</span>{" "}
        <span className="establishement">
          @ {data[index - 1].establishement}
        </span>
      </h3>
      <p className="dates">
        {data[index - 1].start} - {data[index - 1].end}
      </p>
      <div>
        <ul>
          {data[index - 1].texts.map((text, key) => {
            return <li key={key}>{text}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default EduCard;
