import React from "react";
import { Button } from "antd";
import "./Buttons.scss";

const ButtonComponent = ({
                           type = "primary",
                           size = "large",
                           shape = "round",
                           color = "linear-gradient(to right, #1C2460, #0077C7)",
                           height = 60,
                           children,
                           actionFunc,
                           style,
                           ...props
                         }) => {

  const defaultAction = () => {
    window.open(
      "https://calendly.com/contact-accelonhealth/30min",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleClick = () => {
    if (typeof actionFunc === "function") {
      actionFunc();
    } else {
      defaultAction();
    }
  };

  return (
    <Button
      className="buttonComponent"
      type={type}
      size={size}
      shape={shape}
      onClick={handleClick}
      style={{
        height:60,
        background: color,
        ...style,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
