import React from "react";
import PictureBlock from "./Components/PictureBlock";
import ProfilePic from "./images/background-image.jpeg";

const AboutMe = (props) => {
  return (
    <div className="about-me-container">
      <h1 className="header">About Me</h1>
      <PictureBlock class="picture-size" src={ProfilePic} alt="me" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus sunt,
        enim inventore possimus expedita asperiores pariatur nulla et ad quia
        temporibus voluptatem illum, velit soluta sit quis magnam numquam?
        Maiores magnam iste sed, laborum facere, dolor veniam consequatur eius
        ducimus eum, fugiat rem iure sit?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus sunt,
        enim inventore possimus expedita asperiores pariatur nulla et ad quia
        temporibus voluptatem illum, velit soluta sit quis magnam numquam?
        Maiores magnam iste sed, laborum facere, dolor veniam consequatur eius
        ducimus eum, fugiat rem iure sit?
      </p>
    </div>
  );
};
export default AboutMe;
