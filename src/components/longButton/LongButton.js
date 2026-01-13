import React from 'react';
import "./LongButton.scss";
import ButtonComponent from '../button/Button';

const LongButton = ({text, buttonTitle}) => {
  return <div className={"longButtonContainer"}>
    <p>{text}</p>
    <ButtonComponent style={ {
      background: "transparent",
      border: "1px solid white",
      color: "white",
      height: 48,
    } }>{buttonTitle}</ButtonComponent>
  </div>
}

export default LongButton;