import React from "react";

const PictureBlock = (props) => {
  return (
    <div>
      <img className={props.class} src={props.src} alt={props.alt} />
    </div>
  );
};
export default PictureBlock;
