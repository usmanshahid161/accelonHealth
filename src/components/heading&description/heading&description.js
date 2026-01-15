import React from 'react';
import "./heading&description.scss";

const HeadingDescription = ({ heading, description }) => {
  return <div
    data-aos="fade-up"
    data-aos-once="false"
    className={"HeadingDescriptionContainer"}>
    <h1>{ heading }</h1>
    { description && <p>{ description }</p> }
    <hr style={ {
      width: "10%",
      height: 4,
      backgroundColor: "var(--primary-color)",
      borderRadius: 2,
      marginTop: 20,

    } } />
  </div>;
}
export default HeadingDescription;