import React from 'react';
import "./cardsWOBg.scss";

const CardsWOBg = ({ heading, description, background, alignLeft, backgroundClr, color }) => {
  return <div
    data-aos="flip-up"
    data-aos-once="false"
    className={ "CardsWOBgContainer" } style={ {
    backgroundColor: background && backgroundClr ? backgroundClr : background ? "#E8E9EF" : "",
    borderRadius: 10,
    textAlign: alignLeft && "start",
    color: color && color
  } }>
    <div style={{
      padding: 30,
    }}>
      <h2>{ heading }</h2>
      <p>{ description }</p>
    </div>
  </div>
}

export default CardsWOBg;