import React from "react";
import "./ContentImageBox.scss";
import defaultImage from "../../assets/images/same.jpg"

const ContentImageBox = ({ children, backImg, fullHeight, shaded }) => {
  return (
    <div
      className={`contentImageBox ${fullHeight && shaded ? "fullHeightShaded"  : fullHeight ? "fullHeight": shaded ? "shaded" : ""}`}
      style={{ backgroundImage: `url(${backImg || defaultImage})` }}
    >
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default ContentImageBox;
