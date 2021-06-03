import React from "react";
import PictureBlock from "./Components/PictureBlock";
import Contact1 from "./images/contact-me-1.jpg";
import Contact2 from "./images/contact-me-2.jpeg";

const ContactMe = (props) => {
  return (
    <div className="my-projects-container">
      <h1 className="header">Contact Me</h1>
      <div className="my-projects-row">
        <PictureBlock
          class="my-projects-picture"
          src={Contact1}
          alt="contact-1"
        />
        <p className="my-projects-text">My LinkedIN</p>
      </div>
      <div className="my-projects-row">
        <PictureBlock
          class="my-projects-picture"
          src={Contact2}
          alt="contact-2"
        />
        <p className="my-projects-text">My GitHub</p>
      </div>
    </div>
  );
};
export default ContactMe;
