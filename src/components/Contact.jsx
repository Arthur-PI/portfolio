import React, { useRef } from "react";

import "../styles/Contact.css";

const Contact = () => {
  const text = useRef(null);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(text.current.value);
    text.current.value = "";
  };
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">What's Next ?</h2>
      <h2 className="contact-subtitle">Get In Touch</h2>
      <p>
        I'm currently studying but I am open for propositions and freelance opportunities
        and my inbox is always open. If you have any question or jsut want to say a word, you
        can contact me here and I'll try my best to answer back as soon as possible.
      </p>
      <textarea ref={text} type="text" placeholder="Your message here...." />
      <div className="button">
        <a href="#" onClick={sendMessage}>
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
