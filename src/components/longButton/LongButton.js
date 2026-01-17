import React           from 'react';
import "./LongButton.scss";
import ButtonComponent from '../button/Button';

const LongButton = ({ text, buttonTitle }) => {
  return <div>
    <div className={ "longButtonContainer" }>
      <p>{ text }</p>
      <ButtonComponent style={ {
        background: "transparent",
        border: "1px solid white",
        color: "white",
        height: 40,
        fontWeight: "400",
        fontSize: 16,
        padding: "0px 20px 0px 20px",
      } }>{ buttonTitle }</ButtonComponent>
    </div>
  </div>
}

export default LongButton;