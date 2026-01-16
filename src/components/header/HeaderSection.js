import { Image }       from 'antd';
import React           from 'react';
import ButtonComponent from '../button/Button';
import "./HeaderSection.scss";

const HeaderSection = ({ backImg, heading, subheading, buttonFunc, buttonTitle, directionFromLeft }) => {
  return (<div
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    className={ "headerContainer" } style={ {
    flexDirection: directionFromLeft ? 'row-reverse' : 'row',
  } }>
    <div className={ "left" }>
      <Image src={ `${ backImg }` } preview={ false } style={ {
        width: "100%",
        objectFit: "cover"
      } }/>
    </div>
    <div className={ "right" }>
      <div className={ "rightContent" }>
        <h1>{ heading }</h1>
        <p>{ subheading }</p>
        <ButtonComponent
          style={ {
            height: 60,
            width: "100%",
            background: "linear-gradient(to right, #1C2460, #0077C7)"
          } }>
          { buttonTitle }
        </ButtonComponent>
      </div>
    </div>
  </div>)
}

export default HeaderSection;