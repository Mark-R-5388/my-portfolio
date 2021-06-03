import React from "react";

const LinkBlock = (props) => {
  return (
    <div>
      <p>Will be a link</p>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};
export default LinkBlock;
