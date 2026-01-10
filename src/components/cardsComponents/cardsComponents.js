import { Image } from 'antd';
import React     from 'react';
import "./cardComponents.scss";
import ButtonComponent from '../button/Button';


const CardComponent = ({heading, description, image, index, buttonText, buttonStyle}) => {
  return <div className={`cardComponent ${index % 2 !== 0 ? "reverse" : ""}`}>
        <div className={"left"}>
          <div className={"leftContent"}>
            <hr/>
            <div className={"data"}>
              <h1>{heading}</h1>
              <p>{description}</p>
              <div className={"marginFromTop"}/>
              {
                buttonText && <ButtonComponent
                  style={buttonStyle}
                >
                  { buttonText }
                </ButtonComponent>
              }
            </div>
          </div>
        </div>
        <div className={"right"}>
        <Image preview={false} className={"imageRight"} src={`${image}`}/>
        </div>
  </div>
}

export default CardComponent;