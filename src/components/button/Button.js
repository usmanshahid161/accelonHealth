import React from "react";
import { Button } from "antd";
import "./Buttons.scss";

const ButtonComponent = ({
                           type = "primary",
                           size = "large",
                           shape = "round",
                           color = "linear-gradient(to right, #1C2460, #0077C7)",
                           height=60,
                           children,
                           style,
                           ...props
                         }) => {
  return (
    <Button
      className="buttonComponent"
      type={type}
      size={size}
      shape={shape}
      color={color}
      style={ style || {
        background: color,
        borderColor: color,
        height:height || 60,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
