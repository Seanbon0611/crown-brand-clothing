import React from "react";
import { ReactComponent as GitHub } from "../../assets/icon/icons8-github.svg";
import { ReactComponent as LinkedIn } from "../../assets/icon/icons8-linkedin.svg";
import "./contact.styles.scss";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Name: Sean Dever</h1>
      <h2>Email: seandever.developer@gmail.com</h2>
      <div className="socials">
        <h2 className="linkedin">
          Linkedin:{" "}
          <a
            href="https://www.linkedin.com/in/sean-dever/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        </h2>
        <h2 className="github">
          Github:{" "}
          <a
            href="https://github.com/Seanbon0611"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default ContactPage;
