import React from 'react';
import "./comtentBox.scss";

const ContentBox = ({ children, style }) => {
  return <div style={style} className={"contentBoxContainer"}>
    { children }
  </div>
}

export default ContentBox