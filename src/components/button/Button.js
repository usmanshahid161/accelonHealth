import React      from "react";
import { Button } from "antd";

const ButtonComponent = ({
                           type = "primary",   // default type
                           size = "large",     // default size
                           shape = "round",
                           color = "var(--primary-color)", // CSS variable
                           children,
                           style,
                           ...props
                         }) => {
  return (
    <Button
      type={ type }
      size={ size }
      shape={ shape }
      style={ style || { background: color, borderColor: color, height:60, width:"100%" } } // apply color
      { ...props }
    >
      { children }
    </Button>
  );
};

export default ButtonComponent;
