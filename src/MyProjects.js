import React from "react";
import PictureBlock from "./Components/PictureBlock";
import Project1 from "./images/my-projects-1.jpg";
import Project2 from "./images/my-projects-2.jpeg";

const MyProjects = (props) => {
  return (
    <div className="my-projects-container">
      <h1 className="header">My Projects</h1>
      <div className="my-projects-row">
        <PictureBlock
          class="my-projects-picture"
          src={Project1}
          alt="project-1"
        />
        <p className="my-projects-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          sunt, enim inventore possimus expedita asperiores pariatur nulla et ad
          quia temporibus voluptatem illum, velit soluta sit quis magnam
          numquam? us expedita asperiores pariatur nulla et ad quia temporibus
          voluptatem illum, velit soluta sit quis magnam numquam? Maiores magnam
          iste sed, laborum facere, dolor veniam consequat Maior
        </p>
      </div>
      <div className="my-projects-row">
        <PictureBlock
          class="my-projects-picture"
          src={Project2}
          alt="project-2"
        />
        <p className="my-projects-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          sunt, enim inventore possimus expedita asperiores pariatur nulla et ad
          quia temporibus voluptatem illum, velit soluta sit quis magnam
          numquam? Maiores magnam iste sed, laborum facere, dolor veniam
          consequatur eius ducimus eum, fugiat rem iure sit? s expedita
          asperiores pariatur nulla et ad quia temporibus voluptatem illum,
          velit soluta si us expedita asperiores pariatur nulla et ad quia
          temporibus voluptatem illum, velit soluta sit quis magnam numquam?
          Maiores magnam iste sed, laborum facere, dolor veniam consequat
        </p>
      </div>
    </div>
  );
};
export default MyProjects;
